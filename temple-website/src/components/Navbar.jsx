import { useState, useEffect } from "react";
import siteConfig from "../config/siteConfig";
import GopuramMotif from "./GopuramMotif";

export default function Navbar({ onSelectAboutSection }) {
  const [open, setOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    const formatDateTime = () => {
      const now = new Date();
      const datePart = now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const timePart = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      return `${datePart} - ${timePart}`;
    };

    setTimeStr(formatDateTime());
    const timer = setInterval(() => setTimeStr(formatDateTime()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Utility Bar (Dark Blue) */}
      <div className="bg-dev-blue text-white/90 text-[10px] md:text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left Side: Date/Time & Socials */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold tracking-wide border-r border-white/20 pr-4">
              {timeStr || "Friday, 28 August 2026 - 04:25 PM"}
            </span>
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-dev-orange transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-dev-orange transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-dev-orange transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-dev-orange transition-colors"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Helpers */}
          <nav className="flex items-center gap-3.5 text-[9px] md:text-xs">
            {siteConfig.utilityLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:underline flex items-center gap-1 font-semibold text-white/95"
              >
                {l.label === "SRISAILA TV" && (
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="13" rx="2" />
                    <path d="M17 2l-5 5-5-5" />
                  </svg>
                )}
                {l.label === "ENGLISH" && (
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10m0-20a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10M2 12h20" />
                  </svg>
                )}
                {l.label === "PRINT A TICKET" && (
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                    <path d="M6 14h12v8H6z" />
                  </svg>
                )}
                {l.label === "SIGN IN / SIGN UP" && (
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Navbar (Orange) */}
      <div className="bg-dev-orange text-white">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col gap-2">
          {/* Top Row: Logo & Utility Helpers */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Identity */}
            <a href="#home" className="flex items-center gap-2.5">
              {/* White Circular Badge Logo */}
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md p-1 shrink-0">
                <GopuramMotif className="w-8 h-8 text-dev-orange" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-sm sm:text-base md:text-lg text-white tracking-wide">
                  {siteConfig.templeName}
                </div>
                <div className="text-[10px] md:text-xs text-white/80 font-semibold mt-0.5">
                  {siteConfig.place}
                </div>
              </div>
            </a>

            {/* Helpers (Volunteer, Shop, Search, Cart) - Desktop only */}
            <div className="hidden md:flex items-center gap-4 text-xs font-semibold">
              <a href="#volunteer" className="hover:text-white/80 transition-colors">Volunteer</a>
              <a href="#shop" className="hover:text-white/80 transition-colors">Shop</a>
              
              {/* Shopping Cart */}
              <a href="#cart" aria-label="Cart" className="hover:text-white/80 transition-colors">
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
              </a>

              {/* Search */}
              <a href="#search" aria-label="Search" className="hover:text-white/80 transition-colors">
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </a>
            </div>

            {/* Mobile Actions and Hamburger Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <a href="#shop" aria-label="Shop">
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
              </a>
              <a href="#search" aria-label="Search">
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </a>
              <button
                className="text-white hover:bg-white/10 p-1 rounded"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Row: Main Navigation Links (Desktop) */}
          <div className="hidden md:block border-t border-white/10 pt-2 mt-1">
            <nav className="flex flex-wrap items-center justify-center gap-1 lg:gap-2.5 text-[10px] lg:text-xs xl:text-[13px] font-bold uppercase tracking-wider w-full">
              {siteConfig.nav.map((l) => {
                if (l.subItems && l.subItems.length > 0) {
                  const isOpen = hoveredMenu === l.label;
                  return (
                    <div
                      key={l.label}
                      className="relative text-white"
                      onMouseEnter={() => setHoveredMenu(l.label)}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <button
                        onClick={() => setHoveredMenu(isOpen ? null : l.label)}
                        className="px-2.5 py-1 rounded hover:bg-white/10 transition-all whitespace-nowrap border border-transparent hover:border-white/10 flex items-center gap-1 focus:outline-none uppercase font-bold"
                      >
                        {l.label} <span className="text-[9px] opacity-70">▼</span>
                      </button>
                      
                      {/* Dropdown Panel - positioned top-full with padding-top to avoid hover gaps */}
                      {isOpen && (
                        <div className="absolute left-0 top-full pt-1.5 z-50">
                          <div className="bg-white text-ink rounded-lg shadow-2xl border border-gold-500/25 py-2 w-52 font-body text-xs text-left normal-case tracking-normal">
                            {l.subItems.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => {
                                  onSelectAboutSection(sub.id);
                                  setHoveredMenu(null);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-dev-blue/5 hover:text-dev-orange transition-colors font-semibold"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => {
                      onSelectAboutSection(null);
                      setHoveredMenu(null);
                    }}
                    className="px-2 py-1 rounded hover:bg-white/10 transition-all whitespace-nowrap border border-transparent hover:border-white/10 text-white"
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <nav className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-2 bg-dev-orange/95 backdrop-blur-sm">
            <div className="flex flex-col gap-2 pb-2.5 border-b border-white/10 text-xs font-semibold">
              <a href="#volunteer" onClick={() => setOpen(false)} className="hover:text-white/80">Volunteer</a>
              <a href="#shop" onClick={() => setOpen(false)} className="hover:text-white/80">Shop</a>
            </div>
            {siteConfig.nav.map((l) => {
              if (l.subItems && l.subItems.length > 0) {
                return (
                  <div key={l.label} className="flex flex-col gap-1 py-1 border-b border-white/5">
                    <span className="uppercase font-bold tracking-wide text-xs text-white/50 text-left">
                      {l.label}
                    </span>
                    <div className="flex flex-col gap-1 pl-3 mt-1 text-xs text-left">
                      {l.subItems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => { onSelectAboutSection(sub.id); setOpen(false); }}
                          className="text-left py-1.5 text-white hover:text-white/80 font-semibold"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => { onSelectAboutSection(null); setOpen(false); }}
                  className="py-1.5 border-b border-white/5 hover:text-white/80 transition-colors uppercase font-bold tracking-wide text-xs text-left"
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
