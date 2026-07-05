# Architecture

Solo-friendly shared stack: **React primitives + rendered Markdown prose + Tailwind v4 tokens** for Astro content, Astro islands, and any React app (Vite, Next, etc.).

## This repo exports

| Output | Use |
|--------|-----|
| `dist/quiet-paper.js` + types | `import { Panel, Prose } from "@lifanh/quiet-paper"` |
| `styles/tokens.css` | CSS variables (quiet paper palette) |
| `styles/tailwind-theme.css` | Tailwind v4 `@theme` bridge |
| `styles/tailwind-sources.css` | `@source` for class detection in consumer builds |

## Tailwind v4 (Pattern A)

We **do not** bundle Tailwind into the library. The host app runs Tailwind once:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@import "@lifanh/quiet-paper/styles/tailwind-sources.css";
@import "@lifanh/quiet-paper/styles/tokens.css" layer(theme);
@import "@lifanh/quiet-paper/styles/tailwind-theme.css";
```

`tailwind-sources.css` points at **`dist/`** so published npm installs work without `src/`.

`Prose` depends on Tailwind Typography. The host app owns Markdown parsing and any custom callout transforms; this package owns the rendered element styling and `.qp-callout-*` class contract.

## Build

**Vite library mode** — React and `react-dom` are externals; host supplies them.

## Consumers

- **Astro:** `@astrojs/react`, import components in `.astro` with `client:*` when interactive, wrap rendered Markdown with `Prose`, global CSS in layout. See [astro-quiet-paper](https://github.com/lifanh/astro-quiet-paper).
- **React SPA:** same CSS imports in `index.css`; import components as usual.

## What stays in apps

Layouts, marketing copy, Markdown parser transforms, demo composites, data fetching — not this package.
