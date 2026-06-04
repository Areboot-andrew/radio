import Globe from 'globe.gl';

const COUNTRY_COORDS = {
  'UA': { lat: 49.0, lng: 31.0 },
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
  'NL': { lat: 52.2, lng: 5.3 },
  'SE': { lat: 60.1, lng: 18.6 },
  'NO': { lat: 60.5, lng: 8.8 },
  'IL': { lat: 31.0, lng: 34.8 },
  'AE': { lat: 24.0, lng: 54.0 },
  'CN': { lat: 35.9, lng: 104.2 },
  'QA': { lat: 25.3, lng: 51.2 },
  'SG': { lat: 1.3, lng: 103.8 },
  'BE': { lat: 50.5, lng: 4.5 },
  'BY': { lat: 53.5, lng: 28.0 },
  'CH': { lat: 46.8, lng: 8.2 },
  'CZ': { lat: 49.8, lng: 15.3 },
  'RO': { lat: 45.9, lng: 24.9 },
  'HU': { lat: 47.2, lng: 19.5 },
  'AT': { lat: 47.5, lng: 14.3 },
  'PT': { lat: 39.4, lng: -8.2 },
  'RU': { lat: 61.5, lng: 105.0 },
  'MX': { lat: 23.6, lng: -102.5 },
  'AR': { lat: -38.4, lng: -63.6 },
  'ZA': { lat: -30.6, lng: 22.9 },
  'EG': { lat: 26.8, lng: 30.8 },
  'NG': { lat: 9.1, lng: 8.7 },
  'KE': { lat: 0.3, lng: 38.0 },
  'TH': { lat: 15.9, lng: 101.0 },
  'VN': { lat: 14.0, lng: 108.0 },
  'ID': { lat: -0.8, lng: 117.0 },
  'PH': { lat: 12.0, lng: 122.0 },
  'MY': { lat: 4.2, lng: 102.0 },
  'TW': { lat: 23.7, lng: 121.0 },
  'HK': { lat: 22.3, lng: 114.0 },
  'SA': { lat: 24.0, lng: 45.0 },
  'IR': { lat: 32.0, lng: 53.0 },
  'IQ': { lat: 33.0, lng: 44.0 },
  'PK': { lat: 30.0, lng: 70.0 },
  'BD': { lat: 24.0, lng: 90.0 },
  'GR': { lat: 38.0, lng: 23.7 },
  'DK': { lat: 56.0, lng: 10.0 },
  'FI': { lat: 62.0, lng: 26.0 },
  'SK': { lat: 48.7, lng: 19.5 },
  'BG': { lat: 42.7, lng: 25.5 },
  'RS': { lat: 44.0, lng: 21.0 },
  'HR': { lat: 45.1, lng: 15.2 },
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
  'IE': { lat: 53.0, lng: -8.0 },
};

let globe = null;
let globeContainer = null;
let onStationClickCb = null;
let onStationHoverCb = null;

export function initGlobe(containerId) {
  globeContainer = document.getElementById(containerId);
  if (!globeContainer) return null;

  globe = Globe()(globeContainer)
    .globeImageUrl('//unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe@2.31.1/example/img/earth-topology.png')
    .backgroundColor('#0a0a0f')
    .atmosphereColor('#3b82f6')
    .atmosphereAltitude(0.15)
    .pointOfView({ lat: 30, lng: 10, altitude: 2.5 })
    .showGraticules(true)
    .showAtmosphere(true)
    .pointsData([])
    .pointColor('color')
    .pointAltitude(0.01)
    .pointRadius('radius')
    .pointsMerge(false)
    .pointLabel('label')
    .polygonsData([])
    .polygonCapColor(() => 'rgba(59,130,246,0.08)')
    .polygonSideColor(() => 'rgba(59,130,246,0.02)')
    .polygonStrokeColor(() => 'rgba(59,130,246,0.3)')
    .polygonLabel((d) => `
      <div style="font-family:Inter,sans-serif;font-size:11px;padding:4px 8px;background:rgba(10,10,15,0.85);backdrop-filter:blur(8px);border-radius:6px;border:1px solid rgba(255,255,255,0.1);color:#e5e7eb;white-space:nowrap;">
        ${d.properties?.NAME || d.properties?.name || ''}
      </div>`)
    .onPointClick((point) => {
      if (onStationClickCb && point?.stationuuid) {
        onStationClickCb(point.stationuuid);
      }
    })
    .onPointHover((point) => {
      if (onStationHoverCb) {
        onStationHoverCb(point);
      }
    });

  globe.controls().autoRotate = false;
  globe.controls().enableZoom = true;

  loadCountryPolygons();

  return globe;
}

async function loadCountryPolygons() {
  try {
    const urls = [
      'https://raw.githubusercontent.com/vasturiano/three-globe/master/example/datasets/ne_110m_admin_0_countries.json',
      'https://cdn.jsdelivr.net/gh/vasturiano/three-globe@master/example/datasets/ne_110m_admin_0_countries.json',
    ];
    let data = null;
    for (const url of urls) {
      try {
        const res = await fetch(url);
        if (res.ok) { data = await res.json(); break; }
      } catch {}
    }
    if (data) {
      const features = data.features;
      if (features && features.length) {
        globe.polygonsData(features);
      }
    }
  } catch (e) {
    // silently fail — globe still works without borders
  }
}

export function setOnStationClick(cb) {
  onStationClickCb = cb;
}

export function setOnStationHover(cb) {
  onStationHoverCb = cb;
}

export function setActiveStation(station) {
  if (!globe) return;

  if (!station || !station.stationuuid) {
    globe.pointsData([]);
    return;
  }

  let lat = station.geo_lat;
  let lng = station.geo_long;

  if ((!lat || !lng) && station.countrycode) {
    const coords = COUNTRY_COORDS[station.countrycode];
    if (coords) {
      lat = coords.lat;
      lng = coords.lng;
    }
  }

  const marker = {
    stationuuid: station.stationuuid,
    lat,
    lng,
    color: '#3b82f6',
    radius: 0.5,
    label: `<div style="font-family:Inter,sans-serif;font-size:12px;padding:8px 12px;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,0.15);border:1px solid rgba(0,0,0,0.06);"><div style="font-weight:600;margin-bottom:2px;">${station.name}</div><div style="color:#6b7280;font-size:11px;">${station.country} · ${station.genre}${station.bitrate ? ` · ${station.bitrate}kbps` : ''}</div></div>`,
    name: station.name,
  };

  globe.pointsData([marker]);

  if (lat && lng) {
    globe.pointOfView({ lat, lng, altitude: 1.4 }, 1200);
  }
}

export function focusOnCountry(countryCode) {
  if (!globe) return;
  const coords = COUNTRY_COORDS[countryCode];
  if (coords) {
    globe.pointsData([]);
    globe.pointOfView({ lat: coords.lat, lng: coords.lng, altitude: 1.6 }, 1000);
  }
}

export function resizeGlobe() {
  if (globe && globeContainer) {
    const w = globeContainer.clientWidth;
    const h = globeContainer.clientHeight;
    if (w > 0 && h > 0) {
      globe.width(w);
      globe.height(h);
    }
  }
}

export function pauseGlobe() {
  if (globe) {
    globe.pauseAnimation();
  }
}

export function resumeGlobe() {
  if (globe) {
    globe.resumeAnimation();
  }
}

export function destroyGlobe() {
  if (globe) {
    globe._buildingsData = null;
    globe = null;
  }
}
