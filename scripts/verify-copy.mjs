// Source-level copy checks for the bilingual topic content.
// Usage: node scripts/verify-copy.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const dataDir = path.join(root, 'src/data');
const files = fs.readdirSync(dataDir)
  .filter((f) => /^topics\.p\d.*\.ts$/.test(f))
  .sort()
  .map((f) => path.join(dataDir, f));
const failures = [];

// Latin tokens that are legitimate proper nouns or abbreviations inside Urdu copy.
const allowed = new Set([
  'Delhi', 'Gate', 'Lahore', 'Wazir', 'Khan', 'Mosque', 'Shahi', 'Hammam', 'Guzargah',
  'WCLA', 'DOAM', 'Google', 'Maps', 'H', 'JG', 'PHM', 'PMD', 'CC', 'FAQ', 'Akbari',
  'Mandi', 'Circular', 'Road', 'Ring', 'Fort', 'Badshahi', 'Sunehri', 'Roshnai', 'Chowk',
  'Surjan', 'Singh', 'Gali', 'Walled', 'City', 'of', 'the', 'Punjab', 'Pakistan', 'Urdu',
  'Wikipedia', 'Meteorological', 'Department', 'Archaeology', 'and', 'Museums', 'Authority',
  'Aga', 'Trust', 'for', 'Culture', 'Antiquities', 'Act', 'Mughal', 'Royal', 'Trail',
  'Allama', 'Iqbal', 'International', 'Airport', 'BY', 'SA', 'Mubeenakram', 'Shahbaz',
  'Aslam', 'Willard', 'English', 'title', 'description', 'kicker', 'lead', 'sections',
  'bullets', 'faqs', 'slug', 'group', 'phase', 'related', 'const', 'export', 'import',
  'type', 'from', 'Topic', 'en', 'ur', 'src', 'data', 'topic', 'types', 'https', 'http',
  'com', 'pk', 'org', 'gop', 'gov', 'wiki', 'File', 'jpg', 'png', 'svg', 'px',
  'Wikimedia', 'Commons', 'September', 'February', 'November', 'October'
]);

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const source = fs.readFileSync(file, 'utf8');
  source.split(/\r?\n/).forEach((line, index) => {
    const where = `${path.basename(file)}:${index + 1}`;
    if (/[\u4e00-\u9fff]/.test(line)) failures.push(`${where} Chinese characters: ${line.trim().slice(0, 130)}`);
    if (/[\u0600-\u06ff]/.test(line)) {
      if (/رUSH|RUSH|_network|network/.test(line)) {
        failures.push(`${where} stray token: ${line.trim().slice(0, 130)}`);
      }
      const unusual = [...line.matchAll(/[A-Za-z]{4,}/g)]
        .map((m) => m[0])
        .filter((w) => !allowed.has(w));
      if (unusual.length) failures.push(`${where} Latin in Urdu copy: ${unusual.join(', ')} | ${line.trim().slice(0, 110)}`);
    }
  });
}

// Cross-file registry integrity: every related slug must resolve to a real topic.
const combined = files.filter((f) => fs.existsSync(f)).map((f) => fs.readFileSync(f, 'utf8')).join('\n');
const slugs = [...combined.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const uniqueSlugs = new Set(slugs);
if (slugs.length !== uniqueSlugs.size) failures.push(`registry: duplicate slugs (${slugs.length} entries, ${uniqueSlugs.size} unique)`);
for (const m of combined.matchAll(/related:\s*\[([^\]]*)\]/g)) {
  for (const ref of m[1].matchAll(/'([^']+)'/g)) {
    if (!uniqueSlugs.has(ref[1])) failures.push(`registry: related points to missing slug "${ref[1]}"`);
  }
}
console.log(`Registry: ${uniqueSlugs.size} unique topic slugs across ${files.length} content files.`);

if (failures.length) {
  failures.forEach((m) => console.error(`  FAIL  ${m}`));
  console.error(`\n${failures.length} copy problem(s) found.`);
  process.exit(1);
}
console.log('Copy checks passed: no Chinese, stray tokens or unexplained Latin words in Urdu content.');
