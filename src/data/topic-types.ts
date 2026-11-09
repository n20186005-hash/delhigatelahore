// Shared types and interface copy for the long-tail guide pages.
// Every visible UI string must come from UI[locale]; content strings live in
// topics.p0.ts / topics.p1.ts / topics.p2.ts.

export type Locale = 'en' | 'ur';
export type TopicGroup = 'practical' | 'nearby' | 'food' | 'culture' | 'itineraries';
export type TopicPhase = 'P0' | 'P1' | 'P2';

export interface TopicSection {
  h: string;
  p?: string[];
  bullets?: string[];
}

export interface TopicContent {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faqs: [string, string][];
}

export interface Topic {
  /** English URL path relative to /en/, e.g. "nearby/shahi-hammam". */
  slug: string;
  group: TopicGroup;
  phase: TopicPhase;
  /** Slugs of genuinely related guides; must exist in TOPICS. */
  related: string[];
  en: TopicContent;
  ur: TopicContent;
}

export const GROUP_ORDER: TopicGroup[] = [
  'practical',
  'nearby',
  'food',
  'culture',
  'itineraries'
];

export const CHECK_NOTE: Record<Locale, string> = {
  en: 'Compiled 9 November 2026 from the sources listed on this page. Opening hours, fees, parking and transport details are not operator-confirmed — verify them on the day of your visit.',
  ur: 'اس صفحے پر درج ذرائع کی بنیاد پر 9 نومبر 2026ء کو مرتب کیا گیا۔ اوقات، فیس، پارکنگ اور نقل و حمل کی تفصیل انتظامیہ سے تصدیق شدہ نہیں — عین دن پر خود تصدیق کریں۔'
};

export interface UiDict {
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  inLanguage: string;
  siteName: string;
  home: string;
  homeUrl: string;
  guides: string;
  guidesTitle: string;
  guidesIntro: string;
  backHome: string;
  relatedTitle: string;
  faqTitle: string;
  sourcesTitle: string;
  checkedLabel: string;
  independent: string;
  langSwitchLabel: string;
  groupLabels: Record<TopicGroup, string>;
  mapLabel: string;
  mapNote: string;
  breadcrumbAria: string;
  readMore: string;
  legalLinks: { label: string; url: string }[];
}

export const UI: Record<Locale, UiDict> = {
  en: {
    htmlLang: 'en',
    dir: 'ltr',
    ogLocale: 'en_US',
    inLanguage: 'en',
    siteName: 'Delhi Gate Lahore — Visitor Guide',
    home: 'Home',
    homeUrl: '/en/',
    guides: 'Guides',
    guidesTitle: 'Delhi Gate and Walled City guides',
    guidesIntro:
      'Separate guides for each practical question, landmark, meal and walking route. Each page answers one question and links to the guides that naturally follow it.',
    backHome: 'Back to the main Delhi Gate guide',
    relatedTitle: 'Related guides',
    faqTitle: 'Frequently asked questions',
    sourcesTitle: 'Sources and verification',
    checkedLabel: 'Compiled',
    independent:
      'An independent, non-official visitor guide. This site is not operated by the Walled City of Lahore Authority, the Department of Archaeology and Museums or Google, and it does not sell tickets or tours.',
    langSwitchLabel: 'اردو',
    groupLabels: {
      practical: 'Location, parking & practical information',
      nearby: 'Historic landmarks nearby',
      food: 'Food, tea & shopping',
      culture: 'History, architecture & photography',
      itineraries: 'Walking routes & itineraries'
    },
    mapLabel: 'Open the Delhi Gate map',
    mapNote: 'The map pin marks the gate, not the entrance arrangements, parking or the opening status of any nearby building.',
    breadcrumbAria: 'Breadcrumb',
    readMore: 'Read the guide',
    legalLinks: [
      { label: 'Privacy', url: '/en/privacy/' },
      { label: 'Terms', url: '/en/terms/' },
      { label: 'Cookie information', url: '/en/cookies/' }
    ]
  },
  ur: {
    htmlLang: 'ur',
    dir: 'rtl',
    ogLocale: 'ur_PK',
    inLanguage: 'ur',
    siteName: 'دہلی گیٹ لاہور — زائرین کی رہنمائی',
    home: 'صفحۂ اول',
    homeUrl: '/',
    guides: 'رہنما صفحات',
    guidesTitle: 'دہلی گیٹ اور اندرون شہر کے رہنما صفحات',
    guidesIntro:
      'ہر عملی سوال، تاریخی مقام، کھانے اور پیدل راستے کے لیے الگ صفحہ۔ ہر صفحہ ایک سوال کا جواب دیتا ہے اور اگلے متعلقہ صفحات سے منسلک ہے۔',
    backHome: 'مرکزی دہلی گیٹ رہنما صفحے پر واپس جائیں',
    relatedTitle: 'متعلقہ رہنما صفحات',
    faqTitle: 'اکثر پوچھے جانے والے سوالات',
    sourcesTitle: 'ذرائع اور تصدیق',
    checkedLabel: 'ترتیب',
    independent:
      'یہ ایک آزاد، غیر سرکاری رہنما صفحہ ہے۔ اسے والڈ سٹی آف لاہور اتھارٹی، محکمۂ آثارِ قدیمہ یا گوگل نہیں چلاتا، اور یہاں ٹکٹ یا ٹور فروخت نہیں کیے جاتے۔',
    langSwitchLabel: 'English',
    groupLabels: {
      practical: 'مقام، پارکنگ اور عملی معلومات',
      nearby: 'قریبی تاریخی مقامات',
      food: 'کھانا، چائے اور خریداری',
      culture: 'تاریخ، فنِ تعمیر اور عکاسی',
      itineraries: 'پیدل راستے اور دورے کے منصوبے'
    },
    mapLabel: 'دہلی گیٹ کا نقشہ کھولیں',
    mapNote: 'نقشے کا نشان صرف دروازے کی جگہ بتاتا ہے، داخلی انتظامات، پارکنگ یا قریبی عمارتوں کے کھلنے کی حالت نہیں۔',
    breadcrumbAria: 'روٹ کی فہرست',
    readMore: 'صفحہ پڑھیں',
    legalLinks: [
      { label: 'رازداری', url: '/privacy/' },
      { label: 'شرائط', url: '/terms/' },
      { label: 'کوکیز', url: '/cookies/' }
    ]
  }
};
