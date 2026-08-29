import { useEffect } from "react";
import templeLogo from "../../assets/temple_logo.svg";
import siteConfig from "../../config/siteConfig";

export default function ReceiptPage({ receipt, onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!receipt) return null;

  // Helper to calculate prasadam entitlements for each ticket item
  const getPrasadamDetails = (item) => {
    const name = (item.name || "").toLowerCase();
    const type = item.bookingType;

    if (type === "donation") {
      return "2 Special Laddus + Yaga Bhasmam & Special Seshavastram";
    }
    if (name.includes("rudra") || name.includes("abhishekam")) {
      return "2 Special Laddus + 1 Vada + Teertham & Seshavastram";
    }
    if (name.includes("kumkum")) {
      return "Kumkum Prasadam + 1 Laddu + Blouse Piece (జాకెట్ ముక్క) & Akshintalu";
    }
    if (name.includes("nitya") || name.includes("pooja")) {
      return "2 Laddus + 1 Pulihora Packet & Teertha Prasadam";
    }
    if (name.includes("suprabhata")) {
      return "1 Laddu + Teertha Prasadam & Akshintalu";
    }
    if (type === "stay") {
      return "Complimentary Morning Teertha Prasadam";
    }
    return "1 Laddu + Teertha Prasadam";
  };

  return (
    <div className="max-w-2xl mx-auto px-3 py-4 text-ink min-h-[calc(100vh-140px)] flex flex-col justify-center">
      
      {/* Screen Action Buttons (Hidden when printing) */}
      <div className="no-print mb-3 flex items-center justify-between gap-3">
        <button
          onClick={() => window.print()}
          className="bg-maroon-900 text-gold-400 hover:bg-maroon-950 font-bold px-4 py-2 rounded-lg text-xs transition-colors border border-gold-500/40 shadow flex items-center gap-1.5 cursor-pointer"
        >
          🖨️ Print Ticket / Save PDF
        </button>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
          className="bg-white border border-gray-300 hover:border-maroon-900 text-ink/80 hover:text-maroon-950 text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
        >
          Return to Home Page ↑
        </button>
      </div>

      {/* Official Temple Ticket Receipt Document */}
      <div className="w-full bg-white border-2 border-gold-500/80 rounded-xl shadow-2xl overflow-hidden text-black print:border-none print:shadow-none print:rounded-none">
        
        {/* Official Header */}
        <div className="bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 text-white p-4 border-b-2 border-gold-400 print:bg-white print:text-black print:p-2">
          <div className="flex items-center justify-between gap-3">
            
            {/* Logo */}
            <div className="w-14 h-14 rounded-full border border-gold-400 bg-black/40 overflow-hidden shrink-0 flex items-center justify-center p-0.5 print:border-black">
              <img src={templeLogo} alt="Temple Logo" className="w-full h-full object-contain" />
            </div>

            {/* Title & Temple Trust Info */}
            <div className="text-center flex-1">
              <span className="text-[9px] uppercase tracking-widest text-gold-300 font-bold block print:text-gray-700">
                దగదర్తి శైవ క్షేత్రము • Dagadarthi Holy Shrine
              </span>
              <h1
                lang="te"
                className="text-base sm:text-lg font-bold text-gold-400 leading-snug print:text-black"
                style={{ fontFamily: "'Tiro Telugu', 'Noto Sans Telugu', serif" }}
              >
                {siteConfig.templeName}
              </h1>
              <p className="text-[10px] text-white/80 print:text-gray-600">
                {siteConfig.address}
              </p>
            </div>

            {/* Official Badge */}
            <div className="text-right shrink-0 hidden sm:block print:block">
              <span className="text-[9px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/40 px-2 py-1 rounded print:border-black print:text-black">
                OFFICIAL PASS
              </span>
            </div>

          </div>
        </div>

        {/* Transaction Summary Bar */}
        <div className="bg-amber-50 px-4 py-2.5 border-b border-amber-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div>
            <span className="text-[10px] text-gray-500 uppercase font-bold block">Txn ID / Ref</span>
            <span className="font-mono font-bold text-black text-xs truncate block">
              {receipt.transactionId}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-gray-500 uppercase font-bold block">Payment Date</span>
            <span className="font-semibold text-black text-xs block">
              {receipt.paymentDate}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-gray-500 uppercase font-bold block">Payment Mode</span>
            <span className="font-semibold text-black text-xs block">PhonePe UPI (Success)</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-500 uppercase font-bold block">Total Paid</span>
            <span className="font-black text-maroon-900 text-sm block">
              ₹{receipt.amount.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Digital Ticket Passes */}
        <div className="p-4 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-maroon-950 border-b border-gray-200 pb-1 flex items-center justify-between">
            <span>భక్తుల సేవా ప్రవేశ పత్రములు (Entry Passes - {receipt.items?.length || 0})</span>
            <span className="text-[10px] font-normal text-gray-500">Present at Counter #1</span>
          </h2>

          <div className="space-y-3">
            {receipt.items.map((ticket, idx) => {
              const prasadamText = getPrasadamDetails(ticket);
              return (
                <div
                  key={ticket.token || idx}
                  className="border border-gold-500/40 rounded-lg p-3 bg-amber-50/20 relative space-y-2 print:border-black print:p-2"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-gray-200 pb-1.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-maroon-900 text-gold-400 print:bg-black print:text-white">
                        {ticket.bookingType === "seva" ? "Seva Ticket" : ticket.bookingType === "donation" ? "Yagam Sankalpam" : "Stay Receipt"}
                      </span>
                      <span className="font-mono font-bold text-gray-800 text-xs">
                        Token: {ticket.token}
                      </span>
                    </div>
                    <span className="font-bold text-dev-orange print:text-black">
                      Price: {ticket.price}
                    </span>
                  </div>

                  {/* Main Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-500 block">Seva / Purpose</span>
                      <span className="font-bold text-maroon-900 print:text-black">{ticket.name}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block">Devotee Name</span>
                      <span className="font-bold text-gray-900">{ticket.devoteeName}</span>
                    </div>
                    {ticket.gotram ? (
                      <div>
                        <span className="text-[10px] text-gray-500 block">Gotram / Star</span>
                        <span className="font-semibold text-gray-800">{ticket.gotram} ({ticket.rashiStar || "N/A"})</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-[10px] text-gray-500 block">Guests</span>
                        <span className="font-semibold text-gray-800">{ticket.guests || 1} Pax</span>
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] text-gray-500 block">Scheduled Date</span>
                      <span className="font-bold text-gray-900">{ticket.date}</span>
                    </div>
                  </div>

                  {/* PRASADAM ENTITLEMENTS SECTION (నైవేద్య ప్రసాదము వివరాలు) */}
                  <div className="bg-amber-100/70 border border-amber-300 rounded p-2 text-xs flex items-center justify-between gap-2 print:bg-gray-100 print:border-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🎁</span>
                      <div>
                        <span className="text-[10px] font-bold text-maroon-900 uppercase tracking-wider block leading-tight">
                          Prasadam Entitlements (నైవేద్య ప్రసాదము):
                        </span>
                        <span className="font-bold text-gray-900 text-xs">
                          {prasadamText}
                        </span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold uppercase text-green-800 bg-green-100 px-2 py-0.5 rounded border border-green-300 shrink-0 print:border-black">
                      Collect at Counter
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Compliance & Signature Section */}
          <div className="pt-3 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] text-gray-600">
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wider text-black block">
                Important Guidelines (ఆలయ నిబంధనలు):
              </span>
              <ul className="list-disc pl-3 space-y-0.5">
                <li>Traditional Dress Code mandatory (Dhoti/Kurta for Men, Saree/Chudidar for Women).</li>
                <li>Please report 30 minutes before the scheduled seva time at Counter #1.</li>
                <li>Carry a valid photo ID proof along with this printed pass.</li>
              </ul>
            </div>

            <div className="text-right flex flex-col justify-end items-end space-y-1 pt-2 sm:pt-0">
              <div className="w-28 h-10 border border-dashed border-gray-400 flex items-center justify-center text-[9px] text-gray-400 font-mono">
                [Temple Seal]
              </div>
              <span className="font-bold text-black block">Temple Management &amp; Head Priest</span>
              <span className="text-[9px] text-gray-500">Sri Durga Bhavani Sameta Ramalingeswara Swamy Devasthanam</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
