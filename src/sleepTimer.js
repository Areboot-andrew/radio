// ========================================
// Sleep Timer
// ========================================

let timerId = null;
let endTime = null;
let remainingMs = 0;
let onTickCb = null;
let onCompleteCb = null;
let tickInterval = null;

export function startTimer(minutes, { onTick, onComplete }) {
  stopTimer();

  remainingMs = minutes * 60 * 1000;
  endTime = Date.now() + remainingMs;
  onTickCb = onTick;
  onCompleteCb = onComplete;

  tickInterval = setInterval(() => {
    const left = endTime - Date.now();
    if (left <= 0) {
      remainingMs = 0;
      onTickCb?.(0);
      onCompleteCb?.();
      stopTimer();
    } else {
      remainingMs = left;
      onTickCb?.(Math.ceil(left / 1000));
    }
  }, 1000);

  onTickCb?.(Math.ceil(remainingMs / 1000));
}

export function stopTimer() {
  if (tickInterval) {
    clearInterval(tickInterval);
    tickInterval = null;
  }
  timerId = null;
  endTime = null;
  remainingMs = 0;
}

export function isRunning() {
  return tickInterval !== null;
}

export function getRemainingSeconds() {
  if (!endTime) return 0;
  return Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
}

export function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
