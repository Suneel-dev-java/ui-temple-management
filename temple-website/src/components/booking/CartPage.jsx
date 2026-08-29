import { useState } from "react";

export default function CartPage({ cart, bookings, onRemoveItem, onCheckout, onClose, onViewReceipt }) {
  const [activeTab, setActiveTab] = useState("cart"); // "cart" | "history"
  const [agreedTerms, setAgreedTerms] = useState(false);

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const clean = priceStr.replace(/[₹\s,]/g, "").split("/")[0];
    return parseFloat(clean) || 0;
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + parsePrice(item.price), 0);
  };

  const total = calculateTotal();

  return (
    <section className="max-w-2xl mx-auto px-3 py-4 text-ink min-h-[calc(100vh-140px)] flex items-center justify-center">
      <div className="w-full bg-sandal/95 backdrop-blur-md border border-gold-500/60 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-maroon-900 px-4 py-3 border-b border-gold-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-lg sm:text-xl text-gold-400 font-bold">Devotee Desk</h2>
            <span className="bg-gold-500/20 text-gold-400 text-[10px] px-2 py-0.5 rounded border border-gold-500/30">
              Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gold-400 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 bg-maroon-950/60 hover:bg-maroon-950 px-2.5 py-1 rounded border border-gold-500/25"
          >
            ← Back to Home
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gold-500/20 bg-maroon-950/15">
          <button
            onClick={() => setActiveTab("cart")}
            className={`flex-1 py-2.5 text-center text-xs font-bold uppercase tracking-wider transition-colors border-r border-gold-500/10 ${
              activeTab === "cart"
                ? "bg-sandal text-maroon-900 border-b-2 border-b-maroon-800"
                : "text-ink/60 hover:text-ink hover:bg-sandal/40"
            }`}
          >
            My Cart ({cart.length})
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-2.5 text-center text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === "history"
                ? "bg-sandal text-maroon-900 border-b-2 border-b-maroon-800"
                : "text-ink/60 hover:text-ink hover:bg-sandal/40"
            }`}
          >
            History / Receipts ({bookings.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-5">
          {activeTab === "cart" ? (
            cart.length === 0 ? (
              <div className="text-center py-8 space-y-3">
                <div className="text-ink/30 text-4xl">🛒</div>
                <h3 className="font-display text-base font-bold text-maroon-900">Your Cart is Empty</h3>
                <p className="text-xs text-ink/70 max-w-xs mx-auto">
                  You haven't added any sevas or accommodation reservations yet.
                </p>
                <button
                  onClick={onClose}
                  className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 px-4 py-2 rounded-lg text-xs font-bold transition-colors border border-gold-500/40 inline-block mt-1"
                >
                  Explore Sevas &amp; Stays
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Items List */}
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {cart.map((item, index) => (
                    <div
                      key={item.token || index}
                      className="bg-white border border-gold-500/20 rounded-lg p-3 shadow-sm hover:shadow transition-shadow relative overflow-hidden"
                    >
                      {/* Decorative Side Tab */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                          item.bookingType === "seva"
                            ? "bg-maroon-700"
                            : item.bookingType === "donation"
                            ? "bg-green-700"
                            : "bg-dev-blue"
                        }`}
                      />

                      <div className="flex items-center justify-between gap-3 pl-2">
                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span
                              className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded text-white ${
                                item.bookingType === "seva"
                                  ? "bg-maroon-800"
                                  : item.bookingType === "donation"
                                  ? "bg-green-800"
                                  : "bg-dev-blue"
                              }`}
                            >
                              {item.bookingType === "seva"
                                ? "Seva Ritual"
                                : item.bookingType === "donation"
                                ? "Yagam Donation"
                                : "Stay Booking"}
                            </span>
                            <span className="text-[9px] font-mono bg-ink/5 px-1.5 py-0.5 rounded text-ink/70">
                              {item.token}
                            </span>
                          </div>

                          <h4 className="font-display text-sm font-bold text-maroon-900 truncate">
                            {item.name}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-3 text-[11px] text-ink/75">
                            <span>
                              <strong className="font-semibold text-ink/90">{item.devoteeName}</strong>
                            </span>
                            {item.bookingType === "seva" && item.gotram && (
                              <span>Gotram: <strong>{item.gotram}</strong></span>
                            )}
                            {item.date && (
                              <span>Date: <strong>{item.date}</strong></span>
                            )}
                          </div>
                        </div>

                        {/* Price & Action */}
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="text-sm font-bold text-dev-orange">{item.price}</span>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-[10px] font-bold text-red-700 hover:text-red-950 hover:bg-red-50 px-1.5 py-0.5 rounded transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout Summary */}
                <div className="bg-maroon-900/5 border border-gold-500/30 rounded-xl p-3.5 space-y-3">
                  {/* Security & Compliance Agreement */}
                  <div className="bg-white/90 border border-gold-500/20 rounded-lg p-3 text-xs space-y-1.5">
                    <span className="font-bold text-maroon-900 uppercase tracking-wider text-[10px] block border-b border-gold-500/10 pb-1">
                      Security Agreement (భద్రత &amp; నిబంధనల అంగీకారం)
                    </span>
                    <p className="text-ink/80 text-[11px] leading-snug">
                      నేను సమర్పించిన వివరాలన్నీ సరైనవని ధృవీకరిస్తున్నాను. ఆలయ సాంప్రదాయ దుస్తుల నియమావళికి కట్టుబడి ఉంటాను.
                    </p>
                    <label className="flex items-center gap-2 cursor-pointer select-none font-bold text-maroon-900 text-[11px] pt-1">
                      <input
                        type="checkbox"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="accent-maroon-800 w-3.5 h-3.5"
                      />
                      దేవస్థానం నియమాలను పూర్తిగా అంగీకరిస్తున్నాను *
                    </label>
                  </div>

                  {/* Summary & Checkout Row */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ink/60 font-bold block">
                        Total Amount
                      </span>
                      <div className="text-xl font-black text-maroon-900">
                        ₹{total.toLocaleString("en-IN")}
                      </div>
                    </div>

                    <button
                      onClick={() => onCheckout(total)}
                      disabled={!agreedTerms}
                      className={`font-bold px-5 py-2 rounded-lg text-xs shadow transition-all border-b-2 ${
                        agreedTerms
                          ? "bg-dev-orange text-white hover:bg-dev-orange/90 border-dev-orange/60 cursor-pointer"
                          : "bg-gray-300 text-gray-500 border-gray-400/40 cursor-not-allowed"
                      }`}
                    >
                      Proceed to Pay (₹{total.toLocaleString("en-IN")}) →
                    </button>
                  </div>
                </div>
              </div>
            )
          ) : (
            /* Booking History Tab */
            bookings.length === 0 ? (
              <div className="text-center py-8 space-y-3">
                <div className="text-ink/30 text-4xl">🎟️</div>
                <h3 className="font-display text-base font-bold text-maroon-900">No Past Bookings</h3>
                <p className="text-xs text-ink/70 max-w-xs mx-auto">
                  You don't have any completed bookings or receipts yet.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {bookings.map((receipt) => (
                  <div
                    key={receipt.transactionId}
                    className="border border-gold-500/25 bg-white rounded-lg overflow-hidden shadow-sm text-xs"
                  >
                    {/* Status Bar */}
                    <div className="bg-maroon-950/5 border-b border-gold-500/10 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <div>
                        <span className="text-ink/55">Txn ID: </span>
                        <span className="font-mono font-bold">{receipt.transactionId}</span>
                      </div>
                      <div>
                        <span className="text-ink/55">Date: </span>
                        <span className="font-semibold">{receipt.paymentDate}</span>
                      </div>
                      <span className="font-bold text-green-700 uppercase tracking-wide text-[9px] bg-green-100 px-2 py-0.5 rounded">
                        ✓ Paid (PhonePe)
                      </span>
                    </div>

                    {/* Items */}
                    <div className="divide-y divide-gold-500/10 px-3">
                      {receipt.items.map((ticket, i) => (
                        <div key={i} className="py-2.5 flex items-center justify-between gap-2">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-green-100 text-green-800">
                                {ticket.bookingType === "seva" ? "Seva" : ticket.bookingType === "donation" ? "Donation" : "Stay"}
                              </span>
                              <span className="font-bold text-maroon-900">{ticket.name}</span>
                            </div>
                            <p className="text-[10px] text-ink/65">
                              Devotee: <strong>{ticket.devoteeName}</strong> • Date: <strong>{ticket.date}</strong>
                            </p>
                          </div>
                          <span className="font-bold text-dev-orange text-xs">{ticket.price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="bg-maroon-900/5 px-3 py-2 border-t border-gold-500/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-ink/70">Total Paid: </span>
                        <span className="font-extrabold text-maroon-900 text-sm">
                          ₹{receipt.amount.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => onViewReceipt && onViewReceipt(receipt)}
                        className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-gold-500/40 shadow-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        🖨️ Download / Print Ticket Receipt
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
