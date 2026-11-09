import type { Topic } from './topic-types';

/** Phase 3b — history, architecture, gates, conservation and photography (6 topics). */
export const TOPICS_P2B: Topic[] = [
  {
    slug: 'history',
    group: 'culture',
    phase: 'P2',
    related: ['architecture', 'walled-city-gates', 'royal-trail-history', 'heritage-conservation', 'nearby/shahi-guzargah'],
    en: {
      title: 'History of Delhi Gate Lahore: What the Official Record Establishes',
      description:
        'A source-aware history of Delhi Gate: the eastern gate of Lahore’s Walled City, the road towards Delhi, protected status, and the limits of what the record proves.',
      kicker: 'History',
      h1: 'History of Delhi Gate, Lahore',
      lead:
        'Delhi Gate takes its name from the direction of the old road towards Delhi. Beyond that simple point, the historical record is broad rather than precise, and this page keeps the uncertainty visible.',
      sections: [
        {
          h: 'What the heritage record says',
          p: [
            'The Department of Archaeology and Museums records Delhi Gate in Lahore’s eastern fortification, facing towards Delhi, with Wazir Khan Mosque in its vicinity. It lists Punjab government ownership and protection under the Antiquities Act 1975, amended 1992. Walled City of Lahore Authority material places the mosque roughly 200 metres inside the gate.'
          ]
        },
        {
          h: 'What the record does not prove',
          bullets: [
            'The broad chronology 1526–1857 CE in the record is not a construction date for every part of the surviving structure.',
            'No specific timber, paintwork or repair is assigned here to a particular reign.',
            'Historic descriptions of the Royal Trail are not evidence of present-day access.',
            'The gate’s survival does not mean it is unchanged since the Mughal period.'
          ]
        },
        {
          h: 'The gate in the life of the city',
          p: [
            'Its historical role was as an entrance and a point of passage, not an isolated monument: the bazaar, the royal bathhouse and the mosque grew up along the route behind it. Understanding that sequence is more useful than memorising an unverified founding year.'
          ]
        }
      ],
      faqs: [
        ['When was Delhi Gate built?', 'The official record gives a broad period (1526–1857 CE), not a verified construction year for every surviving part. This guide does not assign one.'],
        ['Why is it called Delhi Gate?', 'It is the eastern gate associated with the historic road leading towards Delhi — hence the name, not any connection to a gate in modern Delhi.'],
        ['Who manages Delhi Gate?', 'The heritage record lists Punjab government ownership and legal protection. Day-to-day responsibility for this specific structure should be confirmed with the relevant heritage authority rather than assumed.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ لاہور کی تاریخ: سرکاری ریکارڈ کیا ثابت کرتا ہے',
      description:
        'دہلی گیٹ کی ذرائع پر مبنی تاریخ: اندرون لاہور کا مشرقی دروازہ، دہلی کی طرف راستہ، قانونی تحفظ، اور ریکارڈ کی حدود۔',
      kicker: 'تاریخ',
      h1: 'دہلی گیٹ لاہور کی تاریخ',
      lead:
        'دہلی گیٹ کا نام دہلی کی طرف جانے والی پرانی سڑک کی سمت سے آیا ہے۔ اس سادہ بات کے آگے تاریخی ریکارڈ وسیع ہے، درست نہیں، اور یہ صفحہ یہی غیر یقینی صورتحال واضح رکھتا ہے۔',
      sections: [
        {
          h: 'سرکاری ورثہ ریکارڈ کیا کہتا ہے',
          p: [
            'محکمۂ آثارِ قدیمہ کے ریکارڈ میں دہلی گیٹ لاہور کی مشرقی فصیل میں، دہلی کی سمت، اور اس کے قریب وزیر خان مسجد درج ہے۔ اس میں پنجاب حکومت کی ملکیت اور Antiquities Act 1975 (ترمیم 1992) کے تحت تحفظ کا ذکر ہے۔ والڈ سٹی آف لاہور اتھارٹی کے مواد کے مطابق مسجد دروازے کے اندر تقریباً 200 میٹر پر ہے۔'
          ]
        },
        {
          h: 'ریکارڈ کیا ثابت نہیں کرتا',
          bullets: [
            'ریکارڈ میں 1526ء تا 1857ء کی وسیع مدت موجودہ ڈھانچے کے ہر حصے کی تعمیر کی تاریخ نہیں۔',
            'یہاں کسی لکڑی، رنگ کاری یا مرمت کو کسی مخصوص دور سے نہیں جوڑا گیا۔',
            'شاہی گزرگاہ کے تاریخی بیانات آج کی رسائی کا ثبوت نہیں۔',
            'دروازے کا بچ رہنا یہ ثابت نہیں کرتا کہ وہ مغلیہ دور سے بالکل ویسا ہی ہے۔'
          ]
        },
        {
          h: 'شہر کی زندگی میں دروازے کا کردار',
          p: [
            'اس کا تاریخی کردار الگ تھلگ یادگار کی بجائے داخلے اور گزرگاہ کا تھا: بازار، شاہی غسل خانہ اور مسجد اسی راستے پر پروان چڑھے۔ یہ ترتیب سمجھنا کسی غیر تصدیق شدہ سنِ تعمیر یاد رکھنے سے زیادہ مفید ہے۔'
          ]
        }
      ],
      faqs: [
        ['دہلی گیٹ کب بنایا گیا؟', 'سرکاری ریکارڈ ایک وسیع مدت (1526ء تا 1857ء) دیتا ہے، موجودہ ہر حصے کی تصدیق شدہ تعمیر کی تاریخ نہیں۔ یہ صفحہ کوئی ایک سن نہیں بتاتا۔'],
        ['اسے دہلی گیٹ کیوں کہتے ہیں؟', 'یہ مشرقی دروازہ دہلی کی طرف جانے والے تاریخی راستے سے منسوب ہے؛ اسی لیے یہ نام ہے، آج کے دہلی کے کسی دروازے سے تعلق نہیں۔'],
        ['دہلی گیٹ کا انتظام کس کے پاس ہے؟', 'ریکارڈ میں پنجاب حکومت کی ملکیت اور قانونی تحفظ درج ہے۔ اس مخصوص عمارت کی روزمرہ ذمہ داری خود متعلقہ ورثہ ادارے سے تصدیق کریں، اندازہ نہ لگائیں۔']
      ]
    }
  },
  {
    slug: 'architecture',
    group: 'culture',
    phase: 'P2',
    related: ['history', 'heritage-conservation', 'photography-spots', 'walled-city-gates', 'nearby/shahi-hammam'],
    en: {
      title: 'Delhi Gate Architecture: Arch, Brick and Lime Mortar',
      description:
        'A careful look at Delhi Gate’s built fabric: the brick arch, lime mortar, the layered streetscape, and why conserved surfaces should not be assumed untouched.',
      kicker: 'Architecture',
      h1: 'The architecture of Delhi Gate',
      lead:
        'Delhi Gate is a masonry threshold in a working city wall. Its interest lies in the arch, the brick and lime fabric, and the way the street continues through it — not in a single showpiece façade.',
      sections: [
        {
          h: 'The elements you can actually observe',
          bullets: [
            'A large brick arch forming the passage through the gate.',
            'Thick masonry and layered brickwork at the threshold.',
            'Lime-based mortar and plaster surfaces typical of the region’s historic fabric.',
            'The immediate continuation into bazaar lanes — the gate is a passage, not a standalone façade.'
          ]
        },
        {
          h: 'Why the fabric is fragile',
          p: [
            'Lime mortar and fired brick absorb moisture. As water evaporates, salts migrate to the surface and crystallise, which can lift plaster and decorative layers. Repeated touching, vibration and leaning accelerate that loss. This is a general conservation principle, not an assessment of a specific measured condition at the gate.'
          ]
        },
        {
          h: 'Reading repairs honestly',
          p: [
            'Conserved buildings often contain multiple phases of work. Heritage records here give a broad chronology rather than a date for each surface, so it would be wrong to present every visible brick or finish as an untouched Mughal original. Look at the whole sequence — arch, passage, bazaar — instead.'
          ]
        }
      ],
      faqs: [
        ['What is Delhi Gate made of?', 'Brick masonry with lime-based mortar and plaster is the historic fabric described in heritage and conservation discussion of the old city. No material survey of this specific structure is published here.'],
        ['Is the whole gate original Mughal fabric?', 'No. Conserved structures usually include later repairs; the official record gives a broad chronology rather than a verified date for each part.'],
        ['Can I touch or climb the walls?', 'No. Touching, leaning or climbing damages lime and decorative surfaces. Observe posted barriers and ask site staff about restrictions.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کا فنِ تعمیر: محراب، اینٹ اور چونے کا مصالحہ',
      description:
        'دہلی گیٹ کی تعمیراتی ساخت پر محتاط نظر: اینٹوں کا محراب، چونے کا مصالحہ، تہہ دار گلی کا منظر، اور بحال شدہ سطحوں کو بلا تبدیلی سمجھنا کیوں غلط ہے۔',
      kicker: 'فنِ تعمیر',
      h1: 'دہلی گیٹ کا فنِ تعمیر',
      lead:
        'دہلی گیٹ ایک فعال شہر کی فصیل میں چنائی کی گزرگاہ ہے۔ اس کی اہمیت محراب، اینٹ اور چونے کی ساخت، اور گلی کا دروازے سے آگے جاری رہنے میں ہے، کسی ایک نمائشی رخ میں نہیں۔',
      sections: [
        {
          h: 'جو اصل میں دیکھا جا سکتا ہے',
          bullets: [
            'دروازے سے گزرنے والی اینٹوں کی بڑی محراب۔',
            'چوکھٹ پر موٹی چنائی اور تہہ دار اینٹ کاری۔',
            'علاقے کی تاریخی ساخت کا چونے پر مبنی مصالحہ اور پلستر۔',
            'دروازے کے بعد فوراً شروع ہونے والی بازاری گلیاں — یہ ایک گزرگاہ ہے، الگ کھڑا رخ نہیں۔'
          ]
        },
        {
          h: 'یہ ساخت نازک کیوں ہے',
          p: [
            'چونے کا مصالحہ اور پکی اینٹ نمی جذب کرتے ہیں۔ پانی کے اُڑنے پر نمکیات سطح پر آ کر قلم بندھتے ہیں، جس سے پلستر اور تزئینی تہیں اٹھ سکتی ہیں۔ بار بار چھونا، ارتعاش اور ٹیک لگانا اس نقصان کو بڑھاتے ہیں۔ یہ بحالی کا عام اصول ہے، دروازے کی کسی ناپی گئی حالت کا جائزہ نہیں۔'
          ]
        },
        {
          h: 'مرمت کو دیانت داری سے پڑھنا',
          p: [
            'بحال شدہ عمارتوں میں اکثر کام کے کئی مرحلے ہوتے ہیں۔ یہاں سرکاری ریکارڈ ہر سطح کی تاریخ کی بجائے وسیع مدت دیتا ہے، اس لیے ہر نظر آنے والی اینٹ یا رنگ کو بغیر چھیڑ چھاڑ مغلیہ اصل قرار دینا غلط ہوگا۔ محراب، گزرگاہ اور بازار کی پوری ترتیب دیکھیں۔'
          ]
        }
      ],
      faqs: [
        ['دہلی گیٹ کن مواد سے بنا ہے؟', 'ورثہ اور بحالی کے مباحث میں اینٹوں کی چنائی اور چونے پر مبنی مصالحہ و پلستر بتایا جاتا ہے۔ اس مخصوص ڈھانچے کا کوئی مادی سروے یہاں شائع نہیں۔'],
        ['کیا پورا دروازہ اصل مغلیہ ساخت ہے؟', 'نہیں۔ بحال شدہ ڈھانچوں میں عموماً بعد کی مرمت شامل ہوتی ہے، اور سرکاری ریکارڈ ہر حصے کی تصدیق شدہ تاریخ نہیں دیتا۔'],
        ['کیا دیواروں کو چھوا یا ان پر چڑھا جا سکتا ہے؟', 'نہیں۔ چھونا، ٹیک لگانا یا چڑھنا چونے اور تزئینی سطحوں کو نقصان پہنچاتا ہے۔ لگی رکاوٹوں کا خیال رکھیں اور عملے سے پابندیاں پوچھیں۔']
      ]
    }
  },
  {
    slug: 'walled-city-gates',
    group: 'culture',
    phase: 'P2',
    related: ['history', 'nearby/roshnai-gate', 'architecture', 'heritage-conservation', 'location'],
    en: {
      title: 'Gates of the Walled City of Lahore: Telling Delhi Gate Apart',
      description:
        'A comparison of Lahore’s historic city gates — including Delhi Gate and Roshnai Gate — and a clear disambiguation from Delhi Gate in Delhi, India.',
      kicker: 'Historic gates',
      h1: 'The gates of Lahore’s Walled City',
      lead:
        '"Delhi Gate" is an ambiguous search term. This page separates the Lahore gate from the Delhi landmark and sets both within the wider family of Walled City gates, without claiming all of them survive in the same condition.',
      sections: [
        {
          h: 'A comparison at a glance',
          bullets: [
            'Delhi Gate, Lahore — the eastern entrance of the Walled City, tied to the historic road towards Delhi; a working passage beside Akbari Mandi.',
            'Roshnai Gate — another named historic gate, associated with the fort side of the old city.',
            'Other named gates appear in official Walled City gate listings, each with its own orientation and state of survival.',
            'Delhi Gate, Delhi (India) — a different landmark in a different city and country; not the subject of this guide.'
          ]
        },
        {
          h: 'Why the distinction matters',
          p: [
            'Confusing the two Delhi Gates leads visitors to the wrong address, wrong city and wrong travel advice. The Lahore gate is inside a Pakistani old city beside a wholesale market; every practical detail on this site — coordinates, map link, nearby monuments — refers to that one.'
          ]
        },
        {
          h: 'How to verify the gate list',
          p: [
            'Use the Walled City of Lahore Authority gates material for names and locations, then check current local information for each gate’s present condition and surroundings. Do not assume one opening time, ticket or management arrangement covers them all.'
          ]
        }
      ],
      faqs: [
        ['Is Delhi Gate in Lahore the same as Delhi Gate in Delhi?', 'No. They are different landmarks in different countries. This guide covers the Lahore, Pakistan gate only.'],
        ['How many historic gates did the Walled City have?', 'Official listings name several gates. This guide does not publish a count or survival status that has not been checked against current information.'],
        ['Are all the gates open to visitors?', 'No shared arrangement should be assumed. Survival and accessibility differ by gate; check the official listing and local conditions.']
      ]
    },
    ur: {
      title: 'اندرون لاہور کے دروازے: دہلی گیٹ کو الگ پہچاننا',
      description:
        'لاہور کے تاریخی دروازوں کا موازنہ — دہلی گیٹ اور روشنائی دروازہ سمیت — اور بھارت کے دہلی والے دروازے سے واضح امتیاز۔',
      kicker: 'تاریخی دروازے',
      h1: 'اندرون لاہور کے دروازے',
      lead:
        '«دہلی گیٹ» ایک مبہم تلاش کا لفظ ہے۔ یہ صفحہ لاہور کے دروازے کو دہلی والی یادگار سے الگ کرتا ہے اور دونوں کو اندرون شہر کے دروازوں کے وسیع خاندان میں رکھتا ہے، بغیر یہ دعویٰ کیے کہ سب یکساں حالت میں بچے ہیں۔',
      sections: [
        {
          h: 'ایک نظر میں موازنہ',
          bullets: [
            'دہلی گیٹ، لاہور — اندرون شہر کا مشرقی دروازہ، دہلی کی طرف تاریخی راستے سے منسوب؛ اکبری منڈی کے ساتھ ایک فعال گزرگاہ۔',
            'روشنائی دروازہ — ایک اور تاریخی دروازہ، جو پرانے شہر کے قلعہ والے جانب سے وابست ہے۔',
            'سرکاری فہرستوں میں کئی اور دروازے آتے ہیں، ہر ایک کی اپنی سمت اور بقا کی اپنی حالت ہے۔',
            'دہلی گیٹ، دہلی (بھارت) — دوسرے شہر اور ملک کی الگ یادگار؛ اس رہنما صفحے کا موضوع نہیں۔'
          ]
        },
        {
          h: 'یہ امتیاز کیوں ضروری ہے',
          p: [
            'دونوں دروازوں کو ایک سمجھنا زائر کو غلط پتے، غلط شہر اور غلط سفری مشورے تک لے جاتا ہے۔ لاہور والا دروازہ پاکستان کے پرانے شہر میں تھوک منڈی کے ساتھ ہے؛ اس ویب سائٹ کی ہر عملی تفصیل — متناسقات، نقشے کا ربط، قریبی یادگاریں — اسی کے لیے ہے۔'
          ]
        },
        {
          h: 'فہرست کی تصدیق کیسے کریں',
          p: [
            'ناموں اور مقامات کے لیے والڈ سٹی آف لاہور اتھارٹی کا دروازوں والا مواد استعمال کریں، پھر ہر دروازے کی موجودہ حالت اور ماحول مقامی معلومات سے چیک کریں۔ یہ فرض نہ کریں کہ ایک ہی وقت، ٹکٹ یا انتظام سب پر لاگو ہے۔'
          ]
        }
      ],
      faqs: [
        ['کیا لاہور کا دہلی گیٹ اور دہلی کا دروازہ ایک ہیں؟', 'نہیں۔ یہ دو مختلف ممالک کی الگ یادگاریں ہیں۔ یہ رہنما صفحہ صرف لاہور، پاکستان والے دروازے کے بارے ہے۔'],
        ['اندرون شہر کے کتنے تاریخی دروازے تھے؟', 'سرکاری فہرستوں میں کئی دروازے آتے ہیں۔ یہ صفحہ کوئی ایسی تعداد یا بقا کی حالت شائع نہیں کرتا جو موجودہ معلومات سے تصدیق نہ ہوئی ہو۔'],
        ['کیا سب دروازے زائرین کے لیے کھلے ہیں؟', 'کوئی مشترک انتظام فرض نہ کریں۔ ہر دروازے کی بقا اور رسائی الگ ہے؛ سرکاری فہرست اور مقامی حالات دیکھیں۔']
      ]
    }
  },
  {
    slug: 'royal-trail-history',
    group: 'culture',
    phase: 'P2',
    related: ['nearby/shahi-guzargah', 'history', 'heritage-conservation', 'nearby/shahi-hammam', 'two-hour-walking-tour'],
    en: {
      title: 'History of the Royal Trail (Shahi Guzargah) in Lahore',
      description:
        'Why the Shahi Guzargah matters in Lahore’s urban history: the processional route from Delhi Gate, the monuments along it, and the conservation story.',
      kicker: 'History',
      h1: 'The history of the Royal Trail',
      lead:
        'The Shahi Guzargah is best understood as a historic route through a living city, not a single monument. It links Delhi Gate to Shahi Hammam, Chowk Wazir Khan and Wazir Khan Mosque in one sequence.',
      sections: [
        {
          h: 'A route, not a building',
          p: [
            'Heritage and conservation descriptions use the Royal Trail to describe the processional approach into the Walled City. Along it, a gate, a royal bathhouse, a square and a mosque form a chain of public spaces that still structure how the quarter is walked today.'
          ]
        },
        {
          h: 'Conservation as urban history',
          p: [
            'Conservation work on the trail has dealt with later encroachments, services and surfaces in phases, exposing and stabilising historic fabric around the hammam and Chowk Wazir Khan. These projects are part of the route’s modern history as much as its older one.'
          ]
        },
        {
          h: 'Keeping history and access separate',
          bullets: [
            'A historic route is not a guarantee that every interior along it is open.',
            'Restoration descriptions are background, not current opening notices.',
            'The trail is a working neighbourhood; residents’ everyday routes come first.',
            'Confirm each building’s access and any tour booking separately.'
          ]
        }
      ],
      faqs: [
        ['What does Shahi Guzargah mean?', 'It refers to the historic royal or processional route into the old city, commonly described from Delhi Gate past Shahi Hammam towards Wazir Khan Mosque.'],
        ['Is the Royal Trail a Mughal-era survival?', 'It is a historic route with many layers of change. Conservation work has altered surfaces and circulation; it should not be read as an untouched Mughal street.'],
        ['Do I need a ticket to walk it?', 'No single ticket for the route has been verified. Individual buildings along it have their own entry arrangements.']
      ]
    },
    ur: {
      title: 'لاہور کی شاہی گزرگاہ کی تاریخ',
      description:
        'لاہور کی شہری تاریخ میں شاہی گزرگاہ کی اہمیت: دہلی گیٹ سے داخل ہونے والا راستہ، اس پر واقع یادگاریں اور بحالی کی کہانی۔',
      kicker: 'تاریخ',
      h1: 'شاہی گزرگاہ کی تاریخ',
      lead:
        'شاہی گزرگاہ کو ایک یادگار کی بجائے زندہ شہر سے گزرنے والے تاریخی راستے کے طور پر سمجھنا بہتر ہے۔ یہ دہلی گیٹ کو شاہی حمام، چوک وزیر خان اور وزیر خان مسجد سے ایک ہی ترتیب میں جوڑتی ہے۔',
      sections: [
        {
          h: 'عمارت نہیں، راستہ',
          p: [
            'ورثہ اور بحالی کے بیانات شاہی گزرگاہ کو اندرون شہر میں داخل ہونے والے شاہی راستے کے طور پر پیش کرتے ہیں۔ اس پر دروازہ، شاہی غسل خانہ، چوک اور مسجد عوامی جگہوں کی ایسی زنجیر بناتے ہیں جو آج بھی محلے میں چلنے کا ڈھانچہ طے کرتی ہے۔'
          ]
        },
        {
          h: 'شہری تاریخ کے طور پر بحالی',
          p: [
            'راستے پر بحالی کے کام نے بعد کی تجاوزات، سہولیات اور فرشوں کو مرحلہ وار دیکھا، اور حمام و چوک وزیر خان کے ارد گرد تاریخی ساخت کو ظاہر و مستحکم کیا۔ یہ منصوبے راستے کی جدید تاریخ کا بھی حصہ ہیں، اتنا ہی جتنا اس کی پرانی تاریخ کا۔'
          ]
        },
        {
          h: 'تاریخ اور رسائی کو الگ رکھنا',
          bullets: [
            'تاریخی راستہ اس بات کی ضمانت نہیں کہ اس پر ہر اندرونی مقام کھلا ہے۔',
            'بحالی کے بیانات پس منظر ہیں، موجودہ کھلنے کی اطلاع نہیں۔',
            'یہ راستہ ایک آباد محلہ ہے؛ مقامی باشندوں کے روزمرہ راستے مقدم ہیں۔',
            'ہر عمارت کی رسائی اور کسی ٹور کی بکنگ الگ تصدیق کریں۔'
          ]
        }
      ],
      faqs: [
        ['شاہی گزرگاہ کا مطلب کیا ہے؟', 'یہ پرانے شہر میں داخل ہونے والے تاریخی شاہی راستے کو کہتے ہیں، جسے عموماً دہلی گیٹ سے شاہی حمام ہوتے ہوئے وزیر خان مسجد تک بیان کیا جاتا ہے۔'],
        ['کیا یہ مغلیہ دور کی بلا تبدیلی باقیات ہیں؟', 'یہ کئی تہوں والا تاریخی راستہ ہے۔ بحالی کے کام نے فرش اور آمدورفت بدلی ہے، اس لیے اسے بلا تبدیلی مغلیہ گلی نہ سمجھیں۔'],
        ['کیا اس پر چلنے کے لیے ٹکٹ چاہیے؟', 'پورے راستے کے لیے کسی واحد ٹکٹ کی تصدیق نہیں۔ اس پر موجود ہر عمارت کے داخلے کے الگ انتظامات ہیں۔']
      ]
    }
  },
  {
    slug: 'photography-spots',
    group: 'culture',
    phase: 'P2',
    related: ['architecture', 'nearby/chowk-wazir-khan', 'nearby/gali-surjan-singh', 'best-time-to-visit', 'heritage-conservation'],
    en: {
      title: 'Delhi Gate Photography Spots: Light, Composition & Permission',
      description:
        'Where and how to photograph Delhi Gate and the Royal Trail: morning light, arch and lane compositions, privacy, and the permit questions to ask.',
      kicker: 'Photography',
      h1: 'Photographing Delhi Gate',
      lead:
        'The most useful photographs here come from the relationship between the arch and the street beyond it. This page covers light, composition and courtesy, not a list of exact GPS camera positions.',
      sections: [
        {
          h: 'Compositions that work',
          bullets: [
            'The gate arch from outside, with the bazaar visible through the passage.',
            'The threshold itself: brickwork, depth and the change from open road to narrow lane.',
            'Chowk Wazir Khan as a framing device for the mosque.',
            'Details of balconies and tilework in the historic lanes, photographed with consent.'
          ]
        },
        {
          h: 'Light and timing',
          p: [
            'Daylight is the sensible default; no night-time lighting or safety assessment has been verified here. Morning light tends to be gentler on the arch, while later in the day the lanes fill with people and activity. Check the forecast and air-quality warnings, which affect haze more than any camera setting.'
          ]
        },
        {
          h: 'Rules and courtesy',
          p: [
            'Ask before photographing residents, shopkeepers or worshippers at close range. Tripods, drones and commercial shoots may need permission and fees from the Walled City of Lahore Authority or the relevant site; no specific permit rule or exclusion distance is verified here. Never touch or lean on historic surfaces for a shot.'
          ]
        }
      ],
      faqs: [
        ['What is the best time of day for photos of the gate?', 'Daylight, with morning generally gentler on the arch. No night-time lighting or safety has been verified for this guide.'],
        ['Do I need a permit to photograph Delhi Gate?', 'Casual personal photography is a different matter from tripods, drones or commercial shoots, which may require permission. Ask the relevant authority.'],
        ['Can I photograph inside Wazir Khan Mosque?', 'It is an active place of worship. Follow posted rules, respect prayer times and ask before photographing people or interiors.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کی عکاسی: روشنی، ترکیب اور اجازت',
      description:
        'دہلی گیٹ اور شاہی گزرگاہ کی تصویر کشی کہاں اور کیسے کریں: صبح کی روشنی، محراب اور گلی کی ترکیب، پرائیویسی اور اجازت نامے کے سوالات۔',
      kicker: 'عکاسی',
      h1: 'دہلی گیٹ کی تصویر کشی',
      lead:
        'یہاں سب سے مفید تصویریں محراب اور اس کے آگے کی گلی کے تعلق سے بنتی ہیں۔ یہ صفحہ روشنی، ترکیب اور ادب پر ہے، کیمرے کے مخصوص مقامات کی فہرست پر نہیں۔',
      sections: [
        {
          h: 'کام کرنے والی ترکیبیں',
          bullets: [
            'باہر سے دروازے کا محراب، جس کے اندر سے بازار نظر آئے۔',
            'خود چوکھٹ: اینٹ کاری، گہرائی اور کھلی سڑک سے تنگ گلی میں بدلاؤ۔',
            'مسجد کے لیے چوک وزیر خان کو فریم کے طور پر استعمال کرنا۔',
            'تاریخی گلیوں میں چھجوں اور ٹائلوں کی تفصیل، اجازت کے ساتھ۔'
          ]
        },
        {
          h: 'روشنی اور وقت',
          p: [
            'دن کی روشنی محفوظ ترین عمومی انتخاب ہے؛ یہاں رات کی روشنی یا حفاظت کی تصدیق نہیں۔ صبح کی روشنی محراب پر نرم ہوتی ہے، جبکہ دن آگے بڑھنے پر گلیاں لوگوں اور سرگرمی سے بھر جاتی ہیں۔ پیش گوئی اور فضائی تنبیہات دیکھیں، جو کیمرے کی سیٹنگ سے زیادہ دھند کو متاثر کرتی ہیں۔'
          ]
        },
        {
          h: 'اصول اور ادب',
          p: [
            'باشندوں، دکانداروں یا نمازیوں کی قریب سے تصویر لینے سے پہلے اجازت لیں۔ ٹرائی پوڈ، ڈرون اور تجارتی عکاسی کے لیے والڈ سٹی آف لاہور اتھارٹی یا متعلقہ مقام سے اجازت اور فیس درکار ہو سکتی ہے؛ یہاں کسی مخصوص اصول یا فاصلے کی تصدیق نہیں۔ تصویر کے لیے تاریخی سطحوں کو ہاتھ نہ لگائیں، نہ ان سے ٹیک لگائیں۔'
          ]
        }
      ],
      faqs: [
        ['دروازے کی تصویر کے لیے دن کا بہترین وقت کیا ہے؟', 'دن کی روشنی، اور محراب کے لیے عموماً صبح بہتر۔ اس رہنما صفحے نے رات کی روشنی یا حفاظت کی تصدیق نہیں کی۔'],
        ['کیا دہلی گیٹ کی تصویر کے لیے اجازت نامہ چاہیے؟', 'عام ذاتی عکاسی الگ بات ہے؛ ٹرائی پوڈ، ڈرون یا تجارتی کام کے لیے اجازت درکار ہو سکتی ہے۔ متعلقہ ادارے سے پوچھیں۔'],
        ['کیا وزیر خان مسجد کے اندر تصویر لی جا سکتی ہے؟', 'یہ ایک فعال عبادت گاہ ہے۔ لگی ہدایات مانِیں، نماز کے اوقات کا خیال رکھیں اور لوگوں یا اندرونی حصوں کی تصویر سے پہلے اجازت لیں۔']
      ]
    }
  },
  {
    slug: 'heritage-conservation',
    group: 'culture',
    phase: 'P2',
    related: ['history', 'architecture', 'nearby/shahi-hammam', 'royal-trail-history', 'walled-city-gates'],
    en: {
      title: 'Delhi Gate Heritage Conservation: Authorities and Restoration',
      description:
        'Who looks after Lahore’s Walled City heritage, what conservation projects have addressed along the Royal Trail, and how visitors can help protect the fabric.',
      kicker: 'Conservation',
      h1: 'Heritage conservation around Delhi Gate',
      lead:
        'Conservation in the Walled City is an ongoing, multi-phase effort involving public heritage bodies and specialist cultural organisations. This page explains the structure without claiming a partnership or an unverified project date.',
      sections: [
        {
          h: 'Who is involved',
          bullets: [
            'The Walled City of Lahore Authority, whose gates and tour material is the starting point for official information.',
            'The Department of Archaeology and Museums, which records Delhi Gate’s protected status and coordinates.',
            'The Aga Khan Trust for Culture, whose Walled City conservation programme is widely cited for work including the Shahi Hammam restoration.',
            'This website is independent of all of them and has no partnership to claim.'
          ]
        },
        {
          h: 'What conservation addresses',
          p: [
            'Work along the Royal Trail has dealt with historic fabric, later encroachments, services, surfaces and the stabilisation of decorated interiors. Conservation is necessarily selective: stabilising and revealing fabric is not the same as returning a street to a single moment in the past.'
          ]
        },
        {
          h: 'A visitor’s part',
          bullets: [
            'Do not touch, lean on, climb or mark brick, plaster, fresco or tile surfaces.',
            'Follow posted barriers and ask staff about restrictions around decorated areas.',
            'Keep narrow lanes clear and take litter away with you.',
            'Check current access notices: conservation work can change circulation without warning.'
          ]
        }
      ],
      faqs: [
        ['Who manages Delhi Gate?', 'The heritage record lists Punjab government ownership and legal protection; the Walled City of Lahore Authority is the key public body for the old city. Confirm day-to-day responsibility for this specific structure with the authority.'],
        ['Is this site affiliated with the conservation bodies?', 'No. This is an independent, non-official visitor guide with no partnership or endorsement to claim.'],
        ['Can visitors enter conservation areas?', 'Access depends on current site rules and work in progress. Follow posted barriers and ask staff rather than assuming.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کا ورثہ تحفظ: ادارے اور بحالی',
      description:
        'اندرون لاہور کے ورثے کی دیکھ بھال کون کرتا ہے، شاہی گزرگاہ پر بحالی کے کام نے کیا دیکھا، اور زائر اس ساخت کے تحفظ میں کیسے مدد دے سکتے ہیں۔',
      kicker: 'تحفظِ ورثہ',
      h1: 'دہلی گیٹ کے ارد گرد ورثے کا تحفظ',
      lead:
        'اندرون شہر میں بحالی ایک جاری، کئی مرحلوں کا کام ہے جس میں سرکاری ورثہ ادارے اور مخصوص ثقافتی تنظیمیں شامل ہیں۔ یہ صفحہ اس ڈھانچے کو بتاتا ہے، بغیر کسی شراکت داری یا غیر تصدیق شدہ تاریخ کے دعوے کے۔',
      sections: [
        {
          h: 'کون شامل ہے',
          bullets: [
            'والڈ سٹی آف لاہور اتھارٹی، جس کا دروازوں اور ٹور والا مواد سرکاری معلومات کا نقطۂ آغاز ہے۔',
            'محکمۂ آثارِ قدیمہ، جو دہلی گیٹ کا قانونی تحفظ اور متناسقات درج کرتا ہے۔',
            'آغا خان ٹرسٹ فار کلچر، جس کے اندرون شہر منصوبے کو شاہی حمام کی بحالی سمیت کاموں کے حوالے کے طور پر پیش کیا جاتا ہے۔',
            'یہ ویب سائٹ ان سب سے آزاد ہے اور کسی شراکت داری کا دعویٰ نہیں رکھتی۔'
          ]
        },
        {
          h: 'بحالی کیا دیکھتی ہے',
          p: [
            'شاہی گزرگاہ پر کام نے تاریخی ساخت، بعد کی تجاوزات، سہولیات، فرشوں اور مزین اندرونی حصوں کو مستحکم کرنے کا معاملہ دیکھا ہے۔ بحالی لازماً منتخب ہوتی ہے: ساخت کو مستحکم اور ظاہر کرنا، گلی کو ماضی کے کسی ایک لمحے میں لوٹانے کے برابر نہیں۔'
          ]
        },
        {
          h: 'زائر کا حصہ',
          bullets: [
            'اینٹ، پلستر، نقش و نگار یا ٹائلوں کو ہاتھ نہ لگائیں، ان سے ٹیک نہ لگائیں، ان پر نہ چڑھیں اور نشان نہ لگائیں۔',
            'لگی رکاوٹوں کا خیال رکھیں اور مزین حصوں کے گرد پابندیاں عملے سے پوچھیں۔',
            'تنگ گلیاں کھلی رکھیں اور اپنا کوڑا ساتھ لے جائیں۔',
            'موجودہ رسائی کی اطلاعات دیکھیں: بحالی کا کام بغیر پیش اطلاع آمدورفت بدل سکتا ہے۔'
          ]
        }
      ],
      faqs: [
        ['دہلی گیٹ کا انتظام کس کے پاس ہے؟', 'سرکاری ریکارڈ پنجاب حکومت کی ملکیت اور قانونی تحفظ بتاتا ہے؛ اندرون شہر کے لیے والڈ سٹی آف لاہور اتھارٹی اہم سرکاری ادارہ ہے۔ اس مخصوص عمارت کی روزمرہ ذمہ داری ادارے سے تصدیق کریں۔'],
        ['کیا یہ ویب سائٹ بحالی کرنے والے اداروں سے وابستہ ہے؟', 'نہیں۔ یہ ایک آزاد، غیر سرکاری رہنما صفحہ ہے جسے کسی شراکت داری یا تائید کا دعویٰ نہیں۔'],
        ['کیا زائر بحالی والے حصوں میں جا سکتے ہیں؟', 'رسائی موجودہ اصولوں اور جاری کام پر منحصر ہے۔ اندازہ لگانے کی بجائے لگی رکاوٹیں مانیں اور عملے سے پوچھیں۔']
      ]
    }
  }
];
