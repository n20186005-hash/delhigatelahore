// Read-only acceptance check for the built topic guides.
// Usage: node scripts/verify-topics.mjs   (run after `astro build`)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const dist = path.join(root, 'dist');
const failures = [];
const ok = [];

function fail(file, message) {
  failures.push(`${file}: ${message}`);
}
function pass(message) {
  ok.push(message);
}
function readHtml(urlPath) {
  const rel = urlPath === '/' ? 'index.html' : `${urlPath.replace(/^\/|\/$/g, '')}/index.html`;
  return fs.readFileSync(path.join(dist, rel), 'utf8');
}
function exists(urlPath) {
  const clean = urlPath.split('#')[0].split('?')[0];
  if (!clean.startsWith('/') || clean.startsWith('//')) return true;
  const rel = clean === '/' ? 'index.html' : `${clean.replace(/^\/|\/$/g, '')}/index.html`;
  return fs.existsSync(path.join(dist, rel));
}

if (!fs.existsSync(dist)) {
  console.error('dist/ not found — run astro build first.');
  process.exit(1);
}

const sitemap = fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const reserved = new Set([
  '/', '/en/', '/privacy/', '/terms/', '/cookies/',
  '/en/privacy/', '/en/terms/', '/en/cookies/', '/404/', '/en/404/'
]);

const enTopics = locs.filter((p) => p.startsWith('/en/') && !reserved.has(p)).sort();
const urTopics = locs.filter((p) => !p.startsWith('/en/') && !reserved.has(p)).sort();
const enSlugs = enTopics.map((p) => p.slice(4).replace(/\/$/, ''));
const urSlugs = urTopics.map((p) => p.slice(1).replace(/\/$/, ''));

if (enSlugs.length !== urSlugs.length || enSlugs.join('|') !== urSlugs.join('|')) {
  fail('sitemap', `en/ur topic slug sets differ (${enSlugs.length} vs ${urSlugs.length})`);
} else {
  pass(`${enSlugs.length} topics with symmetric en/ur URLs`);
}
if (enSlugs.length !== new Set(enSlugs).size) fail('sitemap', 'duplicate topic slugs');

let checkedPages = 0;
let checkedLinks = 0;

for (const loc of [...enTopics, ...urTopics]) {
  const isEn = loc.startsWith('/en/');
  const html = readHtml(loc);
  checkedPages++;

  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!canonical || new URL(canonical).pathname !== loc) {
    fail(loc, `canonical mismatch: ${canonical}`);
  }
  if (/https?:\/\/www\./.test(canonical || '')) fail(loc, 'canonical uses www');

  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
    .map((m) => ({ lang: m[1], href: m[2] }));
  for (const lang of ['en', 'ur', 'x-default']) {
    if (!alternates.some((a) => a.lang === lang)) fail(loc, `missing hreflang ${lang}`);
  }

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(loc, `expected 1 h1, found ${h1}`);

  if (!/<title>[^<]{20,}<\/title>/.test(html)) fail(loc, 'missing or too short title');
  if (!/<meta name="description" content="[^"]{40,}/.test(html)) fail(loc, 'missing or too short description');

  const ldCount = (html.match(/application\/ld\+json/g) || []).length;
  if (ldCount !== 3) fail(loc, `expected 3 JSON-LD blocks, found ${ldCount}`);
  for (const type of ['WebPage', 'BreadcrumbList', 'FAQPage']) {
    if (!html.includes(`"@type":"${type}"`)) fail(loc, `missing ${type} JSON-LD`);
  }
  if (html.includes('aggregateRating')) fail(loc, 'aggregateRating must not appear on topic pages');

  const details = (html.match(/<details>/g) || []).length;
  if (details < 3) fail(loc, `only ${details} visible FAQ entries`);
  const related = (html.match(/class="card topic-card"/g) || []).length;
  if (related < 3) fail(loc, `only ${related} related-guide links`);

  const main = (html.match(/<main[\s\S]*<\/main>/) || [''])[0];
  if (/[\u4e00-\u9fff]/.test(html)) fail(loc, 'Chinese characters leaked into the page');
  if (isEn && /[\u0600-\u06ff]/.test(main)) fail(loc, 'Arabic script leaked into English body');
  if (!isEn && !/dir="rtl"/.test(html)) fail(loc, 'Urdu page missing dir="rtl"');

  for (const m of html.matchAll(/<a [^>]*href="(\/[^"]*)"/g)) {
    checkedLinks++;
    if (!exists(m[1])) fail(loc, `dead internal link ${m[1]}`);
  }
}

for (const [home, locale] of [['/', 'ur'], ['/en/', 'en']]) {
  const html = readHtml(home);
  if (!html.includes('id="guides"')) fail(home, 'homepage missing #guides cluster');
  const guideLinks = (html.match(/<ul class="guide-links">[\s\S]*?<\/ul>/g) || [])
    .join('').match(/<a href="\/[^"]*"|<a href="\/en\/[^"]*"/g) || [];
  if (guideLinks.length !== enSlugs.length) {
    fail(home, `guide cluster has ${guideLinks.length} links, expected ${enSlugs.length}`);
  }
  if (/[\u4e00-\u9fff]/.test(html)) fail(home, 'Chinese characters leaked into homepage');
  for (const image of ['/images/delhi-gate-lahore.jpg', '/images/wazir-entry.jpg', '/images/og-cover.png']) {
    if (!html.includes(image)) fail(home, `published image reference lost: ${image}`);
  }
}

const enHome = readHtml('/en/');
if (!/Delhi Gate Lahore – Location, Opening Hours, History/.test(enHome)) fail('/en/', 'homepage title not updated to the SEO report version');
if (!/Explore Delhi Gate in Lahore/.test(enHome)) fail('/en/', 'homepage meta description not updated');
for (const image of ['delhi-gate-lahore.jpg', 'wazir-entry.jpg', 'og-cover.png', 'gate-symbol.svg']) {
  if (!fs.existsSync(path.join(root, 'public/images', image))) fail('assets', `published image missing: ${image}`);
}

const EXPECTED = [
  'location', 'parking', 'opening-hours', 'entrance-fee', 'how-to-reach', 'public-transport',
  'best-time-to-visit', 'visitor-tips', 'accessibility', 'family-visit',
  'nearby/shahi-hammam', 'nearby/wazir-khan-mosque', 'nearby/shahi-guzargah',
  'nearby/gali-surjan-singh', 'nearby/chowk-wazir-khan', 'nearby/akbari-mandi',
  'nearby/sunehri-mosque', 'nearby/lahore-fort', 'nearby/badshahi-mosque', 'nearby/roshnai-gate',
  'food-near-delhi-gate', 'breakfast-near-delhi-gate', 'tea-and-chai', 'street-food',
  'restaurants', 'akbari-mandi-shopping', 'traditional-bazaars', 'souvenirs-and-handicrafts',
  'history', 'architecture', 'walled-city-gates', 'royal-trail-history',
  'photography-spots', 'heritage-conservation',
  'one-hour-itinerary', 'two-hour-walking-tour', 'half-day-itinerary',
  'full-day-lahore-itinerary', 'delhi-gate-to-lahore-fort', 'self-guided-walking-tour'
];
const missing = EXPECTED.filter((s) => !enSlugs.includes(s));
const extra = enSlugs.filter((s) => !EXPECTED.includes(s));
if (missing.length) fail('registry', `missing planned URLs: ${missing.join(', ')}`);
if (extra.length) fail('registry', `unplanned URLs published: ${extra.join(', ')}`);
if (!missing.length && !extra.length) pass('all 40 planned URLs match the report exactly');

console.log(`Checked ${checkedPages} topic pages, ${checkedLinks} internal links, ${locs.length} sitemap URLs.`);
console.log(`Topics: ${enSlugs.length} (${enSlugs.length * 2} bilingual URLs).`);
ok.forEach((m) => console.log(`  PASS  ${m}`));
if (failures.length) {
  failures.forEach((m) => console.error(`  FAIL  ${m}`));
  console.error(`\n${failures.length} problem(s) found.`);
  process.exit(1);
}
console.log('\nAll checks passed.');
