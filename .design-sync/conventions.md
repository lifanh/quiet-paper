## Building with quiet-paper

**No provider or theme setup needed.** Every component reads plain CSS custom
properties and Tailwind utility classes — there is no `ThemeProvider`/context
to wrap your tree in. Just link `styles.css` and load `_ds_bundle.js`; every
component (including `Dialog`, which uses Base UI internally) works standalone.

### The styling idiom: Tailwind utility classes, content-scanned

Components are styled with Tailwind v4 utility classes (`className="bg-accent
text-surface rounded-sm px-4 py-2"`, etc.), mapped to this DS's own tokens via
a `@theme` bridge — **not** generic Tailwind defaults. Real, confirmed classes
you'll see in the shipped components and can reuse safely:

- **Surface / ink**: `bg-bg`, `bg-surface`, `bg-border-subtle`, `bg-transparent`, `bg-error-surface` · `text-text`, `text-muted`, `text-error`, `text-surface`
- **Border**: `border`, `border-2`, `border-b`, `border-dashed`, `border-border`, `border-border-subtle`, `border-error-border`, `border-transparent`
- **Type**: `font-sans` (serif prose face), `font-ui` (UI sans), `font-mono` · sizes `text-xs`/`text-sm`/`text-lg` (bare, reusable) · weights `font-medium`/`font-semibold`/`font-bold`
- **Radius**: `rounded-sm`, `rounded-md`
- **Spacing**: `p-5`/`p-6`, `px-3`/`px-4`/`px-5`, `py-2`/`py-3`/`py-6`/`py-10`, `m-0`, `mt-2`/`mt-5`/`mt-10`, `mb-2`/`mb-6`, `gap-2`/`gap-3`, `space-y-2`/`space-y-3`
- **Layout**: `flex`, `inline-flex`, `flex-wrap`, `items-center`, `justify-center`, `justify-end`, `grid`

**Important limitation — this bundle is a static snapshot, not a live Tailwind
build.** The real `@lifanh/quiet-paper` package ships *no* compiled CSS at all
(host apps run their own Tailwind build over the package's `dist/`, scanning
it for classes in use — see `docs/ARCHITECTURE.md`'s "Pattern A"). What's
bundled here was generated the same way, by scanning this package's own
source, so **only the utility classes already used by these 9 components
exist as real CSS rules.** A syntactically valid Tailwind class that happens
not to be listed above (e.g. `text-xl`, `max-w-measure`) will render
unstyled — there's no live engine here to generate it on demand.

**For anything beyond the list above** (new layout glue, a size the
components don't already use), style with the CSS custom properties directly
— these are always present regardless of utility-class usage:
`var(--color-bg)`, `var(--color-surface)`, `var(--color-text)`,
`var(--color-text-muted)`, `var(--color-border)`, `var(--color-border-subtle)`,
`var(--color-accent)`, `var(--color-accent-hover)`, `var(--color-warning*)`,
`var(--color-error*)`, `var(--space-1)` through `var(--space-16)`,
`var(--font-sans)`/`var(--font-ui)`/`var(--font-mono)`, `var(--text-xs)`
through `var(--text-3xl)`, `var(--radius-sm)`/`var(--radius-md)`,
`var(--measure)`/`var(--measure-wide)` (prose max-widths).

### Where the truth lives

- `styles.css` — the one entry point; `@import`s everything (tokens + the
  compiled component CSS in `_ds_bundle.css`). Read it before styling anything.
- `components/general/<Name>/<Name>.prompt.md` — real, working usage examples
  per component (composed from this repo's own app, not invented).

### An idiomatic composition

Real pattern from this DS's own reference app — a bordered panel with a
labeled field and a primary action:

```tsx
import { Button, Field, Panel } from "@lifanh/quiet-paper";

function SubscribePanel() {
  return (
    <Panel>
      <header className="mb-6 space-y-2">
        <h2 className="m-0 font-sans text-lg leading-normal text-text">
          Stay in the loop
        </h2>
        <p className="m-0 text-sm leading-relaxed text-muted">
          One quiet note when there is something worth reading. No noise.
        </p>
      </header>
      <form className="space-y-3">
        <Field
          id="email"
          label="Email"
          type="email"
          hint="Display only — nothing is sent yet."
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </Panel>
  );
}
```

`Panel` provides the bordered surface; `Field` and `Button` need no extra
styling — every quiet-paper primitive already carries its own tokens.
