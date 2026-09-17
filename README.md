# دہلی گیٹ لاہور — Delhi Gate, Lahore (Astro site)

Single-page Urdu visitor guide for **Delhi Gate, Lahore** (`delhigatelahore.com`).

## Stack
Astro + Tailwind CSS + TypeScript + pnpm + Cloudflare Workers static assets.

## Site URL
Set the domain through the `SITE_URL` environment variable; `astro.config.mjs` falls back to
`https://delhigatelahore.com` so canonical / Open Graph URLs and `@astrojs/sitemap` are always
produced. Only the canonical domain is used.

## Rendering
The site is fully static (`output: 'static'`) — no SSR, so the `@astrojs/cloudflare` adapter is not
used. `wrangler deploy` uploads `./dist` as Worker static assets (no `main` entry point).

## Single-attraction SEO entity bindings
All entity data lives in the frontmatter of `src/pages/index.astro` (`DOMAIN_NAME`,
`ATTRACTION_FULL_NAME`, `CITY_NAME`, `STATE_PROVINCE`, `COUNTRY_NAME`, `LATITUDE`, `LONGITUDE`,
`MAPS_SHARE_URL`, `MAPS_EMBED_SRC`, `NEARBY_LANDMARK_1/2`, `GOVT_TOURISM_URL`, …). Change only those
constants when reusing the template for another attraction.

Included:
- `TouristAttraction` JSON-LD with `@id`, `image`, `alternateName`, `address`, `geo`, `hasMap`,
  `sameAs`, `isAccessibleForFree`, `isPartOf` (Walled City of Lahore)
- `BreadcrumbList` + `FAQPage` JSON-LD, canonical link, geo meta, Open Graph / Twitter cards
- H1 (full name + city), About / Visitor guide / Location & how to visit / History / Nearby
  landmarks / Food / Reviews / Map / FAQ / Sources sections
- Authoritative outbound links (Walled City of Lahore Authority, Pakistan Tourism, Wikipedia,
  Wikimedia Commons) plus the Google Maps embed and share link

### Reviews (Google Maps)
The rating (`4.6`) and review count (`21,997`) are synchronised from **Google Maps user reviews**
(September 2026) and are **rendered on the page only** — they are deliberately excluded from all
JSON-LD blocks. The page, the reviews block and the sources block each state the source and the sync
date, and link back to Google Maps.

## Page sections
Story → Visitor guide → **Weather & 7-day forecast** → **Seasonal strategy** → Transport (airport /
bus / metro / taxi / self-drive) → **Visitor services & facilities** → History (architecture, periods,
local traditions) → Nearby landmarks → **Recommended itineraries (half-day / full-day, family,
photography, low-effort)** → Food → **Science & visitor responsibility** → Reviews → Map → FAQ → Sources.

Facilities, food, stays and transport are described **by type only** — no individual businesses are
recommended (independent, non-commercial guide).

## Weather & air quality
Current conditions, apparent temperature, humidity, wind, a 7-day forecast and the air-quality index
card are rendered inside the page component itself (server side, during render), then refreshed in the
visitor's browser from the same public weather endpoints and cached locally so the numbers stay current
between visits. The visitor-facing copy never mentions providers, keys or plans — just plain numbers
and plain advice ("take an umbrella", "too hot for midday walking"). Attribution for the open weather
data service is documented here and in `TEST_REPORT.md` instead of the page.

`Open-Meteo` endpoints used (no credentials involved):
`https://api.open-meteo.com/v1/forecast` and `https://air-quality-api.open-meteo.com/v1/air-quality`.

## PWA
- `public/manifest.webmanifest` (standalone, RTL, Urdu, maskable icons, shortcuts)
- `public/sw.js` — core-asset precache, offline navigation fallback, stale-while-revalidate for
  same-origin static assets (third-party / Google Maps requests are never intercepted)
- Icons: `public/icons/icon-192.png`, `icon-512.png`, `maskable-512.png`; OG cover:
  `public/images/og-cover.png`. These are committed local assets (drawn in the site palette).

## Commands
```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy   # wrangler deploy (static assets in ./dist)
```

Node: 24.21.0. pnpm: 12.4.2.

## Verification
`dist/` is checked for `example.com` / `localhost` leftovers and for the presence of
`sitemap-index.xml`, `manifest.webmanifest`, `sw.js` and `robots.txt`.
