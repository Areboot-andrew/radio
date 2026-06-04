# Deploy — radio-player

One-shot deploy with `git clone` + `docker compose`.

## Quick start

```bash
# 1. set repo (or edit deploy.sh)
export REPO_URL=https://github.com/Areboot-andrew/radio.git
export BRANCH=main
export RADIO_PORT=8080

# 2. run
curl -fsSL https://raw.githubusercontent.com/Areboot-andrew/radio/main/deploy.sh | bash
```

Or locally:

```bash
chmod +x deploy.sh
./deploy.sh
```

The script will:
1. `git clone` (or `git pull`) the repo into `./radio-player/`
2. `docker compose up -d --build`
3. Verify the container is responding on `http://localhost:$RADIO_PORT`

## Environment variables

| Var          | Default                                          | What                         |
|--------------|--------------------------------------------------|------------------------------|
| `REPO_URL`   | `https://github.com/YOUR_USER/radio-player.git`  | Git repo URL                 |
| `BRANCH`     | `main`                                           | Branch to track              |
| `APP_DIR`    | `radio-player`                                   | Local clone directory        |
| `RADIO_PORT` | `8080`                                           | Host port (container uses 80)|

## Update / redeploy

```bash
./deploy.sh   # git pull + rebuild + restart
```

## Manual control

```bash
cd radio-player
docker compose logs -f          # live logs
docker compose ps               # status
docker compose restart          # restart
docker compose down             # stop + remove
docker compose up -d --build    # rebuild
```

## Image details

- **Build:** multi-stage (`node:20-alpine` → `nginx:1.27-alpine`)
- **Final image:** ~25 MB (Alpine + static files only)
- **Runtime:** nginx, non-root user, read-only root, tmpfs for cache/pid
- **Healthcheck:** `wget --spider http://localhost/`
- **Headers:** gzip, immutable cache for hashed assets, no-cache for HTML, HLS-friendly

## Production hardening

For a real server, put it behind a reverse proxy (Caddy / Traefik / nginx-proxy) for TLS:

```bash
# Example: Caddyfile
radio.example.com {
  reverse_proxy localhost:8080
}
```

Or enable TLS directly in this container by mounting a cert and changing the listen line to 443.
