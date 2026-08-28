import siteConfig from "../config/siteConfig";

export default function Hero() {
  const { hero } = siteConfig;
  return (
    <section id="home" className="relative bg-maroon-800 text-sandal overflow-hidden">
      {/* layered tier silhouettes, echoing a gopuram's stacked storeys */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 500"
        aria-hidden="true"
      >
        <polygon points="0,500 0,320 200,260 400,320 600,220 800,320 1000,260 1200,320 1200,500" fill="#231409" />
        <polygon points="0,500 0,380 300,340 600,300 900,340 1200,380 1200,500" fill="#2B0A0C" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
        <p className="uppercase tracking-[0.3em] text-gold-400 text-xs md:text-sm mb-4">{hero.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-sandal mb-5 leading-tight">
          {hero.heading}
        </h1>
        <p className="max-w-2xl mx-auto text-sandal/80 text-base md:text-lg mb-10">{hero.subheading}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="bg-gold-500 text-maroon-950 font-semibold px-7 py-3 rounded-sm hover:bg-gold-400 transition-colors"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="border border-gold-400 text-gold-400 font-semibold px-7 py-3 rounded-sm hover:bg-gold-400 hover:text-maroon-950 transition-colors"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>

      <div className="kolam-rule text-gold-500/60 bg-maroon-900" />
    </section>
  );
}
