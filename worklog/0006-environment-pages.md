# Commit Title

docs(environment): document env variables, infrastructure, and make targets

# Changed File Scope

`docs/environment/` and `i18n/ko/docusaurus-plugin-content-docs/current/environment/` (index plus 5 pages), `sidebars.ts`, `src/css/custom.css` (Korean wrapping).

# Reason

Users need one place that lists every environment variable, explains the database, Redis, observability, and Docker architecture, and names every make target.

# Impact

- Environment variables: the three `.env` files, sync/check tooling, every backend key grouped by area with defaults, Docker-only keys and differing Docker defaults, and `VITE_API_BASE_URL`.
- Database & Redis: engine selection, credentials, startup Alembic migration, migration rules, backup/restore, Redis modes, and health endpoints.
- Observability: signal pipeline, stack startup, Prometheus target, Loki queries, trace correlation, and network exposure.
- Docker: all 11 Compose services with images and profiles, deployment modes A/B/C, deploy flow, host ports, and the image pipeline.
- Make commands: all 72 targets generated from the Makefile `##` descriptions and grouped by task, plus common tasks and variables.
- Korean text now uses `overflow-wrap: break-word`; `anywhere` shrank table columns to one character on mobile.
- Facts checked against B4FastAPI `4238144`: `.env.example` files, `Makefile`, `docker/docker-compose.yml`, `README.md`, `DEPLOY.md`, `DB_BACKUP_RESTORE.md`, `core/db/migrations.py`, `core/observability/`. The backup commands use the Compose `postgres` service instead of the runbook's legacy fixed container name.

# Verification

- `make verify` passed (en/ko build, no broken links or anchors).
- Generated make tables assert that every Makefile target is listed exactly once.
- Playwright screenshots of the environment variables page (1440px light) and Korean make commands page (390px dark): no console errors, no horizontal page overflow.
