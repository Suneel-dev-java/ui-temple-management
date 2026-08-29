import { useState, useEffect, useRef } from "react";
import { mockApi } from "../../services/mockApi";

export default function TempleInfoPage({ sectionId, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form State
  const [devoteeName, setDevoteeName] = useState("");
  const [gotram, setGotram] = useState("");
  const [selectedSeva, setSelectedSeva] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [validationError, setValidationError] = useState("");

  // Booking Flow State
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const audioRef = useRef(null);

  // Fetch section data on load or section change
  useEffect(() => {
    setLoading(true);
    setError(null);
    mockApi.fetchTempleSection(sectionId)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "డేటా లోడ్ చేయడం విఫలమైంది.");
        setLoading(false);
      });
  }, [sectionId]);

  // Handle auto-redirection on successful booking
  useEffect(() => {
    if (bookingSuccess) {
      const timer = setTimeout(() => {
        onClose(); // Close page and return to main landing page
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [bookingSuccess, onClose]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setValidationError("");

    if (!devoteeName.trim()) {
      setValidationError("భక్తుని పేరు నమోదు చేయండి (Please enter Devotee Name)");
      return;
    }
    if (!gotram.trim()) {
      setValidationError("గోత్రం నమోదు చేయండి (Please enter Gotram)");
      return;
    }
    if (!selectedSeva) {
      setValidationError("సేవను ఎంచుకోండి (Please select a Seva)");
      return;
    }
    if (!bookingDate) {
      setValidationError("సేవా తేదీని ఎంచుకోండి (Please select a Date)");
      return;
    }

    setBookingLoading(true);

    const sevaObj = mockApi.getSevas().find((s) => s.id === selectedSeva);
    const bookingDetails = {
      devoteeName,
      gotram,
      sevaName: sevaObj ? sevaObj.name : "",
      bookingDate,
    };

    mockApi.bookSeva(bookingDetails)
      .then((res) => {
        setBookingLoading(false);
        setBookingSuccess(res);
      })
      .catch((err) => {
        setBookingLoading(false);
        setValidationError("బుకింగ్ విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.");
      });
  };

  const sevas = mockApi.getSevas();

  return (
    <main className="bg-transparent py-10 px-4 min-h-[70vh] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Back navigation button row */}
        <div className="mb-6 flex items-center">
          <button
            onClick={onClose}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-dev-blue/20 bg-white hover:bg-dev-blue/5 text-dev-blue text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>తిరిగి హోమ్ పేజీకి (Back to Homepage)</span>
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 border-4 border-dev-orange border-t-transparent rounded-full animate-spin" />
            <p className="text-dev-blue text-sm font-semibold tracking-wide">డేటా లోడ్ అవుతోంది... (Loading details...)</p>
          </div>
        )}

        {/* Error Message */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-center max-w-lg mx-auto">
            <p className="font-semibold">{error}</p>
            <button
              onClick={onClose}
              className="mt-4 text-xs font-bold uppercase text-red-800 underline hover:text-red-950"
            >
              తిరిగి వెళ్ళండి (Go Back)
            </button>
          </div>
        )}

        {/* Main Content Pane */}
        {!loading && !error && data && (
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            
            {/* Left/Center Column: Text & Photo Gallery */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title Header Card */}
              <div className="space-y-3 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-dev-blue/5 shadow-sm">
                <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-dev-orange bg-dev-orange/10 px-3 py-1 rounded-full">
                  ఆలయ సమాచారం (About the Temple)
                </span>
                <h1 className="font-display text-2xl sm:text-3.5xl md:text-4xl text-dev-blue font-bold tracking-wide">
                  {data.title}
                </h1>
                <p className="text-sm md:text-base text-dev-orange font-semibold tracking-wide">
                  {data.subtitle}
                </p>
              </div>

              {/* Narratives in Telugu */}
              <div className="space-y-5 text-ink/90 leading-relaxed text-sm md:text-[15px] font-body bg-white p-6 rounded-2xl border border-dev-blue/5 shadow-sm">
                {data.paragraphs.map((para, idx) => (
                  <p key={idx} className="indent-4 md:indent-8">
                    {para}
                  </p>
                ))}
              </div>

              {/* Ornate Image Gallery Card */}
              <div className="space-y-4 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-dev-blue/5 shadow-sm">
                <h3 className="font-display text-lg font-bold text-dev-blue border-b border-gold-500/20 pb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-dev-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  పవిత్ర చిత్రాలు (Devotional Photos)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-md aspect-[4/3] bg-slate-900 group"
                    >
                      <img
                        src={img}
                        alt="Temple deity"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Seva Booking Form Card */}
            <div className="bg-white/95 backdrop-blur-md border-2 border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl relative">
              <div className="text-center mb-6">
                <span className="text-[10px] font-bold text-dev-orange uppercase tracking-wider block mb-1">
                  ఆన్‌లైన్ సేవా బుకింగ్
                </span>
                <h2 className="font-display text-xl font-bold text-dev-blue flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-dev-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  సేవ బుకింగ్ (Book Seva)
                </h2>
                <div className="w-10 h-0.5 bg-dev-orange mx-auto mt-2.5 rounded-full" />
              </div>

              {/* Form block */}
              <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs sm:text-sm">
                {/* Devotee Name */}
                <div className="space-y-1.5">
                  <label className="block text-dev-blue font-bold">
                    భక్తుని పేరు (Devotee Name) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeName}
                    onChange={(e) => setDevoteeName(e.target.value)}
                    placeholder="పేరు నమోదు చేయండి"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-orange/50 focus:border-dev-orange"
                  />
                </div>

                {/* Gotram */}
                <div className="space-y-1.5">
                  <label className="block text-dev-blue font-bold">
                    గోత్రం (Gotram) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={gotram}
                    onChange={(e) => setGotram(e.target.value)}
                    placeholder="గోత్రము పేరు"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-orange/50 focus:border-dev-orange"
                  />
                </div>

                {/* Seva Type Dropdown */}
                <div className="space-y-1.5">
                  <label className="block text-dev-blue font-bold">
                    సేవ రకం (Select Seva) <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedSeva}
                    onChange={(e) => setSelectedSeva(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-dev-orange/50 focus:border-dev-orange"
                  >
                    <option value="">-- సేవను ఎంచుకోండి --</option>
                    {sevas.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Booking Date */}
                <div className="space-y-1.5">
                  <label className="block text-dev-blue font-bold">
                    తేదీ (Seva Date) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-orange/50 focus:border-dev-orange"
                  />
                </div>

                {/* Error Banner */}
                {validationError && (
                  <div className="bg-red-50 text-red-600 border border-red-200 p-2.5 rounded-lg text-xs font-semibold">
                    ⚠ {validationError}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={bookingLoading}
                  className="w-full bg-dev-orange hover:bg-dev-orange/95 text-white font-bold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 mt-4"
                >
                  {bookingLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      సేవ సమర్పించబడుతోంది...
                    </>
                  ) : (
                    "బుకింగ్ నిర్ధారించండి (Confirm Booking)"
                  )}
                </button>
              </form>
            </div>

          </div>
        )}

        {/* Dynamic Success Booking Overlay Modal */}
        {bookingSuccess && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border-2 border-gold-500 rounded-2xl max-w-md w-full p-8 shadow-2xl text-center flex flex-col items-center gap-4 animate-scaleUp">
              
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl font-bold text-dev-blue">
                  సేవ విజయవంతంగా బుక్ చేయబడింది!
                </h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wide">
                  Booking Successful!
                </p>
                <div className="w-16 h-0.5 bg-gold-500 mx-auto my-3" />
                <p className="text-xs text-ink/75 font-semibold">
                  బుకింగ్ ఐడి (Booking ID): <span className="font-bold text-dev-orange">{bookingSuccess.bookingId}</span>
                </p>
              </div>

              <div className="bg-dev-blue/5 border border-dev-blue/10 rounded-xl p-4 text-left w-full text-xs space-y-2 mt-2 font-semibold">
                <div className="flex justify-between">
                  <span className="text-ink/60">భక్తుని పేరు (Name):</span>
                  <span className="text-dev-blue">{bookingSuccess.devoteeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/60">గోత్రం (Gotram):</span>
                  <span className="text-dev-blue">{bookingSuccess.gotram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/60">సేవ (Seva Type):</span>
                  <span className="text-dev-blue truncate max-w-[200px]">{bookingSuccess.sevaName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/60">తేదీ (Date):</span>
                  <span className="text-dev-blue">{bookingSuccess.bookingDate}</span>
                </div>
              </div>

              {/* Spinner & Redirect Notice */}
              <div className="flex items-center gap-2 mt-4 text-[11px] text-ink/70 font-semibold">
                <div className="w-3.5 h-3.5 border-2 border-dev-orange border-t-transparent rounded-full animate-spin" />
                తిరిగి హోమ్ పేజీకి మళ్ళించబడుతోంది... (Redirecting...)
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}
