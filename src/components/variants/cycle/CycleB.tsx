"use client";

/**
 * VARIANT B — "Topographic"
 * Concept: Phases as stacked geological strata / cross-section layers.
 * Cream bg (#fafaf8), black text (#1a1a1a), red accent (#c8352e).
 * Each phase is a sedimentary layer with distinct pattern and texture.
 */

const phases = [
  {
    name: "Menstrual",
    days: "Day 1-5",
    description: "Shedding & renewal",
    pattern: "dense",
    fillColor: "#c8352e",
    fillOpacity: 0.12,
    strokeColor: "#c8352e",
    label: "M",
  },
  {
    name: "Follicular",
    days: "Day 6-13",
    description: "Building & growth",
    pattern: "dotted",
    fillColor: "#1a1a1a",
    fillOpacity: 0.06,
    strokeColor: "#1a1a1a",
    label: "F",
  },
  {
    name: "Ovulation",
    days: "Day 14-16",
    description: "Peak expression",
    pattern: "cross",
    fillColor: "#c8352e",
    fillOpacity: 0.08,
    strokeColor: "#c8352e",
    label: "O",
  },
  {
    name: "Luteal",
    days: "Day 17-28",
    description: "Integration & reflection",
    pattern: "wave",
    fillColor: "#1a1a1a",
    fillOpacity: 0.04,
    strokeColor: "#1a1a1a",
    label: "L",
  },
];

export default function CycleB() {
  return (
    <div className="relative flex flex-col items-center min-h-screen px-6 py-14 overflow-hidden bg-[#fafaf8]">
      {/* Subtle topo contour lines background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 400 800"
        fill="none"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 + Math.sin(i * 0.6) * 50}
            cy={400 + i * 10}
            rx={180 - i * 10}
            ry={80 - i * 4}
            stroke="#1a1a1a"
            strokeWidth="0.5"
            fill="none"
            transform={`rotate(${i * 2}, 200, 400)`}
          />
        ))}
      </svg>

      {/* Title */}
      <div className="text-center mb-8 z-10">
        <h2 className="text-2xl font-bold text-[#1a1a1a] tracking-[-0.02em] mb-1">
          Your Cycle Layers
        </h2>
        <div className="w-10 h-px bg-[#c8352e] mx-auto mb-3" />
        <p className="text-xs text-[#1a1a1a]/35 tracking-[0.2em] uppercase">
          Geological cross-section
        </p>
      </div>

      {/* Strata cross-section diagram */}
      <div className="relative w-full max-w-sm z-10 mb-8">
        <svg
          viewBox="0 0 340 280"
          fill="none"
          className="w-full"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.04))" }}
        >
          <defs>
            {/* Dense hatch pattern for Menstrual */}
            <pattern
              id="strata-dense"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="#c8352e"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>

            {/* Dot pattern for Follicular */}
            <pattern
              id="strata-dot"
              patternUnits="userSpaceOnUse"
              width="10"
              height="10"
            >
              <circle cx="5" cy="5" r="1" fill="#1a1a1a" opacity="0.2" />
            </pattern>

            {/* Cross pattern for Ovulation */}
            <pattern
              id="strata-cross"
              patternUnits="userSpaceOnUse"
              width="12"
              height="12"
            >
              <line
                x1="6"
                y1="2"
                x2="6"
                y2="10"
                stroke="#c8352e"
                strokeWidth="0.7"
                opacity="0.25"
              />
              <line
                x1="2"
                y1="6"
                x2="10"
                y2="6"
                stroke="#c8352e"
                strokeWidth="0.7"
                opacity="0.25"
              />
            </pattern>

            {/* Wave pattern for Luteal */}
            <pattern
              id="strata-wave"
              patternUnits="userSpaceOnUse"
              width="20"
              height="8"
            >
              <path
                d="M0 4 Q5 0 10 4 Q15 8 20 4"
                stroke="#1a1a1a"
                strokeWidth="0.7"
                fill="none"
                opacity="0.15"
              />
            </pattern>
          </defs>

          {/* Surface terrain line */}
          <path
            d="M0 30 Q40 10 80 25 Q120 40 170 20 Q220 5 260 28 Q300 38 340 22"
            stroke="#1a1a1a"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />

          {/* Layer 1 — Luteal (topmost stratum) */}
          <path
            d="M0 30 Q40 10 80 25 Q120 40 170 20 Q220 5 260 28 Q300 38 340 22
               L340 90 Q280 80 220 95 Q160 105 100 88 Q50 75 0 90 Z"
            fill="#1a1a1a"
            fillOpacity="0.03"
          />
          <path
            d="M0 30 Q40 10 80 25 Q120 40 170 20 Q220 5 260 28 Q300 38 340 22
               L340 90 Q280 80 220 95 Q160 105 100 88 Q50 75 0 90 Z"
            fill="url(#strata-wave)"
          />
          {/* Layer boundary */}
          <path
            d="M0 90 Q50 75 100 88 Q160 105 220 95 Q280 80 340 90"
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
          />
          {/* Label */}
          <text
            x="310"
            y="65"
            fill="#1a1a1a"
            fillOpacity="0.25"
            fontSize="9"
            fontWeight="600"
            textAnchor="end"
          >
            L
          </text>

          {/* Layer 2 — Ovulation */}
          <path
            d="M0 90 Q50 75 100 88 Q160 105 220 95 Q280 80 340 90
               L340 155 Q270 145 210 160 Q150 172 90 155 Q40 143 0 158 Z"
            fill="#c8352e"
            fillOpacity="0.06"
          />
          <path
            d="M0 90 Q50 75 100 88 Q160 105 220 95 Q280 80 340 90
               L340 155 Q270 145 210 160 Q150 172 90 155 Q40 143 0 158 Z"
            fill="url(#strata-cross)"
          />
          <path
            d="M0 158 Q40 143 90 155 Q150 172 210 160 Q270 145 340 155"
            stroke="#c8352e"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <text
            x="310"
            y="130"
            fill="#c8352e"
            fillOpacity="0.35"
            fontSize="9"
            fontWeight="600"
            textAnchor="end"
          >
            O
          </text>

          {/* Layer 3 — Follicular */}
          <path
            d="M0 158 Q40 143 90 155 Q150 172 210 160 Q270 145 340 155
               L340 215 Q290 208 230 220 Q170 230 110 218 Q50 208 0 220 Z"
            fill="#1a1a1a"
            fillOpacity="0.04"
          />
          <path
            d="M0 158 Q40 143 90 155 Q150 172 210 160 Q270 145 340 155
               L340 215 Q290 208 230 220 Q170 230 110 218 Q50 208 0 220 Z"
            fill="url(#strata-dot)"
          />
          <path
            d="M0 220 Q50 208 110 218 Q170 230 230 220 Q290 208 340 215"
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
            opacity="0.12"
          />
          <text
            x="310"
            y="193"
            fill="#1a1a1a"
            fillOpacity="0.25"
            fontSize="9"
            fontWeight="600"
            textAnchor="end"
          >
            F
          </text>

          {/* Layer 4 — Menstrual (deepest stratum) */}
          <path
            d="M0 220 Q50 208 110 218 Q170 230 230 220 Q290 208 340 215
               L340 280 L0 280 Z"
            fill="#c8352e"
            fillOpacity="0.08"
          />
          <path
            d="M0 220 Q50 208 110 218 Q170 230 230 220 Q290 208 340 215
               L340 280 L0 280 Z"
            fill="url(#strata-dense)"
          />
          <text
            x="310"
            y="255"
            fill="#c8352e"
            fillOpacity="0.35"
            fontSize="9"
            fontWeight="600"
            textAnchor="end"
          >
            M
          </text>

          {/* Depth markers on the left */}
          <line
            x1="8"
            y1="30"
            x2="8"
            y2="275"
            stroke="#1a1a1a"
            strokeWidth="0.5"
            opacity="0.15"
          />
          {[30, 90, 158, 220].map((y, i) => (
            <g key={i}>
              <line
                x1="4"
                y1={y}
                x2="12"
                y2={y}
                stroke="#1a1a1a"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </g>
          ))}

          {/* Elevation arrow */}
          <path
            d="M20 270 L20 40 L16 48 M20 40 L24 48"
            stroke="#1a1a1a"
            strokeWidth="0.7"
            fill="none"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Phase detail rows */}
      <div className="w-full max-w-sm space-y-0 z-10">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="flex items-center gap-4 py-3.5"
            style={{
              borderBottom:
                i < phases.length - 1
                  ? "1px solid rgba(26,26,26,0.06)"
                  : "none",
            }}
          >
            {/* Stratum sample swatch */}
            <div className="flex-shrink-0 relative">
              <svg width="36" height="36" viewBox="0 0 36 36">
                <rect
                  x="2"
                  y="2"
                  width="32"
                  height="32"
                  fill={phase.fillColor}
                  fillOpacity={phase.fillOpacity}
                  stroke={phase.strokeColor}
                  strokeWidth="1"
                  opacity="0.3"
                />
                {/* Pattern lines inside swatch */}
                {phase.pattern === "dense" &&
                  Array.from({ length: 6 }).map((_, j) => (
                    <line
                      key={j}
                      x1={6 + j * 5}
                      y1="4"
                      x2={6 + j * 5}
                      y2="32"
                      stroke={phase.strokeColor}
                      strokeWidth="0.8"
                      opacity="0.3"
                      transform="rotate(45, 18, 18)"
                    />
                  ))}
                {phase.pattern === "dotted" &&
                  Array.from({ length: 9 }).map((_, j) => (
                    <circle
                      key={j}
                      cx={10 + (j % 3) * 8}
                      cy={10 + Math.floor(j / 3) * 8}
                      r="1.5"
                      fill={phase.strokeColor}
                      opacity="0.2"
                    />
                  ))}
                {phase.pattern === "cross" &&
                  Array.from({ length: 4 }).map((_, j) => (
                    <g key={j}>
                      <line
                        x1={10 + (j % 2) * 14}
                        y1={8 + Math.floor(j / 2) * 14}
                        x2={10 + (j % 2) * 14}
                        y2={16 + Math.floor(j / 2) * 14}
                        stroke={phase.strokeColor}
                        strokeWidth="0.8"
                        opacity="0.25"
                      />
                      <line
                        x1={6 + (j % 2) * 14}
                        y1={12 + Math.floor(j / 2) * 14}
                        x2={14 + (j % 2) * 14}
                        y2={12 + Math.floor(j / 2) * 14}
                        stroke={phase.strokeColor}
                        strokeWidth="0.8"
                        opacity="0.25"
                      />
                    </g>
                  ))}
                {phase.pattern === "wave" &&
                  Array.from({ length: 3 }).map((_, j) => (
                    <path
                      key={j}
                      d={`M4 ${10 + j * 9} Q12 ${6 + j * 9} 18 ${
                        10 + j * 9
                      } Q24 ${14 + j * 9} 32 ${10 + j * 9}`}
                      stroke={phase.strokeColor}
                      strokeWidth="0.8"
                      fill="none"
                      opacity="0.15"
                    />
                  ))}
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-sm font-semibold"
                  style={{ color: phase.strokeColor }}
                >
                  {phase.name}
                </span>
                <span className="text-[10px] text-[#1a1a1a]/25 tracking-wide">
                  {phase.days}
                </span>
              </div>
              <p className="text-[11px] text-[#1a1a1a]/35 mt-0.5">
                {phase.description}
              </p>
            </div>

            {/* Depth indicator */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className="w-px bg-[#1a1a1a]/10"
                style={{ height: 12 + i * 6 }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full mt-1"
                style={{
                  backgroundColor: phase.strokeColor,
                  opacity: 0.4,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-sm mt-auto pt-8 z-10">
        <button className="w-full h-14 rounded-none font-medium text-sm tracking-[0.15em] uppercase text-white bg-[#1a1a1a] hover:bg-[#333] transition-colors">
          Continue
        </button>
      </div>
    </div>
  );
}
