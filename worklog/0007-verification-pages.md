# Commit Title

docs(verification): document verification process, checks, and governance

# Changed File Scope

`docs/verification/` and `i18n/ko/docusaurus-plugin-content-docs/current/verification/` (index plus 3 pages), `sidebars.ts`.

# Reason

The manual must explain clearly how B4Agent changes are verified: the task loop agents follow, how checks are selected, what each check and test covers, and the git governance rules enforced in CI.

# Impact

- Verification process: the eight-step task loop, change scopes (Docs, Copy, Behavior, UI, Full), options, CI required checks, and evidence rules.
- Checks & tests: aggregate targets, static checks, backend pytest markers, frontend test suites, and the backend/frontend runtime loops.
- Git governance: branch, commit, worklog (all required sections), PR, merge, pre-commit validation, and cross-repository order. It also states that this manual repository uses the same rules.
- Facts checked against B4FastAPI `4238144`: `notes/verification.md`, `Makefile` target dependencies, `.github/WORKLOG_TEMPLATE.md`, `.github/main-ruleset.json`, `.github/workflows/build.yml`, `scripts/validate_git_governance.py`, `src/backend/pyproject.toml`, and B4React `0d8656f` test layout.

# Verification

- `make verify` passed (en/ko build, no broken links).
- Playwright screenshots of `/docs/verification/verification-process` (1440px light) and `/ko/docs/verification` (1180px dark): no console errors, no horizontal overflow.
