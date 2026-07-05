# Publish `@lifanh/quiet-paper`

GitHub **Release (published)** → workflow [`.github/workflows/publish.yml`](../.github/workflows/publish.yml) → npm.

Uses **OIDC Trusted Publishing** (no `NPM_TOKEN` in GitHub secrets). Requires npm CLI **11.5+** (Node **24** in CI).

## One-time setup

### 1. GitHub repo

`lifanh/quiet-paper` — `main` pushed, workflow file on default branch.

### 2. First publish (manual, once)

Trusted Publishing can only be configured **after the package exists** on npm.

```bash
cd quiet-paper
npm login
npm ci && npm run build
npm publish --access public
```

Confirm: https://www.npmjs.com/package/@lifanh/quiet-paper

### 3. npm Trusted Publishing

On **npmjs.com** → `@lifanh/quiet-paper` → **Settings** → **Trusted publishing** (or *Publishing access*):

| Field | Value |
|--------|--------|
| Provider | GitHub Actions |
| Repository | `lifanh/quiet-paper` |
| Workflow filename | `publish.yml` |
| Environment | (leave empty unless you use GitHub Environments) |

Save. No long-lived npm token in GitHub.

### 4. `package.json` (already set)

```json
"publishConfig": { "access": "public", "registry": "https://registry.npmjs.org/" }
```

Scoped public packages need `"access": "public"` on publish (workflow passes `--access public` too).

## Each release

1. Edit `src/` or `styles/`.
2. Bump **`package.json` `version`** and **`CHANGELOG.md`**.
3. Commit and push `main`.
4. **GitHub → Releases → Draft new release**
   - Tag: `v0.1.1` (must match version without `v`)
   - Publish release (**not** draft only — trigger is `types: [published]`).
5. **Actions → Publish** runs: `npm ci` → `typecheck` → `build` → `npm pack --dry-run` → `npm publish --provenance`.

## Local check

```bash
npm ci && npm run typecheck && npm run build && npm pack --dry-run
```

## If publish fails in CI

| Symptom | Fix |
|---------|-----|
| Auth / 403 | Trusted publisher not configured or wrong workflow name |
| Package missing | Do manual first publish (step 2) |
| Version mismatch | Tag `vX.Y.Z` ↔ `"version": "X.Y.Z"` |
| Old npm | Use Node 24 in workflow (bundled npm ≥ 11.5) |

Fallback (not recommended long-term): add `NPM_TOKEN` secret and set `NODE_AUTH_TOKEN` on the publish step.