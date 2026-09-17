# دہلی گیٹ لاہور — Astro site

Single-page Urdu visitor guide for Delhi Gate, Lahore.

## Stack
Astro + Tailwind CSS + TypeScript + pnpm + Cloudflare Worker.

## Site URL
Set the domain only through the `SITE_URL` environment variable. `astro.config.mjs` reads it into Astro's `site` field. If `SITE_URL` is empty, the build remains valid, canonical/absolute Open Graph URL is omitted or relative, and `@astrojs/sitemap` is not enabled.

## Commands
```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Node: 24.21.0. pnpm: 12.4.2.
