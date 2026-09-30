# Commit Title

docs(diagrams): add Mermaid diagrams for flows, sequences, and topology

# Changed File Scope

`package.json`, `package-lock.json` (`@docusaurus/theme-mermaid` 3.10.1), `docusaurus.config.ts` (Mermaid enabled), 17 English pages under `docs/` and their `ko` translations, `AGENTS.md`, `notes/ko/AGENTS.md`.

# Reason

Flows such as the contract pipeline, login and OAuth sequences, email delivery, realtime events, deploy steps, and verification were only described in prose or ASCII art. Diagrams make them readable at a glance, and Mermaid keeps them editable as text.

# Impact

- 20 diagrams per locale: component connection, local runtime, project initialization, backend layering, submodule workflow, login/refresh sequence, email delivery, OAuth sequence, API key resolution, realtime sequence, Celery topology, desktop connectivity states, database selection, observability pipeline (replaces ASCII art), Docker topology and deploy flow, task loop, scope classification, check composition, and cross-repository merge order.
- Diagrams inherit B4React surfaces in both themes through the Mermaid styles added in the previous commit.
- AGENTS (en/ko) now require Mermaid for diagrams and B4React MDX components instead of raw HTML.

# Verification

- `make verify` passed (en/ko build).
- Playwright loaded all 34 pages with diagrams (17 per locale): every container rendered an SVG, with no Mermaid syntax errors and no page errors. A reserved `default` subgraph ID was found and renamed during this check.
- Visual review of the Docker, scope, deploy, authentication, and desktop diagrams in light and dark themes; the Docker topology, scope, database, and deploy diagrams were redrawn left to right to remove crossings and oversized decision nodes.
