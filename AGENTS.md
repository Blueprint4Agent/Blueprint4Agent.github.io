# Agent Guide

Read this file first before making any changes in this repository.

## Repository Scope

This repository hosts the **B4Agent manual**: the documentation for the B4Agent full-stack blueprint, which combines B4FastAPI (backend) and B4React (frontend), with B4SpringBoot planned as the next backend.
It is a **Docusaurus** site deployed with **GitHub Pages**.

## Documentation Language Policy

- Default language for new documents is **English**.
- Add translations for every supported additional locale when adding user-facing or operational documents.
- For Docusaurus docs, add translations under `i18n/<locale>/`.
- For repository-level notes such as `README.md` and `AGENTS.md`, add translations under `notes/<locale>/`.
- The current additional locale is `ko`.
- Keep English and localized docs synchronized when behavior, structure, or rules change.

## Docusaurus Writing Standard (De Facto)

- This repository uses the **project documentation de facto standard**.
- Write docs in a practical, implementation-first style.
- Prefer stable structure and naming over stylistic variation.
- Use clear section headings and short actionable paragraphs.
- Keep navigation predictable and avoid duplicate content across pages.
- When adding or changing pages, ensure sidebar/category structure stays consistent.
- Draw flows, sequences, states, and topology with Mermaid code blocks, not ASCII art. Prefer left-to-right flowcharts with short labels, avoid large decision diamonds, and never use reserved words such as `default` as subgraph IDs. Check every diagram renders in light and dark themes.
- Use the B4React-based MDX components (`Card`, `CardGrid`, `Badge`) and admonitions instead of raw HTML.

## Required Baseline Content

The manual must keep these sections in `sidebars.ts` (`manualSidebar`):

- `Getting Started`: overview (project purpose and composition), quick start, project initialization, repository layout
- `Features`: one page per feature that works out of the box (`docs/features/`)
- `Environment & Options`: environment variables, database and Redis, observability, Docker, make commands (`docs/environment/`)
- `Verification`: verification process, checks and tests, git governance (`docs/verification/`)
- `Backends`: backend-specific pages such as B4SpringBoot (`docs/backends/`)

Describe behavior as implemented in the current B4FastAPI `main` and its pinned B4React commit, and verify facts against those repositories. The repositories' own guides remain the source of truth; this manual summarizes them for users and links to them.

## Required Read Order

1. `AGENTS.md`
2. `README.md` for setup, `make` targets, and deployment
3. Feature-specific documentation under `docs/`

## Harness

Every change follows the same harness:

1. Implement one work unit.
2. Run `make verify` (format, typecheck, en/ko build).
3. Add a `worklog/NNNN-title.md` entry whose Commit Title matches the commit.
4. Validate with `COMMIT_TITLE=... COMMIT_BODY_FILE=... make git-governance-check`, then commit.
5. Commit directly on `main` or on a `<type>/<kebab-title>` branch, and push. Pushing to `main` runs verification and git governance before deploying.

UI: keep the current B4React-based style. Reuse the existing tokens and components in `src/css/custom.css`, `src/components/`, and `src/theme/` instead of introducing new visual styles.

## Repository Hygiene

- Do not commit generated Docusaurus output or local dependency folders.
- Keep `node_modules/`, `build/`, `.docusaurus/`, local caches, logs, and tool output such as `.playwright-mcp/` out of version control.
- Commit source files, documentation, configuration, static assets, and lockfiles only when they are intentional project assets.
- Before the first commit and before large documentation changes, check `git status --short` and confirm only intended files are staged.

## Verification

Run validation through the root `Makefile` (`make help` lists every target).

1. Run `make verify` before every commit. It runs `make check` (Prettier format check and TypeScript) and `make build` (every locale).
2. Run `make format` when `make check` reports formatting issues; do not hand-edit formatting to silence it.
3. For layout or visual changes, verify the affected page in a desktop viewport and a mobile viewport, in both light and dark themes.
4. Record the commands and results in the commit worklog. If verification cannot be completed, document the reason in the worklog and pull request notes.

## Work Units

Split work into reviewable work units and commit each unit separately.

1. One work unit covers one intent, for example harness, UI/theme, one documentation section, or locale sync.
2. Each unit must build on its own: run `make verify` before committing it.
3. English documents and their `ko` translations belong in the same unit, so every commit keeps locales synchronized.
4. Do not mix unrelated formatting, dependency, or content changes into a unit.

## Worklog Policy (Required)

1. Every commit must include a matching worklog entry file under `worklog/`.
2. Worklog filename format: `<number>-<short-kebab-title>.md` (four-digit number, for example `0002-b4react-theme.md`).
3. Use `.github/WORKLOG_TEMPLATE.md`. A worklog must record at least `# Commit Title`, `# Changed File Scope`, `# Reason`, `# Impact`, and `# Verification`.
4. `# Commit Title` must equal the actual commit title.

## Git Governance

Validate planned metadata with the repository harness before committing or opening a PR:

```sh
COMMIT_TITLE="docs: add feature pages" COMMIT_BODY_FILE=<file> make git-governance-check
PR_TITLE="[docs] Add feature pages" PR_BODY_FILE=<file> make git-governance-check
```

Without `COMMIT_TITLE`, the check validates the current `HEAD` commit. `make governance-test` tests the validator itself.

- Branch names: `main` for direct work, or `<type>/<short-kebab-title>`. Allowed types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ci`, `build`, `perf`, `style`, `revert`, `hotfix`.
- Commit titles: Conventional Commits, `<type>(optional-scope): <imperative summary>`.
- Commit bodies must include `Changes:`, `Affected Files:`, and `Verification:` sections.
- PR titles: `[type] Concise PR title`. PR descriptions must include Summary, Scope, Reason, Verification, Documentation, and Risk / Impact (`.github/pull_request_template.md`).
- Create PRs as ready for review by default. Use merge commits (`gh pr merge <number> --auto --merge`); squash or rebase merges require an explicit user request.
- Pull requests run `.github/workflows/check.yml` (`make verify`) and `.github/workflows/governance.yml` (`make git-governance-pr-check`). Pushing to `main` runs `make verify` and `make git-governance-check` in `.github/workflows/deploy.yml`, then deploys.

## Documentation Sync

If implementation changes behavior, structure, or rules, update related docs in the same work cycle.
