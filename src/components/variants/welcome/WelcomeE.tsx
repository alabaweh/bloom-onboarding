"use client";

/**
 * VARIANT E — "Pulse"
 * Concept: Biometric / heartbeat visualization — body as data art.
 * Black + neon accent. Tech-forward, Whoop/Oura-inspired premium.
 */
export default function WelcomeE() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-8 py-14 overflow-hidden bg-[#0a0a0a]">

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

      {/* Glow accent */}
      <div className="absolute top-[35%] left-[50%] translate-x-[-50%] w-[300px] h-[200px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #ff3e8a, transparent 70%)", filter: "blur(60px)" }} />

      <div />

      {/* Center */}
      <div className="flex flex-col items-center z-10">
        {/* Pulse wave */}
        <div className="mb-10 relative">
          <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
            <path
              d="M0 40 L30 40 L40 40 L55 10 L65 70 L75 20 L85 55 L95 35 L105 40 L200 40"
              stroke="url(#pulse-grad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="pulse-grad" x1="0" y1="40" x2="200" y2="40">
                <stop stopColor="#ff3e8a" stopOpacity="0" />
                <stop offset="0.3" stopColor="#ff3e8a" />
                <stop offset="0.7" stopColor="#ff3e8a" />
                <stop offset="1" stopColor="#ff3e8a" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          {/* Dot on the peak */}
          <div className="absolute top-[6px] left-[52px] w-3 h-3 rounded-full bg-[#ff3e8a]"
            style={{ boxShadow: "0 0 12px #ff3e8a, 0 0 24px rgba(255,62,138,0.4)" }} />
        </div>

        <h1 className="text-4xl font-bold text-white tracking-[-0.02em] mb-2" style={{ fontFamily: "system-ui" }}>
          CYRCLE
        </h1>
        <p className="text-xs text-white/25 tracking-[0.4em] uppercase font-medium mb-10">
          Your body. Decoded.
        </p>

        {/* Stats preview */}
        <div className="flex gap-6">
          {[
            { label: "Cycle", value: "28d", color: "#ff3e8a" },
            { label: "Phase", value: "Lut", color: "#8b5cf6" },
            { label: "Sync", value: "94%", color: "#06b6d4" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-[10px] text-white/20 tracking-wider uppercase mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full z-10 space-y-3">
        <button className="w-full h-14 rounded-xl font-bold text-sm tracking-wide text-white transition-all"
          style={{
            background: "linear-gradient(135deg, #ff3e8a, #d62872)",
            boxShadow: "0 0 24px rgba(255,62,138,0.3), 0 4px 12px rgba(255,62,138,0.2)",
          }}>
          GET STARTED
        </button>
        <button className="w-full h-12 rounded-xl text-sm text-white/20 font-medium transition-colors hover:text-white/40"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          Log In
        </button>
      </div>
    </div>
  );
}
