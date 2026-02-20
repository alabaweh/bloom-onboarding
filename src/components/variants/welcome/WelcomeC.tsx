"use client";

/**
 * VARIANT C — "Aurora"
 * Concept: Northern lights / flowing energy — body as living energy field.
 * Glassmorphism, fluid gradients, ethereal.
 */
export default function WelcomeC() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#0a0e1a" }}>

      {/* Aurora blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-20%] left-[-30%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 60%)", filter: "blur(80px)" }} />
        <div className="absolute top-[20%] right-[-20%] w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 60%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ec4899, transparent 60%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #10b981, transparent 60%)", filter: "blur(60px)" }} />
      </div>

      <div />

      {/* Center content */}
      <div className="flex flex-col items-center z-10">
        {/* Glass card logo */}
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-xl"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 3C18 3 6 13 6 22C6 28.075 11.373 33 18 33C24.627 33 30 28.075 30 22C30 13 18 3 18 3Z"
              fill="url(#aurora-drop)" />
            <defs>
              <linearGradient id="aurora-drop" x1="6" y1="3" x2="30" y2="33">
                <stop stopColor="#06b6d4" />
                <stop offset="0.5" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-3">
          Aura
        </h1>
        <p className="text-sm text-white/30 tracking-[0.15em] uppercase font-light mb-10">
          Feel your rhythm
        </p>

        {/* Glass info chips */}
        <div className="flex gap-2">
          {["Cycle AI", "Fertility", "Wellness"].map((label, i) => (
            <span key={label} className="px-3 py-1.5 rounded-full text-[11px] font-medium text-white/60 backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full z-10 space-y-3">
        <button className="w-full h-14 rounded-2xl font-semibold text-sm text-white backdrop-blur-xl transition-all"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4), rgba(236,72,153,0.4))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 4px 24px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}>
          Start Tracking
        </button>
        <button className="w-full h-12 rounded-2xl text-sm text-white/40 font-medium backdrop-blur-md transition-colors hover:text-white/60"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
          Sign In
        </button>
      </div>
    </div>
  );
}
