# Commit Title

chore(harness): add make targets, worklog, and git governance

# Changed File Scope

`.gitignore`, `Makefile`, `scripts/` (governance validator and tests), `worklog/`, `.github/WORKLOG_TEMPLATE.md`, `.github/pull_request_template.md`, `.github/workflows/check.yml`, `.github/workflows/governance.yml`, `AGENTS.md`, `README.md`, `notes/ko/AGENTS.md`, `notes/ko/README.md`, and Prettier-only reformatting of six existing source/doc files.

# Reason

The manual repository is migrating to the B4FastAPI/B4React harness model: work is split into work units, each commit carries a worklog, and branch/commit/PR metadata is validated. The existing `npm run check` baseline failed Prettier on six files, so `make verify` could not pass before this commit.

# Impact

Contributors use `make install|dev|build|check|format|verify`. PRs run `make verify` and git governance checks. No page content or visual output changes.

# Verification

- `make governance-test`: 4 tests passed.
- `make verify`: format check, typecheck, and en/ko build passed.
- Staged commit metadata validated with `make git-governance-check`.
