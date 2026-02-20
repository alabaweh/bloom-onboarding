"use client";

/**
 * VARIANT E — "Pulse" Features Screen
 * Features as data dashboard metrics/gauges. Pure black bg, neon pink accent,
 * subtle grid, biometric/data-forward. Each feature is a dashboard-style
 * card with SVG gauges, radial meters, and data visualizations.
 */
export default function FeaturesE() {
  const features = [
    {
      title: "Cycle Intelligence",
      metric: "97.4%",
      metricLabel: "PREDICTION ACCURACY",
      description: "AI-driven cycle mapping that improves with every data point you share.",
      color: "#ff3e8a",
      gauge: {
        value: 0.974,
        segments: [
          { start: 0, end: 0.7, color: "rgba(255,62,138,0.15)" },
          { start: 0.7, end: 0.974, color: "#ff3e8a" },
        ],
      },
      stats: [
        { label: "Avg Cycle", value: "28d" },
        { label: "Next", value: "4d" },
        { label: "Phase", value: "Lut" },
      ],
    },
    {
      title: "Fertility Insights",
      metric: "6",
      metricLabel: "BIOMARKERS TRACKED",
      description: "Clinical-grade fertile window detection with real-time biomarker analysis.",
      color: "#8b5cf6",
      gauge: {
        value: 0.83,
        segments: [
          { start: 0, end: 0.5, color: "rgba(139,92,246,0.15)" },
          { start: 0.5, end: 0.83, color: "#8b5cf6" },
        ],
      },
      stats: [
        { label: "Window", value: "\u00b11d" },
        { label: "Conf.", value: "94%" },
        { label: "BBT", value: "On" },
      ],
    },
    {
      title: "Holistic Wellness",
      metric: "12",
      metricLabel: "WELLNESS DIMENSIONS",
      description: "Sleep, mood, energy, stress, and symptoms decoded into actionable insight.",
      color: "#06b6d4",
      gauge: {
        value: 0.88,
        segments: [
          { start: 0, end: 0.6, color: "rgba(6,182,212,0.15)" },
          { start: 0.6, end: 0.88, color: "#06b6d4" },
        ],
      },
      stats: [
        { label: "Sleep", value: "7.2h" },
        { label: "Energy", value: "82%" },
        { label: "Mood", value: "Good" },
      ],
    },
  ];

  // Helper to compute SVG arc path for gauge
  function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
    const start = {
      x: cx + r * Math.cos((startAngle - 90) * Math.PI / 180),
      y: cy + r * Math.sin((startAngle - 90) * Math.PI / 180),
    };
    const end = {
      x: cx + r * Math.cos((endAngle - 90) * Math.PI / 180),
      y: cy + r * Math.sin((endAngle - 90) * Math.PI / 180),
    };
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  }

  return (
    <div className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Neon glow */}
      <div
        className="absolute top-[20%] left-[50%] w-[300px] h-[200px] rounded-full opacity-10"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #ff3e8a, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Header */}
      <div className="z-10 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff3e8a]"
              style={{ boxShadow: "0 0 8px #ff3e8a" }} />
            <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase font-medium"
              style={{ fontFamily: "system-ui" }}>
              CYRCLE
            </span>
          </div>
          <span className="text-[10px] text-white/15 tracking-wider uppercase"
            style={{ fontFamily: "system-ui" }}>
            Features
          </span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-[-0.02em] leading-tight mb-1"
          style={{ fontFamily: "system-ui" }}>
          Your Body.<br />Decoded.
        </h1>
        <p className="text-xs text-white/20 font-light">
          Three core systems powering your health data
        </p>
      </div>

      {/* Dashboard feature cards */}
      <div className="z-10 flex-1 flex flex-col gap-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative rounded-xl p-4 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Scan line effect */}
            <div
              className="absolute top-0 left-0 w-full h-px opacity-30"
              style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
            />

            <div className="flex gap-4">
              {/* Radial gauge */}
              <div className="flex-shrink-0 relative w-16 h-16 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  {/* Background track */}
                  <path
                    d={describeArc(32, 32, 26, -120, 120)}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Dim segment */}
                  <path
                    d={describeArc(32, 32, 26, -120, -120 + feature.gauge.value * 240 * 0.5)}
                    stroke={`${feature.color}33`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Bright segment */}
                  <path
                    d={describeArc(32, 32, 26, -120 + feature.gauge.value * 240 * 0.5, -120 + feature.gauge.value * 240)}
                    stroke={feature.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Tick marks */}
                  {Array.from({ length: 9 }).map((_, ti) => {
                    const angle = (-120 + ti * 30) * Math.PI / 180;
                    const x1 = 32 + 21 * Math.cos(angle - Math.PI / 2);
                    const y1 = 32 + 21 * Math.sin(angle - Math.PI / 2);
                    const x2 = 32 + 23 * Math.cos(angle - Math.PI / 2);
                    const y2 = 32 + 23 * Math.sin(angle - Math.PI / 2);
                    return (
                      <line key={ti} x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    );
                  })}
                </svg>
                {/* Center metric */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-sm font-bold" style={{ color: feature.color, fontFamily: "system-ui" }}>
                    {feature.metric}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white tracking-tight"
                    style={{ fontFamily: "system-ui" }}>
                    {feature.title}
                  </h3>
                </div>
                <span className="text-[8px] tracking-[0.15em] font-medium block mb-1.5"
                  style={{ color: `${feature.color}80`, fontFamily: "system-ui" }}>
                  {feature.metricLabel}
                </span>
                <p className="text-[10px] text-white/20 leading-relaxed mb-2">
                  {feature.description}
                </p>

                {/* Mini stats row */}
                <div className="flex gap-3">
                  {feature.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span className="text-xs font-bold text-white/60"
                        style={{ fontFamily: "system-ui" }}>
                        {stat.value}
                      </span>
                      <span className="text-[8px] text-white/15 tracking-wider uppercase"
                        style={{ fontFamily: "system-ui" }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full space-y-3">
        <button
          className="w-full h-14 rounded-xl font-bold text-sm tracking-wide text-white"
          style={{
            background: "linear-gradient(135deg, #ff3e8a, #d62872)",
            boxShadow: "0 0 24px rgba(255,62,138,0.25), 0 4px 12px rgba(255,62,138,0.15)",
            fontFamily: "system-ui",
          }}
        >
          CONTINUE
        </button>

        {/* Page indicator */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/8" />
          <div className="w-6 h-1 rounded-full bg-[#ff3e8a]"
            style={{ boxShadow: "0 0 6px rgba(255,62,138,0.4)" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-white/8" />
        </div>
      </div>
    </div>
  );
}
