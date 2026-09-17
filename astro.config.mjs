import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The canonical domain can still be overridden per environment with SITE_URL.
const DEFAULT_SITE = 'https://delhigatelahore.com';
const site = (process.env.SITE_URL ?? '').trim() || DEFAULT_SITE;

// The site is a fully static single-attraction guide, so it is built with
// output: 'static'. The previous @astrojs/cloudflare adapter is no longer
// needed: `wrangler deploy` uploads ./dist as Worker static assets, which also
// keeps the site buildable outside Cloudflare's runtime.
export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
