import { fetchWithRetries, isHealthyStation, getGenreColor } from './utils.js';
import { getPremiumStations } from './premiumStations.js';

const API_BASE = 'https://de1.api.radio-browser.info/json';
const FALLBACK_API = 'https://nl1.api.radio-browser.info/json';

let allStations = [];
let stationMap = new Map();

const THEMATIC_TAGS = [
  // Decade-based modern
  '2010s', '2020s', '2010', '2020', '10s', '20s', 'modern', 'now',
  // Decades retro
  '80s', '90s', '70s', '2000s', '60s',
  // Pop / charts
  'pop', 'hits', 'charts', 'top 40', 'adult contemporary', 'mainstream',
  // Electronic
  'dance', 'electronic', 'house', 'techno', 'trance', 'edm', 'lounge', 'chillout', 'chill', 'ambient',
  // Rock/metal/indie
  'rock', 'rock alternative', 'indie', 'metal', 'punk', 'grunge', 'alternative',
  // R&B / Hip-hop / urban
  'hip hop', 'hiphop', 'rap', 'rnb', 'r&b', 'urban', 'trap',
  // Latin
  'latin', 'salsa', 'reggaeton', 'bachata', 'merengue', 'bossa nova', 'cumbia',
  // African / afro
  'afro', 'afrobeats', 'african', 'amapiano', 'afro house',
  // Soundtracks / cinematic
  'soundtrack', 'soundtracks', 'movie', 'film', 'cinema', 'orchestral', 'score', 'ost', 'game music',
  // Folk / ethno
  'folk', 'ethno', 'ethnic', 'world', 'world music', 'celtic',
  // Soul / funk / jazz / blues
  'jazz', 'blues', 'soul', 'funk', 'swing', 'bebop',
  // Country
  'country', 'americana', 'bluegrass',
  // Reggae
  'reggae', 'dub', 'ska',
  // Classical
  'classical', 'opera', 'symphony',
  // Disco / retro / oldies
  'retro', 'oldies', 'disco',
  // News / talk
  'news', 'talk',
];

async function fetchFromApi(url, onProgress, pctStart, pctEnd) {
  const res = await fetchWithRetries(url, {}, 2, 1000);
  const raw = await res.json();
  return raw;
}

export async function fetchStations(onProgress) {
  let allRaw = [];
  let usedUuids = new Set();

  // 1. Fetch top stations (most popular)
  for (const base of [API_BASE, FALLBACK_API]) {
    try {
      const topUrl = `${base}/stations/topclick/500`;
      const top = await fetchFromApi(topUrl);
      allRaw.push(...top);
      if (onProgress) onProgress(10);
      break;
    } catch (e) {
      console.warn('Top stations fetch failed:', e.message);
    }
  }

  // 2. Fetch thematic tags in parallel
  const tagPromises = THEMATIC_TAGS.map(async (tag) => {
    for (const base of [API_BASE, FALLBACK_API]) {
      try {
        const url = `${base}/stations/search?tag=${encodeURIComponent(tag)}&limit=150&hidebroken=true`;
        const res = await fetchWithRetries(url, {}, 1, 500);
        const data = await res.json();
        return data;
      } catch (e) {
        continue;
      }
    }
    return [];
  });

  try {
    const tagResults = await Promise.allSettled(tagPromises);
    tagResults.forEach((result) => {
      if (result.status === 'fulfilled' && Array.isArray(result.value)) {
        allRaw.push(...result.value);
      }
    });
  } catch (e) {
    console.warn('Tag fetches partial failure:', e.message);
  }

  if (onProgress) onProgress(40);

  // 3. Deduplicate by stationuuid
  const unique = [];
  allRaw.forEach(s => {
    if (s && s.stationuuid && !usedUuids.has(s.stationuuid)) {
      usedUuids.add(s.stationuuid);
      unique.push(s);
    }
  });

  if (onProgress) onProgress(60);

  // 4. Filter healthy stations (relaxed geo) and bitrate < 128 only if known
  const healthy = unique.filter(s => {
    if (!isHealthyStation(s, { requireGeo: false })) return false;
    const br = parseInt(s.bitrate);
    if (br > 0 && br < 128) return false;
    return true;
  });

  if (onProgress) onProgress(80);

  // 5. Map to our format, dedup by uuid again, sort by clickcount desc
  const seen = new Set();
  allStations = healthy
    .map(s => ({
      stationuuid: s.stationuuid,
      name: s.name?.trim() || 'Unnamed',
      url: s.url,
      url_resolved: s.url_resolved || s.url,
      favicon: s.favicon || '',
      country: normalizeCountry(s.country),
      countrycode: s.countrycode || '',
      language: s.language || '',
      tags: s.tags || '',
      codec: (s.codec || 'MP3').toUpperCase(),
      bitrate: parseInt(s.bitrate) || 0,
      geo_lat: parseFloat(s.geo_lat),
      geo_long: parseFloat(s.geo_long),
      clickcount: parseInt(s.clickcount) || 0,
      votes: parseInt(s.votes) || 0,
      genre: extractGenre(s.tags, s.name),
      genreColor: getGenreColor(extractGenre(s.tags, s.name)),
      health: computeHealth(s),
    }))
    .filter(s => {
      if (seen.has(s.stationuuid)) return false;
      seen.add(s.stationuuid);
      return true;
    })
    .sort((a, b) => (b.clickcount || 0) - (a.clickcount || 0))
    .slice(0, 3000);

  // 6. Prepend premium stations (curated, high-bitrate, licensed)
  const premium = getPremiumStations();
  const premiumUuids = new Set(premium.map(s => s.stationuuid));
  const apiOnly = allStations.filter(s => !premiumUuids.has(s.stationuuid));
  allStations = [...premium, ...apiOnly];

  // 7. Build lookup map
  stationMap.clear();
  allStations.forEach(s => stationMap.set(s.stationuuid, s));

  if (onProgress) onProgress(100);
  return allStations;
}

function extractGenre(tags, name) {
  const tagStr = (tags || '').toLowerCase();
  const nameStr = (name || '').toLowerCase();
  const combined = tagStr + ' ' + nameStr;

  // Priority: most specific genres first, then decades, then broad
  const genreMap = [
    // Very specific niches
    ['soundtrack', ['soundtrack', 'soundtracks', 'ost ', 'ost,', 'score', 'anime', 'game music', 'film scores', 'musical theatre', 'broadway']],
    ['afrobeats', ['afrobeats', 'afrobeat', 'amapiano', 'afro house', 'afro pop']],
    ['reggae', ['reggae', 'dancehall', 'dub', 'ska']],
    ['hip hop', ['hip hop', 'hiphop', 'hip-hop', 'rap', 'trap', 'drill', 'grime', 'boom bap']],
    ['rnb', ['rnb', 'r&b', 'neo soul']],
    ['latin', ['latin', 'salsa', 'reggaeton', 'bachata', 'merengue', 'cumbia', 'bossa nova', 'latin pop', 'urbano', 'mambo', 'tropical']],
    ['country', ['country', 'bluegrass', 'americana', 'outlaw country', 'nashville']],
    ['classical', ['classical', 'opera', 'symphony', 'orchestra', 'baroque', 'chamber music', 'requiem']],
    ['jazz', ['jazz', 'swing', 'bebop', 'smooth jazz', 'jazz funk', 'nu jazz']],
    ['blues', ['blues', 'delta blues', 'chicago blues']],
    ['gospel', ['gospel', 'worship', 'christian', 'spiritual', 'praise']],
    ['ethno', ['ethno', 'ethnic', 'celtic', 'polka', 'gypsy', 'klezmer', 'native american', 'tribal']],
    ['news', ['news', 'talk radio', 'sports talk', 'politics', 'speech', 'discussion']],
    ['lounge', ['lounge', 'chillout', 'chill', 'downtempo', 'lounge music']],

    // Decades — placed after specific genres so soundtrack/pop wins over decade
    ['2020s', ['2020s', '2020\'s', 'modern', 'now', 'current hits']],
    ['2010s', ['2010s', '2010\'s']],
    ['2000s', ['2000s', '2000\'s', 'y2k', 'millennium']],
    ['90s', ['90s', '90\'s', 'nineties']],
    ['80s', ['80s', '80\'s', 'eighties', '80er']],
    ['70s', ['70s', '70\'s', 'seventies']],
    ['60s', ['60s', '60\'s', 'sixties']],

    // Electronic families
    ['trance', ['trance', 'vocal trance', 'progressive trance', 'psytrance']],
    ['techno', ['techno', 'minimal techno', 'hard techno', 'acid techno']],
    ['house', ['house', 'deep house', 'tech house', 'progressive house', 'electro house']],
    ['edm', ['edm', 'big room', 'festival edm', 'future house']],
    ['drum and bass', ['drum and bass', 'drum & bass', 'dnb', 'jungle', 'liquid']],
    ['dubstep', ['dubstep', 'brostep', 'future bass']],
    ['electronic', ['electronic', 'electronica', 'idm', 'synthwave', 'retrowave']],

    // Rock families
    ['metal', ['metal', 'heavy metal', 'death metal', 'black metal', 'thrash', 'doom', 'metalcore']],
    ['punk', ['punk', 'punk rock', 'post-punk', 'hardcore', 'pop punk']],
    ['indie', ['indie', 'indie rock', 'indie pop', 'alternative rock', 'alt rock']],
    ['rock', ['rock', 'classic rock', 'hard rock', 'progressive rock', 'rock & roll', 'rock and roll']],

    // Pop and chart families
    ['pop', ['k-pop', 'j-pop', 'mandopop', 'cantopop', 'thai pop', 'v-pop', 't-pop', 'bollywood', 'filmi', 'kollywood', 'europop', 'latin pop', 'dance pop', 'electropop', 'synthpop', 'teen pop', 'britpop', 'power pop', 'indie pop', 'dream pop', 'art pop', 'sunshine pop', 'pop music', 'pop rock', 'pop hits']],
    ['charts', ['top 40', 'top40', 'billboard', 'hot 100', 'official charts']],
    ['hits', ['hits', 'greatest hits', 'best hits', 'hit music', 'all hits', 'top hits']],

    // Dance & disco
    ['disco', ['disco', 'discofox', 'nu disco', 'italo disco', '70s disco']],
    ['dance', ['dance', 'dance pop', 'club', 'party', 'edm dance']],

    // Other
    ['soul', ['soul', 'motown', 'northern soul']],
    ['funk', ['funk', 'funky', 'p-funk', 'electro-funk']],
    ['ambient', ['ambient', 'new age', 'space music', 'drone']],
    ['retro', ['retro', 'oldies', 'classic hits', 'golden oldies', 'oldies but goodies']],
  ];

  // Find the genre with the most specific match.
  // Specificity = sum of matched keyword lengths; tie-broken by genreMap order.
  const scores = new Map();
  for (let i = 0; i < genreMap.length; i++) {
    const [genre, keywords] = genreMap[i];
    let score = 0;
    for (const kw of keywords) {
      if (kw.length < 2) continue;
      if (combined.includes(kw)) {
        score += kw.length;
      }
    }
    if (score > 0) {
      // Use negative i to prefer earlier entries on tie
      scores.set(genre, { score, order: i });
    }
  }

  let best = null;
  for (const [genre, info] of scores) {
    if (!best || info.score > best.score || (info.score === best.score && info.order < best.order)) {
      best = { genre, ...info };
    }
  }

  if (best) return best.genre;

  // Fallback to first non-empty tag
  const tagList = tagStr.split(',').map(t => t.trim()).filter(Boolean);
  if (tagList.length > 0) return tagList[0];

  return 'misc';
}

function computeHealth(s) {
  let score = 100;
  if (!s.url?.startsWith('https')) score -= 15;
  const br = parseInt(s.bitrate);
  if (br > 0 && br < 64) score -= 10;
  if (!s.favicon) score -= 5;
  if (!s.country || s.country === 'Unknown') score -= 5;
  return Math.max(0, score);
}

const COUNTRY_MAP = {
  'the united states of america': 'USA',
  'united states of america': 'USA',
  'united states': 'USA',
  'us': 'USA',
  'the united kingdom of great britain and northern ireland': 'UK',
  'united kingdom': 'UK',
  'great britain': 'UK',
  'england': 'UK',
  'the russian federation': 'Russia',
  'russia': 'Russia',
  'czech republic': 'Czechia',
  'czechia': 'Czechia',
  'the netherlands': 'Netherlands',
  'holland': 'Netherlands',
  'the philippines': 'Philippines',
  'ivory coast': "Côte d'Ivoire",
  'korea, republic of': 'South Korea',
  'korea': 'South Korea',
  'south korea': 'South Korea',
  'brasil': 'Brazil',
  'deutschland': 'Germany',
  'españa': 'Spain',
  'italia': 'Italy',
  'méxico': 'Mexico',
  'polska': 'Poland',
  'ukraine': 'Ukraine',
  'україна': 'Ukraine',
};

function normalizeCountry(country) {
  if (!country) return 'Unknown';
  const c = country.trim();
  const lower = c.toLowerCase();
  return COUNTRY_MAP[lower] || c;
}

export function getAllStations() {
  return allStations;
}

export function getStationByUuid(uuid) {
  return stationMap.get(uuid) || null;
}

export function getFilteredStations(country, genre, query, premiumOnly = false) {
  let result = allStations;

  if (premiumOnly) {
    result = result.filter(s => s.premium === true);
  }
  if (country) {
    result = result.filter(s => s.country === country);
  }
  if (genre) {
    result = result.filter(s => s.genre === genre);
  }
  if (query) {
    const q = query.toLowerCase();
    result = result.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.country.toLowerCase().includes(q) ||
      s.genre.toLowerCase().includes(q) ||
      s.tags.toLowerCase().includes(q)
    );
  }

  return result;
}

export function getCountries() {
  const map = new Map();
  allStations.forEach(s => {
    if (!map.has(s.country)) map.set(s.country, 0);
    map.set(s.country, map.get(s.country) + 1);
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

export function getGenres() {
  const map = new Map();
  allStations.forEach(s => {
    if (!map.has(s.genre)) map.set(s.genre, 0);
    map.set(s.genre, map.get(s.genre) + 1);
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

export function getTunerStations() {
  const rock = allStations.filter(s =>
    ['rock', 'metal', 'punk', 'grunge'].includes(s.genre)
  );
  const retro = allStations.filter(s =>
    ['retro', 'oldies', '80s', '90s', '70s', '60s'].includes(s.genre)
  );
  const thematic = allStations.filter(s =>
    ['jazz', 'blues', 'classical', 'electronic', 'disco', 'dance'].includes(s.genre)
  );

  return [...rock.slice(0, 30), ...retro.slice(0, 30), ...thematic.slice(0, 20)]
    .sort(() => Math.random() - 0.5);
}
