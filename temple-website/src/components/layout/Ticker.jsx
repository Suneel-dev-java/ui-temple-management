import siteConfig from "../../config/siteConfig";

export default function Ticker() {
  const items = [...siteConfig.announcements, ...siteConfig.announcements];
  return (
    <div id="announcements" className="bg-sandal border-y border-turmeric/40 overflow-hidden shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center">
        <span className="shrink-0 bg-maroon-800 text-gold-400 text-xs font-bold uppercase tracking-widest px-4 py-2">
          Announcements
        </span>
        <div className="relative flex-1 overflow-hidden py-2">
          <div className="flex gap-16 whitespace-nowrap animate-[scroll_28s_linear_infinite] motion-reduce:animate-none">
            {items.map((a, i) => (
              <span key={i} className="text-sm text-ink font-semibold tracking-wide">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
