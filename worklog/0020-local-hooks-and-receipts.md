# Commit Title

docs(verification): document local Git hooks, receipts, and manual workflows

# Changed File Scope

`docs/verification/verification-process.mdx`, `git-governance.mdx`, `checks-and-tests.mdx`, `index.mdx`, and the matching `i18n/ko/` pages.

# Reason

B4FastAPI and B4React now verify through local `commit-msg` and `pre-push` hooks, reuse content-bound verification receipts, narrow tests to registered affected suites, and run GitHub workflows only on manual dispatch with no required status checks. The manual still described required PR CI.

# Impact

- **Verification process**: hook-based task loop, affected suites, verification receipts and their invalidation, the hooks table, manual-only workflows, and the `main` protection rules.
- **Git governance**: hook validation, `PR_NUMBER=... make git-governance-pr-check`, the B4React Page Family worklog section, and the updated cross-repository flow.
- **Checks & tests** and the section index reflect local verification.

Facts checked against B4FastAPI `2a62b52` (`notes/local-hooks.md`, `notes/verification.md`, `README.md`, `Makefile`, `.github/workflows/`) and B4React `d4878ea` (`.github/WORKLOG_TEMPLATE.md`, `notes/page-families.md`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
