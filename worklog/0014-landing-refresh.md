# Commit Title

feat(home): refresh the landing page with a modern hero and bento layout

# Changed File Scope

`src/pages/index.tsx`, `src/css/custom.css` (home section), `i18n/ko/code.json`.

# Reason

The landing page was a plain centered text block followed by card lists, so it did not feel current. The refresh keeps B4React tokens and components.

# Impact

- Background: B4React `--bg-grad` glows over a faded dot grid.
- Hero: status pill linking to B4SpringBoot, two-line title with a gradient second line, the same CTAs, and a copyable `git clone --recurse-submodules` command chip.
- Terminal preview of the core workflow (`make init install`, dev servers, `make verify-plan`, `make verify`).
- Sections with eyebrow, title, and description. Stack cards now link to their repositories. Features are an 8-cell bento grid in one primary-card; each cell links to its manual page.
- Closing call to action to Quick start.
- English and Korean copy. The hero grid is constrained so nothing overflows at 390px.

# Verification

- `make verify` passed.
- Playwright full-page screenshots at 1440px (dark English, light Korean) and 390px (dark English, light Korean): no console errors, no horizontal overflow.
