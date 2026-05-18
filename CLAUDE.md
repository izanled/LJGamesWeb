# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication

- 사용자에게 보내는 결과/안내 메시지는 한국어로 작성한다 (코드 자체나 주석은 기존 스타일 유지).

## Project origin

This repo is the implemented copy of a **Claude Design (claude.ai/design)** handoff bundle for "엘제이게임즈 (LJ Games)" — an indie game studio landing page. The original bundle, its README, and the full chat transcript that captured user intent are preserved at `_design_extract/untitled/` and should be consulted when interpreting design ambiguity. The page targets two shipped games (**한양 온라인** — idle RPG, **Gem TD** — tower defense) plus a casual title in development.

## Run / preview

There is no build system, package manager, test suite, or linter. The page is a React 18 + Babel-standalone prototype loaded entirely via CDN. To preview:

```powershell
# from the project root
python -m http.server 8000
# then open http://localhost:8000/index.html
```

Opening `index.html` directly with `file://` will fail — Babel-standalone can't fetch `<script type="text/babel" src="...">` cross-origin, so a local HTTP server is required.

## Architecture

### Module loading model
`index.html` is the single entry point. It pulls React/ReactDOM/Babel from unpkg, then loads six JSX files **in order** via `<script type="text/babel" src="...">`:

```
tweaks-panel.jsx → logos.jsx → components.jsx → games.jsx → extras.jsx → app.jsx
```

These are **not** ES modules. Each file defines top-level functions and explicitly exports them with `window.Foo = Foo`, so later files can reference earlier components by their global name. Reordering the script tags or omitting a `window.X = X` export will break cross-file references silently at runtime. `app.jsx` runs last and calls `ReactDOM.createRoot(...).render(<App />)`.

### Section composition (App tree)
`app.jsx` renders, in order: `Header → Hero → Marquee → StatsStrip → HanyangShowcase → GemTDShowcase → ComingNext → AboutSection → DevlogSection → FooterSection`, plus the floating `TweaksPanel`. Section components are split by concern:
- `components.jsx` — Header, Hero (with mouse-parallax `HeroCollage` + `Sparkles`), Marquee, StatsStrip
- `games.jsx` — `HanyangShowcase` + `HanyangMosaic`, `GemTDShowcase` + `GemTDStrip`
- `extras.jsx` — ComingNext, AboutSection, DevlogSection, FooterSection (contact CTA + footer columns)
- `logos.jsx` — three pixel-art SVG marks (`LogoGemMark`, `LogoMascot`, `LogoMonogram`) + `LogoWordmark`, composed via `<Logo variant="..." />`
- `tweaks-panel.jsx` — the dev tweaks UI primitives (`TweaksPanel`, `TweakSection`, `TweakRadio`, `TweakColor`) and the `useTweaks` hook

### State / tweaks model
`App` holds four tweakable settings via `useTweaks(defaults)` (from `tweaks-panel.jsx`): `lang` (KO/EN), `logoVariant` (gem/mascot/monogram), `accent` (one of four dancheong hex codes), `theme` (light/hanji vs dark/ink). Defaults sit inside a `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` block — this marker is used by the upstream design tool and should be preserved if regenerating.

Effects in `app.jsx` propagate state to the DOM:
- `theme === 'dark'` → sets `data-theme="dark"` on `<html>`, which activates the dark token block in `colors_and_type.css`.
- `accent` → writes `--accent` and `--accent-deep` CSS variables on `<html>` (deep variants are hardcoded for the four palette options).

Every section component takes a `lang` prop and ships **both KO and EN copy inline** as `const t = lang === 'KO' ? {...} : {...}`. When adding or editing copy, both languages must be updated in lockstep.

### Design system
`design-system/colors_and_type.css` is the token layer — Joseon-era dancheong (단청) palette, hanji (한지) parchment neutral ladder, gem palette, Korean pixel typography (PF Stardust, Galmuri11, Pretendard, VT323), semantic tokens (`--bg`, `--fg`, `--accent`, `--border-ink`, etc.), pixel-sharp shadow ladder, and 4px spacing scale. **Touch tokens here**, not in section components.

`styles.css` is the utility layer — `.section`, `.container`, `.pixel-card`, `.btn` (variants: `primary`/`ink`/`gem`/`ghost`/`sm`/`lg`), `.tag` (solid-red/blue/green/ink/yellow), `.marquee`, `.shot-frame`, `.phone-frame`, `.dancheong-divider`, `.hanji-bg`, `.dot-grid`, `.scanlines`, plus `floatY`/`blink`/`ticker` keyframes. Anything pixel-rendered uses `.pixelated` (`image-rendering: pixelated`).

Static assets:
- `design-system/assets/hanji-texture.svg`, `dancheong-band.svg` — referenced from CSS by relative path.
- `design-system/fonts/PFStardust-Bold.ttf` — local font; other fonts come from jsDelivr/Google.
- `screenshots/` — 13 in-game JPEGs (7 GemTD, 6 한양). `uploads/` holds duplicate originals with Korean filenames; new screenshot work should land in `screenshots/`.

### Visual idioms to preserve
The aesthetic depends on a few details that are easy to break:
- Hard pixel shadows (`box-shadow: 4px 4px 0 0 var(--border-ink)`), never soft blur.
- Stepped, low-framerate animations (`transition: ... steps(8)` / `steps(2)`) for the retro feel.
- `image-rendering: pixelated` on all screenshots and SVG marks; SVG marks also use `shapeRendering="crispEdges"`.
- Kicker/eyebrow labels use the pixel font (`var(--font-pixel)` = Galmuri11) with `0.12–0.16em` tracking and a leading ◆ or ◇ glyph.
