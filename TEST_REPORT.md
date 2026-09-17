# Build verification note

The source tree was generated and statically inspected in the provided execution environment. The environment had no outbound DNS access to `registry.npmjs.org`, so dependency installation and therefore `astro check` / `astro build` could not be executed here. The package versions were pinned from current npm package pages and TypeScript was intentionally pinned to 5.9.3 because `@astrojs/check` currently requires the classic TypeScript programmatic API (TypeScript 7 no longer exposes it).

Before deployment, run exactly:

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
grep -RInE 'example\\.com|localhost|chrome-extension://' dist || true
```

If pnpm reports that the lockfile is incomplete, regenerate it once in a networked environment with `pnpm install`, commit the resulting full `pnpm-lock.yaml`, then repeat the frozen install. This environment could not safely fabricate the full transitive lockfile.
