import { useState, useMemo } from "react";
import siteConfig from "../../config/siteConfig";

const TITHIS = [
  "శ్రీ శుక్ల పక్ష ప్రథమి (Shukla Paksha Prathami)",
  "శ్రీ శుక్ల పక్ష ద్వితీయా (Shukla Paksha Dwitiya)",
  "శ్రీ శుక్ల పక్ష తృతీయా (Shukla Paksha Tritiya)",
  "శ్రీ శుక్ల పక్ష చతుర్థి (Shukla Paksha Chaturthi)",
  "శ్రీ శుక్ల పక్ష పంచమి (Shukla Paksha Panchami)",
  "శ్రీ శుక్ల పక్ష షష్ఠి (Shukla Paksha Shashti)",
  "శ్రీ శుక్ల పక్ష సప్తమి (Shukla Paksha Saptami)",
  "శ్రీ శుక్ల పక్ష అష్టమి (Shukla Paksha Ashtami)",
  "శ్రీ శుక్ల పక్ష నవమి (Shukla Paksha Navami)",
  "శ్రీ శుక్ల పక్ష దశమి (Shukla Paksha Dasami)",
  "శ్రీ శుక్ల పక్ష ఏకాదశి (Shukla Paksha Ekadasi)",
  "శ్రీ శుక్ల పక్ష ద్వాదశి (Shukla Paksha Dwadasi)",
  "శ్రీ శుక్ల పక్ష త్రయోదశి (Shukla Paksha Trayodasi)",
  "శ్రీ శుక్ల పక్ష చతుర్దశి (Shukla Paksha Chaturdasi)",
  "శ్రీ పౌర్ణమి మహోత్సవం (Purnima Maha Thithi)",
  "శ్రీ కృష్ణ పక్ష ప్రథమి (Krishna Paksha Prathami)",
  "శ్రీ కృష్ణ పక్ష ద్వితీయా (Krishna Paksha Dwitiya)",
  "శ్రీ కృష్ణ పక్ష తృతీయా (Krishna Paksha Tritiya)",
  "శ్రీ కృష్ణ పక్ష చతుర్థి (Krishna Paksha Chaturthi)",
  "శ్రీ కృష్ణ పక్ష పంచమి (Krishna Paksha Panchami)",
  "శ్రీ కృష్ణ పక్ష షష్ఠి (Krishna Paksha Shashti)",
  "శ్రీ కృష్ణ పక్ష సప్తమి (Krishna Paksha Saptami)",
  "శ్రీ కృష్ణ పక్ష అష్టమి (Krishna Paksha Ashtami)",
  "శ్రీ కృష్ణ పక్ష నవమి (Krishna Paksha Navami)",
  "శ్రీ కృష్ణ పక్ష దశమి (Krishna Paksha Dasami)",
  "శ్రీ కృష్ణ పక్ష ఏకాదశి (Krishna Paksha Ekadasi)",
  "శ్రీ కృష్ణ పక్ష ద్వాదశి (Krishna Paksha Dwadasi)",
  "శ్రీ కృష్ణ పక్ష త్రయోదశి (Krishna Paksha Trayodasi)",
  "శ్రీ కృష్ణ పక్ష చతుర్దశి (Krishna Paksha Chaturdasi)",
  "శ్రీ అమావాస్య పుణ్యకాలం (Amavasya Thithi)",
];

const NAKSHATRAMS = [
  "అశ్విని నక్షత్రం (Aswini)",
  "భరణి నక్షత్రం (Bharani)",
  "కృత్తిక నక్షత్రం (Krittika)",
  "రోహిణి నక్షత్రం (Rohini)",
  "మృగశిర నక్షత్రం (Mrigasira)",
  "ఆరుద్ర నక్షత్రం (Arudra - అత్యంత పవిత్రం)",
  "పునర్వసు నక్షత్రం (Punarvasu)",
  "పుష్యమి నక్షత్రం (Pushyami)",
  "ఆశ్లేష నక్షత్రం (Aslesha)",
  "మఖ నక్షత్రం (Makha)",
  "పుబ్బ నక్షత్రం (Pubba)",
  "ఉత్తర నక్షత్రం (Uttara Phalguni)",
  "హస్త నక్షత్రం (Hasta)",
  "చిత్త నక్షత్రం (Chitta)",
  "స్వాతి నక్షత్రం (Swati)",
  "విశాఖ నక్షత్రం (Visakha)",
  "అనురాధ నక్షత్రం (Anuradha)",
  "జ్యేష్ఠ నక్షత్రం (Jyeshta)",
  "మూల నక్షత్రం (Moola)",
  "పూర్వాషాఢ నక్షత్రం (Poorvashadha)",
  "ఉత్తరాషాఢ నక్షత్రం (Uttara Ashadha)",
  "శ్రవణం నక్షత్రం (Sravana)",
  "ధనిష్ఠ నక్షత్రం (Dhanishta)",
  "శతభిషం నక్షత్రం (Satabhisha)",
  "పూర్వాభాద్ర నక్షత్రం (Poorvabhadra)",
  "ఉత్తరాభాద్ర నక్షత్రం (Uttarabhadra)",
  "రేవతి నక్షత్రం (Revati)",
];

const YOGAMS = [
  "సిద్ధ యోగం (Siddha Yogam - సుభకరం)",
  "శుభ యోగం (Subha Yogam)",
  "బ్రహ్మ యోగం (Brahma Yogam)",
  "ఇంద్ర యోగం (Indra Yogam)",
  "వైధృతి యోగం (Vaidhriti Yogam)",
  "విష్కంభ యోగం (Vishkambha Yogam)",
  "ప్రీతి యోగం (Preeti Yogam)",
  "ఆయుష్మాన్ యోగం (Ayushman Yogam)",
  "సౌభాగ్య యోగం (Saubhagya Yogam)",
  "శోభన యోగం (Sobhana Yogam)",
  "అతిగండ యోగం (Atiganda Yogam)",
  "సుకర్మ యోగం (Sukarma Yogam)",
  "ధృతి యోగం (Dhriti Yogam)",
  "శూల యోగం (Soola Yogam)",
  "గండ యోగం (Ganda Yogam)",
  "వృద్ధి యోగం (Vriddhi Yogam)",
  "ధ్రువ యోగం (Dhruva Yogam)",
  "వ్యాఘాత యోగం (Vyaghata Yogam)",
  "హర్షణ యోగం (Harshana Yogam)",
  "వజ్ర యోగం (Vajra Yogam)",
  "సిద్ధి యోగం (Siddhi Yogam)",
  "వ్యతీపాత యోగం (Vyatipata Yogam)",
  "వరియాన్ యోగం (Variyan Yogam)",
  "పరిఘ యోగం (Parigha Yogam)",
  "శివ యోగం (Shiva Yogam)",
  "సిద్ధ యోగం (Siddha Yogam)",
  "సాధ్య యోగం (Sadhya Yogam)",
];

const KARANAMS = [
  "బవ కరణం (Bava)",
  "బాలవ కరణం (Balava)",
  "కౌలవ కరణం (Kaulava)",
  "తైతిల కరణం (Taitila)",
  "గరజ కరణం (Garaja)",
  "వణిజ కరణం (Vanija)",
  "విష్టి / భద్ర కరణం (Vishti / Bhadra)",
  "శకుని కరణం (Sakuni)",
  "చతుష్పాత్ కరణం (Chatushpada)",
  "నాగవ కరణం (Naga)",
  "కింస్తుఘ్న కరణం (Kintughna)",
];

const TIMINGS_BY_DAY = [
  // Sun (0)
  { rahukalam: "4:30 PM – 6:00 PM", yamagandam: "12:00 PM – 1:30 PM", durmuhurtham: "4:30 PM – 5:18 PM", special: "ఈరోజు శ్రీ రామలింగేశ్వర స్వామివారికి క్షీరాభిషేకం & విశేష ఆకుపూజ శ్రేయస్కరం." },
  // Mon (1)
  { rahukalam: "7:30 AM – 9:00 AM", yamagandam: "10:30 AM – 12:00 PM", durmuhurtham: "12:48 PM – 1:36 PM", special: "సోమవారం పరమశివునికి అత్యంత ప్రీతిపాత్రమైన రోజు. శ్రీ రామలింగేశ్వర స్వామివారికి ఏకాదశ రుద్రాభిషేకం & బిల్వార్చన మహోత్తమం." },
  // Tue (2)
  { rahukalam: "3:00 PM – 4:30 PM", yamagandam: "9:00 AM – 10:30 AM", durmuhurtham: "8:48 AM – 9:36 AM", special: "ఈరోజు శ్రీ దుర్గా భవానీ అమ్మవారికి విశేష కుంకుమార్చన, లలితా సహస్రనామ పారాయణ విశేష శ్రేయస్కరం." },
  // Wed (3)
  { rahukalam: "12:00 PM – 1:30 PM", yamagandam: "7:30 AM – 9:00 AM", durmuhurtham: "11:48 AM – 12:36 PM", special: "ఈరోజు శ్రీ విఘ్నేశ్వర స్వామివారికి & శ్రీ రామలింగేశ్వర స్వామికి నిత్య పూజ & గరికె సహస్రనామార్చన శ్రేయస్కరం." },
  // Thu (4)
  { rahukalam: "1:30 PM – 3:00 PM", yamagandam: "6:00 AM – 7:30 AM", durmuhurtham: "10:12 AM – 11:00 AM", special: "గురువారం శ్రీ దక్షిణామూర్తి & శ్రీ రామలింగేశ్వర స్వామికి శనగపప్పు అర్చన & విశేష గురు పూజ నిర్వహించబడును." },
  // Fri (5)
  { rahukalam: "10:30 AM – 12:00 PM", yamagandam: "3:00 PM – 4:30 PM", durmuhurtham: "8:48 AM – 9:36 AM", special: "శుక్రవారం శ్రీ దుర్గా భవానీ అమ్మవారికి లక్ష్మీ పూజ, నవగ్రహ హోమం & గాయత్రీ దీపారాధన అత్యంత ఫలప్రదం." },
  // Sat (6)
  { rahukalam: "9:00 AM – 10:30 AM", yamagandam: "1:30 PM – 3:00 PM", durmuhurtham: "7:24 AM – 8:12 AM", special: "ఈరోజు శ్రీ రామలింగేశ్వర స్వామికి ఆకుపూజ & శనీశ్వర శాంతి శివాభిషేకం జరిపించుట శుభకరం." },
];

export default function PanchangamWidget({ onClose, onOpenFeature, onBookSeva }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Dynamic calculation based on chosen date
  const panchangamData = useMemo(() => {
    const d = new Date(selectedDate);
    const validDate = isNaN(d.getTime()) ? new Date() : d;
    const dayOfWeek = validDate.getDay();
    const dayOfMonth = validDate.getDate();
    const month = validDate.getMonth() + 1;
    const year = validDate.getFullYear();

    const dayCount = Math.floor(Date.UTC(year, month - 1, dayOfMonth) / 86400000);
    const safeDayCount = isNaN(dayCount) ? 0 : Math.abs(dayCount);
    
    const tithiIdx = safeDayCount % TITHIS.length;
    const nakshatramIdx = (safeDayCount + 14) % NAKSHATRAMS.length;
    const yogamIdx = (safeDayCount + 3) % YOGAMS.length;
    const karanamIdx = (safeDayCount + 5) % KARANAMS.length;

    const timings = TIMINGS_BY_DAY[dayOfWeek] || TIMINGS_BY_DAY[0];

    return {
      tithi: TITHIS[tithiIdx],
      nakshatram: NAKSHATRAMS[nakshatramIdx],
      yogam: YOGAMS[yogamIdx],
      karanam: KARANAMS[karanamIdx],
      rahukalam: timings.rahukalam,
      yamagandam: timings.yamagandam,
      durmuhurtham: timings.durmuhurtham,
      abhijit: "11:52 AM – 12:40 PM",
      sunrise: "6:02 AM",
      sunset: "6:32 PM",
      specialNotice: timings.special,
    };
  }, [selectedDate]);

  const formattedDate = new Date(selectedDate).toLocaleDateString("te-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-2.5 bg-black/80 backdrop-blur-md animate-fade-in text-ink"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-sandal border-2 border-gold-500 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden text-xs">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-gold-400 px-3.5 py-2.5 border-b border-gold-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📅</span>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base leading-tight" lang="te">
                {siteConfig.templeShortName} పంచాంగం
              </h3>
              <p className="text-[9px] text-white/70">Daily Panchangam &amp; Auspicious Timings</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-base font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Date Selector Bar */}
        <div className="bg-maroon-900/5 px-3 py-2 border-b border-gold-500/20 flex items-center justify-between text-[11px]">
          <span className="font-bold text-maroon-900 leading-tight" lang="te">
            {formattedDate}
          </span>
          <div className="flex items-center gap-1">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-white border border-gold-500/40 text-ink rounded px-2 py-0.5 text-[11px] font-bold focus:outline-none focus:ring-1 focus:ring-maroon-800 shadow-inner"
            />
          </div>
        </div>

        {/* Main Panchangam Grid */}
        <div className="p-3 space-y-2.5">
          
          {/* Key Panchangam Elements */}
          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="bg-white p-2 rounded-lg border border-gold-500/20 space-y-0.5 shadow-sm">
              <span className="text-[9px] text-ink/50 uppercase font-bold block">తిథి (Tithi)</span>
              <span className="font-bold text-maroon-900 leading-tight block">{panchangamData.tithi}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-gold-500/20 space-y-0.5 shadow-sm">
              <span className="text-[9px] text-ink/50 uppercase font-bold block">నక్షత్రం (Nakshatram)</span>
              <span className="font-bold text-maroon-900 leading-tight block">{panchangamData.nakshatram}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-gold-500/20 space-y-0.5 shadow-sm">
              <span className="text-[9px] text-ink/50 uppercase font-bold block">యోగం (Yogam)</span>
              <span className="font-semibold text-ink leading-tight block">{panchangamData.yogam}</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-gold-500/20 space-y-0.5 shadow-sm">
              <span className="text-[9px] text-ink/50 uppercase font-bold block">కరణం (Karanam)</span>
              <span className="font-semibold text-ink leading-tight block">{panchangamData.karanam}</span>
            </div>
          </div>

          {/* Muhurtham & Timings Card */}
          <div className="bg-white border border-gold-500/30 rounded-xl p-2.5 space-y-1.5 text-[11px] shadow-sm">
            <h4 className="font-bold text-maroon-900 uppercase text-[9px] tracking-wider border-b border-gold-500/15 pb-1 flex items-center justify-between">
              <span>ముహూర్తములు &amp; వర్జ్య సమయాలు (Timings)</span>
              <span className="text-green-700 font-extrabold text-[8px] bg-green-50 px-1 py-0.5 rounded">
                Dynamic
              </span>
            </h4>

            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-green-50 p-1.5 rounded border border-green-200">
                <span className="text-[8px] text-green-800 font-bold uppercase block">అభిజిత్ ముహూర్తం (Auspicious)</span>
                <span className="font-bold text-green-950 text-[11px]">{panchangamData.abhijit}</span>
              </div>
              <div className="bg-red-50 p-1.5 rounded border border-red-200">
                <span className="text-[8px] text-red-800 font-bold uppercase block">రాహుకాలం (Rahukalam)</span>
                <span className="font-bold text-red-950 text-[11px]">{panchangamData.rahukalam}</span>
              </div>
              <div className="bg-orange-50 p-1.5 rounded border border-orange-200">
                <span className="text-[8px] text-orange-800 font-bold uppercase block">యమగండం (Yamagandam)</span>
                <span className="font-semibold text-orange-950 text-[11px]">{panchangamData.yamagandam}</span>
              </div>
              <div className="bg-amber-50 p-1.5 rounded border border-amber-200">
                <span className="text-[8px] text-amber-800 font-bold uppercase block">సూర్యోదయం / సూర్యాస్తమయం</span>
                <span className="font-semibold text-amber-950 text-[11px]">☀️ {panchangamData.sunrise} • 🌙 {panchangamData.sunset}</span>
              </div>
            </div>
          </div>

          {/* Daily Temple Note */}
          <div className="bg-amber-100/80 border-l-4 border-maroon-800 p-2 rounded-r-lg text-[11px] space-y-0.5 shadow-sm">
            <span className="text-[9px] font-bold text-maroon-900 uppercase tracking-wider block">
              ఈరోజు విశేష పూజ సూచన (Temple Special Advice):
            </span>
            <p className="text-ink/90 leading-snug" lang="te">
              {panchangamData.specialNotice}
            </p>
          </div>

        </div>

        {/* Footer Actions (E-Hundi Offering + Book Seva + Close) */}
        <div className="bg-maroon-900/5 px-3 py-2 border-t border-gold-500/20 flex items-center justify-between gap-2">
          <button
            onClick={() => {
              onClose();
              if (onOpenFeature) onOpenFeature("hundi");
            }}
            className="bg-maroon-900 hover:bg-maroon-950 text-gold-400 font-bold text-[11px] px-3 py-1.5 rounded-lg border border-gold-500/40 transition-colors shadow flex items-center gap-1 cursor-pointer"
          >
            🪙 Offer E-Hundi
          </button>

          <button
            onClick={() => {
              onClose();
              if (onBookSeva) onBookSeva();
            }}
            className="bg-dev-orange hover:bg-dev-orange/90 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors shadow flex items-center gap-1 cursor-pointer"
          >
            🛕 Book Seva →
          </button>

          <button
            onClick={onClose}
            className="bg-white hover:bg-gray-100 text-ink/70 font-bold text-[11px] px-2.5 py-1.5 rounded-lg border border-gray-300 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
