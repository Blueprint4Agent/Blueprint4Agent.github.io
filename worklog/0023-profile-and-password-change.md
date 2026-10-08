# Commit Title

docs(features): document the personal profile and password change

# Changed File Scope

`docs/features/settings-and-profile.mdx`, `docs/features/authentication.mdx`, `docs/features/email.mdx`, the matching `i18n/ko/` pages, and `notes/manual-backlog.md` (en/ko).

# Reason

B4FastAPI `main` (`836d626`, pinned B4React `d32fce7`) adds a private `/profile` page with Bio and location, inline account editing, an email-verified password change, verify-only code endpoints, and a third shortcut.

# Impact

- **Home, settings & profile**: Account section (inline name, plan, password change, deletion, go to profile), new Profile section (fields, editing, `/auth/me` contract), and the `Mod+Shift+P` profile shortcut.
- **Authentication**: Password change flow, shared Email codes rules (ten-minute latest code, 30-second resend, five per hour, five-attempt lock), and the deletion verify step.
- **Email**: the password-change code mail.
- The profile item is removed from the manual backlog.

Facts checked against B4FastAPI `836d626` (`notes/account-profile.md`, `notes/api-authentication.md`, `contracts/openapi.json`, `app/core/celery/mail.py`) and B4React `d32fce7` (`src/App.tsx`, `src/utils/keyboardShortcuts.ts`, `src/components/layout/AppLayout.tsx`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Built ko pages contain the `password-change`, `email-codes`, `account-deletion`, and `profile` anchors.
