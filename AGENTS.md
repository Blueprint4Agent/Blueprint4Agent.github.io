# Agent Guide

Read this file first before making any changes in this repository.

## Repository Scope

This repository is the **central documentation hub for Blueprint4Agent**.
It hosts the organization-wide documentation website based on **Docusaurus** and deployed with **GitHub Pages**.

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

## Required Baseline Content

Organization-level documentation in this repository must include:

- `Project Overview`
- `Project Purpose`
- `Project Composition` (B4F, B4B, Docusaurus documentation site)

Repository-specific technical details must be documented in each repository separately.

## Required Read Order

1. `AGENTS.md`
2. Docusaurus setup and build/deploy guides (to be added in this repository)
3. Feature-specific documentation under `docs/`

## Repository Hygiene

- Do not commit generated Docusaurus output or local dependency folders.
- Keep `node_modules/`, `build/`, `.docusaurus/`, local caches, logs, and tool output such as `.playwright-mcp/` out of version control.
- Commit source files, documentation, configuration, static assets, and lockfiles only when they are intentional project assets.
- Before the first commit and before large documentation changes, check `git status --short` and confirm only intended files are staged.

## Verification

- Run `npm run build` after Docusaurus configuration, navigation, styling, or documentation structure changes.
- For layout or visual changes, verify the affected page in a browser-sized desktop viewport and a mobile viewport.
- If verification cannot be completed, document the reason in the handoff or pull request notes.

## Documentation Sync

If implementation changes behavior, structure, or rules, update related docs in the same work cycle.
