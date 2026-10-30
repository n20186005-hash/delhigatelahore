import { LATITUDE, LONGITUDE } from '../data/attraction';

// Bilingual model labels. No external requests during the static build.

export type LangCode = 'ur' | 'en';


const WMO_TEXT: Record<LangCode, Record<number, string>> = {
  ur: {
    0: 'صاف آسمان',
    1: 'عموماً صاف',
    2: 'جزوی بادل',
    3: 'ابر آلود',
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

// Display labels only; requests and freshness validation live in weather-runtime.js.
export function clientLabels(lang: LangCode) {
 return {lang,latitude:LATITUDE,longitude:LONGITUDE,codes:WMO_TEXT[lang],fallback:FALLBACK_TEXT[lang],levels:AQI_LEVELS[lang].map(([limit,label,key])=>[Number.isFinite(limit)?limit:1e9,label,key])};
}
