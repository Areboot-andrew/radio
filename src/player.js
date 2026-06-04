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

// Web Audio visualizer
let audioCtx = null;
let analyserNode = null;
let sourceNode = null;
let freqDataArray = null;
let vizInitialized = false;

// Bandwidth tracking
let bytesDownloaded = 0;
let lastBytesDownloaded = 0;
setInterval(() => {
  const diff = bytesDownloaded - lastBytesDownloaded;
  lastBytesDownloaded = bytesDownloaded;
  const kbps = Math.round((diff * 8) / 1000);
  const el = document.getElementById('realtimeBitrate');
  if (el) el.textContent = isPlaying ? `${kbps} kbps` : '0 kbps';
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
  audioEl.crossOrigin = 'anonymous';
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

export function initAudioVisualizer() {
  if (vizInitialized) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyserNode = audioCtx.createAnalyser();
    analyserNode.fftSize = 256;
    analyserNode.smoothingTimeConstant = 0.8;
    freqDataArray = new Uint8Array(analyserNode.frequencyBinCount);

    if (audioEl) {
      sourceNode = audioCtx.createMediaElementSource(audioEl);
      sourceNode.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);
    }
    vizInitialized = true;
  } catch (e) {
    // Web Audio not supported
  }
}

export function getFrequencyData() {
  if (!analyserNode || !freqDataArray) return null;
  try {
    analyserNode.getByteFrequencyData(freqDataArray);
    return freqDataArray;
  } catch (e) {
    return null;
  }
}

export function resumeAudioContext() {
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
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
  const url = station.url_resolved || station.url;

  // Fetch ICY metadata for now-playing
  fetchMetadata(url);

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
      audioEl.src = url;
      await audioEl.play().catch(err => {
        console.warn('Autoplay blocked:', err);
        isPlaying = false;
        updatePlayBtn();
      });
      if (vizInitialized) {
        resumeAudioContext();
      }
    }
  } catch (err) {
    console.error('Playback error:', err);
  }

  onStateChangeCb?.('stationChange', station);
}

function fetchMetadata(url) {
  if (metadataController) {
    metadataController.abort();
  }
  metadataController = new AbortController();
  const signal = metadataController.signal;

  fetch(url, {
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
            bytesDownloaded += value.length;
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

  const url = channel.url;

  try {
    if (url.endsWith('.m3u8') || url.includes('.m3u8')) {
      const Hls = (await import('hls.js')).default;
      if (Hls.isSupported() && videoEl) {
        hls = new Hls({ enableWorker: true, lowLatencyMode: true });
        hls.loadSource(url);
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoEl.play().catch(() => {});
          isPlaying = true;
          updatePlayBtn();
        });
        hls.on(Hls.Events.FRAG_LOADED, (event, data) => {
          if (data && data.frag) {
            bytesDownloaded += data.frag.loaded;
          }
        });
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.error('HLS fatal error:', data.type, data.details);
            hls.destroy();
            hls = null;
            isPlaying = false;
            updatePlayBtn();
            onStateChangeCb?.('tvError', currentStation);
          }
        });
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
