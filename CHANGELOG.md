# Changelog

All notable changes to `@lifanh/quiet-paper` are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/).

## [0.2.1] - 2026-07-05

### Changed

- `Prose` now keeps Markdown H1 top spacing for non-initial headings while still removing top margin from the first child.

## [0.2.0] - 2026-07-05

### Added

- `Prose` rendered Markdown wrapper built on Tailwind Typography element modifiers.
- Styling coverage for common Markdown/GFM output: headings, lists, blockquotes, code, tables, images, horizontal rules, footnotes, task lists, figures, details, and inline semantic elements.
- Explicit callout class contract: `.qp-callout`, `.qp-callout-note`, `.qp-callout-warning`, `.qp-callout-error`.
- Warning color tokens for quiet callout and highlight treatments.

### Changed

- `@tailwindcss/typography` is now a peer requirement for consumers that use `Prose`.

## [0.1.0] - unpublished

### Added

- Design tokens (`styles/tokens.css`) and Tailwind v4 theme bridge.
- Primitives: `Button`, `Field`, `Panel`, `EmptyState`, `ErrorState`, `LoadingBlock`, `HairlineTable`.
- Error legibility: rust error tokens, `!` kicker marker, inline `×`, 2px invalid field border.
- `tailwind-sources.css` for consumer Tailwind scanning (Pattern A).

[0.2.1]: https://github.com/lifanh/quiet-paper/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/lifanh/quiet-paper/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/lifanh/quiet-paper/releases/tag/v0.1.0
