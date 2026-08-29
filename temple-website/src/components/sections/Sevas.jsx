import siteConfig from "../../config/siteConfig";
import SectionHeading from "../ui/SectionHeading";

export default function Sevas({ onBook }) {
  return (
    <section id="sevas" className="bg-maroon-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="Nithya Sevas" title="Sevas & Rituals" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.sevas.map((s) => (
            <div
              key={s.name}
              className="bg-maroon-800/60 border border-gold-500/20 rounded-sm p-5 flex flex-col gap-2 hover:border-gold-400/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-gold-400">{s.name}</h3>
                <span className="text-xs text-sandal/60 shrink-0 mt-1">{s.time}</span>
              </div>
              <p className="text-sm text-sandal/70 leading-snug flex-1">{s.desc}</p>
              <div className="flex items-center justify-between pt-2 border-t border-sandal/10">
                <span className="text-gold-400 font-semibold">{s.price}</span>
                <button
                  onClick={() => onBook(s)}
                  className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-maroon-950/40 hover:bg-maroon-950 px-3 py-1.5 rounded border border-gold-500/20 hover:border-gold-500/60 transition-all"
                >
                  Book →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
