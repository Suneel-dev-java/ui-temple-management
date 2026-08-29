import { useState } from "react";

export default function CartPage({ cart, bookings, onRemoveItem, onCheckout, onClose }) {
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
    <section className="max-w-4xl mx-auto px-4 py-8 text-ink">
      <div className="bg-sandal/90 backdrop-blur-md border-2 border-gold-500 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-maroon-900 px-6 py-5 border-b border-gold-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-2xl text-gold-400 font-bold">Devotee Desk</h2>
            <span className="bg-gold-500/20 text-gold-400 text-xs px-2 py-0.5 rounded border border-gold-500/30">
              Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gold-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-1 bg-maroon-950/40 hover:bg-maroon-950 px-3 py-1.5 rounded border border-gold-500/25"
          >
            &larr; Back to Home
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gold-500/20 bg-maroon-950/15">
          <button
            onClick={() => setActiveTab("cart")}
            className={`flex-1 py-3.5 text-center text-sm font-bold uppercase tracking-wider transition-colors border-r border-gold-500/10 ${
              activeTab === "cart"
                ? "bg-sandal text-maroon-900 border-b-2 border-b-maroon-800"
                : "text-ink/60 hover:text-ink hover:bg-sandal/40"
            }`}
          >
            My Cart ({cart.length})
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-3.5 text-center text-sm font-bold uppercase tracking-wider transition-colors ${
              activeTab === "history"
                ? "bg-sandal text-maroon-900 border-b-2 border-b-maroon-800"
                : "text-ink/60 hover:text-ink hover:bg-sandal/40"
            }`}
          >
            Booking History / Receipts ({bookings.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "cart" ? (
            cart.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-ink/40 text-5xl">🛒</div>
                <h3 className="font-display text-xl font-bold text-maroon-900">Your Cart is Empty</h3>
                <p className="text-sm text-ink/75 max-w-sm mx-auto">
                  You haven't added any sevas or accommodation reservations to your cart yet.
                </p>
                <button
                  onClick={onClose}
                  className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 px-6 py-2.5 rounded-lg text-sm font-bold transition-colors border border-gold-500 inline-block mt-2"
                >
                  Explore Sevas & Stays
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={item.token}
                      className="bg-white/95 border border-gold-500/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      {/* Decorative Side Tab */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-2 ${
                          item.bookingType === "seva"
                            ? "bg-maroon-700"
                            : item.bookingType === "donation"
                            ? "bg-green-700"
                            : "bg-dev-blue"
                        }`}
                      ></div>

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-3">
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white ${
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
                            <span className="text-[10px] font-mono bg-ink/5 px-2 py-0.5 rounded text-ink/70">
                              {item.token}
                            </span>
                          </div>

                          <h4 className="font-display text-lg font-bold text-maroon-900">
                            {item.name}
                          </h4>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs">
                            <div>
                              <span className="text-ink/50 block">Devotee/Guest</span>
                              <span className="font-semibold">{item.devoteeName}</span>
                            </div>
                            {item.bookingType === "seva" ? (
                              <>
                                <div>
                                  <span className="text-ink/50 block">Gotram</span>
                                  <span className="font-semibold">{item.gotram}</span>
                                </div>
                                <div>
                                  <span className="text-ink/50 block">Rashi/Star</span>
                                  <span className="font-semibold">{item.rashiStar}</span>
                                </div>
                              </>
                            ) : item.bookingType === "donation" ? (
                              <div>
                                <span className="text-ink/50 block">Purpose</span>
                                <span className="font-semibold">Yagam Welfare sankalpam</span>
                              </div>
                            ) : (
                              <div>
                                <span className="text-ink/50 block">Guests count</span>
                                <span className="font-semibold">{item.guests} Person(s)</span>
                              </div>
                            )}
                            <div>
                              <span className="text-ink/50 block">
                                {item.bookingType === "donation" ? "Season / Masam" : "Date of Seva/Check-in"}
                              </span>
                              <span className="font-semibold">{item.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* Price & Action */}
                        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 pt-3 md:pt-0 border-ink/10 gap-3 min-w-[120px]">
                          <span className="text-lg font-bold text-dev-orange">{item.price}</span>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-xs font-bold text-red-700 hover:text-red-950 flex items-center gap-1 hover:bg-red-50 px-2.5 py-1 rounded transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout Summary */}
                <div className="bg-maroon-800/5 border-2 border-dashed border-gold-500/30 rounded-xl p-5 flex flex-col gap-4 mt-6">
                  {/* Final Declarations Notice */}
                  <div className="bg-white/90 border border-gold-500/20 rounded-lg p-4 text-xs space-y-2 text-left">
                    <span className="font-bold text-maroon-900 uppercase tracking-wider block border-b border-gold-500/10 pb-1">
                      Security & Compliance Agreement (భద్రత & ఆలయ నిబంధనల అంగీకారం)
                    </span>
                    <p className="text-ink/80 leading-snug">
                      నేను సమర్పించిన భక్తుల వివరాలన్నీ సరైనవని ధృవీకరిస్తున్నాను. ఆలయ దుస్తుల నియమ నిబంధనలకు (Traditional Dress Code), బదిలీ చేయలేని సేవా ప్రవేశ షరతులకు నేను కట్టుబడి ఉంటానని అంగీకరిస్తున్నాను.
                    </p>
                    <label className="flex items-center gap-2 cursor-pointer select-none font-bold text-maroon-900 mt-2">
                      <input
                        type="checkbox"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="accent-maroon-800 w-4 h-4"
                      />
                      నేను దేవస్థానం సేవా నియమాలను, రద్దు నిబంధనలను పూర్తిగా అంగీకరిస్తున్నాను *
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-gold-500/10">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-ink/60 font-bold">
                        Order Summary
                      </span>
                      <div className="text-2xl font-black text-maroon-900 mt-1">
                        Total: ₹{total.toLocaleString("en-IN")}
                      </div>
                      <span className="text-xs text-ink/70">
                        All online transactions are secured and include all seva charges.
                      </span>
                    </div>

                    <button
                      onClick={() => onCheckout(total)}
                      disabled={!agreedTerms}
                      className={`font-bold px-8 py-3 rounded-lg text-base shadow-md transition-all border-b-2 ${
                        agreedTerms
                          ? "bg-dev-orange text-white hover:bg-dev-orange/90 hover:shadow-lg border-dev-orange/60 cursor-pointer"
                          : "bg-gray-300 text-gray-500 border-gray-400/40 cursor-not-allowed"
                      }`}
                    >
                      Proceed to Pay (₹{total.toLocaleString("en-IN")}) &rarr;
                    </button>
                  </div>
                </div>
              </div>
            )
          ) : (
            /* Booking History Tab */
            bookings.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-ink/40 text-5xl">🎟️</div>
                <h3 className="font-display text-xl font-bold text-maroon-900">No Past Bookings</h3>
                <p className="text-sm text-ink/75 max-w-sm mx-auto">
                  You don't have any completed bookings or receipts registered under this device session.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-ink/65 mb-2">
                  Completed Transactions
                </h3>
                {bookings.map((receipt) => (
                  <div
                    key={receipt.transactionId}
                    className="border border-gold-500/25 bg-white/95 rounded-xl overflow-hidden shadow-sm"
                  >
                    {/* Receipt Status Bar */}
                    <div className="bg-maroon-950/5 border-b border-gold-500/10 px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-ink/55">Transaction ID: </span>
                        <span className="font-mono font-bold text-ink">{receipt.transactionId}</span>
                      </div>
                      <div>
                        <span className="text-ink/55">Paid on: </span>
                        <span className="font-semibold">{receipt.paymentDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-600 inline-block"></span>
                        <span className="font-bold text-green-700 uppercase tracking-wide text-[10px]">
                          Success (PhonePe)
                        </span>
                      </div>
                    </div>

                    {/* Booking Items List */}
                    <div className="divide-y divide-gold-500/10 px-5">
                      {receipt.items.map((ticket) => (
                        <div key={ticket.token} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-green-100 text-green-800">
                                {ticket.bookingType === "seva" ? "Seva" : ticket.bookingType === "donation" ? "Donation" : "Stay"}
                              </span>
                              <span className="text-xs font-bold text-maroon-900">{ticket.name}</span>
                              <span className="text-[10px] font-mono bg-ink/5 px-2 py-0.5 rounded text-ink/60">
                                {ticket.token}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-ink/75">
                              <div>
                                <span className="text-ink/40 block">Devotee/Guest</span>
                                <span className="font-bold text-ink">{ticket.devoteeName}</span>
                              </div>
                              {ticket.bookingType === "seva" ? (
                                <>
                                  <div>
                                    <span className="text-ink/40 block">Gotram</span>
                                    <span className="font-medium text-ink">{ticket.gotram}</span>
                                  </div>
                                  <div>
                                    <span className="text-ink/40 block">Rashi/Star</span>
                                    <span className="font-medium text-ink">{ticket.rashiStar}</span>
                                  </div>
                                </>
                              ) : ticket.bookingType === "donation" ? (
                                <div>
                                  <span className="text-ink/40 block">Purpose</span>
                                  <span className="font-medium text-ink">Yagam Welfare sankalpam</span>
                                </div>
                              ) : (
                                <div>
                                  <span className="text-ink/40 block">Guests</span>
                                  <span className="font-bold text-ink">{ticket.guests} Pax</span>
                                </div>
                              )}
                              <div>
                                <span className="text-ink/40 block">Booking Date</span>
                                <span className="font-semibold text-ink">{ticket.date}</span>
                              </div>
                            </div>
                          </div>

                          {/* Dynamic Printable Receipt Ticket UI */}
                          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 pt-3 md:pt-0 border-ink/5 min-w-[120px]">
                            <span className="text-base font-bold text-ink">{ticket.price}</span>
                            <div className="hidden md:block text-[9px] uppercase tracking-wider text-green-700 bg-green-50 border border-green-500/20 px-2 py-0.5 rounded font-black mt-1">
                              Confirmed
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Receipt Footer */}
                    <div className="bg-maroon-800/5 px-5 py-3 border-t border-gold-500/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-ink/70">Total Amount Paid</span>
                      <span className="text-lg font-extrabold text-maroon-900">
                        ₹{receipt.amount.toLocaleString("en-IN")}
                      </span>
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
