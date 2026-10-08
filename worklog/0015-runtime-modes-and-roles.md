# Commit Title

docs(features): document runtime modes, three roles, and account deletion

# Changed File Scope

`docs/environment/runtime-modes.mdx` (new), `docs/features/admin-and-roles.mdx`, `docs/features/authentication.mdx`, `docs/features/index.mdx`, `docs/environment/index.mdx`, `sidebars.ts`, and the matching `i18n/ko/` pages.

# Reason

B4FastAPI `main` now separates development and production modes, adds a manager role with an audited operator command, an admin-only server status screen, and mailbox-verified account deletion. The manual still described two roles and login-disabled mode without the mode policy.

# Impact

- New Environment page **Runtime modes**: `APP_MODE`, what each mode exposes, bootstrap identity rules, and feature switches that gate both UI and API.
- **Admin & roles**: permission table for user/manager/admin, `make user-role ... ROLE=manager`, role change audit, user directory summary, and the `/admin/server` status rows, caching, and redaction.
- **Authentication**: three roles, shared 401 refresh, account deletion flow, and login-disabled mode limited to development.
- Pages describe current behavior only; no change history.

Facts checked against B4FastAPI `2a62b52` (`notes/runtime-modes-rbac.md`, `notes/api-authentication.md`, `src/backend/BACKEND.md`, `.env.example` files, `routers/v1/admin.py`) and B4React `d4878ea` (`FRONTEND.md`, `src/App.tsx`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
