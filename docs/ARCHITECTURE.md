# Architecture

Solo-friendly shared stack: **React primitives + rendered Markdown prose + Tailwind v4 tokens** for Astro content, Astro islands, and any React app (Vite, Next, etc.).

## This repo exports

| Output | Use |
|--------|-----|
| `dist/quiet-paper.js` + types | `import { Panel, Prose } from "@lifanh/quiet-paper"` |
| `dist/tokens.css` | Standalone token layer — plain `:root` custom properties, zero Tailwind involvement |
| `dist/tokens.json` | Same tokens, machine-readable, for tooling that shouldn't parse CSS |
| `styles/tokens.css` | Same tokens as `dist/tokens.css`, kept for existing `layer(theme)` imports |
| `styles/tailwind-theme.css` | Tailwind v4 `@theme` bridge |
| `styles/prose.css` | `.qp-prose` rule scoping Tailwind Typography's `--tw-prose-*` variables |
| `styles/tailwind-sources.css` | `@source` for class detection in consumer builds |

## Token source of truth

`src/tokens/tokens.ts` is the **only** place token names and values are
authored. It groups tokens (color, space, type, radius, measure, density) and,
for tokens that also feed Tailwind utilities, records the Tailwind theme
namespace name to bridge to (e.g. `space-4` → `--spacing-4`).

`scripts/build-tokens.mjs` (run as part of `npm run build`) generates every
downstream artifact from that one file:

```
src/tokens/tokens.ts
        │
        ├──▶ dist/tokens.css           plain :root, no Tailwind, for any consumer
        ├──▶ dist/tokens.json          same tokens as JSON
        ├──▶ styles/tokens.css         back-compat copy for layer(theme) imports
        └──▶ styles/tailwind-theme.css generated @theme bridge
```

Tokens flow in this one direction only. Never hand-edit any of the generated
files — edit `tokens.ts` and rebuild. The generator asserts `dist/tokens.css`
contains no `--tw-` custom property and no `@theme`/`@layer`, so Tailwind
internals can never leak into the standalone token layer.

### Non-Tailwind consumers

Anything that just needs the design tokens — a docs site, an email template, a
sync tool — can link `dist/tokens.css` directly with no build step:

```html
<link rel="stylesheet" href="node_modules/@lifanh/quiet-paper/tokens.css">
```

or read `dist/tokens.json` for a value map keyed by custom-property name.

### Containing Tailwind's `--tw-*` internals

`Prose` used to author Tailwind Typography's `--tw-prose-*` variables through
arbitrary-value utility classes (`[--tw-prose-body:var(--color-text)]`, …).
Those are now declared once in `styles/prose.css` under `.qp-prose`, a class
the `Prose` component applies itself. This keeps `--tw-*` variables scoped to
the component that owns them — out of the utility-selector soup, and out of
anything that scans the compiled stylesheet for design tokens.

## Tailwind v4 (Pattern A)

We **do not** bundle Tailwind into the library. The host app runs Tailwind once:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@import "@lifanh/quiet-paper/styles/tailwind-sources.css";
@import "@lifanh/quiet-paper/styles/tokens.css" layer(theme);
@import "@lifanh/quiet-paper/styles/tailwind-theme.css";
@import "@lifanh/quiet-paper/styles/prose.css";
```

`tailwind-sources.css` points at **`dist/`** so published npm installs work without `src/`.

`Prose` depends on Tailwind Typography. The host app owns Markdown parsing and any custom callout transforms; this package owns the rendered element styling and `.qp-callout-*` class contract. `prose.css` carries the `.qp-prose` variable overrides the component applies itself.

## Build

**Vite library mode** — React and `react-dom` are externals; host supplies them.

## Consumers

- **Astro:** `@astrojs/react`, import components in `.astro` with `client:*` when interactive, wrap rendered Markdown with `Prose`, global CSS in layout. See [astro-quiet-paper](https://github.com/lifanh/astro-quiet-paper).
- **React SPA:** same CSS imports in `index.css`; import components as usual.

## What stays in apps

Layouts, marketing copy, Markdown parser transforms, demo composites, data fetching — not this package.
