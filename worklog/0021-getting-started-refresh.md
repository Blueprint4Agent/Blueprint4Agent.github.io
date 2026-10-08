# Commit Title

docs(getting-started): refresh quick start, overview, and landing copy

# Changed File Scope

`docs/getting-started/quick-start.mdx`, `overview.mdx`, `repository-layout.mdx`, `docs/features/oauth.mdx`, `docs/features/billing.mdx` (diagram), `src/pages/index.tsx`, `i18n/ko/code.json`, and the matching `i18n/ko/` pages.

# Reason

The local app now opens `/home`, `make init` installs Git hooks, verification runs through local hooks, and the backend has admin, billing, and object storage modules. Settings → Profile is now Settings → Account.

# Impact

- Quick start: `make init` installs hooks; the dev app opens `/home` with the showcase menu in development mode.
- Overview and repository layout: local hook verification, `admin`/`billing` routers, and `core/object_storage`.
- Landing highlight copy for admin roles and background jobs (en/ko); the bento layout is unchanged.
- The billing architecture diagram uses fewer, shorter labels so it stays legible at page width.

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Playwright (cached Chromium) against `docusaurus serve`: landing 1440px dark English and 390px light Korean, Billing 1440px light, Startup & console logs 390px dark Korean. No console errors and no horizontal overflow. Billing diagram checked in dark Korean.
