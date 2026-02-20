"use client";

/**
 * VARIANT D — "Woven"
 * Concept: Phases as seasonal tapestry panels (winter, spring, summer, autumn).
 * Linen bg (#f7f3ee), brown (#3d2b1f), copper (#c17f4e).
 * Each phase is a distinct textile panel with woven patterns and seasonal motifs.
 */

const phases = [
  {
    name: "Menstrual",
    days: "Day 1-5",
    description: "Rest & shed, like winter fields under snow",
    season: "Winter",
    color: "#5a4a6b",
    accentColor: "#8b7aa8",
    patternId: "weave-winter",
  },
  {
    name: "Follicular",
    days: "Day 6-13",
    description: "New shoots emerge, energy starts to bloom",
    season: "Spring",
    color: "#4a7c5f",
    accentColor: "#6ba87e",
    patternId: "weave-spring",
  },
  {
    name: "Ovulation",
    days: "Day 14-16",
    description: "Full bloom, warmth at its peak",
    season: "Summer",
    color: "#c17f4e",
    accentColor: "#d4a574",
    patternId: "weave-summer",
  },
  {
    name: "Luteal",
    days: "Day 17-28",
    description: "Harvest & prepare, turning inward",
    season: "Autumn",
    color: "#a05a3c",
    accentColor: "#c47a5a",
    patternId: "weave-autumn",
  },
];

export default function CycleD() {
  return (
    <div className="relative flex flex-col items-center min-h-screen px-6 py-14 overflow-hidden bg-[#f7f3ee]">
      {/* Linen texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #3d2b1f 0px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, #3d2b1f 0px, transparent 1px, transparent 4px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* Title */}
      <div className="text-center mb-6 z-10">
        <p className="text-[10px] text-[#c17f4e] tracking-[0.3em] uppercase font-medium mb-2">
          The Four Seasons
        </p>
        <h2
          className="text-2xl font-bold text-[#3d2b1f] tracking-tight mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Your Cycle Tapestry
        </h2>
        {/* Decorative thread line */}
        <svg
          width="120"
          height="8"
          viewBox="0 0 120 8"
          className="mx-auto mt-2"
        >
          <path
            d="M0 4 Q15 0 30 4 Q45 8 60 4 Q75 0 90 4 Q105 8 120 4"
            stroke="#c17f4e"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Tapestry panels — 2x2 grid of seasonal woven panels */}
      <div className="w-full max-w-sm z-10 mb-6">
        <svg viewBox="0 0 320 400" fill="none" className="w-full">
          <defs>
            {/* Winter weave — horizontal bars with snowflake dots */}
            <pattern
              id="weave-winter"
              patternUnits="userSpaceOnUse"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#e8e0f0" fillOpacity="0.3" />
              <line
                x1="0"
                y1="4"
                x2="16"
                y2="4"
                stroke="#5a4a6b"
                strokeWidth="1.5"
                opacity="0.15"
              />
              <line
                x1="0"
                y1="12"
                x2="16"
                y2="12"
                stroke="#5a4a6b"
                strokeWidth="1.5"
                opacity="0.15"
              />
              <circle
                cx="8"
                cy="8"
                r="1"
                fill="#8b7aa8"
                opacity="0.25"
              />
            </pattern>

            {/* Spring weave — diagonal crosses, sprouting */}
            <pattern
              id="weave-spring"
              patternUnits="userSpaceOnUse"
              width="14"
              height="14"
            >
              <rect width="14" height="14" fill="#e0ede5" fillOpacity="0.3" />
              <line
                x1="0"
                y1="0"
                x2="14"
                y2="14"
                stroke="#4a7c5f"
                strokeWidth="1"
                opacity="0.12"
              />
              <line
                x1="14"
                y1="0"
                x2="0"
                y2="14"
                stroke="#4a7c5f"
                strokeWidth="1"
                opacity="0.12"
              />
              <circle
                cx="7"
                cy="7"
                r="1.5"
                fill="#6ba87e"
                opacity="0.2"
              />
            </pattern>

            {/* Summer weave — tight lattice, sun motif */}
            <pattern
              id="weave-summer"
              patternUnits="userSpaceOnUse"
              width="12"
              height="12"
            >
              <rect width="12" height="12" fill="#f0e6d6" fillOpacity="0.4" />
              <line
                x1="0"
                y1="3"
                x2="12"
                y2="3"
                stroke="#c17f4e"
                strokeWidth="2"
                opacity="0.15"
              />
              <line
                x1="0"
                y1="9"
                x2="12"
                y2="9"
                stroke="#c17f4e"
                strokeWidth="2"
                opacity="0.15"
              />
              <line
                x1="3"
                y1="0"
                x2="3"
                y2="12"
                stroke="#c17f4e"
                strokeWidth="1"
                opacity="0.1"
              />
              <line
                x1="9"
                y1="0"
                x2="9"
                y2="12"
                stroke="#c17f4e"
                strokeWidth="1"
                opacity="0.1"
              />
            </pattern>

            {/* Autumn weave — herringbone, warm */}
            <pattern
              id="weave-autumn"
              patternUnits="userSpaceOnUse"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#ede0d4" fillOpacity="0.3" />
              <path
                d="M0 0 L8 8 L16 0"
                stroke="#a05a3c"
                strokeWidth="1.2"
                fill="none"
                opacity="0.15"
              />
              <path
                d="M0 8 L8 16 L16 8"
                stroke="#a05a3c"
                strokeWidth="1.2"
                fill="none"
                opacity="0.15"
              />
            </pattern>

            {/* Fringe / tassel pattern for borders */}
            <pattern
              id="fringe"
              patternUnits="userSpaceOnUse"
              width="8"
              height="6"
            >
              <line
                x1="4"
                y1="0"
                x2="4"
                y2="6"
                stroke="#c17f4e"
                strokeWidth="1"
                opacity="0.2"
              />
            </pattern>
          </defs>

          {/* Panel 1 — Winter / Menstrual (top-left) */}
          <g>
            <rect
              x="8"
              y="8"
              width="148"
              height="185"
              rx="4"
              fill="url(#weave-winter)"
              stroke="#5a4a6b"
              strokeWidth="1"
              opacity="0.8"
            />
            {/* Border stitching */}
            <rect
              x="14"
              y="14"
              width="136"
              height="173"
              rx="2"
              fill="none"
              stroke="#5a4a6b"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              opacity="0.2"
            />
            {/* Snowflake motif */}
            <g transform="translate(82, 75)" opacity="0.3">
              <line
                x1="0"
                y1="-18"
                x2="0"
                y2="18"
                stroke="#8b7aa8"
                strokeWidth="1.5"
              />
              <line
                x1="-16"
                y1="0"
                x2="16"
                y2="0"
                stroke="#8b7aa8"
                strokeWidth="1.5"
              />
              <line
                x1="-12"
                y1="-12"
                x2="12"
                y2="12"
                stroke="#8b7aa8"
                strokeWidth="1"
              />
              <line
                x1="12"
                y1="-12"
                x2="-12"
                y2="12"
                stroke="#8b7aa8"
                strokeWidth="1"
              />
              <circle cx="0" cy="-18" r="2" fill="#8b7aa8" />
              <circle cx="0" cy="18" r="2" fill="#8b7aa8" />
              <circle cx="-16" cy="0" r="2" fill="#8b7aa8" />
              <circle cx="16" cy="0" r="2" fill="#8b7aa8" />
            </g>
            {/* Moon crescent */}
            <g transform="translate(82, 75)" opacity="0.15">
              <circle
                cx="0"
                cy="0"
                r="28"
                fill="none"
                stroke="#5a4a6b"
                strokeWidth="0.5"
              />
            </g>
            {/* Label */}
            <text
              x="82"
              y="148"
              fill="#5a4a6b"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              opacity="0.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              WINTER
            </text>
            <text
              x="82"
              y="163"
              fill="#5a4a6b"
              fontSize="8"
              textAnchor="middle"
              opacity="0.3"
            >
              Menstrual
            </text>
          </g>

          {/* Panel 2 — Spring / Follicular (top-right) */}
          <g>
            <rect
              x="164"
              y="8"
              width="148"
              height="185"
              rx="4"
              fill="url(#weave-spring)"
              stroke="#4a7c5f"
              strokeWidth="1"
              opacity="0.8"
            />
            <rect
              x="170"
              y="14"
              width="136"
              height="173"
              rx="2"
              fill="none"
              stroke="#4a7c5f"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              opacity="0.2"
            />
            {/* Sprouting plant motif */}
            <g transform="translate(238, 90)" opacity="0.3">
              <line
                x1="0"
                y1="20"
                x2="0"
                y2="-15"
                stroke="#4a7c5f"
                strokeWidth="1.5"
              />
              {/* Leaves */}
              <path
                d="M0 -5 Q-12 -15 -8 -25"
                stroke="#6ba87e"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M0 0 Q12 -10 8 -20"
                stroke="#6ba87e"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M0 5 Q-10 -2 -6 -12"
                stroke="#6ba87e"
                strokeWidth="1"
                fill="none"
              />
              {/* Bud */}
              <circle cx="0" cy="-18" r="4" fill="#6ba87e" opacity="0.5" />
              {/* Ground */}
              <path
                d="M-15 20 Q0 16 15 20"
                stroke="#4a7c5f"
                strokeWidth="1"
                fill="none"
              />
            </g>
            <text
              x="238"
              y="148"
              fill="#4a7c5f"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              opacity="0.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              SPRING
            </text>
            <text
              x="238"
              y="163"
              fill="#4a7c5f"
              fontSize="8"
              textAnchor="middle"
              opacity="0.3"
            >
              Follicular
            </text>
          </g>

          {/* Panel 3 — Summer / Ovulation (bottom-left) */}
          <g>
            <rect
              x="8"
              y="201"
              width="148"
              height="185"
              rx="4"
              fill="url(#weave-summer)"
              stroke="#c17f4e"
              strokeWidth="1"
              opacity="0.8"
            />
            <rect
              x="14"
              y="207"
              width="136"
              height="173"
              rx="2"
              fill="none"
              stroke="#c17f4e"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              opacity="0.2"
            />
            {/* Sun motif */}
            <g transform="translate(82, 280)" opacity="0.3">
              <circle
                cx="0"
                cy="0"
                r="14"
                fill="#c17f4e"
                opacity="0.3"
              />
              <circle
                cx="0"
                cy="0"
                r="10"
                fill="none"
                stroke="#c17f4e"
                strokeWidth="1"
              />
              {/* Rays */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1={Math.cos(angle) * 16}
                    y1={Math.sin(angle) * 16}
                    x2={Math.cos(angle) * 22}
                    y2={Math.sin(angle) * 22}
                    stroke="#d4a574"
                    strokeWidth={i % 2 === 0 ? "1.5" : "0.8"}
                    strokeLinecap="round"
                  />
                );
              })}
            </g>
            <text
              x="82"
              y="342"
              fill="#c17f4e"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              opacity="0.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              SUMMER
            </text>
            <text
              x="82"
              y="357"
              fill="#c17f4e"
              fontSize="8"
              textAnchor="middle"
              opacity="0.3"
            >
              Ovulation
            </text>
          </g>

          {/* Panel 4 — Autumn / Luteal (bottom-right) */}
          <g>
            <rect
              x="164"
              y="201"
              width="148"
              height="185"
              rx="4"
              fill="url(#weave-autumn)"
              stroke="#a05a3c"
              strokeWidth="1"
              opacity="0.8"
            />
            <rect
              x="170"
              y="207"
              width="136"
              height="173"
              rx="2"
              fill="none"
              stroke="#a05a3c"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              opacity="0.2"
            />
            {/* Falling leaf motif */}
            <g transform="translate(238, 275)" opacity="0.3">
              {/* Leaf shapes */}
              <path
                d="M0 -20 Q-8 -10 0 0 Q8 -10 0 -20 Z"
                fill="#c47a5a"
                opacity="0.5"
              />
              <line
                x1="0"
                y1="-20"
                x2="0"
                y2="0"
                stroke="#a05a3c"
                strokeWidth="0.5"
              />
              <path
                d="M-15 -8 Q-10 -3 -5 5 Q-2 -1 -15 -8 Z"
                fill="#a05a3c"
                opacity="0.4"
                transform="rotate(-30, -10, -2)"
              />
              <path
                d="M12 -12 Q8 -5 5 2 Q10 -3 12 -12 Z"
                fill="#c47a5a"
                opacity="0.35"
                transform="rotate(15, 8, -5)"
              />
              {/* Swirl / wind */}
              <path
                d="M-18 8 Q-8 3 0 8 Q8 13 18 8"
                stroke="#a05a3c"
                strokeWidth="0.8"
                fill="none"
                opacity="0.4"
              />
            </g>
            <text
              x="238"
              y="342"
              fill="#a05a3c"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              opacity="0.5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              AUTUMN
            </text>
            <text
              x="238"
              y="357"
              fill="#a05a3c"
              fontSize="8"
              textAnchor="middle"
              opacity="0.3"
            >
              Luteal
            </text>
          </g>

          {/* Central crossing threads */}
          <line
            x1="160"
            y1="0"
            x2="160"
            y2="400"
            stroke="#c17f4e"
            strokeWidth="1"
            opacity="0.15"
          />
          <line
            x1="0"
            y1="196"
            x2="320"
            y2="196"
            stroke="#c17f4e"
            strokeWidth="1"
            opacity="0.15"
          />
          {/* Woven knot at center */}
          <circle
            cx="160"
            cy="196"
            r="6"
            fill="#f7f3ee"
            stroke="#c17f4e"
            strokeWidth="1"
            opacity="0.4"
          />
          <circle
            cx="160"
            cy="196"
            r="2"
            fill="#c17f4e"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Phase list with thread connectors */}
      <div className="w-full max-w-sm z-10 space-y-2">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl"
            style={{
              borderBottom:
                i < phases.length - 1
                  ? "1px dashed rgba(61,43,31,0.08)"
                  : "none",
            }}
          >
            {/* Season color swatch with weave texture */}
            <div
              className="flex-shrink-0 w-8 h-8 rounded-lg"
              style={{
                backgroundColor: phase.color,
                opacity: 0.25,
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)`,
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-sm font-semibold"
                  style={{ color: phase.color, fontFamily: "Georgia, serif" }}
                >
                  {phase.name}
                </span>
                <span className="text-[10px] text-[#3d2b1f]/25">
                  {phase.days}
                </span>
              </div>
              <p className="text-[11px] text-[#3d2b1f]/35 mt-0.5">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-sm mt-auto pt-8 z-10">
        <button
          className="w-full h-14 rounded-xl font-semibold text-sm tracking-wide text-[#f7f3ee]"
          style={{
            background: "linear-gradient(135deg, #3d2b1f, #5a4035)",
            boxShadow: "0 4px 16px rgba(61,43,31,0.2)",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
