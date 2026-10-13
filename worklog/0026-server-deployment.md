# Commit Title

docs(environment): document the monolithic server deployment

# Changed File Scope

New `docs/environment/deployment.mdx`; `docs/environment/docker.mdx`, `environment-variables.mdx`, `database-and-redis.mdx`, `runtime-modes.mdx`, `make-commands.mdx`, `index.mdx`; `docs/features/background-jobs.mdx`; `docs/getting-started/repository-layout.mdx`; the matching `i18n/ko/` pages; `sidebars.ts`.

# Reason

B4FastAPI `main` (`509155a`) deploys as a single-server monolith with preflight, image-source selection, HTTP smoke checks, an optional Caddy HTTPS overlay, runtime basePath mounts behind Nginx, hardened containers, persistent SQLite, public frontend build values, and a production signing-key policy.

# Impact

- **Server deployment** (new): topology, `docker-init`/`docker-check`/`docker-deploy`/`docker-status`/`docker-smoke`, preflight rules, `DEPLOY_SOURCE`, Caddy HTTPS, basePath under Nginx, public build values and discovery pages, IndexNow, update and recovery.
- **Docker**: Caddy service, container security (UID 10001, dropped capabilities, loopback app port), SQLite volume, command table, image tags and public workflow inputs.
- **Runtime modes**: production signing-key requirements.
- **Environment variables**: `APP_BASE_PATH`, `FORWARDED_ALLOW_IPS`, `COMPOSE_FILE`, `PUBLIC_DOMAIN`, `INDEXNOW_ENABLED`, public `VITE_*` values.
- **Database & Redis**: Docker SQLite path and Compose-based backup commands.
- **Make commands**: 82 targets, matching `make help`.

Facts checked against B4FastAPI `509155a` (`DEPLOY.md`, `notes/monolithic-deployment.md`, `notes/base-path-deployment.md`, `notes/search-discovery.md`, `notes/runtime-modes-rbac.md`, `docker/`, `docker/scripts/deploy.py`, `.github/workflows/build.yml`, `Makefile`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Documented make targets diffed against the `Makefile` help targets (82, no difference).
