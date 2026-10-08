# Commit Title

docs(features): document lifecycle mail recovery and billing operations

# Changed File Scope

`docs/features/email.mdx`, `docs/features/billing.mdx`, `docs/features/admin-and-roles.mdx`, the matching `i18n/ko/` pages, and `notes/manual-backlog.md` (en/ko).

# Reason

B4FastAPI `main` (`836d626`) completes lifecycle mail recovery (precise event conditions, Stripe/app email ownership, locale selection, five-claim budget with backoff, metadata-only operator CLI), fixes billing snapshot handling and inner-object mode checks, and records a Stripe-only provider decision.

# Impact

- **Email**: precise notice conditions, who sends what (app vs Stripe), language and links, delivery and retention rules, and `app.manage_notifications list|retry`.
- **Billing**: inner SetupIntent/subscription mode checks, multiple-subscription handling, Stripe-only implementation with a pointer to the provider comparison, and a before-production checklist.
- **Admin & roles**: no role inspects or retries other users' mail; recovery is an operator command.
- The manual backlog keeps only the admin observability screen; its baseline moves to `836d626` / `d32fce7`.

Facts checked against B4FastAPI `836d626` (`notes/lifecycle-mail.md`, `notes/billing-audit-93.md`, `notes/billing.md`, `notes/payment-provider-research.md`, `notes/runtime-modes-rbac.md`, `Makefile`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Built ko email page contains the `who-sends-what` anchor.
