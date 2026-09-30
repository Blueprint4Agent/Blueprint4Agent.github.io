# Commit Title

fix(ui): use the B4A brand and even out the top-right controls

# Changed File Scope

`docusaurus.config.ts` (navbar title and logo alt), `i18n/ko/docusaurus-theme-classic/navbar.json`, `src/css/custom.css`.

# Reason

B4React's sidebar brand reads "B4A", so the manual's sidebar header should match. The floating top-right controls had uneven spacing (20px then 8px, because the language dropdown wrapper kept Infima's 12px item padding) and mixed heights (32px buttons next to a 36px theme toggle).

# Impact

- Sidebar header, home brand, and mobile navbar read "B4A" in both locales. The site title in browser tabs stays "B4Agent".
- Language, GitHub, and theme controls form one row: 32px high, 8px apart, with compact inner padding.

# Verification

- `make verify` passed.
- Playwright measurements at 1440px: all three controls are 32px high at y=6, with gaps [8, 8]. Screenshots in dark English and light Korean, the sidebar header ("B4A"), and 390px mobile.
