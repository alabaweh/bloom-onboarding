"use client";

/**
 * VARIANT — "Topographic" Features
 * 3 features as numbered editorial sections (01, 02, 03).
 * Large faded numbers, red accent bars between sections.
 */
export default function Features() {
  const features = [
    {
      num: "01",
      title: "Cycle Mapping",
      desc: "Your cycle rendered as living topography. Every contour, every shift tracked with cartographic precision.",
    },
    {
      num: "02",
      title: "Fertility Terrain",
      desc: "Navigate your fertile landscape with elevation-grade accuracy. Know exactly where you stand.",
    },
    {
      num: "03",
      title: "Symptom Relief",
      desc: "Chart your symptoms like geological survey data. Patterns emerge from the terrain of your body.",
    },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${100 + i * 55} Q100 ${80 + i * 55 + (i % 3) * 20} 200 ${100 + i * 55} T400 ${100 + i * 55}`}
            stroke="#1a1a1a"
            strokeWidth="0.75"
            fill="none"
          />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-12">
        <span
          className="text-[10px] uppercase tracking-[0.4em] block mb-3"
          style={{ fontFamily: "system-ui", opacity: 0.35 }}
        >
          Vela / Features
        </span>
        <h1
          className="text-3xl font-light tracking-tight leading-tight"
          style={{ fontFamily: "system-ui" }}
        >
          What Vela<br />Maps For You
        </h1>
      </div>

      {/* Feature sections */}
      <div className="z-10 flex-1 flex flex-col">
        {features.map((f, idx) => (
          <div key={idx} className="relative">
            {/* Red accent bar between sections */}
            {idx > 0 && <div className="w-full h-px bg-[#c8352e] opacity-30 mb-8" />}

            <div className="relative mb-8">
              {/* Large faded number */}
              <span
                className="absolute -top-2 -left-1 text-[80px] font-light leading-none select-none"
                style={{
                  fontFamily: "ui-monospace, monospace",
                  color: "#1a1a1a",
                  opacity: 0.04,
                }}
              >
                {f.num}
              </span>

              {/* Content */}
              <div className="relative pl-0 pt-4">
                <span
                  className="text-[11px] uppercase tracking-[0.3em] block mb-2"
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    color: "#c8352e",
                  }}
                >
                  {f.num}
                </span>
                <h3
                  className="text-lg font-medium tracking-tight mb-2"
                  style={{ fontFamily: "system-ui" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-[280px]"
                  style={{ fontFamily: "system-ui", opacity: 0.4 }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="z-10 mt-6 w-full">
        <div className="w-full h-px bg-[#1a1a1a] opacity-10 mb-6" />
        <button
          className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{ background: "#1a1a1a", color: "#fafaf8", fontFamily: "system-ui" }}
        >
          Continue
        </button>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-20" />
          <div className="w-6 h-px bg-[#c8352e]" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-20" />
        </div>
      </div>
    </div>
  );
}
