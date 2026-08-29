import { useState, useEffect } from "react";

export default function PhonePeGateway({ paymentInfo, onPaymentSuccess, onPaymentCancel }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("qr"); // "qr" | "upi" | "card"

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
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans text-gray-800">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden border border-gray-200">
        {/* PhonePe Header */}
        <div className="bg-[#5f259f] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* PhonePe logo badge */}
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-black text-[#5f259f] text-sm shadow-inner">
              Pe
            </div>
            <div>
              <h3 className="font-bold text-base tracking-wide">PhonePe Checkout</h3>
              <p className="text-[10px] text-white/70">Secure UPI Payment Gateway</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-white/70 block">Time Remaining</span>
            <span className="font-mono text-sm font-bold text-yellow-400 bg-black/20 px-2 py-0.5 rounded border border-white/10">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Processing Loader Overlay */}
        {isProcessing ? (
          <div className="p-12 flex flex-col items-center justify-center space-y-4 animate-pulse">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-[#5f259f] border-t-transparent rounded-full animate-spin"></div>
            <div className="font-bold text-lg text-gray-700">Verifying Transaction...</div>
            <p className="text-xs text-gray-500 text-center max-w-xs">
              Please do not hit back, reload the page, or close the browser window.
            </p>
          </div>
        ) : (
          <>
            {/* Transaction details bar */}
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-100 flex items-center justify-between text-sm">
              <div>
                <span className="text-xs text-gray-500 block">Merchant</span>
                <span className="font-semibold text-gray-800">Sri Durga Bhavani Devasthanam</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-500 block">Amount Payable</span>
                <span className="font-bold text-lg text-[#5f259f]">
                  ₹{paymentInfo?.amount?.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="p-6 space-y-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Select Payment Mode
              </h4>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedMethod("qr")}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                    selectedMethod === "qr"
                      ? "border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 7h4v4H7zm6 0h4v4h-4zm0 6h4v4h-4zm-6 0h4v4H7z" />
                  </svg>
                  Scan QR Code
                </button>

                <button
                  onClick={() => setSelectedMethod("upi")}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                    selectedMethod === "upi"
                      ? "border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  UPI ID
                </button>

                <button
                  onClick={() => setSelectedMethod("card")}
                  className={`py-2.5 px-2 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                    selectedMethod === "card"
                      ? "border-[#5f259f] bg-purple-50 text-[#5f259f] shadow-sm"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20M6 14h2" />
                  </svg>
                  Card Payment
                </button>
              </div>

              {/* Method Forms */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                {selectedMethod === "qr" && (
                  <div className="text-center space-y-3">
                    <div className="w-36 h-36 bg-white border border-gray-300 rounded-lg p-2 mx-auto flex items-center justify-center relative shadow-inner">
                      {/* Fake QR code drawing */}
                      <div className="grid grid-cols-4 gap-1 w-full h-full opacity-80">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-sm ${
                              (i % 3 === 0 || i % 7 === 0 || i === 0 || i === 3 || i === 12 || i === 15)
                                ? "bg-black"
                                : "bg-transparent"
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-purple-600 text-white font-bold text-[9px] px-2 py-0.5 rounded border border-white">
                          PHONEPE UPI
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Scan this QR code using any UPI app (PhonePe, GPay, Paytm) to complete payment.
                    </p>
                  </div>
                )}

                {selectedMethod === "upi" && (
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Enter UPI ID
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="username@ybl"
                        className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5f259f]"
                      />
                      <span className="bg-gray-200 text-gray-600 text-xs px-3 py-2 rounded-lg font-bold flex items-center border border-gray-300">
                        @ybl
                      </span>
                    </div>
                  </div>
                )}

                {selectedMethod === "card" && (
                  <div className="space-y-3 text-left">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5f259f]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5f259f]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          maxLength="3"
                          placeholder="***"
                          className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#5f259f]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pay Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={handlePaymentSubmit}
                  className="w-full bg-[#5f259f] hover:bg-[#4d1d83] text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors border border-purple-700 text-base"
                >
                  Pay ₹{paymentInfo?.amount?.toLocaleString("en-IN")} (Simulate Success)
                </button>

                <button
                  type="button"
                  onClick={onPaymentCancel}
                  className="w-full text-xs font-bold text-gray-500 hover:text-gray-800 py-1 transition-colors text-center"
                >
                  Cancel Transaction
                </button>
              </div>
            </div>
          </>
        )}

        {/* Security badges */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-center gap-4 text-[10px] text-gray-400">
          <span className="flex items-center gap-1">
            🛡️ PCI-DSS Compliant
          </span>
          <span className="flex items-center gap-1">
            🔒 256-bit SSL Encryption
          </span>
        </div>
      </div>
    </div>
  );
}
