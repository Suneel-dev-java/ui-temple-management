import siteConfig from "../config/siteConfig";
import GopuramMotif from "./GopuramMotif";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-sandal/70">
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GopuramMotif className="w-7 h-7 text-gold-400" />
            <span className="font-display text-gold-400 text-lg">{siteConfig.templeShortName}</span>
          </div>
          <p className="text-sm leading-relaxed">{siteConfig.address}</p>
          <p className="text-sm mt-3">{siteConfig.phone}</p>
          <p className="text-sm">{siteConfig.email}</p>
        </div>

        {siteConfig.footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="text-gold-400 font-display text-sm uppercase tracking-widest mb-3">{col.heading}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gold-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-sandal/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} {siteConfig.templeName} Devasthanam. All rights reserved.</span>
          <div className="flex gap-4">
            {Object.entries(siteConfig.social).map(([k, href]) => (
              <a key={k} href={href} className="capitalize hover:text-gold-400 transition-colors">
                {k}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
