# @lifanh/quiet-paper

**Quiet paper** design system — React primitives, rendered Markdown prose styling, and Tailwind v4 tokens for personal sites and app demos.

## Requirements

- React 18 or 19
- Tailwind CSS v4 with utilities used by components (`bg-accent`, `font-ui`, `text-muted`, etc.)
- `@tailwindcss/typography` for the `Prose` rendered Markdown wrapper

## Install

```bash
npm install @lifanh/quiet-paper
npm install -D @tailwindcss/typography
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
@plugin "@tailwindcss/typography";
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
  Prose,
} from "@lifanh/quiet-paper";
```

## Rendered Markdown prose

Wrap Markdown-rendered HTML with `Prose`. It follows Astro’s Tailwind Typography recipe: the host app registers `@tailwindcss/typography`, and this package owns the quiet-paper element modifiers.

```astro
---
import { Prose } from "@lifanh/quiet-paper";
const { Content } = await render(entry);
---

<Prose className="mt-10 text-lg leading-relaxed">
  <Content />
</Prose>
```

`Prose` covers common Markdown/GFM output: headings, paragraphs, links, lists, blockquotes, inline code, fenced code blocks, tables, images, horizontal rules, footnotes, task lists, figures, details, `kbd`, `mark`, `del`, `sup`, and `sub`.

Callouts are explicit classes inside rendered content; parser transforms stay in the host app:

```html
<aside class="qp-callout qp-callout-note">
  <p><strong>Note</strong></p>
  <p>This is a quiet paper callout.</p>
</aside>
```

Supported tones: `qp-callout-note`, `qp-callout-warning`, `qp-callout-error`.

## What stays in the app

- Astro layouts, marketing pages, demo-specific composites (`FetchDemo`, `RunsTable`, …)
- Markdown parser transforms for custom callout syntax
- This package is **primitives only** — no business logic

## Canonical tokens

Edit `styles/tokens.css` here first; apps should not fork hex values in components.

## Why `tailwind-sources.css`?

Tailwind v4 does not scan `node_modules`. The package ships a one-line `@source "../dist"` file so consumers never hard-code `../../node_modules/...` (breaks when `global.css` moves or you use pnpm).

## Consumer contract (Pattern A only)

All consumers are expected to use **Tailwind CSS v4**. Setup:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
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
