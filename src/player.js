// ========================================
// Audio/Video Player
// ========================================

import { isFav, toggleFav } from './favorites.js';
import { setMiniGlobeLocation, clearMiniGlobe } from './miniGlobe.js';
import { formatBitrate, sanitizeName } from './utils.js';

let audioEl = null;
let videoEl = null;
let hls = null;
let plyr = null;
let currentStation = null;
let isPlaying = false;
let volume = 0.7;
let onStateChangeCb = null;

// Bandwidth tracking
let bytesDownloaded = 0;
let lastBytesDownloaded = 0;
let kbpsDisplay = 0;
setInterval(() => {
  const el = document.getElementById('realtimeBitrate');
  if (!el) return;
  
  if (!isPlaying) {
    el.textContent = '0 kbps';
    return;
  }
  
  if (currentStation && currentStation.type !== 'tv' && currentStation.type !== 'video') {
    // Radio stations: static reported bitrate
    kbpsDisplay = currentStation.bitrate || 128;
  } else {
    // Video stations: Dynamic real-time bandwidth monitor
    const diff = bytesDownloaded - lastBytesDownloaded;
    lastBytesDownloaded = bytesDownloaded;
    const currentKbps = Math.round((diff * 8) / 1000);
    
    if (currentKbps > 0) {
      kbpsDisplay = currentKbps;
    } else {
      // Slow decay so it fluctuates down but doesn't instantly hit 0 between chunk downloads
      kbpsDisplay = Math.max(0, Math.round(kbpsDisplay * 0.85)); 
    }
  }
  
  el.textContent = `${kbpsDisplay} kbps`;
}, 1000);

// Now-playing metadata
let currentTrack = null;
let currentTrackCover = null;
let metadataController = null;

// DOM refs
let playerName, playerMeta, playerArt, playerPlayBtn, playerFavorite;

export function initPlayer(onStateChange) {
  onStateChangeCb = onStateChange;

  // Create audio element (hidden)
  audioEl = document.createElement('audio');
  audioEl.volume = volume;

  // Video element for TV
  videoEl = document.getElementById('tvVideo');

  // DOM refs
  playerName = document.getElementById('playerName');
  playerMeta = document.getElementById('playerMeta');
  playerArt = document.getElementById('playerArt');
  playerPlayBtn = document.getElementById('playerPlay');
  playerFavorite = document.getElementById('playerFavorite');

  // Bind controls
  if (playerPlayBtn) playerPlayBtn.addEventListener('click', togglePlay);
  const volSlider = document.getElementById('volumeSlider');
  if (volSlider) {
    volSlider.addEventListener('input', (e) => {
      volume = e.target.value / 100;
      if (audioEl) audioEl.volume = volume;
    });
  }
  if (playerFavorite) {
    playerFavorite.addEventListener('click', () => {
      if (currentStation) {
        toggleFav(currentStation.stationuuid);
        updateFavBtn();
        onStateChangeCb?.('favorite', currentStation);
      }
    });
  }

  // Audio events
  audioEl.addEventListener('playing', () => {
    isPlaying = true;
    updatePlayBtn();
    onStateChangeCb?.('playing', currentStation);
  });

  audioEl.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayBtn();
    onStateChangeCb?.('paused', currentStation);
  });

  audioEl.addEventListener('error', () => {
    console.error('Audio error');
    isPlaying = false;
    updatePlayBtn();
    onStateChangeCb?.('error', currentStation);
  });

  return { audioEl, videoEl };
}

export function resumeAudioContext() {
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
}

// ========================================
// CORS Proxy helpers
// ========================================
const CORS_PROXIES = [
  (url) => url, // try direct first
  (url) => 'https://corsproxy.io/?' + encodeURIComponent(url),
  (url) => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
  (url) => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url),
];

function proxyUrl(url, proxyIndex = 0) {
  if (proxyIndex >= CORS_PROXIES.length) return null;
  return CORS_PROXIES[proxyIndex](url);
}

// Ensures http URLs are upgraded to https to avoid Mixed Content
function ensureHttps(url) {
  if (url && url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  return url;
}

export async function playStation(station) {
  if (!station) return;

  // Stop any existing playback
  stopPlayback();

  currentStation = station;

  // Update UI
  updatePlayerUI(station);
  updateFavBtn();

  // Set mini globe
  if (station.geo_lat && station.geo_long) {
    setMiniGlobeLocation(station.geo_lat, station.geo_long);
  }

  // Play audio
  const rawUrl = station.url_resolved || station.url;
  const url = ensureHttps(rawUrl);

  // Fetch ICY metadata for now-playing
  fetchMetadata(rawUrl);

  try {
    if (url.endsWith('.m3u8') || url.includes('.m3u8')) {
      const Hls = (await import('hls.js')).default;
      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true, lowLatencyMode: true });
        hls.loadSource(url);
        hls.attachMedia(audioEl);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          audioEl.play().catch(() => {});
          if (vizInitialized) {
            resumeAudioContext();
          }
        });
      } else {
        audioEl.src = url;
        audioEl.play().catch(() => {});
      }
      if (vizInitialized) {
        resumeAudioContext();
      }
    } else {
      // Try direct HTTPS first, then cascade through proxies on error
      await tryPlayAudio(url, 0);
    }
  } catch (err) {
    console.error('Playback error:', err);
  }

  onStateChangeCb?.('stationChange', station);
}

async function tryPlayAudio(originalUrl, attempt) {
  const proxied = proxyUrl(originalUrl, attempt);
  if (!proxied) {
    // All proxies exhausted
    console.error('All proxy attempts failed for:', originalUrl);
    isPlaying = false;
    updatePlayBtn();
    onStateChangeCb?.('error', currentStation);
    return;
  }

  audioEl.src = proxied;

  const playPromise = audioEl.play();
  if (playPromise) {
    playPromise.catch(err => {
      console.warn(`Attempt ${attempt} failed (${proxied}):`, err.message);
      // Only retry if it's a network/CORS error, not a user gesture issue
      if (err.name === 'NotAllowedError') {
        // Autoplay blocked — don't retry
        isPlaying = false;
        updatePlayBtn();
        return;
      }
      tryPlayAudio(originalUrl, attempt + 1);
    });
  }

  // Also handle network errors via the error event
  const errorHandler = () => {
    audioEl.removeEventListener('error', errorHandler);
    console.warn(`Audio error on attempt ${attempt}, trying next proxy...`);
    tryPlayAudio(originalUrl, attempt + 1);
  };
  // Remove previous error handlers and add new one
  audioEl.addEventListener('error', errorHandler, { once: true });

  if (vizInitialized) {
    resumeAudioContext();
  }
}

function fetchMetadata(url) {
  if (metadataController) {
    metadataController.abort();
  }
  metadataController = new AbortController();
  const signal = metadataController.signal;

  const proxiedUrl = 'https://corsproxy.io/?' + encodeURIComponent(url);

  fetch(proxiedUrl, {
    headers: { 'Icy-MetaData': '1' },
    signal,
  }).then(res => {
    const metaint = parseInt(res.headers.get('icy-metaint'));
    const name = res.headers.get('icy-name');
    if (name) {
      currentTrack = name;
    }
    if (metaint && metaint > 0) {
      const reader = res.body.getReader();
      let buffer = new Uint8Array(0);
      function read() {
        reader.read().then(({ done, value }) => {
          if (done || signal.aborted) return;
          if (value) {
            bytesDownloaded += (value.byteLength || value.length || 0);
            buffer = concat(buffer, value);
            if (buffer.length >= metaint) {
              const metaLen = buffer[metaint] * 16;
              if (metaLen > 0 && buffer.length >= metaint + 1 + metaLen) {
                const meta = new TextDecoder().decode(buffer.slice(metaint + 1, metaint + 1 + metaLen));
                const titleMatch = meta.match(/StreamTitle='([^']*)'/);
                const urlMatch = meta.match(/StreamUrl='([^']*)'/);
                if (titleMatch && titleMatch[1]) {
                  currentTrack = titleMatch[1];
                }
                if (urlMatch && urlMatch[1]) {
                  currentTrackCover = urlMatch[1];
                }
                reader.cancel();
              }
            } else {
              read();
            }
          }
        }).catch(() => {});
      }
      read();
    }
  }).catch(() => {});
}

function concat(a, b) {
  const c = new Uint8Array(a.length + b.length);
  c.set(a);
  c.set(b, a.length);
  return c;
}

export function getCurrentTrack() {
  return currentTrack;
}

export function getCurrentTrackCover() {
  return currentTrackCover;
}

export async function playTVChannel(channel) {
  if (!channel) return;

  stopPlayback();
  currentStation = { name: channel.name, type: 'tv', url: channel.url };
  updatePlayerUI(currentStation);
  clearMiniGlobe();

  const url = ensureHttps(channel.url);

  try {
    if (url.endsWith('.m3u8') || url.includes('.m3u8')) {
      const Hls = (await import('hls.js')).default;
      if (Hls.isSupported() && videoEl) {
        
        let proxyAttempt = 0;

        function initHls(streamUrl, pIdx) {
          if (hls) {
            hls.destroy();
          }
          const finalUrl = proxyUrl(streamUrl, pIdx);
          if (!finalUrl) {
            // All proxies exhausted
            isPlaying = false;
            updatePlayBtn();
            onStateChangeCb?.('tvError', currentStation);
            return;
          }
          console.log(`TV: trying proxy #${pIdx}: ${finalUrl.substring(0, 80)}...`);
          hls = new Hls({ enableWorker: true, lowLatencyMode: true });
          hls.loadSource(finalUrl);
          hls.attachMedia(videoEl);
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            videoEl.play().catch(() => {});
            isPlaying = true;
            updatePlayBtn();
          });
          
          hls.on(Hls.Events.FRAG_LOADED, (event, data) => {
            if (data) {
              const loaded = data.loaded || (data.stats && data.stats.loaded) || (data.payload && data.payload.byteLength) || (data.frag && data.frag.loaded) || 0;
              if (typeof loaded === 'number' && !isNaN(loaded)) {
                bytesDownloaded += loaded;
              }
            }
          });
          
          hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
              console.error('HLS fatal error:', data.type, data.details);
              proxyAttempt++;
              if (proxyAttempt < CORS_PROXIES.length) {
                console.log(`Retrying with proxy #${proxyAttempt}...`);
                initHls(streamUrl, proxyAttempt);
              } else {
                hls.destroy();
                hls = null;
                isPlaying = false;
                updatePlayBtn();
                onStateChangeCb?.('tvError', currentStation);
              }
            }
          });
        }
        
        initHls(url, 0);

      } else if (videoEl) {
        videoEl.src = url;
        videoEl.play().catch(() => {});
        isPlaying = true;
        updatePlayBtn();
      }
    } else if (videoEl) {
      videoEl.src = url;
      videoEl.play().catch(() => {});
      isPlaying = true;
      updatePlayBtn();
    }
  } catch (err) {
    console.error('TV playback error:', err);
    onStateChangeCb?.('tvError', currentStation);
  }

  onStateChangeCb?.('tvChange', currentStation);
}

export function stopPlayback() {
  bytesDownloaded = 0;
  lastBytesDownloaded = 0;
  if (metadataController) {
    metadataController.abort();
    metadataController = null;
  }
  currentTrack = null;
  currentTrackCover = null;
  if (hls) {
    hls.destroy();
    hls = null;
  }
  if (audioEl) {
    audioEl.pause();
    audioEl.src = '';
    audioEl.removeAttribute('src');
  }
  if (videoEl) {
    videoEl.pause();
    videoEl.src = '';
    videoEl.removeAttribute('src');
  }
  isPlaying = false;
  updatePlayBtn();
}

export function togglePlay() {
  if (!currentStation) return;

  if (currentStation.type === 'tv') {
    if (videoEl) {
      if (videoEl.paused) {
        videoEl.play().catch(() => {});
        isPlaying = true;
      } else {
        videoEl.pause();
        isPlaying = false;
      }
    }
  } else {
    if (audioEl) {
      if (audioEl.paused) {
        audioEl.play().catch(() => {});
        isPlaying = true;
      } else {
        audioEl.pause();
        isPlaying = false;
      }
    }
  }
  updatePlayBtn();
}

function updatePlayBtn() {
  if (!playerPlayBtn) return;
  playerPlayBtn.innerHTML = isPlaying
    ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`
    : `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
}

function updatePlayerUI(station) {
  if (!station) return;
  const name = sanitizeName(station.name);
  if (playerName) playerName.textContent = name;

  const metaParts = [];
  if (station.country && station.country !== 'Unknown') metaParts.push(station.country);
  if (station.genre) metaParts.push(station.genre);
  if (station.bitrate) metaParts.push(formatBitrate(station.bitrate));
  if (station.codec) metaParts.push(station.codec);

  if (playerMeta) playerMeta.textContent = metaParts.join(' · ') || '---';

  // Update art
  if (playerArt) {
    if (station.favicon) {
      playerArt.innerHTML = `<img src="${station.favicon}" alt="" onerror="this.parentElement.innerHTML='<div class=\\'art-fallback\\'><svg width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1.5\\'><path d=\\'M9 18V5l12-2v13\\'/><circle cx=\\'6\\' cy=\\'18\\' r=\\'3\\'/><circle cx=\\'18\\' cy=\\'16\\' r=\\'3\\'/></svg></div>'">`;
    } else {
      playerArt.innerHTML = `<div class="art-fallback"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>`;
    }
  }
}

function updateFavBtn() {
  if (!playerFavorite || !currentStation) return;
  const fav = isFav(currentStation.stationuuid);
  playerFavorite.classList.toggle('is-fav', fav);
}

export function playPrev() {
  onStateChangeCb?.('prev', currentStation);
}

export function playNext() {
  onStateChangeCb?.('next', currentStation);
}

export function getCurrentStation() {
  return currentStation;
}

export function getVideoEl() {
  return videoEl;
}

export function isPlayerPlaying() {
  return isPlaying;
}

export function setVolume(v) {
  volume = v;
  if (audioEl) audioEl.volume = v;
}
