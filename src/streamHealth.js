// ========================================
// Stream health — broken/alive cache for radio + TV
// ========================================
// Rules:
//  - Hide only when playback failed via ALL paths (direct + proxies),
//    or soft-probe got a hard dead status (404/410) through our CF proxy.
//  - CORS-only failure is NOT dead (proxy may still work).
//  - Successful play always clears a broken mark (lists refresh, new URL = live).
//  - Keys are normalized stream URLs so playlist reloads keep the blacklist,
//    but a new URL for the same channel shows up again.

const STORAGE_KEY = 'stream_health_v1';
const TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const MAX_ENTRIES = 5000;
// Same Worker as player.js — soft probe only (avoid circular import)
const CF_PROBE_PROXY = 'https://radio-proxy.areboot.workers.dev/?url=';

/** @type {Map<string, HealthEntry>} */
let store = new Map();
let loaded = false;
let saveTimer = null;

/**
 * @typedef {Object} HealthEntry
 * @property {string} url
 * @property {string} [id]
 * @property {string} [name]
 * @property {'radio'|'tv'|'video'|'podcast'|string} [kind]
 * @property {number} fails
 * @property {number} markedAt
 * @property {number} lastFailAt
 * @property {number} [lastOkAt]
 * @property {string} [reason]
 */

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    const entries = data?.entries || data || {};
    const now = Date.now();
    for (const [key, entry] of Object.entries(entries)) {
      if (!entry || !entry.url) continue;
      if (entry.markedAt && now - entry.markedAt > TTL_MS) continue;
      store.set(key, entry);
    }
  } catch (e) {
    console.warn('streamHealth: failed to load cache', e);
    store = new Map();
  }
}

function scheduleSave() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(persist, 300);
}

function persist() {
  try {
    // Cap size: drop oldest first
    if (store.size > MAX_ENTRIES) {
      const sorted = [...store.entries()].sort(
        (a, b) => (a[1].markedAt || 0) - (b[1].markedAt || 0)
      );
      const drop = sorted.length - MAX_ENTRIES;
      for (let i = 0; i < drop; i++) store.delete(sorted[i][0]);
    }
    const entries = Object.fromEntries(store);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, entries }));
  } catch (e) {
    console.warn('streamHealth: failed to save cache', e);
  }
}

/** Normalize URL for stable keys across http/https and trailing junk */
export function normalizeStreamUrl(url) {
  if (!url || typeof url !== 'string') return '';
  let u = url.trim();
  if (u.startsWith('http://')) u = 'https://' + u.slice(7);
  // strip hash, trailing slash (but keep intentional path)
  try {
    const parsed = new URL(u);
    parsed.hash = '';
    let path = parsed.pathname;
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    parsed.pathname = path;
    return parsed.toString();
  } catch {
    return u.replace(/\/+$/, '').split('#')[0];
  }
}

function keyFromUrl(url) {
  const n = normalizeStreamUrl(url);
  return n ? `url:${n}` : '';
}

function resolveUrl(item) {
  if (!item) return '';
  if (typeof item === 'string') return item;
  return item.url_resolved || item.url || item.streamUrl || '';
}

function resolveId(item) {
  if (!item || typeof item === 'string') return '';
  return item.stationuuid || item.id || '';
}

export function purgeExpired() {
  load();
  const now = Date.now();
  let changed = false;
  for (const [key, entry] of store) {
    if (!entry.markedAt || now - entry.markedAt > TTL_MS) {
      store.delete(key);
      changed = true;
    }
  }
  if (changed) scheduleSave();
}

/**
 * Stream is hidden only if we have an active broken mark for this exact URL.
 * New URL after playlist update → not broken.
 */
export function isStreamBroken(itemOrUrl) {
  load();
  const url = resolveUrl(itemOrUrl);
  const key = keyFromUrl(url);
  if (!key) return false;
  const entry = store.get(key);
  if (!entry) return false;
  if (Date.now() - (entry.markedAt || 0) > TTL_MS) {
    store.delete(key);
    scheduleSave();
    return false;
  }
  return true;
}

export function markStreamBroken(itemOrUrl, meta = {}) {
  load();
  const url = resolveUrl(itemOrUrl);
  const key = keyFromUrl(url);
  if (!key) return false;

  const prev = store.get(key);
  const now = Date.now();
  const entry = {
    url: normalizeStreamUrl(url),
    id: meta.id || resolveId(itemOrUrl) || prev?.id || '',
    name: meta.name || (typeof itemOrUrl === 'object' ? itemOrUrl.name || itemOrUrl.title : '') || prev?.name || '',
    kind: meta.kind || (typeof itemOrUrl === 'object' ? itemOrUrl.type || itemOrUrl.kind : '') || prev?.kind || 'unknown',
    fails: (prev?.fails || 0) + 1,
    markedAt: now,
    lastFailAt: now,
    lastOkAt: prev?.lastOkAt,
    reason: meta.reason || 'playback_exhausted',
  };
  store.set(key, entry);
  scheduleSave();
  console.info('streamHealth: broken', entry.name || entry.url, entry.reason);
  return true;
}

/** Successful play — always forgive (URL works for this user). */
export function markStreamAlive(itemOrUrl) {
  load();
  const url = resolveUrl(itemOrUrl);
  const key = keyFromUrl(url);
  if (!key) return;
  if (store.has(key)) {
    store.delete(key);
    scheduleSave();
    console.info('streamHealth: alive again', normalizeStreamUrl(url));
  }
}

export function filterHealthy(list) {
  if (!Array.isArray(list)) return [];
  load();
  return list.filter((item) => !isStreamBroken(item));
}

export function getBrokenCount() {
  load();
  purgeExpired();
  return store.size;
}

export function getBrokenEntries() {
  load();
  purgeExpired();
  return [...store.values()].sort((a, b) => (b.markedAt || 0) - (a.markedAt || 0));
}

export function clearBrokenCache() {
  store.clear();
  scheduleSave();
}

/**
 * Soft probe via Cloudflare Worker only.
 * - dead: hard 404/410 (safe to hide)
 * - alive: 2xx with meaningful body
 * - unknown: timeouts, 403, proxy errors — NEVER hide
 */
export async function softProbeStream(url, timeoutMs = 7000) {
  const normalized = normalizeStreamUrl(url);
  if (!normalized) return 'unknown';

  // Prefer our CF proxy so CORS does not matter
  if (!CF_PROBE_PROXY) return 'unknown';

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const probeUrl = CF_PROBE_PROXY + encodeURIComponent(normalized);
    const res = await fetch(probeUrl, {
      method: 'GET',
      signal: controller.signal,
      headers: { Range: 'bytes=0-2047' },
    });

    if (res.status === 404 || res.status === 410) return 'dead';
    if (res.status === 403 || res.status === 401) return 'unknown'; // geo/auth — may still play elsewhere
    if (!res.ok) return 'unknown';

    const buf = await res.arrayBuffer();
    if (!buf || buf.byteLength < 8) return 'unknown';

    // Text sniff: HLS playlist or common audio headers
    const head = new TextDecoder('utf-8', { fatal: false }).decode(buf.slice(0, Math.min(buf.byteLength, 512)));
    if (head.includes('#EXTM3U') || head.includes('#EXT-X-')) return 'alive';

    // Binary-ish stream (mp3/aac/ogg often starts with ID3 / sync / OggS)
    const bytes = new Uint8Array(buf);
    if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) return 'alive'; // ID3
    if (bytes[0] === 0x4f && bytes[1] === 0x67 && bytes[2] === 0x67 && bytes[3] === 0x53) return 'alive'; // OggS
    if (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0) return 'alive'; // MPEG sync
    if (head.length > 50) return 'alive'; // something substantial

    return 'unknown';
  } catch {
    return 'unknown';
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Background probe for a small batch (visible list only).
 * Only marks broken on hard "dead"; marks alive on "alive".
 * @returns {{ dead: number, alive: number, unknown: number }}
 */
export async function softProbeBatch(items, { concurrency = 4, onProgress } = {}) {
  load();
  const stats = { dead: 0, alive: 0, unknown: 0 };
  if (!Array.isArray(items) || items.length === 0) return stats;

  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      const item = items[i];
      const url = resolveUrl(item);
      if (!url) {
        stats.unknown++;
        continue;
      }
      // Skip if already broken
      if (isStreamBroken(url)) {
        stats.dead++;
        onProgress?.(stats, item);
        continue;
      }
      const result = await softProbeStream(url);
      if (result === 'dead') {
        markStreamBroken(item, { reason: 'soft_probe_404', kind: item?.type || item?.kind });
        stats.dead++;
      } else if (result === 'alive') {
        markStreamAlive(item);
        stats.alive++;
      } else {
        stats.unknown++;
      }
      onProgress?.(stats, item);
    }
  }

  const n = Math.min(concurrency, items.length);
  await Promise.all(Array.from({ length: n }, () => worker()));
  return stats;
}

// Init on import
purgeExpired();
