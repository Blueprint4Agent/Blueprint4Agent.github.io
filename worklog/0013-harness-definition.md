# Commit Title

chore(harness): define the manual harness for direct main work

# Changed File Scope

`AGENTS.md`, `notes/ko/AGENTS.md`, `README.md`, `notes/ko/README.md`, `scripts/validate_git_governance.py`, `.github/workflows/deploy.yml`. The workspace root `AGENTS.md`/`AGENTS.ko.md` (outside this repository) were updated in the same cycle.

# Reason

Work is now pushed directly to `main`, but the PR-only workflows never ran on those pushes, and the local governance check rejected the `main` branch. The UI rule should stay simple: keep the current style.

# Impact

- AGENTS (en/ko) has a short Harness section: one work unit, `make verify`, worklog, governance check, then commit on `main` or a typed branch. It also states that UI keeps the current B4React-based style.
- `make git-governance-check` accepts `main` as well as `<type>/<kebab-title>` branches.
- Pushes to `main` run `make governance-test`, `make git-governance-check`, and `make verify` before the Pages deploy.

# Verification

- `make governance-test` passed; `make verify` passed.
- This commit's metadata was validated on `main` with `make git-governance-check`.
