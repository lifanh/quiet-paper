# @lifanh/quiet-paper

**Quiet paper** design system — React primitives and Tailwind v4 tokens for personal sites and app demos.

## Requirements

- React 18 or 19
- Tailwind CSS v4 with utilities used by components (`bg-accent`, `font-ui`, `text-muted`, etc.)

## Install

```bash
npm install @lifanh/quiet-paper
```

**Local development** (link while editing the package):

```bash
npm install /path/to/quiet-paper
# or: npm link @lifanh/quiet-paper
```

## Styles (once per app)

In `global.css`:

```css
@import "tailwindcss";
@import "@lifanh/quiet-paper/styles/tailwind-sources.css";
@import "@lifanh/quiet-paper/styles/tokens.css" layer(theme);
@import "@lifanh/quiet-paper/styles/tailwind-theme.css";

@layer base {
  /* document defaults — see astro-quiet-paper/src/styles/global.css */
}
```

## Use

```tsx
import {
  Button,
  Field,
  Panel,
  EmptyState,
  ErrorState,
  HairlineTable,
} from "@lifanh/quiet-paper";
```

## What stays in the app

- Astro layouts, marketing pages, demo-specific composites (`FetchDemo`, `RunsTable`, …)
- This package is **primitives only** — no business logic

## Canonical tokens

Edit `styles/tokens.css` here first; apps should not fork hex values in components.

## Why `tailwind-sources.css`?

Tailwind v4 does not scan `node_modules`. The package ships a one-line `@source "../src"` file so consumers never hard-code `../../node_modules/...` (breaks when `global.css` moves or you use pnpm).

## Consumer contract (Pattern A only)

All consumers are expected to use **Tailwind CSS v4**. Setup:

```css
@import "tailwindcss";
@import "@lifanh/quiet-paper/styles/tailwind-sources.css";
@import "@lifanh/quiet-paper/styles/tokens.css" layer(theme);
@import "@lifanh/quiet-paper/styles/tailwind-theme.css";
```

No pre-built utility CSS in this package; the app’s Tailwind build generates utilities after scanning package sources via `tailwind-sources.css`.

**Do not** add `@source` paths into `node_modules` from the app — the package owns that via `tailwind-sources.css`.

## Contrast

After editing `styles/tokens.css`, re-check foreground/background pairs (WCAG AA 4.5:1 for normal text).

## Docs

- [Architecture](./docs/ARCHITECTURE.md)
- [Publish](./docs/PUBLISH.md)