// ========================================
// Mini Globe — Player bar indicator
// ========================================

let canvas, ctx;
let rotation = 0;
let targetLat = 0, targetLng = 0;
let currentLat = 0, currentLng = 0;
let animId = null;
let isActive = false;

const GLOBE_RADIUS = 18;
const DOTS = [];

// Generate dot grid for wireframe globe
for (let lat = -80; lat <= 80; lat += 15) {
  const ringCount = Math.max(6, Math.floor(Math.cos(lat * Math.PI / 180) * 16));
  for (let i = 0; i < ringCount; i++) {
    const lng = (360 / ringCount) * i;
    DOTS.push({ lat, lng });
  }
}

export function initMiniGlobe(canvasId) {
  canvas = document.getElementById(canvasId);
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  draw();
}

function project(lat, lng, rot) {
  const latRad = lat * Math.PI / 180;
  const lngRad = (lng + rot) * Math.PI / 180;

  const x3d = Math.cos(latRad) * Math.sin(lngRad);
  const y3d = Math.sin(latRad);
  const z3d = Math.cos(latRad) * Math.cos(lngRad);

  // Simple orthographic projection
  const scale = GLOBE_RADIUS / (GLOBE_RADIUS + 8 - z3d * GLOBE_RADIUS * 0.4);
  const x2d = x3d * GLOBE_RADIUS;
  const y2d = -y3d * GLOBE_RADIUS;

  return { x: x2d + 22, y: y2d + 22, z: z3d, visible: z3d > -0.2 };
}

function draw() {
  if (!ctx) return;

  ctx.clearRect(0, 0, 44, 44);

  // Draw globe base
  ctx.beginPath();
  ctx.arc(22, 22, GLOBE_RADIUS, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(59, 130, 246, 0.06)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
  ctx.lineWidth = 0.8;
  ctx.stroke();

  // Draw wireframe dots
  for (const dot of DOTS) {
    const p = project(dot.lat, dot.lng, rotation);
    if (!p.visible) continue;

    const alpha = 0.2 + (p.z + 1) * 0.25;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 0.8, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100, 116, 139, ${alpha})`;
    ctx.fill();
  }

  // Draw active location ping
  if (isActive) {
    // Interpolate
    currentLat += (targetLat - currentLat) * 0.1;
    currentLng += (targetLng - currentLng) * 0.1;

    const pp = project(currentLat, currentLng, rotation);
    if (pp.visible) {
      // Glow
      const grad = ctx.createRadialGradient(pp.x, pp.y, 0, pp.x, pp.y, 8);
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
      grad.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.beginPath();
      ctx.arc(pp.x, pp.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(pp.x, pp.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#3b82f6';
      ctx.fill();
    }
  }

  rotation += 0.3;
  animId = requestAnimationFrame(draw);
}

export function setMiniGlobeLocation(lat, lng) {
  targetLat = lat || 0;
  targetLng = lng || 0;
  isActive = true;
}

export function clearMiniGlobe() {
  isActive = false;
}

export function stopMiniGlobe() {
  if (animId) {
    cancelAnimationFrame(animId);
    animId = null;
  }
}

export function startMiniGlobe() {
  if (!animId) {
    draw();
  }
}
