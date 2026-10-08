# Commit Title

docs(features): add Stripe billing and lifecycle email

# Changed File Scope

`docs/features/billing.mdx` (new), `docs/features/email.mdx`, `docs/features/authentication.mdx`, `docs/features/index.mdx`, `docs/environment/environment-variables.mdx`, `sidebars.ts`, `src/components/icons/registry.ts` (`credit-card` icon), and the matching `i18n/ko/` pages.

# Reason

B4FastAPI `main` ships Stripe billing behind `STRIPE_ENABLED` and new account and lifecycle email. The manual had no billing page and described only verification and reset mail.

# Impact

- New Features page **Billing**: architecture, startup validation, Free/Plus/Pro tiers and price settings, subscription lifecycle, payment methods and billing profile, webhooks and the stored subscription snapshot, error codes, operating notes.
- **Email**: welcome and deletion-code mail, the encrypted lifecycle outbox with Beat, the B4A default brand.
- **Environment variables**: a Billing section and the `EMAIL_BRAND_NAME=B4A` default.
- Explicit heading IDs (`\{#id\}`) keep cross-page anchors identical in en and ko.

Facts checked against B4FastAPI `2a62b52` (`notes/billing.md`, `notes/api-authentication.md`, `src/backend/BACKEND.md`, `src/backend/CELERY.md`, `.env.example`) and B4React `d4878ea` (`notes/billing.md`, `FRONTEND.md`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Built HTML contains `id=lifecycle-email`, so escaped heading IDs render as anchors.
