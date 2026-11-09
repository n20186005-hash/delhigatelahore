import type { Topic } from './topic-types';

/** Phase 1 — the eight topics tied to impressions already visible in GSC. */
export const TOPICS_P0: Topic[] = [
  {
    slug: 'location',
    group: 'practical',
    phase: 'P0',
    related: ['parking', 'how-to-reach', 'opening-hours', 'entrance-fee', 'nearby/shahi-guzargah'],
    en: {
      title: 'Delhi Gate Lahore Location: Address, Map & Entrance',
      description:
        "Where Delhi Gate stands in Lahore's Walled City: the full address, Plus Code, coordinates, how to recognise the right entrance, and what a map pin cannot tell you.",
      kicker: 'Location and map',
      h1: 'Delhi Gate Lahore — location and entrance',
      lead:
        'Delhi Gate is the eastern historic entrance to the Walled City of Lahore, beside Akbari Mandi. Use the address and coordinates below as the single reference for navigation, then confirm the drop-off point with your driver on the day.',
      sections: [
        {
          h: 'The address and coordinates to use',
          p: [
            'H8JG+PHM, Inside Delhi Gate, Akbari Mandi, Walled City of Lahore, Lahore 54000, Pakistan. Coordinates: 31.582181831, 74.326428995.',
            'The words "Inside Delhi Gate" describe the neighbourhood within the gate, not a separate ticketed compound. No street number, named parking entrance or verified pedestrian meeting point has been confirmed for this guide.'
          ]
        },
        {
          h: 'Recognising the correct entrance',
          p: [
            'The gate is a working threshold in a dense, lived-in bazaar district rather than a fenced attraction with a single visitor gate. Brick arches, narrow lanes and shopfronts immediately inside make the approach easy to mistake for a through road.',
            'Ask for a legal drop-off on Circular Road and then walk in. Circular Road is the road around the old city; it is not the Lahore Ring Road, and confusing the two can add a long detour.'
          ]
        },
        {
          h: 'What the map pin does not confirm',
          bullets: [
            'Where a vehicle may legally stop or wait on your date.',
            'Whether the gate passage or any nearby interior is open at that hour.',
            'Whether the last stretch is step-free, shaded or suitable for a wheelchair or pram.',
            'The location of toilets, ATMs or ticket counters — none has been verified here.'
          ]
        }
      ],
      faqs: [
        [
          'What is the exact address of Delhi Gate Lahore?',
          'H8JG+PHM, Inside Delhi Gate, Akbari Mandi, Walled City of Lahore, Lahore 54000, Pakistan. The coordinates are 31.582181831, 74.326428995.'
        ],
        [
          'Is Delhi Gate the same place as the gate in Delhi, India?',
          'No. This guide covers Delhi Gate in Lahore, Pakistan — a Mughal-era city gate named for the road leading east towards Delhi. The similarly named landmark in Delhi is a different site.'
        ],
        [
          'Can I rely on the Google Maps pin for the entrance?',
          'Use it for the structure and the surrounding streets, but not for parking, access status or step-free routing. Confirm those separately with the operator or your driver.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ لاہور کا مقام: پتہ، نقشہ اور دروازہ',
      description:
        'دہلی گیٹ اندرون لاہور میں کہاں ہے: مکمل پتہ، پلس کوڈ، متناسقات، صحیح دروازے کی پہچان اور وہ باتیں جو نقشے کا نشان نہیں بتاتا۔',
      kicker: 'مقام اور نقشہ',
      h1: 'دہلی گیٹ لاہور — مقام اور داخلی راستہ',
      lead:
        'دہلی گیٹ اندرونِ لاہور کا مشرقی تاریخی دروازہ ہے، جو اکبری منڈی کے قریب واقع ہے۔ تشریف لے جانے سے پہلے نیچے دیا پتہ اور متناسقات محفوظ کر لیں اور اترنے کی جگہ اپنے ڈرائیور سے اسی دن تصدیق کروا لیں۔',
      sections: [
        {
          h: 'پتہ اور متناسقات',
          p: [
            'H8JG+PHM، اندرون دہلی گیٹ، اکبری منڈی، والڈ سٹی آف لاہور، لاہور 54000، پاکستان۔ متناسقات: 31.582181831، 74.326428995۔',
            'لفظ «اندرون دہلی گیٹ» دروازے کے اندر کے محلے کی طرف اشارہ کرتا ہے، کسی الگ ٹکٹ والے احاطے کی طرف نہیں۔ اس رہنما صفحے پر کسی گلی نمبر، پارکنگ کے دروازے یا ملنے کی مقررہ جگہ کی تصدیق نہیں ہوئی۔'
          ]
        },
        {
          h: 'صحیح دروازے کی پہچان',
          p: [
            'یہ دروازہ کسی بند سیاحتی مقام کی بجائے آباد اور مصروف بازار میں ایک زندہ گزرگاہ ہے۔ اینٹوں کے محراب، تنگ گلیاں اور اندر ہی دکانیں اسے عام سڑک سمجھنے کا سبب بن سکتی ہیں۔',
            'سرکلر روڈ پر قانونی طور پر اترنے کی جگہ پوچھیں اور پھر پیدل اندر جائیں۔ سرکلر روڈ پرانے شہر کے گرد سڑک ہے، لاہور رنگ روڈ نہیں؛ دونوں کو ایک سمجھنا لمبا چکر لگا سکتا ہے۔'
          ]
        },
        {
          h: 'نقشے کا نشان کن باتوں کی تصدیق نہیں کرتا',
          bullets: [
            'آپ کی مقررہ تاریخ پر گاڑی کہاں قانونی طور پر رک یا انتظار کر سکتی ہے۔',
            'دروازے کی گزرگاہ یا قریبی عمارتیں اس وقت کھلی ہیں یا نہیں۔',
            'آخری حصہ بغیر سیڑھی، سایہ دار یا وہیل چیئر اور بچوں کی گاڑی کے قابل ہے یا نہیں۔',
            'بیت الخلا، اے ٹی ایم یا ٹکٹ کاؤنٹر کہاں ہیں — ان میں سے کسی کی یہاں تصدیق نہیں ہوئی۔'
          ]
        }
      ],
      faqs: [
        [
          'دہلی گیٹ لاہور کا درست پتہ کیا ہے؟',
          'H8JG+PHM، اندرون دہلی گیٹ، اکبری منڈی، والڈ سٹی آف لاہور، لاہور 54000، پاکستان۔ متناسقات 31.582181831، 74.326428995 ہیں۔'
        ],
        [
          'کیا یہ دہلی (بھارت) والا دروازہ ہے؟',
          'نہیں۔ یہ صفحہ لاہور، پاکستان کے دہلی گیٹ کے بارے ہے، جو مشرق کی جانب دہلی کو جانے والی پرانی سڑک کے نام سے منسوب مغلیہ دور کا شہری دروازہ ہے۔ بھارت کے دہلی میں اسی نام کا مقام الگ ہے۔'
        ],
        [
          'کیا داخلے کے لیے صرف گوگل میپس کا نشان کافی ہے؟',
          'یہ عمارت اور ارد گرد کی گلیوں کے لیے مفید ہے، مگر پارکنگ، کھلنے کی حالت یا بغیر سیڑھی راستے کے لیے نہیں۔ یہ باتیں انتظامیہ یا ڈرائیور سے الگ تصدیق کریں۔'
        ]
      ]
    }
  },
  {
    slug: 'parking',
    group: 'practical',
    phase: 'P0',
    related: ['location', 'how-to-reach', 'public-transport', 'accessibility', 'two-hour-walking-tour'],
    en: {
      title: 'Delhi Gate Lahore Parking: Drop-off, Restrictions & Walking In',
      description:
        'What can and cannot be said about parking at Delhi Gate, Lahore: legal drop-off, why no verified car park is listed here, and how to plan the walk into the Walled City.',
      kicker: 'Parking and drop-off',
      h1: 'Parking at Delhi Gate, Lahore',
      lead:
        'There is no operator-confirmed list of parking areas, spaces or charges for Delhi Gate in this guide. Rather than invent one, this page explains how visitors normally resolve parking on the day and how to plan the last stretch on foot.',
      sections: [
        {
          h: 'Why no car park is listed here',
          p: [
            'The gate sits inside a dense, actively used wholesale and residential quarter. Spaces, permits, closures and one-way movements change with market hours, deliveries and local traffic management.',
            'Naming a specific plot, fee or capacity without a current confirmation would be misleading. Treat any such detail found elsewhere as time-sensitive and re-check it on your date.'
          ]
        },
        {
          h: 'Arranging a legal drop-off',
          p: [
            'Ask your driver or a licensed local operator to confirm a lawful stopping point on Circular Road for that day, then continue on foot through the gate. Agree a clear meeting point for the return journey before you enter the lanes, where vehicles have limited room to turn.',
            'Ride-hail pin accuracy varies in the inner city. Sharing the Plus Code H8JG+PHM and the phrase "Inside Delhi Gate, Akbari Mandi" helps, but does not replace local confirmation.'
          ]
        },
        {
          h: 'The walking link to the gate',
          p: [
            'Plan for a short but busy final approach on uneven, crowded lanes. Comfortable shoes, water and a hat matter more here than a parking-space number. If anyone in your group has limited mobility, confirm surfaces and thresholds before setting out — the map marker for an accessible entrance does not certify the whole route.'
          ]
        }
      ],
      faqs: [
        [
          'Is there a dedicated car park at Delhi Gate?',
          'No dedicated, operator-confirmed parking facility has been verified for this guide. Confirm legal drop-off and parking with your driver or the local authority for your date.'
        ],
        [
          'How much does parking cost?',
          'No parking charge has been verified here. Fees, if any, are set locally and can change; do not rely on an undated figure.'
        ],
        [
          'Can a car drive through the gate?',
          'The inner lanes are narrow and heavily used. Do not assume vehicle access; ask locally about current restrictions and arrange a walking meeting point instead.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ لاہور پارکنگ: اترنے کی جگہ، پابندیاں اور پیدل راستہ',
      description:
        'دہلی گیٹ لاہور کے قریب پارکنگ کے بارے میں کیا کہا جا سکتا ہے اور کیا نہیں: قانونی ڈراپ آف، تصدیق شدہ پارکنگ کی فہرست نہ ہونے کی وجہ، اور اندرون شہر پیدل داخل ہونے کا منصوبہ۔',
      kicker: 'پارکنگ اور ڈراپ آف',
      h1: 'دہلی گیٹ لاہور کے قریب پارکنگ',
      lead:
        'اس رہنما صفحے پر دہلی گیٹ کے لیے انتظامیہ سے تصدیق شدہ پارکنگ کی جگہوں، گنجائش یا فیس کی کوئی فہرست نہیں۔ من گھڑت فہرست دینے کی بجائے یہاں بتایا گیا ہے کہ زائرین اسی دن یہ معاملہ کیسے طے کرتے ہیں اور آخری حصہ پیدل کیسے طے کریں۔',
      sections: [
        {
          h: 'یہاں پارکنگ کی کوئی جگہ کیوں درج نہیں',
          p: [
            'دروازہ ایک گنجان آباد، روزگار سے مصروف تھوک منڈی اور رہائشی محلے کے اندر ہے۔ جگہیں، اجازت نامے، بندشیں اور یک طرفہ آمدورفت بازار کے اوقات، سامان کی ترسیل اور مقامی ٹریفک انتظام کے ساتھ بدلتی رہتی ہیں۔',
            'موجودہ تصدیق کے بغیر کسی مخصوص جگہ، قیمت یا گنجائش کا ذکر گمراہ کن ہوگا۔ کہیں اور ملی ایسی معلومات کو عارضی سمجھیں اور اپنی تاریخ کے لیے دوبارہ چیک کریں۔'
          ]
        },
        {
          h: 'قانونی ڈراپ آف کا انتظام',
          p: [
            'اپنے ڈرائیور یا کسی مجاز مقامی آپریٹر سے اس دن کے لیے سرکلر روڈ پر قانونی رکنے کی جگہ تصدیق کروائیں، پھر دروازے سے پیدل اندر جائیں۔ تنگ گلیوں میں گاڑی کے مڑنے کی گنجائش کم ہوتی ہے، اس لیے واپسی کے لیے ملنے کی جگہ پہلے طے کر لیں۔',
            'اندرون شہر میں رائیڈ ہیل ایپ کے نشان کی درستی مختلف ہو سکتی ہے۔ پلس کوڈ H8JG+PHM اور «اندرون دہلی گیٹ، اکبری منڈی» بتانا مدد دیتا ہے، مگر مقامی تصدیق کا بدل نہیں۔'
          ]
        },
        {
          h: 'دروازے تک پیدل آخری حصہ',
          p: [
            'یہ مختصر مگر مصروف اور ناہموار گلیوں کا راستہ ہے۔ یہاں پارکنگ کی تعداد سے زیادہ آرام دہ جوتے، پانی اور ٹوپی کام آتے ہیں۔ اگر کسی ساتھی کی نقل و حرکت محدود ہو تو فرش اور چوکھٹ پہلے معلوم کریں؛ نقشے پر قابلِ رسائی داخلی راستے کا نشان پورے راستے کی ضمانت نہیں۔'
          ]
        }
      ],
      faqs: [
        [
          'کیا دہلی گیٹ کے لیے مخصوص پارکنگ ہے؟',
          'اس رہنما صفحے کے لیے انتظامیہ سے تصدیق شدہ کوئی مخصوص پارکنگ نہیں ملی۔ اپنی تاریخ کے لیے قانونی ڈراپ آف اور پارکنگ ڈرائیور یا مقامی انتظامیہ سے معلوم کریں۔'
        ],
        [
          'پارکنگ کی فیس کتنی ہے؟',
          'یہاں کسی پارکنگ فیس کی تصدیق نہیں ہوئی۔ فیس مقامی طور پر طے ہوتی ہے اور بدل سکتی ہے؛ بغیر تاریخ کی کسی رقم پر اعتبار نہ کریں۔'
        ],
        [
          'کیا گاڑی دروازے کے اندر سے جا سکتی ہے؟',
          'اندر کی گلیاں تنگ اور مصروف ہیں۔ گاڑی کے داخلے کا یقین نہ کریں؛ موجودہ پابندیاں مقامی طور پر پوچھیں اور پیدل ملنے کی جگہ طے کریں۔'
        ]
      ]
    }
  },
  {
    slug: 'opening-hours',
    group: 'practical',
    phase: 'P0',
    related: ['entrance-fee', 'location', 'nearby/shahi-hammam', 'best-time-to-visit', 'two-hour-walking-tour'],
    en: {
      title: 'Delhi Gate Lahore Opening Hours: Passage vs Nearby Monuments',
      description:
        'Delhi Gate opening hours explained honestly: what Google Maps lists for the public passage, why nearby monuments have separate hours, and how to confirm access before travel.',
      kicker: 'Opening hours',
      h1: 'Delhi Gate opening hours — what is actually confirmed',
      lead:
        'A gate and the buildings behind it are not one attraction with one timetable. This page separates the public passage from Shahi Hammam, Wazir Khan Mosque and organised walks, each of which has its own access arrangements.',
      sections: [
        {
          h: 'The public passage',
          p: [
            'Google Maps listed the public passage as open 24 hours when checked on 29 October 2026. The operator has not confirmed current access hours, admission terms or night-time safety, so this listing should be read as a third-party snapshot rather than an official guarantee.',
            'A 24-hour label for a street passage does not mean the surrounding bazaar, interiors, lighting or security arrangements are available around the clock.'
          ]
        },
        {
          h: 'Buildings inside the gate are separate',
          p: [
            'Shahi Hammam, Wazir Khan Mosque and any Walled City of Lahore Authority guided walk are managed separately. Their hours, prayer-time pauses, closures, ticket rules and booking requirements are not covered by the passage listing.',
            'Confirm each one with the relevant operator before building an itinerary around it. Religious sites in particular follow prayer schedules that change through the week.'
          ]
        },
        {
          h: 'A safe way to confirm',
          bullets: [
            'Check the Walled City of Lahore Authority gates and tour information for current notices.',
            'Ask the site staff about the specific interior you plan to enter, not just "the gate".',
            'Re-check on the morning of your visit: temporary closures, processions and conservation work are not predictable from an older listing.',
            'Prefer daylight hours; no night-time safety assessment has been verified for this guide.'
          ]
        }
      ],
      faqs: [
        [
          'Is Delhi Gate open 24 hours?',
          'Google Maps listed the public passage as open 24 hours on 29 October 2026, but the operator has not confirmed current hours. Nearby monuments have separate schedules.'
        ],
        [
          'Are Shahi Hammam and Wazir Khan Mosque open at the same times as the gate?',
          'No assumption of shared hours is safe. Confirm each building and any guided walk with its own operator before travel.'
        ],
        [
          'Does the 24-hour listing mean it is safe to visit at night?',
          'No. This guide has not verified night-time lighting, safety or access. Plan a daylight visit and check local notices.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ لاہور کے اوقات: گزرگاہ بمقابلہ قریبی عمارتیں',
      description:
        'دہلی گیٹ کے اوقات کی واضح تفصیل: گوگل میپس عام گزرگاہ کے بارے میں کیا بتاتا ہے، قریبی یادگاروں کے اوقات الگ کیوں ہیں، اور سفر سے پہلے تصدیق کیسے کریں۔',
      kicker: 'کھلنے کے اوقات',
      h1: 'دہلی گیٹ کے اوقات — اصل میں کیا تصدیق شدہ ہے',
      lead:
        'دروازہ اور اس کے پیچھے کی عمارتیں ایک ہی نظام الاوقات والا ایک مقام نہیں۔ یہ صفحہ عام گزرگاہ کو شاہی حمام، وزیر خان مسجد اور منظم واک سے الگ کر کے بیان کرتا ہے۔',
      sections: [
        {
          h: 'عام گزرگاہ',
          p: [
            '29 اکتوبر 2026ء کو جانچنے پر گوگل میپس میں عام گزرگاہ 24 گھنٹے کھلی درج تھی۔ انتظامیہ نے موجودہ اوقات، داخلے کی شرائط یا رات کی حفاظت کی تصدیق نہیں کی، اس لیے یہ سرکاری ضمانت نہیں بلکہ تیسرے فریق کا عکس ہے۔',
            'سڑک نما گزرگاہ کے لیے 24 گھنٹے کا اندراج یہ ثابت نہیں کرتا کہ ارد گرد کا بازار، اندرونی حصے، روشنی یا انتظامات بھی ہر وقت موجود ہوں۔'
          ]
        },
        {
          h: 'دروازے کے اندر کی عمارتیں الگ ہیں',
          p: [
            'شاہی حمام، وزیر خان مسجد اور والڈ سٹی آف لاہور اتھارٹی کی منظم واک کا انتظام الگ ہے۔ ان کے اوقات، نماز کے وقفے، بندش، ٹکٹ اور بکنگ کی شرائط گزرگاہ کے اندراج میں شامل نہیں۔',
            'کوئی بھی منصوبہ بنانے سے پہلے ہر مقام کی اپنی انتظامیہ سے تصدیق کریں۔ عبادت گاہوں کے اوقات خاص طور پر ہفتے کے دوران نماز کے ساتھ بدلتے ہیں۔'
          ]
        },
        {
          h: 'تصدیق کا محفوظ طریقہ',
          bullets: [
            'موجودہ اطلاعات کے لیے والڈ سٹی آف لاہور اتھارٹی کے دروازوں اور ٹور والے صفحات دیکھیں۔',
            'صرف «دروازہ» نہیں، جس مخصوص عمارت میں جانا ہے اسی کے عملے سے پوچھیں۔',
            'عین دن صبح دوبارہ چیک کریں: عارضی بندش، جلوس اور بحالی کا کام پرانے اندراج سے نہیں جانا جا سکتا۔',
            'دن کی روشنی کو ترجیح دیں؛ اس رہنما صفحے نے رات کی حفاظت کی تصدیق نہیں کی۔'
          ]
        }
      ],
      faqs: [
        [
          'کیا دہلی گیٹ 24 گھنٹے کھلا رہتا ہے؟',
          '29 اکتوبر 2026ء کو گوگل میپس میں عام گزرگاہ 24 گھنٹے کھلی درج تھی، مگر انتظامیہ نے موجودہ اوقات کی تصدیق نہیں کی۔ قریبی یادگاروں کے اوقات الگ ہیں۔'
        ],
        [
          'کیا شاہی حمام اور وزیر خان مسجد بھی دروازے ہی کے اوقات میں کھلتے ہیں؟',
          'ایک ہی وقت سمجھنا محفوظ نہیں۔ سفر سے پہلے ہر عمارت اور کسی بھی منظم واک کی اپنی انتظامیہ سے تصدیق کریں۔'
        ],
        [
          'کیا 24 گھنٹے کا اندراج رات میں محفوظ جانے کی اجازت دیتا ہے؟',
          'نہیں۔ اس رہنما صفحے نے رات کی روشنی، حفاظت یا رسائی کی تصدیق نہیں کی۔ دن میں جائیں اور مقامی اطلاعات دیکھیں۔'
        ]
      ]
    }
  },
  {
    slug: 'how-to-reach',
    group: 'practical',
    phase: 'P0',
    related: ['location', 'parking', 'public-transport', 'two-hour-walking-tour', 'self-guided-walking-tour'],
    en: {
      title: 'How to Reach Delhi Gate Lahore: Car, Taxi, Ride-hail & On Foot',
      description:
        'Practical ways to reach Delhi Gate in Lahore without unverified bus numbers: car and taxi drop-off, ride-hail tips, walking in from Circular Road, and arriving from the airport or station.',
      kicker: 'Getting here',
      h1: 'How to reach Delhi Gate, Lahore',
      lead:
        'Most visits combine a vehicle to the edge of the Walled City with a short walk through the gate. This page covers that last mile, and deliberately avoids bus route numbers, fares and journey times that have not been confirmed.',
      sections: [
        {
          h: 'By car, taxi or ride-hail',
          p: [
            'Give the driver "Delhi Gate, Akbari Mandi, Walled City of Lahore" together with the Plus Code H8JG+PHM. Ask for a legal drop-off on Circular Road; the innermost lanes are narrow and heavily used.',
            'Agree the return pick-up point before you go in. Re-entering the same spot later in the day may not be possible if market traffic or restrictions have changed.'
          ]
        },
        {
          h: 'On foot inside the Walled City',
          p: [
            'From the gate, Shahi Hammam is a few steps in and Wazir Khan Mosque roughly 200 metres along the Royal Trail according to heritage authority material. Treat these as orientation, not a verified step-free or unobstructed route.',
            'Lanes are busy, uneven and shared with residents, carts and deliveries. Walking is the practical way to see the quarter; plan rest stops and water rather than a tight schedule.'
          ]
        },
        {
          h: 'From the airport, rail station or elsewhere in Lahore',
          p: [
            'Ask a licensed taxi or local transport operator for current options and a lawful Circular Road drop-off. No airport travel time, rail connection, bus number or timetable has been verified here, and publishing an undated one would be misleading.',
            'If you are already in the old city, the gate can be included in a longer walking route towards Lahore Fort and Badshahi Mosque, which are considerably further west.'
          ]
        }
      ],
      faqs: [
        [
          'What is the easiest way to get to Delhi Gate?',
          'A taxi or ride-hail to a legal Circular Road drop-off, followed by a short walk through the gate, is the most straightforward approach described here.'
        ],
        [
          'Which bus goes to Delhi Gate?',
          'No bus route number or stop name has been verified for this guide. Check the current network with a local operator on your travel date.'
        ],
        [
          'How long does it take from Allama Iqbal International Airport?',
          'No airport journey time is confirmed here. Traffic, restrictions and the drop-off point change the answer; ask your driver on the day.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ لاہور تک کیسے پہنچیں: کار، ٹیکسی اور پیدل',
      description:
        'بغیر کسی غیر تصدیق شدہ بس نمبر کے دہلی گیٹ تک پہنچنے کے عملی طریقے: ڈراپ آف، رائیڈ ہیل، سرکلر روڈ سے پیدل داخلہ، اور ہوائی اڈے یا اسٹیشن سے آمد۔',
      kicker: 'یہاں تک پہنچنا',
      h1: 'دہلی گیٹ لاہور تک کیسے پہنچیں',
      lead:
        'زیادہ تر دوروں میں گاڑی پرانے شہر کے کنارے تک اور پھر دروازے سے تھوڑا پیدل چلنا شامل ہے۔ یہ صفحہ اسی آخری حصے پر ہے، اور جان بوجھ کر بس نمبر، کرایے اور دورانیے درج نہیں کرتا جن کی تصدیق نہیں ہوئی۔',
      sections: [
        {
          h: 'کار، ٹیکسی یا رائیڈ ہیل سے',
          p: [
            'ڈرائیور کو «دہلی گیٹ، اکبری منڈی، والڈ سٹی آف لاہور» اور پلس کوڈ H8JG+PHM بتائیں۔ سرکلر روڈ پر قانونی ڈراپ آف مانگیں؛ اندر کی گلیاں تنگ اور بہت مصروف ہیں۔',
            'اندر جانے سے پہلے واپسی کے لیے ملنے کی جگہ طے کر لیں۔ بازار کی بھیڑ یا پابندیوں کے بدلنے سے دن میں بعد میں اسی جگہ دوبارہ پہنچنا ممکن نہ ہو۔'
          ]
        },
        {
          h: 'اندرون شہر میں پیدل',
          p: [
            'سرکاری ورثہ مواد کے مطابق دروازے سے شاہی حمام چند قدم اور وزیر خان مسجد شاہی گزرگاہ پر تقریباً 200 میٹر اندر ہے۔ یہ سمت بتانے کے لیے ہے، بغیر رکاوٹ یا بغیر سیڑھی راستے کی تصدیق نہیں۔',
            'گلیاں مصروف، ناہموار اور مقامی باشندوں، ریڑھیوں اور ترسیل کے ساتھ مشترک ہیں۔ اس محلے کو دیکھنے کا عملی طریقہ پیدل چلنا ہے؛ سخت شیڈول کی بجائے آرام اور پانی کا انتظام رکھیں۔'
          ]
        },
        {
          h: 'ہوائی اڈے، ریلوے اسٹیشن یا لاہور کے دوسرے حصوں سے',
          p: [
            'موجودہ ذرائع اور سرکلر روڈ پر قانونی ڈراپ آف کے لیے مجاز ٹیکسی یا مقامی آپریٹر سے پوچھیں۔ یہاں ہوائی اڈے کا دورانیہ، ریل رابطہ، بس نمبر یا شیڈول تصدیق شدہ نہیں، اور بغیر تاریخ کا اندراج گمراہ کن ہوگا۔',
            'اگر آپ پہلے ہی پرانے شہر میں ہیں تو دروازے کو لاہور قلعہ اور بادشاہی مسجد کی طرف لمبے پیدل راستے میں شامل کر سکتے ہیں، جو مغرب میں کافی آگے ہیں۔'
          ]
        }
      ],
      faqs: [
        [
          'دہلی گیٹ تک پہنچنے کا آسان ترین طریقہ کیا ہے؟',
          'ٹیکسی یا رائیڈ ہیل سے سرکلر روڈ پر قانونی ڈراپ آف، پھر دروازے سے تھوڑا پیدل چلنا، یہاں بیان کردہ سادہ ترین طریقہ ہے۔'
        ],
        [
          'دہلی گیٹ کے لیے کون سی بس جاتی ہے؟',
          'اس رہنما صفحے کے لیے کسی بس روٹ نمبر یا اسٹاپ کی تصدیق نہیں ہوئی۔ اپنی تاریخ پر مقامی آپریٹر سے موجودہ نظام معلوم کریں۔'
        ],
        [
          'علامہ اقبال بین الاقوامی ہوائی اڈے سے کتنا وقت لگتا ہے؟',
          'یہاں ہوائی اڈے کے دورانیے کی تصدیق نہیں۔ ٹریفک، پابندیاں اور ڈراپ آف جواب بدل دیتے ہیں؛ اسی دن ڈرائیور سے پوچھیں۔'
        ]
      ]
    }
  },
  {
    slug: 'nearby/shahi-hammam',
    group: 'nearby',
    phase: 'P0',
    related: ['nearby/wazir-khan-mosque', 'nearby/shahi-guzargah', 'two-hour-walking-tour', 'heritage-conservation', 'nearby/chowk-wazir-khan'],
    en: {
      title: 'Shahi Hammam Near Delhi Gate Lahore: History & Visit Notes',
      description:
        'Shahi Hammam, the royal bathhouse a few steps inside Delhi Gate: what the building is, what conservation revealed, and what to confirm before visiting.',
      kicker: 'Landmarks near the gate',
      h1: 'Shahi Hammam near Delhi Gate',
      lead:
        'Shahi Hammam is the historic royal bathhouse immediately inside Delhi Gate on the Royal Trail. It is a separate managed site, not part of the gate passage, and this page keeps its access arrangements separate too.',
      sections: [
        {
          h: 'What the building is',
          p: [
            'A Mughal-era public bathhouse serving the royal route into the Walled City. Its plan, masonry and surviving decorative layers are the reason it is discussed alongside Wazir Khan Mosque and the Shahi Guzargah conservation work.',
            'Heritage descriptions mention fresco remains and the underfloor heating system. Those features belong to the building itself; this guide does not assign a specific date to every surviving surface or repair.'
          ]
        },
        {
          h: 'Conservation and what visitors notice',
          p: [
            'Conservation work on the Royal Trail and its monuments brought later additions and earlier decorative layers into view. Aga Khan Trust for Culture documentation of the Walled City programme is frequently cited for the Shahi Hammam restoration; consult that project material for technical detail.',
            'Expect a conserved interior rather than a working bath. Barriers, restricted areas and photography rules are set on site and can change during conservation or events.'
          ]
        },
        {
          h: 'Planning a visit',
          bullets: [
            'Confirm opening hours, any admission charge and booking requirements with the operator — none is verified here.',
            'Do not assume the 24-hour label attached to the nearby public passage applies to the hammam.',
            'Allow extra time if you are combining it with Wazir Khan Mosque, which follows prayer schedules.',
            'Ask before using tripods or flash; avoid touching fresco and tile surfaces.'
          ]
        }
      ],
      faqs: [
        [
          'How far is Shahi Hammam from Delhi Gate?',
          'It is described as a few steps inside the gate along the Royal Trail. Treat that as orientation, not a measured or step-free route.'
        ],
        [
          'Is there an entry fee for Shahi Hammam?',
          'No current fee has been verified for this guide. Admission and guided-tour charges are separate from the gate passage; confirm with the operator.'
        ],
        [
          'Is Shahi Hammam open at the same time as the gate?',
          'No shared timetable should be assumed. Check the hammam directly before planning your route.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ کے قریب شاہی حمام: تاریخ اور دورے کی معلومات',
      description:
        'دہلی گیٹ کے اندر چند قدم پر شاہی حمام: یہ عمارت کیا ہے، بحالی کے کام سے کیا سامنے آیا، اور جانے سے پہلے کن باتوں کی تصدیق ضروری ہے۔',
      kicker: 'دروازے کے قریب مقامات',
      h1: 'دہلی گیٹ کے قریب شاہی حمام',
      lead:
        'شاہی حمام دہلی گیٹ کے اندر شاہی گزرگاہ پر واقع تاریخی شاہی غسل خانہ ہے۔ یہ دروازے کی گزرگاہ کا حصہ نہیں بلکہ الگ منظم مقام ہے، اس لیے اس کے داخلے کے اوقات بھی الگ رکھے گئے ہیں۔',
      sections: [
        {
          h: 'یہ عمارت کیا ہے',
          p: [
            'مغلیہ دور کا عوامی غسل خانہ جو اندرون شہر میں داخل ہونے والے شاہی راستے کی خدمت کرتا تھا۔ اس کا نقشہ، چنائی اور بچ جانے والی تزئینی تہیں اسی لیے اسے وزیر خان مسجد اور شاہی گزرگاہ کی بحالی کے ساتھ یاد کیا جاتا ہے۔',
            'ورثہ کے بیانات میں دیواروں کی باقیات اور فرش کے نیچے حرارت کے نظام کا ذکر ہے۔ یہ خصوصیات عمارت کی اپنی ہیں؛ اس صفحے پر ہر موجود سطح یا مرمت کو کسی مخصوص سن سے نہیں جوڑا گیا۔'
          ]
        },
        {
          h: 'بحالی اور زائرین کے لیے قابلِ ذکر باتیں',
          p: [
            'شاہی گزرگاہ اور اس کی یادگاروں پر بحالی کے کام نے بعد کی اضافی تعمیرات اور پرانی تزئینی تہوں کو سامنے لایا۔ شاہی حمام کی بحالی کے لیے آغا خان ٹرسٹ فار کلچر کے اندرون شہر منصوبے کی دستاویزات اکثر حوالے کے طور پر دی جاتی ہیں؛ تکنیکی تفصیل کے لیے اسی منصوبے کا مواد دیکھیں۔',
            'یہ ایک محفوظ کی گئی عمارت ہے، فعال غسل خانہ نہیں۔ رکاوٹیں، ممنوعہ حصے اور عکاسی کے اصول موقع پر طے ہوتے ہیں اور بحالی یا تقریبات کے دوران بدل سکتے ہیں۔'
          ]
        },
        {
          h: 'دورے کی منصوبہ بندی',
          bullets: [
            'کھلنے کے اوقات، کسی بھی داخلے کی فیس اور بکنگ کی شرائط انتظامیہ سے تصدیق کریں — یہاں کچھ تصدیق شدہ نہیں۔',
            'قریبی عام گزرگاہ سے منسلک 24 گھنٹے کا اندراج حمام پر لاگو نہ سمجھیں۔',
            'وزیر خان مسجد کے ساتھ جوڑنے میں اضافی وقت رکھیں، کیونکہ وہاں نماز کے اوقات اثر انداز ہوتے ہیں۔',
            'ٹرائی پوڈ یا فلیش استعمال کرنے سے پہلے اجازت لیں؛ نقش و نگار اور ٹائلوں کو ہاتھ نہ لگائیں۔'
          ]
        }
      ],
      faqs: [
        [
          'شاہی حمام دہلی گیٹ سے کتنی دور ہے؟',
          'اسے شاہی گزرگاہ پر دروازے کے اندر چند قدم قرار دیا جاتا ہے۔ یہ سمت بتانا ہے، ناپا ہوا یا بغیر رکاوٹ راستہ نہیں۔'
        ],
        [
          'کیا شاہی حمام کا داخلہ مفت ہے؟',
          'اس رہنما صفحے کے لیے موجودہ فیس کی تصدیق نہیں ہوئی۔ داخلہ اور منظم ٹور کی فیس دروازے کی گزرگاہ سے الگ ہے؛ انتظامیہ سے پوچھیں۔'
        ],
        [
          'کیا شاہی حمام دروازے ہی کے اوقات میں کھلتا ہے؟',
          'ایک ہی نظام الاوقات فرض نہ کریں۔ راستہ بنانے سے پہلے حمام کے اپنے اوقات معلوم کریں۔'
        ]
      ]
    }
  },
  {
    slug: 'nearby/wazir-khan-mosque',
    group: 'nearby',
    phase: 'P0',
    related: ['nearby/shahi-hammam', 'nearby/shahi-guzargah', 'two-hour-walking-tour', 'nearby/chowk-wazir-khan', 'photography-spots'],
    en: {
      title: 'Wazir Khan Mosque from Delhi Gate: Architecture & Visiting Guide',
      description:
        "Wazir Khan Mosque sits about 200 metres inside Delhi Gate on the Royal Trail. What to look for in its tilework, how to visit respectfully, and what to confirm first.",
      kicker: 'Landmarks near the gate',
      h1: 'Wazir Khan Mosque from Delhi Gate',
      lead:
        'Heritage authority material places Wazir Khan Mosque roughly 200 metres inside Delhi Gate along the Royal Trail. That short distance makes it the natural companion to the gate, but it remains an active place of worship with its own etiquette.',
      sections: [
        {
          h: 'Where it sits on the Royal Trail',
          p: [
            'The mosque stands near Chowk Wazir Khan, the historic square in front of it, with the Shahi Hammam closer to the gate. The 200-metre figure is orientation from the heritage record, not a verified accessible or unobstructed walking measurement.',
            'The approach passes through working bazaar lanes. Allow time for crowds, deliveries and prayer-time pauses rather than treating the distance as a fixed walking time.'
          ]
        },
        {
          h: 'Architecture and ornament',
          p: [
            'The mosque is noted for its coloured tilework, calligraphy and richly decorated surfaces — among the most discussed Mughal-era interiors in Lahore. Look at the faience panels, the painted and tiled surfaces and the way the square frames the building.',
            'The gate, the hammam and the mosque are three different structures. Conserved surfaces may include later repairs; this guide does not claim every visible element is an untouched original.'
          ]
        },
        {
          h: 'Visiting respectfully',
          bullets: [
            'Dress modestly, keep voices low and follow prayer-time arrangements; access for visitors may pause.',
            'Ask before photographing people or interiors, and check any rules on tripods and commercial shoots.',
            'Remove footwear where required and follow posted barriers around fragile tilework.',
            'Confirm opening arrangements and any guided-tour conditions with the site itself before travel.'
          ]
        }
      ],
      faqs: [
        [
          'How far is Wazir Khan Mosque from Delhi Gate?',
          'About 200 metres inside the gate along the Royal Trail, according to heritage authority material. Treat this as orientation rather than a timed or step-free route.'
        ],
        [
          'Can visitors enter the mosque at any time?',
          'It is an active place of worship. Prayer times and site rules affect visitor access; confirm on the day.'
        ],
        [
          'Is there a ticket for Wazir Khan Mosque?',
          'No current admission arrangement has been verified for this guide. Check with the site rather than assuming the gate passage terms apply.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ سے وزیر خان مسجد: فنِ تعمیر اور دورے کی رہنمائی',
      description:
        'وزیر خان مسجد دہلی گیٹ سے تقریباً 200 میٹر اندر شاہی گزرگاہ پر ہے۔ ٹائلوں اور خطاطی میں کیا دیکھیں، ادب کے ساتھ کیسے جائیں، اور پہلے کیا تصدیق کریں۔',
      kicker: 'دروازے کے قریب مقامات',
      h1: 'دہلی گیٹ سے وزیر خان مسجد',
      lead:
        'سرکاری ورثہ مواد کے مطابق وزیر خان مسجد دہلی گیٹ کے اندر شاہی گزرگاہ پر تقریباً 200 میٹر کے فاصلے پر ہے۔ یہ قربت اسے دروازے کا فطری ساتھی بناتی ہے، مگر یہ ایک فعال عبادت گاہ ہے جس کے اپنے آداب ہیں۔',
      sections: [
        {
          h: 'شاہی گزرگاہ پر اس کا مقام',
          p: [
            'مسجد چوک وزیر خان کے قریب ہے، جو اس کے سامنے کا تاریخی چوک ہے، جبکہ شاہی حمام دروازے سے قریب تر ہے۔ 200 میٹر کا عدد سرکاری بیان سے سمت کی نشاندہی ہے، ناپا ہوا یا بلا رکاوٹ پیدل راستہ نہیں۔',
            'راستہ مصروف بازار کی گلیوں سے گزرتا ہے۔ اس فاصلے کو طے شدہ وقت نہ سمجھیں؛ بھیڑ، ترسیل اور نماز کے وقفوں کے لیے وقت رکھیں۔'
          ]
        },
        {
          h: 'فنِ تعمیر اور تزئین',
          p: [
            'یہ مسجد رنگین ٹائلوں، خطاطی اور بھرپور سجاوٹ کے لیے مشہور ہے اور لاہور کی مغلیہ دور کی سب سے زیادہ چرچا میں رہنے والی عمارتوں میں شمار ہوتی ہے۔ چینی مٹی کے پینل، رنگین سطحیں اور چوک سے مسجد کا منظر دیکھیں۔',
            'دروازہ، حمام اور مسجد تین الگ عمارتیں ہیں۔ محفوظ کی گئی سطحوں میں بعد کی مرمت شامل ہو سکتی ہے؛ یہ صفحہ ہر نظر آنے والے حصے کو بغیر کسی مرمت کے اصل قرار نہیں دیتا۔'
          ]
        },
        {
          h: 'ادب کے ساتھ دورہ',
          bullets: [
            'مناسب لباس پہنیں، آواز پست رکھیں اور نماز کے اوقات کا خیال رکھیں؛ زائرین کا داخلہ رک سکتا ہے۔',
            'لوگوں یا اندرونی حصوں کی تصویر لینے سے پہلے اجازت لیں، اور ٹرائی پوڈ یا تجارتی عکاسی کے اصول معلوم کریں۔',
            'جہاں ضرورت ہو جوتے اتاریں اور نازک ٹائلوں کے گرد لگی رکاوٹوں کا احترام کریں۔',
            'سفر سے پہلے کھلنے کے انتظامات اور کسی منظم ٹور کی شرائط خود مقام سے تصدیق کریں۔'
          ]
        }
      ],
      faqs: [
        [
          'وزیر خان مسجد دہلی گیٹ سے کتنی دور ہے؟',
          'سرکاری ورثہ مواد کے مطابق شاہی گزرگاہ پر دروازے کے اندر تقریباً 200 میٹر۔ یہ سمت ہے، طے شدہ دورانیہ یا بغیر رکاوٹ راستہ نہیں۔'
        ],
        [
          'کیا زائرین کسی بھی وقت مسجد میں جا سکتے ہیں؟',
          'یہ ایک فعال عبادت گاہ ہے۔ نماز کے اوقات اور مقام کے اصول زائرین کی رسائی کو متاثر کرتے ہیں؛ اسی دن تصدیق کریں۔'
        ],
        [
          'کیا وزیر خان مسجد کے لیے ٹکٹ ہے؟',
          'اس رہنما صفحے کے لیے داخلے کے موجودہ انتظام کی تصدیق نہیں ہوئی۔ دروازے کی گزرگاہ والی شرائط لاگو نہ سمجھیں، مقام سے پوچھیں۔'
        ]
      ]
    }
  },
  {
    slug: 'nearby/shahi-guzargah',
    group: 'nearby',
    phase: 'P0',
    related: ['nearby/shahi-hammam', 'nearby/wazir-khan-mosque', 'two-hour-walking-tour', 'royal-trail-history', 'self-guided-walking-tour'],
    en: {
      title: 'Shahi Guzargah (Royal Trail) from Delhi Gate, Lahore',
      description:
        'What the Shahi Guzargah or Royal Trail is, why it links Delhi Gate to Shahi Hammam and Wazir Khan Mosque, and how to walk it without assuming unrestricted access.',
      kicker: 'Landmarks near the gate',
      h1: 'Shahi Guzargah — the Royal Trail from Delhi Gate',
      lead:
        'The Shahi Guzargah is the historic processional route leading from Delhi Gate into the Walled City past Shahi Hammam towards Wazir Khan Mosque. It is a living street, not a single ticketed attraction.',
      sections: [
        {
          h: 'What the name refers to',
          p: [
            '"Shahi Guzargah" describes the royal passage into the old city rather than one building. Heritage and conservation material use it to group the gate, the bathhouse, Chowk Wazir Khan, the mosque and the lanes between them into a single historic sequence.',
            'Because it is a route through a working neighbourhood, there is no single entrance, opening time or ticket that covers the whole trail.'
          ]
        },
        {
          h: 'What conservation changed',
          p: [
            'Conservation and streetscape work on the trail exposed and stabilised historic fabric, including work around the hammam and Chowk Wazir Khan. Later encroachments, services and surfaces were addressed in phases; this guide does not claim the whole visible streetscape is an untouched Mughal survival.',
            'Restoration descriptions are historical background, not a current access notice. Barriers, diversions and site rules are set locally.'
          ]
        },
        {
          h: 'Walking the sequence today',
          bullets: [
            'Start at the gate arch, then Shahi Hammam, then the lanes towards Chowk Wazir Khan and the mosque.',
            'Confirm the opening of each interior separately; the street itself is not a guarantee of entry.',
            'Allow for prayer times, market deliveries and crowded, uneven paving.',
            'For a longer continuation, the route leads on towards Lahore Fort and Badshahi Mosque, which are considerably further away.'
          ]
        }
      ],
      faqs: [
        [
          'Is the Royal Trail a single ticketed attraction?',
          'No. It is a historic route through a living neighbourhood. Individual buildings along it have their own entry arrangements.'
        ],
        [
          'Where does the Shahi Guzargah start?',
          'It is commonly described as beginning at Delhi Gate and running inwards past Shahi Hammam towards Wazir Khan Mosque.'
        ],
        [
          'Can I walk it at night?',
          'This guide has not verified night-time access, lighting or safety. Plan a daylight visit and check local notices.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ سے شاہی گزرگاہ، لاہور',
      description:
        'شاہی گزرگاہ کیا ہے، یہ دہلی گیٹ کو شاہی حمام اور وزیر خان مسجد سے کیسے جوڑتی ہے، اور بلا رکاوٹ رسائی کا یقین کیے بغیر اس پر کیسے چلیں۔',
      kicker: 'دروازے کے قریب مقامات',
      h1: 'شاہی گزرگاہ — دہلی گیٹ سے اندرون شہر کا راستہ',
      lead:
        'شاہی گزرگاہ دہلی گیٹ سے اندرون شہر میں شاہی حمام سے ہوتے ہوئے وزیر خان مسجد تک جانے والا تاریخی راستہ ہے۔ یہ ایک زندہ گلی ہے، کوئی ایک ٹکٹ والا مقام نہیں۔',
      sections: [
        {
          h: 'اس نام سے کیا مراد ہے',
          p: [
            '«شاہی گزرگاہ» کسی ایک عمارت کی بجائے پرانے شہر میں داخل ہونے والے شاہی راستے کو کہتے ہیں۔ ورثہ اور بحالی کے مواد میں دروازہ، حمام، چوک وزیر خان، مسجد اور ان کے درمیان کی گلیاں ایک ہی تاریخی ترتیب کے طور پر اس نام سے آتی ہیں۔',
            'چونکہ یہ آباد محلے سے گزرنے والا راستہ ہے، اس لیے پورے راستے کے لیے کوئی ایک دروازہ، وقت یا ٹکٹ نہیں۔'
          ]
        },
        {
          h: 'بحالی نے کیا بدلا',
          p: [
            'راستے اور اس کی سطحوں پر بحالی کے کام نے تاریخی ساخت کو ظاہر اور مستحکم کیا، جس میں حمام اور چوک وزیر خان کے ارد گرد کا کام شامل ہے۔ بعد کی تجاوزات، سہولیات اور فرش مرحلہ وار دیکھے گئے؛ یہ صفحہ پورے موجودہ منظر کو بغیر چھیڑ چھاڑ مغلیہ باقیات قرار نہیں دیتا۔',
            'بحالی کے بیانات تاریخی پس منظر ہیں، موجودہ رسائی کی اطلاع نہیں۔ رکاوٹیں، متبادل راستے اور اصول مقامی طور پر طے ہوتے ہیں۔'
          ]
        },
        {
          h: 'آج اس ترتیب پر چلنا',
          bullets: [
            'دروازے کے محراب سے شروع کریں، پھر شاہی حمام، پھر چوک وزیر خان اور مسجد کی طرف گلیاں۔',
            'ہر اندرونی مقام کے کھلنے کی الگ تصدیق کریں؛ سڑک کا کھلا ہونا اندر جانے کی ضمانت نہیں۔',
            'نماز کے اوقات، منڈی کی ترسیل اور مصروف، ناہموار فرش کے لیے وقت رکھیں۔',
            'لمبے تسلسل کے لیے راستہ لاہور قلعہ اور بادشاہی مسجد کی طرف جاتا ہے، جو کافی آگے ہیں۔'
          ]
        }
      ],
      faqs: [
        [
          'کیا شاہی گزرگاہ ایک ٹکٹ والا مقام ہے؟',
          'نہیں۔ یہ آباد محلے سے گزرنے والا تاریخی راستہ ہے۔ اس پر موجود ہر عمارت کے داخلے کے اپنے انتظامات ہیں۔'
        ],
        [
          'شاہی گزرگاہ کہاں سے شروع ہوتی ہے؟',
          'عام طور پر اسے دہلی گیٹ سے شروع ہو کر شاہی حمام سے ہوتے ہوئے وزیر خان مسجد تک بتایا جاتا ہے۔'
        ],
        [
          'کیا رات میں اس پر چلا جا سکتا ہے؟',
          'اس رہنما صفحے نے رات کی رسائی، روشنی یا حفاظت کی تصدیق نہیں کی۔ دن کا دورہ رکھیں اور مقامی اطلاعات دیکھیں۔'
        ]
      ]
    }
  },
  {
    slug: 'two-hour-walking-tour',
    group: 'itineraries',
    phase: 'P0',
    related: ['nearby/shahi-hammam', 'nearby/wazir-khan-mosque', 'nearby/shahi-guzargah', 'one-hour-itinerary', 'half-day-itinerary'],
    en: {
      title: 'Delhi Gate Two-Hour Walking Tour: Gate, Hammam & Mosque',
      description:
        'A two-hour walking sequence from Delhi Gate through Shahi Hammam to Wazir Khan Mosque, with realistic timing, prayer and heat contingencies, and the checks to make first.',
      kicker: 'Walking itinerary',
      h1: 'A two-hour walk from Delhi Gate',
      lead:
        'This route covers the gate, the Royal Trail, Shahi Hammam and Wazir Khan Mosque. It is a planning sequence, not a booked tour: every interior stop depends on access being confirmed on the day.',
      sections: [
        {
          h: 'The route in order',
          bullets: [
            'Start outside the gate arch on Circular Road and identify the entrance and the bazaar beyond it.',
            'Walk in a few steps to Shahi Hammam; confirm whether the interior is open before counting on it.',
            'Continue along the Royal Trail towards Chowk Wazir Khan, allowing time for the lanes themselves.',
            'Finish at Wazir Khan Mosque, roughly 200 metres inside the gate, respecting prayer times and site rules.'
          ],
          p: [
            'The start and end points are both on the same inward route, so the return to your driver is a straightforward walk back through the bazaar. Agree the pick-up point before starting.'
          ]
        },
        {
          h: 'Timing and what changes it',
          p: [
            'Two hours is a rough planning allowance, not a measured walking time. Queues, prayer pauses, conservation barriers, market deliveries and photography stops can all extend it; a closed interior shortens it substantially.',
            'No opening hours, ticket or guided-walk booking for any stop has been verified here. If one building is closed, the rest of the walk still works as a streetscape route.'
          ]
        },
        {
          h: 'Heat, rain and alternatives',
          p: [
            'Check the Pakistan Meteorological Department forecast, air-quality warnings and local access notices for your date. In high heat, shorten the outdoor portions and use shaded stops; in monsoon rain or winter fog, prioritise the interiors that are actually open.',
            'Travellers with limited mobility should confirm surfaces and thresholds before setting out. The lanes are busy and uneven, and a map marker for an accessible entrance does not certify the whole route.'
          ]
        }
      ],
      faqs: [
        [
          'Do I need to book this walk?',
          'No. This is a self-planned sequence, not a Walled City of Lahore Authority tour. Organised walks are separate, separately booked activities.'
        ],
        [
          'What if Shahi Hammam or the mosque is closed?',
          'The gate, Royal Trail lanes and Chowk Wazir Khan still form a valid short walk. Confirm each interior separately and adjust the order.'
        ],
        [
          'Is two hours enough for Lahore Fort as well?',
          'No. Lahore Fort and Badshahi Mosque are considerably further west and belong to a longer half-day or full-day plan.'
        ]
      ]
    },
    ur: {
      title: 'دہلی گیٹ سے دو گھنٹے کا پیدل دورہ: دروازہ، حمام اور مسجد',
      description:
        'دہلی گیٹ سے شاہی حمام اور وزیر خان مسجد تک دو گھنٹے کی پیدل ترتیب، حقیقت پسندانہ وقت، نماز اور گرمی کے متبادل، اور پہلے ضروری تصدیق۔',
      kicker: 'پیدل دورے کا منصوبہ',
      h1: 'دہلی گیٹ سے دو گھنٹے کا پیدل دورہ',
      lead:
        'یہ راستہ دروازہ، شاہی گزرگاہ، شاہی حمام اور وزیر خان مسجد کو محیط ہے۔ یہ منصوبہ بندی کی ترتیب ہے، بک شدہ ٹور نہیں؛ ہر اندرونی مقام اسی دن کی تصدیق پر منحصر ہے۔',
      sections: [
        {
          h: 'راستے کی ترتیب',
          bullets: [
            'سرکلر روڈ پر دروازے کے محراب کے باہر سے شروع کریں اور داخلے اور آگے کے بازار کو پہچانیں۔',
            'چند قدم اندر شاہی حمام تک جائیں؛ اندرونی حصے کو شمار کرنے سے پہلے اس کے کھلنے کی تصدیق کریں۔',
            'شاہی گزرگاہ پر چوک وزیر خان کی طرف بڑھیں اور خود گلیوں کے لیے بھی وقت رکھیں۔',
            'دروازے سے تقریباً 200 میٹر اندر وزیر خان مسجد پر اختتام کریں، نماز کے اوقات اور مقام کے اصولوں کا خیال رکھتے ہوئے۔'
          ],
          p: [
            'آغاز اور اختتام ایک ہی اندرونی راستے پر ہیں، اس لیے ڈرائیور کے پاس واپسی بازار سے سیدھی پیدل ہے۔ شروع کرنے سے پہلے ملنے کی جگہ طے کر لیں۔'
          ]
        },
        {
          h: 'وقت اور اسے بدلنے والی باتیں',
          p: [
            'دو گھنٹے منصوبہ بندی کا اندازہ ہے، ناپا ہوا چلنے کا وقت نہیں۔ قطاریں، نماز کے وقفے، بحالی کی رکاوٹیں، منڈی کی ترسیل اور تصویروں کے لیے رکنا اسے بڑھا سکتے ہیں؛ کسی عمارت کی بندش اسے کافی گھٹا دیتی ہے۔',
            'یہاں کسی مقام کے اوقات، ٹکٹ یا منظم واک کی بکنگ تصدیق شدہ نہیں۔ اگر ایک عمارت بند ہو تو باقی راستہ گلیوں کے منظر کے طور پر پھر بھی چلتا ہے۔'
          ]
        },
        {
          h: 'گرمی، بارش اور متبادل',
          p: [
            'اپنی تاریخ کے لیے محکمۂ موسمیات کی پیش گوئی، فضائی معیار کی تنبیہات اور مقامی رسائی کی اطلاعات دیکھیں۔ شدید گرمی میں کھلے حصے کم کریں اور سایہ دار جگہیں استعمال کریں؛ مون سون کی بارش یا سردی کی دھند میں انہی اندرونی مقامات کو ترجیح دیں جو واقعی کھلے ہوں۔',
            'محدود نقل و حرکت والے زائرین فرش اور چوکھٹ پہلے معلوم کریں۔ گلیاں مصروف اور ناہموار ہیں، اور نقشے پر قابلِ رسائی دروازے کا نشان پورے راستے کی ضمانت نہیں۔'
          ]
        }
      ],
      faqs: [
        [
          'کیا اس پیدل دورے کے لیے بکنگ ضروری ہے؟',
          'نہیں۔ یہ خود ترتیب دیا گیا راستہ ہے، والڈ سٹی آف لاہور اتھارٹی کا ٹور نہیں۔ منظم واک الگ اور الگ بکنگ والی سرگرمی ہے۔'
        ],
        [
          'اگر شاہی حمام یا مسجد بند ہو تو کیا کریں؟',
          'دروازہ، شاہی گزرگاہ کی گلیاں اور چوک وزیر خان پھر بھی مختصر پیدل دورہ بناتے ہیں۔ ہر اندرونی مقام الگ تصدیق کریں اور ترتیب بدل لیں۔'
        ],
        [
          'کیا دو گھنٹے میں لاہور قلعہ بھی دیکھا جا سکتا ہے؟',
          'نہیں۔ لاہور قلعہ اور بادشاہی مسجد مغرب میں کافی آگے ہیں اور آدھے دن یا پورے دن کے منصوبے میں آتے ہیں۔'
        ]
      ]
    }
  }
];
