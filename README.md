# DevOps Next Starter

A simple production-style Next.js website created for hands-on DevOps practice.

## What you will practice

- Git branching and pull requests
- Local development
- Production build
- Docker image creation
- Docker Compose deployment
- Nginx reverse proxy
- HTTPS setup with certificates
- GitHub Actions CI/CD
- Container registry publishing
- EC2 or VPS deployment
- Kubernetes deployment basics
- Health checks, logs, rollback, and monitoring

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Health endpoint:

```bash
curl http://localhost:3000/api/health
```

## Build for production

```bash
npm run build
npm start
```

## Run with Docker

```bash
docker build -t devops-next-starter .
docker run -p 3000:3000 devops-next-starter
```

## Run with Docker Compose and Nginx

```bash
docker compose up --build -d
curl http://localhost/healthz
```

## Suggested DevOps workflow

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Create a `dev` branch.
4. Make a small website change.
5. Open a pull request into `main`.
6. Let GitHub Actions run CI.
7. Merge to `main`.
8. Publish Docker image to GHCR.
9. Deploy the image to a server.
10. Add HTTPS using Nginx and Certbot.
11. Add monitoring and logging.
12. Practice rollback by deploying an older image tag.

## Useful commands

```bash
# See running containers
docker ps

# See logs
docker logs devops-next-web

# Stop containers
docker compose down

# Rebuild after code changes
docker compose up --build -d
```

## DevOps challenge tasks

### Task 1: Local build
Run the app locally and confirm `/api/health` returns status ok.

### Task 2: Dockerize
Build and run the Docker image. Confirm the app still works.

### Task 3: Reverse proxy
Run Nginx in front of the app using Docker Compose.

### Task 4: CI/CD
Push to GitHub and confirm GitHub Actions builds successfully.

### Task 5: Registry
Publish the Docker image to GitHub Container Registry.

### Task 6: Cloud deployment
Deploy the image on an EC2 instance or VPS.

### Task 7: HTTPS
Point a domain to the server and install SSL certificates.

### Task 8: Monitoring
Add uptime monitoring using a free monitoring tool or Prometheus/Grafana.

### Task 9: Incident practice
Break the app intentionally, observe logs, fix it, redeploy it, and document what happened.

### Task 10: Rollback
Deploy an older working image tag and confirm the site comes back online.
