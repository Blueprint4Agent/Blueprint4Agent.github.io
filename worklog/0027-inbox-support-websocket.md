# Commit Title

docs(features): document notifications, support, and WebSocket

# Changed File Scope

New `docs/features/notifications.mdx` and `docs/features/support.mdx`; `docs/features/realtime-events.mdx`, `admin-and-roles.mdx`, `settings-and-profile.mdx`, `index.mdx`; `docs/getting-started/repository-layout.mdx`; the matching `i18n/ko/` pages; `sidebars.ts`; `src/components/icons/registry.ts`.

# Reason

B4FastAPI `main` (`509155a`) and B4React `8572a36` add a persistent per-user notification inbox, private support inquiries between users and administrators, and an opt-in WebSocket transport template.

# Impact

- **Notification inbox** (new): architecture, producers and kinds, pagination, selection, bounded read-all, delete tombstones, profile-menu entry.
- **Support inquiries** (new): endpoints and permissions, limits, retry deduplication, transactional inbox notifications, account deletion.
- **Realtime events**: `inbox.changed` and the opt-in `WebSocketProvider` contract.
- **Admin & roles**: `/admin/inquiries` and the inquiry and notification permission rows.
- **Settings**: the Support section, the Notifications menu entry, and inline-edit cancel on outside click.
- The icon registry adds `support` (lucide `LifeBuoy`).

Facts checked against B4FastAPI `509155a` (`notes/notification-inbox.md`, `notes/support-inquiries.md`, `notes/websocket-provider.md`, `contracts/openapi.json`, `app/models/inbox.py`, `app/models/inquiry.py`, `app/services/billing_notifications.py`) and B4React `8572a36` (`src/locales/en.json`, `src/locales/ko.json`, `WebSocketProvider.tsx`).

# Verification

- `make format`, then `make verify` passed (format check, typecheck, en/ko build).
