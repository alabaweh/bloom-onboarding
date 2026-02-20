"use client";

/**
 * VARIANT A — "Celestial" Features Screen
 * Features presented as constellation patterns / star cards on a night sky.
 * Each feature is a constellation group with connected star nodes,
 * floating on a deep purple cosmos background with gold accents.
 */
export default function FeaturesA() {
  const features = [
    {
      title: "Cycle Intelligence",
      description: "Your cycle mapped across the stars. AI-powered predictions that learn your unique lunar rhythm.",
      constellation: [
        { x: 30, y: 20, size: 3, bright: true },
        { x: 55, y: 12, size: 2, bright: false },
        { x: 70, y: 28, size: 4, bright: true },
        { x: 45, y: 38, size: 2, bright: false },
        { x: 20, y: 35, size: 3, bright: true },
      ],
      lines: [[0,1],[1,2],[2,3],[3,4],[4,0]],
      icon: "M18 2L22.09 13.26L34 14.27L25.18 22.14L27.82 34L18 28.27L8.18 34L10.82 22.14L2 14.27L13.91 13.26Z",
    },
    {
      title: "Fertility Insights",
      description: "Navigate your fertile window with celestial precision. Every phase illuminated like moonlight.",
      constellation: [
        { x: 25, y: 15, size: 4, bright: true },
        { x: 50, y: 8, size: 2, bright: false },
        { x: 75, y: 18, size: 3, bright: true },
        { x: 65, y: 35, size: 2, bright: false },
        { x: 40, y: 40, size: 3, bright: true },
        { x: 15, y: 32, size: 2, bright: false },
      ],
      lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]],
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    },
    {
      title: "Holistic Wellness",
      description: "Sleep, mood, energy, and symptoms. All threads woven into your personal star chart.",
      constellation: [
        { x: 40, y: 10, size: 3, bright: true },
        { x: 65, y: 20, size: 2, bright: false },
        { x: 80, y: 35, size: 3, bright: true },
        { x: 60, y: 42, size: 4, bright: true },
        { x: 35, y: 38, size: 2, bright: false },
        { x: 20, y: 25, size: 3, bright: true },
        { x: 30, y: 15, size: 2, bright: false },
      ],
      lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,3]],
      icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)" }}
    >
      {/* Star field background */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            top: `${(i * 17.3) % 100}%`,
            left: `${(i * 31.7) % 100}%`,
            opacity: ((i * 7) % 10) / 15 + 0.1,
            animation: `twinkleA ${((i % 4) + 2)}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.4}s`,
          }}
        />
      ))}

      {/* Nebula glow behind cards */}
      <div
        className="absolute top-[30%] left-[50%] w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #f5d882, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Header */}
      <div className="z-10 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.82 20L12 16.77L7.18 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
              fill="#f5d882" />
          </svg>
          <span className="text-[10px] text-[#f5d882]/60 tracking-[0.3em] uppercase font-medium">
            Luna Features
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight leading-tight">
          Your Celestial<br />Health Map
        </h1>
        <p className="text-sm text-purple-300/40 mt-2 font-light">
          Three constellations guiding your journey
        </p>
      </div>

      {/* Feature constellation cards */}
      <div className="z-10 flex-1 flex flex-col gap-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-5 backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(210, 195, 255, 0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
          >
            {/* Constellation SVG */}
            <div className="absolute top-3 right-3 w-24 h-14 opacity-60">
              <svg width="100%" height="100%" viewBox="0 0 100 50" fill="none">
                {/* Connection lines */}
                {feature.lines.map(([from, to], li) => (
                  <line
                    key={li}
                    x1={feature.constellation[from].x}
                    y1={feature.constellation[from].y}
                    x2={feature.constellation[to].x}
                    y2={feature.constellation[to].y}
                    stroke="rgba(245, 216, 130, 0.25)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  />
                ))}
                {/* Star nodes */}
                {feature.constellation.map((star, si) => (
                  <g key={si}>
                    {star.bright && (
                      <circle cx={star.x} cy={star.y} r={star.size + 4}
                        fill="rgba(245, 216, 130, 0.08)" />
                    )}
                    <circle cx={star.x} cy={star.y} r={star.size}
                      fill={star.bright ? "#f5d882" : "rgba(210, 195, 255, 0.5)"} />
                  </g>
                ))}
              </svg>
            </div>

            {/* Feature icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{
                background: "rgba(245, 216, 130, 0.08)",
                border: "1px solid rgba(245, 216, 130, 0.15)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d={feature.icon} fill="#f5d882" opacity="0.8" />
              </svg>
            </div>

            {/* Number + Title */}
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-[10px] text-[#f5d882]/40 font-mono">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {feature.title}
              </h3>
            </div>

            <p className="text-xs text-purple-200/35 leading-relaxed max-w-[240px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-8 w-full">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide text-[#0c0a1d]"
          style={{
            background: "linear-gradient(135deg, #f5d882, #e8c55a)",
            boxShadow: "0 4px 24px rgba(245, 216, 130, 0.3)",
          }}
        >
          Continue
        </button>
        {/* Page dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#f5d882]/30" />
          <div className="w-6 h-1.5 rounded-full bg-[#f5d882]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#f5d882]/30" />
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkleA {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
