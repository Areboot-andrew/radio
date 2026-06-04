// ========================================
// Favorites — localStorage
// ========================================

const STORAGE_KEY = 'vsesvit_favorites';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(favs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function isFav(uuid) {
  return load().includes(uuid);
}

export function toggleFav(uuid) {
  const favs = load();
  const idx = favs.indexOf(uuid);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(uuid);
  }
  save(favs);
  return idx < 0; // true if added
}

export function getFavorites() {
  return load();
}

export function addFav(uuid) {
  const favs = load();
  if (!favs.includes(uuid)) {
    favs.push(uuid);
    save(favs);
  }
}

export function removeFav(uuid) {
  const favs = load();
  const idx = favs.indexOf(uuid);
  if (idx >= 0) {
    favs.splice(idx, 1);
    save(favs);
  }
}
