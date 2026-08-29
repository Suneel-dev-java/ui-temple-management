import siteConfig from "../../config/siteConfig";
import SectionHeading from "../ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-maroon-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="Darshan" title="Gallery" light />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {siteConfig.gallery.map((g) => (
            <div
              key={g.caption}
              className="aspect-[4/3] bg-maroon-800/60 border border-gold-500/20 rounded-sm flex items-end p-3 relative overflow-hidden group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gold-500/20 font-display text-2xl">
                {g.caption}
              </div>
              <span className="relative text-xs text-sandal/80 uppercase tracking-widest">{g.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
