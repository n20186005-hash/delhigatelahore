const fs = require('node:fs');

const file = 'src/pages/index.astro';
const original = fs.readFileSync(file, 'utf8');
const newline = original.includes('\r\n') ? '\r\n' : '\n';
let lines = original.split(/\r?\n/);

const importBlock = [
  "import '../styles/global.css';",
  "import WeatherRefresh from '../components/WeatherRefresh.astro';",
  "import * as attraction from '../data/attraction';",
  "import { describeWeather, loadWeather } from '../lib/weather';",
  '',
  'const {',
  '  ATTRACTION_FULL_NAME,',
  '  ATTRACTION_SHORT_NAME,',
  '  CITY_NAME,',
  '  COUNTRY_CODE_2LETTER,',
  '  COUNTRY_NAME,',
  '  DOMAIN_NAME,',
  '  GOVT_TOURISM_URL,',
  '  GOVT_TOURISM_URL_ALT,',
  '  HERO_IMAGE_ABSOLUTE,',
  '  LATITUDE,',
  '  LONGITUDE,',
  '  MAPS_DIRECTIONS_URL,',
  '  MAPS_EMBED_SRC,',
  '  MAPS_SHARE_URL,',
  '  MET_OFFICE_URL,',
  '  NEARBY_LANDMARK_1,',
  '  NEARBY_LANDMARK_2,',
  '  POSTAL_CODE,',
  '  RATING_COUNT,',
  '  RATING_MAX,',
  '  RATING_VALUE,',
  '  REVIEW_CATEGORY_UR,',
  '  REVIEW_SYNC_UR,',
  '  STATE_PROVINCE,',
  '  WIKIMEDIA_CATEGORY_URL,',
  '  WIKIPEDIA_URL',
  '} = attraction;',
  '',
  'const heroImageAbsolute = HERO_IMAGE_ABSOLUTE;',
  '',
  'const site = Astro.site ?? new URL(`https://${DOMAIN_NAME}`);',
  'const canonical = new URL("/", site).toString();',
  'const ogImage = new URL("/images/og-cover.png", site).toString();',
  "const ogImageAlt = `${ATTRACTION_FULL_NAME} — ${CITY_NAME}, ${COUNTRY_NAME}`;",
  '',
  '// Weather & air quality for the gate — values are read server side and then',
  '// refreshed in the visitor’s browser (see WeatherRefresh.astro).',
  "const { weather, airQuality, advice: weatherAdvice } = await loadWeather('ur');",
  ''
];

const startIdx = lines.findIndex((line) => line.startsWith('const DOMAIN_NAME'));
const anchorIdx = lines.findIndex((line) => line.startsWith('const attractionSchema'));

if (startIdx === -1 || anchorIdx === -1) {
  console.log('MARKS NOT FOUND', startIdx, anchorIdx);
  process.exit(1);
}

lines.splice(startIdx, anchorIdx - startIdx, ...importBlock);

const scriptStart = lines.findIndex((line) => line.includes('<script is:inline>'));
const scriptEnd = lines.findIndex((line, index) => index > scriptStart && line.trim() === '</script>');
if (scriptStart === -1 || scriptEnd === -1) {
  console.log('SCRIPT MARKS NOT FOUND', scriptStart, scriptEnd);
  process.exit(1);
}
lines.splice(scriptStart, scriptEnd - scriptStart + 1, '    <WeatherRefresh lang="ur" />');

let out = lines.join(newline);
out = out.replace(/describeWeather\(([^()]*)\)/g, "describeWeather($1, 'ur')");
fs.writeFileSync(file, out);
console.log('done, lines:', out.split(/\r?\n/).length);
