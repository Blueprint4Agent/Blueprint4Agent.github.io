# Commit Title

docs(environment): add startup display and sync variables, Docker, and make targets

# Changed File Scope

`docs/environment/startup-and-logs.mdx` (new), `environment-variables.mdx`, `docker.mdx`, `database-and-redis.mdx`, `observability.mdx`, `make-commands.mdx`, `index.mdx`, `sidebars.ts`, and the matching `i18n/ko/` pages.

# Reason

B4FastAPI `main` adds `APP_MODE` and `STARTUP_DISPLAY`, a B4A startup and shutdown panel with compact console logs, a Redis startup probe, the object storage volume, manual-only image builds, and four make targets (`db-current`, `db-migrate`, `hooks-install`, `hooks-test`).

# Impact

- New Environment page **Startup & console logs**: panel rows and results, check order, shutdown cleanup, display modes, console log format and colors.
- **Environment variables**: `APP_MODE`, `STARTUP_DISPLAY`, the `APP_ENV` telemetry meaning, the `# Values:` layout, Docker `APP_MODE=production` and storage root.
- **Docker**: volumes, production settings with Celery, and manual-only `build.yml` inputs.
- **Database & Redis**: `make db-current` / `make db-migrate` and the required Redis `PING`.
- **Make commands**: 76 targets, manager role, `PR_NUMBER`, and Beat schedules. The `celery-beat` row describes the actual schedules rather than the outdated help text.

Facts checked against B4FastAPI `2a62b52` (`notes/startup-display.md`, `Makefile`, both `.env.example` files, `docker/docker-compose.yml`, `.github/workflows/build.yml`, `app/core/celery/app.py`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
