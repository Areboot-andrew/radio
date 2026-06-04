# =============================================
# Multi-stage build: Vite → static → nginx
# =============================================

# ---------- Stage 1: build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first (cache layer)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Build static assets
COPY . .
RUN npm run build

# ---------- Stage 2: serve ----------
FROM nginx:1.27-alpine

# Drop default config
RUN rm -f /etc/nginx/conf.d/default.conf

# Custom nginx config (SPA fallback, gzip, cache)
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Static build output
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx:1.27-alpine ships with: wget (busybox), no curl
# Coolify needs wget/curl for healthcheck — wget is already there.
# Healthcheck — use the same wget that alpine ships, but via `wget --spider`
HEALTHCHECK --interval=30s --timeout=3s --retries=3 --start-period=5s \
  CMD wget -q -O- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

# Listen on 8080 inside the container so we don't need root for port binding.
# The compose file maps host port to 8080 inside.
EXPOSE 8080

# Run as root (standard nginx-in-container pattern).
# Static-only SPA → no real attack surface, and avoids the
# /var/cache/nginx + /var/run + port-80 dance.
CMD ["nginx", "-g", "daemon off;"]
