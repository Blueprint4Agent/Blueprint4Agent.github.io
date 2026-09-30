# Commit Title

docs(manual): restructure as B4Agent manual with getting started

# Changed File Scope

`docs/` and `i18n/ko/docusaurus-plugin-content-docs/current/` (getting-started, features, environment, verification, backends), `sidebars.ts`, `docusaurus.config.ts`, `src/pages/index.tsx`, `src/css/custom.css` (table surfaces), `i18n/ko/docusaurus-plugin-content-docs/current.json`, `AGENTS.md`, `README.md`, `notes/ko/AGENTS.md`, `notes/ko/README.md`. Removed `docs/about-b4a/` and its translation.

# Reason

The site is now the B4Agent manual for B4FastAPI + B4React with B4SpringBoot planned. The old organization "What is B4A?" page and B4F/B4B baseline no longer describe the product. Features, environment, and verification need stable sections before their pages are added.

# Impact

- `/docs` opens the B4Agent overview (purpose, composition, how repositories connect).
- Getting Started: quick start, project initialization (`project.json`), repository layout and submodule/contract workflow.
- Section landing pages for Features, Environment & Options, and Verification, plus a planned B4SpringBoot page under Backends.
- AGENTS/README baseline content now requires these sections and fact-checking against B4FastAPI `main` and its pinned B4React commit.
- Facts were checked against B4FastAPI `4238144` (README, PROJECT_SETUP.md, notes/frontend-submodule.md, src/backend/app/services/auth.py) and B4React `0d8656f`.

# Verification

- `make verify` passed (format, typecheck, en/ko build with no broken links).
- Playwright screenshots of `/docs` (1440px light/dark) and `/ko/docs/getting-started/quick-start` (390px dark): no console errors, no horizontal overflow.
