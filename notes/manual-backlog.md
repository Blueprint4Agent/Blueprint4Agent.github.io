# Manual backlog

Korean: [매뉴얼 대기 항목](ko/manual-backlog.md)

This file is not published. It tracks B4FastAPI work that is still open, so the manual can be updated as soon as each item lands on `main`.

Baseline: the manual describes B4FastAPI `2a62b52` and its pinned B4React `d4878ea` (2026-10-08).

## How to use

1. When an item merges, confirm the actual behavior on B4FastAPI `main` and the pinned B4React commit. The drafts below describe the intended design, not verified facts.
2. Replace every `<verify: ...>` marker with the implemented value, or delete the line.
3. Insert the draft into the target page in English and Korean in the same commit, then run `make verify` and add a worklog.
4. Describe features and architecture only. Do not mention issues, PRs, or why something changed.
5. Delete the item from this file (both locales) in the same commit.

## Open items

| Tracking      | Topic                                          | Target pages                                                    |
| ------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| B4FastAPI #92 | User profile screen                            | `features/settings-and-profile.mdx`                             |
| B4FastAPI #95 | Remaining payment notices                      | `features/email.mdx`, `features/billing.mdx`                    |
| B4FastAPI #93 | Billing lifecycle review                       | `features/billing.mdx`                                          |
| B4FastAPI #91 | Admin observability screen (low priority)      | `features/admin-and-roles.mdx`, `environment/observability.mdx` |
| B4FastAPI #94 | Payment providers other than Stripe (research) | `features/billing.mdx`, only if a provider interface is adopted |
| B4FastAPI #87 | Umbrella for the items above                   | No page; close the backlog when every item is resolved          |

---

### User profile screen (#92)

**Target:** `docs/features/settings-and-profile.mdx`, new `## Profile` section after `## Account and profile`; add a row to the Home table if the home page links to it.

**Draft:**

```mdx
## Profile

`<verify: route, e.g. /profile>` shows the signed-in user's profile and links to **Settings → Account** for editing. It reuses the same account snapshot, so a saved name or photo appears at once in the profile, the sidebar, and Settings.

| Field                                | Shown    | Edited in          |
| ------------------------------------ | -------- | ------------------ |
| Name                                 | Yes      | Settings → Account |
| Profile photo                        | Yes      | Settings → Account |
| Email                                | <verify> | —                  |
| Linked login methods                 | <verify> | Settings → Account |
| <verify: extra fields such as a bio> | <verify> | <verify>           |

- Only the owner can read their profile. <verify: whether a public profile exists, and which fields it exposes>
- Missing or failed photos fall back to initials; long names wrap without overflow.
```

**Verify at completion:** route and menu entry; own-only versus public profile; added `/auth/me` fields or new endpoints and their API-key policy; whether `notes/api-authentication.md` changed.

---

### Remaining payment notices (#95)

Already documented: welcome mail, deletion code, account-deletion notice, subscription started, plan changed, and subscription cancelled through the encrypted outbox (`features/email.mdx#lifecycle-email`).

**Target:** the notice table in `docs/features/email.mdx` (`## Lifecycle email`), and the webhook paragraph in `docs/features/billing.mdx` if new events are required.

**Draft rows (add only what is implemented):**

```mdx
| Payment failed | <verify: invoice.payment_failed, first failure only?> |
| Renewal upcoming | <verify: invoice.upcoming, N days before renewal> |
| Renewal succeeded | <verify: invoice.paid for a renewal> |
```

Replace the sentence "Renewals and payment failures do not send email." with the implemented rule, for example: "Stripe's own customer emails <verify: enabled/disabled> for these events so users do not get duplicates."

**Optional section, if failed-delivery tracking ships:**

```mdx
### Failed deliveries

Notices that exhaust their attempts are <verify: kept / listed at ...> with <verify: fields>. <verify: role> can <verify: view / retry> them from <verify: screen or command>. Recipient data stays encrypted and follows the 72-hour retention.
```

**Verify at completion:** event list, deduplication key per event, interaction with Stripe's built-in emails, retry and failure storage, manager permission (add a row to the permission table in `features/admin-and-roles.mdx` if managers gain access).

---

### Billing lifecycle review (#93)

**Target:** `docs/features/billing.mdx`.

This item is a review. Update the manual only for behavior that changes. Likely places:

- `## Subscription lifecycle`: new or removed transitions, or a changed apply time.
- `## Errors`: new or renamed error codes.
- `## Webhooks and the subscription snapshot`: required events, ordering guarantees, reconciliation interval or batch size (`<verify: 300 s, 50 snapshots>`).
- `## Operating notes`: new operator reconciliation steps, for example for partial schedule creation.

If the review publishes a state-transition table in B4FastAPI `notes/billing.md`, summarize it as one Mermaid `stateDiagram-v2` and link to the guide instead of copying it.

**Verify at completion:** diff `notes/billing.md` and `services/billing.py` against `2a62b52`; re-check every number on the Billing page.

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

### Payment providers other than Stripe (#94, research)

No manual change is expected from the research itself. Update the manual only if a provider interface or a second provider is implemented:

- `docs/features/billing.mdx`: generalize the intro and `## Architecture` diagram (`BillingService` → `<verify: provider interface>` → Stripe / `<verify: provider>`), and move Stripe-only sections under a `## Stripe` heading.
- `docs/environment/environment-variables.mdx`: a provider selector variable and the new provider's keys.
- `docs/environment/runtime-modes.mdx`: the feature switch row if `STRIPE_ENABLED` is replaced by a generic switch.

---

## Source inconsistencies noticed

- B4FastAPI `Makefile` help for `celery-beat` still says "no business schedules enabled by default", but Beat runs `lifecycle-mail-outbox` (60 s) and `billing-reconciliation` (300 s). The manual describes the actual schedules. Re-check `make-commands.mdx` if the help text is corrected.
