# Commit Title

docs(features): add object storage and private profile photos

# Changed File Scope

`docs/features/object-storage.mdx` (new), `docs/features/admin-and-roles.mdx` (stable `server-status` anchor), `docs/features/index.mdx`, `docs/environment/environment-variables.mdx`, `sidebars.ts`, and the matching `i18n/ko/` pages.

# Reason

B4FastAPI `main` has a provider-neutral object storage layer (local, S3, R2, Supabase) and stores profile photos through it. The manual did not describe either.

# Impact

- New Features page **Object storage**: layering, operations and error codes, provider settings, local persistence and Docker volume, the profile photo upload/read/delete flow, and the admin status row.
- **Environment variables**: an Object storage section.

Facts checked against B4FastAPI `2a62b52` (`notes/object-storage.md`, `src/backend/.env.example`, `docker/docker-compose.yml`, `app/core/object_storage/`) and B4React `d4878ea` (`FRONTEND.md`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
