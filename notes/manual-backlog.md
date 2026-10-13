# Manual backlog

Korean: [매뉴얼 대기 항목](ko/manual-backlog.md)

This file is not published. It tracks B4FastAPI work that is still open, so the manual can be updated as soon as each item lands on `main`.

Baseline: the manual describes B4FastAPI `509155a` and its pinned B4React `8572a36` (2026-10-13).

## How to use

1. When an item merges, confirm the actual behavior on B4FastAPI `main` and the pinned B4React commit. The drafts below describe the intended design, not verified facts.
2. Replace every `<verify: ...>` marker with the implemented value, or delete the line.
3. Insert the draft into the target page in English and Korean in the same commit, then run `make verify` and add a worklog.
4. Describe features and architecture only. Do not mention issues, PRs, or why something changed.
5. Delete the item from this file (both locales) in the same commit.

## Open items

| Tracking      | Topic                                     | Target pages                                                    |
| ------------- | ----------------------------------------- | --------------------------------------------------------------- |
| B4FastAPI #91 | Admin observability screen (low priority) | `features/admin-and-roles.mdx`, `environment/observability.mdx` |
| B4FastAPI #87 | Umbrella for the items above              | No page; close the backlog when every item is resolved          |

---

### Admin observability screen (#91, low priority)

**Target:** `docs/features/admin-and-roles.mdx`, new `## Observability` section after `## Server status`; link from `docs/environment/observability.mdx`.

**Draft:**

```mdx
## Observability

`<verify: route, e.g. /admin/observability>` summarizes request and worker health for <verify: admins only?>.

| Panel           | Source                         | Shows                                           |
| --------------- | ------------------------------ | ----------------------------------------------- |
| Requests        | Prometheus `/metrics`          | <verify: rate, error rate, latency percentiles> |
| Background jobs | <verify: Celery metrics/probe> | <verify: queue depth, failures>                 |
| Traces          | Tempo                          | <verify: links to Grafana Explore by trace ID>  |

- Missing data is shown as unavailable, never as healthy.
- <verify: retention, sampling, and which data is excluded as sensitive>
- The screen reads the existing metrics and tracing; it does not add a second collection pipeline.
```

**Verify at completion:** route and role; metrics names; whether Grafana links require the observability profile; any new environment variables (add to `environment-variables.mdx`).

---

## Source inconsistencies noticed

- B4FastAPI `Makefile` help for `celery-beat` still says "no business schedules enabled by default", but Beat runs `lifecycle-mail-outbox` (60 s) and `billing-reconciliation` (300 s). The manual describes the actual schedules. Re-check `make-commands.mdx` if the help text is corrected.
