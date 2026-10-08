# Commit Title

docs(notes): track open B4FastAPI work for the manual

# Changed File Scope

`notes/manual-backlog.md` (new), `notes/ko/manual-backlog.md` (new), `AGENTS.md`, `notes/ko/AGENTS.md`.

# Reason

Several B4FastAPI items are still open: the user profile screen, remaining payment notices, the billing lifecycle review, the admin observability screen, and research on other payment providers. The manual must describe only merged behavior, so ready-to-insert drafts are kept outside the published docs.

# Impact

- An unpublished backlog lists each open item with its target page, an en/ko draft with `<verify: ...>` markers, and what to check when it merges.
- It records the outdated `celery-beat` help text in the B4FastAPI `Makefile`.
- `AGENTS.md` (en/ko) points agents to the backlog.

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build). `notes/` is outside the Docusaurus docs, so nothing new is published.
