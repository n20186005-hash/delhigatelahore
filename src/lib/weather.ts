import { LATITUDE, LONGITUDE } from '../data/attraction';

// ---------------------------------------------------------------------------
// Weather & air quality for the attraction.
// Values are requested while the page is rendered (server side) and written
// into the static HTML; the visitor's browser then refreshes them in place
// (see WeatherRefresh.astro), so the page always shows current numbers.
// ---------------------------------------------------------------------------

export type LangCode = 'ur' | 'en';

const GLYPHS: Record<number, string> = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌧️',
  56: '🌧️',
  57: '🌧️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  66: '🌨️',
  67: '🌨️',
  71: '🌨️',
  73: '🌨️',
  75: '❄️',
  77: '🌨️',
  80: '🌦️',
  81: '🌧️',
  82: '⛈️',
  85: '🌨️',
  86: '❄️',
  95: '⛈️',
  96: '⛈️',
  99: '⛈️'
};

const WMO_TEXT: Record<LangCode, Record<number, string>> = {
  ur: {
    0: 'صاف آسمان',
    1: 'عموماً صاف',
    2: 'جزوی بادل',
    3: 'ابراہ',
    45: 'دھند',
    48: 'جمی ہوئی دھند',
    51: 'ہلکی بوندا باندی',
    53: 'درمیانی بوندا باندی',
    55: 'گہری بوندا باندی',
    56: 'ہلکی برفانی بوندا باندی',
    57: 'گہری برفانی بوندا باندی',
    61: 'ہلکی بارش',
    63: 'درمیانی بارش',
    65: 'تیز بارش',
    66: 'ہلکی برفانی بارش',
    67: 'تیز برفانی بارش',
    71: 'ہلکی برفباری',
    73: 'درمیانی برفباری',
    75: 'شدید برفباری',
    77: 'برف کے دانے',
    80: 'ہلکی جھڑی',
    81: 'درمیانی جھڑی',
    82: 'تیز جھڑی',
    85: 'ہلکی برفانی جھڑی',
    86: 'شدید برفانی جھڑی',
    95: 'گرج چمک کے ساتھ بارش',
    96: 'گرج چمک اور اولے',
    99: 'شدید گرج چمک اور اولے'
  },
  en: {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Freezing fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Heavy drizzle',
    56: 'Light freezing drizzle',
    57: 'Heavy freezing drizzle',
    61: 'Light rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Light snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    77: 'Snow grains',
    80: 'Light showers',
    81: 'Moderate showers',
    82: 'Violent showers',
    85: 'Light snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with hail',
    99: 'Severe thunderstorm with hail'
  }
};

const FALLBACK_TEXT: Record<LangCode, string> = {
  ur: 'موسمی معلومات دستیاب نہیں',
  en: 'Weather details unavailable'
};

const WEEKDAYS: Record<LangCode, string[]> = {
  ur: ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

const MONTHS: Record<LangCode, string[]> = {
  ur: ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

const AQI_LEVELS: Record<LangCode, Array<[number, string, string]>> = {
  ur: [
    [50, 'اچھا', 'good'],
    [100, 'درمیانہ', 'moderate'],
    [150, 'حساس افراد کے لیے غیر صحت بخش', 'sensitive'],
    [200, 'غیر صحت بخش', 'unhealthy'],
    [300, 'بہت غیر صحت بخش', 'very-unhealthy'],
    [Infinity, 'خطرناک', 'hazardous']
  ],
  en: [
    [50, 'Good', 'good'],
    [100, 'Moderate', 'moderate'],
    [150, 'Unhealthy for sensitive groups', 'sensitive'],
    [200, 'Unhealthy', 'unhealthy'],
    [300, 'Very unhealthy', 'very-unhealthy'],
    [Infinity, 'Hazardous', 'hazardous']
  ]
};

const WET_CODES = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86, 95, 96, 99];

const FORECAST_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max,wind_speed_10m_max' +
  '&forecast_days=7&timezone=Asia%2FKarachi';

const AIR_URL =
  `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${LATITUDE}&longitude=${LONGITUDE}` +
  '&current=us_aqi,european_aqi,pm2_5,pm10&timezone=Asia%2FKarachi';

export type WeatherDay = {
  date: string;
  label: string;
  code: number | null;
  max: number | null;
  min: number | null;
  rainChance: number | null;
  rainSum: number | null;
  uv: number | null;
};

export type WeatherData = {
  temperature: number | null;
  apparent: number | null;
  humidity: number | null;
  wind: number | null;
  precipitation: number | null;
  code: number | null;
  observedAt: string | null;
  days: WeatherDay[];
};

export type AirQualityData = {
  aqi: number | null;
  pm25: number | null;
  pm10: number | null;
  observedAt: string | null;
  level: string | null;
  levelKey: string | null;
};

export type WeatherSnapshot = {
  weather: WeatherData | null;
  airQuality: AirQualityData | null;
  today: WeatherDay | null;
  umbrella: boolean;
  hot: boolean;
  poorAir: boolean;
  advice: string;
};

const roundNumber = (value: unknown) =>
  typeof value === 'number' && Number.isFinite(value) ? Math.round(value) : null;

export function describeWeather(code: unknown, lang: LangCode): [string, string] {
  const key = Number(code);
  const text = Number.isFinite(key) ? WMO_TEXT[lang][key] : undefined;
  return [text ?? FALLBACK_TEXT[lang], GLYPHS[key] ?? '🌡️'];
}

export function dayLabel(isoDate: string, lang: LangCode): string {
  const [year, month, day] = (isoDate ?? '').split('-').map(Number);
  if (!year || !month || !day) return isoDate ?? '';
  const weekday = WEEKDAYS[lang][new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  return lang === 'ur' ? `${weekday} ${day} ${MONTHS[lang][month - 1]}` : `${weekday} ${MONTHS[lang][month - 1]} ${day}`;
}

function aqiLevel(aqi: number, lang: LangCode) {
  const levels = AQI_LEVELS[lang];
  return levels.find(([limit]) => aqi <= limit) ?? levels[levels.length - 1];
}

const ADVICE: Record<LangCode, Record<'rain' | 'hot' | 'air' | 'fair', string>> = {
  ur: {
    rain: 'آج بارش کا امکان زیادہ ہے — چھتری یا بارش کوٹ ساتھ رکھیں اور پتھریلی گلیوں میں پھسلن کا خیال رکھیں۔',
    hot: 'آج گرمی کا دن ہے — پانی، ٹوپی اور دھوپ سے بچاؤ ساتھ رکھیں، واک صبح یا شام کو رکھیں۔',
    air: 'ہوا کا معیار خراب ہے — حساس افراد ماسک پہنیں اور باہر زیادہ دیر ٹھہرنے سے گریز کریں۔',
    fair: 'موسم عام طور پر پیدل واک کے لیے موزوں ہے — پھر بھی پانی، ٹوپی اور آرام دہ جوتے بہتر ہیں۔'
  },
  en: {
    rain: 'Rain is likely today — carry an umbrella or raincoat and watch for slippery flagstones in the lanes.',
    hot: 'Today will be hot — carry water, a hat and sun protection, and keep the walk for early morning or evening.',
    air: 'Air quality is poor — sensitive visitors should wear a mask and avoid long spells outdoors.',
    fair: 'Conditions are comfortable for walking — still carry water, a hat and comfortable shoes.'
  }
};

function adviceFor(lang: LangCode, umbrella: boolean, hot: boolean, poorAir: boolean) {
  const copy = ADVICE[lang];
  if (umbrella) return copy.rain;
  if (hot) return copy.hot;
  if (poorAir) return copy.air;
  return copy.fair;
}

export async function loadWeather(lang: LangCode): Promise<WeatherSnapshot> {
  let weather: WeatherData | null = null;
  let airQuality: AirQualityData | null = null;

  try {
    const [forecastResponse, airResponse] = await Promise.allSettled([
      fetch(FORECAST_URL, { headers: { accept: 'application/json' } }),
      fetch(AIR_URL, { headers: { accept: 'application/json' } })
    ]);

    if (forecastResponse.status === 'fulfilled' && forecastResponse.value.ok) {
      const payload = await forecastResponse.value.json();
      const current = payload?.current ?? {};
      const daily = payload?.daily ?? {};
      weather = {
        temperature: roundNumber(current.temperature_2m),
        apparent: roundNumber(current.apparent_temperature),
        humidity: roundNumber(current.relative_humidity_2m),
        wind: roundNumber(current.wind_speed_10m),
        precipitation: typeof current.precipitation === 'number' ? current.precipitation : null,
        code: Number.isFinite(Number(current.weather_code)) ? Number(current.weather_code) : null,
        observedAt: current.time ?? null,
        days: (daily.time ?? []).map((date: string, index: number) => ({
          date,
          label: dayLabel(date, lang),
          code: Number.isFinite(Number(daily.weather_code?.[index])) ? Number(daily.weather_code[index]) : null,
          max: roundNumber(daily.temperature_2m_max?.[index]),
          min: roundNumber(daily.temperature_2m_min?.[index]),
          rainChance: roundNumber(daily.precipitation_probability_max?.[index]),
          rainSum: typeof daily.precipitation_sum?.[index] === 'number' ? daily.precipitation_sum[index] : null,
          uv:
            typeof daily.uv_index_max?.[index] === 'number'
              ? Math.round(daily.uv_index_max[index] * 10) / 10
              : null
        }))
      };
    }

    if (airResponse.status === 'fulfilled' && airResponse.value.ok) {
      const payload = await airResponse.value.json();
      const current = payload?.current ?? {};
      const aqi = roundNumber(current.us_aqi);
      airQuality = {
        aqi,
        pm25: roundNumber(current.pm2_5),
        pm10: roundNumber(current.pm10),
        observedAt: current.time ?? null,
        level: aqi == null ? null : aqiLevel(aqi, lang)[1],
        levelKey: aqi == null ? null : aqiLevel(aqi, lang)[2]
      };
    }
  } catch {
    weather = null;
    airQuality = null;
  }

  const today = weather?.days?.[0] ?? null;
  const umbrella =
    (today?.rainChance ?? 0) >= 60 || (today?.rainSum ?? 0) >= 2 || (today?.code != null && WET_CODES.includes(today.code));
  const hot = (today?.max ?? 0) >= 38;
  const poorAir = (airQuality?.aqi ?? 0) > 150;

  return {
    weather,
    airQuality,
    today,
    umbrella,
    hot,
    poorAir,
    advice: adviceFor(lang, umbrella, hot, poorAir)
  };
}

// Strings used by the in-browser refresh script (WeatherRefresh.astro).
export function clientLabels(lang: LangCode) {
  return {
    lang,
    latitude: LATITUDE,
    longitude: LONGITUDE,
    codes: WMO_TEXT[lang],
    fallback: FALLBACK_TEXT[lang],
    weekdays: WEEKDAYS[lang],
    months: MONTHS[lang],
    levels: AQI_LEVELS[lang].map(([limit, label, key]) => [Number.isFinite(limit) ? limit : 1e9, label, key]),
    wet: WET_CODES,
    updatePrefix: lang === 'ur' ? 'تازہ کاری: ' : 'Updated: ',
    advice: ADVICE[lang]
  };
}
