# Commit Title

docs(features): document built-in B4FastAPI and B4React features

# Changed File Scope

`docs/features/` and `i18n/ko/docusaurus-plugin-content-docs/current/features/` (index plus 10 pages), `sidebars.ts`, `src/css/custom.css` (key/value tables, card paragraph spacing).

# Reason

The manual must list every feature that works out of the box, one page each, so users and agents know what the blueprint already provides before adding code.

# Impact

- Pages: authentication, email, OAuth, API keys, admin and roles, realtime events, background jobs, settings and profile, showcase and style studio, desktop app. Each starts with an at-a-glance table (enable, settings, endpoints, frontend) and ends with code locations.
- The Features landing page groups them into accounts, runtime, and frontend cards.
- Key/value tables written with an empty header hide that header; MDX card bodies no longer add paragraph margins.
- Facts checked against B4FastAPI `4238144`: `contracts/openapi.json`, `app/deps.py` (X-API-Key), `services/auth.py` (IP lockout, OAuth account matching, verification), `CELERY.md`, `BACKEND.md`, `README.md`, `DEPLOY.md`, and B4React `0d8656f` `FRONTEND.md`, `App.tsx`, `SettingsPage.tsx`.

# Verification

- `make verify` passed (en/ko build, no broken links).
- Playwright screenshots of `/docs/features/authentication`, `/docs/features/api-keys`, and `/ko/docs/features` in light and dark: no console errors, no horizontal overflow.
