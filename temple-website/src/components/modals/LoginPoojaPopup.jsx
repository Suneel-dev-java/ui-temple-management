import { useState, useEffect } from "react";
import poojaCalendar, { EVENT_TYPE_META } from "../../config/poojaData";

export default function LoginPoojaPopup({ onClose, onBookPooja, onDonatePooja, onViewCalendar }) {
  // Determine current Telugu month (approx match from solar month index)
  const currentMonthIdx = new Date().getMonth(); // 0-11
  const teluguMonthIdx = (currentMonthIdx - 2 + 12) % 12; // March = Chaitra (idx 0)
  const activeMonth = poojaCalendar[Math.min(teluguMonthIdx, 11)] || poojaCalendar[0];

  // Pick today's event or the featured grand festival of the month
  const featuredEvent = activeMonth.days.find((d) => d.type === "festival") || activeMonth.days[0];
  const meta = EVENT_TYPE_META[featuredEvent.type] || EVENT_TYPE_META.festival;

  const [donationAmt, setDonationAmt] = useState("501");
  const [devoteeName, setDevoteeName] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-gold-500/50 transform transition-all">
        
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-maroon-900 via-maroon-950 to-maroon-900 text-gold-400 text-xs font-bold px-4 py-2 flex items-center justify-between border-b border-gold-500/30">
          <span className="flex items-center gap-1.5" lang="te">
            <span className="animate-pulse text-base">✨</span>
            ఈ మాసము పవిత్ర పూజా విశేషములు ({activeMonth.shortMonth})
          </span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors text-lg font-bold px-1"
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>

        {/* Image Header */}
        <div className="relative h-52 sm:h-56 overflow-hidden">
          <img
            src={featuredEvent.image || activeMonth.imageUrl}
            alt={featuredEvent.pooja}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1567591370372-b82b18ca1d04?auto=format&fit=crop&w=600&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Instagram Link Badge */}
          <a
            href="https://www.instagram.com/sivalayam_dagadarthi_nellore"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            @sivalayam_dagadarthi
          </a>

          {/* Event Badge & Title Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-gold-300 text-xs font-bold uppercase tracking-wider" lang="te">
                {activeMonth.teluguMonth} • Day {featuredEvent.day}
              </p>
              <h3 className="text-white font-bold text-lg sm:text-xl leading-tight drop-shadow-md">
                {featuredEvent.pooja}
              </h3>
            </div>
            <span className={`${meta.color} text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shrink-0 shadow`}>
              {meta.label}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          
          {/* Month Yagam Highlight */}
          <div className="bg-sandal/20 border-l-4 border-maroon-800 p-3 rounded-r-xl space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-maroon-900">
              మాస యజ్ఞం • Monthly Yagam
            </p>
            <h4 className="text-sm font-bold text-maroon-950 leading-snug" lang="te">
              {activeMonth.yagam}
            </h4>
            <p className="text-xs text-ink/70">
              {activeMonth.descEn}
            </p>
          </div>

          {/* Event Details Row */}
          <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink/80 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-maroon-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              {featuredEvent.time}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {featuredEvent.tithi}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={() => {
                if (onBookPooja) onBookPooja(featuredEvent, activeMonth);
                onClose();
              }}
              className="bg-dev-orange text-white text-xs font-bold py-2.5 px-3 rounded-xl hover:bg-dev-orange/90 transition-colors shadow flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
              Book Seva ({activeMonth.price})
            </button>

            <button
              onClick={() => {
                if (onDonatePooja) onDonatePooja(activeMonth, parseFloat(donationAmt) || 501, devoteeName || "Anonymous Devotee");
                onClose();
              }}
              className="bg-maroon-900 text-gold-400 text-xs font-bold py-2.5 px-3 rounded-xl hover:bg-maroon-950 transition-colors shadow flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Donate to Yagam
            </button>
          </div>

          {/* Quick Calendar Link */}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-ink/50 font-medium">Explore all 12 Telugu months:</span>
            <button
              onClick={() => {
                if (onViewCalendar) onViewCalendar();
                onClose();
              }}
              className="text-maroon-900 hover:text-dev-orange font-bold flex items-center gap-1 transition-colors"
            >
              Pooja Calendar →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
