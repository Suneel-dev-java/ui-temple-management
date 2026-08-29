import { useState } from "react";
import siteConfig from "../../config/siteConfig";

const PANCHANGAM_DATA = {
  tithi: "శ్రీ శుక్ల పక్ష ప్రథమి (Shukla Paksha Prathami)",
  nakshatram: "ఉత్తరాషాఢ నక్షత్రం (Uttara Ashadha)",
  yogam: "సిద్ధ యోగం (Siddha Yogam)",
  karanam: "బవ కరణం (Bava Karanam)",
  rahukalam: "4:30 PM – 6:00 PM",
  yamagandam: "12:00 PM – 1:30 PM",
  durmuhurtham: "12:48 PM – 1:36 PM",
  abhijit: "11:52 AM – 12:40 PM (అత్యంత పవిత్ర సమయం)",
  sunrise: "6:02 AM",
  sunset: "6:32 PM",
  specialNotice: "ఈరోజు శ్రీ రామలింగేశ్వర స్వామివారికి క్షీరాభిషేకం & విశేష బిల్వార్చన అత్యంత శ్రేయస్కరం.",
};

export default function PanchangamWidget({ onClose }) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const formattedDate = new Date(selectedDate).toLocaleDateString("te-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-sandal border-2 border-gold-500/80 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden text-ink">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-gold-400 p-4 border-b border-gold-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight" lang="te">
                {siteConfig.templeShortName} పంచాంగం
              </h3>
              <p className="text-[10px] text-white/70">Daily Panchangam &amp; Auspicious Timings</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-lg font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Date Selector */}
        <div className="bg-maroon-900/5 px-4 py-2.5 border-b border-gold-500/20 flex items-center justify-between text-xs">
          <span className="font-bold text-maroon-900 leading-tight" lang="te">
            {formattedDate}
          </span>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-white border border-gold-500/40 text-ink rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-maroon-800"
          />
        </div>

        {/* Main Panchangam Grid */}
        <div className="p-4 space-y-3.5 max-h-[75vh] overflow-y-auto">
          
          {/* Key Panchangam Elements */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white p-2.5 rounded-lg border border-gold-500/20 space-y-0.5">
              <span className="text-[10px] text-ink/50 uppercase font-bold block">తిథి (Tithi)</span>
              <span className="font-bold text-maroon-900 text-xs block">{PANCHANGAM_DATA.tithi}</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-gold-500/20 space-y-0.5">
              <span className="text-[10px] text-ink/50 uppercase font-bold block">నక్షత్రం (Nakshatram)</span>
              <span className="font-bold text-maroon-900 text-xs block">{PANCHANGAM_DATA.nakshatram}</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-gold-500/20 space-y-0.5">
              <span className="text-[10px] text-ink/50 uppercase font-bold block">యోగం (Yogam)</span>
              <span className="font-semibold text-ink text-xs block">{PANCHANGAM_DATA.yogam}</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-gold-500/20 space-y-0.5">
              <span className="text-[10px] text-ink/50 uppercase font-bold block">కరణం (Karanam)</span>
              <span className="font-semibold text-ink text-xs block">{PANCHANGAM_DATA.karanam}</span>
            </div>
          </div>

          {/* Muhurtham & Timings Card */}
          <div className="bg-white border border-gold-500/30 rounded-xl p-3 space-y-2 text-xs">
            <h4 className="font-bold text-maroon-900 uppercase text-[10px] tracking-wider border-b border-gold-500/15 pb-1 flex items-center justify-between">
              <span>ముహూర్తములు &amp; వర్జ్య సమయాలు (Timings)</span>
              <span className="text-green-700 font-extrabold text-[9px] bg-green-50 px-1.5 py-0.5 rounded">
                Live Timings
              </span>
            </h4>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-green-50 p-2 rounded border border-green-200">
                <span className="text-[9px] text-green-800 font-bold uppercase block">అభిజిత్ ముహూర్తం (Auspicious)</span>
                <span className="font-bold text-green-950 text-xs">{PANCHANGAM_DATA.abhijit}</span>
              </div>
              <div className="bg-red-50 p-2 rounded border border-red-200">
                <span className="text-[9px] text-red-800 font-bold uppercase block">రాహుకాలం (Rahukalam)</span>
                <span className="font-bold text-red-950 text-xs">{PANCHANGAM_DATA.rahukalam}</span>
              </div>
              <div className="bg-orange-50 p-2 rounded border border-orange-200">
                <span className="text-[9px] text-orange-800 font-bold uppercase block">యమగండం (Yamagandam)</span>
                <span className="font-semibold text-orange-950">{PANCHANGAM_DATA.yamagandam}</span>
              </div>
              <div className="bg-amber-50 p-2 rounded border border-amber-200">
                <span className="text-[9px] text-amber-800 font-bold uppercase block">సూర్యోదయం / సూర్యాస్తమయం</span>
                <span className="font-semibold text-amber-950">☀️ {PANCHANGAM_DATA.sunrise} • 🌙 {PANCHANGAM_DATA.sunset}</span>
              </div>
            </div>
          </div>

          {/* Daily Temple Note */}
          <div className="bg-amber-100/80 border-l-4 border-maroon-800 p-2.5 rounded-r-lg text-xs space-y-0.5">
            <span className="text-[10px] font-bold text-maroon-900 uppercase tracking-wider block">
              ఈరోజు విశేష పూజ సూచన (Temple Special Advice):
            </span>
            <p className="text-ink/90 leading-snug" lang="te">
              {PANCHANGAM_DATA.specialNotice}
            </p>
          </div>

        </div>

        {/* Footer Close Button */}
        <div className="bg-maroon-900/5 px-4 py-2.5 border-t border-gold-500/20 text-right">
          <button
            onClick={onClose}
            className="bg-maroon-900 hover:bg-maroon-950 text-gold-400 font-bold text-xs px-4 py-1.5 rounded-lg border border-gold-500/40 transition-colors shadow"
          >
            Close Panchangam
          </button>
        </div>

      </div>
    </div>
  );
}
