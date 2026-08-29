import { useState, useEffect } from "react";
import poojaCalendar, { EVENT_TYPE_META } from "../../config/poojaData";
import SectionHeading from "../ui/SectionHeading";

/* ── Pooja Detail Popup ──────────────────────────────────────── */
function PoojaPopup({ event, month, onClose, onBook, onDonate }) {
  const meta = EVENT_TYPE_META[event.type] || EVENT_TYPE_META.daily;
  const [donationAmt, setDonationAmt] = useState("501");
  const [devoteeName, setDevoteeName] = useState("");

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in border-2 border-gold-500/40">
        {/* Header Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.pooja}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1567591370372-b82b18ca1d04?auto=format&fit=crop&w=400&q=80"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg"
            aria-label="Close"
          >×</button>
          {/* Instagram badge */}
          <a
            href="https://www.instagram.com/sivalayam_dagadarthi_nellore"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <circle cx="12" cy="12" r="3"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
            @sivalayam_dagadarthi
          </a>
          {/* Day badge */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
            <div>
              <p className="text-white text-xs font-semibold opacity-80">{month.teluguMonth} • Day {event.day}</p>
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{event.pooja}</h3>
            </div>
            <span className={`${meta.color} text-white text-[9px] font-extrabold uppercase px-2 py-1 rounded-md shrink-0`}>
              {meta.label}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Tithi + Time */}
          <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink/70">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-maroon-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {event.tithi}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-ink/80 leading-relaxed border-l-2 border-gold-500/40 pl-3">
            {event.desc}
          </p>

          {/* Action row */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={() => { onBook(event, month); onClose(); }}
              className="bg-dev-orange text-white text-xs font-bold py-2.5 px-3 rounded-lg hover:bg-dev-orange/90 transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7"/></svg>
              Book This Pooja
            </button>
            <button
              onClick={() => {
                onDonate(month, parseFloat(donationAmt) || 501, devoteeName || "Anonymous Devotee");
                onClose();
              }}
              className="bg-maroon-900 text-gold-400 text-xs font-bold py-2.5 px-3 rounded-lg hover:bg-maroon-950 transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Donate to Yagam
            </button>
          </div>

          {/* Quick donation input */}
          <div className="bg-sandal/10 rounded-xl p-3 space-y-2">
            <p className="text-[11px] text-ink/60 font-semibold uppercase tracking-wider">Quick Donation Amount</p>
            <div className="flex flex-wrap gap-1.5">
              {["108", "251", "501", "1116", "2501"].map((v) => (
                <button
                  key={v}
                  onClick={() => setDonationAmt(v)}
                  className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-all ${
                    donationAmt === v
                      ? "bg-maroon-900 text-gold-400 border-maroon-900"
                      : "bg-white text-ink/70 hover:bg-sandal/30 border-gold-500/20"
                  }`}
                >₹{v}</button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Your name for Sankalpam (optional)"
              value={devoteeName}
              onChange={(e) => setDevoteeName(e.target.value)}
              className="w-full border border-gold-500/20 rounded px-3 py-1.5 text-xs focus:ring-1 focus:ring-maroon-800 focus:outline-none placeholder:text-ink/30 text-ink bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Day Card ──────────────────────────────────────────────── */
function DayCard({ event, onClick }) {
  const meta = EVENT_TYPE_META[event.type] || EVENT_TYPE_META.daily;
  return (
    <button
      onClick={() => onClick(event)}
      className={`group relative bg-white border border-gold-500/20 rounded-xl overflow-hidden text-left hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 hover:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-maroon-700`}
    >
      {/* Coloured top strip */}
      <div className={`h-1.5 w-full ${meta.color}`} />
      {/* Image thumbnail */}
      <div className="relative h-28 overflow-hidden">
        <img
          src={event.image}
          alt={event.pooja}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1567591370372-b82b18ca1d04?auto=format&fit=crop&w=400&q=80"; }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Day number badge */}
        <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-maroon-900/90 text-gold-400 text-[10px] font-extrabold flex items-center justify-center shadow-md border border-gold-500/30">
          {event.day}
        </div>
      </div>
      {/* Card body */}
      <div className="p-3 space-y-1">
        <p className="text-[9px] font-bold uppercase tracking-wider text-ink/40">{event.tithi}</p>
        <p className="text-xs font-bold text-maroon-900 leading-tight line-clamp-2">{event.pooja}</p>
        <p className="text-[10px] text-ink/55 line-clamp-1">{event.time}</p>
      </div>
      {/* Hover overlay — "View Details" */}
      <div className="absolute inset-0 bg-maroon-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-white text-xs font-bold bg-gold-500 text-maroon-950 px-3 py-1.5 rounded-full">View Details →</span>
      </div>
    </button>
  );
}

/* ── Main Component ──────────────────────────────────────────── */
export default function PoojaCalendar({ onClose, onBookPooja, onDonatePooja }) {
  const currentMonthIdx = new Date().getMonth(); // 0-11
  // Map calendar months roughly to Telugu months starting from Chaitra (March = index 2)
  const teluguMonthIdx = ((currentMonthIdx - 2 + 12) % 12);
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(Math.min(teluguMonthIdx, 11));
  const [popupEvent, setPopupEvent] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [toast, setToast] = useState(null);

  const activeMonth = poojaCalendar[selectedMonthIdx];
  const filteredDays = filterType === "all"
    ? activeMonth.days
    : activeMonth.days.filter((d) => d.type === filterType);

  const handleBook = (event, month) => {
    if (onBookPooja) {
      onBookPooja({
        name: event.pooja,
        price: month.price,
        desc: event.desc,
        time: event.time,
      });
    }
  };

  const handleDonate = (month, amount, name) => {
    if (onDonatePooja) {
      onDonatePooja(month, amount, name);
      setToast(`✅ Donation of ₹${amount} for ${month.shortMonth} added to cart!`);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const typeFilters = [
    { value: "all", label: "All Events" },
    { value: "festival", label: "Grand Festivals" },
    { value: "recurring", label: "Recurring Tithis" },
    { value: "weekly", label: "Weekly Sevas" },
    { value: "special", label: "Special Poojas" },
  ];

  return (
    <section className="min-h-screen py-0">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-green-800 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-2xl border border-green-600/30 animate-bounce">
          {toast}
        </div>
      )}

      {/* Popup */}
      {popupEvent && (
        <PoojaPopup
          event={popupEvent}
          month={activeMonth}
          onClose={() => setPopupEvent(null)}
          onBook={handleBook}
          onDonate={handleDonate}
        />
      )}

      {/* ── Hero header band ──────────────────────────────── */}
      <div className="relative bg-maroon-950 overflow-hidden">
        {/* Background temple image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${activeMonth.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/80 via-maroon-950/60 to-maroon-950" />

        <div className="relative max-w-7xl mx-auto px-4 pt-6 pb-8">
          {/* Top navigation row */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-8">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm font-bold text-white/90 hover:text-gold-400 transition-colors"
            >
              ← Back to Home
            </button>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/sivalayam_dagadarthi_nellore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Follow on Instagram
              </a>
              <span className="text-xs font-bold text-gold-400 bg-gold-500/15 px-3 py-1.5 rounded-full border border-gold-500/30">
                Devasthanam Calendar
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-3 mb-8">
            <p className="uppercase tracking-[0.25em] text-xs text-gold-400/80 font-semibold">
              Yearly Poojas &amp; Yagams • @sivalayam_dagadarthi_nellore
            </p>
            <h2
              lang="te"
              className="font-display text-3xl md:text-5xl text-white font-bold leading-tight"
              style={{ fontFamily: "'Tiro Telugu', 'Noto Sans Telugu', serif", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              పూజా క్యాలెండర్ &amp; మాస యజ్ఞాలు
            </h2>
            <div className="flex justify-center"><div className="w-20 h-0.5 bg-gold-400/60 rounded-full" /></div>
          </div>

          {/* Controls: Month Dropdown + Filter */}
          <div className="flex flex-wrap items-center gap-3">
        {/* Month Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-maroon-900 text-gold-400 font-bold text-sm px-4 py-2.5 rounded-xl shadow-md hover:bg-maroon-950 transition-colors min-w-[220px] justify-between"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {activeMonth.teluguMonth}
              <span className="text-[10px] text-gold-400/60 font-normal">{activeMonth.shortMonth}</span>
            </span>
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gold-500/20 z-30 overflow-hidden">
              <div className="p-2 max-h-80 overflow-y-auto">
                {poojaCalendar.map((m, idx) => (
                  <button
                    key={m.shortMonth}
                    onClick={() => { setSelectedMonthIdx(idx); setIsDropdownOpen(false); setFilterType("all"); }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between gap-2 text-sm transition-colors ${
                      selectedMonthIdx === idx
                        ? "bg-maroon-900 text-gold-400 font-bold"
                        : "hover:bg-sandal/30 text-ink/80"
                    }`}
                  >
                    <span>
                      <span className="font-bold">{m.teluguMonth}</span>
                      <span className="block text-[10px] opacity-60">{m.month}</span>
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedMonthIdx === idx ? "bg-gold-500/20 text-gold-300" : "bg-maroon-900/10 text-maroon-700"}`}>
                      {m.days.length} events
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

          {/* Type Filter */}
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilterType(f.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  filterType === f.value
                    ? "bg-gold-500 text-maroon-950 border-gold-500 shadow-sm"
                    : "bg-white/15 text-white/90 border-white/20 hover:bg-white/25 hover:border-white/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>{/* end controls */}
        </div>{/* end header inner */}
      </div>{/* end hero header band */}

      {/* ── Content area — white card ──────────────────── */}
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Month hero card */}
      <div className="relative bg-maroon-900 rounded-2xl overflow-hidden mb-8 shadow-xl border border-maroon-800/50">
        <img
          src={activeMonth.imageUrl}
          alt={activeMonth.yagamEn}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="bg-gold-500/20 text-gold-400 border border-gold-500/30 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                {activeMonth.teluguMonth}
              </span>
              <span className="text-gold-400/60 text-xs">{activeMonth.month}</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-gold-400 leading-tight">
              {activeMonth.yagam}
            </h2>
            <p className="text-xs text-white/60 font-bold uppercase tracking-widest">{activeMonth.yagamEn}</p>
            <p className="text-sm text-white/75 leading-relaxed">{activeMonth.descEn}</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 space-y-3 border border-white/10">
              <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">Yagam Contribution</p>
              <p className="text-3xl font-black text-white">{activeMonth.price}</p>
              <p className="text-white/60 text-xs">{activeMonth.days.length} sacred events this month</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleBook(activeMonth.days[0] || {}, activeMonth)}
                  className="bg-dev-orange text-white text-xs font-bold py-2 rounded-lg hover:bg-dev-orange/90 transition-colors"
                >
                  Book Seva →
                </button>
                <button
                  onClick={() => handleDonate(activeMonth, 501, "")}
                  className="bg-gold-500 text-maroon-950 text-xs font-bold py-2 rounded-lg hover:bg-gold-400 transition-colors"
                >
                  Donate →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day Grid */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold text-maroon-900 text-sm font-display">
          {filteredDays.length} {filterType === "all" ? "Events" : typeFilters.find(f=>f.value===filterType)?.label} in {activeMonth.shortMonth}
        </h3>
        <span className="text-xs text-ink/40 font-semibold">Click any event for details & booking</span>
      </div>

      {filteredDays.length === 0 ? (
        <div className="text-center py-16 text-ink/40">
          <p className="text-4xl mb-3">🙏</p>
          <p className="font-semibold">No events match this filter for {activeMonth.shortMonth}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredDays.map((event, i) => (
            <DayCard key={`${event.day}-${i}`} event={event} onClick={setPopupEvent} />
          ))}
        </div>
      )}

          {/* Back button */}
          <div className="mt-10 pt-6 border-t border-gold-500/20">
            <button
              onClick={onClose}
              className="text-xs font-bold text-maroon-900 hover:text-dev-orange transition-colors flex items-center gap-1.5"
            >
              ← Return to Home Page
            </button>
          </div>
        </div>{/* end content max-width wrapper */}
      </div>{/* end white content area */}
    </section>
  );
}
