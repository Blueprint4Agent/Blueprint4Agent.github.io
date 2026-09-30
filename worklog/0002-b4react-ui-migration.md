# Commit Title

feat(ui): migrate manual theme and icons to B4React

# Changed File Scope

`src/css/custom.css`, `src/pages/index.tsx`, `src/components/` (brand, docs, icons, navbar), `src/theme/` (Icon, Admonition/Icon, NavbarItem/ComponentTypes, MDXComponents, ColorModeToggle), `static/img/`, `docusaurus.config.ts`, `i18n/ko/` (code, navbar, docs sidebar), and `docs/about-b4a/what-is-b4a.mdx` with its `ko` translation. Removed the default Docusaurus homepage feature component, `markdown-page.mdx`, and old favicon/logo images.

# Reason

The manual is now the B4Agent manual for B4FastAPI + B4React (with B4SpringBoot next), so it must share B4React's visual language: the robot brand mark, neutral palette, 4px spacing scale, 8/12/16px radii, sidebar tone, landing layout, and lucide icons.

# Impact

- Site is branded B4Agent with the adaptive robot mark, favicon, and banner social card.
- All theme icons (language, menu, close, copy, word wrap, home, edit, external link, sidebar collapse, admonitions) use lucide; GitHub uses a currentColor mark.
- Homepage follows the B4React landing structure with stack cards and built-in highlights (en/ko).
- Docs get `Card`, `CardGrid`, `Badge`, and `IconTile` MDX components plus table, code block, admonition, TOC, and pager styles for upcoming feature and environment pages.
- Mobile navigation is restored (the hamburger was previously hidden) and Korean text wraps by word.

# Verification

- `make verify`: format check, typecheck, and en/ko build passed.
- Playwright (Chromium) screenshots of home and docs at 1440px and 390px in light and dark themes, en and ko: no console errors and no horizontal overflow; mobile hamburger opens the docs sidebar.
