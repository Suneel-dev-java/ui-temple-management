import { useState, useEffect } from "react";

export default function PhonePeGateway({ paymentInfo, onPaymentSuccess, onPaymentCancel }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("qr"); // "qr" | "upi" | "card"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      onPaymentCancel();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onPaymentCancel]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate transaction delay
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center p-3 font-sans text-gray-800">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full overflow-hidden border border-purple-200">
        
        {/* PhonePe Header */}
        <div className="bg-[#5f259f] px-4 py-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center font-black text-[#5f259f] text-xs shadow-inner">
              Pe
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">PhonePe Gateway</h3>
              <p className="text-[9px] text-white/70">Secure UPI Payment</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-white/70 block">Time Left</span>
            <span className="font-mono text-xs font-bold text-yellow-300 bg-black/30 px-1.5 py-0.5 rounded">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Processing Loader Overlay */}
        {isProcessing ? (
          <div className="p-8 flex flex-col items-center justify-center space-y-3 animate-pulse">
            <div className="w-12 h-12 border-3 border-[#5f259f] border-t-transparent rounded-full animate-spin"></div>
            <div className="font-bold text-sm text-gray-700">Verifying Transaction...</div>
            <p className="text-[11px] text-gray-500 text-center max-w-xs">
              Processing payment via PhonePe gateway. Please do not close this window.
            </p>
          </div>
        ) : (
          <>
            {/* Transaction details bar */}
            <div className="bg-purple-50/80 px-4 py-2.5 border-b border-purple-100 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-gray-500 block">Merchant</span>
                <span className="font-bold text-gray-800 text-xs">Dagadarthi Devasthanam</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-500 block">Amount Payable</span>
                <span className="font-extrabold text-base text-[#5f259f]">
                  ₹{paymentInfo?.amount?.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="p-4 space-y-3">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                SELECT PAYMENT MODE
              </h4>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMethod("qr")}
                  className={`py-2 px-1 rounded-lg border text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                    selectedMethod === "qr"
                      ? "border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  Scan QR Code
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod("upi")}
                  className={`py-2 px-1 rounded-lg border text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                    selectedMethod === "upi"
                      ? "border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  UPI ID
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod("card")}
                  className={`py-2 px-1 rounded-lg border text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                    selectedMethod === "card"
                      ? "border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                  Card Payment
                </button>
              </div>

              {/* QR Method */}
              {selectedMethod === "qr" && (
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center space-y-2">
                  {/* Mock QR Code graphic */}
                  <div className="w-32 h-32 bg-white p-2 border border-gray-300 mx-auto rounded shadow-inner flex flex-col items-center justify-center relative">
                    <div className="grid grid-cols-4 gap-1.5 w-full h-full p-1 opacity-85">
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-300 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-300 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-300 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-300 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-300 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                    </div>
                    <span className="absolute bg-[#5f259f] text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow">
                      PHONEPE UPI
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-snug">
                    Scan using any UPI App (PhonePe, GPay, Paytm)
                  </p>
                </div>
              )}

              {/* UPI ID Method */}
              {selectedMethod === "upi" && (
                <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <label className="text-[10px] font-bold text-gray-600 block">Enter VPA / UPI ID</label>
                  <input
                    type="text"
                    placeholder="example@ybl"
                    className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#5f259f]"
                  />
                </div>
              )}

              {/* Card Method */}
              {selectedMethod === "card" && (
                <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#5f259f]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#5f259f]"
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      maxLength={4}
                      className="border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#5f259f]"
                    />
                  </div>
                </div>
              )}

              {/* Pay Action Button */}
              <button
                onClick={handlePaymentSubmit}
                className="w-full bg-[#5f259f] hover:bg-[#4a1c7f] text-white font-bold py-2.5 rounded-lg text-xs shadow transition-all cursor-pointer mt-2"
              >
                Pay ₹{paymentInfo?.amount?.toLocaleString("en-IN")} (Simulate Success)
              </button>

              <button
                type="button"
                onClick={onPaymentCancel}
                className="w-full text-center text-[10px] text-gray-500 hover:text-gray-800 font-semibold"
              >
                Cancel Transaction
              </button>
            </div>

            {/* Footer Trust Badges */}
            <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex items-center justify-center gap-4 text-[9px] text-gray-400">
              <span className="flex items-center gap-1">🔒 PCI-DSS Compliant</span>
              <span className="flex items-center gap-1">🛡️ 256-bit SSL Encryption</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
