import siteConfig from "../config/siteConfig";
import SectionHeading from "./SectionHeading";

export default function Accommodation() {
  return (
    <section id="accommodation" className="bg-transparent py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading eyebrow="Stay" title="Accommodation" />
        <div className="grid sm:grid-cols-3 gap-5">
          {siteConfig.accommodation.map((a) => (
            <div key={a.name} className="bg-white/90 backdrop-blur-sm border border-dev-blue/10 rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="h-28 bg-dev-blue/5 flex items-center justify-center text-dev-blue/30 font-display text-sm">
                photo
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="font-display text-lg text-dev-blue font-bold">{a.name}</h3>
                <p className="text-sm text-ink/70 leading-snug flex-1">{a.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-dev-blue/10">
                  <span className="text-dev-orange font-semibold">{a.price}</span>
                  <button className="text-xs uppercase tracking-widest text-dev-blue hover:text-dev-orange transition-colors font-bold">
                    Reserve →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
