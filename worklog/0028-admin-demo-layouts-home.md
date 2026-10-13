# Commit Title

docs(features): document the admin demo, layouts, and landing home

# Changed File Scope

`docs/features/admin-and-roles.mdx`, `settings-and-profile.mdx`, `support.mdx`, `showcase-and-style-studio.mdx`, `index.mdx`; `docs/environment/runtime-modes.mdx`, `environment-variables.mdx`, `deployment.mdx`; the matching `i18n/ko/` pages; `src/pages/index.tsx` and `i18n/ko/code.json`; `notes/manual-backlog.md` (en/ko).

# Reason

B4FastAPI `main` (`509155a`) and B4React `8572a36` add an opt-in public admin demo with anonymized data, three runtime-selectable layouts (`APP_LAYOUT`), a product landing home with rotating previews, and an optional development-only support link.

# Impact

- **Admin & roles**: the admin demo routes, data sources, published and pseudonymized fields, caching, and disablement.
- **Home, settings & profile**: the landing home sections, previews, and account links; the app shell in every layout; the Layouts section with the development preview.
- **Runtime modes**: runtime display settings (`APP_LAYOUT`, `DEMO_ENABLED`) and development-only shell links.
- **Environment variables and deployment**: `APP_LAYOUT`, `DEMO_ENABLED`, and the Buy Me a Coffee build values.
- **Support**: the synthetic inquiry demo.
- The manual landing page highlights point to Server deployment and mention support and the demo.
- The manual backlog baseline moves to `509155a` / `8572a36`; the admin observability item stays open.

Facts checked against B4FastAPI `509155a` (`notes/monolithic-deployment.md`, `notes/runtime-modes-rbac.md`, `notes/frontend-submodule.md`, `app/core/config/settings.py`, `contracts/openapi.json`) and B4React `8572a36` (`notes/admin-demo.md`, `notes/layout-modes.md`, `notes/main-page-template.md`, `notes/page-families.md`, `src/App.tsx`, `src/pages/main/HomePage.tsx`, locales).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Built en and ko pages contain the `admin-demo`, `layouts`, `base-path`, `https`, `check-and-deploy`, `public-build-values`, `production-signing-key`, and `websocket-provider` anchors.
