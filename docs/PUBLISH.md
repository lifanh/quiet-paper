# Publish `@lifanh/quiet-paper`

Standalone repo. GitHub Release → npm via `.github/workflows/release-publish-npm.yml`.

## One-time

1. `npm login` · org scope **lifanh** · Automation token for CI.
2. GitHub repo `lifanh/quiet-paper` (adjust `repository.url` in `package.json` if needed).
3. Secret `NPM_TOKEN` on that repo.

## Each release

1. Change `src/` or `styles/`.
2. Bump `package.json` + `CHANGELOG.md`.
3. `npm run build` locally.
4. Push `main`, create GitHub Release tag `vX.Y.Z` (matches version).
5. Workflow publishes with provenance.

## Build

- **Vite library mode** → `dist/quiet-paper.js` + `dist/index.d.ts`
- **Tailwind v4:** consumers import `styles/*.css`; utilities generated in the app (not bundled CSS).

## Local pack check

```bash
npm ci && npm run build && npm pack --dry-run
```