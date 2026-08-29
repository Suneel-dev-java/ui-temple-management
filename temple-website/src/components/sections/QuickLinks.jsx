import siteConfig from "../../config/siteConfig";
import { icons } from "../ui/icons";

export default function QuickLinks() {
  return (
    <section className="bg-transparent">
      <div className="max-w-6xl mx-auto px-4 -mt-10 md:-mt-14 relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 pb-4">
        {siteConfig.quickLinks.map((q) => (
          <a
            key={q.title}
            href={q.href}
            className="bg-white/90 backdrop-blur-sm border border-dev-blue/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all rounded-sm p-4 flex flex-col items-center text-center gap-2"
          >
            <span className="text-dev-orange">{icons[q.icon]}</span>
            <span className="font-display text-sm text-dev-blue font-semibold">{q.title}</span>
            <span className="text-[11px] text-ink/60 leading-snug">{q.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
