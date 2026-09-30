# Commit Title

fix(ui): move sidebar toggle to header and tidy the navbar

# Changed File Scope

`src/theme/DocSidebar/Desktop/` (new header layout and toggle), `src/css/custom.css`, `i18n/ko/code.json`.

# Reason

After collapsing, the expand button was pushed below the viewport by the hidden sidebar that still took 100% height, so the sidebar could not be reopened. The bottom footer also covered the last menu rows. The navbar mixed a 24px wordmark, a filled "Manual" pill, and controls of different heights. With the sidebar collapsed, content also stuck to the left because a layered `!important` width overrode the centered grid. On mobile, the navbar `backdrop-filter` trapped the fixed drawer inside the 44px navbar, hiding the menu.

# Impact

- Sidebar follows B4React AppSidebar: a header with a "Contents" title (목차 in Korean) and the PanelLeftClose toggle at the top; the menu scrolls beneath it; there is no footer.
- Collapsed state is a 48px rail with the PanelLeftOpen toggle at the same position as the close toggle; content stays centered.
- Navbar uses the B4React 44px `--nav-height`, a 24px mark with a 16px wordmark, text-only links, and 32px right-hand controls.
- The mobile drawer renders fully, and its back button uses the sidebar row style.

# Verification

- `make verify` passed.
- Playwright: close and reopen at 1440px (toggle at y=56 in both states; the last item is reachable; content centered when collapsed), mobile drawer at 390px lists all 26 doc rows, and screenshots in light and dark, English and Korean.
