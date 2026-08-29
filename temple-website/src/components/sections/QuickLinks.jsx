import siteConfig from "../../config/siteConfig";
import { icons } from "../ui/icons";

export default function QuickLinks({ onOpenFeature }) {
  const handleClick = (e, q) => {
    if (q.feature && onOpenFeature) {
      e.preventDefault();
      onOpenFeature(q.feature);
    }
  };

  const quickLinksWithFeatures = [
    { title: "Online Seva Booking", desc: "Reserve sevas & darshan slots in advance", href: "#sevas", icon: "flame" },
    { title: "360° Virtual Darshan", desc: "Interactive shrine tour & bell ringing", feature: "darshan", icon: "eye" },
    { title: "E-Hundi Offering", desc: "Annadanam, Goshala & Temple donations", feature: "hundi", icon: "hand" },
    { title: "Today's Panchangam", desc: "Tithi, nakshatram & auspicious timings", feature: "panchangam", icon: "calendar" },
    { title: "Pilgrim Travel Guide", desc: "GPS route, RTC buses & transport", feature: "travel", icon: "home" },
    { title: "Accommodation", desc: "Book cottages & guest houses", href: "#accommodation", icon: "home" },
  ];

  return (
    <section className="bg-transparent select-none">
      <div className="max-w-6xl mx-auto px-4 -mt-10 md:-mt-14 relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 pb-4">
        {quickLinksWithFeatures.map((q) => (
          <a
            key={q.title}
            href={q.href || "#"}
            onClick={(e) => handleClick(e, q)}
            className="bg-white/95 backdrop-blur-sm border border-gold-500/25 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all rounded-xl p-3.5 flex flex-col items-center text-center gap-2 group cursor-pointer"
          >
            <span className="text-dev-orange transform group-hover:scale-110 transition-transform">{icons[q.icon]}</span>
            <span className="font-display text-xs sm:text-sm text-maroon-950 font-bold leading-tight">{q.title}</span>
            <span className="text-[10px] text-ink/65 leading-snug">{q.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
