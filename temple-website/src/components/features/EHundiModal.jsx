import { useState } from "react";
import siteConfig from "../../config/siteConfig";

const HUNDI_SCHEMES = [
  { id: "annadanam", name: "శ్రీరామలింగేశ్వర నిత్యాన్నదాన పథకం (Nitya Annadanam)", desc: "Feeds pilgrims & devotees daily with sacred prasadam meals.", suggested: "₹501" },
  { id: "goshala", name: "గోసంరక్షణ పథకం (Goshala Maintenance)", desc: "Care, fodder & shelter for temple sacred cows (Go-Seva).", suggested: "₹1,008" },
  { id: "pushpam", name: "పుష్పాలంకరణ & దీపారాధన (Flower Decor & Oil Lamps)", desc: "Daily marigold flower garlands, jasmine & ghee lamps for deities.", suggested: "₹251" },
  { id: "renovation", name: "ఆలయ పునర్నిర్మాణం & అభివృద్ధి (Temple Maintenance)", desc: "Development of temple pushkarini, rajagopuram & mandapam.", suggested: "₹5,000" },
];

export default function EHundiModal({ onClose, onAddToCart }) {
  const [selectedSchemeIdx, setSelectedSchemeIdx] = useState(0);
  const [amount, setAmount] = useState("501");
  const [devoteeName, setDevoteeName] = useState("");
  const [gotram, setGotram] = useState("");
  const [error, setError] = useState("");

  const activeScheme = HUNDI_SCHEMES[selectedSchemeIdx];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!devoteeName.trim()) {
      setError("Please enter Devotee Name (భక్తుని పేరు)");
      return;
    }
    const numericAmt = parseFloat(amount);
    if (!numericAmt || numericAmt < 10) {
      setError("Please enter a valid amount (Min ₹10)");
      return;
    }

    const donationItem = {
      token: `HUNDI-${Date.now().toString().slice(-6)}`,
      name: `E-Hundi: ${activeScheme.name.split(" (")[0]}`,
      price: `₹${numericAmt.toLocaleString("en-IN")}`,
      devoteeName: devoteeName.trim(),
      gotram: gotram.trim() || "Kasyapa",
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      bookingType: "donation",
    };

    if (onAddToCart) {
      onAddToCart(donationItem);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fade-in text-ink"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-sandal border-2 border-gold-500 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-gold-400 p-4 border-b border-gold-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪙</span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight" lang="te">
                {siteConfig.templeShortName} డిజిటల్ ఈ-హుండీ
              </h3>
              <p className="text-[10px] text-white/70">Sacred E-Hundi Online Offering Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-lg font-bold px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3.5 text-xs">
          
          {error && (
            <div className="bg-red-500/15 border border-red-500/30 text-red-800 text-xs font-semibold p-2.5 rounded-lg">
              ⚠️ {error}
            </div>
          )}

          {/* Scheme Selection */}
          <div className="space-y-1">
            <label className="font-bold text-maroon-900 uppercase text-[10px] tracking-wider block">
              Select Offering Scheme (పథకం ఎంచుకోండి):
            </label>
            <div className="space-y-1.5">
              {HUNDI_SCHEMES.map((scheme, idx) => (
                <div
                  key={scheme.id}
                  onClick={() => {
                    setSelectedSchemeIdx(idx);
                    setAmount(scheme.suggested.replace("₹", ""));
                  }}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                    selectedSchemeIdx === idx
                      ? "bg-white border-maroon-800 shadow-md ring-1 ring-maroon-800"
                      : "bg-white/60 border-gold-500/20 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-maroon-950">
                    <span lang="te">{scheme.name}</span>
                    <span className="text-dev-orange text-xs">{scheme.suggested}</span>
                  </div>
                  <p className="text-[11px] text-ink/70 mt-0.5">{scheme.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Devotee Name & Gotram */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-ink/70 block">
                Devotee Name * (భక్తుని పేరు)
              </label>
              <input
                type="text"
                value={devoteeName}
                onChange={(e) => setDevoteeName(e.target.value)}
                placeholder="Enter full name"
                className="w-full bg-white border border-gold-500/30 rounded px-2.5 py-1.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-maroon-800"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-ink/70 block">
                Gotram (గోత్రము)
              </label>
              <input
                type="text"
                value={gotram}
                onChange={(e) => setGotram(e.target.value)}
                placeholder="e.g. Kasyapa"
                className="w-full bg-white border border-gold-500/30 rounded px-2.5 py-1.5 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-maroon-800"
              />
            </div>
          </div>

          {/* Amount Presets */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-ink/70 block">
              Offering Amount (కానుక నగదు) ₹
            </label>
            <div className="flex items-center gap-1.5 mb-1.5">
              {["101", "251", "501", "1008", "5000"].map((preset) => (
                <button
                  type="button"
                  key={preset}
                  onClick={() => setAmount(preset)}
                  className={`flex-1 py-1 rounded text-xs font-bold transition-colors ${
                    amount === preset
                      ? "bg-maroon-900 text-gold-400"
                      : "bg-white border border-gold-500/30 text-maroon-900 hover:bg-amber-50"
                  }`}
                >
                  ₹{preset}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Custom amount in ₹"
              className="w-full bg-white border border-gold-500/30 rounded px-2.5 py-1.5 text-xs font-bold text-maroon-900 focus:outline-none focus:ring-1 focus:ring-maroon-800"
              min="10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-dev-orange to-amber-600 hover:brightness-110 text-white font-bold py-2.5 rounded-lg shadow transition-all flex items-center justify-center gap-1 text-xs cursor-pointer"
          >
            🪙 Offer to E-Hundi (₹{amount || 0}) →
          </button>
        </form>

      </div>
    </div>
  );
}
