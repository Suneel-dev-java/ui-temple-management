import siteConfig from "../../config/siteConfig";

const ROUTE_HUB = [
  { city: "Nellore (నెల్లూరు)", distance: "28 km", mode: "Via NH-16 / RTC Bus / Taxi (40 mins)" },
  { city: "Kavali (కావలి)", distance: "22 km", mode: "Via NH-16 / Auto / RTC Bus (30 mins)" },
  { city: "Tirupati (తిరుపతి)", distance: "135 km", mode: "Via NH-71 & NH-16 Highway (2.5 hrs)" },
  { city: "Chennai (చెన్నై)", distance: "198 km", mode: "Via Grand Southern Trunk / NH-16 (4 hrs)" },
  { city: "Vijayawada (విజయవాడ)", distance: "250 km", mode: "Via NH-16 Highway (4.5 hrs)" },
];

export default function TravelGuideModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fade-in text-ink"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-sandal border-2 border-gold-500 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-gold-400 p-4 border-b border-gold-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚗</span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight" lang="te">
                {siteConfig.templeShortName} ప్రయాణ మార్గదర్శి (Travel Guide)
              </h3>
              <p className="text-[10px] text-white/70">GPS Directions &amp; Pilgrimage Transport Info</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-lg font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-4 space-y-4 text-xs max-h-[75vh] overflow-y-auto">
          
          {/* Location Box */}
          <div className="bg-white p-3 rounded-xl border border-gold-500/30 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-maroon-900 block">
              Temple Address &amp; GPS Coordinates:
            </span>
            <h4 className="font-bold text-maroon-950 text-sm" lang="te">
              {siteConfig.templeName}
            </h4>
            <p className="text-ink/80 text-xs">{siteConfig.address}</p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://maps.google.com/?q=Dagadarthi+Sivalayam+Nellore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 shadow"
              >
                🗺️ Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Distance Table */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-maroon-900 uppercase text-[10px] tracking-wider block">
              Distances from Nearby Cities:
            </h4>
            <div className="space-y-1.5">
              {ROUTE_HUB.map((hub) => (
                <div key={hub.city} className="bg-white p-2.5 rounded-lg border border-gold-500/20 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-maroon-950 text-xs block">{hub.city}</span>
                    <span className="text-[10px] text-ink/65">{hub.mode}</span>
                  </div>
                  <span className="font-mono font-bold text-dev-orange text-xs bg-amber-50 px-2 py-1 rounded border border-amber-200">
                    {hub.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transport Info */}
          <div className="bg-amber-100/70 border border-amber-300 rounded-lg p-3 space-y-1.5">
            <span className="font-bold text-maroon-900 uppercase text-[10px] block">
              🚌 Public Transport &amp; RTC Bus Guidance:
            </span>
            <ul className="list-disc pl-4 text-ink/85 space-y-0.5 leading-snug">
              <li>Frequent RTC buses available from Nellore Bus Stand to Dagadarthi every 15-20 mins.</li>
              <li>Nearest Railway Stations: Kavali (KVZ - 22 km), Nellore (NLR - 28 km).</li>
              <li>Auto Stand available right at Dagadarthi bus stop to temple entrance.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
