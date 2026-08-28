// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this one file to re-skin the whole site for a new temple.
// Every component reads from here instead of hardcoding temple-specific text.
// ─────────────────────────────────────────────────────────────────────────

const siteConfig = {
  // Identity
  templeName: "శ్రీ దుర్గా భవానీ సమేత రామలింగేశ్వర స్వామి దేవస్థానం",
  templeShortName: "Dagadarthi",
  deityConsort: "Goddess Durga Bhavani",
  place: "దగదర్తి, నెల్లూరు, ఆంధ్ర ప్రదేశ్",
  tagline: "An ancient temple of Lord Shiva and Goddess Durga Bhavani",
  established: "Ancient Temple",

  // Contact / footer
  address: "Sri Durga Bhavani Sametha Ramalingeswara Swamy Devasthanam, Dagadarthi, Nellore District, Andhra Pradesh, India",
  phone: "+91-8524-288888",
  email: "info@example-devasthanam.org",
  social: {
    facebook: "https://www.facebook.com/sivalayam_dagadarthi_nellore",
    youtube: "https://www.youtube.com/@sivalayam_dagadarthi_nellore",
    instagram: "https://www.instagram.com/sivalayam_dagadarthi_nellore",
    twitter: "#",
  },

  // Top utility bar
  utilityLinks: [
    { label: "ENGLISH", href: "#english" },
    { label: "PRINT A TICKET", href: "#print-ticket" },
    { label: "SIGN IN / SIGN UP", href: "#signin" },
  ],

  // Primary navigation
  nav: [
    {
      label: "About",
      href: "#about",
      subItems: [
        { label: "Overview", id: "overview" },
        { label: "The Temple", id: "temple" },
        { label: "The Temple Story", id: "story" },
        { label: "General Information", id: "general" },
      ]
    },
    {
      label: "Sevas & Darshanam",
      href: "#sevas",
      subItems: [
        { label: "Overview", id: "sevas_overview" },
        { label: "Darshanam", id: "sevas_darshanam" },
        { label: "Pratyaksha Seva", id: "sevas_pratyaksha" },
        { label: "Paroksha Seva", id: "sevas_paroksha" },
      ]
    },
    { label: "Donations", href: "#donations" },
    { label: "E-Hundi", href: "#ehundi" },
    {
      label: "Quick Booking",
      href: "#quick-booking",
      subItems: [
        { label: "Darshanam", id: "quick_darshanam" },
      ]
    },
    {
      label: "Online Booking",
      href: "#online-booking",
      subItems: [
        { label: "Overview", id: "online_overview" },
        { label: "Pratyaksha Seva Booking", id: "online_pratyaksha" },
        { label: "Paroksha Seva Booking", id: "online_paroksha" },
        { label: "Darshanam Tickets", id: "online_tickets" },
        { label: "Donations", id: "online_donations" },
        { label: "Accommodation", id: "online_accommodation" },
        { label: "Publications", id: "online_publications" },
      ]
    },
    {
      label: "Media Room",
      href: "#media",
      subItems: [
        { label: "Overview", id: "media_overview" },
        { label: "Media Kit", id: "media_kit" },
        { label: "Gallery", id: "media_gallery" },
        { label: "Whats New", id: "media_whats_new" },
        { label: "Press", id: "media_press" },
        { label: "Tenders", id: "media_tenders" },
        { label: "RTI Act", id: "media_rti" },
      ]
    },
    {
      label: "Support",
      href: "#support",
      subItems: [
        { label: "Overview", id: "support_overview" },
        { label: "FAQs", id: "support_faqs" },
        { label: "Facilities to Pilgrims", id: "support_facilities" },
        { label: "Connectivity", id: "support_connectivity" },
        { label: "Contact Us", id: "support_contact" },
      ]
    },
  ],

  // Hero
  hero: {
    eyebrow: place_holder("Nallamala Hills · Kurnool"),
    heading: "Sri Mallikarjuna Swamy Devasthanam",
    subheading:
      "Where the Jyotirlinga meets the Shakti Peetha — plan your darshan, book sevas and accommodation online.",
    ctaPrimary: { label: "Book Seva", href: "#sevas" },
    ctaSecondary: { label: "Book Accommodation", href: "#accommodation" },
  },

  // Quick action cards (the row of icons under the hero)
  quickLinks: [
    { title: "Online Seva Booking", desc: "Reserve sevas & darshan slots in advance", href: "#sevas", icon: "flame" },
    { title: "Accommodation", desc: "Book cottages & guest houses", href: "#accommodation", icon: "home" },
    { title: "Live Darshan", desc: "Watch the sanctum sanctorum live", href: "#live-darshan", icon: "eye" },
    { title: "Donations", desc: "Contribute to temple seva & annadanam", href: "#donations", icon: "hand" },
    { title: "Panchangam", desc: "Today's tithi, nakshatram & timings", href: "#panchangam", icon: "calendar" },
    { title: "Devotee Helpdesk", desc: "Queries, lost & found, assistance", href: "#contact", icon: "help" },
  ],

  // About section
  about: {
    heading: "క్షేత్ర విశిష్టత",
    paragraphs: [
      "నెల్లూరు జిల్లా దగదర్తి గ్రామంలో వెలసిన శ్రీ దుర్గా భవానీ సమేత రామలింగేశ్వర స్వామి ఆలయం ఎంతో ప్రసిద్ధి చెందినది. పురాతన కాలం నుండి ఈ ఆలయం ఈ ప్రాంతంలో ఆధ్యాత్మిక చైతన్యానికి కేంద్రంగా విరాజిల్లుతోంది. భక్తులు ఇక్కడ కొలువై ఉన్న రామలింగేశ్వర స్వామి మరియు దుర్గా భవానీ అమ్మవార్లను దర్శించుకుని తమ కోరికలు నెరవేరుతాయని నమ్ముతారు.",
      "ప్రతి సంవత్సరం ఈ ఆలయంలో మహాశివరాత్రి, కార్తీక మాస ఉత్సవాలు, మరియు దేవీ శరన్నవరాత్రి వేడుకలు అత్యంత వైభవంగా జరుగుతాయి. నిత్య అభిషేకాలు, అర్చనలు మరియు పవిత్ర హోమాలతో ఈ క్షేత్రం నిత్యం భక్తిభావంతో అలరారుతోంది. ఈ చారిత్రక మరియు పవిత్ర క్షేత్రాన్ని దర్శించి తరించవలసిందిగా భక్తులందరికీ ఆహ్వానం."
    ],
    highlights: [
      { label: "నిత్య సేవలు", value: "10+" },
      { label: "స్థిరపడిన కాలం", value: "పురాతన ఆలయం" },
      { label: "ముఖ్య పండుగలు", value: "మహాశివరాత్రి" },
      { label: "ప్రాంతం", value: "దగదర్తి" },
    ],
  },

  // Sevas / rituals offered
  sevas: [
    { name: "Suprabhata Seva", time: "5:00 AM", price: "₹300", desc: "The temple's opening ritual, waking the deity with vedic hymns." },
    { name: "Maha Nitya Pooja", time: "6:30 AM", price: "₹500", desc: "Daily ritual worship with abhishekam and archana." },
    { name: "Kumkumarchana", time: "9:00 AM", price: "₹200", desc: "Offering of vermilion to the Goddess with chanting of Her names." },
    { name: "Rudrabhishekam", time: "11:00 AM", price: "₹1,000", desc: "Elaborate abhishekam with recitation of the Rudram." },
    { name: "Kalyanotsavam", time: "4:00 PM", price: "₹750", desc: "Ceremonial celestial wedding re-enactment." },
    { name: "Ekanta Seva", time: "9:00 PM", price: "Free", desc: "The closing night ritual before the sanctum is sealed." },
  ],

  // Accommodation types
  accommodation: [
    { name: "Yatri Nivas — Non A/C", price: "₹500 / night", desc: "Simple, clean rooms close to the temple, walking distance to darshan queue." },
    { name: "Yatri Nivas — A/C", price: "₹1,200 / night", desc: "Air-conditioned rooms with attached bath, ideal for families." },
    { name: "Cottages", price: "₹2,500 / night", desc: "Standalone cottages with a view of the hills, for longer stays." },
  ],

  // Announcements / news ticker
  announcements: [
    "Online booking for Kalyanotsavam is now open for the coming month.",
    "Temple will observe special sevas during the upcoming festival fortnight.",
    "New devotee helpdesk counter opened near the east gopuram.",
  ],

  // Gallery images (placeholders — swap with real photography)
  gallery: [
    { caption: "East Gopuram", src: "gopuram" },
    { caption: "Sanctum Sanctorum", src: "sanctum" },
    { caption: "Temple Tank", src: "tank" },
    { caption: "Hill View", src: "hills" },
    { caption: "Evening Aarti", src: "aarti" },
    { caption: "Festival Procession", src: "procession" },
  ],

  footerLinks: [
    { heading: "Explore", links: [{ label: "About the Temple", href: "#about" }, { label: "History", href: "#about" }, { label: "Gallery", href: "#gallery" }] },
    { heading: "Plan a Visit", links: [{ label: "Sevas", href: "#sevas" }, { label: "Accommodation", href: "#accommodation" }, { label: "Reach Us", href: "#contact" }] },
    { heading: "Devotee Services", links: [{ label: "Donations", href: "#donations" }, { label: "Live Darshan", href: "#live-darshan" }, { label: "Panchangam", href: "#panchangam" }] },
  ],
};

// small helper kept local to config so placeholder text is easy to find & replace
function place_holder(v) {
  return v;
}

export default siteConfig;
