#!/usr/bin/env bash
# =============================================
# Deploy radio-player via git clone + docker compose
# =============================================
set -euo pipefail

REPO_URL="${REPO_URL:-https://github.com/Areboot-andrew/radio.git}"
APP_DIR="${APP_DIR:-radio}"
BRANCH="${BRANCH:-main}"
PORT="${RADIO_PORT:-8080}"

step() { printf "\n\033[1;34m▶ %s\033[0m\n" "$*"; }
ok()   { printf "  \033[1;32m✔\033[0m %s\n" "$*"; }
warn() { printf "  \033[1;33m⚠\033[0m %s\n" "$*"; }
die()  { printf "\n\033[1;31m✘ %s\033[0m\n" "$*" >&2; exit 1; }

[ -n "${REPO_URL}" ] || die "REPO_URL is empty"

# ----- 0. tools -----
command -v docker  >/dev/null || die "docker not installed"
command -v git    >/dev/null || die "git not installed"
docker compose version >/dev/null 2>&1 \
  || docker-compose --version >/dev/null 2>&1 \
  || die "docker compose plugin not installed"

# ----- 1. clone or pull -----
if [ -d "$APP_DIR/.git" ]; then
  step "Updating existing repo ($APP_DIR)"
  git -C "$APP_DIR" fetch --depth 1 origin "$BRANCH"
  git -C "$APP_DIR" reset --hard "origin/$BRANCH"
  ok "updated to origin/$BRANCH"
else
  step "Cloning $REPO_URL → $APP_DIR"
  git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
  ok "cloned"
fi

# ----- 2. port -----
step "Port: $PORT"
export RADIO_PORT="$PORT"

# ----- 3. build + start -----
step "Building image & starting container"
cd "$APP_DIR"

if docker compose version >/dev/null 2>&1; then
  docker compose up -d --build --remove-orphans
else
  docker-compose up -d --build --remove-orphans
fi

# ----- 4. status -----
step "Container status"
docker ps --filter "name=radio-player" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

URL="http://localhost:${PORT}"
step "Done → open $URL"

if command -v curl >/dev/null; then
  sleep 2
  if curl -fsSI "$URL" >/dev/null; then
    ok "HTTP 200 — ready"
  else
    warn "Container is up but not responding yet; check: docker logs radio-player"
  fi
fi
