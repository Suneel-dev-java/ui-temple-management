/**
 * Dagadarthi Sivalayam — Pooja Calendar Data
 * Day-wise pooja events for all 12 Telugu months
 * Sourced from: instagram.com/sivalayam_dagadarthi_nellore & temple records
 */

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`;
const heroImg = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

// Badge colour mapping for event types
export const EVENT_TYPE_META = {
  festival:  { label: "Grand Festival",   color: "bg-orange-600" },
  weekly:    { label: "Weekly Seva",       color: "bg-maroon-700" },
  recurring: { label: "Recurring Tithi",  color: "bg-purple-700" },
  special:   { label: "Special Pooja",    color: "bg-green-700"  },
  daily:     { label: "Daily Seva",       color: "bg-gray-600"   },
};

const poojaCalendar = [
  /* ─────────────────────── 1. CHAITRA ─────────────────────── */
  {
    month: "Chaitra Masam (March/April)",
    teluguMonth: "చైత్ర మాసం",
    shortMonth: "Chaitra",
    yagam: "శ్రీ సీతా రామ కళ్యాణోత్సవం & వసంతోత్సవాలు",
    yagamEn: "Sri Sita Rama Kalyanotsavam & Vasanthotsavam",
    price: "₹1,116",
    desc: "ఉగాది పర్వదినంతో ప్రారంభమై, శ్రీరామనవమి నాడు సీతారాముల కళ్యాణం మరియు వసంత నవరాత్రి హోమాలు అత్యంత వైభవంగా జరపబడతాయి.",
    descEn: "Beginning with Ugadi, the month features Sri Rama Navami Sita Rama Kalyanam and Vasantha Navaratri homams.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-small-burning-candle-43187-large.mp4",
    imageUrl: heroImg("1604537529428-15bcbeecfe4d"),
    days: [
      { day: 1,  tithi: "Prathama",   pooja: "ఉగాది పండుగ",        type: "festival",  time: "5:00 AM – 9:00 PM",  desc: "Telugu New Year celebrated with Panchanga Sravanam, special Abhishekam and new year prayers for all devotees.", image: img("1604537529428-15bcbeecfe4d") },
      { day: 5,  tithi: "Panchami",   pooja: "సోమవారం రుద్రాభిషేకం",  type: "weekly",    time: "8:00 AM – 12:00 PM", desc: "Rudrabhishekam with Bilva leaves and sacred waters on auspicious Monday.", image: img("1599619585752-c3edb42a414c") },
      { day: 9,  tithi: "Navami",     pooja: "శ్రీ రామ నవమి కళ్యాణం",  type: "festival",  time: "10:00 AM – 2:00 PM", desc: "Grand Sita Rama Kalyanam with flower shower, procession, and Panchagavya Abhishekam.", image: img("1558618666-fcd25c85cd64") },
      { day: 11, tithi: "Ekadasi",    pooja: "కామదా ఏకాదశి",          type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Special Vishnu Sahasranama Parayanam and Ekadasi fasting observances.", image: img("1624601573012-efb68931cc8f") },
      { day: 13, tithi: "Trayodasi",  pooja: "ప్రదోష పూజ",            type: "recurring", time: "5:30 PM – 7:30 PM",  desc: "Shiva Pradosha Vrata pooja observed at dusk with Abhishekam and circumambulation.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 15, tithi: "Purnima",    pooja: "పూర్ణిమ అభిషేకం",        type: "recurring", time: "6:00 AM – 10:00 AM", desc: "Full moon special Abhishekam with milk and turmeric water for Ramalingeswara Swamy.", image: img("1567591370372-b82b18ca1d04") },
      { day: 22, tithi: "Saptami",    pooja: "వసంతోత్సవ హోమం",         type: "special",   time: "9:00 AM – 1:00 PM",  desc: "Seasonal spring festival homam with flowers and special Lakshmi Narayana worship.", image: img("1558618666-fcd25c85cd64") },
      { day: 28, tithi: "Trayodasi",  pooja: "ప్రదోష పూజ",            type: "recurring", time: "5:30 PM – 7:30 PM",  desc: "Krishna Paksha Pradosha Shiva worship with special lamp offering.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 30, tithi: "Amavasya",   pooja: "అమావాస్య తర్పణాలు",      type: "recurring", time: "7:00 AM – 10:00 AM", desc: "Ancestral offerings and Pitru Tarpanams performed at the temple tank.", image: img("1604537466158-719b1972feb8") },
    ],
  },

  /* ─────────────────────── 2. VAISAKHA ─────────────────────── */
  {
    month: "Vaisakha Masam (April/May)",
    teluguMonth: "వైశాఖ మాసం",
    shortMonth: "Vaisakha",
    yagam: "వైశాఖ మాస విశేష అభిషేకాలు & అక్షయ తృతీయ",
    yagamEn: "Vaisakha Special Abhishekams & Akshaya Tritiya",
    price: "₹751",
    desc: "వైశాఖ మాసం పుణ్యప్రదమైన నెలగా పరిగణింపబడుతుంది. ప్రతి సోమవారం రుద్రాభిషేకాలు, అక్షయ తృతీయ నాడు హిరణ్య దానాలు జరుగుతాయి.",
    descEn: "Holiest month for Shiva. Weekly Rudrabhishekams, golden donations on Akshaya Tritiya, special morning poojas.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "image",
    videoUrl: "",
    imageUrl: heroImg("1624601573012-efb68931cc8f"),
    days: [
      { day: 3,  tithi: "Tritiya",    pooja: "అక్షయ తృతీయ",           type: "festival",  time: "6:00 AM – 12:00 PM", desc: "Auspicious day for golden donations. Special Lakshmi Kubera Puja and Hiranya Danam.", image: img("1624601573012-efb68931cc8f") },
      { day: 7,  tithi: "Saptami",    pooja: "సోమవారం రుద్రాభిషేకం",  type: "weekly",    time: "8:00 AM – 12:00 PM", desc: "Monday Rudrabhishekam with milk, honey, curd, and bilva leaves.", image: img("1599619585752-c3edb42a414c") },
      { day: 11, tithi: "Ekadasi",    pooja: "మోహినీ ఏకాదశి",          type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Special Ekadasi marking Lord Vishnu's Mohini avatar appearance.", image: img("1567591370372-b82b18ca1d04") },
      { day: 13, tithi: "Trayodasi",  pooja: "శుక్ల ప్రదోష పూజ",      type: "recurring", time: "5:30 PM – 7:30 PM",  desc: "Evening Shiva Abhishekam and special dusk lamp lighting.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 15, tithi: "Purnima",    pooja: "వైశాఖ పూర్ణిమ / బుద్ధ జయంతి", type: "festival", time: "6:00 PM – 10:00 PM", desc: "Sacred full moon of Vaisakha with temple lamp festival and Koti Deeparchana.", image: img("1604537466158-719b1972feb8") },
      { day: 20, tithi: "Panchami",   pooja: "నాగ పంచమి",             type: "special",   time: "8:00 AM – 1:00 PM",  desc: "Snake deity worship with milk offering at the temple Naga Devatha shrine.", image: img("1558618666-fcd25c85cd64") },
      { day: 26, tithi: "Ekadasi",    pooja: "అపర ఏకాదశి",            type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Special Vishnu puja and merit-gaining day for departed souls.", image: img("1567591370372-b82b18ca1d04") },
      { day: 28, tithi: "Trayodasi",  pooja: "కృష్ణ ప్రదోష పూజ",      type: "recurring", time: "5:30 PM – 7:30 PM",  desc: "Evening Shiva worship in the waning fortnight for health and prosperity.", image: img("1541534741688-6078c6bfb5c5") },
    ],
  },

  /* ─────────────────────── 3. JYESHTHA ─────────────────────── */
  {
    month: "Jyeshtha Masam (May/June)",
    teluguMonth: "జ్యేష్ఠ మాసం",
    shortMonth: "Jyeshtha",
    yagam: "గంగా దశహర నదీ పూజ & వట సావిత్రి వ్రతం",
    yagamEn: "Ganga Dasahara River Pooja & Vata Savitri Vratam",
    price: "₹501",
    desc: "జ్యేష్ఠ మాసంలో నీటి పూజలు, మహిళలకు వట సావిత్రి వ్రతం మరియు గంగా అవతరణ దశహర ఉత్సవాలు జరుగుతాయి.",
    descEn: "Water worship ceremonies, Vata Savitri Vratam for women, and Ganga Dasahara river festival.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "image",
    videoUrl: "",
    imageUrl: heroImg("1587825140708-dfaf72ae4b04"),
    days: [
      { day: 3,  tithi: "Tritiya",    pooja: "వట సావిత్రి వ్రతం",      type: "festival",  time: "7:00 AM – 12:00 PM", desc: "Women observe this vrat for the long life of husbands by worshipping the Banyan tree.", image: img("1587825140708-dfaf72ae4b04") },
      { day: 10, tithi: "Dasami",     pooja: "గంగా దశహర",              type: "festival",  time: "8:00 AM – 12:00 PM", desc: "Celebration of Ganga's descent to earth with special Panchamruta Abhishekam.", image: img("1604537529428-15bcbeecfe4d") },
      { day: 11, tithi: "Ekadasi",    pooja: "నిర్జలా ఏకాదశి",          type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Strictest Ekadasi — no water fasting. Special Vishnu worship and charitable donations.", image: img("1567591370372-b82b18ca1d04") },
      { day: 14, tithi: "Chaturdasi", pooja: "శని జయంతి",              type: "special",   time: "5:00 PM – 7:00 PM",  desc: "Saturn deity worship on new moon eve. Special sesame oil lamp offering.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 15, tithi: "Purnima",    pooja: "జ్యేష్ఠ పూర్ణిమ",         type: "recurring", time: "6:00 AM – 9:00 AM",  desc: "Full moon special puja with panchamruta snana for the main deity.", image: img("1604537466158-719b1972feb8") },
      { day: 26, tithi: "Ekadasi",    pooja: "యోగిని ఏకాదశి",           type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Grants liberation from disease and sins. Special Vishnu Sahasranama recitation.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 4. ASHADHA ─────────────────────── */
  {
    month: "Ashadha Masam (June/July)",
    teluguMonth: "ఆషాఢ మాసం",
    shortMonth: "Ashadha",
    yagam: "దేవ శయన చతుర్దశి & గురు పూర్ణిమ మహోత్సవాలు",
    yagamEn: "Deva Shayana Chaturdashi & Guru Purnima Mahotsavam",
    price: "₹1,001",
    desc: "ఆషాఢ మాసంలో గురు పూర్ణిమ మరియు దేవ శయన ఉత్సవాలు జరుపుతారు. ఈ నెలలో యోగ నిద్రలో ఉండే విష్ణువుకు ప్రత్యేక పూజలు చేస్తారు.",
    descEn: "Guru Purnima and Deva Shayana festivals observed. Lord Vishnu begins divine yoga nidra sleep.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "image",
    videoUrl: "",
    imageUrl: heroImg("1599619585752-c3edb42a414c"),
    days: [
      { day: 2,  tithi: "Dwitiya",    pooja: "రథ యాత్ర",               type: "festival",  time: "8:00 AM – 2:00 PM",  desc: "Chariot procession of the main deity through temple streets with devotees pulling the rath.", image: img("1607604276583-eef5d076aa5f") },
      { day: 11, tithi: "Ekadasi",    pooja: "దేవ శయని ఏకాదశి",         type: "festival",  time: "6:00 AM – 9:00 PM",  desc: "Lord Vishnu begins his cosmic sleep. Special 4-month Chaturmasya festival observances begin.", image: img("1567591370372-b82b18ca1d04") },
      { day: 15, tithi: "Purnima",    pooja: "గురు పూర్ణిమ",             type: "festival",  time: "7:00 AM – 8:00 PM",  desc: "Day of gratitude to spiritual gurus. Vyasa Puja, Pada Puja to priests, and discourse.", image: img("1624601573012-efb68931cc8f") },
      { day: 20, tithi: "Panchami",   pooja: "నాగ పంచమి",               type: "special",   time: "8:00 AM – 1:00 PM",  desc: "Worship of snake deities with turmeric and milk offerings for family protection.", image: img("1558618666-fcd25c85cd64") },
      { day: 26, tithi: "Ekadasi",    pooja: "కామిక ఏకాదశి",             type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Observing this fast is believed to cleanse all sins of the worshipper.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 5. SRAVANA ─────────────────────── */
  {
    month: "Sravana Masam (July/August)",
    teluguMonth: "శ్రావణ మాసం",
    shortMonth: "Sravana",
    yagam: "వరలక్ష్మీ వ్రతం & పవిత్రోత్సవాలు",
    yagamEn: "Varalakshmi Vratam & Pavitrotsavam",
    price: "₹501",
    desc: "శ్రావణ శుక్రవారాలలో అమ్మవారికి సామూహిక వరలక్ష్మీ వ్రతాలు మరియు ఆలయ శుద్ధి కోసం పవిత్ర హోమాలు నిర్వహిస్తారు.",
    descEn: "Mass Varalakshmi Vratam on Fridays, Raksha Bandhan, Krishna Janmashtami and Pavitrotsavam.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "image",
    videoUrl: "",
    imageUrl: heroImg("1543007630-9710e4a00a20"),
    days: [
      { day: 4,  tithi: "Chaturthi",  pooja: "శ్రావణ సోమవారం (1st)",    type: "festival",  time: "4:30 AM – 9:00 PM",  desc: "Holiest Monday for Shiva worship. Massive Abhishekam with sacred panchamruta.", image: img("1599619585752-c3edb42a414c") },
      { day: 9,  tithi: "Navami",     pooja: "వరలక్ష్మీ వ్రతం",          type: "festival",  time: "7:00 AM – 1:00 PM",  desc: "Women worship Goddess Lakshmi for prosperity and family well-being. Kumkum and silk offerings.", image: img("1543007630-9710e4a00a20") },
      { day: 11, tithi: "Ekadasi",    pooja: "పుత్రదా ఏకాదశి",           type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Ekadasi especially significant for childless couples praying for offspring.", image: img("1567591370372-b82b18ca1d04") },
      { day: 11, tithi: "Somavaram",  pooja: "శ్రావణ సోమవారం (2nd)",    type: "festival",  time: "4:30 AM – 9:00 PM",  desc: "Second auspicious Monday of Sravana for Shiva worship with Rudra chanting.", image: img("1599619585752-c3edb42a414c") },
      { day: 15, tithi: "Purnima",    pooja: "రక్షా బంధన్ / శ్రావణ పూర్ణిమ", type: "festival", time: "6:00 AM – 12:00 PM", desc: "Sacred thread ceremony and Sravana Purnima with special holy bath rituals.", image: img("1604537466158-719b1972feb8") },
      { day: 18, tithi: "Ashtami",    pooja: "కృష్ణ జన్మాష్టమి",         type: "festival",  time: "11:00 PM – 1:00 AM", desc: "Lord Krishna's birth celebrated at midnight with Abhishekam and milk-curd offering.", image: img("1558618666-fcd25c85cd64") },
      { day: 19, tithi: "Navami",     pooja: "గోకులాష్టమి ఉత్సవం",       type: "festival",  time: "8:00 AM – 2:00 PM",  desc: "Morning celebrations of Janmashtami with dahi handi and bhajan programs.", image: img("1624601573012-efb68931cc8f") },
      { day: 25, tithi: "Panchami",   pooja: "పవిత్రోత్సవాలు",           type: "special",   time: "10:00 AM – 4:00 PM", desc: "Temple purification festival with gold and silver thread offerings to the deity.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 26, tithi: "Ekadasi",    pooja: "అజా ఏకాదశి",               type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Krishna Paksha Ekadasi bringing liberation from past life mistakes.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 6. BHADRAPADA ─────────────────────── */
  {
    month: "Bhadrapada Masam (August/September)",
    teluguMonth: "భాద్రపద మాసం",
    shortMonth: "Bhadrapada",
    yagam: "వినాయక చవితి మహాగణపతి హోమం",
    yagamEn: "Vinayaka Chavithi Maha Ganapathi Homam",
    price: "₹501",
    desc: "గణేశ చతుర్థి సందర్భంగా విఘ్నేశ్వరునికి ప్రత్యేక దుర్వా యుగ్మ పూజలు, మోదక నైవేద్యాలు మరియు సిద్ధి బుద్ధి హోమాలు నిర్వహిస్తారు.",
    descEn: "Vinayaka Chavithi is the biggest festival. Special Ganapathi Homam, Durva Yugma Archana and Modaka offerings.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-traditional-lighting-of-lamps-in-india-42291-large.mp4",
    imageUrl: heroImg("1607604276583-eef5d076aa5f"),
    days: [
      { day: 4,  tithi: "Chaturthi",  pooja: "వినాయక చవితి",             type: "festival",  time: "5:00 AM – 10:00 PM", desc: "Grand Ganapathi Homam, 21 Durva offering, Modaka naivedyam and Ganapathi Atharvashirsha.", image: img("1607604276583-eef5d076aa5f") },
      { day: 5,  tithi: "Panchami",   pooja: "చవితి 2వ రోజు ఉత్సవాలు",   type: "festival",  time: "8:00 AM – 6:00 PM",  desc: "Second day Ganapathi celebrations with procession and cultural programs.", image: img("1607604276583-eef5d076aa5f") },
      { day: 11, tithi: "Ekadasi",    pooja: "పద్మా ఏకాదశి",              type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Ekadasi fasting with Vishnu Sahasranama to attain spiritual merits.", image: img("1567591370372-b82b18ca1d04") },
      { day: 14, tithi: "Chaturdasi", pooja: "అనంత చతుర్దశి",            type: "festival",  time: "7:00 AM – 12:00 PM", desc: "Worship of Lord Vishnu in his infinite form with Ananta Sutra (sacred thread) observance.", image: img("1624601573012-efb68931cc8f") },
      { day: 15, tithi: "Purnima",    pooja: "భాద్రపద పూర్ణిమ",           type: "recurring", time: "6:00 AM – 10:00 AM", desc: "Full moon abhishekam and Pitru Amavasya preparations begin.", image: img("1604537466158-719b1972feb8") },
      { day: 26, tithi: "Ekadasi",    pooja: "ఇందిరా ఏకాదశి",             type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Ekadasi during Pitru Paksha, especially beneficial for liberating departed ancestors.", image: img("1567591370372-b82b18ca1d04") },
      { day: 30, tithi: "Amavasya",   pooja: "మహాలయ అమావాస్య",           type: "festival",  time: "7:00 AM – 12:00 PM", desc: "Most auspicious Pitru Paksha Amavasya for Pitru Tarpanams and Pinda Danam.", image: img("1604537529428-15bcbeecfe4d") },
    ],
  },

  /* ─────────────────────── 7. ASVINA ─────────────────────── */
  {
    month: "Asvina Masam (September/October)",
    teluguMonth: "ఆశ్వయుజ మాసం",
    shortMonth: "Asvina",
    yagam: "శరన్నవరాత్రి ఉత్సవాలు & శత చండీ యాగం",
    yagamEn: "Devi Sarannavarathri & Shata Chandi Yagam",
    price: "₹2,501",
    desc: "దేవీ శరన్నవరాత్రులలో అమ్మవారు ప్రతిరోజూ ఒక అవతారంలో దర్శనమిస్తారు. విజయదశమి రోజున శమీ పూజ మరియు పూర్ణాహుతి జరుగుతాయి.",
    descEn: "Nine nights of Goddess Durga in nine avatars, culminating in Shata Chandi Homam and Vijayadasami celebrations.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fire-rituals-of-india-42290-large.mp4",
    imageUrl: heroImg("1604537529428-15bcbeecfe4d"),
    days: [
      { day: 1,  tithi: "Prathama",   pooja: "నవరాత్రి డే 1: శైలపుత్రి",  type: "festival",  time: "5:00 AM – 10:00 PM", desc: "Navratri begins with Devi Shailaputri alankaram. Golu arrangement and Mangalaharathi.", image: img("1604537529428-15bcbeecfe4d") },
      { day: 2,  tithi: "Dwitiya",    pooja: "నవరాత్రి డే 2: బ్రహ్మచారిణి", type: "festival", time: "5:00 AM – 9:00 PM",  desc: "Day 2 — Brahmacharini Devi, representing austerity and penance.", image: img("1558618666-fcd25c85cd64") },
      { day: 3,  tithi: "Tritiya",    pooja: "నవరాత్రి డే 3: చంద్రఘంట",    type: "festival",  time: "5:00 AM – 9:00 PM",  desc: "Day 3 — Chandraghanta Devi, the half-moon goddess for bravery.", image: img("1558618666-fcd25c85cd64") },
      { day: 4,  tithi: "Chaturthi",  pooja: "నవరాత్రి డే 4: కూష్మాండ",    type: "festival",  time: "5:00 AM – 9:00 PM",  desc: "Day 4 — Kushmanda Devi, creator of universe with her divine smile.", image: img("1558618666-fcd25c85cd64") },
      { day: 5,  tithi: "Panchami",   pooja: "నవరాత్రి డే 5: స్కందమాత",    type: "festival",  time: "5:00 AM – 9:00 PM",  desc: "Day 5 — Skandamata, the mother of Kartikeya/Subramanya.", image: img("1558618666-fcd25c85cd64") },
      { day: 6,  tithi: "Shashti",    pooja: "నవరాత్రి డే 6: కాత్యాయని & సరస్వతి పూజ", type: "festival", time: "5:00 AM – 9:00 PM", desc: "Day 6 — Katyayani Devi. Books, instruments, and vehicles are worshipped.", image: img("1624601573012-efb68931cc8f") },
      { day: 7,  tithi: "Saptami",    pooja: "నవరాత్రి డే 7: కాళ రాత్రి",  type: "festival",  time: "5:00 AM – 9:00 PM",  desc: "Day 7 — Kalratri Devi, destroyer of darkness and evil forces.", image: img("1558618666-fcd25c85cd64") },
      { day: 8,  tithi: "Ashtami",    pooja: "నవరాత్రి డే 8: మహాగౌరి - దుర్గాష్టమి హోమం", type: "festival", time: "5:00 AM – 10:00 PM", desc: "Day 8 — Mahagauri. Grand Durga Ashtami Homam with Kumkuma Archana.", image: img("1599619585752-c3edb42a414c") },
      { day: 9,  tithi: "Navami",     pooja: "నవరాత్రి డే 9: సిద్ధిదాత్రి - శత చండీ యాగం", type: "festival", time: "5:00 AM – 11:00 PM", desc: "Day 9 — Siddhidatri. Shata Chandi Yagam with Purnahuti and massive flower offering.", image: img("1599619585752-c3edb42a414c") },
      { day: 10, tithi: "Dasami",     pooja: "విజయదశమి",                   type: "festival",  time: "9:00 AM – 6:00 PM",  desc: "Victory day celebration with Shami tree puja, Aparajita Puja and chariot procession.", image: img("1607604276583-eef5d076aa5f") },
      { day: 26, tithi: "Ekadasi",    pooja: "పాశాంకుశ ఏకాదశి",            type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Removes sins and grants Vishnu's abode to faithful devotees.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 8. KARTIKA ─────────────────────── */
  {
    month: "Kartika Masam (October/November)",
    teluguMonth: "కార్తీక మాసం",
    shortMonth: "Kartika",
    yagam: "మహా రుద్ర యాగం & లక్ష బిల్వార్చన పూజలు",
    yagamEn: "Maha Rudra Yagam & Laksha Bilvarchana",
    price: "₹1,501",
    desc: "ఆలయంలో నిత్య దీపారాధన, కార్తీక సోమవారాలలో కోటి లింగార్చన, లక్ష బిల్వ పత్రాలతో అర్చన మరియు రుద్ర హోమాలు అత్యంత శ్రద్ధతో నిర్వహిస్తారు.",
    descEn: "Daily sky lamp lighting, Monday Rudrabhishekams, offering of one lakh Bilva leaves, and Maha Rudra Homam.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-burning-oil-lamp-43186-large.mp4",
    imageUrl: heroImg("1541534741688-6078c6bfb5c5"),
    days: [
      { day: 1,  tithi: "Prathama",   pooja: "కార్తీక మాస దీపారాధన ప్రారంభం", type: "festival", time: "5:00 AM – 9:00 PM", desc: "Beginning of holiest Kartika month. Sky lamps lit daily throughout for Lord Shiva.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 2,  tithi: "Dwitiya",    pooja: "నరక చతుర్దశి / దీవాళీ",     type: "festival",  time: "4:00 AM – 10:00 PM", desc: "Oil bath before sunrise, Lakshmi Puja and 1008 lamps lit throughout the temple.", image: img("1604537529428-15bcbeecfe4d") },
      { day: 3,  tithi: "Amavasya",   pooja: "దీపావళి - లక్ష్మీ పూజ",       type: "festival",  time: "6:00 PM – 10:00 PM", desc: "Grand Lakshmi Puja and thousand lamp festival at Dagadarthi temple.", image: img("1604537466158-719b1972feb8") },
      { day: 6,  tithi: "Shashti",    pooja: "కార్తీక సోమవారం - లక్ష బిల్వార్చన", type: "festival", time: "4:30 AM – 9:00 PM", desc: "Holiest Monday of Kartika for Shiva worship. Laksha Bilva archana and Rudra Abhishekam.", image: img("1599619585752-c3edb42a414c") },
      { day: 11, tithi: "Ekadasi",    pooja: "ఉత్థాన ఏకాదశి / తులసీ వివాహం", type: "festival", time: "6:00 AM – 9:00 PM", desc: "Lord Vishnu awakens from cosmic sleep. Tulsi Vivah (Tulasi's marriage with Vishnu) performed.", image: img("1567591370372-b82b18ca1d04") },
      { day: 13, tithi: "Trayodasi",  pooja: "ప్రదోష పూజ & కార్తీక దీపం",  type: "recurring", time: "5:30 PM – 9:00 PM",  desc: "Pradosham with sky lamp festival. Massive lamp tower lit at temple entrance.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 15, tithi: "Purnima",    pooja: "కార్తీక పూర్ణిమ - త్రిపురోత్సవం", type: "festival", time: "5:00 AM – 11:00 PM", desc: "Most sacred day of Kartika. Tripurotsavam — Shiva's victory over Tripura demons. River bath and lamp offerings.", image: img("1604537466158-719b1972feb8") },
      { day: 26, tithi: "Ekadasi",    pooja: "ఉత్పత్తి ఏకాదశి",             type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Birthday of Ekadasi goddess. Rigorous fast with Vishnu worship observed.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 9. MARGASIRA ─────────────────────── */
  {
    month: "Margasira Masam (November/December)",
    teluguMonth: "మార్గశిర మాసం",
    shortMonth: "Margasira",
    yagam: "శ్రీ సుబ్రహ్మణ్య షష్ఠి కళ్యాణం & హోమాలు",
    yagamEn: "Subrahmanya Shasthi Kalyanam & Homams",
    price: "₹501",
    desc: "కుమారస్వామి వారి షష్ఠి సందర్భంగా వల్లీ దేవసేన సమేత సుబ్రహ్మణ్య కళ్యాణం మరియు కాలసర్ప దోష నివారణ హోమాలు జరుపుతారు.",
    descEn: "Subrahmanya Shasthi Kalyanam, Kala Sarpa dosha removal homams, and Margasira Thursday Lakshmi pujas.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "image",
    videoUrl: "",
    imageUrl: heroImg("1561361513-2d000a50f0db"),
    days: [
      { day: 6,  tithi: "Shashti",    pooja: "సుబ్రహ్మణ్య షష్ఠి",          type: "festival",  time: "6:00 AM – 4:00 PM",  desc: "Grand Subrahmanya Swamy Kalyanam with Valli and Devasena. Kala Sarpa Dosha Homam.", image: img("1561361513-2d000a50f0db") },
      { day: 7,  tithi: "Saptami",    pooja: "మార్గశిర గురువారం (1st)",     type: "festival",  time: "7:00 AM – 12:00 PM", desc: "First Thursday of Margasira — women observe Lakshmi Vrata for prosperity and family welfare.", image: img("1543007630-9710e4a00a20") },
      { day: 11, tithi: "Ekadasi",    pooja: "మోక్షదా ఏకాదశి - గీత జయంతి", type: "festival", time: "6:00 AM – 9:00 PM",  desc: "Day the Bhagavad Gita was revealed. Gita parayana and Vishnu worship for liberation.", image: img("1567591370372-b82b18ca1d04") },
      { day: 15, tithi: "Purnima",    pooja: "దత్తాత్రేయ జయంతి",           type: "festival",  time: "6:00 AM – 12:00 PM", desc: "Birth anniversary of Lord Dattatreya (Brahma-Vishnu-Shiva trinity). Special trimurti worship.", image: img("1624601573012-efb68931cc8f") },
      { day: 26, tithi: "Ekadasi",    pooja: "సఫలా ఏకాదశి",                 type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Ekadasi that fulfils all desires of the devotee who fasts sincerely.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 10. PUSHYA ─────────────────────── */
  {
    month: "Pushya Masam (December/January)",
    teluguMonth: "పుష్య మాసం",
    shortMonth: "Pushya",
    yagam: "ధనుర్మాస పూజలు & ముక్కోటి ఏకాదశి",
    yagamEn: "Dhanurmasam Pujas & Vaikunta Ekadasi",
    price: "₹251",
    desc: "సూర్యోదయానికి పూర్వమే ప్రత్యేక తిరుప్పావై సేవలు, సంక్రాంతి పొంగలి నైవేద్యం మరియు ఉత్తర ద్వార విష్ణు దర్శనం నిర్వహిస్తారు.",
    descEn: "Pre-dawn Tiruppavai services, Sankranti Pongal offering, and Vaikunta Ekadasi northern gate darshan.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-lighting-an-oil-lamp-during-diwali-48906-large.mp4",
    imageUrl: heroImg("1604537466158-719b1972feb8"),
    days: [
      { day: 1,  tithi: "Prathama",   pooja: "ధనుర్మాస ప్రారంభం",          type: "festival",  time: "4:30 AM – 6:30 AM",  desc: "Pre-dawn bhajans and special Tiruppavai services begin for the entire month.", image: img("1604537466158-719b1972feb8") },
      { day: 11, tithi: "Ekadasi",    pooja: "వైకుంఠ ఏకాదశి (ముక్కోటి)",   type: "festival",  time: "4:00 AM – 12:00 AM", desc: "Northern gate opened. 3.3 crore gods worship Vishnu. Night vigil kept throughout.", image: img("1567591370372-b82b18ca1d04") },
      { day: 14, tithi: "Chaturdasi", pooja: "భోగి పండుగ",                  type: "festival",  time: "5:00 AM – 9:00 AM",  desc: "Bhogi festival — old items burnt and new welcomed. Temple bonfire and devotional singing.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 15, tithi: "Sankranti",  pooja: "మకర సంక్రాంతి",               type: "festival",  time: "5:00 AM – 10:00 PM", desc: "Sun enters Capricorn. Special Pongal naivedyam, cattle puja and kite flying.", image: img("1558618666-fcd25c85cd64") },
      { day: 16, tithi: "Prathama",   pooja: "కనుమ పండుగ",                  type: "festival",  time: "7:00 AM – 12:00 PM", desc: "Second day of Sankranti — cattle worship (Gopooja) with haldi and kumkum.", image: img("1558618666-fcd25c85cd64") },
      { day: 26, tithi: "Ekadasi",    pooja: "పుత్రదా ఏకాదశి",              type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "This Ekadasi grants the blessing of a child to childless devotees.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 11. MAGHA ─────────────────────── */
  {
    month: "Magha Masam (January/February)",
    teluguMonth: "మాఘ మాసం",
    shortMonth: "Magha",
    yagam: "మహా శివరాత్రి లింగోద్భవ అభిషేకాలు",
    yagamEn: "Maha Shivaratri Lingodbhava Abhishekam",
    price: "₹1,116",
    desc: "శివరాత్రి మహోత్సవాలలో భాగంగా రాత్రంతా నాలుగు జాముల అభిషేకాలు, జాగరణ భజనలు మరియు మహారుద్ర యాగ పూర్ణాహుతి నిర్వహిస్తారు.",
    descEn: "All-night four-quarter Abhishekam, Jagarana bhajans, and Maha Rudra Yaga Purnahuti on Shivaratri night.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "video",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flames-of-a-burning-fire-pit-43188-large.mp4",
    imageUrl: heroImg("1599619585752-c3edb42a414c"),
    days: [
      { day: 1,  tithi: "Prathama",   pooja: "మాఘ స్నాన ప్రారంభం",         type: "festival",  time: "5:00 AM – 6:30 AM",  desc: "Holy bathing month begins. Pre-dawn dip in the temple tank for Magha Masa merit.", image: img("1599619585752-c3edb42a414c") },
      { day: 5,  tithi: "Panchami",   pooja: "శ్రీ పంచమి / సరస్వతీ పూజ",   type: "festival",  time: "8:00 AM – 1:00 PM",  desc: "Goddess Saraswati puja with books, musical instruments and white flowers.", image: img("1624601573012-efb68931cc8f") },
      { day: 11, tithi: "Ekadasi",    pooja: "జయా ఏకాదశి",                  type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Liberates from Brahma-Hatya Dosha. Special Vishnu worship with Tulasi offering.", image: img("1567591370372-b82b18ca1d04") },
      { day: 13, tithi: "Trayodasi",  pooja: "ప్రదోష పూజ",                  type: "recurring", time: "5:30 PM – 7:30 PM",  desc: "Evening Shiva worship with bilva leaves and Rudra chanting at dusk.", image: img("1541534741688-6078c6bfb5c5") },
      { day: 14, tithi: "Chaturdasi", pooja: "మహా శివరాత్రి",               type: "festival",  time: "4:00 AM – 12:00 AM", desc: "The greatest Shiva festival. Four Yama Prahara Abhishekams through the night. Maha Rudra Yaga.", image: img("1599619585752-c3edb42a414c") },
      { day: 26, tithi: "Ekadasi",    pooja: "విజయా ఏకాదశి",                type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Provides victory in all endeavors. Same merit as bathing at all pilgrimages combined.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },

  /* ─────────────────────── 12. PHALGUNA ─────────────────────── */
  {
    month: "Phalguna Masam (February/March)",
    teluguMonth: "ఫాల్గుణ మాసం",
    shortMonth: "Phalguna",
    yagam: "కామదహన హోమం & ఆలయ వార్షిక బ్రహ్మోత్సవాలు",
    yagamEn: "Kama Dahana Homam & Annual Brahmotsavam",
    price: "₹1,116",
    desc: "ధ్వజారోహణంతో ప్రారంభమయ్యే ఆలయ వార్షిక కల్యాణ బ్రహ్మోత్సవాలు, రథోత్సవం మరియు వసంత హోలికా దహన క్రియలు జరుపుతారు.",
    descEn: "Annual Brahmotsavam begins with flag-hoisting, followed by chariot festival and Holika Dahana bonfire ceremony.",
    instagramUrl: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    mediaType: "image",
    videoUrl: "",
    imageUrl: heroImg("1507608869274-d3177c8bb4c7"),
    days: [
      { day: 1,  tithi: "Prathama",   pooja: "బ్రహ్మోత్సవ ధ్వజారోహణం",     type: "festival",  time: "8:00 AM – 12:00 PM", desc: "Annual Brahmotsavam begins with Dhwajaarohanam. Seven-day festival of grand sevas starts.", image: img("1507608869274-d3177c8bb4c7") },
      { day: 5,  tithi: "Panchami",   pooja: "రథోత్సవం",                    type: "festival",  time: "9:00 AM – 2:00 PM",  desc: "Devotees pull the grand temple chariot with the deity through streets amid chanting and music.", image: img("1607604276583-eef5d076aa5f") },
      { day: 7,  tithi: "Saptami",    pooja: "బ్రహ్మోత్సవ పూర్ణాహుతి",       type: "festival",  time: "10:00 AM – 4:00 PM", desc: "Grand conclusion of annual festival with Purnahuti Homam and Pushpa Yaagam.", image: img("1507608869274-d3177c8bb4c7") },
      { day: 11, tithi: "Ekadasi",    pooja: "ఆమలకీ ఏకాదశి",                type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "Worship of the Amalaki (gooseberry) tree which is considered Vishnu's abode.", image: img("1567591370372-b82b18ca1d04") },
      { day: 14, tithi: "Chaturdasi", pooja: "హోలికా దహనం",                 type: "festival",  time: "8:00 PM – 10:00 PM", desc: "Ritual bonfire (Holika Dahan) symbolising victory of devotion over evil. Kama Dahana Homam.", image: img("1558618666-fcd25c85cd64") },
      { day: 15, tithi: "Purnima",    pooja: "హోలీ / ఫాల్గుణ పూర్ణిమ",       type: "festival",  time: "8:00 AM – 4:00 PM",  desc: "Colourful Holi celebrations with gulal (flower colour) near the temple and special puja.", image: img("1558618666-fcd25c85cd64") },
      { day: 26, tithi: "Ekadasi",    pooja: "పాపమోచని ఏకాదశి",             type: "recurring", time: "6:00 AM – 9:00 PM",  desc: "This Ekadasi removes all conscious and unconscious sins from the devotee's life.", image: img("1567591370372-b82b18ca1d04") },
    ],
  },
];

export default poojaCalendar;
