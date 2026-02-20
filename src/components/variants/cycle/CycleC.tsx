"use client";

/**
 * VARIANT C — "Aurora"
 * Concept: Phases as light spectrum bands in a northern lights display.
 * Dark bg (#0a0e1a), glassmorphism, aurora colors (cyan, purple, pink).
 * Each phase is a luminous horizontal band undulating like the aurora borealis.
 */

const phases = [
  {
    name: "Menstrual",
    days: "Day 1-5",
    description: "Deep rest & release",
    color1: "#ec4899",
    color2: "#f472b6",
    yBase: 60,
    amplitude: 15,
    icon: "circle",
  },
  {
    name: "Follicular",
    days: "Day 6-13",
    description: "Rising momentum",
    color1: "#8b5cf6",
    color2: "#a78bfa",
    yBase: 120,
    amplitude: 20,
    icon: "triangle",
  },
  {
    name: "Ovulation",
    days: "Day 14-16",
    description: "Full luminance",
    color1: "#06b6d4",
    color2: "#22d3ee",
    yBase: 175,
    amplitude: 18,
    icon: "diamond",
  },
  {
    name: "Luteal",
    days: "Day 17-28",
    description: "Gentle descent",
    color1: "#10b981",
    color2: "#34d399",
    yBase: 235,
    amplitude: 12,
    icon: "wave",
  },
];

function generateAuroraBandPath(
  yBase: number,
  amplitude: number,
  width: number,
  bandHeight: number
) {
  const points = 8;
  const step = width / (points - 1);

  let topPath = `M0 ${yBase}`;
  for (let i = 1; i < points; i++) {
    const x = i * step;
    const offset =
      Math.sin(i * 0.9) * amplitude +
      Math.cos(i * 1.4) * (amplitude * 0.5);
    topPath += ` Q${x - step / 2} ${yBase + offset} ${x} ${
      yBase + Math.sin(i * 1.2) * (amplitude * 0.7)
    }`;
  }

  let bottomPath = `L${width} ${yBase + bandHeight}`;
  for (let i = points - 2; i >= 0; i--) {
    const x = i * step;
    const offset =
      Math.sin(i * 0.7 + 1) * (amplitude * 0.6) +
      Math.cos(i * 1.1) * (amplitude * 0.3);
    bottomPath += ` Q${x + step / 2} ${yBase + bandHeight + offset} ${x} ${
      yBase + bandHeight + Math.sin(i * 0.8) * (amplitude * 0.5)
    }`;
  }

  return topPath + bottomPath + " Z";
}

export default function CycleC() {
  const svgWidth = 380;
  const svgHeight = 300;

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-14 overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-[5%] left-[-20%] w-[500px] h-[300px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[25%] right-[-15%] w-[400px] h-[300px] rounded-full opacity-12"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[5%] w-[350px] h-[250px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Title */}
      <div className="text-center mb-6 z-10">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
          Your Cycle Spectrum
        </h2>
        <p className="text-xs text-white/30 tracking-[0.15em] uppercase">
          Four lights in the aurora
        </p>
      </div>

      {/* Aurora spectrum bands */}
      <div className="relative w-full max-w-sm z-10 mb-6">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          fill="none"
          className="w-full"
          style={{ overflow: "visible" }}
        >
          <defs>
            {phases.map((phase, i) => (
              <linearGradient
                key={i}
                id={`aurora-band-${i}`}
                x1="0"
                y1="0"
                x2={svgWidth}
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={phase.color1} stopOpacity="0" />
                <stop offset="0.15" stopColor={phase.color1} stopOpacity="0.6" />
                <stop offset="0.5" stopColor={phase.color2} stopOpacity="0.8" />
                <stop offset="0.85" stopColor={phase.color1} stopOpacity="0.6" />
                <stop offset="1" stopColor={phase.color1} stopOpacity="0" />
              </linearGradient>
            ))}

            {/* Glow filter */}
            <filter id="aurora-glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Render each aurora band */}
          {phases.map((phase, i) => {
            const bandPath = generateAuroraBandPath(
              phase.yBase,
              phase.amplitude,
              svgWidth,
              35
            );
            return (
              <g key={i} style={{ filter: "url(#aurora-glow)" }}>
                <path
                  d={bandPath}
                  fill={`url(#aurora-band-${i})`}
                  opacity="0.7"
                >
                  <animate
                    attributeName="opacity"
                    values="0.5;0.8;0.6;0.7;0.5"
                    dur={`${6 + i * 1.5}s`}
                    repeatCount="indefinite"
                  />
                </path>
                {/* Bright core line along center of each band */}
                <path
                  d={generateAuroraBandPath(
                    phase.yBase + 14,
                    phase.amplitude * 0.5,
                    svgWidth,
                    4
                  )}
                  fill={phase.color2}
                  opacity="0.4"
                />
              </g>
            );
          })}

          {/* Vertical particle streaks */}
          {Array.from({ length: 20 }).map((_, i) => {
            const x = 30 + ((i * 47) % (svgWidth - 60));
            const y = 40 + ((i * 73) % 220);
            const h = 15 + (i % 4) * 8;
            const phaseIdx = i % 4;
            return (
              <line
                key={i}
                x1={x}
                y1={y}
                x2={x}
                y2={y + h}
                stroke={phases[phaseIdx].color2}
                strokeWidth="1"
                opacity="0.15"
              >
                <animate
                  attributeName="opacity"
                  values="0.05;0.2;0.05"
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                  begin={`${(i % 5) * 0.6}s`}
                />
              </line>
            );
          })}

          {/* Phase labels on the right edge */}
          {phases.map((phase, i) => (
            <text
              key={i}
              x={svgWidth - 10}
              y={phase.yBase + 22}
              fill={phase.color2}
              fillOpacity="0.5"
              fontSize="9"
              fontWeight="500"
              textAnchor="end"
              style={{ fontFamily: "system-ui" }}
            >
              {phase.name.substring(0, 3).toUpperCase()}
            </text>
          ))}
        </svg>
      </div>

      {/* Glassmorphic phase cards */}
      <div className="w-full max-w-sm grid grid-cols-2 gap-2.5 z-10">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="relative p-3.5 rounded-2xl backdrop-blur-xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Subtle color accent glow */}
            <div
              className="absolute top-0 left-0 w-full h-1 opacity-60"
              style={{
                background: `linear-gradient(90deg, transparent, ${phase.color1}, transparent)`,
              }}
            />

            {/* Icon */}
            <div className="mb-2">
              <svg width="20" height="20" viewBox="0 0 20 20">
                {phase.icon === "circle" && (
                  <circle
                    cx="10"
                    cy="10"
                    r="6"
                    fill="none"
                    stroke={phase.color2}
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                )}
                {phase.icon === "triangle" && (
                  <path
                    d="M10 3 L17 16 L3 16 Z"
                    fill="none"
                    stroke={phase.color2}
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                )}
                {phase.icon === "diamond" && (
                  <path
                    d="M10 2 L18 10 L10 18 L2 10 Z"
                    fill="none"
                    stroke={phase.color2}
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                )}
                {phase.icon === "wave" && (
                  <path
                    d="M2 10 Q6 4 10 10 Q14 16 18 10"
                    fill="none"
                    stroke={phase.color2}
                    strokeWidth="1.5"
                    opacity="0.7"
                  />
                )}
              </svg>
            </div>

            <p
              className="text-xs font-semibold mb-0.5"
              style={{ color: phase.color2 }}
            >
              {phase.name}
            </p>
            <p className="text-[10px] text-white/25 mb-1">{phase.days}</p>
            <p className="text-[11px] text-white/40 leading-relaxed">
              {phase.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-sm mt-auto pt-8 z-10">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm text-white backdrop-blur-xl transition-all"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4), rgba(236,72,153,0.4))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 4px 24px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
