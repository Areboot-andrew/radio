import { getFrequencyData, initAudioVisualizer, resumeAudioContext, getCurrentStation } from './player.js';
import { FREQ_BANDS, AIRBAND_DETAILS, SDR_RECEIVERS } from './tunerData.js';

let container = null;
let canvas = null;
let ctx = null;
let waterfallCanvas = null;
let waterfallCtx = null;
let animId = null;
let isActive = false;

let freqMin = 100e3;
let freqMax = 2.5e9;
let tuneFreq = 95e6;
let dragTuneFreq = null;
let isDragging = false;

let waterfallRows = [];
let waterfallMaxRows = 300;
let waterfallW = 0;
let waterfallH = 0;

let selectedCountryCode = '';
let showSdrList = false;

export function initTuner(containerId) {
  console.log('tuner: initTuner called, containerId:', containerId);
  container = document.getElementById(containerId);
  if (!container) {
    console.warn('tuner: container not found');
    return;
  }

  canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  container.appendChild(canvas);

  ctx = canvas.getContext('2d');
  resize();
  initWaterfall();

  setupEvents();
  populateSdrCountries();

  updateOverlayInfo();
  isActive = true;
  drawLoop();
}

function resize() {
  if (!canvas || !container) return;
  const w = container.clientWidth;
  const h = container.clientHeight;
  if (w > 0 && h > 0) {
    canvas.width = w * devicePixelRatio;
    canvas.height = h * devicePixelRatio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    initWaterfall();
  }
}

function initWaterfall() {
  if (!canvas) return;
  const w = canvas.width / devicePixelRatio;
  const h = canvas.height / devicePixelRatio;
  waterfallW = w;
  waterfallH = Math.floor(h * 0.65);
  waterfallMaxRows = waterfallH;

  waterfallCanvas = document.createElement('canvas');
  waterfallCanvas.width = w;
  waterfallCanvas.height = waterfallH;
  waterfallCtx = waterfallCanvas.getContext('2d');

  const rowCount = Math.min(waterfallH, 300);
  waterfallRows = [];
  for (let i = 0; i < rowCount; i++) {
    waterfallRows.push(new Uint8Array(128));
  }
}

function freqToX(freq) {
  const lMin = Math.log10(freqMin);
  const lMax = Math.log10(freqMax);
  const lFreq = Math.log10(Math.max(freqMin, Math.min(freqMax, freq)));
  return ((lFreq - lMin) / (lMax - lMin)) * waterfallW;
}

function xToFreq(x) {
  const lMin = Math.log10(freqMin);
  const lMax = Math.log10(freqMax);
  const pct = x / waterfallW;
  return Math.pow(10, lMin + pct * (lMax - lMin));
}

function setupEvents() {
  if (!canvas) return;

  canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (y < waterfallH) {
      isDragging = true;
      tuneFreq = xToFreq(x);
      updateOverlayInfo();
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    tuneFreq = xToFreq(Math.max(0, Math.min(waterfallW, x)));
    updateOverlayInfo();
  });

  canvas.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      onTuneChange();
    }
  });

  canvas.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      onTuneChange();
    }
  });

  // Touch
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const t = e.touches[0];
    const x = t.clientX - rect.left;
    const y = t.clientY - rect.top;
    if (y < waterfallH) {
      isDragging = true;
      tuneFreq = xToFreq(x);
      updateOverlayInfo();
    }
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!isDragging) return;
    const rect = canvas.getBoundingClientRect();
    const t = e.touches[0];
    const x = t.clientX - rect.left;
    tuneFreq = xToFreq(Math.max(0, Math.min(waterfallW, x)));
    updateOverlayInfo();
  }, { passive: false });

  canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    if (isDragging) {
      isDragging = false;
      onTuneChange();
    }
  }, { passive: false });

  // Buttons
  document.getElementById('tunerPrev')?.addEventListener('click', () => {
    tuneFreq = Math.max(freqMin, tuneFreq * 0.9);
    updateOverlayInfo();
    onTuneChange();
  });
  document.getElementById('tunerNext')?.addEventListener('click', () => {
    tuneFreq = Math.min(freqMax, tuneFreq * 1.1);
    updateOverlayInfo();
    onTuneChange();
  });

  document.getElementById('tunerToggleSdrs')?.addEventListener('click', toggleSdrList);
  document.getElementById('tunerCountrySelect')?.addEventListener('change', (e) => {
    selectedCountryCode = e.target.value;
    renderSdrList();
  });
}

function getFrequencyLabel(freq) {
  if (freq < 1e3) return `${freq.toFixed(0)} Hz`;
  if (freq < 1e6) return `${(freq / 1e3).toFixed(1)} kHz`;
  if (freq < 1e9) return `${(freq / 1e6).toFixed(2)} MHz`;
  return `${(freq / 1e9).toFixed(3)} GHz`;
}

function getBandForFreq(freq) {
  for (const band of FREQ_BANDS) {
    if (freq >= band.min && freq <= band.max) return band;
  }
  return null;
}

function getAirbandDetail(freq) {
  const fMHz = freq / 1e6;
  for (const d of AIRBAND_DETAILS) {
    const parts = d.freq.split('–');
    const f1 = parseFloat(parts[0].trim());
    const f2 = parts[1] ? parseFloat(parts[1].trim().split(' ')[0]) : f1;
    if (fMHz >= f1 && fMHz <= f2) return d;
  }
  return null;
}

function updateOverlayInfo() {
  const freqLabel = document.getElementById('tunerFreqLabel');
  const bandLabel = document.getElementById('tunerBandLabel');
  const hintText = document.getElementById('tunerHintText');
  const hintBar = document.getElementById('tunerHintBar');

  if (freqLabel) freqLabel.textContent = getFrequencyLabel(tuneFreq);

  const band = getBandForFreq(tuneFreq);
  if (bandLabel) {
    bandLabel.textContent = band ? `${band.name} — ${band.label}` : '--';
  }

  if (hintBar && hintText) {
    if (tuneFreq >= 108e6 && tuneFreq <= 137e6) {
      const ad = getAirbandDetail(tuneFreq);
      if (ad) {
        hintText.textContent = `✈ ${ad.label} (${ad.freq} MHz)`;
        return;
      }
    }
    if (band) {
      hintText.textContent = band.hint;
    } else {
      hintText.textContent = `Частота ${getFrequencyLabel(tuneFreq)} — зазвичай тут працюють службові та військові радіосистеми`;
    }
  }
}

function onTuneChange() {
  updateOverlayInfo();
  const station = getCurrentStation();
  if (station) {
    const band = getBandForFreq(tuneFreq);
  }
}

function populateSdrCountries() {
  const sel = document.getElementById('tunerCountrySelect');
  if (!sel) return;
  const codes = [...new Set(SDR_RECEIVERS.map(r => r.code))];
  codes.sort();
  sel.innerHTML = '<option value="">SDR приймачі по країні</option>' +
    codes.map(code => {
      const info = SDR_RECEIVERS.find(r => r.code === code);
      return `<option value="${code}">${info.country}</option>`;
    }).join('');
}

function toggleSdrList() {
  showSdrList = !showSdrList;
  const el = document.getElementById('tunerSdrList');
  if (el) el.style.display = showSdrList ? 'block' : 'none';
  if (showSdrList) renderSdrList();
}

function renderSdrList() {
  const el = document.getElementById('tunerSdrList');
  if (!el) return;
  const receivers = selectedCountryCode
    ? SDR_RECEIVERS.filter(r => r.code === selectedCountryCode)
    : SDR_RECEIVERS;
  el.innerHTML = receivers.map(r => `
    <div class="sdr-country-group">
      <div class="sdr-country-title">${r.country}</div>
      ${r.receivers.map(sdr => `
        <div class="sdr-item">
          <div class="sdr-item-name">${sdr.name}</div>
          <div class="sdr-item-meta">${sdr.type} · ${sdr.bands}</div>
          <div class="sdr-item-desc">${sdr.desc}</div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function drawLoop() {
  if (!isActive) return;
  animId = requestAnimationFrame(drawLoop);
  draw();
}

function waterColor(value) {
  const v = Math.min(1, Math.max(0, value));
  if (v < 0.25) {
    const t = v / 0.25;
    return [Math.round(0 + t * 10), Math.round(0 + t * 40), Math.round(20 + t * 80)];
  } else if (v < 0.5) {
    const t = (v - 0.25) / 0.25;
    return [Math.round(10 + t * 50), Math.round(40 + t * 160), Math.round(100 + t * 50)];
  } else if (v < 0.75) {
    const t = (v - 0.5) / 0.25;
    return [Math.round(60 + t * 140), Math.round(200 - t * 80), Math.round(150 - t * 100)];
  } else {
    const t = (v - 0.75) / 0.25;
    return [Math.round(200 + t * 55), Math.round(120 - t * 80), Math.round(50 - t * 30)];
  }
}

function draw() {
  if (!ctx || !canvas || !waterfallCtx) return;
  const w = canvas.width / devicePixelRatio;
  const h = canvas.height / devicePixelRatio;
  if (w < 10 || h < 10) return;

  const data = getFrequencyData();
  if (data) {
    waterfallRows.shift();
    waterfallRows.push(new Uint8Array(data));
    if (waterfallRows.length > waterfallMaxRows) {
      waterfallRows = waterfallRows.slice(-waterfallMaxRows);
    }
  }

  // Draw waterfall
  const imgData = waterfallCtx.createImageData(waterfallW, waterfallH);
  const pixels = imgData.data;
  const startRow = Math.max(0, waterfallRows.length - waterfallH);

  for (let row = 0; row < waterfallH && (startRow + row) < waterfallRows.length; row++) {
    const rowData = waterfallRows[startRow + row];
    const rowLen = rowData.length;
    for (let col = 0; col < waterfallW; col++) {
      const freq = xToFreq(col / waterfallW * (waterfallW - 1));
      const fMin = freqMin;
      const fMax = freqMax;
      const lMin = Math.log10(fMin);
      const lMax = Math.log10(fMax);
      const lFreq = Math.log10(freq);
      const pct = (lFreq - lMin) / (lMax - lMin);
      const binIdx = Math.min(rowLen - 1, Math.floor(pct * rowLen));
      const val = rowData[binIdx] / 255;
      const [r, g, b] = waterColor(val);
      const idx = (row * waterfallW + col) * 4;
      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = 200;
    }
  }
  waterfallCtx.putImageData(imgData, 0, 0);

  // Clear main canvas
  ctx.clearRect(0, 0, w, h);

  // Dark background
  ctx.fillStyle = '#0a0a10';
  ctx.fillRect(0, 0, w, h);

  // Panel border
  ctx.strokeStyle = 'rgba(59,130,246,0.08)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(4, 4, w - 8, h - 8, 8);
  ctx.stroke();

  // Draw waterfall
  ctx.drawImage(waterfallCanvas, 4, 0, w - 8, waterfallH);

  // Waterfall bottom gradient
  const wfade = ctx.createLinearGradient(0, waterfallH - 20, 0, waterfallH);
  wfade.addColorStop(0, 'transparent');
  wfade.addColorStop(1, '#0a0a10');
  ctx.fillStyle = wfade;
  ctx.fillRect(4, waterfallH - 20, w - 8, 20);

  // Frequency scale zone
  const scaleY = waterfallH;
  const scaleH = h - waterfallH;
  ctx.fillStyle = '#111118';
  ctx.fillRect(0, scaleY, w, scaleH);

  // Scale gradient line
  const sGrad = ctx.createLinearGradient(0, scaleY, 0, scaleY + scaleH);
  sGrad.addColorStop(0, 'rgba(59,130,246,0.15)');
  sGrad.addColorStop(0.5, 'rgba(59,130,246,0.05)');
  sGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = sGrad;
  ctx.fillRect(0, scaleY, w, scaleH * 0.3);

  // Draw band markers on scale (simplified - just colored blocks)
  const bandY = scaleY + 4;
  const bandH = scaleH * 0.55;

  for (const band of FREQ_BANDS) {
    const bx1 = freqToX(Math.max(freqMin, band.min));
    const bx2 = freqToX(Math.min(freqMax, band.max));
    if (bx2 <= bx1) continue;
    const bw = bx2 - bx1;
    if (bw < 5) continue;

    ctx.fillStyle = band.color + '20';
    ctx.fillRect(bx1, bandY, bw, bandH);

    ctx.fillStyle = band.color + '40';
    ctx.font = `${Math.min(bw * 0.18, 11)}px monospace`;
    ctx.textAlign = 'center';
    if (bw > 30) {
      ctx.fillText(band.name, (bx1 + bx2) / 2, bandY + bandH * 0.65);
    }
  }

  // Draw scale ticks and labels
  const tickY = scaleY + bandH + 4;
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.font = '8px monospace';
  ctx.textAlign = 'center';

  const majorFreqs = [150e3, 500e3, 1e6, 2e6, 5e6, 10e6, 15e6, 20e6, 30e6, 50e6, 100e6, 150e6, 200e6, 300e6, 500e6, 800e6, 1e9, 1.5e9, 2e9, 2.5e9];
  for (const f of majorFreqs) {
    if (f < freqMin || f > freqMax) continue;
    const x = freqToX(f);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(x, bandY, 1, bandH);
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillText(getFrequencyLabel(f), x, tickY + 10);
  }

  // Needle line across waterfall
  const nx = freqToX(tuneFreq);
  ctx.strokeStyle = 'rgba(239,68,68,0.7)';
  ctx.lineWidth = 2;
  ctx.shadowColor = 'rgba(239,68,68,0.3)';
  ctx.shadowBlur = 6;
  ctx.beginPath();
  ctx.moveTo(nx, 0);
  ctx.lineTo(nx, waterfallH);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Needle tip at bottom
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(nx, waterfallH, 4, 0, Math.PI * 2);
  ctx.fill();

  // Current frequency readout on needle
  ctx.fillStyle = 'rgba(239,68,68,0.15)';
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(getFrequencyLabel(tuneFreq), nx, 12);
}

export function startTuner() {
  initAudioVisualizer();
  resumeAudioContext();
  if (!isActive) {
    isActive = true;
    drawLoop();
  }
  resize();
  updateOverlayInfo();
}

export function stopTuner() {
  isActive = false;
  if (animId) {
    cancelAnimationFrame(animId);
    animId = null;
  }
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

export function resizeTuner() {
  resize();
}
