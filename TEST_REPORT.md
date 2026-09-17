# عوامی تعمیراتی سیکشن · Build verification / تصدیقی رپورٹ

Verified locally on 2026-09-17 with Node 22.12.0 and pnpm 12.4.2
(`pnpm install --config.node-linker=hoisted`, non-frozen because the previously committed
`pnpm-lock.yaml` was truncated — it only contained `@pnpm/exe` snapshots and was missing
`@astrojs/check@0.9.10`, so pnpm refused it with `Broken lockfile`). The lockfile has been regenerated
and is now complete (lockfileVersion 9.0).

## Commands run

```bash
node node_modules/astro/bin/astro.mjs build
node node_modules/astro/bin/astro.mjs check
```

## Results

- `astro build` → `4 page(s) built` (`/`, `/privacy/`, `/terms/`, `/cookies/`), then
  `[@astrojs/sitemap] sitemap-index.xml created at dist`.
- `astro check` → **0 errors, 0 warnings, 2 hints** (the pre-existing inline Google Analytics tag and
  an inline helper in the weather refresh script).
- `dist/` contains `index.html`, `manifest.webmanifest`, `sw.js`, `robots.txt`,
  `sitemap-index.xml`, `sitemap-0.xml`, `images/og-cover.png`,
  `icons/{icon-192,icon-512,maskable-512}.png` and `_astro/*.css`.
- Served from `astro preview` (static server): `/`, `/manifest.webmanifest`, `/sw.js`,
  `/robots.txt`, `/sitemap-index.xml`, `/images/og-cover.png`, `/icons/icon-512.png` all return **200**.

## Emitted-HTML assertions

- Three JSON-LD blocks parse as valid JSON: `TouristAttraction`, `BreadcrumbList`, `FAQPage`.
- `TouristAttraction` keys: `@id, name, alternateName, description, url, image, isAccessibleForFree,
  publicAccess, isPartOf, address, geo, hasMap, sameAs, openingHoursSpecification`.
- **No `aggregateRating` / review nodes** in any JSON-LD block (Google Maps review data is page-only).
- Rating `4.6` and count `21,997` are present in the visible page (hero pill, reviews block,
  sources block, footer) together with the September 2026 sync note.
- `rel="canonical"` → `https://delhigatelahore.com/`; `og:image` → `https://delhigatelahore.com/images/og-cover.png`.
- Map iframe src → `https://www.google.com/maps?q=31.5821649,74.3264164&hl=en&z=17&output=embed`;
  the Google Maps share link (`maps.app.goo.gl/Q8yoAtkexN7HjBCu8`) and the WCLA tourism link are kept.
- Exactly one `<h1>`; the rendered page carries:
  - 51 content cards, 16 itinerary steps, a 4-row seasonal table, 7 forecast day cards,
    10 FAQ entries and one contact/guidance notice.
- Section anchors present exactly once each: `#weather #seasons #services #routes #responsibility`
  (plus the pre-existing `#story #visit #transport #history #nearby #food #reviews #map #faq #sources`).
- No `example.com` or `localhost` strings in the output.
- Visitor-facing text contains **no provider / pricing / credential notes** (no "免费", no "密钥",
  no "free plan", no key mentions). Weather data comes from public endpoints that need no credentials;
  attribution lives in `README.md` and this file, not on the page.

## Weather & air-quality block

- Rendered server side inside the page component at build time, then refreshed in the visitor's
  browser from the same public endpoints and cached in `localStorage` for 15 minutes (falls back to
  the prerendered numbers when the network is unavailable).
- Build output verified to contain 7 forecast cards with real values (rendered sample: current 29 °C,
  17–23 ستمبر week). The "take an umbrella / too hot / poor air" advice line is derived from the same
  data (rain probability ≥ 60 %, wet weather codes, max temp ≥ 38 °C, AQI > 150).

## Before deploying

```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy   # wrangler deploy — uploads ./dist as static assets
```
