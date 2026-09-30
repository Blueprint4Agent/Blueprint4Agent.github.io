# Commit Title

feat(ui): merge brand into sidebar with rail tooltips and a cleaner TOC

# Changed File Scope

`src/components/ui/Tooltip.tsx` (new), `src/theme/DocSidebar/Desktop/` (brand header, toggle tooltip), `src/theme/DocRoot/Layout/Sidebar/ExpandButton/` (collapsed rail), `src/theme/TOC/` (new), `src/css/custom.css`, `i18n/ko/code.json`, `package.json` and `package-lock.json` (`@types/react-dom`).

# Reason

The top navbar bar duplicated navigation and did not match B4React, where the brand sits in the AppSidebar header and the collapsed sidebar is an icon rail with tooltips. The right table of contents drew two vertical lines and had no heading.

# Impact

- Desktop has no navbar bar. Language, GitHub, and theme controls stay top-right with their own pill surfaces and no bar background. On docs pages the brand moves into the sidebar header; the home page keeps the floating brand.
- Expanded sidebar header: B4React text brand (14px/500, links home) and the PanelLeftClose toggle with a tooltip.
- Collapsed sidebar: a 48px rail with the robot mark (swapped for PanelLeftOpen on hover or focus) and every doc icon grouped by section. Each icon shows its label in a B4React tooltip (12px/16px, 6px radius, inverse colors, body portal so the clipped sidebar cannot hide it).
- TOC: "On this page" / "이 페이지 목차" title, one hairline rail, and the active item marked on the rail; nested items are indented.
- Mobile keeps the standard navbar and drawer.

# Verification

- `make verify` passed.
- Playwright at 1440px in dark and light, English and Korean: collapse, hover tooltip ("Email", "이메일"), brand hover swap, reopen from the rail, no page errors. Screenshots of the home page and the 390px mobile page and drawer.
