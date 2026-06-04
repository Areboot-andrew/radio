// ========================================
// Utilities
// ========================================

export const sleep = (ms) => new Promise(r => setTimeout(r, ms));

export async function fetchWithRetries(url, options = {}, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      if (i === retries - 1) throw err;
      await sleep(delay * (i + 1));
    }
  }
}

export const KNOWN_CODECS = new Set([
  'MP3', 'AAC', 'AAC+', 'OGG', 'OPUS', 'FLAC', 'WMA', 'UNKNOWN'
]);

export function isHealthyStation(s, opts = {}) {
  const { requireGeo = true } = opts;
  if (!s || !s.url || !s.stationuuid) return false;
  if (requireGeo) {
    if (!s.url.startsWith('https')) return false;
  }
  const codec = (s.codec || 'UNKNOWN').toUpperCase().trim();
  const codecOk = codec === '' || KNOWN_CODECS.has(codec) || KNOWN_CODECS.has(codec.replace('+', ''));
  if (!codecOk) return false;
  if (requireGeo) {
    const lat = parseFloat(s.geo_lat);
    const lng = parseFloat(s.geo_long);
    if (isNaN(lat) || isNaN(lng)) return false;
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return false;
  }
  return true;
}

export function getCountryFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🌐';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(c => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function getGenreColor(genre) {
  const g = (genre || '').toLowerCase();
  if (g.includes('rock')) return '#ef4444';
  if (g.includes('pop')) return '#3b82f6';
  if (g.includes('jazz') || g.includes('blues')) return '#f59e0b';
  if (g.includes('classical')) return '#8b5cf6';
  if (g.includes('electronic') || g.includes('techno') || g.includes('house')) return '#06b6d4';
  if (g.includes('hip hop') || g.includes('rap') || g.includes('rnb')) return '#ec4899';
  if (g.includes('country') || g.includes('folk')) return '#10b981';
  if (g.includes('news') || g.includes('talk')) return '#6b7280';
  if (g.includes('retro') || g.includes('oldies') || g.includes('80') || g.includes('90')) return '#f97316';
  return '#3b82f6';
}

export function formatBitrate(kbps) {
  if (!kbps || kbps <= 0) return '';
  return `${kbps} kbps`;
}

export function sanitizeName(name) {
  if (!name) return 'Невідомо';
  return name.replace(/[<>\"']/g, '').trim();
}

export function debounce(fn, ms) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

export function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
