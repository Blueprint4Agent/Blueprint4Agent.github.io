# Commit Title

docs(features): document the prompt builder

# Changed File Scope

New `docs/features/prompt-builder.mdx` and its `i18n/ko/` mirror; `docs/features/index.mdx`, `settings-and-profile.mdx`, `docs/verification/checks-and-tests.mdx` and the matching `i18n/ko/` pages; `sidebars.ts`; `src/components/icons/registry.ts`; `notes/manual-backlog.md` (en/ko).

# Reason

B4FastAPI `main` (`c752906`) pins B4React `750532f`, which adds a public, client-side prompt builder at `/prompt-builder`, directly after Home in global navigation.

# Impact

- **Prompt builder**: route and availability, the two paths and four questions, scope and capability cards, RBAC defaults, review and output, the generated prompt structure, local-only state, shared UI reuse, and browser coverage.
- **Features index** gains a card; **Home, settings & profile** lists the prompt builder in global navigation; **Checks and tests** lists it under `make test-ui`.
- The sidebar adds the page with a new `prompt` icon (`FilePenLine`).
- The manual backlog baseline moves to `c752906` / `750532f`; the admin observability item stays open.

Facts checked against B4FastAPI `c752906` (`notes/prompt-builder.md`) and B4React `750532f` (`notes/prompt-builder.md`, `notes/page-families.md`, `src/App.tsx`, `src/hooks/useAppNavigation.ts`, `src/pages/prompts/`, locales).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
- Built en and ko prompt builder pages exist and link to the `layouts` anchor.
