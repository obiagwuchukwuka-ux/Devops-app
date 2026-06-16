#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/devops-next-starter"
IMAGE="ghcr.io/YOUR_GITHUB_USERNAME/devops-next-starter:latest"

sudo mkdir -p "$APP_DIR"
cd "$APP_DIR"

cat > docker-compose.yml <<COMPOSE
services:
  web:
    image: ${IMAGE}
    ports:
      - "3000:3000"
    restart: unless-stopped
COMPOSE

sudo docker compose pull
sudo docker compose up -d
sudo docker ps
