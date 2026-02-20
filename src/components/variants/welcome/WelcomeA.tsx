"use client";

/**
 * VARIANT A — "Celestial"
 * Concept: Night sky / lunar cycle metaphor. Dark, moody, premium.
 * The moon phases represent the cycle phases — a unique, non-medical framing.
 */
export default function WelcomeA() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)" }}>

      {/* Star field */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div />

      {/* Moon phases arc */}
      <div className="flex flex-col items-center z-10">
        <div className="flex items-center gap-3 mb-12">
          {/* Moon phases */}
          {[0.15, 0.35, 1, 0.65, 0.25].map((opacity, i) => (
            <div key={i} className="relative" style={{
              width: i === 2 ? 64 : 32,
              height: i === 2 ? 64 : 32,
              borderRadius: "50%",
              background: i === 2
                ? "radial-gradient(circle at 40% 35%, #fffbe6, #f5d882, #c9a23c)"
                : `rgba(210, 195, 255, ${opacity})`,
              boxShadow: i === 2
                ? "0 0 40px rgba(245, 216, 130, 0.5), 0 0 80px rgba(245, 216, 130, 0.2)"
                : "none",
              transform: `translateY(${Math.abs(i - 2) * 8}px)`,
            }} />
          ))}
        </div>

        <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-3 text-center">
          Luna
        </h1>
        <p className="text-base text-purple-300/80 font-light tracking-[0.2em] uppercase mb-8">
          In sync with you
        </p>

        <p className="text-sm text-purple-200/50 text-center max-w-[240px] leading-relaxed">
          Your body moves in cycles, just like the moon. Track, understand, and honor every phase.
        </p>
      </div>

      {/* Bottom */}
      <div className="w-full z-10 space-y-4">
        <button className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide text-[#0c0a1d]"
          style={{
            background: "linear-gradient(135deg, #f5d882, #e8c55a)",
            boxShadow: "0 4px 24px rgba(245, 216, 130, 0.3)",
          }}>
          Begin Your Cycle
        </button>
        <p className="text-center text-xs text-purple-400/60">
          Already tracking? <span className="text-purple-300 font-medium">Sign in</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
