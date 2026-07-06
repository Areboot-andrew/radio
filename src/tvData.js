import { getCountryFlag } from './utils.js';

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
      if (s.status === 'online' || s.status === undefined) {
        if (!activeStreams[s.channel]) activeStreams[s.channel] = [];
        activeStreams[s.channel].push(s);
      }
    }

    const data = [];
    const music = [];

    for (const ch of channelsRes) {
      const channelStreams = activeStreams[ch.id];
      if (channelStreams && channelStreams.length > 0) {
        const stream = channelStreams[0];
        const category = (ch.categories && ch.categories.length > 0) ? ch.categories[0] : 'General';
        const country = ch.country || 'Unknown';
        
        const item = {
          id: ch.id,
          name: ch.name || 'Unknown',
          country: country,
          countryCode: country, // we might need real code for flag
          category: category,
          url: stream.url,
          logo: ch.logo || '',
          flag: getCountryFlag(country) || ''
        };
        data.push(item);

        if (category.toLowerCase() === 'music') {
          music.push(item);
        }
      }
    }

    CHANNELS = data;
    MUSIC_CHANNELS = music;
    isLoaded = true;
    return CHANNELS;
  } catch (err) {
    console.error('Failed to load IPTV data:', err);
    return [];
  }
}

export function getAllTVChannels() {
  return CHANNELS;
}

export function getFilteredTVChannels(countryFilter, categoryFilter, search) {
  return CHANNELS.filter(ch => {
    if (countryFilter && ch.country !== countryFilter) return false;
    if (categoryFilter && ch.category !== categoryFilter) return false;
    if (search && !ch.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
}

export function getTVCountries() {
  const counts = {};
  CHANNELS.forEach(ch => {
    if (!counts[ch.country]) counts[ch.country] = 0;
    counts[ch.country]++;
  });
  return Object.entries(counts).sort((a,b) => b[1] - a[1]);
}

export function getTVCategories() {
  const counts = {};
  CHANNELS.forEach(ch => {
    if (!counts[ch.category]) counts[ch.category] = 0;
    counts[ch.category]++;
  });
  return Object.entries(counts).sort((a,b) => b[1] - a[1]);
}

export function getMusicTVChannels() {
  return MUSIC_CHANNELS;
}

export function getTotalChannelCount() {
  return CHANNELS.length;
}

export function getTVPlaylists() {
  return []; // deprecated, returning empty to avoid breaking old logic if any remains
}

export function getChannelForPlaylist(playlist, index = 0) {
  return null;
}
