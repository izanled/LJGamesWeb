# Repository Guidelines

## Project Structure & Module Organization

This is a static React prototype for the LJ Games landing page. `index.html` is the entry point and loads React, ReactDOM, and Babel from CDNs. JSX files are loaded in this order: `tweaks-panel.jsx`, `logos.jsx`, `components.jsx`, `games.jsx`, `extras.jsx`, then `app.jsx`.

Top-level JSX files define global component functions and expose cross-file dependencies with `window.ComponentName = ComponentName`; they are not ES modules. Core styles live in `styles.css`; reusable design tokens, fonts, and themed colors live in `design-system/colors_and_type.css`. Runtime screenshots belong in `screenshots/`; `uploads/` and `_design_extract/` are source handoff/reference material and are ignored by Git.

## Build, Test, and Development Commands

There is no package manager, build step, linter, or automated test suite.

```powershell
python -m http.server 8000
```

Runs a local static server from the repository root. Open `http://localhost:8000/index.html` to preview changes. Do not use `file://`; Babel standalone cannot reliably fetch the external JSX files that way.

GitHub Pages deployment is handled by `.github/workflows/pages.yml` on pushes to `main`. The workflow stages the static site into `_site`, excludes repo metadata and local guidance files, and deploys with `actions/deploy-pages`.

## Coding Style & Naming Conventions

Use two-space indentation in JSX, single quotes for JavaScript strings unless existing nearby code uses double quotes, and PascalCase for React components. Keep section components split by concern: shared landing sections in `components.jsx`, game showcases in `games.jsx`, lower-page sections in `extras.jsx`, logo primitives in `logos.jsx`, and app state/composition in `app.jsx`.

Preserve the `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` markers in `app.jsx`. When adding display copy, update both KO and EN branches together. Prefer editing design tokens in `design-system/colors_and_type.css` before adding one-off color values inside components.

## Testing Guidelines

Manually verify in a local browser after changes. Check desktop and mobile widths, language toggle behavior, dark/light theme, accent color switching, sticky header behavior, and that all screenshots render from `screenshots/`.

## Commit & Pull Request Guidelines

Recent commits use short Korean, outcome-focused summaries. Keep commits concise and describe the visible change, for example "mobile responsive layout overhaul" or "trigger GitHub Pages redeploy" translated into the project's normal Korean commit style.

For pull requests, include a brief summary, screenshots or screen recordings for visual changes, tested viewport sizes, and any deployment impact. Note when changes touch CDN versions, GitHub Pages workflow behavior, or bilingual content.
