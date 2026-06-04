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
RUN rm /etc/nginx/conf.d/default.conf

# Custom nginx config (SPA fallback, gzip, cache)
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Static build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Run as non-root (nginx-alpine ships with nginx user; pid needs /tmp)
RUN sed -i 's|^pid.*|pid /tmp/nginx.pid;|' /etc/nginx/nginx.conf \
    && touch /tmp/nginx.pid \
    && chown nginx:nginx /tmp/nginx.pid

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

USER nginx

CMD ["nginx", "-g", "daemon off;"]
