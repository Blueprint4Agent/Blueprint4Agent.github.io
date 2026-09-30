# Commit Title

feat(ui): adopt B4React sidebar, card, badge, table, and status styles

# Changed File Scope

`src/css/custom.css` (rewritten), `sidebars.ts`, `src/components/docs/index.tsx`, `src/components/icons/registry.ts`, `src/pages/index.tsx`, `src/theme/MDXComponents.tsx`, `src/theme/Admonition/` (Layout and icons), `src/theme/DocSidebarItem/Link/`, `src/theme/DocSidebar/Desktop/CollapseButton/`, `src/theme/DocRoot/Layout/Sidebar/ExpandButton/`.

# Reason

The manual should look like B4React itself, not an approximation. Components now copy B4React `src/styles/app.css` values from the pinned B4React commit `0d8656f`.

# Impact

- Tokens: B4React light/dark palette, including `--popover-bg`, `--input-border`, and the 0.2 light border.
- Sidebar: `.app-sidebar--expanded` rows (32px, 13px/500, 8px gap, 18px lucide icon at 1.75 stroke, 12% hover, 8% active), 12px section labels, 0.5px border, and the PanelLeftClose/PanelLeftOpen toggle. Every doc row has an icon through `customProps.icon`.
- Navbar: BrandBanner geometry (40px mark with 5px padding, 24px/600 wordmark); links use sidebar row geometry; dropdowns use DropdownMenu styles.
- Cards: `.primary-card` (0.5px border, 16px radius, shadow) with plain 18px icons and chevrons.
- Badges: `.ui-status-badge` variants. Buttons: `.ui-button`, `.ui-button--pill-secondary`, `.landing-hero__start-button`.
- Tables: `.developer-key-table` (13px, 12px/500 headers on popover background, 0.5px row borders, 6% hover), no uppercase headers.
- Admonitions: rendered as `.status-card` (16px icon column, 12px title, 13px message) with B4React Info/TriangleAlert/CircleAlert icons.
- Pager: `.settings-row`. Theme toggle keeps `.theme-toggle-button` values.
- Mobile: navbar links stay hidden as Infima intends; key/value tables use a narrower label column and wrap long code.
- Includes Mermaid container and node styles, used by the following diagram commit.

# Verification

- `make verify` passed with this commit's files only (Mermaid config staged separately).
- Playwright screenshots at 1440px, 1180px, and 390px in light and dark, English and Korean (home, overview, observability, email, API keys, git governance): no console errors, no horizontal overflow.
