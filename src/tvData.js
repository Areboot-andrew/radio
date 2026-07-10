import { getCountryFlag } from './utils.js';
import { filterHealthy, isStreamBroken } from './streamHealth.js';

let CHANNELS = [];
let MUSIC_CHANNELS = [];
let isLoaded = false;

export async function fetchTVPlaylists() {
  if (isLoaded) return CHANNELS;
  try {
    // Вантажимо канали та потоки динамічно
    const [channelsRes, streamsRes] = await Promise.all([
      fetch('https://iptv-org.github.io/api/channels.json').then(r => r.json()),
      fetch('https://iptv-org.github.io/api/streams.json').then(r => r.json())
    ]);

    const activeStreams = {};
    for (const s of streamsRes) {
      // Skip streams iptv-org already knows are offline; keep unknown status
      if (s.status === 'offline' || s.status === 'error' || s.status === 'timeout') continue;
      if (s.status === 'online' || s.status === undefined || s.status === null) {
        if (!s.url || isStreamBroken(s.url)) continue;
        if (!activeStreams[s.channel]) activeStreams[s.channel] = [];
        activeStreams[s.channel].push(s);
      }
    }

    const data = [];
    const music = [];

    const categoryMap = {
      'general': 'Загальні',
      'news': 'Новини',
      'music': 'Музика',
      'sports': 'Спорт',
      'movies': 'Фільми',
      'kids': 'Дитячі',
      'entertainment': 'Розважальні',
      'documentary': 'Документальні',
      'education': 'Пізнавальні',
      'lifestyle': 'Стиль життя',
      'comedy': 'Комедія',
      'religious': 'Релігія',
      'business': 'Бізнес',
      'family': 'Сімейні',
      'culture': 'Культура',
      'science': 'Наука',
      'auto': 'Авто',
      'outdoor': 'Подорожі',
      'shop': 'Магазин',
      'legislative': 'Політика',
      'animation': 'Анімація',
      'classic': 'Класика',
      'cooking': 'Кулінарія',
      'series': 'Серіали',
      'relax': 'Релакс',
      'weather': 'Погода',
      'xxx': 'Дорослі',
      'general': 'Загальнонаціональні'
    };

    const regionNames = new Intl.DisplayNames(['uk'], { type: 'region' });

    for (const ch of channelsRes) {
      const channelStreams = activeStreams[ch.id];
      if (channelStreams && channelStreams.length > 0) {
        const stream = channelStreams[0];
        const rawCategory = (ch.categories && ch.categories.length > 0) ? ch.categories[0].toLowerCase() : 'general';
        const category = categoryMap[rawCategory] || (rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1));
        
        let countryName = ch.country || 'Unknown';
        if (ch.country && ch.country.length === 2) {
          try {
            countryName = regionNames.of(ch.country.toUpperCase());
          } catch(e) {
            countryName = ch.country;
          }
        }
        
        const item = {
          id: ch.id,
          name: ch.name || 'Unknown',
          country: countryName,
          countryCode: ch.country || 'Unknown', // Keep raw code for flags
          category: category,
          url: stream.url,
          logo: ch.logo || '',
          flag: getCountryFlag(ch.country || '') || '🌐'
        };
        data.push(item);

        if (rawCategory === 'music') {
          music.push(item);
        }
      }
    }

    CHANNELS = filterHealthy(data);
    MUSIC_CHANNELS = filterHealthy(music);
    isLoaded = true;
    return CHANNELS;
  } catch (err) {
    console.error('Failed to load IPTV data:', err);
    return [];
  }
}

export function getAllTVChannels() {
  return filterHealthy(CHANNELS);
}

export function getFilteredTVChannels(countryFilter, categoryFilter, search) {
  return filterHealthy(CHANNELS).filter(ch => {
    if (countryFilter && ch.country !== countryFilter) return false;
    if (categoryFilter && ch.category !== categoryFilter) return false;
    if (search && !ch.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
}

/** Drop channel(s) with this stream URL from in-memory TV lists */
export function removeTVChannelByUrl(url) {
  if (!url) return;
  CHANNELS = CHANNELS.filter(ch => ch.url !== url && !isStreamBroken(ch));
  MUSIC_CHANNELS = MUSIC_CHANNELS.filter(ch => ch.url !== url && !isStreamBroken(ch));
}

export function getTVCountries() {
  const counts = {};
  CHANNELS.forEach(ch => {
    if (!counts[ch.country]) counts[ch.country] = 0;
    counts[ch.country]++;
  });
  return Object.entries(counts).sort((a,b) => a[0].localeCompare(b[0], 'uk'));
}

export function getTVCategories() {
  const counts = {};
  CHANNELS.forEach(ch => {
    if (!counts[ch.category]) counts[ch.category] = 0;
    counts[ch.category]++;
  });
  return Object.entries(counts).sort((a,b) => a[0].localeCompare(b[0], 'uk'));
}

export function getMusicTVChannels() {
  return filterHealthy(MUSIC_CHANNELS);
}

export function getTotalChannelCount() {
  return filterHealthy(CHANNELS).length;
}

export function getTVPlaylists() {
  return []; // deprecated, returning empty to avoid breaking old logic if any remains
}

export function getChannelForPlaylist(playlist, index = 0) {
  return null;
}
