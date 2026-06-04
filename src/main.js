// ========================================
// Всесвіт Радіо та ТБ — Main Application
// ========================================

import './style.css';

import {
  fetchStations,
  getAllStations,
  getFilteredStations,
  getCountries,
  getGenres,
  getStationByUuid,
} from './radioData.js';

import {
  getTVPlaylists,
  getTotalChannelCount,
} from './tvData.js';

import { getPodcasts } from './podcastsData.js';

import {
  initPlayer,
  playStation,
  playTVChannel,
  stopPlayback,
  togglePlay,
  playPrev,
  playNext,
  getCurrentStation,
  getVideoEl,
  getCurrentTrack,
  getCurrentTrackCover,
  initAudioVisualizer,
  resumeAudioContext,
} from './player.js';

import { isFav, toggleFav } from './favorites.js';
import { startTimer, stopTimer, isRunning, formatTime } from './sleepTimer.js';
import { getCountryFlag, escapeHtml, debounce } from './utils.js';

// ========================================
// State
// ========================================
let allStations = [];
let filteredStations = [];
let currentStationUuid = null;
let currentMode = 'radio'; // 'radio' | 'tv'
let countryFilter = '';
let genreFilter = '';
let sortBy = 'popular';
let searchQuery = '';
let showFavoritesOnly = false;
let premiumOnly = false;

// ========================================
// DOM refs
// ========================================
const loadingScreen = document.getElementById('loadingScreen');
const loadingBar = document.getElementById('loadingBar');
const stationsGrid = document.getElementById('stationsGrid');
const countryFilterEl = document.getElementById('countryFilter');
const genreFilterEl = document.getElementById('genreFilter');
const sortFilterEl = document.getElementById('sortFilter');
const premiumOnlyEl = document.getElementById('premiumOnly');
const stationTotalEl = document.getElementById('stationTotal');
const searchInput = document.getElementById('searchInput');
const timerModal = document.getElementById('timerModal');

const tvGuideList = document.getElementById('tvGuideList');
const tvGuideCount = document.getElementById('tvGuideCount');
const tvSignalMeter = document.getElementById('tvSignalMeter');
const sleepIndicator = document.getElementById('sleepIndicator');
const sleepTimeLeft = document.getElementById('sleepTimeLeft');

const radioInfoName = document.getElementById('radioInfoName');
const radioInfoNow = document.getElementById('radioInfoNow');
const radioInfoBitrate = document.getElementById('radioInfoBitrate');
const radioInfoMeta = document.getElementById('radioInfoMeta');
const radioInfoArt = document.getElementById('radioInfoArt');
const radioInfoTrackArt = document.getElementById('radioInfoTrackArt');
const radioInfoTrackArtImg = document.getElementById('radioInfoTrackArtImg');
const hdrPlay = document.getElementById('hdrPlay');
const hdrPrev = document.getElementById('hdrPrev');
const hdrNext = document.getElementById('hdrNext');

// Now-playing polling
let nowPlayingInterval = null;

function updateRadioInfo(station) {
  if (!station || !station.name) {
    radioInfoName.textContent = 'Оберіть станцію';
    radioInfoNow.innerHTML = '<span class="rds-label"></span><span class="rds-text"></span>';
    radioInfoBitrate.textContent = '';
    radioInfoMeta.textContent = '';
    radioInfoTrackArt.style.display = 'none';
    radioInfoArt.innerHTML = `<div class="art-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="22" x2="12" y2="15"/></svg></div>`;
    return;
  }

  radioInfoName.textContent = station.name;

  const metaParts = [];
  if (station.country && station.country !== 'Unknown') metaParts.push(station.country);
  if (station.displayGenre || station.genre) metaParts.push(station.displayGenre || station.genre);
  radioInfoMeta.textContent = metaParts.join(' · ') || '';

  if (station.bitrate) {
    radioInfoBitrate.textContent = `${station.bitrate} kbps ${station.codec || ''}`;
  } else {
    radioInfoBitrate.textContent = '';
  }

  // Art
  if (station.favicon) {
    radioInfoArt.innerHTML = `<img src="${station.favicon}" alt="" onerror="this.parentElement.innerHTML='<div class=\\'art-fallback\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><circle cx=\\'12\\' cy=\\'12\\' r=\\'3\\'/><line x1=\\'12\\' y1=\\'22\\' x2=\\'12\\' y2=\\'15\\'/></svg></div>'">`;
  } else {
    radioInfoArt.innerHTML = `<div class="art-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="22" x2="12" y2="15"/></svg></div>`;
  }
}

function updateRadioPlayBtn(isPlaying) {
  const icon = isPlaying
    ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
    : '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  hdrPlay.innerHTML = icon;
  hdrPlay.classList.toggle('is-playing', isPlaying);
}

function startNowPlayingPolling() {
  stopNowPlayingPolling();
  nowPlayingInterval = setInterval(() => {
    const track = getCurrentTrack();
    const rdsLabel = radioInfoNow.querySelector('.rds-label');
    const rdsText = radioInfoNow.querySelector('.rds-text');
    if (track) {
      rdsLabel.classList.add('active');
      rdsText.classList.add('active');
      rdsText.textContent = track;
      const cover = getCurrentTrackCover();
      if (cover) {
        if (radioInfoTrackArtImg.src !== cover) {
          radioInfoTrackArtImg.src = cover;
          const artImg = radioInfoArt.querySelector('img');
          if (artImg && artImg.src !== cover) {
            artImg.src = cover;
          } else if (!artImg) {
            radioInfoArt.innerHTML = `<img src="${cover}" alt="Track Cover" />`;
          }
        }
      } else {
        // If no track cover, revert to station favicon if possible
        const currentStation = getCurrentStation();
        if (currentStation && currentStation.favicon) {
           const artImg = radioInfoArt.querySelector('img');
           if (!artImg || artImg.src !== currentStation.favicon) {
               radioInfoArt.innerHTML = `<img src="${currentStation.favicon}" alt="" onerror="this.parentElement.innerHTML='<div class=\\'art-fallback\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><circle cx=\\'12\\' cy=\\'12\\' r=\\'3\\'/><line x1=\\'12\\' y1=\\'22\\' x2=\\'12\\' y2=\\'15\\'/></svg></div>'">`;
           }
        } else {
           radioInfoArt.innerHTML = `<div class="art-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="22" x2="12" y2="15"/></svg></div>`;
        }
      }
    } else {
      rdsLabel.classList.remove('active');
      rdsText.classList.remove('active');
      rdsText.textContent = '';
      radioInfoTrackArt.style.display = 'none';
    }
  }, 3000);
}

function stopNowPlayingPolling() {
  if (nowPlayingInterval) {
    clearInterval(nowPlayingInterval);
    nowPlayingInterval = null;
  }
}

// ========================================
// Init
// ========================================
async function init() {
  // Init player
  initPlayer(handlePlayerStateChange);

  // Wire header play controls
  hdrPlay.addEventListener('click', togglePlay);
  hdrPrev.addEventListener('click', playPrev);
  hdrNext.addEventListener('click', playNext);
  updateRadioPlayBtn(false);

  // Setup event listeners
  setupEventListeners();

  // Fetch stations
  try {
    allStations = await fetchStations((pct) => {
      loadingBar.style.width = pct + '%';
    });
    filteredStations = [...allStations];

    // Populate filters
    populateFilters();

    // Render stations
    renderStations();

    // Init TV guide
    initTVGuide();

    // Init Podcasts
    initPodcasts();

    // Hide loading
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 400);
  } catch (err) {
    console.error('Failed to init:', err);
    loadingBar.style.width = '100%';
    loadingBar.style.background = '#ef4444';
    document.querySelector('.loading-text').textContent = 'Помилка завантаження. Спробуйте оновити сторінку.';
  }
}

// ========================================
// Event Listeners
// ========================================
function setupEventListeners() {
  // Mode switcher
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      switchMode(mode);
    });
  });

  // Filters
  countryFilterEl.addEventListener('change', (e) => {
    countryFilter = e.target.value;
    applyFilters();
  });
  genreFilterEl.addEventListener('change', (e) => {
    genreFilter = e.target.value;
    applyFilters();
  });
  if (sortFilterEl) {
    sortFilterEl.addEventListener('change', (e) => {
      sortBy = e.target.value;
      applyFilters();
    });
  }
  if (premiumOnlyEl) {
    premiumOnlyEl.addEventListener('change', (e) => {
      premiumOnly = e.target.checked;
      applyFilters();
    });
  }

  // Search
  searchInput.addEventListener('input', debounce(onSearchInput, 150));

  // Chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      // ignore checkbox clicks inside labels
      if (e.target.tagName === 'INPUT') return;
      if (chip.tagName === 'LABEL') return;

      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      genreFilter = chip.dataset.genre || '';
      showFavoritesOnly = chip.id === 'chipFavs';
      applyFilters();
    });
  });

  // Timer
  document.getElementById('timerBtn').addEventListener('click', openTimer);
  document.getElementById('timerOverlay').addEventListener('click', closeTimer);
  document.querySelectorAll('.timer-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.dataset.min);
      startSleepTimer(mins);
      closeTimer();
    });
  });
  document.getElementById('timerCancel').addEventListener('click', () => {
    stopTimer();
    sleepIndicator.classList.remove('active');
    closeTimer();
  });

  // Favorites button
  document.getElementById('favoritesBtn').addEventListener('click', () => {
    showFavoritesOnly = !showFavoritesOnly;
    document.getElementById('favoritesBtn').style.color = showFavoritesOnly ? '#ef4444' : '';
    applyFilters();
  });

  // Shift+T: toggle radio/tv
  document.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      searchInput.blur();
      closeTimer();
    }
    if (e.key === ' ' && document.activeElement === document.body) {
      e.preventDefault();
      togglePlay();
    }
    if (e.key === 't' && e.shiftKey) {
      e.preventDefault();
      switchMode(currentMode === 'radio' ? 'tv' : 'radio');
    }
  });

  // Window resize
  window.addEventListener('resize', debounce(() => {
  }, 200));
}

// ========================================
// Mode Switching
// ========================================
function switchMode(mode) {
  currentMode = mode;

  // Update buttons
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  // Update center panels
  document.getElementById('radioMode').style.display = mode === 'radio' ? 'flex' : 'none';
  document.getElementById('tvMode').style.display = mode === 'tv' ? 'flex' : 'none';
  document.getElementById('podcastsMode').style.display = mode === 'podcasts' ? 'flex' : 'none';

  // Update right sidebar panels
  document.getElementById('playerBar').classList.toggle('hidden-panel', mode === 'tv');
  document.getElementById('playerBar').classList.toggle('active-panel', mode !== 'tv');
  document.getElementById('tvGuidePanel').classList.toggle('hidden-panel', mode !== 'tv');
  document.getElementById('tvGuidePanel').classList.toggle('active-panel', mode === 'tv');

  // TV: stop audio, handle video
  if (mode === 'tv') {
    stopPlayback();
    initAudioVisualizer();
    resumeAudioContext();
    const ve = getVideoEl();
    if (ve) ve.play().catch(() => {});
  } else if (mode === 'podcasts') {
    // stop video if playing
    const ve = getVideoEl();
    if (ve) ve.pause();
  } else {
    // radio
    const ve = getVideoEl();
    if (ve) ve.pause();
  }
}

// ========================================
// Podcasts
// ========================================
function initPodcasts() {
  const podcasts = getPodcasts();
  const podcastsGrid = document.getElementById('podcastsGrid');
  
  if (!podcastsGrid) {
    console.error('podcastsGrid not found');
    return;
  }
  
  console.log('Rendering podcasts/clips count:', podcasts.length);
  
  if (podcasts.length === 0) {
    podcastsGrid.innerHTML = '<div style="padding: 20px; color: #ef4444;">Помилка: список кліпів порожній!</div>';
    return;
  }
  
  let html = '';
  const fallbackImg = 'https://raw.githubusercontent.com/iptv-org/iptv/master/logo.png';
  for (let i = 0; i < podcasts.length; i++) {
    const p = podcasts[i];
    // Enforce HTTPS for images, or use fallback
    let cover = p.cover;
    if (!cover || cover.startsWith('http:')) {
      cover = fallbackImg;
    }
    const safeTitle = (p.title || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeAuthor = (p.author || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    html += `
      <div class="podcast-card" data-id="${p.id}" style="background: var(--surface-container); border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.2s;">
        <div style="width: 100%; aspect-ratio: 1; background: var(--surface-container-highest); display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <img src="${cover}" alt="${safeTitle}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
        </div>
        <div style="padding: 12px;">
          <h3 style="margin: 0 0 4px 0; font-size: 16px; color: var(--on-surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${safeTitle}">${safeTitle}</h3>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: var(--on-surface-variant);" title="${safeAuthor}">${safeAuthor}</p>
          <span style="display: inline-block; padding: 2px 6px; background: var(--primary-fixed); color: var(--on-primary-fixed); border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase;">${p.type}</span>
        </div>
      </div>
    `;
  }
  podcastsGrid.innerHTML = html;

  podcastsGrid.querySelectorAll('.podcast-card').forEach(card => {
    card.addEventListener('click', () => {
      const p = podcasts.find(x => x.id === card.dataset.id);
      if (!p) return;
      playPodcast(p);
    });
  });
}

async function playPodcast(p) {
  if (p.rssUrl && !p.url) {
    try {
      const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(p.rssUrl);
      const res = await fetch(proxyUrl);
      const xml = await res.text();
      const match = xml.match(/<enclosure[^>]+url=[\"\']([^\"\']+)[\"\']/i);
      if (match) {
        p.url = match[1];
      } else {
        alert('Не вдалося знайти аудіофайл у стрічці цього подкасту.');
        return;
      }
    } catch (e) {
      console.error('Podcast fetch error:', e);
      alert('Помилка завантаження останнього випуску подкасту.');
      return;
    }
  }

  if (p.type === 'video') {
    switchMode('tv');
    const channel = { name: p.title, url: p.url, category: p.category };
    import('./player.js').then(module => {
      module.playTVChannel(channel);
    });
  } else {
    const station = {
      stationuuid: p.id,
      name: p.title,
      url: p.streamUrl || p.url,
      favicon: p.cover,
      type: 'podcast'
    };
    currentStationUuid = p.id;
    import('./player.js').then(module => {
      module.playStation(station);
    });
  }
}

// ========================================
// Filters
// ========================================
function populateFilters() {
  const countries = getCountries();
  const genres = getGenres();

  countryFilterEl.innerHTML = '<option value="">Всі країни</option>' +
    countries.map(([c, count]) =>
      `<option value="${escapeHtml(c)}">${escapeHtml(c)} (${count})</option>`
    ).join('');

  genreFilterEl.innerHTML = '<option value="">Всі жанри</option>' +
    genres.map(([g, count]) =>
      `<option value="${escapeHtml(g)}">${escapeHtml(g)} (${count})</option>`
    ).join('');
}

function applyFilters() {
  // Compute filtered stations
  filteredStations = getFilteredStations(countryFilter, genreFilter, searchQuery, premiumOnly);

  // Favorites filter
  if (showFavoritesOnly) {
    const favs = new Set(JSON.parse(localStorage.getItem('vsesvit_favorites') || '[]'));
    filteredStations = filteredStations.filter(s => favs.has(s.stationuuid));
  }

  // Sort
  if (sortBy === 'bitrate') {
    filteredStations = [...filteredStations].sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));
  } else if (sortBy === 'name') {
    filteredStations = [...filteredStations].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // popular (default)
    filteredStations = [...filteredStations].sort((a, b) => (b.clickcount || 0) - (a.clickcount || 0));
  }

  // Update station count
  stationTotalEl.textContent = `${filteredStations.length} станцій`;
  const sidebarCountEl = document.getElementById('sidebarStationCount');
  if (sidebarCountEl) sidebarCountEl.textContent = filteredStations.length;

  // Recompute filter counts relative to current selection
  recomputeFilterCounts();

  // Render
  renderStations();
}

function recomputeFilterCounts() {
  // Get counts for countries given current genre+search
  const countryFiltered = getFilteredStations('', genreFilter, searchQuery);
  const favs = showFavoritesOnly
    ? new Set(JSON.parse(localStorage.getItem('vsesvit_favorites') || '[]'))
    : null;

  const countryMap = new Map();
  countryFiltered.forEach(s => {
    if (favs && !favs.has(s.stationuuid)) return;
    countryMap.set(s.country, (countryMap.get(s.country) || 0) + 1);
  });

  // Get counts for genres given current country+search
  const genreFiltered = getFilteredStations(countryFilter, '', searchQuery);
  const genreMap = new Map();
  genreFiltered.forEach(s => {
    if (favs && !favs.has(s.stationuuid)) return;
    const g = s.displayGenre || s.genre;
    genreMap.set(g, (genreMap.get(g) || 0) + 1);
  });

  // Update country options
  Array.from(countryFilterEl.options).forEach(opt => {
    if (!opt.value) return;
    const count = countryMap.get(opt.value) || 0;
    const baseText = opt.value;
    opt.textContent = `${baseText} (${count})`;
    opt.disabled = count === 0;
  });

  // Update genre options
  Array.from(genreFilterEl.options).forEach(opt => {
    if (!opt.value) return;
    const count = genreMap.get(opt.value) || 0;
    const baseText = opt.value;
    opt.textContent = `${baseText} (${count})`;
    opt.disabled = count === 0;
  });
}

// ========================================
// Station Grid Rendering
// ========================================
let stationsToShow = 150;

function renderStations() {
  const favs = new Set(JSON.parse(localStorage.getItem('vsesvit_favorites') || '[]'));
  const show = filteredStations.slice(0, stationsToShow);

  stationsGrid.innerHTML = show.map((s) => {
    const fav = favs.has(s.stationuuid);
    const healthClass = s.health >= 80 ? 'good' : s.health >= 50 ? 'medium' : 'weak';
    const flag = getCountryFlag(s.countrycode);
    const isActive = s.stationuuid === currentStationUuid;
    const isNowPlaying = isActive && checkIsPlaying();
    const bitrateStr = s.bitrate ? `${s.bitrate} kbps` : '';
    const codecStr = s.codec || '';
    const qualityBadge = s.hiRes
      ? '<span class="quality-badge hires">★ ' + (s.codec || 'LOSSLESS') + '</span>'
      : s.premium && s.bitrate >= 320
      ? '<span class="quality-badge premium">★ 320</span>'
      : s.premium
      ? '<span class="quality-badge premium">★ ' + s.bitrate + '</span>'
      : s.bitrate >= 256 ? '<span class="quality-badge hd">HD</span>'
      : s.bitrate >= 192 ? '<span class="quality-badge hq">HQ</span>'
      : s.bitrate >= 128 ? '<span class="quality-badge">SQ</span>'
      : '';

    return `
      <div class="station-item ${isActive ? 'active' : ''} ${isNowPlaying ? 'playing' : ''}" data-uuid="${s.stationuuid}">
        <div class="station-col-primary">
          <div class="st-art">
            ${s.favicon
              ? `<img src="${s.favicon}" alt="" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'art-fallback\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><circle cx=\\'12\\' cy=\\'12\\' r=\\'3\\'/><line x1=\\'12\\' y1=\\'22\\' x2=\\'12\\' y2=\\'15\\'/></svg></div>'">`
              : `<div class="art-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="22" x2="12" y2="15"/></svg></div>`
            }
          </div>
          <div class="st-info">
            <div class="st-name" title="${escapeHtml(s.name)}">${escapeHtml(s.name)}</div>
            <div class="st-now">Now: ${escapeHtml(s.name)}</div>
          </div>
        </div>
        <div class="station-col-genre">
          ${(s.displayGenre || s.genre) ? `<span class="genre-badge">${escapeHtml(s.displayGenre || s.genre)}</span>` : '-'}
        </div>
        <div class="station-col-country">${flag} ${escapeHtml(s.country)}</div>
        <div class="station-col-quality">
          ${qualityBadge || `<span class="quality-badge">${s.bitrate || '?'}k</span>`}
        </div>
        <button class="st-fav-btn ${fav ? 'is-fav' : ''}" data-uuid="${s.stationuuid}" title="${fav ? 'Remove from favorites' : 'Add to favorites'}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

// Event delegation for station grid
stationsGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.station-item');
  if (!card) return;

  const favBtn = e.target.closest('.st-fav-btn');
  if (favBtn) {
    e.stopPropagation();
    const uuid = favBtn.dataset.uuid;
    const added = toggleFav(uuid);
    favBtn.classList.toggle('is-fav', added);
    favBtn.querySelector('svg').setAttribute('fill', added ? 'currentColor' : 'none');
    const current = getCurrentStation();
    if (current && current.stationuuid === uuid) {
      document.getElementById('playerFavorite').classList.toggle('is-fav', added);
    }
    return;
  }

  const uuid = card.dataset.uuid;
  playStationByUuid(uuid);
});

// Helper to check playing state
function checkIsPlaying() {
  return hdrPlay?.classList.contains('is-playing');
}

function playStationByUuid(uuid) {
  const station = getStationByUuid(uuid);
  if (!station) return;

  currentStationUuid = uuid;
  playStation(station);

  // Update UI
  document.querySelectorAll('.station-card').forEach(c => {
    c.classList.toggle('active', c.dataset.uuid === uuid);
  });
}

function switchStation(direction) {
  if (filteredStations.length === 0) return;
  let idx = filteredStations.findIndex(s => s.stationuuid === currentStationUuid);
  if (idx === -1) idx = 0;
  idx = (idx + direction + filteredStations.length) % filteredStations.length;
  playStationByUuid(filteredStations[idx].stationuuid);
}

// ========================================
// Player State Handler
// ========================================
function handlePlayerStateChange(event, station) {
  if (event === 'stationChange') {
    renderStations();
    updateRadioInfo(station);
    stopNowPlayingPolling();
    if (station && station.type !== 'tv') {
      updateRadioPlayBtn(false);
      startNowPlayingPolling();
    }
  }
  if (event === 'playing') {
    renderStations();
    updateRadioPlayBtn(true);
  }
  if (event === 'paused') {
    renderStations();
    updateRadioPlayBtn(false);
    stopNowPlayingPolling();
  }
  if (event === 'prev' || event === 'next') {
    switchStation(event === 'next' ? 1 : -1);
  }
  if (event === 'error') {
    const rdsLabel = radioInfoNow.querySelector('.rds-label');
    const rdsText = radioInfoNow.querySelector('.rds-text');
    if (rdsLabel) rdsLabel.classList.remove('active');
    if (rdsText) {
      rdsText.classList.add('active');
      rdsText.textContent = '⚠️ Помилка відтворення';
    }
  }
}

// ========================================
// Search
// ========================================
function onSearchInput(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  applyFilters();
}

// ========================================
// Sleep Timer
// ========================================
function openTimer() {
  timerModal.classList.add('active');
}

function closeTimer() {
  timerModal.classList.remove('active');
}

function startSleepTimer(minutes) {
  startTimer(minutes, {
    onTick: (seconds) => {
      sleepIndicator.classList.add('active');
      sleepTimeLeft.textContent = formatTime(seconds);
    },
    onComplete: () => {
      stopPlayback();
      sleepIndicator.classList.remove('active');
      // Show notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Всесвіт Радіо', { body: 'Таймер сну спрацював. Плеєр зупинено.' });
      }
    },
  });
}

// ========================================
// TV Guide
// ========================================
let currentTVPlaylist = null;
let currentTVChannel = null;
let expandedCountry = null;

function initTVGuide() {
  const playlists = getTVPlaylists();
  tvGuideCount.textContent = `${getTotalChannelCount()} каналів, ${playlists.length} країн`;

  renderTVGuide(playlists);
}

function renderTVGuide(playlists) {
  tvGuideList.innerHTML = playlists.map(p => {
    const isExpanded = expandedCountry === p.countryCode;
    const isActive = currentTVPlaylist?.countryCode === p.countryCode;
    return `
      <div class="tv-country ${isExpanded ? 'expanded' : ''}" data-country="${p.countryCode}">
        <div class="tv-country-header ${isActive ? 'active' : ''}">
          <span class="tv-guide-flag">${p.flag}</span>
          <div class="tv-guide-info">
            <div class="tv-guide-name">${escapeHtml(p.country)}</div>
            <div class="tv-guide-channels">${p.channels.length} каналів</div>
          </div>
          <span class="tv-country-arrow">${isExpanded ? '▼' : '▶'}</span>
        </div>
        <div class="tv-channel-list" ${isExpanded ? '' : 'style="display:none"'}>
          ${p.channels.map((ch, idx) => {
            const isPlaying = currentTVChannel?.url === ch.url;
            return `
              <div class="tv-channel-item ${isPlaying ? 'playing' : ''}" data-country="${p.countryCode}" data-index="${idx}">
                <span class="tv-channel-play-icon">${isPlaying ? '🔊' : '▶'}</span>
                <div class="tv-channel-info">
                  <div class="tv-channel-name">${escapeHtml(ch.name)}</div>
                  <div class="tv-channel-category">${escapeHtml(ch.category)}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  tvGuideList.querySelectorAll('.tv-country-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const countryEl = header.closest('.tv-country');
      const code = countryEl.dataset.country;
      const playlists = getTVPlaylists();
      const playlist = playlists.find(p => p.countryCode === code);
      if (!playlist) return;

      if (expandedCountry === code) {
        expandedCountry = null;
      } else {
        expandedCountry = code;
      }
      renderTVGuide(playlists);
    });
  });

  tvGuideList.querySelectorAll('.tv-channel-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const code = item.dataset.country;
      const index = parseInt(item.dataset.index);
      const playlists = getTVPlaylists();
      const playlist = playlists.find(p => p.countryCode === code);
      if (!playlist) return;

      selectTVChannel(playlist, index);
      expandedCountry = code;
      renderTVGuide(playlists);
    });
  });
}

async function selectTVChannel(playlist, channelIndex) {
  currentTVPlaylist = playlist;
  currentTVChannel = playlist.channels[channelIndex];

  tvSignalMeter.classList.add('visible', 'scanning');
  tvSignalMeter.classList.remove('locked');

  const channel = playlist.channels[channelIndex];
  if (channel) {
    playTVChannel(channel);
  }

  setTimeout(() => {
    tvSignalMeter.classList.remove('scanning');
    tvSignalMeter.classList.add('locked');
  }, 800);

  const loc = getCountryLocation(playlist.countryCode);
  if (loc) setMiniGlobeLocation(loc.lat, loc.lng);
}

function getCountryLocation(code) {
  const locs = {
    'UA': { lat: 49.0, lng: 32.0 },
    'US': { lat: 39.8, lng: -98.5 },
    'GB': { lat: 54.5, lng: -2.0 },
    'FR': { lat: 46.6, lng: 2.2 },
    'DE': { lat: 51.2, lng: 10.4 },
    'IT': { lat: 42.5, lng: 12.6 },
    'ES': { lat: 40.4, lng: -3.7 },
    'PL': { lat: 52.1, lng: 19.4 },
    'TR': { lat: 39.9, lng: 35.0 },
    'IN': { lat: 22.6, lng: 79.0 },
    'JP': { lat: 36.2, lng: 138.3 },
    'CA': { lat: 56.1, lng: -106.3 },
    'BR': { lat: -14.2, lng: -51.9 },
    'KR': { lat: 36.5, lng: 127.9 },
    'AU': { lat: -25.3, lng: 133.8 },
    'QA': { lat: 25.3, lng: 51.2 },
    'CN': { lat: 35.9, lng: 104.2 },
    'SG': { lat: 1.3, lng: 103.8 },
    'AE': { lat: 24.0, lng: 54.0 },
    'BE': { lat: 50.5, lng: 4.5 },
    'BY': { lat: 53.5, lng: 28.0 },
    'NL': { lat: 52.2, lng: 5.3 },
    'SE': { lat: 60.1, lng: 18.6 },
    'NO': { lat: 60.5, lng: 8.8 },
    'IL': { lat: 31.0, lng: 34.8 },
    'BG': { lat: 42.7, lng: 25.5 },
    'RO': { lat: 45.9, lng: 24.9 },
    'HU': { lat: 47.2, lng: 19.5 },
    'AT': { lat: 47.5, lng: 14.3 },
    'CH': { lat: 46.8, lng: 8.2 },
    'CZ': { lat: 49.8, lng: 15.3 },
    'SK': { lat: 48.7, lng: 19.5 },
    'PT': { lat: 39.4, lng: -8.2 },
    'GR': { lat: 38.0, lng: 23.7 },
    'HR': { lat: 45.1, lng: 15.2 },
    'RS': { lat: 44.0, lng: 21.0 },
    'BA': { lat: 43.9, lng: 17.7 },
    'AL': { lat: 41.2, lng: 20.2 },
    'AD': { lat: 42.5, lng: 1.5 },
    'AM': { lat: 40.2, lng: 45.0 },
    'AZ': { lat: 40.3, lng: 47.6 },
    'KZ': { lat: 48.0, lng: 66.0 },
    'GE': { lat: 42.0, lng: 43.5 },
    'LV': { lat: 56.9, lng: 25.0 },
    'LT': { lat: 55.2, lng: 24.0 },
    'CL': { lat: -35.7, lng: -71.5 },
    'MA': { lat: 31.7, lng: -7.0 },
    'TN': { lat: 34.0, lng: 9.5 },
    'TD': { lat: 15.0, lng: 19.0 },
    'MX': { lat: 23.6, lng: -102.5 },
    'AR': { lat: -38.4, lng: -63.6 },
    'ZA': { lat: -30.6, lng: 22.9 },
    'NG': { lat: 9.1, lng: 8.7 },
    'EG': { lat: 26.8, lng: 30.8 },
    'TH': { lat: 15.9, lng: 101.0 },
    'PH': { lat: 12.0, lng: 122.0 },
    'MY': { lat: 4.2, lng: 102.0 },
    'PK': { lat: 30.0, lng: 70.0 },
    'IR': { lat: 32.0, lng: 53.0 },
  };
  return locs[code] || null;
}



// ========================================
// Notification permission
// ========================================
if ('Notification' in window && Notification.permission === 'default') {
  Notification.requestPermission();
}

// ========================================
// Start
// ========================================
init();
