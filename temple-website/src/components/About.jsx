import siteConfig from "../config/siteConfig";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { about } = siteConfig;
  return (
    <section id="about" className="bg-transparent py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading eyebrow="Sthala Purana" title={about.heading} />
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-ink/80 leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-dev-blue/5 shadow-sm">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {about.highlights.map((h) => (
              <div key={h.label} className="bg-white/90 backdrop-blur-sm border border-dev-blue/10 rounded-xl p-4 text-center shadow-sm">
                <dt className="text-[11px] uppercase tracking-widest text-dev-orange mb-1">{h.label}</dt>
                <dd className="font-display text-xl text-dev-blue font-bold">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
