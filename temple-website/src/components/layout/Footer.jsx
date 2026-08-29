import siteConfig from "../../config/siteConfig";
import GopuramMotif from "../ui/GopuramMotif";

export default function Footer({ onSelectSection }) {
  return (
    <footer id="contact" className="bg-ink text-sandal/70 border-t border-gold-500/10">
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

        {/* Compliance & Security Seals Section */}
        <div className="mt-8 pt-8 border-t border-sandal/10 flex flex-wrap items-center justify-between gap-6 w-full col-span-full">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-sandal/60">
            <span className="text-[10px] uppercase tracking-wider text-gold-400/80">Compliance & Security Seals:</span>
            <div className="flex items-center gap-2 bg-sandal/5 border border-sandal/10 rounded px-2.5 py-1">
              <span className="text-[10px] text-green-400">🛡️ CERT-In</span>
              <span className="text-[9px] text-sandal/40">Secured</span>
            </div>
            <div className="flex items-center gap-2 bg-sandal/5 border border-sandal/10 rounded px-2.5 py-1">
              <span className="text-[10px] text-gold-400">🏛️ AP Endowments Act 1987</span>
              <span className="text-[9px] text-sandal/40">Approved</span>
            </div>
            <div className="flex items-center gap-2 bg-sandal/5 border border-sandal/10 rounded px-2.5 py-1">
              <span className="text-[10px] text-blue-400">🌐 GIGW</span>
              <span className="text-[9px] text-sandal/40">Compliant</span>
            </div>
          </div>
          <div className="text-[11px] text-sandal/40 md:text-right max-w-xs leading-normal">
            Administered by the Department of Endowments, Government of Andhra Pradesh.
          </div>
        </div>
      </div>

      <div className="border-t border-sandal/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.templeName} Devasthanam. All rights reserved.</span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] text-sandal/50 font-medium">
              <button onClick={() => onSelectSection?.("privacy_policy")} className="hover:text-gold-400 transition-colors focus:outline-none">Privacy Policy</button>
              <span>·</span>
              <button onClick={() => onSelectSection?.("terms_conditions")} className="hover:text-gold-400 transition-colors focus:outline-none">Terms & Conditions</button>
              <span>·</span>
              <button onClick={() => onSelectSection?.("refund_policy")} className="hover:text-gold-400 transition-colors focus:outline-none">Refund Policy</button>
              <span>·</span>
              <button onClick={() => onSelectSection?.("rules_guidelines")} className="hover:text-gold-400 transition-colors focus:outline-none">Dress Code & Guidelines</button>
              <span>·</span>
              <button onClick={() => onSelectSection?.("media_rti")} className="hover:text-gold-400 transition-colors focus:outline-none">RTI Disclosures</button>
            </div>
          </div>
          <div className="flex gap-4 shrink-0">
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
