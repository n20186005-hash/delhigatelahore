import type { Topic } from './topic-types';

/** Phase 3a — food, tea, bazaars and shopping (8 topics). */
export const TOPICS_P2A: Topic[] = [
  {
    slug: 'food-near-delhi-gate',
    group: 'food',
    phase: 'P2',
    related: ['breakfast-near-delhi-gate', 'street-food', 'restaurants', 'tea-and-chai', 'two-hour-walking-tour'],
    en: {
      title: 'Food Near Delhi Gate Lahore: Where to Look and What to Expect',
      description:
        'A practical orientation to eating near Delhi Gate: the kinds of food areas in the Walled City, how to choose a stop, and why no named venues or prices are listed here.',
      kicker: 'Food and drink',
      h1: 'Finding food near Delhi Gate',
      lead:
        'Food around Delhi Gate belongs to a working old-city neighbourhood, not a single food court. This page explains how to choose an area and a time, without naming businesses or quoting prices that have not been verified.',
      sections: [
        {
          h: 'Think in terms of areas, not addresses',
          p: [
            'The lanes inside the gate, the bazaar streets around Chowk Wazir Khan and the longer route towards Lahore Fort each offer a different kind of eating. A short gate visit naturally suits a quick stop nearby; a longer walk opens up more options further west.'
          ]
        },
        {
          h: 'Choosing a stop sensibly',
          bullets: [
            'Prefer places that are busy and serving freshly cooked food at the time you arrive.',
            'Check what is actually open on your date — hours and stall rotations change.',
            'Confirm prices before ordering; no price list is published in this guide.',
            'Allow a rest and a hand-washing stop before continuing the walk.'
          ]
        },
        {
          h: 'How this differs from the other food guides',
          p: [
            'This page covers the overall choice of area and timing. Breakfast timing and dishes have their own guide, tea and rest stops another, street snacks another, and sit-down restaurants a separate comparison of conditions. None of them lists a named business or an unverified rating.'
          ]
        }
      ],
      faqs: [
        ['Are there restaurants right beside Delhi Gate?', 'The surrounding lanes are a working bazaar with food available at various times, but no named venue or its opening hours has been verified here.'],
        ['Do I need a reservation?', 'No booking arrangement has been verified. For a specific venue, check on the day with the business itself.'],
        ['Is it expensive to eat in the Walled City?', 'No price range has been verified for this guide. Confirm prices at the stall or restaurant before ordering.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ لاہور کے قریب کھانا: کہاں تلاش کریں اور کیا توقع رکھیں',
      description:
        'دہلی گیٹ کے قریب کھانے کی عملی رہنمائی: اندرون شہر میں کھانے کے علاقوں کی اقسام، جگہ چننے کا طریقہ، اور یہاں دکانوں کے نام یا قیمتیں نہ دینے کی وجہ۔',
      kicker: 'کھانا اور مشروبات',
      h1: 'دہلی گیٹ کے قریب کھانا تلاش کرنا',
      lead:
        'دہلی گیٹ کے ارد گرد کھانا ایک آباد پرانے محلے کا حصہ ہے، کسی ایک مرکزی فوڈ کورٹ کا نہیں۔ یہ صفحہ علاقہ اور وقت چننے کا طریقہ بتاتا ہے، بغیر کسی دکان کا نام یا غیر تصدیق شدہ رقم دیے۔',
      sections: [
        {
          h: 'پتوں کی بجائے علاقوں کے حساب سے سوچیں',
          p: [
            'دروازے کے اندر کی گلیاں، چوک وزیر خان کے ارد گرد کی بازاری سڑکیں اور لاہور قلعہ کی طرف لمبا راستہ، ہر ایک کھانے کا الگ انداز پیش کرتا ہے۔ مختصر دورے کے لیے قریب ہی جلدی رکنا مناسب ہے؛ لمبی واک میں مغرب کی طرف مزید اختیار کھلتے ہیں۔'
          ]
        },
        {
          h: 'جگہ چننے کا سادہ اصول',
          bullets: [
            'جہاں اس وقت بھیڑ ہو اور کھانا تازہ پک رہا ہو، وہی ترجیح دیں۔',
            'اپنی تاریخ پر اصل میں کیا کھلا ہے، یہ چیک کریں؛ اوقات اور اسٹال بدلتے رہتے ہیں۔',
            'آرڈر دینے سے پہلے قیمت معلوم کر لیں؛ اس رہنما صفحے پر کوئی فہرست نہیں۔',
            'واک جاری رکھنے سے پہلے آرام اور ہاتھ دھونے کا وقفہ رکھیں۔'
          ]
        },
        {
          h: 'دوسرے کھانے والے صفحوں سے فرق',
          p: [
            'یہ صفحہ مجموعی طور پر علاقہ اور وقت چننے کے لیے ہے۔ ناشتے کے اوقات اور کھانوں کا الگ صفحہ، چائے اور آرام کا الگ، بازار کے نمکین کھانوں کا الگ، اور بیٹھ کر کھانے والی جگہوں کے حالات کا الگ موازنہ ہے۔ ان میں سے کسی میں دکان کا نام یا غیر تصدیق شدہ درجہ بندی نہیں۔'
          ]
        }
      ],
      faqs: [
        ['کیا دہلی گیٹ کے بالکل ساتھ ریستوران ہیں؟', 'ارد گرد کی گلیاں ایک فعال بازار ہیں جہاں مختلف اوقات میں کھانا ملتا ہے، مگر یہاں کسی دکان کے نام یا اوقات کی تصدیق نہیں ہوئی۔'],
        ['کیا پہلے سے بکنگ ضروری ہے؟', 'کسی بکنگ نظام کی تصدیق نہیں ہوئی۔ کسی مخصوص جگہ کے لیے اسی دن خود وہاں سے پوچھیں۔'],
        ['کیا اندرون شہر میں کھانا مہنگا ہے؟', 'اس رہنما صفحے کے لیے کسی قیمت کی حد کی تصدیق نہیں۔ آرڈر سے پہلے خود قیمت معلوم کر لیں۔']
      ]
    }
  },
  {
    slug: 'breakfast-near-delhi-gate',
    group: 'food',
    phase: 'P2',
    related: ['food-near-delhi-gate', 'tea-and-chai', 'best-time-to-visit', 'one-hour-itinerary', 'two-hour-walking-tour'],
    en: {
      title: 'Breakfast Near Delhi Gate: Planning an Early Old-City Visit',
      description:
        'How to fit a Lahori breakfast into an early Delhi Gate visit: timing, common dish types, crowd patterns and the checks that matter before you go.',
      kicker: 'Breakfast',
      h1: 'Breakfast near Delhi Gate',
      lead:
        'An early start is one of the pleasantest ways to see the gate before the lanes fill up. This page is about timing and sequencing a breakfast stop, not about recommending a named shop.',
      sections: [
        {
          h: 'Why the timing matters',
          p: [
            'Morning light suits the gate arch and the first stretch of the Royal Trail, while the bazaar is generally less crowded early on. A breakfast stop works best either before you enter the lanes or after a short first walk, rather than in the middle of a tight itinerary.'
          ]
        },
        {
          h: 'What a Lahori breakfast commonly looks like',
          bullets: [
            'Halwa puri with chickpeas, often paired with naan and lassi.',
            'Tea and simple breads for a lighter start.',
            'Seasonal sweets and fried snacks in the bazaar lanes.',
            'No specific dish, portion or price is verified for any named venue here.'
          ]
        },
        {
          h: 'Practical checks',
          p: [
            'Confirm which stalls are open at the hour you plan, and check that any interior you want to visit afterwards is actually open — monument hours are separate from the street. If you have limited time, keep breakfast short and treat the rest of the walk as the main event.'
          ]
        }
      ],
      faqs: [
        ['What time should I start for breakfast and the gate?', 'No verified opening time is published here. Choose an early daylight start, confirm the stalls, and check monument access separately.'],
        ['Is breakfast available inside the gate?', 'Food is available in the surrounding lanes at various times, but no named stall or its hours has been verified.'],
        ['How much should I budget?', 'No breakfast price has been verified for this guide. Confirm at the counter before ordering.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کے قریب ناشتہ: صبح کے اندرون شہر دورے کا منصوبہ',
      description:
        'صبح سویرے دہلی گیٹ کے دورے میں لاہوری ناشتہ کیسے شامل کریں: وقت، عام کھانوں کی اقسام، بھیڑ کے اوقات اور جانے سے پہلے کی جانچیں۔',
      kicker: 'ناشتہ',
      h1: 'دہلی گیٹ کے قریب ناشتہ',
      lead:
        'گلیوں کے مصروف ہونے سے پہلے صبح کا آغاز دروازہ دیکھنے کا خوشگوار ترین طریقہ ہے۔ یہ صفحہ ناشتے کے وقفے کے وقت اور ترتیب کے بارے میں ہے، کسی مخصوص دکان کی سفارش کے بارے میں نہیں۔',
      sections: [
        {
          h: 'وقت کیوں اہم ہے',
          p: [
            'صبح کی روشنی دروازے کے محراب اور شاہی گزرگاہ کے پہلے حصے کے لیے موزوں ہے، اور عام طور پر بازار ابھی کم مصروف ہوتا ہے۔ ناشتے کا وقفہ گلیوں میں داخل ہونے سے پہلے یا مختصر پہلی واک کے بعد بہتر رہتا ہے، کسی سخت شیڈول کے درمیان نہیں۔'
          ]
        },
        {
          h: 'لاہوری ناشتہ عموماً کیسا ہوتا ہے',
          bullets: [
            'چنے کے ساتھ حلوہ پوری، اکثر نان اور لسی کے ہمراہ۔',
            'ہلکے آغاز کے لیے چائے اور سادہ روٹی۔',
            'بازار کی گلیوں میں موسمی مٹھائیاں اور تلے ہوئے نمکین کھانے۔',
            'یہاں کسی مخصوص دکان کے کھانے، حصے یا قیمت کی تصدیق نہیں۔'
          ]
        },
        {
          h: 'عملی جانچیں',
          p: [
            'جس وقت جانا ہے اس وقت کون سے اسٹال کھلے ہیں یہ معلوم کریں، اور بعد میں جس اندرونی مقام میں جانا ہے وہ واقعی کھلا ہے یا نہیں — یادگاروں کے اوقات گلی سے الگ ہیں۔ اگر وقت کم ہو تو ناشتہ مختصر رکھیں اور باقی واک کو اصل مقصد بنائیں۔'
          ]
        }
      ],
      faqs: [
        ['ناشتے اور دروازے کے لیے کب نکلیں؟', 'یہاں کوئی تصدیق شدہ کھلنے کا وقت درج نہیں۔ دن کی روشنی میں جلدی آغاز چنیں، اسٹال معلوم کریں اور یادگاروں کی رسائی الگ چیک کریں۔'],
        ['کیا دروازے کے اندر ناشتہ ملتا ہے؟', 'ارد گرد کی گلیوں میں مختلف اوقات میں کھانا ملتا ہے، مگر کسی مخصوص اسٹال یا اس کے اوقات کی تصدیق نہیں۔'],
        ['کتنا خرچ رکھیں؟', 'اس رہنما صفحے کے لیے ناشتے کی کوئی قیمت تصدیق شدہ نہیں۔ آرڈر دینے سے پہلے خود پوچھ لیں۔']
      ]
    }
  },
  {
    slug: 'tea-and-chai',
    group: 'food',
    phase: 'P2',
    related: ['food-near-delhi-gate', 'breakfast-near-delhi-gate', 'street-food', 'visitor-tips', 'two-hour-walking-tour'],
    en: {
      title: 'Tea and Chai Near Delhi Gate: Rest Stops on a Long Walk',
      description:
        'How to plan a tea break during a Delhi Gate walk: pacing, hygiene, seating and why this guide names no tea house or price.',
      kicker: 'Tea and rest',
      h1: 'Tea and chai near Delhi Gate',
      lead:
        'A tea stop is less about a particular address and more about pacing a walk through busy lanes. This page covers when to pause and what to check, without listing named tea houses.',
      sections: [
        {
          h: 'Where a tea break fits',
          p: [
            'After the gate arch and the first stretch of the Royal Trail is a natural point to pause, before deciding whether to continue towards Chowk Wazir Khan. In warm weather, a shaded seated break is worth more than an extra stop.'
          ]
        },
        {
          h: 'Choosing a place',
          bullets: [
            'Look for freshly prepared drinks and visible cleaning of cups and surfaces.',
            'Confirm the price before ordering; no tea price is verified here.',
            'Check whether there is somewhere to sit, especially for older visitors.',
            'Carry water as well — tea is not a substitute for hydration in the heat.'
          ]
        },
        {
          h: 'Courtesy in a working neighbourhood',
          p: [
            'Do not occupy a stall’s limited seating for a long time when it is busy, and ask before photographing staff or other customers. Keep the break short enough that the rest of your route still has daylight.'
          ]
        }
      ],
      faqs: [
        ['Are there well-known tea houses near the gate?', 'No named tea house or its current opening status has been verified for this guide. Choose a busy, clean stall on the day.'],
        ['How much does chai cost?', 'No price has been verified here. Confirm at the stall before ordering.'],
        ['Is a tea break necessary for a short visit?', 'Not for a one-hour route. It is useful on a two-hour or longer walk, particularly in warm weather.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کے قریب چائے: لمبی واک میں آرام کے وقفے',
      description:
        'دہلی گیٹ کی واک کے دوران چائے کا وقفہ کیسے رکھیں: رفتار، صفائی، بیٹھنے کی جگہ، اور اس صفحے پر کسی چائے خانے کا نام یا قیمت نہ دینے کی وجہ۔',
      kicker: 'چائے اور آرام',
      h1: 'دہلی گیٹ کے قریب چائے',
      lead:
        'چائے کا وقفہ کسی مخصوص پتے سے زیادہ مصروف گلیوں میں اپنی رفتار سنبھالنے کا معاملہ ہے۔ یہ صفحہ کب رکنا اور کیا دیکھنا ہے بتاتا ہے، بغیر کسی چائے خانے کا نام دیے۔',
      sections: [
        {
          h: 'چائے کا وقفہ کہاں آئے',
          p: [
            'دروازے کا محراب اور شاہی گزرگاہ کا پہلا حصہ دیکھنے کے بعد رکنے کا فطری مقام ہے، اس فیصلے سے پہلے کہ چوک وزیر خان تک آگے بڑھنا ہے یا نہیں۔ گرم موسم میں سایہ دار بیٹھنے کا وقفہ ایک اضافی پڑاؤ سے زیادہ مفید ہوتا ہے۔'
          ]
        },
        {
          h: 'جگہ چنتے وقت',
          bullets: [
            'تازہ تیار مشروب اور پیالوں، سطحوں کی ظاہر صفائی دیکھیں۔',
            'آرڈر سے پہلے قیمت پوچھ لیں؛ یہاں چائے کی کوئی قیمت تصدیق شدہ نہیں۔',
            'بیٹھنے کی جگہ ہے یا نہیں دیکھیں، خاص کر بڑی عمر کے ساتھیوں کے لیے۔',
            'پانی بھی ساتھ رکھیں — گرمی میں چائے پانی کا بدل نہیں۔'
          ]
        },
        {
          h: 'فعال محلے میں ادب',
          p: [
            'جب جگہ مصروف ہو تو محدود نشستوں پر لمبا وقت نہ لیں، اور عملے یا دوسرے گاہکوں کی تصویر لینے سے پہلے اجازت لیں۔ وقفہ اتنا مختصر رکھیں کہ باقی راستے کے لیے دن کی روشنی باقی رہے۔'
          ]
        }
      ],
      faqs: [
        ['کیا دروازے کے قریب مشہور چائے خانے ہیں؟', 'اس رہنما صفحے کے لیے کسی مخصوص چائے خانے یا اس کے موجودہ کھلنے کی تصدیق نہیں۔ اسی دن کوئی مصروف، صاف جگہ چنیں۔'],
        ['چائے کی قیمت کتنی ہے؟', 'یہاں کوئی قیمت تصدیق شدہ نہیں۔ آرڈر سے پہلے خود پوچھ لیں۔'],
        ['کیا مختصر دورے میں چائے کا وقفہ ضروری ہے؟', 'ایک گھنٹے کے راستے میں نہیں۔ دو گھنٹے یا لمبی واک میں، خاص کر گرمی میں، مفید ہے۔']
      ]
    }
  },
  {
    slug: 'street-food',
    group: 'food',
    phase: 'P2',
    related: ['food-near-delhi-gate', 'tea-and-chai', 'breakfast-near-delhi-gate', 'visitor-tips', 'family-visit'],
    en: {
      title: 'Street Food Around Delhi Gate: Types and Sensible Precautions',
      description:
        'Common street-snack types in Lahore’s old city and practical, non-alarmist precautions for eating on the move near Delhi Gate.',
      kicker: 'Street snacks',
      h1: 'Street food around Delhi Gate',
      lead:
        'Snacks are part of the experience of walking through the Walled City. This page describes common categories and sensible precautions, without naming vendors or quoting prices.',
      sections: [
        {
          h: 'Types you are likely to see',
          bullets: [
            'Fried snacks such as samosas and pakoras, often seasonal.',
            'Sweets and halwa-style preparations in bazaar lanes.',
            'Chaat-style savoury mixtures and breads.',
            'Tea and lassi as drinks alongside the snacks.'
          ]
        },
        {
          h: 'Sensible precautions',
          p: [
            'Choose stalls with a steady flow of customers and food cooked or assembled in front of you. If you have a sensitive stomach, avoid uncooked garnishes and ice of unknown origin, and wash or sanitise hands before eating. These are general travel precautions, not a health assessment of any vendor.'
          ]
        },
        {
          h: 'Eating while walking',
          p: [
            'The lanes are narrow and busy, so step aside rather than eating in the flow of traffic. Use bins where available and carry your litter out if none is at hand. Confirm prices before ordering; no price or vendor name is verified here.'
          ]
        }
      ],
      faqs: [
        ['Is street food near Delhi Gate safe to eat?', 'No specific vendor has been assessed here. Choose busy stalls serving freshly cooked food and follow ordinary travel hygiene precautions.'],
        ['What should I avoid?', 'If you are sensitive to new foods, be cautious with uncooked garnishes, ice and anything that has been standing a long time.'],
        ['How much do snacks cost?', 'No snack price has been verified for this guide. Confirm at the stall before ordering.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کے ارد گرد بازار کے کھانے: اقسام اور مناسب احتیاط',
      description:
        'اندرون لاہور میں عام بازاری نمکین کھانوں کی اقسام اور دہلی گیٹ کے قریب چلتے پھرتے کھانے کے لیے غیر مبالغہ آمیز عملی احتیاطیں۔',
      kicker: 'بازاری کھانے',
      h1: 'دہلی گیٹ کے ارد گرد بازاری کھانے',
      lead:
        'اندرون شہر کی واک میں بازاری کھانے بھی تجربے کا حصہ ہیں۔ یہ صفحہ عام اقسام اور مناسب احتیاط بتاتا ہے، بغیر کسی دکاندار کا نام یا قیمت دیے۔',
      sections: [
        {
          h: 'عام طور پر کیا نظر آتا ہے',
          bullets: [
            'سموسہ اور پکوڑہ جیسے تلے ہوئے کھانے، جو اکثر موسم کے ساتھ بدلتے ہیں۔',
            'بازار کی گلیوں میں مٹھائیاں اور حلوہ نما تیاریاں۔',
            'چاٹ نما نمکین آمیزے اور روٹیاں۔',
            'ان کے ساتھ چائے اور لسی۔'
          ]
        },
        {
          h: 'مناسب احتیاط',
          p: [
            'جہاں گاہکوں کا مسلسل آنا ہو اور کھانا آپ کے سامنے پک یا تیار ہو، وہی چنیں۔ اگر طبیعت حساس ہو تو بغیر پکائی تزئین اور نامعلوم برف سے پرہیز کریں، اور کھانے سے پہلے ہاتھ دھوئیں یا صاف کریں۔ یہ عام سفری احتیاطیں ہیں، کسی دکاندار کا طبی جائزہ نہیں۔'
          ]
        },
        {
          h: 'چلتے ہوئے کھانا',
          p: [
            'گلیاں تنگ اور مصروف ہیں، اس لیے آمدورفت کے بیچ کھڑے ہونے کی بجائے ایک طرف ہٹ جائیں۔ کوڑا دان موجود ہو تو استعمال کریں، ورنہ اپنا کوڑا ساتھ لے جائیں۔ آرڈر سے پہلے قیمت معلوم کریں؛ یہاں کوئی قیمت یا دکاندار کا نام تصدیق شدہ نہیں۔'
          ]
        }
      ],
      faqs: [
        ['کیا دہلی گیٹ کے قریب بازاری کھانا محفوظ ہے؟', 'یہاں کسی مخصوص دکاندار کا جائزہ نہیں لیا گیا۔ مصروف اور تازہ پکائی والی جگہ چنیں اور عام سفری صفائی کے اصول اپنائیں۔'],
        ['کن چیزوں سے پرہیز کریں؟', 'اگر نئے کھانوں سے طبیعت حساس ہو تو بغیر پکائی تزئین، نامعلوم برف اور دیر سے رکھی چیزوں سے محتاط رہیں۔'],
        ['بازاری کھانوں کی قیمت کیا ہے؟', 'اس رہنما صفحے کے لیے کوئی قیمت تصدیق شدہ نہیں۔ آرڈر سے پہلے خود پوچھیں۔']
      ]
    }
  },
  {
    slug: 'restaurants',
    group: 'food',
    phase: 'P2',
    related: ['food-near-delhi-gate', 'street-food', 'tea-and-chai', 'half-day-itinerary', 'nearby/lahore-fort'],
    en: {
      title: 'Restaurants Near Delhi Gate: Comparing Conditions, Not Names',
      description:
        'How to compare sit-down eating options around Delhi Gate by seating, timing, group size and access — without invented venue names, ratings or opening hours.',
      kicker: 'Sit-down meals',
      h1: 'Restaurants near Delhi Gate — what to compare',
      lead:
        'Rather than a list of named restaurants that may have closed, this page gives the criteria that actually matter when choosing a sit-down meal around a busy historic quarter.',
      sections: [
        {
          h: 'The conditions worth comparing',
          bullets: [
            'Seating capacity and whether your whole group can sit together.',
            'Whether the kitchen is operating at the hour you arrive.',
            'Shade, ventilation or indoor cooling in hot weather.',
            'Step-free entry, toilets and space for a pram, if relevant.',
            'How the stop fits the remaining walking route and daylight.'
          ]
        },
        {
          h: 'Location trade-offs',
          p: [
            'A meal close to the gate keeps a short visit short. If you are walking the full length towards Lahore Fort, the range of sit-down options changes, but so does the distance back to your pick-up point. No specific restaurant, Fort Road venue or price has been verified here.'
          ]
        },
        {
          h: 'Confirming on the day',
          p: [
            'Check the current map listing, phone ahead where a number is available, and confirm prices and seating before committing. Treat any undated recommendation as out of date. This is an independent guide; it does not take bookings or recommend businesses.'
          ]
        }
      ],
      faqs: [
        ['Can you recommend a specific restaurant?', 'No. This guide does not name or rate businesses, and no venue’s current opening status has been verified.'],
        ['Are restaurants near the gate open late?', 'No opening hours have been verified here. Check the current listing for the venue you choose.'],
        ['Is a sit-down meal realistic in a one-hour visit?', 'Usually not. A sit-down meal fits better into a half-day or full-day itinerary.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کے قریب ریستوران: نام نہیں، حالات کا موازنہ',
      description:
        'دہلی گیٹ کے ارد گرد بیٹھ کر کھانے کی جگہوں کا نشست، وقت، گروپ اور رسائی کے لحاظ سے موازنہ — بغیر من گھڑت ناموں، درجہ بندی یا اوقات کے۔',
      kicker: 'بیٹھ کر کھانا',
      h1: 'دہلی گیٹ کے قریب ریستوران — کیا موازنہ کریں',
      lead:
        'بند ہو چکی جگہوں کی فہرست دینے کی بجائے یہ صفحہ وہ معیار بتاتا ہے جو ایک مصروف تاریخی محلے میں بیٹھ کر کھانے کی جگہ چنتے وقت اصل میں اہم ہوتے ہیں۔',
      sections: [
        {
          h: 'قابلِ موازنہ باتیں',
          bullets: [
            'نشستوں کی گنجائش اور آپ کا پورا گروپ ایک ساتھ بیٹھ سکتا ہے یا نہیں۔',
            'جس وقت پہنچیں اس وقت باورچی خانہ چل رہا ہے یا نہیں۔',
            'گرمی میں سایہ، ہوا کی آمدورفت یا اندرونی ٹھنڈک۔',
            'اگر ضرورت ہو تو بغیر سیڑھی داخلہ، بیت الخلا اور بچوں کی گاڑی کی جگہ۔',
            'یہ وقفہ باقی پیدل راستے اور دن کی روشنی کے ساتھ کیسے میل کھاتا ہے۔'
          ]
        },
        {
          h: 'مقام کا انتخاب',
          p: [
            'دروازے کے قریب کھانا مختصر دورے کو مختصر رکھتا ہے۔ لاہور قلعہ تک پوری لمبائی چلنے پر بیٹھنے کے اختیار بدلتے ہیں، مگر واپسی کی جگہ کا فاصلہ بھی بڑھ جاتا ہے۔ یہاں کسی مخصوص ریستوران، فورٹ روڈ کی جگہ یا قیمت کی تصدیق نہیں۔'
          ]
        },
        {
          h: 'اسی دن تصدیق',
          p: [
            'موجودہ نقشے کا اندراج دیکھیں، نمبر دستیاب ہو تو پہلے فون کریں، اور طے کرنے سے پہلے قیمتیں اور نشستیں معلوم کریں۔ بغیر تاریخ کی کسی سفارش کو پرانا سمجھیں۔ یہ ایک آزاد رہنما صفحہ ہے؛ یہ بکنگ نہیں لیتا اور کاروبار کی سفارش نہیں کرتا۔'
          ]
        }
      ],
      faqs: [
        ['کیا کوئی مخصوص ریستوران بتا سکتے ہیں؟', 'نہیں۔ یہ رہنما صفحہ کاروبار کے نام یا درجے نہیں دیتا، اور کسی جگہ کے موجودہ کھلنے کی تصدیق نہیں ہوئی۔'],
        ['کیا دروازے کے قریب ریستوران دیر تک کھلے رہتے ہیں؟', 'یہاں کوئی اوقات تصدیق شدہ نہیں۔ جس جگہ کو چنیں اس کا موجودہ اندراج دیکھیں۔'],
        ['کیا ایک گھنٹے کے دورے میں بیٹھ کر کھانا ممکن ہے؟', 'عموماً نہیں۔ یہ آدھے یا پورے دن کے منصوبے میں بہتر سماتا ہے۔']
      ]
    }
  },
  {
    slug: 'akbari-mandi-shopping',
    group: 'food',
    phase: 'P2',
    related: ['nearby/akbari-mandi', 'traditional-bazaars', 'souvenirs-and-handicrafts', 'visitor-tips', 'location'],
    en: {
      title: 'Akbari Mandi Shopping Guide: A Wholesale Market, Not a Souvenir Stop',
      description:
        'What shopping in Akbari Mandi actually means: wholesale trade, bulk quantities and practical buying advice, distinct from craft and souvenir shopping.',
      kicker: 'Shopping',
      h1: 'Shopping in Akbari Mandi',
      lead:
        'Akbari Mandi beside Delhi Gate is a working wholesale district. Shopping here is a different activity from buying souvenirs, and this guide keeps the distinction clear.',
      sections: [
        {
          h: 'What is traded',
          p: [
            'The area is associated with wholesale goods including grain and spices. Transactions are typically about bulk quantities, trade packaging and delivery, not individually wrapped gifts. Do not expect a tourist-oriented display or fixed demonstration schedule.'
          ]
        },
        {
          h: 'If you do want to buy',
          bullets: [
            'Ask whether a shop sells retail quantities at all before choosing.',
            'Confirm the price, weight and packaging before paying.',
            'Check food-item freshness and storage conditions yourself.',
            'Ask about carrying or delivery rather than assuming you can take bulk goods on a walk.'
          ]
        },
        {
          h: 'Where to go instead for souvenirs',
          p: [
            'For crafts, gifts and small keepsakes, look to the traditional bazaar streets of the Walled City instead; that is covered in the separate souvenirs and handicrafts guide. No shop name, price or opening hour in either area has been verified here.'
          ]
        }
      ],
      faqs: [
        ['Can tourists buy small quantities in Akbari Mandi?', 'It is a wholesale district; whether a shop sells retail quantities varies. Ask before choosing.'],
        ['Is it a good place for souvenirs?', 'Not generally. Souvenirs and crafts belong to the bazaar streets, not the wholesale trade area.'],
        ['Are shops open all day?', 'No timetable has been verified here. Trade follows business and delivery patterns; check locally.']
      ]
    },
    ur: {
      title: 'اکبری منڈی خریداری رہنما: یادگاری بازار نہیں، تھوک منڈی',
      description:
        'اکبری منڈی میں خریداری کا اصل مطلب: تھوک تجارت، بڑی مقدار اور عملی مشورے، جو دستکاری اور یادگاری اشیا کی خریداری سے الگ ہے۔',
      kicker: 'خریداری',
      h1: 'اکبری منڈی میں خریداری',
      lead:
        'دہلی گیٹ کے ساتھ اکبری منڈی ایک فعال تھوک تجارت کا علاقہ ہے۔ یہاں خریداری یادگاری اشیا لینے سے مختلف سرگرمی ہے، اور اس رہنما صفحے میں یہ فرق واضح رکھا گیا ہے۔',
      sections: [
        {
          h: 'یہاں کیا خرید و فروخت ہوتی ہے',
          p: [
            'یہ علاقہ غلہ اور مصالحوں سمیت تھوک سامان سے وابستہ ہے۔ لین دین عموماً بڑی مقدار، تجارتی پیکنگ اور ترسیل کے گرد گھومتا ہے، انفرادی طور پر لپٹے تحفوں کے گرد نہیں۔ سیاحوں کے لیے سجی ہوئی نمائش یا مقررہ مظاہرے کی توقع نہ رکھیں۔'
          ]
        },
        {
          h: 'اگر خریدنا ہی چاہیں',
          bullets: [
            'چننے سے پہلے پوچھیں کہ دکان خوردہ مقدار میں بھی بیچتی ہے یا نہیں۔',
            'ادائیگی سے پہلے قیمت، وزن اور پیکنگ طے کریں۔',
            'کھانے کی اشیا کی تازگی اور رکھ رکھاؤ خود دیکھیں۔',
            'پیدل دورے میں بڑا سامان اٹھانا فرض نہ کریں؛ اٹھانے یا ترسیل کے بارے میں پوچھیں۔'
          ]
        },
        {
          h: 'یادگاری اشیا کہاں سے لیں',
          p: [
            'دستکاری، تحفے اور چھوٹی یادگاری چیزوں کے لیے اندرون شہر کی روایتی بازاری سڑکیں دیکھیں، جن کا الگ صفحہ ہے۔ دونوں علاقوں میں کسی دکان کے نام، قیمت یا اوقات کی یہاں تصدیق نہیں ہوئی۔'
          ]
        }
      ],
      faqs: [
        ['کیا سیاح اکبری منڈی سے تھوڑی مقدار خرید سکتے ہیں؟', 'یہ تھوک منڈی ہے؛ خوردہ فروخت ہر دکان پر مختلف ہو سکتی ہے۔ پہلے پوچھ لیں۔'],
        ['کیا یہ یادگاری اشیا کے لیے اچھی جگہ ہے؟', 'عام طور پر نہیں۔ یادگاری اشیا اور دستکاری بازار کی سڑکوں کا معاملہ ہے، تھوک علاقے کا نہیں۔'],
        ['کیا دکانیں سارا دن کھلی رہتی ہیں؟', 'یہاں کوئی شیڈول تصدیق شدہ نہیں۔ کاروبار ترسیل کے اوقات کے ساتھ چلتا ہے؛ مقامی طور پر معلوم کریں۔']
      ]
    }
  },
  {
    slug: 'traditional-bazaars',
    group: 'food',
    phase: 'P2',
    related: ['souvenirs-and-handicrafts', 'akbari-mandi-shopping', 'nearby/chowk-wazir-khan', 'self-guided-walking-tour', 'nearby/shahi-guzargah'],
    en: {
      title: 'Traditional Bazaars of the Walled City: A Walking Orientation',
      description:
        'How Lahore’s old-city bazaars are organised by trade and street, and how to walk them from Delhi Gate without a fabricated shop list.',
      kicker: 'Bazaars',
      h1: 'Traditional bazaars of the Walled City',
      lead:
        'The bazaars inside Delhi Gate are not one market. They are a chain of streets and small squares, historically grouped by trade, that you experience by walking rather than by ticking off a list of shops.',
      sections: [
        {
          h: 'A street-based structure',
          p: [
            'Old-city bazaars typically cluster related trades along particular lanes, with a chowk acting as a junction. The Royal Trail from Delhi Gate towards Chowk Wazir Khan is the clearest example of this layered pattern: gate, bathhouse, square and mosque in one sequence.'
          ]
        },
        {
          h: 'Walking them well',
          bullets: [
            'Follow the sequence of streets rather than crossing back and forth.',
            'Expect delivery carts and narrow passages; step aside for residents.',
            'Treat any shop list, price or "must-buy" claim found elsewhere as time-sensitive.',
            'Photograph façades and details with consent, not people at close range.'
          ]
        },
        {
          h: 'What is deliberately absent here',
          p: [
            'No named bazaar business, fixed market hour, price or rating is published on this page, because none has been verified. For wholesale trade specifically, see the Akbari Mandi guide; for gifts and crafts, see the souvenirs guide.'
          ]
        }
      ],
      faqs: [
        ['Are the Walled City bazaars one single market?', 'No. They are a chain of streets and small squares, historically grouped by trade.'],
        ['What are the opening hours of the bazaars?', 'No verified timetable is published here. Patterns follow trade and deliveries; check on the day.'],
        ['Can I combine the bazaars with the Royal Trail?', 'Yes. The gate-to-Chowk Wazir Khan sequence is a natural short walk, provided you confirm access to the interiors separately.']
      ]
    },
    ur: {
      title: 'اندرون شہر کے روایتی بازار: پیدل چلنے کا تعارف',
      description:
        'لاہور کے پرانے شہر کے بازار پیشے اور گلی کے حساب سے کیسے بٹے ہیں، اور دہلی گیٹ سے انہیں من گھڑت دکانوں کی فہرست کے بغیر کیسے دیکھیں۔',
      kicker: 'بازار',
      h1: 'اندرون شہر کے روایتی بازار',
      lead:
        'دہلی گیٹ کے اندر کے بازار کوئی ایک منڈی نہیں۔ یہ گلیوں اور چھوٹے چوکوں کا سلسلہ ہیں، جو تاریخی طور پر پیشوں کے حساب سے بٹے ہیں اور دکانوں کی فہرست پوری کرنے کی بجائے چل کر دیکھے جاتے ہیں۔',
      sections: [
        {
          h: 'گلیوں پر مبنی ساخت',
          p: [
            'پرانے شہر کے بازار عموماً متعلقہ پیشوں کو مخصوص گلیوں میں سمیٹتے ہیں، اور چوک ان کا سنگم ہوتا ہے۔ دہلی گیٹ سے چوک وزیر خان تک شاہی گزرگاہ اسی تہہ دار ساخت کی واضح مثال ہے: ایک ہی ترتیب میں دروازہ، حمام، چوک اور مسجد۔'
          ]
        },
        {
          h: 'اچھی طرح چلنا',
          bullets: [
            'آگے پیچھے کاٹنے کی بجائے گلیوں کی ترتیب کے ساتھ چلیں۔',
            'ترسیل کی ریڑھیاں اور تنگ راستے عام ہیں؛ مقامی باشندوں کو جگہ دیں۔',
            'کہیں ملی دکانوں کی فہرست، قیمت یا «لازمی خرید» کے دعوے کو عارضی سمجھیں۔',
            'لوگوں کی قریب سے نہیں، رخوں اور تفصیلات کی اجازت کے ساتھ تصویر لیں۔'
          ]
        },
        {
          h: 'یہاں جان بوجھ کر کیا نہیں ہے',
          p: [
            'اس صفحے پر کسی بازاری دکان کا نام، مقررہ وقت، قیمت یا درجہ بندی نہیں، کیونکہ ان میں سے کوئی تصدیق شدہ نہیں۔ تھوک تجارت کے لیے اکبری منڈی والا صفحہ، اور تحفوں و دستکاری کے لیے یادگاری اشیا والا صفحہ دیکھیں۔'
          ]
        }
      ],
      faqs: [
        ['کیا اندرون شہر کے بازار ایک ہی منڈی ہیں؟', 'نہیں۔ یہ گلیوں اور چھوٹے چوکوں کا سلسلہ ہیں، جو تاریخی طور پر پیشوں کے حساب سے بٹے ہیں۔'],
        ['بازاروں کے کھلنے کے اوقات کیا ہیں؟', 'یہاں کوئی تصدیق شدہ شیڈول نہیں۔ انداز تجارت اور ترسیل کے ساتھ چلتا ہے؛ اسی دن دیکھیں۔'],
        ['کیا بازاروں کو شاہی گزرگاہ کے ساتھ جوڑا جا سکتا ہے؟', 'ہاں۔ دروازے سے چوک وزیر خان تک کی ترتیب فطری مختصر واک ہے، بشرطیکہ اندرونی مقامات کی رسائی الگ تصدیق کریں۔']
      ]
    }
  },
  {
    slug: 'souvenirs-and-handicrafts',
    group: 'food',
    phase: 'P2',
    related: ['traditional-bazaars', 'akbari-mandi-shopping', 'nearby/chowk-wazir-khan', 'visitor-tips', 'heritage-conservation'],
    en: {
      title: 'Souvenirs and Handicrafts in Lahore’s Walled City',
      description:
        'A cautious guide to craft and souvenir shopping near Delhi Gate: what kinds of objects to look for, how to check quality, and why no shop names are listed.',
      kicker: 'Souvenirs',
      h1: 'Souvenirs and handicrafts in the old city',
      lead:
        'Souvenir shopping here works best as part of a bazaar walk rather than a fixed shopping list. This page covers categories and checks, without naming businesses or quoting prices.',
      sections: [
        {
          h: 'Categories worth looking for',
          bullets: [
            'Tile- and calligraphy-inspired decorative objects that echo the old city’s ornament.',
            'Textiles, embroidered pieces and small leather or metal work.',
            'Printed or hand-made paper goods and locally produced sweets.',
            'These are categories, not endorsements of any particular maker or shop.'
          ]
        },
        {
          h: 'Checking before you buy',
          p: [
            'Inspect the object in daylight, ask what it is made of, and confirm the total price and any packaging before paying. If a claim about age, provenance or "antique" status is made, treat it as unverifiable in a casual purchase and do not pay a premium on that basis.'
          ]
        },
        {
          h: 'Responsible buying',
          p: [
            'Buying a small item from a working bazaar supports local trade, but avoid objects that appear to be removed historic fabric, tiles or architectural fragments. Do not photograph shopkeepers or their goods at close range without permission.'
          ]
        }
      ],
      faqs: [
        ['Which shop should I visit for handicrafts?', 'No named shop or its current status has been verified here. Explore the bazaar streets around Chowk Wazir Khan and decide in person.'],
        ['Are antique objects sold near the gate?', 'Claims about age or provenance cannot be verified in a casual purchase. Do not pay a premium on an unverifiable claim.'],
        ['How much should I budget for souvenirs?', 'No price has been verified for this guide. Confirm the total before paying.']
      ]
    },
    ur: {
      title: 'اندرون لاہور میں یادگاری اشیا اور دستکاری',
      description:
        'دہلی گیٹ کے قریب دستکاری اور یادگاری اشیا کی محتاط رہنمائی: کن چیزوں پر نظر رکھیں، معیار کیسے جانچیں، اور دکانوں کے نام کیوں درج نہیں۔',
      kicker: 'یادگاری اشیا',
      h1: 'پرانے شہر میں یادگاری اشیا اور دستکاری',
      lead:
        'یہاں یادگاری خریداری کسی مقررہ فہرست کی بجائے بازار کی واک کے ساتھ بہتر چلتی ہے۔ یہ صفحہ اقسام اور جانچ بتاتا ہے، بغیر کاروبار کے نام یا قیمت کے۔',
      sections: [
        {
          h: 'کن چیزوں پر نظر رکھیں',
          bullets: [
            'ٹائل اور خطاطی سے متاثر تزئینی اشیا، جو پرانے شہر کے نقش و نگار کی یاد دلاتی ہیں۔',
            'کپڑے، کشیدہ کاری کے ٹکڑے اور چھوٹا چمڑے یا دھات کا کام۔',
            'چھاپے یا ہاتھ سے بنے کاغذ کی اشیا اور مقامی مٹھائیاں۔',
            'یہ محض اقسام ہیں، کسی مخصوص کارخانہ دار یا دکان کی تائید نہیں۔'
          ]
        },
        {
          h: 'خریدنے سے پہلے جانچ',
          p: [
            'چیز کو دن کی روشنی میں دیکھیں، اس کا مواد پوچھیں، اور ادائیگی سے پہلے کل قیمت اور پیکنگ طے کریں۔ اگر عمر، اصل یا «قدیم» ہونے کا دعویٰ کیا جائے تو اسے عام خریداری میں ناقابلِ تصدیق سمجھیں اور اسی بنیاد پر زیادہ قیمت نہ دیں۔'
          ]
        },
        {
          h: 'ذمہ دار خریداری',
          p: [
            'فعال بازار سے چھوٹی چیز خریدنا مقامی تجارت کو سہارا دیتا ہے، مگر ایسی اشیا سے پرہیز کریں جو تاریخی عمارت سے اتاری گئی ساخت، ٹائل یا تعمیراتی ٹکڑے لگیں۔ دکانداروں یا ان کے سامان کی قریب سے تصویر بغیر اجازت نہ لیں۔'
          ]
        }
      ],
      faqs: [
        ['دستکاری کے لیے کون سی دکان جائیں؟', 'یہاں کسی مخصوص دکان یا اس کی موجودہ حالت کی تصدیق نہیں۔ چوک وزیر خان کے ارد گرد بازاری گلیاں دیکھیں اور خود فیصلہ کریں۔'],
        ['کیا دروازے کے قریب قدیم اشیا ملتی ہیں؟', 'عام خریداری میں عمر یا اصل کے دعوے کی تصدیق ممکن نہیں۔ ناقابلِ تصدیق دعوے پر زیادہ قیمت نہ دیں۔'],
        ['یادگاری اشیا کے لیے کتنا بجٹ رکھیں؟', 'اس رہنما صفحے کے لیے کوئی قیمت تصدیق شدہ نہیں۔ ادائیگی سے پہلے کل رقم طے کریں۔']
      ]
    }
  }
];
