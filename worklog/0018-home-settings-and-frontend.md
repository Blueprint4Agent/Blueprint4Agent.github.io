# Commit Title

docs(features): document the home page, account settings, and Beat schedules

# Changed File Scope

`docs/features/settings-and-profile.mdx`, `showcase-and-style-studio.mdx`, `background-jobs.mdx`, `desktop-app.mdx`, `object-storage.mdx`, `authentication.mdx` (stable anchors), `docs/features/index.mdx`, and the matching `i18n/ko/` pages.

# Reason

The pinned B4React opens `/home` in both modes, keeps the showcase as a development-only menu, adds Keyboard, Account, and Billing settings, and stores shortcuts per account. Celery Beat now schedules the lifecycle outbox and billing reconciliation, and the desktop workflow is manual-only.

# Impact

- **Home, settings & profile** (renamed): home page roles, `MainPageTemplate` props, sidebar links and tier, six settings sections, account and profile actions, account-stored shortcuts.
- **Showcase & style studio**: development-only `/show-case`, production redirect.
- **Background jobs**: Beat schedule table and when to run the worker and Beat.
- **Desktop app**: manual-only build workflow.

Facts checked against B4React `d4878ea` (`src/App.tsx`, `src/pages/main/HomePage.tsx`, `src/utils/settingsSections.ts`, `src/utils/keyboardShortcuts.ts`, `notes/main-page-template.md`, `FRONTEND.md`, `src/locales/ko.json`) and B4FastAPI `2a62b52` (`app/core/celery/app.py`, `.github/workflows/desktop-build.yml`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
