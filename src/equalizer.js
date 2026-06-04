import { getFrequencyData, initAudioVisualizer, resumeAudioContext } from './player.js';

let canvas = null;
let ctx = null;
let container = null;
let animId = null;
let isActive = false;

let needleAngle = -1.3;
let targetAngle = -1.3;

export function initEqualizer(containerId) {
  container = document.getElementById(containerId);
  if (!container) return;

  canvas = document.createElement('canvas');
  canvas.style.cssText = 'width:100%;height:100%;display:block';
  container.appendChild(canvas);

  ctx = canvas.getContext('2d');
  resize();

  isActive = true;
  drawFrame();
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
  }
}

function drawFrame() {
  if (!isActive) return;
  animId = requestAnimationFrame(drawFrame);
  draw();
}

function rms(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const v = (data[i] - 128) / 128;
    sum += v * v;
  }
  return Math.sqrt(sum / data.length);
}

function draw() {
  if (!ctx || !canvas) return;
  const w = canvas.width / devicePixelRatio;
  const h = canvas.height / devicePixelRatio;

  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h * 0.58;
  const R = Math.min(w, h * 1.2) * 0.38;

  // ---- Wood panel background ----
  const woodGrad = ctx.createLinearGradient(0, 0, w, 0);
  woodGrad.addColorStop(0, '#1a0f0a');
  woodGrad.addColorStop(0.15, '#2a1a10');
  woodGrad.addColorStop(0.5, '#2d1d12');
  woodGrad.addColorStop(0.85, '#2a1a10');
  woodGrad.addColorStop(1, '#1a0f0a');
  ctx.fillStyle = woodGrad;
  ctx.beginPath();
  ctx.roundRect(8, 8, w - 16, h - 16, 12);
  ctx.fill();

  // Panel border (brass/gold)
  ctx.strokeStyle = '#8b7355';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(8, 8, w - 16, h - 16, 12);
  ctx.stroke();

  ctx.strokeStyle = '#c4a46c';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(10, 10, w - 20, h - 20, 11);
  ctx.stroke();

  // Inner dark panel
  ctx.fillStyle = '#0f0f18';
  ctx.beginPath();
  ctx.roundRect(20, 20, w - 40, h - 48, 8);
  ctx.fill();

  ctx.strokeStyle = 'rgba(59,130,246,0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(20, 20, w - 40, h - 48, 8);
  ctx.stroke();

  // ---- Screws ----
  const screwR = Math.min(w, h) * 0.012;
  const screwOffset = 16;
  drawScrew(screwOffset, screwOffset, screwR);
  drawScrew(w - screwOffset, screwOffset, screwR);
  drawScrew(screwOffset, h - screwOffset, screwR);
  drawScrew(w - screwOffset, h - screwOffset, screwR);

  // ---- Get audio level ----
  let level = 0;
  const freqData = getFrequencyData();
  if (freqData) {
    level = rms(freqData) * 2.5;
    level = Math.min(1, level);
  }
  targetAngle = -1.3 + level * 2.6;
  targetAngle = Math.max(-1.3, Math.min(1.3, targetAngle));
  needleAngle += (targetAngle - needleAngle) * 0.08;

  // ---- Scale ----
  const startA = -1.7;
  const endA = 1.7;

  ctx.save();
  ctx.translate(cx, cy);

  // Arc background
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = R * 0.4;
  ctx.beginPath();
  ctx.arc(0, 0, R * 0.72, startA, endA);
  ctx.stroke();

  // Scale ticks
  const total = 31;
  for (let i = 0; i <= total; i++) {
    const t = i / total;
    const angle = startA + t * (endA - startA);
    const isMain = i % 4 === 0;
    const tickLen = isMain ? R * 0.1 : R * 0.05;
    const innerR = R * (isMain ? 0.71 : 0.74);

    ctx.strokeStyle = isMain
      ? `rgba(255,240,200,${0.2 + (1 - Math.abs(t - 0.5) * 2) * 0.15})`
      : 'rgba(255,240,200,0.08)';
    ctx.lineWidth = isMain ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * innerR, Math.sin(angle) * innerR);
    ctx.lineTo(Math.cos(angle) * (innerR + tickLen), Math.sin(angle) * (innerR + tickLen));
    ctx.stroke();
  }

  // Cold arc (outer decorative ring)
  ctx.strokeStyle = 'rgba(100,180,255,0.04)';
  ctx.lineWidth = R * 0.35;
  ctx.beginPath();
  ctx.arc(0, 0, R * 0.52, startA, endA);
  ctx.stroke();

  // Zone colors on scale
  const zoneR = R * 0.79;
  // Green zone (safe)
  ctx.strokeStyle = 'rgba(34,197,94,0.15)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, zoneR, startA, startA + (endA - startA) * 0.55);
  ctx.stroke();
  // Yellow zone (caution)
  ctx.strokeStyle = 'rgba(234,179,8,0.15)';
  ctx.beginPath();
  ctx.arc(0, 0, zoneR, startA + (endA - startA) * 0.55, startA + (endA - startA) * 0.8);
  ctx.stroke();
  // Red zone (overload)
  ctx.strokeStyle = 'rgba(239,68,68,0.15)';
  ctx.beginPath();
  ctx.arc(0, 0, zoneR, startA + (endA - startA) * 0.8, endA);
  ctx.stroke();

  // Labels
  const labels = [
    { text: '-20', pos: 0.05 },
    { text: '-10', pos: 0.35 },
    { text: '-5', pos: 0.55 },
    { text: '0', pos: 0.72 },
    { text: '+3', pos: 0.9 },
  ];
  for (const lbl of labels) {
    const a = startA + lbl.pos * (endA - startA);
    const lr = R * 0.62;
    ctx.fillStyle = 'rgba(255,240,200,0.3)';
    ctx.font = `bold ${Math.round(R * 0.058)}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(lbl.text, Math.cos(a) * lr, Math.sin(a) * lr + 2);
  }

  // ---- Needle shadow ----
  ctx.shadowColor = 'rgba(255,60,60,0.25)';
  ctx.shadowBlur = 10;

  // Needle
  const nx = Math.cos(needleAngle) * R * 0.7;
  const ny = Math.sin(needleAngle) * R * 0.7;

  const needleGrad = ctx.createLinearGradient(0, 0, nx * 0.3, ny * 0.3);
  needleGrad.addColorStop(0, '#ff4444');
  needleGrad.addColorStop(0.5, '#ff6666');
  needleGrad.addColorStop(1, '#cc2222');
  ctx.strokeStyle = needleGrad;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(nx, ny);
  ctx.stroke();

  // Needle tip highlight
  ctx.fillStyle = '#ff8888';
  ctx.beginPath();
  ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowBlur = 0;

  // ---- Center spindle ----
  const spR = R * 0.055;

  const spindleGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, spR);
  spindleGrad.addColorStop(0, '#ffd700');
  spindleGrad.addColorStop(0.3, '#daa520');
  spindleGrad.addColorStop(0.7, '#8b6914');
  spindleGrad.addColorStop(1, '#4a3710');
  ctx.fillStyle = spindleGrad;
  ctx.beginPath();
  ctx.arc(0, 0, spR, 0, Math.PI * 2);
  ctx.fill();

  // Spindle highlight
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.beginPath();
  ctx.arc(-spR * 0.25, -spR * 0.25, spR * 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255,215,0,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, 0, spR, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();

  // ---- Brand ----
  ctx.fillStyle = 'rgba(255,240,200,0.06)';
  ctx.font = `bold ${Math.round(R * 0.045)}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('RETRO VU', cx, h - 22);

  // ---- Decorative line near bottom ----
  ctx.strokeStyle = 'rgba(255,240,200,0.04)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - R * 0.4, h - 16);
  ctx.lineTo(cx + R * 0.4, h - 16);
  ctx.stroke();
}

function drawScrew(x, y, r) {
  ctx.save();
  ctx.shadowBlur = 0;

  const sg = ctx.createRadialGradient(x, y, 0, x, y, r);
  sg.addColorStop(0, '#8b7355');
  sg.addColorStop(0.4, '#6b5b3e');
  sg.addColorStop(1, '#3d3221');
  ctx.fillStyle = sg;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255,240,200,0.1)';
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();

  // Slot
  ctx.strokeStyle = 'rgba(0,0,0,0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x - r * 0.6, y);
  ctx.lineTo(x + r * 0.6, y);
  ctx.stroke();

  ctx.restore();
}

export function startEqualizer() {
  if (!isActive) {
    isActive = true;
    initAudioVisualizer();
    resumeAudioContext();
    drawFrame();
  }
}

export function stopEqualizer() {
  isActive = false;
  if (animId) {
    cancelAnimationFrame(animId);
    animId = null;
  }
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  needleAngle = -1.3;
  targetAngle = -1.3;
}

export function resizeEqualizer() {
  resize();
}
