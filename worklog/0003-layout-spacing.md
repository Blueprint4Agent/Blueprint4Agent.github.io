# Commit Title

style(ui): refine doc layout grid, spacing, and card geometry

# Changed File Scope

`src/css/custom.css`, `src/components/docs/index.tsx`, `src/pages/index.tsx`.

# Reason

Measured layout showed cramped and inconsistent placement: 16px gutters next to the sidebar and under the navbar, an 856px reading line, a TOC detached at the far edge, a breadcrumb home icon offset by 6px, sidebar text misaligned with the navbar logo, 236-554px tall cards with empty space, and mixed 14/20/24px block spacing. Infima utilities and the theme `docItemCol` width use `!important` inside cascade layers, so earlier unlayered overrides never applied.

# Impact

- Docs use a centered 46rem reading column plus a 13rem TOC with 48px gutters (20px on mobile) and 40px top padding; TOC and breadcrumbs share one top line.
- One vertical rhythm: 20px between text blocks, 24px around tables/code/admonitions/cards, 48px before h2.
- Sidebar link text aligns with the navbar logo at 16px; breadcrumbs are 28px high and vertically centered.
- Cards are compact: two-up cards place the icon beside the title, three-up cards stack it and reflow by available width; homepage highlights reuse the same card.

# Verification

- `make verify` passed.
- Playwright geometry measurements at 1440px and 1180px, plus screenshots at 1440px/390px in light/dark and en/ko: no console errors or horizontal overflow.
