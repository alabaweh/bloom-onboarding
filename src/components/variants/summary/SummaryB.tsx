"use client";

/**
 * VARIANT B — "Topographic"
 * Summary / All Set screen: Clean editorial recap card.
 * Numbered sections, horizontal rules, typographic hierarchy.
 * Cream bg (#fafaf8), black (#1a1a1a), red (#c8352e).
 */
export default function SummaryB() {
  const profileData = {
    age: "25-30",
    cycleLength: "28-30 days",
    periodLength: "4-5 days",
    goals: ["Period Tracking", "Fertility"],
    symptomsTracked: 6,
  };

  return (
    <div className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden bg-[#fafaf8]">
      {/* Topo contour lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 + Math.sin(i * 0.8) * 40}
            cy={400 + i * 10}
            rx={180 - i * 14}
            ry={140 - i * 10}
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
            transform={`rotate(${i * 2}, 200, 400)`}
          />
        ))}
      </svg>

      {/* Top status bar */}
      <div className="z-10 flex items-center justify-between mb-10">
        <span className="text-[10px] text-[#1a1a1a]/30 tracking-[0.3em] uppercase font-medium">
          Summary
        </span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#c8352e]" />
          <span className="text-[10px] text-[#1a1a1a]/30 tracking-[0.2em] uppercase">
            Complete
          </span>
        </div>
      </div>

      {/* Main heading */}
      <div className="z-10 mb-8">
        <h1 className="text-4xl font-bold text-[#1a1a1a] tracking-[-0.03em] leading-tight mb-3">
          All Set.
        </h1>
        <div className="w-10 h-0.5 bg-[#c8352e] mb-4" />
        <p className="text-sm text-[#1a1a1a]/35 font-light max-w-[280px] leading-relaxed">
          Here is your personalized profile summary. Everything is configured and ready.
        </p>
      </div>

      {/* Editorial recap card */}
      <div className="z-10 flex-1">
        {/* Section 01 - Profile */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-3xl font-bold text-[#1a1a1a]/10">01</span>
            <span className="text-xs text-[#1a1a1a]/40 tracking-[0.2em] uppercase font-medium">
              Profile
            </span>
          </div>
          <div className="h-px bg-[#1a1a1a]/8 mb-4" />
          <div className="grid grid-cols-2 gap-y-3 gap-x-8 pl-1">
            <div>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase block mb-1">
                Age Range
              </span>
              <span className="text-sm font-semibold text-[#1a1a1a]">{profileData.age}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase block mb-1">
                Cycle Length
              </span>
              <span className="text-sm font-semibold text-[#1a1a1a]">{profileData.cycleLength}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase block mb-1">
                Period Length
              </span>
              <span className="text-sm font-semibold text-[#1a1a1a]">{profileData.periodLength}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase block mb-1">
                Symptoms
              </span>
              <span className="text-sm font-semibold text-[#1a1a1a]">
                {profileData.symptomsTracked} tracked
              </span>
            </div>
          </div>
        </div>

        {/* Section 02 - Goals */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-3xl font-bold text-[#1a1a1a]/10">02</span>
            <span className="text-xs text-[#1a1a1a]/40 tracking-[0.2em] uppercase font-medium">
              Goals
            </span>
          </div>
          <div className="h-px bg-[#1a1a1a]/8 mb-4" />
          <div className="flex flex-col gap-2 pl-1">
            {profileData.goals.map((goal, i) => (
              <div key={goal} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-sm flex items-center justify-center"
                  style={{ background: i === 0 ? "#c8352e" : "#1a1a1a" }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-[#1a1a1a] font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 03 - Tracking */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-3xl font-bold text-[#1a1a1a]/10">03</span>
            <span className="text-xs text-[#1a1a1a]/40 tracking-[0.2em] uppercase font-medium">
              Tracking
            </span>
          </div>
          <div className="h-px bg-[#1a1a1a]/8 mb-4" />
          <div className="flex items-center gap-6 pl-1">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1a1a1a]">
                {profileData.symptomsTracked}
              </span>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase mt-1">
                Symptoms
              </span>
            </div>
            <div className="w-px h-10 bg-[#1a1a1a]/8" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1a1a1a]">
                {profileData.goals.length}
              </span>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase mt-1">
                Goals
              </span>
            </div>
            <div className="w-px h-10 bg-[#1a1a1a]/8" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#c8352e]">100%</span>
              <span className="text-[10px] text-[#1a1a1a]/25 tracking-wider uppercase mt-1">
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 w-full space-y-4 mt-6">
        <div className="h-px bg-[#1a1a1a]/8" />
        <button className="w-full h-14 rounded-none font-medium text-sm tracking-[0.15em] uppercase text-white bg-[#c8352e] hover:bg-[#b02d27] transition-colors">
          Start Your Journey
        </button>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#1a1a1a]/8" />
          <span className="text-[10px] text-[#1a1a1a]/20 tracking-[0.15em] uppercase">
            Personalized for you
          </span>
          <div className="h-px flex-1 bg-[#1a1a1a]/8" />
        </div>
      </div>
    </div>
  );
}
