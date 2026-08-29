import { useState } from "react";

export default function BookingModal({ item, type, onClose, onAddToCart }) {
  const [formData, setFormData] = useState({
    devoteeName: "",
    gotram: "",
    rashiStar: "",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0], // tomorrow
    guests: "2",
  });

  const [declarations, setDeclarations] = useState({
    faith: false,
    dressCode: false,
    idProof: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.devoteeName.trim()) return;
    if (!declarations.faith || !declarations.dressCode || !declarations.idProof) return;

    // Generate a unique token, e.g. TKT-SEVA-748392
    const category = type === "seva" ? "SEVA" : "STAY";
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const dateStr = formData.date.replace(/-/g, "").slice(2);
    const token = `TKT-${category}-${dateStr}-${randNum}`;

    const bookedItem = {
      ...item,
      bookingType: type,
      devoteeName: formData.devoteeName,
      gotram: formData.gotram || "N/A",
      rashiStar: formData.rashiStar || "N/A",
      date: formData.date,
      guests: formData.guests,
      token,
      bookingDate: new Date().toLocaleDateString(),
    };

    onAddToCart(bookedItem);
  };

  const isFormValid = formData.devoteeName.trim() !== "" && declarations.faith && declarations.dressCode && declarations.idProof;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-sandal border-2 border-gold-500 rounded-xl shadow-2xl max-w-md w-full overflow-hidden text-ink max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-maroon-900 px-6 py-4 border-b border-gold-500 flex items-center justify-between shrink-0">
          <h3 className="font-display text-lg text-gold-400 font-bold">
            {type === "seva" ? "Book Seva" : "Reserve Stay"}
          </h3>
          <button
            onClick={onClose}
            className="text-gold-400 hover:text-white transition-colors text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          <div className="bg-maroon-800/10 border border-gold-500/20 rounded-lg p-3">
            <div className="text-sm font-bold text-maroon-900">{item.name}</div>
            <div className="text-xs text-ink/70 mt-1">{item.desc}</div>
            <div className="text-sm font-semibold text-dev-orange mt-2">
              Cost: {item.price}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-ink/75 mb-1">
              {type === "seva" ? "Devotee Name *" : "Primary Guest Name *"}
            </label>
            <input
              type="text"
              required
              placeholder="Enter name"
              value={formData.devoteeName}
              onChange={(e) =>
                setFormData({ ...formData, devoteeName: e.target.value })
              }
              className="w-full bg-white border border-gold-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-ink shadow-inner"
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-ink/75 mb-1">
              {type === "seva" ? "Seva Date *" : "Check-in Date *"}
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full bg-white border border-gold-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-ink shadow-inner"
            />
          </div>

          {/* E-Prasadam Home Delivery Option */}
          {type === "seva" && (
            <div className="bg-amber-100/60 border border-amber-300 rounded-lg p-3 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer font-bold text-maroon-950 text-xs">
                <input
                  type="checkbox"
                  checked={formData.homeDelivery || false}
                  onChange={(e) =>
                    setFormData({ ...formData, homeDelivery: e.target.checked })
                  }
                  className="accent-maroon-800 w-4 h-4"
                />
                📦 Send Prasadam to my Home Address (+₹50 Speed Post)
              </label>
              {formData.homeDelivery && (
                <textarea
                  placeholder="Enter full postal address & pincode for Prasadam Speed Post delivery..."
                  value={formData.deliveryAddress || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryAddress: e.target.value })
                  }
                  rows={2}
                  className="w-full bg-white border border-gold-500/40 rounded p-2 text-xs text-ink focus:outline-none focus:ring-1 focus:ring-maroon-800"
                />
              )}
            </div>
          )}

          {type === "seva" ? (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-ink/75 mb-1">
                  Gotram
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shiva"
                  value={formData.gotram}
                  onChange={(e) =>
                    setFormData({ ...formData, gotram: e.target.value })
                  }
                  className="w-full bg-white border border-gold-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-ink shadow-inner"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-ink/75 mb-1">
                  Rashi / Star
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rohini"
                  value={formData.rashiStar}
                  onChange={(e) =>
                    setFormData({ ...formData, rashiStar: e.target.value })
                  }
                  className="w-full bg-white border border-gold-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-ink shadow-inner"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-ink/75 mb-1">
                Number of Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                className="w-full bg-white border border-gold-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-ink"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons (Max)</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-ink/75 mb-1">
              Date *
            </label>
            <input
              type="date"
              required
              value={formData.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-white border border-gold-500/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 text-ink shadow-inner"
            />
          </div>

          {/* Compliance & Declarations */}
          <div className="bg-maroon-800/5 border border-gold-500/20 rounded-lg p-3 space-y-3 text-xs shadow-inner">
            <span className="font-bold text-maroon-900 uppercase tracking-wider block border-b border-gold-500/10 pb-1">
              Devotee Declarations (ఆలయ నిబంధనలు)
            </span>
            
            <label className="flex items-start gap-2.5 cursor-pointer select-none text-left">
              <input
                type="checkbox"
                required
                checked={declarations.faith}
                onChange={(e) => setDeclarations({ ...declarations, faith: e.target.checked })}
                className="mt-0.5 accent-maroon-800 shrink-0 w-3.5 h-3.5"
              />
              <span className="text-ink/80 leading-snug">
                <strong>హిందూ మత ధృవీకరణ (Hindu Faith Declaration) *</strong>: నేను హిందూ మతాన్ని విశ్వసిస్తున్నానని, Presiding Deity పై పరిపూర్ణ విశ్వాసం కలిగి ఉన్నానని ధృవీకరిస్తున్నాను (Sec. 97 Rules).
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer select-none text-left">
              <input
                type="checkbox"
                required
                checked={declarations.dressCode}
                onChange={(e) => setDeclarations({ ...declarations, dressCode: e.target.checked })}
                className="mt-0.5 accent-maroon-800 shrink-0 w-3.5 h-3.5"
              />
              <span className="text-ink/80 leading-snug">
                <strong>దుస్తుల నియమావళి (Traditional Dress Code) *</strong>: గర్భాలయ ప్రవేశానికి ఆలయ సాంప్రదాయ దుస్తుల నియమాలను (పురుషులు: ధోతి/పంచె; స్త్రీలు: చీర/సల్వార్) పాటిస్తాను.
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer select-none text-left">
              <input
                type="checkbox"
                required
                checked={declarations.idProof}
                onChange={(e) => setDeclarations({ ...declarations, idProof: e.target.checked })}
                className="mt-0.5 accent-maroon-800 shrink-0 w-3.5 h-3.5"
              />
              <span className="text-ink/80 leading-snug">
                <strong>గుర్తింపు పత్రం (Physical ID Proof) *</strong>: కౌంటర్ వద్ద అసలైన ఫోటో గుర్తింపు కార్డు (Aadhaar/Voter ID) చూపిస్తానని అంగీకరిస్తున్నాను.
              </span>
            </label>
          </div>

          <div className="pt-2 flex gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-maroon-800 text-maroon-800 font-semibold rounded-lg py-2.5 text-sm hover:bg-maroon-800/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex-1 font-bold rounded-lg py-2.5 text-sm transition-all border border-gold-500 ${
                isFormValid 
                  ? "bg-maroon-900 text-gold-400 hover:bg-maroon-950 shadow-md hover:shadow-lg" 
                  : "bg-maroon-900/40 text-gold-400/40 cursor-not-allowed border-gold-500/25"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
