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
  fetchTVPlaylists,
  getAllTVChannels,
  getFilteredTVChannels,
  getTVCountries,
  getTVCategories,
  getMusicTVChannels,
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
let showFavoritesOnly = localStorage.getItem('texnoplus_show_favs') === 'true';
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
    radioInfoArt.innerHTML = `<img src="${station.favicon}" alt="" onerror="this.outerHTML='<div class=\\'art-fallback\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><circle cx=\\'12\\' cy=\\'12\\' r=\\'3\\'/><line x1=\\'12\\' y1=\\'22\\' x2=\\'12\\' y2=\\'15\\'/></svg></div>'">`;
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

  // Wire TV play controls
  const tvPlay = document.getElementById('tvPlay');
  const tvPrev = document.getElementById('tvPrev');
  const tvNext = document.getElementById('tvNext');
  
  if (tvPlay) tvPlay.addEventListener('click', togglePlay);
  if (tvPrev) tvPrev.addEventListener('click', playPrev);
  if (tvNext) tvNext.addEventListener('click', playNext);

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

  // UI events
  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      document.querySelector('.sidebar-left').classList.toggle('active');
    });
  }

  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      switchMode(e.currentTarget.dataset.mode);
      if (window.innerWidth <= 768) {
        document.querySelector('.sidebar-left').classList.remove('active');
      }
    });
  });

  const fsBtn = document.getElementById('fullscreenBtn');
  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
      const vid = document.getElementById('tvVideo');
      if (!vid) return;

      // Function to try to lock orientation to landscape
      const lockLandscape = () => {
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(() => {});
        } else if (screen.lockOrientation) {
          screen.lockOrientation('landscape');
        } else if (screen.webkitLockOrientation) {
          screen.webkitLockOrientation('landscape');
        } else if (screen.mozLockOrientation) {
          screen.mozLockOrientation('landscape');
        } else if (screen.msLockOrientation) {
          screen.msLockOrientation('landscape');
        }
      };

      // iOS Safari (webkitEnterFullscreen handles native iOS player with its own orientation)
      if (vid.webkitEnterFullscreen) {
        vid.webkitEnterFullscreen();
        lockLandscape();
      } else if (vid.requestFullscreen) {
        vid.requestFullscreen().then(lockLandscape).catch(() => {});
      } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen();
        lockLandscape();
      } else if (vid.msRequestFullscreen) {
        vid.msRequestFullscreen();
        lockLandscape();
      } else {
        const container = document.getElementById('tvMode');
        if (container?.requestFullscreen) {
          container.requestFullscreen().then(lockLandscape).catch(() => {});
        } else if (container?.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
          lockLandscape();
        }
      }
    });

    // Reset orientation lock when exiting fullscreen
    const onFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (screen.orientation && screen.orientation.unlock) {
          screen.orientation.unlock();
        }
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
  }

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
    localStorage.setItem('texnoplus_show_favs', showFavoritesOnly);
    document.getElementById('favoritesBtn').style.color = showFavoritesOnly ? '#ef4444' : '';
    applyFilters();
  });

  // Initial Render for Favorites
  if (showFavoritesOnly) {
    document.getElementById('favoritesBtn').style.color = '#ef4444';
  }
  
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

  // ---- Mobile sidebar toggle ----
  const mobileToggle = document.getElementById('mobilePlayerToggle');
  const sidebarRight = document.querySelector('.sidebar-right');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  window.openMobileSidebar = function() {
    if (sidebarRight) sidebarRight.classList.add('mobile-open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    if (mobileToggle) mobileToggle.style.display = 'none';
  };

  window.closeMobileSidebar = function() {
    if (sidebarRight) sidebarRight.classList.remove('mobile-open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    // Re-show toggle only on mobile
    if (window.innerWidth <= 768 && mobileToggle) {
      mobileToggle.style.display = 'flex';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', window.openMobileSidebar);
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', window.closeMobileSidebar);
  }

  // Swipe-down to close mobile sidebar
  let touchStartY = 0;
  if (sidebarRight) {
    sidebarRight.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    sidebarRight.addEventListener('touchend', (e) => {
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (dy > 100) {
        window.closeMobileSidebar();
      }
    }, { passive: true });
  }
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
  const isVideo = (mode === 'tv' || mode === 'podcasts');
  document.getElementById('radioMode').style.display = mode === 'radio' ? 'flex' : 'none';
  document.getElementById('tvMode').style.display = isVideo ? 'flex' : 'none';

  // Update right sidebar panels
  document.getElementById('playerBar').classList.toggle('hidden-panel', mode !== 'radio');
  document.getElementById('playerBar').classList.toggle('active-panel', mode === 'radio');
  document.getElementById('tvGuidePanel').classList.toggle('hidden-panel', mode !== 'tv');
  document.getElementById('tvGuidePanel').classList.toggle('active-panel', mode === 'tv');
  const clipsPanel = document.getElementById('clipsGuidePanel');
  if (clipsPanel) {
    clipsPanel.classList.toggle('hidden-panel', mode !== 'podcasts');
    clipsPanel.classList.toggle('active-panel', mode === 'podcasts');
  }

  // TV: stop audio, handle video
  if (mode === 'tv') {
    stopPlayback();
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
  const musicChannels = getMusicTVChannels().map(ch => ({
    id: ch.id || ch.url,
    title: ch.name,
    category: 'Музичні ТБ',
    url: ch.url,
    cover: ch.logo,
    type: 'video',
    country: ch.country
  }));
  const allClips = [...podcasts, ...musicChannels];

  const listEl = document.getElementById('clipsGuideList');
  const countEl = document.getElementById('clipsCount');
  const filterEl = document.getElementById('clipsCategoryFilter');
  if (!listEl) return;
  
  // Extract unique categories
  const categories = [...new Set(allClips.map(p => p.category || 'Інше'))].sort((a, b) => a.localeCompare(b, 'uk'));
  
  // Populate filter
  if (filterEl) {
    filterEl.innerHTML = '<option value="all">Всі тематики</option>' + categories.map(c => `<option value="${c}">${c}</option>`).join('');
    filterEl.addEventListener('change', () => {
      renderClipsList(filterEl.value);
    });
  }

  function renderClipsList(filter = 'all') {
    const show = filter === 'all' ? allClips : allClips.filter(p => (p.category || 'Інше') === filter);
    if (countEl) countEl.textContent = `${show.length} кліпів`;
    
    // Group them for inline display
    const grouped = {};
    show.forEach(p => {
      const cat = p.category || 'Інше';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(p);
    });
    
    const fallbackImg = '/radio-icon.svg';
    
    let html = '';
    const sortedCats = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'uk'));
    sortedCats.forEach(cat => {
      html += `<div style="padding: 8px 12px; margin-top: 12px; font-size: 13px; font-weight: 700; color: var(--primary-fixed); background: var(--surface-container-lowest); border-left: 3px solid var(--primary-fixed); text-transform: uppercase;">${cat}</div>`;
      const itemsToRender = cat === 'Музичні ТБ' ? grouped[cat].slice(0, 100) : grouped[cat];
      html += itemsToRender.map(p => {
        let cover = p.cover;
        if (!cover || cover.startsWith('http:')) cover = fallbackImg;
        const safeTitle = (p.title || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const safeCountry = p.country ? (p.country || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
        
        return `
          <div class="tv-channel" data-id="${p.id}">
            <div class="tv-channel-logo">
              <img src="${cover}" alt="" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
            </div>
            <div class="tv-channel-info">
              <div class="tv-channel-name" title="${safeTitle}">${safeTitle}</div>
              ${safeCountry ? `<div class="tv-channel-category">Країна: ${safeCountry}</div>` : ''}
            </div>
          </div>
        `;
      }).join('');
    });
    
    listEl.innerHTML = html;
    
    listEl.querySelectorAll('.tv-channel').forEach(el => {
      el.addEventListener('click', () => {
        listEl.querySelectorAll('.tv-channel').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
        const p = allClips.find(x => x.id === el.dataset.id);
        if (p) playPodcast(p);
      });
    });
  }

  renderClipsList();
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

  // Auto-close mobile drawer to show playing content immediately
  if (window.closeMobileSidebar) {
    window.closeMobileSidebar();
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
              ? `<img src="${s.favicon}" alt="" loading="lazy" onerror="this.outerHTML='<div class=\\'art-fallback\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><circle cx=\\'12\\' cy=\\'12\\' r=\\'3\\'/><line x1=\\'12\\' y1=\\'22\\' x2=\\'12\\' y2=\\'15\\'/></svg></div>'">`
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

  // Auto-close mobile drawer to let the user see the visualizer or clean UI
  if (window.closeMobileSidebar) {
    window.closeMobileSidebar();
  }

  // Update UI
  document.querySelectorAll('.station-card').forEach(c => {
    c.classList.toggle('active', c.dataset.uuid === uuid);
  });
}

function switchStation(direction) {
  if (currentMode === 'tv') {
    if (!currentTVChannel) return;
    const channels = getFilteredTVChannels(tvCountryFilter, tvCategoryFilter, tvSearchQuery);
    if (channels.length === 0) return;
    let idx = channels.findIndex(c => c.url === currentTVChannel.url);
    if (idx === -1) idx = 0;
    idx = (idx + direction + channels.length) % channels.length;
    selectTVChannel(channels[idx]);
    renderTVGuide(channels.slice(0, 150));
  } else if (currentMode === 'podcasts') {
    const listEl = document.getElementById('clipsGuideList');
    if (!listEl) return;
    const channels = Array.from(listEl.querySelectorAll('.tv-channel'));
    if (channels.length === 0) return;
    let idx = channels.findIndex(c => c.classList.contains('active'));
    if (idx === -1) idx = 0;
    idx = (idx + direction + channels.length) % channels.length;
    channels[idx].click();
    channels[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    // Radio mode
    if (filteredStations.length === 0) return;
    let idx = filteredStations.findIndex(s => s.stationuuid === currentStationUuid);
    if (idx === -1) idx = 0;
    idx = (idx + direction + filteredStations.length) % filteredStations.length;
    playStationByUuid(filteredStations[idx].stationuuid);
  }
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
  if (event === 'tvChange') {
    const titleEl = document.getElementById('tvMetaTitle');
    const subEl = document.getElementById('tvMetaSubtitle');
    const overlay = document.getElementById('tvErrorOverlay');
    const loadOverlay = document.getElementById('tvLoadingOverlay');
    const loadText = document.getElementById('tvLoadingText');
    if (overlay) overlay.style.display = 'none';
    if (loadOverlay) loadOverlay.style.display = 'flex';
    if (loadText) loadText.textContent = 'З\'єднання...';
    if (titleEl) titleEl.textContent = station ? station.name : 'Оберіть відео';
    if (subEl) {
       subEl.textContent = '';
       subEl.style.display = 'none';
    }
  }
  if (event === 'playing') {
    const loadOverlay = document.getElementById('tvLoadingOverlay');
    if (loadOverlay) loadOverlay.style.display = 'none';
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
  if (event === 'tvLoadingProxy') {
    const loadText = document.getElementById('tvLoadingText');
    if (loadText && station) {
       loadText.textContent = `Спроба ${station.attempt} з ${station.total}: підключення через проксі...`;
    }
  }
  if (event === 'tvError') {
    const subEl = document.getElementById('tvMetaSubtitle');
    const playBtn = document.getElementById('tvPlay');
    const overlay = document.getElementById('tvErrorOverlay');
    const loadOverlay = document.getElementById('tvLoadingOverlay');
    if (loadOverlay) loadOverlay.style.display = 'none';
    if (subEl) {
       subEl.textContent = '⚠️ Помилка відтворення потоку (CORS/Мережа)';
       subEl.style.display = 'block';
    }
    if (overlay) overlay.style.display = 'flex';
    if (playBtn) playBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
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
let currentTVChannel = null;

let tvCountryFilter = '';
let tvCategoryFilter = '';
let tvSearchQuery = '';

async function initTVGuide() {
  tvGuideCount.textContent = 'Завантаження каналів...';
  await fetchTVPlaylists();
  
  const count = getTotalChannelCount();
  tvGuideCount.textContent = `${count} каналів`;

  populateTVFilters();
  
  const searchInput = document.getElementById('tvSearchInput');
  const countrySelect = document.getElementById('tvCountryFilter');
  const categorySelect = document.getElementById('tvCategoryFilter');

  if(searchInput) searchInput.addEventListener('input', e => { tvSearchQuery = e.target.value; applyTVFilters(); });
  if(countrySelect) countrySelect.addEventListener('change', e => { tvCountryFilter = e.target.value; applyTVFilters(); });
  if(categorySelect) categorySelect.addEventListener('change', e => { tvCategoryFilter = e.target.value; applyTVFilters(); });

  applyTVFilters();
  
  // Re-init podcasts so they get the newly loaded music channels
  initPodcasts();
}

function populateTVFilters() {
  const countries = getTVCountries();
  const cats = getTVCategories();
  
  const countryEl = document.getElementById('tvCountryFilter');
  const catEl = document.getElementById('tvCategoryFilter');
  
  if(countryEl) {
    countryEl.innerHTML = '<option value="">Всі країни</option>' + countries.map(c => `<option value="${escapeHtml(c[0])}">${escapeHtml(c[0])} (${c[1]})</option>`).join('');
  }
  if(catEl) {
    catEl.innerHTML = '<option value="">Всі жанри</option>' + cats.map(c => `<option value="${escapeHtml(c[0])}">${escapeHtml(c[0])} (${c[1]})</option>`).join('');
  }
}

function applyTVFilters() {
  const channels = getFilteredTVChannels(tvCountryFilter, tvCategoryFilter, tvSearchQuery);
  channels.sort((a, b) => a.name.localeCompare(b.name, 'uk'));
  renderTVGuide(channels.slice(0, 150)); // Limit to 150 to keep UI fast
}

function renderTVGuide(channels) {
  tvGuideList.innerHTML = channels.map((ch, idx) => {
    const isPlaying = currentTVChannel?.url === ch.url;
    return `
      <div class="tv-channel-item ${isPlaying ? 'playing' : ''}" data-index="${idx}">
        <span class="tv-channel-play-icon">${isPlaying ? '🔊' : '▶'}</span>
        <div class="tv-channel-info">
          <div class="tv-channel-name">${escapeHtml(ch.name)}</div>
          <div class="tv-channel-category">${ch.flag} ${escapeHtml(ch.country)} · ${escapeHtml(ch.category)}</div>
        </div>
      </div>
    `;
  }).join('');

  tvGuideList.querySelectorAll('.tv-channel-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(item.dataset.index);
      selectTVChannel(channels[index]);
      renderTVGuide(channels); // re-render to update playing state
    });
  });
}

async function selectTVChannel(channel) {
  currentTVChannel = channel;

  if (tvSignalMeter) {
    tvSignalMeter.classList.add('visible', 'scanning');
    tvSignalMeter.classList.remove('locked');
  }

  if (channel) {
    playTVChannel(channel);
  }

  // Auto-close mobile drawer to show the video player immediately
  if (window.closeMobileSidebar) {
    window.closeMobileSidebar();
  }

  setTimeout(() => {
    if (tvSignalMeter) {
      tvSignalMeter.classList.remove('scanning');
      tvSignalMeter.classList.add('locked');
    }
  }, 800);
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
