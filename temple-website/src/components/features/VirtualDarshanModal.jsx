import { useState } from "react";
import ramalingeswaraImg from "../../assets/ramalingeswara_swamy.png";
import durgaBhavaniImg from "../../assets/durga_bhavani.png";
import mallikarjunaImg from "../../assets/mallikarjuna_swamy.png";
import heroImg from "../../assets/hero.png";

const SHRINES = [
  {
    id: "main_lingam",
    title: "శ్రీ రామలింగేశ్వర స్వామి మూలవిరాట్ (Sanctum Sanctorum)",
    desc: "Ancient Swayambhu Shiva Lingam adorned with sacred Bilva leaves, flower garlands & Vibhuti.",
    image: ramalingeswaraImg,
    mantra: "ఓం నమః శివాయ • Om Namah Shivaya",
  },
  {
    id: "durga_bhavani",
    title: "శ్రీ దుర్గా భవానీ అమ్మవారి ఆలయం (Goddess Durga Shrine)",
    desc: "Divine Mother Durga Bhavani granting health, prosperity & obstacle removal to all devotees.",
    image: durgaBhavaniImg,
    mantra: "ఓం శ్రీ దుర్గాదేవ్యై నమః • Om Sri Durga Devyai Namah",
  },
  {
    id: "mallikarjuna",
    title: "శ్రీ మల్లికార్జున స్వామి ఉపాలయం (Mallikarjuna Shrine)",
    desc: "Sacred shrine dedicated to Lord Mallikarjuna & Bhramaramba Devi.",
    image: mallikarjunaImg,
    mantra: "ఓం శ్రీ మల్లికార్జునాయ నమః • Om Sri Mallikarjunaya Namah",
  },
  {
    id: "gopuram",
    title: "రాజగోపురం & ధ్వజస్తంభ దర్శనం (Dhwajasthambham & Gopuram)",
    desc: "Magnificent Gopuram gateway and sacred Dhwajasthambham flagstaff.",
    image: heroImg,
    mantra: "హర హర మహాదేవ • Hara Hara Mahadeva",
  },
];

export default function VirtualDarshanModal({ onClose, onBookSeva }) {
  const [activeShrineIdx, setActiveShrineIdx] = useState(0);
  const [flowersOffered, setFlowersOffered] = useState(0);
  const [bellRung, setBellRung] = useState(false);

  const activeShrine = SHRINES[activeShrineIdx];

  const handleRingBell = () => {
    setBellRung(true);
    // Play bell sound
    try {
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3");
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch {
      // ignore audio autoplay restriction
    }
    setTimeout(() => setBellRung(false), 1200);
  };

  const handleOfferFlower = () => {
    setFlowersOffered((prev) => prev + 1);
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border-2 border-gold-500/80 text-ink">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-gold-400 p-3.5 border-b border-gold-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛕</span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight" lang="te">
                వర్చువల్ 360° ప్రత్యక్ష దర్శనం
              </h3>
              <p className="text-[10px] text-white/70">Interactive Virtual Shrine Tour &amp; Offerings</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-lg font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Shrine Selection Tabs */}
        <div className="flex border-b border-gold-500/20 bg-maroon-950/10 overflow-x-auto">
          {SHRINES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveShrineIdx(idx)}
              className={`px-3 py-2 text-xs font-bold whitespace-nowrap transition-colors border-r border-gold-500/10 ${
                activeShrineIdx === idx
                  ? "bg-sandal text-maroon-900 border-b-2 border-b-maroon-800"
                  : "text-ink/65 hover:text-ink hover:bg-sandal/30"
              }`}
            >
              {s.id === "main_lingam" ? "1. మూలవిరాట్" : s.id === "durga_bhavani" ? "2. అమ్మవారు" : s.id === "mallikarjuna" ? "3. మల్లికార్జున" : "4. గోపురం"}
            </button>
          ))}
        </div>

        {/* Main Viewing Viewport */}
        <div className="relative h-64 sm:h-80 bg-black overflow-hidden group">
          <img
            src={activeShrine.image}
            alt={activeShrine.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

          {/* Interactive Floating Flower FX */}
          {flowersOffered > 0 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <span className="text-4xl animate-ping opacity-75">🌸</span>
            </div>
          )}

          {/* Bell Animation FX */}
          {bellRung && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-maroon-950 font-black text-xs px-4 py-1.5 rounded-full shadow-2xl border border-white animate-bounce">
              🔔 🔔 ఘంటా నాదం (Temple Bell Sounding)... 🔔 🔔
            </div>
          )}

          {/* Mantra Banner */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white/90">
            <span className="text-[11px] font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/40 text-gold-300">
              {activeShrine.mantra}
            </span>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <h4 className="text-white font-bold text-base sm:text-lg leading-tight drop-shadow" lang="te">
              {activeShrine.title}
            </h4>
            <p className="text-white/80 text-xs max-w-lg leading-snug drop-shadow-md">
              {activeShrine.desc}
            </p>
          </div>
        </div>

        {/* Interactive Controls Bar */}
        <div className="p-3.5 bg-sandal/40 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleRingBell}
              className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 font-bold px-3 py-1.5 rounded-lg border border-gold-500/40 transition-colors shadow flex items-center gap-1 cursor-pointer"
            >
              🔔 Ring Temple Bell
            </button>

            <button
              onClick={handleOfferFlower}
              className="bg-amber-100 hover:bg-amber-200 text-maroon-950 font-bold px-3 py-1.5 rounded-lg border border-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              🌸 Offer Flower ({flowersOffered})
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookSeva) onBookSeva();
            }}
            className="bg-dev-orange hover:bg-dev-orange/90 text-white font-bold px-4 py-1.5 rounded-lg transition-colors shadow flex items-center gap-1 cursor-pointer"
          >
            Book Online Darshan / Seva →
          </button>

        </div>

      </div>
    </div>
  );
}
