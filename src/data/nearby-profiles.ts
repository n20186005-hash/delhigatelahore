// Additional visitor-facing details for the seven landmark pages. The existing
// topic sections and FAQs remain intact and are rendered after these sections.
export type NearbyProfile = {
  name: string; type: string; setting: string; highlights: string[];
  story: string; architecture: string; culture: string; experience: string;
  route: string[]; photos: string[]; guidance: string; stay: string;
  access: string; fee: string; transport: string; map: string;
};

const profiles: Record<string, NearbyProfile> = {
  'nearby/wazir-khan-mosque': {
    name: 'Wazir Khan Mosque', type: 'Historic Mughal mosque and active place of worship', setting: 'Inside Delhi Gate, along the Royal Trail, Lahore Walled City',
    highlights: ['Glazed tile mosaics and floral ornament', 'Frescoes, calligraphy and the entrance façade', 'The relationship between the mosque, chowk and surrounding bazaars'],
    story: 'Commissioned during the reign of Shah Jahan by Ilmuddin, known as Wazir Khan, the mosque is a defining monument of Mughal Lahore. Read its history together with the surrounding Royal Trail.',
    architecture: 'Look closely at the colourful kashi-kari tile decoration, painted surfaces, monumental gateway and courtyard composition. Conservation means some surfaces or areas may be protected from access.',
    culture: 'The mosque remains a place of prayer. Its religious function takes precedence over sightseeing, particularly during congregational prayers.',
    experience: 'Approach from Delhi Gate via Shahi Hammam, pause at Chowk Wazir Khan for the full façade, then enter only where visitors are permitted.',
    route: ['Start at Delhi Gate and follow the Royal Trail.', 'Notice Shahi Hammam on the way.', 'Pause in Chowk Wazir Khan to study the decorated entrance.', 'Enter respectfully if visitor access is allowed; return through the bazaar lanes.'],
    photos: ['The decorated gateway viewed from the chowk', 'Tilework details from permitted public positions', 'The courtyard geometry where photography is allowed'],
    guidance: 'Dress modestly, remove shoes where instructed, avoid interrupting worship and ask before photographing people or interiors.',
    stay: 'For this compact Royal Trail visit, look for accommodation with convenient access to Lahore’s old-city approaches; compare transport arrangements and recent reviews before booking.',
    access: 'Prayer schedules and managed access affect visiting; confirm locally on the day.', fee: 'No current visitor admission amount verified; ask the site or guide before paying.',
    transport: 'Walk from Delhi Gate along the historic route; vehicles may not reach the mosque entrance through the narrow lanes.',
    map: 'Wazir Khan Mosque, Lahore, Pakistan'
  },
  'nearby/shahi-hammam': {
    name: 'Shahi Hammam', type: 'Restored Mughal-era bathhouse', setting: 'Immediately inside Delhi Gate on the Royal Trail, Lahore',
    highlights: ['Historic bathing chambers', 'Surviving decorative painting', 'Evidence of the former heating and water systems'],
    story: 'The royal bathhouse was associated with the Mughal-period approach to the Walled City. Its recent conservation makes historic construction and ornamental layers easier to understand.',
    architecture: 'The sequence of chambers, masonry, painted decoration and traces of the hypocaust heating system reveal how the bath operated; it is no longer a functioning bathing facility.',
    culture: 'This monument illustrates urban amenities and courtly movement in Mughal Lahore, while today it is interpreted as a heritage site.',
    experience: 'Visit the bathhouse as an individual managed attraction, then continue along the Royal Trail to Wazir Khan Mosque.',
    route: ['Enter the historic city at Delhi Gate.', 'Locate the separate Shahi Hammam entrance.', 'Explore permitted restored chambers and interpretive displays.', 'Continue towards Chowk Wazir Khan and the mosque.'],
    photos: ['Restored chamber vaults', 'Painted surfaces from allowed viewpoints', 'Doorways framing the bathhouse spaces'],
    guidance: 'Do not touch frescoes, climb barriers or assume the public gate hours apply to the monument.',
    stay: 'Stay near a convenient approach to the Walled City if planning several heritage stops; check whether your lodging can arrange a drop-off near Delhi Gate.',
    access: 'Managed access; opening times and restricted rooms can change.', fee: 'Admission or guide charges may apply; verify current rates at the entrance.',
    transport: 'Reach Delhi Gate first, then walk inside; confirm a safe pick-up point outside the tight lanes.', map: 'Shahi Hammam, Lahore, Pakistan'
  },
  'nearby/lahore-fort': {
    name: 'Lahore Fort', type: 'UNESCO-listed historic fort and palace complex', setting: 'Northern-western edge of the Walled City, Lahore',
    highlights: ['Mughal palace courts and gateways', 'Decorative stone and mirror-work traditions', 'The fort’s broad relationship to the Badshahi Mosque precinct'],
    story: 'Lahore Fort contains layers from successive rulers, with especially prominent Mughal-period construction. It forms part of the UNESCO World Heritage property Fort and Shalamar Gardens in Lahore.',
    architecture: 'Expect a large complex of gates, courts, audience halls and palace buildings, not a single fortress room. Sections under conservation may be closed.',
    culture: 'The fort captures Lahore’s role as a centre of imperial administration, art and architecture.',
    experience: 'Reserve a substantial separate visit rather than trying to add the fort to a short Delhi Gate walk.',
    route: ['Plan a dedicated journey from Delhi Gate across or around the Walled City.', 'Confirm the current visitor entrance and buy the applicable ticket.', 'Explore accessible courts and historic buildings in a logical loop.', 'If time permits, continue to the adjacent Badshahi Mosque precinct.'],
    photos: ['Wide views of the fort gateways', 'Architectural details in accessible courts', 'Exterior context towards the old-city skyline'],
    guidance: 'Allow time for security, walking and heat; respect closed sections and follow site staff instructions.',
    stay: 'For a fort-focused day, compare accommodation in central Lahore with reliable transport to the fort’s visitor entrance rather than assuming vehicle access through the old city.',
    access: 'Ticketed heritage complex; check current hours and accessible zones with the operator.', fee: 'Separate fort admission applies; current prices and categories require confirmation.',
    transport: 'Use current route guidance and a confirmed drop-off point; this is not the immediate Delhi Gate cluster.', map: 'Lahore Fort, Lahore, Pakistan'
  },
  'nearby/sunehri-mosque': {
    name: 'Sunehri Mosque', type: 'Historic mosque and active worship space', setting: 'Kashmiri Bazaar area within Lahore Walled City',
    highlights: ['Golden-domed skyline', 'Historic mosque architecture', 'The surrounding commercial streets'],
    story: 'The mosque is traditionally associated with the eighteenth-century Mughal period. Its distinctive domes help identify it amid the dense old-city fabric.',
    architecture: 'Observe the elevated position, domes and courtyard arrangement from publicly permitted points without disrupting worship.',
    culture: 'It is a functioning mosque embedded in a lively market district; visitors should treat religious and trading activity with respect.',
    experience: 'Add it as a separate stop on a longer Walled City itinerary after checking the current walking approach.',
    route: ['Check a current walking route from Delhi Gate.', 'Approach through the old-city market streets.', 'View the mosque exterior and permitted areas respectfully.', 'Continue to another nearby bazaar or return by a planned route.'],
    photos: ['Golden domes against the old-city skyline', 'Approach streets and architectural context', 'Exterior details without photographing worshippers closely'],
    guidance: 'Avoid prayer times for casual photography; dress modestly and confirm any access limitations.',
    stay: 'Choose lodging according to your broader Lahore itinerary and transport access, since this is not a hotel-oriented attraction district.',
    access: 'Active mosque; access varies with prayer and local arrangements.', fee: 'No current admission charge confirmed; ask locally.',
    transport: 'Walk through the Walled City using a current route; do not rely on an unverified journey time.', map: 'Sunehri Mosque, Lahore, Pakistan'
  },
  'nearby/akbari-mandi': {
    name: 'Akbari Mandi', type: 'Historic working wholesale market district', setting: 'Commercial lanes around Delhi Gate, Lahore Walled City',
    highlights: ['Grain and spice wholesale trade', 'Historic market lanes', 'Everyday logistics of a working bazaar'],
    story: 'Akbari Mandi forms part of the Walled City’s long commercial history and remains primarily a wholesale trading quarter rather than a curated tourist shopping arcade.',
    architecture: 'The distinctive experience is the tight market street pattern and layered shopfronts, not one ticketed monument.',
    culture: 'Traders, porters, deliveries and neighbourhood routines shape the market. Observe without blocking work.',
    experience: 'Walk a short selected section near Delhi Gate when trading conditions allow; this is a working environment, not an exhibition.',
    route: ['Begin at Delhi Gate and identify a safe pedestrian lane.', 'Observe trade from the side without obstructing carts.', 'Pause only where circulation allows.', 'Return towards the gate or continue along a confirmed market route.'],
    photos: ['Market street perspective from a safe position', 'Spice and grain displays with merchant permission', 'Historic shopfront textures without obstructing trade'],
    guidance: 'Ask permission before photographing people or merchandise; watch for carts, unloading and uneven paving.',
    stay: 'Accommodation with easy access to Delhi Gate is practical; the wholesale lanes themselves are best explored as a daytime visit.',
    access: 'Trading hours vary by merchant and weekday; no single visitor timetable applies.', fee: 'No district-wide sightseeing ticket; purchases are priced by individual traders.',
    transport: 'Reach Delhi Gate, then explore on foot when safe; vehicle loading can constrain lanes.', map: 'Akbari Mandi, Lahore, Pakistan'
  },
  'nearby/chowk-wazir-khan': {
    name: 'Chowk Wazir Khan', type: 'Historic public square and mosque forecourt', setting: 'In front of Wazir Khan Mosque on Lahore’s Royal Trail',
    highlights: ['Framed view of the mosque façade', 'Connections to bazaar lanes', 'Public life in the historic chowk'],
    story: 'The square has long connected religious, commercial and residential functions at one of the Royal Trail’s most recognisable landmarks.',
    architecture: 'Its urban design is best understood by standing back to see the mosque’s decorated entrance in relation to surrounding frontages and lanes.',
    culture: 'This is a lived-in public space used by residents, worshippers and traders, not an isolated museum court.',
    experience: 'Pause in the square between Shahi Hammam and Wazir Khan Mosque to take in the composition before continuing.',
    route: ['Walk from Delhi Gate past Shahi Hammam.', 'Enter the chowk and find a safe unobstructed viewpoint.', 'Study the mosque façade and adjoining historic streets.', 'Continue into the mosque only where access is permitted.'],
    photos: ['Full mosque façade framed by the square', 'The surrounding historic street edges', 'Public-life scenes only with appropriate permission'],
    guidance: 'Keep entrances and circulation clear, especially at prayer times and during deliveries or events.',
    stay: 'A hotel with convenient transport to the old-city entrance lets you explore the chowk and Royal Trail on foot.',
    access: 'Public urban space, but gathering and conservation work can affect passage.', fee: 'No separate square admission verified; mosque access is a different matter.',
    transport: 'Approach on foot from Delhi Gate along the Royal Trail.', map: 'Chowk Wazir Khan, Lahore, Pakistan'
  },
  'nearby/badshahi-mosque': {
    name: 'Badshahi Mosque', type: 'Monumental Mughal mosque and active place of worship', setting: 'Beside Lahore Fort at the western end of the Walled City',
    highlights: ['Expansive courtyard and monumental gateway', 'Red sandstone and marble ornament', 'Views towards the Lahore Fort precinct'],
    story: 'Built under the Mughal emperor Aurangzeb in the late seventeenth century, Badshahi Mosque is one of Lahore’s best-known monumental religious buildings.',
    architecture: 'The vast courtyard, domes, minarets and richly proportioned entrance are central to its architectural impact.',
    culture: 'The mosque is an active religious site; congregational worship takes priority over tourist access.',
    experience: 'Visit as part of a dedicated fort-and-mosque itinerary, with enough time for separate entry and prayer schedules.',
    route: ['Travel from Delhi Gate to the Lahore Fort–Badshahi precinct.', 'Confirm access and enter through the designated visitor approach.', 'Appreciate the gateway and courtyard from permitted areas.', 'Continue towards Lahore Fort if it fits your schedule.'],
    photos: ['Courtyard symmetry from permitted positions', 'Gateway and minarets in soft light', 'Exterior context with Lahore Fort'],
    guidance: 'Dress modestly, follow shoe instructions, avoid interrupting worship and ask before taking portraits.',
    stay: 'Choose central Lahore accommodation with reliable transport for a longer fort-and-mosque visit; verify current access arrangements.',
    access: 'Prayer schedules and religious gatherings affect visiting.', fee: 'Check any visitor or ancillary charges on arrival; no current amount is asserted here.',
    transport: 'This is a longer cross-city connection from Delhi Gate; confirm route and pick-up separately.', map: 'Badshahi Mosque, Lahore, Pakistan'
  }
};

export const getNearbyProfile = (slug: string) => profiles[slug];

export const urNearby: Record<string, { highlights: string[]; route: string[]; photos: string[]; theme: string }> = {
  'nearby/wazir-khan-mosque': {
    theme: 'مغلیہ دور کی رنگین کاشی کاری، خطاطی، صحن اور عبادت کی زندہ روایت اس مسجد کی خاص پہچان ہیں۔',
    highlights: ['رنگین کاشی کاری اور نقاشی', 'مسجد کا تاریخی داخلی دروازہ', 'چوک اور بازار کے ساتھ شہری تعلق'],
    route: ['دہلی گیٹ سے شاہی گزرگاہ پر چلیں۔', 'شاہی حمام کے پاس سے گزریں۔', 'چوک وزیر خان سے مسجد کا بیرونی منظر دیکھیں۔', 'اجازت اور نماز کے اوقات کا خیال رکھ کر اندر جائیں۔'],
    photos: ['چوک سے مسجد کا مکمل دروازہ', 'اجازت یافتہ جگہ سے ٹائلوں کی تفصیل', 'اجازت ہو تو صحن کی متوازن تعمیر']
  },
  'nearby/shahi-hammam': {
    theme: 'بحال شدہ تاریخی حمام کے کمروں، آرائش اور قدیم حرارتی نظام کے آثار کو سمجھنے کا موقع ملتا ہے۔',
    highlights: ['حمام کے تاریخی کمرے', 'بچی ہوئی دیواری آرائش', 'حرارت اور پانی کے نظام کے آثار'],
    route: ['دہلی گیٹ سے اندر داخل ہوں۔', 'حمام کا الگ داخلی راستہ تلاش کریں۔', 'اجازت یافتہ کمروں اور معلوماتی نمائش کو دیکھیں۔', 'چوک وزیر خان کی طرف آگے بڑھیں۔'],
    photos: ['بحال شدہ محرابی کمرے', 'اجازت یافتہ زاویے سے نقش و نگار', 'کمروں کے درمیان تاریخی دروازے']
  },
  'nearby/lahore-fort': {
    theme: 'لاہور قلعہ وسیع تاریخی احاطہ ہے جس میں مغلیہ دربار، محل، دروازے اور مختلف ادوار کی تعمیرات موجود ہیں۔',
    highlights: ['شاہی دروازے اور صحن', 'محلات اور آرائشی تعمیر', 'بادشاہی مسجد کے ساتھ تاریخی ماحول'],
    route: ['دہلی گیٹ سے قلعے کے لیے الگ سفر طے کریں۔', 'موجودہ داخلہ اور ٹکٹ کی تصدیق کریں۔', 'کھلے ہوئے صحن اور عمارتیں ترتیب سے دیکھیں۔', 'وقت ملے تو بادشاہی مسجد جائیں۔'],
    photos: ['قلعے کے وسیع دروازے', 'کھلے صحن کی تعمیراتی تفصیل', 'اندرون شہر کی سمت خارجی منظر']
  },
  'nearby/sunehri-mosque': {
    theme: 'سنہری گنبدوں والی تاریخی مسجد پرانے شہر کے مصروف بازاروں کے درمیان ایک الگ پہچان رکھتی ہے۔',
    highlights: ['سنہری گنبد', 'تاریخی مسجد کی ساخت', 'ارد گرد کی تجارتی گلیاں'],
    route: ['دہلی گیٹ سے موجودہ نقشے پر راستہ دیکھیں۔', 'بازار کی گلیوں سے مسجد کے پاس پہنچیں۔', 'عبادت میں خلل ڈالے بغیر بیرونی منظر دیکھیں۔', 'واپسی کا راستہ پہلے طے رکھیں۔'],
    photos: ['پرانے شہر کے پس منظر میں گنبد', 'مسجد تک آنے والی گلیاں', 'عبادت گزاروں کی نجی زندگی کا احترام کرتے ہوئے بیرونی نقش']
  },
  'nearby/akbari-mandi': {
    theme: 'یہ تاریخی تھوک تجارت کا علاقہ ہے جہاں غلہ، مصالحے، ترسیل اور بازار کی روزمرہ زندگی نمایاں ہیں۔',
    highlights: ['غلہ اور مصالحوں کی تجارت', 'تنگ تاریخی تجارتی گلیاں', 'فعال بازار کی روزمرہ زندگی'],
    route: ['دہلی گیٹ کے پاس محفوظ پیدل گلی منتخب کریں۔', 'ریڑھیوں اور سامان کی آمدورفت سے دور چلیں۔', 'دکاندار کی اجازت سے سامان دیکھیں۔', 'اسی راستے سے واپس آئیں یا تصدیق شدہ راستہ لیں۔'],
    photos: ['محفوظ مقام سے بازار کی گلی', 'اجازت سے مصالحوں کی دکان', 'تجارت میں رکاوٹ ڈالے بغیر پرانے دکانوں کے سامنے والے حصے']
  },
  'nearby/chowk-wazir-khan': {
    theme: 'وزیر خان مسجد کے سامنے یہ تاریخی چوک عبادت، بازار اور رہائشی گلیوں کو ایک جگہ جوڑتا ہے۔',
    highlights: ['مسجد کے دروازے کا کھلا منظر', 'بازار سے جڑی گلیاں', 'تاریخی چوک کی روزمرہ سرگرمیاں'],
    route: ['دہلی گیٹ سے شاہی حمام کی طرف چلیں۔', 'چوک میں محفوظ اور کھلا مقام تلاش کریں۔', 'مسجد کی آرائش اور اطراف کی گلیاں دیکھیں۔', 'اجازت ہو تو مسجد کی طرف بڑھیں۔'],
    photos: ['چوک سے مسجد کا سامنے والا منظر', 'تاریخی گلیوں کے کنارے', 'لوگوں کی اجازت سے روزمرہ شہری مناظر']
  },
  'nearby/badshahi-mosque': {
    theme: 'اورنگزیب کے دور کی عظیم مغلیہ مسجد وسیع صحن، سرخ پتھر، گنبدوں اور میناروں کی وجہ سے ممتاز ہے۔',
    highlights: ['وسیع صحن اور عظیم دروازہ', 'سرخ پتھر اور سنگ مرمر کی آرائش', 'لاہور قلعہ کے ساتھ منظر'],
    route: ['دہلی گیٹ سے قلعہ اور مسجد کے علاقے تک سفر کریں۔', 'داخلے اور نماز کے اوقات معلوم کریں۔', 'اجازت یافتہ حصوں سے صحن اور دروازہ دیکھیں۔', 'وقت ہو تو لاہور قلعہ شامل کریں۔'],
    photos: ['صحن کا متوازن منظر', 'دروازے اور مینار', 'قلعے کے ساتھ مسجد کا بیرونی منظر']
  }
};
