import { useState, useEffect } from "react";
import templeLogo from "../../assets/temple_logo.svg";
import siteConfig from "../../config/siteConfig";

const MONTHLY_YAGAMS = [
  { id: "chaitra", name: "చైత్ర మాసం: శ్రీ సీతారామ కల్యాణం & వసంతోత్సవం (Chaitra Kalyanam)" },
  { id: "vaisakha", name: "వైశాఖ మాసం: మహా మృత్యుంజయ హోమం & అక్షయ తృతీయ (Vaisakha Homam)" },
  { id: "jyeshta", name: "జ్యేష్ఠ మాసం: మహా అభిషేకం & రథోత్సవం (Jyeshta Abhishekam)" },
  { id: "ashadha", name: "ఆషాఢ మాసం: శ్రీ శాకంబరీ దేవి ఉత్సవాలు (Shakambhari Utsavams)" },
  { id: "sravana", name: "శ్రావణ మాసం: శ్రీ వరలక్ష్మీ వ్రతం & నిత్య రుద్రాభిషేకం (Sravana Pooja)" },
  { id: "bhadrapada", name: "భాద్రపద మాసం: శ్రీ వినాయక చవితి నవరాత్రులు (Ganesh Navratri)" },
  { id: "ashwayuja", name: "ఆశ్వయుజ మాసం: శరన్నవరాత్రి చండీ హోమం (Sharad Navratri)" },
  { id: "kartika", name: "కార్తీక మాసం: కార్తీక సోమవార దీపోత్సవం & మహారుద్రం (Kartika Deepotsavam)" },
  { id: "margasira", name: "మార్గశిర మాసం: లక్ష్మీ దేవి నవధాన్య అర్చన & లక్ష బిల్వార్చన (Margasira Pooja)" },
  { id: "pushya", name: "పుష్య మాసం: మకర సంక్రాంతి బ్రహ్మోత్సవాలు (Pushya Brahmotsavam)" },
  { id: "magha", name: "మాఘ మాసం: మహా శివరాత్రి జాగరణ & చతుర్యామ పూజలు (Maha Shivaratri)" },
  { id: "phalguna", name: "ఫాల్గుణ మాసం: కామదహన హోమం & వార్షిక బ్రహ్మోత్సవాలు (Annual Utsavam)" },
];

const SHIFTS = [
  { id: "morning", label: "ఉదయం పూజ సేవ (Morning Shift: 6:00 AM – 11:30 AM)" },
  { id: "afternoon", label: "మధ్యాహ్నం అన్నదాన సేవ (Afternoon Shift: 11:30 AM – 4:00 PM)" },
  { id: "evening", label: "సాయంత్రం దీపోత్సవ సేవ (Evening Shift: 4:00 PM – 9:30 PM)" },
  { id: "night", label: "శివరాత్రి జాగరణ సేవ (Full Night Jagaran Shift: 9:00 PM – 6:00 AM)" },
];

const DUTY_AREAS = [
  { id: "queue", label: "భక్తుల క్యూ లైన్ & క్రమశిక్షణ (Queue Line & Crowd Guidance)" },
  { id: "annadanam", label: "నిత్యాన్నదాన ప్రసాద వితరణ (Prasadam Distribution)" },
  { id: "pooja", label: "పూజా ద్రవ్యాలు & పుష్ప సేవ (Pooja Materials & Flowers)" },
  { id: "helpdesk", label: "సహాయ కేంద్రం & ప్రథమ చికిత్స (Pilgrim Helpdesk & First Aid)" },
];

export default function VolunteerRegistrationModal({ onClose, defaultYagam = "", initialPass = null }) {
  const [activeTab, setActiveTab] = useState("form"); // "form" | "passes"
  const [step, setStep] = useState(initialPass ? 2 : 1); // 1 = Form / List, 2 = Digital ID Card View
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    emergencyPhone: "",
    selectedYagam: defaultYagam || MONTHLY_YAGAMS[10].name,
    shift: SHIFTS[0].id,
    dutyArea: DUTY_AREAS[0].id,
    photoUrl: "",
    agreedDressCode: false,
    agreedRules: false,
  });

  const [registeredCard, setRegisteredCard] = useState(initialPass || null);
  const [savedPasses, setSavedPasses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialPass) {
      setRegisteredCard(initialPass);
      setStep(2);
    }
  }, [initialPass]);

  // Load saved volunteer passes on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("temple_volunteer_passes");
      if (stored) {
        setSavedPasses(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Handle Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        setError("Photo size should be under 3MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your Full Name (పూర్తి పేరు)");
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setError("Please enter a valid 10-digit Mobile Number");
      return;
    }
    if (!formData.agreedDressCode || !formData.agreedRules) {
      setError("Please accept traditional dress code & volunteer rules");
      return;
    }

    const regId = `VOL-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const cardData = {
      regId,
      fullName: formData.fullName.trim(),
      mobile: formData.mobile.trim(),
      email: formData.email.trim() || "N/A",
      emergencyPhone: formData.emergencyPhone.trim() || formData.mobile.trim(),
      yagam: formData.selectedYagam,
      shift: SHIFTS.find((s) => s.id === formData.shift)?.label || formData.shift,
      dutyArea: DUTY_AREAS.find((d) => d.id === formData.dutyArea)?.label || formData.dutyArea,
      photoUrl: formData.photoUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      registeredDate: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    };

    // Save to LocalStorage for future downloads
    const updatedPasses = [cardData, ...savedPasses];
    setSavedPasses(updatedPasses);
    localStorage.setItem("temple_volunteer_passes", JSON.stringify(updatedPasses));

    setRegisteredCard(cardData);
    setStep(2);
  };

  const openPassView = (card) => {
    setRegisteredCard(card);
    setStep(2);
  };

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-fade-in text-ink"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-sandal border-2 border-gold-500 rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-gold-400 p-3.5 border-b border-gold-500/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚩</span>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base leading-tight" lang="te">
                ఆలయ స్వచ్ఛంద సేవా నమోదు (Volunteer Portal)
              </h3>
              <p className="text-[10px] text-white/70">Monthly Yagam &amp; Festival Seva ID Pass</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-base font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Top Tab Bar (Form vs Saved Passes) */}
        {step === 1 && (
          <div className="flex border-b border-gold-500/20 bg-maroon-900/10 text-xs shrink-0">
            <button
              onClick={() => setActiveTab("form")}
              className={`flex-1 py-2.5 font-bold uppercase tracking-wider text-center transition-colors border-r border-gold-500/20 ${
                activeTab === "form"
                  ? "bg-white text-maroon-900 border-b-2 border-b-maroon-800"
                  : "text-ink/60 hover:bg-white/40"
              }`}
            >
              🚩 New Registration
            </button>
            <button
              onClick={() => setActiveTab("passes")}
              className={`flex-1 py-2.5 font-bold uppercase tracking-wider text-center transition-colors ${
                activeTab === "passes"
                  ? "bg-white text-maroon-900 border-b-2 border-b-maroon-800"
                  : "text-ink/60 hover:bg-white/40"
              }`}
            >
              🪪 My Saved Passes ({savedPasses.length})
            </button>
          </div>
        )}

        {step === 1 ? (
          activeTab === "form" ? (
            /* STEP 1: Volunteer Registration Form */
            <form onSubmit={handleSubmit} className="p-4 space-y-3.5 overflow-y-auto text-xs flex-1">
              {error && (
                <div className="bg-red-500/15 border border-red-500/30 text-red-800 text-xs font-semibold p-2.5 rounded-lg">
                  ⚠️ {error}
                </div>
              )}

              {/* Yagam / Event Selection */}
              <div className="space-y-1">
                <label className="font-bold text-maroon-900 uppercase text-[10px] tracking-wider block">
                  Select Monthly Yagam / Festival (సేవ చేయదలచిన యాగం) *
                </label>
                <select
                  value={formData.selectedYagam}
                  onChange={(e) => setFormData({ ...formData, selectedYagam: e.target.value })}
                  className="w-full bg-white border border-gold-500/40 rounded p-2 text-xs font-bold text-maroon-950 focus:outline-none focus:ring-1 focus:ring-maroon-800"
                >
                  {MONTHLY_YAGAMS.map((y) => (
                    <option key={y.id} value={y.name}>
                      {y.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details & Photo Upload */}
              <div className="bg-white p-3 rounded-xl border border-gold-500/30 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-bold text-maroon-900 uppercase text-[10px]">
                    Volunteer Profile &amp; Photo (స్వచ్ఛంద సేవకుని వివరాలు)
                  </span>
                  <span className="text-[10px] text-gray-500">Step 1 of 2</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Photo Preview / Upload Box */}
                  <div className="shrink-0 text-center space-y-1">
                    <div className="w-20 h-24 rounded-lg border-2 border-dashed border-gold-500/50 bg-amber-50 flex flex-col items-center justify-center overflow-hidden relative group">
                      {formData.photoUrl ? (
                        <img src={formData.photoUrl} alt="Volunteer Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="p-1 text-center text-[9px] text-gray-500">
                          <span className="text-xl block">📷</span>
                          Upload Photo
                        </div>
                      )}
                    </div>
                    <label className="text-[9px] font-bold text-maroon-900 hover:underline cursor-pointer block">
                      Choose Photo
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                  </div>

                  {/* Input Fields */}
                  <div className="flex-1 space-y-2 w-full">
                    <div>
                      <label className="text-[10px] font-bold text-gray-700 block">Full Name * (భక్తుని పేరు)</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full border border-gold-500/30 rounded px-2.5 py-1.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-maroon-800"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-bold text-gray-700 block">Mobile No. *</label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full border border-gold-500/30 rounded px-2.5 py-1.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-maroon-800"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-700 block">Emergency Contact</label>
                        <input
                          type="tel"
                          placeholder="Family phone"
                          value={formData.emergencyPhone}
                          onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                          className="w-full border border-gold-500/30 rounded px-2.5 py-1.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-maroon-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shift & Duty Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-1">
                  <label className="font-bold text-maroon-900 uppercase text-[10px] tracking-wider block">
                    Select Seva Shift (సమయం ఎంచుకోండి) *
                  </label>
                  <div className="space-y-1">
                    {SHIFTS.map((s) => (
                      <label
                        key={s.id}
                        className={`flex items-start gap-1.5 p-2 rounded border cursor-pointer text-[11px] leading-tight transition-colors ${
                          formData.shift === s.id
                            ? "bg-white border-maroon-800 font-bold text-maroon-950"
                            : "bg-white/60 border-gold-500/20 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="shift"
                          checked={formData.shift === s.id}
                          onChange={() => setFormData({ ...formData, shift: s.id })}
                          className="accent-maroon-800 mt-0.5"
                        />
                        {s.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-maroon-900 uppercase text-[10px] tracking-wider block">
                    Select Duty Area (సేవా ప్రాంగణం) *
                  </label>
                  <div className="space-y-1">
                    {DUTY_AREAS.map((d) => (
                      <label
                        key={d.id}
                        className={`flex items-start gap-1.5 p-2 rounded border cursor-pointer text-[11px] leading-tight transition-colors ${
                          formData.dutyArea === d.id
                            ? "bg-white border-maroon-800 font-bold text-maroon-950"
                            : "bg-white/60 border-gold-500/20 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="dutyArea"
                          checked={formData.dutyArea === d.id}
                          onChange={() => setFormData({ ...formData, dutyArea: d.id })}
                          className="accent-maroon-800 mt-0.5"
                        />
                        {d.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dress Code & Compliance Agreement */}
              <div className="bg-amber-100/70 border border-amber-300 rounded-lg p-2.5 space-y-1.5">
                <span className="font-bold text-maroon-900 uppercase text-[10px] block">
                  అంశాల అంగీకారం (Traditional Dress Code &amp; Code of Conduct):
                </span>
                <div className="space-y-1 text-[11px]">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedDressCode}
                      onChange={(e) => setFormData({ ...formData, agreedDressCode: e.target.checked })}
                      className="accent-maroon-800 w-4 h-4"
                    />
                    <span>
                      I agree to wear traditional attire (White Dhoti/Kurta for Gents, Saree/Chudidar for Ladies).
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedRules}
                      onChange={(e) => setFormData({ ...formData, agreedRules: e.target.checked })}
                      className="accent-maroon-800 w-4 h-4"
                    />
                    <span>
                      I will report 20 minutes before my shift at Volunteer Helpdesk Counter #2 with this ID card.
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Registration */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-dev-orange to-amber-600 hover:brightness-110 text-white font-bold py-2.5 rounded-xl shadow transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                🚩 Register &amp; Generate Digital Volunteer ID Card →
              </button>
            </form>
          ) : (
            /* TAB: Saved Passes History List */
            <div className="p-4 space-y-3 overflow-y-auto flex-1 text-xs">
              {savedPasses.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <div className="text-3xl text-gray-400">🪪</div>
                  <h4 className="font-bold text-maroon-900 text-sm">No Volunteer Passes Registered Yet</h4>
                  <p className="text-gray-600 text-xs max-w-xs mx-auto">
                    You have not registered for any volunteer seva passes yet. Use the "New Registration" tab to register for monthly yagams.
                  </p>
                  <button
                    onClick={() => setActiveTab("form")}
                    className="bg-maroon-900 text-gold-400 font-bold px-4 py-1.5 rounded-lg text-xs hover:bg-maroon-950 cursor-pointer shadow mt-2"
                  >
                    + Register New Volunteer Pass
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-maroon-900 font-bold border-b border-gold-500/20 pb-1.5">
                    <span>Registered Volunteer ID Passes ({savedPasses.length})</span>
                    <span className="text-[10px] text-gray-500">Stored in browser</span>
                  </div>

                  {savedPasses.map((pass) => (
                    <div
                      key={pass.regId}
                      className="bg-white border border-gold-500/30 rounded-xl p-3 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <img
                          src={pass.photoUrl}
                          alt={pass.fullName}
                          className="w-12 h-14 rounded-lg object-cover border border-maroon-900 shrink-0"
                        />
                        <div className="space-y-0.5 leading-tight">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-maroon-900 text-xs">{pass.regId}</span>
                            <span className="text-[9px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-bold">
                              Active Pass
                            </span>
                          </div>
                          <h4 className="font-bold text-black text-sm">{pass.fullName}</h4>
                          <p className="text-[10px] text-gray-600 font-medium truncate max-w-[240px]">
                            {pass.yagam}
                          </p>
                          <p className="text-[9px] text-gray-500">
                            Reg. Date: {pass.registeredDate}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => openPassView(pass)}
                        className="w-full sm:w-auto bg-maroon-900 hover:bg-maroon-950 text-gold-400 font-bold px-3 py-2 rounded-lg text-xs transition-colors shadow border border-gold-500/30 flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                      >
                        🖨️ Download / Print ID Pass
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        ) : (
          /* STEP 2: Generated Official Digital Volunteer ID Card Pass */
          <div className="p-4 space-y-3 overflow-y-auto flex-1 text-xs">
            
            <div className="no-print flex items-center justify-between gap-2 mb-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-maroon-900 font-bold hover:underline flex items-center gap-1"
              >
                ← Back to List / Form
              </button>
              <button
                onClick={() => window.print()}
                className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-gold-500/40 shadow flex items-center gap-1 cursor-pointer"
              >
                🖨️ Print / Save ID Card PDF
              </button>
            </div>

            {/* THE OFFICIAL DIGITAL VOLUNTEER ID CARD */}
            <div className="bg-white border-2 border-gold-500 rounded-xl shadow-2xl overflow-hidden text-black print:border-2 print:shadow-none">
              
              {/* Card Header */}
              <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-white p-3 border-b-2 border-gold-400 flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-full border border-gold-400 bg-black/40 overflow-hidden shrink-0 flex items-center justify-center p-0.5">
                  <img src={templeLogo} alt="Temple Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-center flex-1">
                  <span className="text-[8px] uppercase tracking-widest text-gold-300 font-bold block">
                    ఆలయ స్వచ్ఛంద సేవా విభాగం • VOLUNTEER PASS
                  </span>
                  <h4 className="font-bold text-gold-400 text-xs sm:text-sm leading-tight">
                    {siteConfig.templeName}
                  </h4>
                </div>
                <span className="text-[8px] font-mono font-bold bg-gold-500/20 text-gold-300 border border-gold-400 px-1.5 py-0.5 rounded">
                  OFFICIAL ID
                </span>
              </div>

              {/* Card Main Details Body */}
              <div className="p-3 bg-amber-50/30 space-y-2">
                
                <div className="flex items-center justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-[10px] text-gray-500">Registration ID:</span>
                  <span className="font-mono font-black text-maroon-900 text-sm tracking-wider">
                    {registeredCard.regId}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  {/* Photo Display */}
                  <div className="w-20 h-24 rounded-lg border-2 border-maroon-900 overflow-hidden shrink-0 shadow bg-gray-100">
                    <img src={registeredCard.photoUrl} alt={registeredCard.fullName} className="w-full h-full object-cover" />
                  </div>

                  {/* Volunteer Information */}
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-maroon-950 truncate">
                      {registeredCard.fullName}
                    </h3>
                    <div className="space-y-0.5 text-[11px] text-gray-700">
                      <p>📱 Mobile: <strong>{registeredCard.mobile}</strong></p>
                      <p>🚨 Emergency: <strong>{registeredCard.emergencyPhone}</strong></p>
                      <p>📅 Reg. Date: <strong>{registeredCard.registeredDate}</strong></p>
                    </div>
                  </div>
                </div>

                {/* Assigned Yagam & Duty Details */}
                <div className="bg-white border border-gold-500/30 rounded-lg p-2 space-y-1.5">
                  <div>
                    <span className="text-[9px] text-gray-500 font-bold uppercase block">Assigned Monthly Yagam / Festival:</span>
                    <span className="font-bold text-maroon-900 text-xs leading-tight block">
                      {registeredCard.yagam}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-1 text-[10px]">
                    <div>
                      <span className="text-gray-500 block">Assigned Shift:</span>
                      <span className="font-bold text-black block">{registeredCard.shift}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Duty Area:</span>
                      <span className="font-bold text-black block">{registeredCard.dutyArea}</span>
                    </div>
                  </div>
                </div>

                {/* Counter Gate Barcode / Instructions */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-2 text-[9px] text-gray-600">
                  <div className="space-y-0.5">
                    <span className="font-bold text-black block">Check-in Instructions:</span>
                    <p>• Report at Gate #2 Volunteer Counter with this ID.</p>
                    <p>• Traditional dress code mandatory.</p>
                  </div>
                  <div className="text-center font-mono font-bold text-[8px] border border-gray-300 p-1 rounded bg-white">
                    ||||||||||||||||||||||<br />
                    CHECK-IN BARCODE
                  </div>
                </div>

              </div>

            </div>

            {/* Back Button */}
            <div className="no-print flex items-center justify-between gap-2 pt-2">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-4 py-1.5 rounded-lg text-xs transition-colors cursor-pointer"
              >
                ← Back to List
              </button>
              <button
                onClick={onClose}
                className="bg-maroon-900 hover:bg-maroon-950 text-gold-400 font-bold px-5 py-1.5 rounded-lg text-xs transition-colors shadow border border-gold-500/40 cursor-pointer"
              >
                Done / Close Portal
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
