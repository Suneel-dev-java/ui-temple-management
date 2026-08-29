import { useState } from "react";
import templeBg from "../../assets/temple_bg.png";
import templeLogo from "../../assets/temple_logo.svg";
import siteConfig from "../../config/siteConfig";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    setIsLoading(true);

    // Mock auth — accept any non-empty credentials
    setTimeout(() => {
      localStorage.setItem("temple_user_logged_in", "true");
      localStorage.setItem("temple_user_name", username.trim());
      onLogin(username.trim());
    }, 800);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-3 relative overflow-hidden"
      style={{
        backgroundImage: `url(${templeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-950/90 via-maroon-950/85 to-black/95" />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animation: `float ${3 + i * 0.7}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-sm">
        {/* Temple Header */}
        <div className="text-center mb-3">
          {/* Temple Official Emblem Logo */}
          <div className="mx-auto w-20 h-20 rounded-full border-2 border-gold-400 shadow-[0_0_20px_rgba(255,215,0,0.35)] overflow-hidden mb-2 bg-black/40 backdrop-blur-md flex items-center justify-center p-0.5">
            <img
              src={templeLogo}
              alt="Dagadarthi Sivalayam Official Logo"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>

          {/* Temple Name in Telugu */}
          <h1
            lang="te"
            className="text-xl md:text-2xl text-gold-400 font-bold leading-tight mb-1"
            style={{
              fontFamily: "'Tiro Telugu', 'Noto Sans Telugu', serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {siteConfig.templeName}
          </h1>

          {/* Place in Telugu */}
          <p
            lang="te"
            className="text-sm text-gold-400/70 font-medium"
            style={{ fontFamily: "'Noto Sans Telugu', serif" }}
          >
            {siteConfig.place}
          </p>

          {/* English subtitle */}
          <p className="text-[10px] text-white/40 tracking-widest uppercase font-semibold">
            Devasthanam Official Portal
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-6 h-px bg-gold-500/40" />
            <svg className="w-3 h-3 text-gold-500/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
            </svg>
            <div className="w-6 h-px bg-gold-500/40" />
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl p-4 md:p-5 space-y-3">
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">Devotee Sign In</h2>
            <p className="text-[10px] text-white/50 mt-0.5">
              Enter your credentials to access temple services
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-500/20 border border-red-400/30 text-red-200 text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Username */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider block">
                Username / Mobile
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username or mobile number"
                  className="w-full bg-white/10 border border-white/15 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/30 transition-all"
                  autoComplete="username"
                  autoFocus
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-white/70 uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-white/10 border border-white/15 rounded-lg pl-9 pr-9 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/30 transition-all"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-white/50 hover:text-white/70 transition-colors">
                <input type="checkbox" className="rounded border-white/20 bg-white/10 accent-gold-500" />
                Remember me
              </label>
              <a href="#" className="text-gold-400/70 hover:text-gold-400 transition-colors font-semibold">
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-dev-orange to-orange-600 text-white font-bold py-2.5 rounded-lg hover:from-dev-orange/90 hover:to-orange-500 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed text-xs"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing In...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
                  </svg>
                  Sign In to Devasthanam
                </>
              )}
            </button>
          </form>

        </div>

        {/* Footer */}
        <div className="text-center mt-3 space-y-1">
          <p className="text-[10px] text-white/25 leading-relaxed">
            {siteConfig.address}
          </p>
          <div className="flex items-center justify-center gap-3">
            {siteConfig.social.instagram && (
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-gold-400 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><circle cx="12" cy="12" r="3"/></svg>
              </a>
            )}
            {siteConfig.social.youtube && (
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-gold-400 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            )}
            {siteConfig.social.facebook && (
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-gold-400 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            )}
          </div>
          <p className="text-[9px] text-white/15">
            © {new Date().getFullYear()} Dagadarthi Devasthanam. All rights reserved.
          </p>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          100% { transform: translateY(-20px) scale(1.5); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
}
