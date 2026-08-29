import { useEffect } from "react";

export default function ReceiptPage({ receipt, onClose }) {
  // Trigger a subtle success audio beep if needed, or just standard load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!receipt) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-ink">
      <div className="bg-sandal border-2 border-gold-500 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
        {/* Success Header */}
        <div className="bg-green-700 text-white text-center py-8 px-6 border-b-2 border-gold-500 space-y-2 relative">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-4xl mx-auto border-2 border-white/20 animate-bounce">
            ✓
          </div>
          <h2 className="font-display text-2xl font-black tracking-wide">
            Booking Confirmed!
          </h2>
          <p className="text-sm text-white/95 max-w-md mx-auto">
            Your payment was successful and your slots are reserved. Please present these tickets at the temple counters.
          </p>
        </div>

        {/* Transaction Summary */}
        <div className="bg-maroon-950/5 border-b border-gold-500/20 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-ink/50 block">Transaction ID</span>
            <span className="font-mono font-bold text-ink text-sm">
              {receipt.transactionId}
            </span>
          </div>
          <div>
            <span className="text-ink/50 block">Payment Date</span>
            <span className="font-bold text-ink text-sm">
              {receipt.paymentDate}
            </span>
          </div>
          <div>
            <span className="text-ink/50 block">Payment Mode</span>
            <span className="font-bold text-ink text-sm">
              PhonePe UPI
            </span>
          </div>
          <div className="text-right">
            <span className="text-ink/50 block">Total Paid</span>
            <span className="font-extrabold text-maroon-900 text-sm">
              ₹{receipt.amount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Ticket Cards */}
        <div className="p-6 space-y-8 bg-maroon-800/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">
            Your Digital Entry Passes
          </h3>

          <div className="space-y-6">
            {receipt.items.map((ticket) => (
              <div
                key={ticket.token}
                className="bg-white border-2 border-gold-500/30 rounded-xl relative shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                {/* Left Ticket Section (Details) */}
                <div className="p-6 flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded text-white ${
                        ticket.bookingType === "seva"
                          ? "bg-maroon-800"
                          : ticket.bookingType === "donation"
                          ? "bg-green-800"
                          : "bg-dev-blue"
                      }`}
                    >
                      {ticket.bookingType === "seva"
                        ? "Seva Entry"
                        : ticket.bookingType === "donation"
                        ? "Yagam Donation"
                        : "Stay Receipt"}
                    </span>
                    <span className="text-xs font-mono font-bold text-ink/60">
                      {ticket.token}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-maroon-900">
                    {ticket.name}
                  </h4>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-ink/50 block">Devotee/Guest Name</span>
                      <span className="font-bold text-sm text-ink">
                        {ticket.devoteeName}
                      </span>
                    </div>
                    {ticket.bookingType === "seva" ? (
                      <>
                        <div>
                          <span className="text-ink/50 block">Gotram</span>
                          <span className="font-bold text-sm text-ink">
                            {ticket.gotram}
                          </span>
                        </div>
                        <div>
                          <span className="text-ink/50 block">Rashi / Nakshatram</span>
                          <span className="font-bold text-sm text-ink">
                            {ticket.rashiStar}
                          </span>
                        </div>
                      </>
                    ) : ticket.bookingType === "donation" ? (
                      <div>
                        <span className="text-ink/50 block">Devotion Contribution</span>
                        <span className="font-bold text-sm text-ink">
                          Yagam Annadanam & Kalyan
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-ink/50 block">Accommodation size</span>
                        <span className="font-bold text-sm text-ink">
                          {ticket.guests} Person(s)
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-ink/50 block">Scheduled Date</span>
                      <span className="font-bold text-sm text-dev-orange">
                        {ticket.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dotted separator line for ticket look */}
                <div className="relative flex md:flex-col items-center justify-between py-1 md:py-4 px-6 md:px-0">
                  <div className="absolute top-0 md:left-0 md:right-0 h-0.5 md:h-full w-full md:w-0.5 border-t-2 md:border-l-2 border-dashed border-gold-500/30"></div>
                  {/* Punch holes */}
                  <div className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sandal border border-gold-500/25 hidden md:block"></div>
                  <div className="absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sandal border border-gold-500/25 hidden md:block"></div>
                </div>

                {/* Right Ticket Section (Barcode/QR & Cost) */}
                <div className="bg-maroon-900/5 p-6 flex flex-col items-center justify-center min-w-[180px] text-center gap-3">
                  <div className="w-24 h-24 bg-white border border-gold-500/20 p-2 flex items-center justify-center relative shadow-sm rounded-lg">
                    {/* Simulated Ticket QR code */}
                    <div className="grid grid-cols-5 gap-0.5 w-full h-full opacity-70">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            (i % 2 === 0 || i % 5 === 0 || i === 0 || i === 4 || i === 20 || i === 24)
                              ? "bg-ink"
                              : "bg-transparent"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-ink/50 tracking-wider font-bold">
                      Price Paid
                    </span>
                    <div className="text-lg font-black text-maroon-900">
                      {ticket.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="bg-sandal px-6 py-5 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto border border-maroon-800 text-maroon-800 hover:bg-maroon-800/10 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            🖨️ Print Ticket / Save PDF
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-maroon-900 hover:bg-maroon-950 text-gold-400 font-bold px-8 py-2.5 rounded-lg text-sm transition-colors border border-gold-500 text-center"
          >
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
