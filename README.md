# Blueprint4Agent Documentation Hub

This repository hosts the organization-level documentation site for Blueprint4Agent.
It is built with [Docusaurus](https://docusaurus.io/) and published through GitHub Pages.

The site documents shared project context, documentation rules, and operating conventions.
Repository-specific technical implementation details should live in the relevant project repository.

## Project Scope

Blueprint4Agent documentation must include the following baseline content:

- Project Overview
- Project Purpose
- Project Composition: B4F, B4B, and this Docusaurus documentation site

Current documentation starts at:

- `docs/about-b4a/what-is-b4a.mdx`
- `i18n/ko/docusaurus-plugin-content-docs/current/about-b4a/what-is-b4a.mdx`

Localized repository notes are maintained under `notes/<locale>/`.
The current additional locale is `ko`.

## Requirements

- Node.js 20 or newer
- npm

## Installation

```bash
make install
```

## Local Development

```bash
make dev
```

This starts a local Docusaurus development server. Most content and styling changes are reflected without restarting the server.

## Build

```bash
make build
```

The build command generates static output in `build/`.
Do not commit `build/`; it is generated output.

## Make Targets

Run `make help` to list every target.

```bash
make install                 # Install locked dependencies (npm ci)
make dev                     # Start the development server
make build                   # Build every locale into build/
make serve                   # Serve the production build locally
make check                   # Prettier format check and TypeScript
make format                  # Format source and documentation
make verify                  # Full pre-commit verification: check + build
make git-governance-check    # Validate branch, commit, worklog, and PR metadata
make governance-test         # Test the governance validator
```

Run `make verify` before every commit.

## Contribution Workflow

Work is split into work units, and each unit is committed separately on a `<type>/<kebab-title>` branch.
Every commit includes a matching `worklog/NNNN-title.md` entry based on `.github/WORKLOG_TEMPLATE.md`.
Pull requests use `.github/pull_request_template.md` and are validated by `.github/workflows/check.yml` and `.github/workflows/governance.yml`.
See `AGENTS.md` for the complete rules.

## Documentation Policy

- Write new documents in English by default.
- Add translations for every supported additional locale when adding user-facing or operational documents.
- For Docusaurus docs, add translations under `i18n/<locale>/`.
- For repository-level notes such as `README.md` and `AGENTS.md`, add translations under `notes/<locale>/`.
- The current additional locale is `ko`.
- Keep English and localized docs synchronized when behavior, structure, or rules change.
- Keep navigation predictable and update `sidebars.ts` when adding or moving docs pages.

## Repository Hygiene

Generated files and local tool output are ignored by Git:

- `node_modules/`
- `build/`
- `.docusaurus/`
- `.playwright-mcp/`
- logs, caches, and local environment files

Before committing, check:

```bash
git status --short
```

## Deployment

Deployment is handled by GitHub Actions.
Pushing to `main` runs `.github/workflows/deploy.yml`, builds the Docusaurus site, uploads `build/` as a Pages artifact, and deploys it to GitHub Pages.

GitHub Pages must use the GitHub Actions source, not the legacy `main` branch root source.

The public site is:

- `https://blueprint4agent.github.io/`

The Docusaurus production configuration is:

- `url`: `https://blueprint4agent.github.io`
- `baseUrl`: `/`
