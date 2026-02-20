"use client";

/**
 * VARIANT B — "Topographic" Features Screen
 * Features as numbered editorial sections with red accent rules.
 * Minimal, high-fashion editorial layout. Cream bg, sharp square buttons,
 * red accent lines, contour map background.
 */
export default function FeaturesB() {
  const features = [
    {
      number: "01",
      title: "Cycle\nIntelligence",
      body: "Precision-mapped cycle predictions powered by adaptive algorithms. Your body as data, refined daily.",
      detail: "28-day avg accuracy: 97.4%",
    },
    {
      number: "02",
      title: "Fertility\nInsights",
      body: "Clinical-grade fertile window detection. Six key biomarkers analyzed in real time for unmatched clarity.",
      detail: "Ovulation window: \u00b11 day",
    },
    {
      number: "03",
      title: "Holistic\nWellness",
      body: "Sleep architecture, hormonal mood patterns, energy mapping. The full topography of your wellbeing.",
      detail: "12 wellness dimensions tracked",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen px-8 py-12 overflow-hidden bg-[#fafaf8]">
      {/* Topo contour lines background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 900" fill="none">
        {Array.from({ length: 18 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 + Math.sin(i * 0.6) * 60}
            cy={200 + i * 35}
            rx={180 - i * 8}
            ry={50 + i * 4}
            stroke="#1a1a1a"
            strokeWidth="0.8"
            fill="none"
            transform={`rotate(${i * 2.5}, ${200 + Math.sin(i * 0.6) * 60}, ${200 + i * 35})`}
          />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] text-[#1a1a1a]/30 tracking-[0.3em] uppercase font-medium">
            Vela
          </span>
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
          <span className="text-[10px] text-[#c8352e] tracking-[0.2em] uppercase font-medium">
            Features
          </span>
        </div>

        <h1 className="text-3xl font-bold text-[#1a1a1a] tracking-[-0.03em] leading-tight">
          Body Intelligence,<br />
          <span className="text-[#1a1a1a]/25">Refined.</span>
        </h1>
      </div>

      {/* Feature sections */}
      <div className="z-10 flex-1 flex flex-col gap-0">
        {features.map((feature, idx) => (
          <div key={idx} className="relative">
            {/* Top rule */}
            <div className="flex items-center gap-0 mb-5">
              <div className="w-8 h-px bg-[#c8352e]" />
              <div className="h-px flex-1 bg-[#1a1a1a]/8" />
            </div>

            <div className="flex gap-5 mb-6">
              {/* Number column */}
              <div className="flex flex-col items-start">
                <span className="text-[40px] font-bold text-[#1a1a1a]/[0.04] leading-none tracking-tight"
                  style={{ fontFamily: "system-ui" }}>
                  {feature.number}
                </span>
              </div>

              {/* Content column */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold text-[#1a1a1a] tracking-[-0.02em] leading-tight mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs text-[#1a1a1a]/35 leading-relaxed font-light mb-3">
                  {feature.body}
                </p>
                {/* Detail chip */}
                <div className="inline-flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#c8352e]" />
                  <span className="text-[10px] text-[#1a1a1a]/30 tracking-wide font-medium uppercase">
                    {feature.detail}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Final rule */}
        <div className="flex items-center gap-0">
          <div className="w-8 h-px bg-[#c8352e]" />
          <div className="h-px flex-1 bg-[#1a1a1a]/8" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-8 w-full space-y-4">
        <button className="w-full h-14 rounded-none font-medium text-sm tracking-[0.15em] uppercase text-white bg-[#1a1a1a]">
          Continue
        </button>

        {/* Page indicator */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-1.5 h-1.5 bg-[#1a1a1a]/10" />
          <div className="w-6 h-1 bg-[#c8352e]" />
          <div className="w-1.5 h-1.5 bg-[#1a1a1a]/10" />
        </div>
      </div>
    </div>
  );
}
