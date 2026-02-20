"use client";

/**
 * VARIANT C — "Aurora" Features Screen
 * Features as floating glassmorphism cards with aurora color reflections.
 * Dark background, cyan/purple/pink aurora blobs, frosted glass cards
 * that appear to hover and catch the aurora light.
 */
export default function FeaturesC() {
  const features = [
    {
      title: "Cycle Intelligence",
      description: "AI that learns your unique rhythm. Predictions sharpen with every cycle logged.",
      gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.08))",
      borderGlow: "rgba(6,182,212,0.2)",
      accentColor: "#06b6d4",
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      chips: ["Prediction", "28-day Map", "Phase ID"],
    },
    {
      title: "Fertility Insights",
      description: "Know your fertile window with precision. Six biomarkers, one clear answer.",
      gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.08))",
      borderGlow: "rgba(139,92,246,0.2)",
      accentColor: "#8b5cf6",
      iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      chips: ["Ovulation", "Biomarkers", "Window"],
    },
    {
      title: "Holistic Wellness",
      description: "Sleep, mood, energy, and symptoms unified into a living portrait of your health.",
      gradient: "linear-gradient(135deg, rgba(236,72,153,0.12), rgba(16,185,129,0.08))",
      borderGlow: "rgba(236,72,153,0.2)",
      accentColor: "#ec4899",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      chips: ["Sleep", "Mood", "Energy", "Symptoms"],
    },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-[-15%] left-[-20%] w-[450px] h-[450px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 60%)",
            filter: "blur(90px)",
            animation: "auroraFloat1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[25%] right-[-25%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 60%)",
            filter: "blur(80px)",
            animation: "auroraFloat2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-10%] w-[380px] h-[380px] rounded-full opacity-18"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent 60%)",
            filter: "blur(80px)",
            animation: "auroraFloat3 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[30%] right-[5%] w-[250px] h-[250px] rounded-full opacity-12"
          style={{
            background: "radial-gradient(circle, #10b981, transparent 60%)",
            filter: "blur(60px)",
            animation: "auroraFloat1 7s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Header */}
      <div className="z-10 mb-6">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C12 3 6 13 6 18C6 21.31 8.69 24 12 24C15.31 24 18 21.31 18 18C18 13 12 3 12 3Z"
              fill="url(#auraDropC)" />
            <defs>
              <linearGradient id="auraDropC" x1="6" y1="3" x2="18" y2="24">
                <stop stopColor="#06b6d4" />
                <stop offset="0.5" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-medium">
            Aura
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight leading-tight mb-2">
          Feel Your<br />Rhythm
        </h1>
        <p className="text-sm text-white/25 font-light">
          Three pillars of intuitive health tracking
        </p>
      </div>

      {/* Glass feature cards */}
      <div className="z-10 flex-1 flex flex-col gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-5 backdrop-blur-xl overflow-hidden"
            style={{
              background: feature.gradient,
              border: `1px solid ${feature.borderGlow}`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)`,
            }}
          >
            {/* Subtle inner glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${feature.accentColor}, transparent 70%)`,
                filter: "blur(30px)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10">
              {/* Icon row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke={feature.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.iconPath} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {feature.title}
                </h3>
              </div>

              <p className="text-xs text-white/30 leading-relaxed mb-3">
                {feature.description}
              </p>

              {/* Glass chips */}
              <div className="flex flex-wrap gap-1.5">
                {feature.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium text-white/40 backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full space-y-3">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm text-white backdrop-blur-xl"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4), rgba(236,72,153,0.4))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 4px 24px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          Continue
        </button>

        {/* Page dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
          <div className="w-6 h-1.5 rounded-full" style={{ background: "linear-gradient(90deg, #06b6d4, #8b5cf6)" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
        </div>
      </div>

      <style jsx>{`
        @keyframes auroraFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -20px); }
        }
        @keyframes auroraFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 15px); }
        }
        @keyframes auroraFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
      `}</style>
    </div>
  );
}
