# Delhi Gate Lahore visitor guide

Urdu and English static Astro pages. Use the pinned pnpm version and frozen lockfile; run `pnpm check` and `pnpm build`. `npx wrangler deploy` serves the static build through the minimal canonical/error guard in `worker.js`. No dependency or framework migration.

Weather and CAMS air-quality estimates load directly from Open-Meteo in the visitor browser with bounded requests, independent failure handling and 15-minute display expiry. No build-time weather requests or persistent weather cache. Existing automatic Google Analytics and Maps are disclosed in both languages. Hosting injection and edge measurements require verification after release.

Historic place facts: Department of Archaeology and Museums and WCLA links on both pages. Maps opening information is attributed separately and does not certify facility hours, fees, accessibility or night safety. Image provenance is in IMAGE_SOURCES.md and the public source sections.
