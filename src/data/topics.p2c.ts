import type { Topic } from './topic-types';

/** Phase 3c — itineraries and self-guided routes (5 topics). */
export const TOPICS_P2C: Topic[] = [
  {
    slug: 'one-hour-itinerary',
    group: 'itineraries',
    phase: 'P2',
    related: ['two-hour-walking-tour', 'half-day-itinerary', 'location', 'nearby/shahi-hammam', 'self-guided-walking-tour'],
    en: {
      title: 'Delhi Gate in One Hour: A Short, Realistic Route',
      description:
        'A one-hour plan for Delhi Gate: start and end points, the short inward sequence, rest and water, weather alternatives and who it suits.',
      kicker: 'Short itinerary',
      h1: 'Delhi Gate in one hour',
      lead:
        'When time is tight, treat the gate as a short out-and-back walk rather than a monument tour. This plan keeps every interior optional and returns you to the same drop-off point.',
      sections: [
        {
          h: 'Start, end and sequence',
          bullets: [
            'Start: a legal drop-off on Circular Road outside the gate arch.',
            'Walk in through the arch and a short distance along the Royal Trail.',
            'Turn back before the group tires; end at the same agreed pick-up point.',
            'Use the Google Maps pin for the gate structure, not for parking or opening status.'
          ],
          p: [
            'No measured walking distance is published here. The site’s existing rough planning allowance is 20–40 minutes around the gate; one hour leaves time for a slow pace, a photograph and a short rest without committing to any interior.'
          ]
        },
        {
          h: 'Stops, rest and conditions',
          bullets: [
            'Optional: Shahi Hammam, only if its interior is confirmed open that day.',
            'Water, a hat and a rest step inside the lanes; no toilet or shaded rest point is verified.',
            'Prayer times and conservation barriers can change the route without notice.',
            'High heat: shorten the outdoor stretch. Rain or fog: keep to open streets and skip slippery lanes.'
          ]
        },
        {
          h: 'Who this suits',
          p: [
            'First-time visitors, cruise-style short stops, families with young children and anyone combining the gate with a separate appointment. It is not suitable if you want to see Wazir Khan Mosque, Lahore Fort or Badshahi Mosque properly — those belong to a longer plan.'
          ]
        }
      ],
      faqs: [
        ['Can I see Wazir Khan Mosque in one hour?', 'Only as an exterior orientation stop at best. Interior access, prayer times and site rules need separate confirmation; use the two-hour route if the mosque matters to you.'],
        ['Do I need a ticket for this route?', 'No operator-confirmed fee for the public passage has been verified here. Any interior you add has its own arrangements.'],
        ['Is the route step-free?', 'No end-to-end accessible route has been verified. Lanes are narrow, busy and sometimes uneven.']
      ]
    },
    ur: {
      title: 'ایک گھنٹے میں دہلی گیٹ: مختصر اور حقیقت پسند راستہ',
      description:
        'دہلی گیٹ کا ایک گھنٹے کا منصوبہ: آغاز و اختتام، مختصر اندرونی ترتیب، آرام و پانی، موسم کے متبادل اور یہ کس کے لیے موزوں ہے۔',
      kicker: 'مختصر منصوبہ',
      h1: 'ایک گھنٹے میں دہلی گیٹ',
      lead:
        'جب وقت کم ہو تو دروازے کو لمبی یادگاری سیر کی بجائے مختصر آگے پیچھے واک سمجھیں۔ یہ منصوبہ ہر اندرونی مقام کو اختیاری رکھتا ہے اور آپ کو اسی ڈراپ آف جگہ پر واپس لاتا ہے۔',
      sections: [
        {
          h: 'آغاز، اختتام اور ترتیب',
          bullets: [
            'آغاز: دروازے کے محراب کے باہر سرکلر روڈ پر قانونی ڈراپ آف۔',
            'محراب سے ہو کر شاہی گزرگاہ پر تھوڑی دور تک پیدل۔',
            'گروپ کے تھکنے سے پہلے واپس مڑیں؛ اختتام اسی طے شدہ جگہ پر۔',
            'نقشے کا نشان صرف دروازے کی عمارت کے لیے، پارکنگ یا کھلنے کی حالت کے لیے نہیں۔'
          ],
          p: [
            'یہاں کوئی ناپا ہوا پیدل فاصلہ درج نہیں۔ ویب سائٹ پر پہلے سے موجود موٹا اندازہ دروازے کے ارد گرد 20 سے 40 منٹ ہے؛ ایک گھنٹہ آہستہ رفتار، ایک تصویر اور مختصر آرام کے لیے کافی ہے، بغیر کسی اندرونی مقام کا پابند کیے۔'
          ]
        },
        {
          h: 'پڑاؤ، آرام اور حالات',
          bullets: [
            'اختیاری: شاہی حمام، صرف اگر اسی دن اس کا اندرونی حصہ کھلا تصدیق ہو۔',
            'پانی، ٹوپی اور گلیوں کے اندر آرام کا مختصر وقفہ؛ بیت الخلا یا سایہ دار جگہ کی تصدیق نہیں۔',
            'نماز کے اوقات اور بحالی کی رکاوٹیں بغیر اطلاع راستہ بدل سکتی ہیں۔',
            'شدید گرمی: کھلا حصہ مختصر کریں۔ بارش یا دھند: کھلی سڑکوں تک رہیں اور پھسلی گلیوں سے بچیں۔'
          ]
        },
        {
          h: 'یہ کس کے لیے ہے',
          p: [
            'پہلی بار آنے والے، مختصر وقت والے زائر، چھوٹے بچوں والے خاندان اور وہ لوگ جو دروازے کو کسی الگ پروگرام کے ساتھ جوڑ رہے ہیں۔ اگر وزیر خان مسجد، لاہور قلعہ یا بادشاہی مسجد ٹھیک سے دیکھنی ہو تو یہ منصوبہ کافی نہیں۔'
          ]
        }
      ],
      faqs: [
        ['کیا ایک گھنٹے میں وزیر خان مسجد دیکھی جا سکتی ہے؟', 'زیادہ سے زیادہ باہر سے سمت پہچاننے تک۔ اندرونی رسائی، نماز کے اوقات اور اصول الگ تصدیق چاہتے ہیں؛ مسجد مقصود ہو تو دو گھنٹے والا راستہ چنیں۔'],
        ['کیا اس راستے کے لیے ٹکٹ چاہیے؟', 'یہاں عام گزرگاہ کے لیے انتظامیہ سے تصدیق شدہ کوئی فیس درج نہیں۔ آپ کے شامل کیے گئے ہر اندرونی مقام کے الگ انتظامات ہیں۔'],
        ['کیا راستہ بغیر سیڑھی ہے؟', 'شروع سے آخر تک کسی قابلِ رسائی راستے کی تصدیق نہیں۔ گلیاں تنگ، مصروف اور کہیں ناہموار ہیں۔']
      ]
    }
  },
  {
    slug: 'half-day-itinerary',
    group: 'itineraries',
    phase: 'P2',
    related: ['two-hour-walking-tour', 'full-day-lahore-itinerary', 'food-near-delhi-gate', 'nearby/lahore-fort', 'self-guided-walking-tour'],
    en: {
      title: 'Half-Day Walled City Itinerary from Delhi Gate',
      description:
        'A half-day plan combining the gate, Royal Trail monuments, a food stop and a possible extension towards Lahore Fort, with realistic checks and contingencies.',
      kicker: 'Half-day itinerary',
      h1: 'A half-day in the Walled City',
      lead:
        'Half a day is enough to join the Delhi Gate cluster to a proper meal and, if access and energy allow, the longer walk towards the fort end of the old city. Every interior remains conditional on confirmation.',
      sections: [
        {
          h: 'A workable order',
          bullets: [
            'Start at the gate arch from a confirmed Circular Road drop-off.',
            'Shahi Hammam and the first stretch of the Royal Trail.',
            'Chowk Wazir Khan and Wazir Khan Mosque, with prayer-time flexibility.',
            'A food or tea rest stop in the bazaar streets.',
            'Optional continuation towards Lahore Fort, or a walk back to the original pick-up point.'
          ]
        },
        {
          h: 'Timing, distance and conditions',
          p: [
            'No measured distance or fixed duration is published here; the site’s existing rough planning allowance for a wider visit is 2–3 hours, to which a meal and the fort-side extension add more. Use a current map for the exact route and confirm a return pick-up: the two ends of the old city are far apart.'
          ]
        },
        {
          h: 'Contingencies and suitability',
          bullets: [
            'Confirm each interior separately; a closed building should not cancel the walk.',
            'Carry water and plan rest stops; no toilets or shaded seating are verified.',
            'Heat: front-load the walking and use a longer seated break. Rain or fog: prioritise open interiors and shorten the fort-side extension.',
            'Suits active walkers and first-time visitors with a flexible schedule; less suitable for anyone needing a verified step-free route.'
          ]
        }
      ],
      faqs: [
        ['Does a half-day include Lahore Fort and Badshahi Mosque?', 'It can reach them, but only with a confirmed route and enough time. Treat them as optional rather than guaranteed.'],
        ['Where should the route end?', 'Either back at the original drop-off or at a separately agreed pick-up near the fort. Decide before you start, because the two ends are far apart.'],
        ['Is a meal included?', 'A rest stop is built into the plan, but no venue, price or opening hour is recommended here.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ سے اندرون شہر کا آدھے دن کا منصوبہ',
      description:
        'آدھے دن میں دروازہ، شاہی گزرگاہ کی یادگاریں، کھانے کا وقفہ اور ممکنہ طور پر لاہور قلعہ کی طرف لمبی واک، حقیقت پسند جانچوں اور متبادل کے ساتھ۔',
      kicker: 'آدھے دن کا منصوبہ',
      h1: 'اندرون شہر میں آدھا دن',
      lead:
        'آدھا دن دہلی گیٹ والے جھرمٹ کو مناسب کھانے اور، اگر رسائی اور توانائی اجازت دے تو، پرانے شہر کے قلعہ والے سرے تک لمبی واک سے جوڑنے کے لیے کافی ہے۔ ہر اندرونی مقام تصدیق پر مشروط ہے۔',
      sections: [
        {
          h: 'قابلِ عمل ترتیب',
          bullets: [
            'سرکلر روڈ پر تصدیق شدہ ڈراپ آف سے دروازے کے محراب پر آغاز۔',
            'شاہی حمام اور شاہی گزرگاہ کا پہلا حصہ۔',
            'چوک وزیر خان اور وزیر خان مسجد، نماز کے اوقات کے لیے لچک کے ساتھ۔',
            'بازار کی گلیوں میں کھانے یا چائے کا وقفہ۔',
            'اختیاری آگے بڑھنا لاہور قلعہ کی طرف، یا اصل ڈراپ آف جگہ پر واپسی۔'
          ]
        },
        {
          h: 'وقت، فاصلہ اور حالات',
          p: [
            'یہاں کوئی ناپا فاصلہ یا مقررہ دورانیہ درج نہیں؛ ویب سائٹ پر وسیع دورے کے لیے موجود موٹا اندازہ 2 سے 3 گھنٹے ہے، جس میں کھانا اور قلعہ والی توسیع اضافہ کرتی ہے۔ اصل راستے کے لیے موجودہ نقشہ استعمال کریں اور واپسی کی جگہ طے کریں: پرانے شہر کے دونوں سرے ایک دوسرے سے دور ہیں۔'
          ]
        },
        {
          h: 'متبادل اور مناسبت',
          bullets: [
            'ہر اندرونی مقام الگ تصدیق کریں؛ کسی عمارت کی بندش پوری واک منسوخ نہ کرے۔',
            'پانی ساتھ رکھیں اور آرام کے وقفے رکھیں؛ بیت الخلا یا سایہ دار نشستوں کی تصدیق نہیں۔',
            'گرمی: واک پہلے رکھیں اور لمبا بیٹھنے کا وقفہ دیں۔ بارش یا دھند: کھلے اندرونی مقامات کو ترجیح دیں اور قلعہ والی توسیع مختصر کریں۔',
            'یہ لچکدار شیڈول والے فعال پیدل چلنے والوں کے لیے ہے؛ تصدیق شدہ بغیر سیڑھی راستہ چاہنے والوں کے لیے کم موزوں ہے۔'
          ]
        }
      ],
      faqs: [
        ['کیا آدھے دن میں لاہور قلعہ اور بادشاہی مسجد آ جاتے ہیں؟', 'تصدیق شدہ راستے اور مناسب وقت کے ساتھ پہنچا جا سکتا ہے، مگر انہیں یقینی نہیں بلکہ اختیاری سمجھیں۔'],
        ['راستہ کہاں ختم ہو؟', 'یا تو اصل ڈراپ آف پر واپس، یا قلعہ کے قریب الگ طے شدہ جگہ۔ شروع سے پہلے طے کریں، کیونکہ دونوں سرے دور ہیں۔'],
        ['کیا کھانا منصوبے میں شامل ہے؟', 'آرام کا وقفہ شامل ہے، مگر یہاں کسی جگہ، قیمت یا وقت کی سفارش نہیں۔']
      ]
    }
  },
  {
    slug: 'full-day-lahore-itinerary',
    group: 'itineraries',
    phase: 'P2',
    related: ['half-day-itinerary', 'delhi-gate-to-lahore-fort', 'nearby/lahore-fort', 'nearby/badshahi-mosque', 'food-near-delhi-gate'],
    en: {
      title: 'Full-Day Lahore Heritage Itinerary from Delhi Gate',
      description:
        'A full-day framework linking the Delhi Gate cluster with the fort, Badshahi Mosque and other old-city monuments, with access checks built in.',
      kicker: 'Full-day itinerary',
      h1: 'A full day of Lahore heritage',
      lead:
        'A full day allows the eastern gate cluster and the western fort complex to be seen as one city, with time for rest, meals and the inevitable changes that come with separately managed monuments.',
      sections: [
        {
          h: 'A loose three-part structure',
          bullets: [
            'Morning: Delhi Gate, Shahi Hammam, Chowk Wazir Khan and Wazir Khan Mosque.',
            'Midday: a longer seated meal and rest, then the walk or ride towards the fort end.',
            'Afternoon: Lahore Fort and Badshahi Mosque, plus Roshnai Gate if time and access allow.'
          ],
          p: [
            'Start at a confirmed Circular Road drop-off and finish near the fort, with a separately agreed pick-up. No measured distance, travel time or transport fare between the two ends is published here; use a current map and a licensed local operator.'
          ]
        },
        {
          h: 'What can change the day',
          bullets: [
            'Each monument has its own hours, admission terms, closures and prayer-time pauses.',
            'Conservation work and processions can alter circulation without notice.',
            'Heat, monsoon rain and winter fog or air-quality warnings change the sensible order.',
            'No night-time access or safety assessment has been verified for this guide.'
          ]
        },
        {
          h: 'Rest, water and suitability',
          p: [
            'Plan at least two rest stops, carry water, and do not count on toilets, ATMs or shaded seating — none has been verified. This suits active walkers comfortable with a long, busy urban day; a shorter half-day plan is kinder for families and anyone needing confirmed step-free routes.'
          ]
        }
      ],
      faqs: [
        ['Can I cover every Walled City monument in one day?', 'Not reliably. Access, prayer times and the distance between the two ends make a selective plan more realistic than a complete checklist.'],
        ['Do I need to book anything?', 'Organised walks and some interiors may need separate booking or tickets. Confirm each with its operator; no arrangement is verified here.'],
        ['Where does the day end?', 'Plan a pick-up near Lahore Fort. The return to Delhi Gate is a long way back through the old city.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ سے لاہور ورثے کا پورے دن کا منصوبہ',
      description:
        'پورے دن کا ڈھانچہ جو دہلی گیٹ والے جھرمٹ کو قلعہ، بادشاہی مسجد اور اندرون شہر کی دیگر یادگاروں سے جوڑتا ہے، رسائی کی جانچ کے ساتھ۔',
      kicker: 'پورے دن کا منصوبہ',
      h1: 'لاہور کے ورثے میں ایک پورا دن',
      lead:
        'پورا دن مشرقی دروازے کے جھرمٹ اور مغربی قلعہ کے احاطے کو ایک ہی شہر کے طور پر دیکھنے کا موقع دیتا ہے، اور آرام، کھانے اور الگ الگ منظم یادگاروں کی تبدیلیوں کے لیے بھی وقت رکھتا ہے۔',
      sections: [
        {
          h: 'تین حصوں کا لچکدار ڈھانچہ',
          bullets: [
            'صبح: دہلی گیٹ، شاہی حمام، چوک وزیر خان اور وزیر خان مسجد۔',
            'دوپہر: لمبا بیٹھ کر کھانا اور آرام، پھر قلعہ والے سرے کی طرف پیدل یا سواری۔',
            'سہ پہر: لاہور قلعہ اور بادشاہی مسجد، وقت اور رسائی اجازت دے تو روشنائی دروازہ بھی۔'
          ],
          p: [
            'آغاز سرکلر روڈ کی تصدیق شدہ ڈراپ آف جگہ سے اور اختتام قلعہ کے قریب الگ طے شدہ پک اپ پر کریں۔ دونوں سروں کے درمیان کوئی ناپا فاصلہ، دورانیہ یا کرایہ یہاں درج نہیں؛ موجودہ نقشہ اور کوئی مجاز مقامی آپریٹر استعمال کریں۔'
          ]
        },
        {
          h: 'دن کو بدلنے والی باتیں',
          bullets: [
            'ہر یادگار کے اپنے اوقات، داخلے کی شرائط، بندشیں اور نماز کے وقفے ہیں۔',
            'بحالی کا کام اور جلوس بغیر اطلاع آمدورفت بدل سکتے ہیں۔',
            'گرمی، مون سون کی بارش اور سردی کی دھند یا فضائی تنبیہات مناسب ترتیب بدل دیتی ہیں۔',
            'اس رہنما صفحے نے رات کی رسائی یا حفاظت کی تصدیق نہیں کی۔'
          ]
        },
        {
          h: 'آرام، پانی اور مناسبت',
          p: [
            'کم از کم دو آرام کے وقفے رکھیں، پانی ساتھ رکھیں، اور بیت الخلا، اے ٹی ایم یا سایہ دار نشستوں پر انحصار نہ کریں — ان میں سے کوئی تصدیق شدہ نہیں۔ یہ لمبے، مصروف شہری دن کے عادی فعال زائرین کے لیے ہے؛ خاندانوں اور تصدیق شدہ بغیر سیڑھی راستہ چاہنے والوں کے لیے آدھے دن کا منصوبہ بہتر ہے۔'
          ]
        }
      ],
      faqs: [
        ['کیا ایک دن میں اندرون شہر کی ہر یادگار دیکھی جا سکتی ہے؟', 'بھروسے سے نہیں۔ رسائی، نماز کے اوقات اور دونوں سروں کا فاصلہ مکمل فہرست کی بجائے منتخب منصوبے کو حقیقت پسند بناتے ہیں۔'],
        ['کیا کچھ بک کرانا ہوگا؟', 'منظم واک اور بعض اندرونی مقامات کے لیے الگ بکنگ یا ٹکٹ درکار ہو سکتے ہیں۔ ہر ایک کی اپنی انتظامیہ سے تصدیق کریں؛ یہاں کوئی انتظام تصدیق شدہ نہیں۔'],
        ['دن کہاں ختم ہو؟', 'لاہور قلعہ کے قریب پک اپ طے کریں۔ دہلی گیٹ تک واپسی اندرون شہر سے ایک لمبا راستہ ہے۔']
      ]
    }
  },
  {
    slug: 'delhi-gate-to-lahore-fort',
    group: 'itineraries',
    phase: 'P2',
    related: ['nearby/lahore-fort', 'nearby/badshahi-mosque', 'half-day-itinerary', 'full-day-lahore-itinerary', 'nearby/shahi-guzargah'],
    en: {
      title: 'Delhi Gate to Lahore Fort: Route, Stops and What to Confirm',
      description:
        'How to plan the connection from Delhi Gate to Lahore Fort across the Walled City: the sequence of stops, transport checks, rest points and realistic alternatives.',
      kicker: 'Point-to-point route',
      h1: 'From Delhi Gate to Lahore Fort',
      lead:
        'This is a point-to-point crossing of the old city, not a short stroll. It links the eastern gate cluster with the western fort and mosque complex, and it needs a confirmed route and a separate return plan.',
      sections: [
        {
          h: 'The sequence of stops',
          bullets: [
            'Delhi Gate arch and the first stretch of the Royal Trail.',
            'Shahi Hammam, Chowk Wazir Khan and Wazir Khan Mosque.',
            'The bazaar streets and, later, Sunehri Mosque in the wider old city.',
            'Lahore Fort and Badshahi Mosque near the western end.'
          ],
          p: [
            'Start at a legal Circular Road drop-off and finish near the fort. No measured walking distance, travel time, route number or fare is published here; use a current map and confirm the route with a licensed local operator.'
          ]
        },
        {
          h: 'Practical conditions',
          bullets: [
            'Confirm each interior separately; prayer times and conservation work change access.',
            'Carry water and plan rest stops — toilets and shaded seating are not verified.',
            'High heat: shorten the middle stretch or use a ride for part of it.',
            'Rain, fog or poor air quality: prioritise the interiors that are actually open.',
            'Agree a pick-up near the fort; walking back to the gate is a long return.'
          ]
        },
        {
          h: 'Who should take this route',
          p: [
            'It suits active walkers with a flexible half-day or full-day schedule who are comfortable with busy, uneven lanes. It is not suitable as an extension of a one-hour gate visit, nor for anyone needing a verified step-free route.'
          ]
        }
      ],
      faqs: [
        ['How long is the walk from Delhi Gate to Lahore Fort?', 'No verified walking distance or time is published here. It crosses the old city between its eastern and western ends; check a current map and local advice.'],
        ['Can I take public transport between them?', 'No route number or stop has been verified. Ask a licensed local operator about current options on your date.'],
        ['Is the fort ticket the same as the gate?', 'No shared ticket should be assumed. The fort has its own admission arrangements; confirm with the operator.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ سے لاہور قلعہ: راستہ، پڑاؤ اور تصدیق',
      description:
        'اندرون شہر کے اس پار دہلی گیٹ سے لاہور قلعہ تک کا رابطہ: پڑاؤ کی ترتیب، نقل و حمل کی جانچ، آرام کی جگہیں اور حقیقت پسند متبادل۔',
      kicker: 'ایک سرے سے دوسرے سرے تک',
      h1: 'دہلی گیٹ سے لاہور قلعہ تک',
      lead:
        'یہ پرانے شہر کا ایک سرے سے دوسرے سرے تک سفر ہے، مختصر ٹہلنا نہیں۔ یہ مشرقی دروازے کے جھرمٹ کو مغربی قلعہ اور مسجد کے احاطے سے جوڑتا ہے، اور تصدیق شدہ راستے اور الگ واپسی کے منصوبے کا متقاضی ہے۔',
      sections: [
        {
          h: 'پڑاؤ کی ترتیب',
          bullets: [
            'دہلی گیٹ کا محراب اور شاہی گزرگاہ کا پہلا حصہ۔',
            'شاہی حمام، چوک وزیر خان اور وزیر خان مسجد۔',
            'بازار کی گلیاں اور آگے چل کر پورے پرانے شہر میں سنہری مسجد۔',
            'مغربی سرے کے قریب لاہور قلعہ اور بادشاہی مسجد۔'
          ],
          p: [
            'آغاز سرکلر روڈ کی قانونی ڈراپ آف جگہ سے اور اختتام قلعہ کے قریب کریں۔ یہاں کوئی ناپا پیدل فاصلہ، دورانیہ، روٹ نمبر یا کرایہ درج نہیں؛ موجودہ نقشہ استعمال کریں اور راستہ کسی مجاز مقامی آپریٹر سے تصدیق کروائیں۔'
          ]
        },
        {
          h: 'عملی حالات',
          bullets: [
            'ہر اندرونی مقام الگ تصدیق کریں؛ نماز کے اوقات اور بحالی رسائی بدلتے ہیں۔',
            'پانی ساتھ رکھیں اور آرام کے وقفے رکھیں — بیت الخلا اور سایہ دار نشستیں تصدیق شدہ نہیں۔',
            'شدید گرمی: درمیانی حصہ مختصر کریں یا کچھ فاصلے کے لیے سواری لیں۔',
            'بارش، دھند یا خراب فضائی معیار: انہی اندرونی مقامات کو ترجیح دیں جو واقعی کھلے ہوں۔',
            'قلعہ کے قریب پک اپ طے کریں؛ دروازے تک پیدل واپسی لمبی ہے۔'
          ]
        },
        {
          h: 'یہ راستہ کس کے لیے ہے',
          p: [
            'یہ لچکدار آدھے یا پورے دن والے ان فعال زائرین کے لیے ہے جو مصروف، ناہموار گلیوں میں چلنے کے عادی ہوں۔ یہ ایک گھنٹے کے دورے کی توسیع نہیں، اور تصدیق شدہ بغیر سیڑھی راستہ چاہنے والوں کے لیے موزوں نہیں۔'
          ]
        }
      ],
      faqs: [
        ['دہلی گیٹ سے لاہور قلعہ تک پیدل کتنا فاصلہ ہے؟', 'یہاں کوئی تصدیق شدہ فاصلہ یا وقت درج نہیں۔ یہ پرانے شہر کے مشرقی اور مغربی سروں کے درمیان ہے؛ موجودہ نقشہ اور مقامی مشورہ دیکھیں۔'],
        ['کیا دونوں کے درمیان عوامی نقل و حمل ملتی ہے؟', 'کسی روٹ نمبر یا اسٹاپ کی تصدیق نہیں۔ اپنی تاریخ پر کسی مجاز مقامی آپریٹر سے موجودہ ذرائع پوچھیں۔'],
        ['کیا قلعے کا ٹکٹ دروازے والا ہی ہے؟', 'مشترک ٹکٹ فرض نہ کریں۔ قلعے کے داخلے کے اپنے انتظامات ہیں؛ انتظامیہ سے تصدیق کریں۔']
      ]
    }
  },
  {
    slug: 'self-guided-walking-tour',
    group: 'itineraries',
    phase: 'P2',
    related: ['two-hour-walking-tour', 'one-hour-itinerary', 'half-day-itinerary', 'nearby/shahi-guzargah', 'traditional-bazaars'],
    en: {
      title: 'Self-Guided Delhi Gate Walking Tour: Numbered Stops',
      description:
        'A self-guided route through Delhi Gate with numbered stops, a map reference, timing, rest and water, and the checks to make before setting out.',
      kicker: 'Self-guided route',
      h1: 'A self-guided walk from Delhi Gate',
      lead:
        'Use these numbered stops as a flexible framework rather than a timed audio tour. The route stays within the gate-to-mosque sequence and keeps every interior optional.',
      sections: [
        {
          h: 'The numbered stops',
          bullets: [
            '1. Outside the gate arch on Circular Road: orient yourself and agree the return point.',
            '2. The gate passage: note the brick arch and the change into the bazaar.',
            '3. Shahi Hammam: view the exterior, then enter only if access is confirmed.',
            '4. Royal Trail lanes: look at the street fabric and historic frontages.',
            '5. Chowk Wazir Khan: pause for the square and the framed view of the mosque.',
            '6. Wazir Khan Mosque: observe prayer times and site rules, then walk back.'
          ]
        },
        {
          h: 'Map, timing and conditions',
          p: [
            'Use the Google Maps pin for the gate structure and a current map for the onward lane sequence; the pin does not show parking, opening status or a step-free route. No measured distance is published here. The site’s rough planning allowance for a wider visit is 2–3 hours; a shorter out-and-back is fine if any stop is closed.'
          ]
        },
        {
          h: 'Rest, weather and people',
          bullets: [
            'Carry water and plan rest stops; toilets, ATMs and shaded seating are not verified.',
            'Confirm every interior separately; prayer times and conservation work can change the order.',
            'High heat: walk early and shorten the middle stops. Rain or fog: skip slippery lanes.',
            'Suits independent walkers and small groups; less suitable without a confirmed step-free route.'
          ]
        }
      ],
      faqs: [
        ['Do I need a guide or a booking?', 'No. This is an independent walking framework. Organised walks are separately booked activities with their own terms.'],
        ['How long does the self-guided route take?', 'No measured time is published here. Use the site’s rough 20–40 minutes around the gate or 2–3 hours for a wider visit, and adjust for closures and rest stops.'],
        ['Can I extend it to Lahore Fort?', 'Yes, but that becomes a point-to-point crossing of the old city with a separate return plan; see the dedicated route guide.']
      ]
    },
    ur: {
      title: 'دہلی گیٹ کی خود رہنما پیدل واک: نمبر وار پڑاؤ',
      description:
        'دہلی گیٹ سے نمبر وار پڑاؤ والی خود رہنما واک: نقشے کا حوالہ، وقت، آرام و پانی، اور نکلنے سے پہلے کی جانچیں۔',
      kicker: 'خود رہنما راستہ',
      h1: 'دہلی گیٹ سے خود رہنما پیدل واک',
      lead:
        'ان نمبر وار پڑاؤ کو وقت کی پابند آڈیو واک کی بجائے لچکدار ڈھانچے کے طور پر استعمال کریں۔ راستہ دروازے سے مسجد تک کی ترتیب میں رہتا ہے اور ہر اندرونی مقام اختیاری ہے۔',
      sections: [
        {
          h: 'نمبر وار پڑاؤ',
          bullets: [
            '۱۔ سرکلر روڈ پر محراب کے باہر: سمت پہچانیں اور واپسی کی جگہ طے کریں۔',
            '۲۔ دروازے کی گزرگاہ: اینٹوں کا محراب اور بازار میں داخلے کا بدلاؤ دیکھیں۔',
            '۳۔ شاہی حمام: باہر سے دیکھیں، اندر صرف تب جائیں جب رسائی تصدیق ہو۔',
            '۴۔ شاہی گزرگاہ کی گلیاں: گلی کی ساخت اور تاریخی رخ دیکھیں۔',
            '۵۔ چوک وزیر خان: چوک اور مسجد کے منظر کے لیے رکیں۔',
            '۶۔ وزیر خان مسجد: نماز کے اوقات اور اصول مان کر واپس چلیں۔'
          ]
        },
        {
          h: 'نقشہ، وقت اور حالات',
          p: [
            'دروازے کی عمارت کے لیے نقشے کا نشان اور آگے کی گلیوں کی ترتیب کے لیے موجودہ نقشہ استعمال کریں؛ یہ نشان پارکنگ، کھلنے کی حالت یا بغیر سیڑھی راستہ نہیں بتاتا۔ یہاں کوئی ناپا فاصلہ درج نہیں۔ ویب سائٹ کا وسیع دورے کے لیے موٹا اندازہ 2 سے 3 گھنٹے ہے؛ کوئی پڑاؤ بند ہو تو مختصر آگے پیچھے واک بھی ٹھیک ہے۔'
          ]
        },
        {
          h: 'آرام، موسم اور افراد',
          bullets: [
            'پانی ساتھ رکھیں اور آرام کے وقفے رکھیں؛ بیت الخلا، اے ٹی ایم اور سایہ دار نشستیں تصدیق شدہ نہیں۔',
            'ہر اندرونی مقام الگ تصدیق کریں؛ نماز کے اوقات اور بحالی ترتیب بدل سکتی ہے۔',
            'شدید گرمی: جلدی چلیں اور درمیانی پڑاؤ مختصر کریں۔ بارش یا دھند: پھسلی گلیوں سے بچیں۔',
            'یہ خود مختار زائرین اور چھوٹے گروہوں کے لیے ہے؛ تصدیق شدہ بغیر سیڑھی راستے کے بغیر کم موزوں ہے۔'
          ]
        }
      ],
      faqs: [
        ['کیا گائیڈ یا بکنگ ضروری ہے؟', 'نہیں۔ یہ ایک آزاد پیدل ڈھانچہ ہے۔ منظم واک الگ بکنگ والی سرگرمیاں ہیں جن کی اپنی شرائط ہیں۔'],
        ['خود رہنما راستے میں کتنا وقت لگتا ہے؟', 'یہاں کوئی ناپا وقت درج نہیں۔ دروازے کے ارد گرد 20 سے 40 منٹ یا وسیع دورے کے لیے 2 سے 3 گھنٹے کا موٹا اندازہ استعمال کریں اور بندش و آرام کے مطابق بدلیں۔'],
        ['کیا اسے لاہور قلعہ تک بڑھایا جا سکتا ہے؟', 'ہاں، مگر تب یہ پرانے شہر کا ایک سرے سے دوسرے سرے تک سفر بن جاتا ہے جس کے لیے الگ واپسی کا منصوبہ چاہیے؛ اس کا الگ صفحہ دیکھیں۔']
      ]
    }
  }
];
