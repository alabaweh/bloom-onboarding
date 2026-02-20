"use client";

/**
 * VARIANT A — "Celestial"
 * Summary / All Set screen: Your celestial profile is mapped.
 * Star constellation showing data points connected by golden lines.
 * Night sky (#0c0a1d to #2d1b69), gold (#f5d882).
 */
export default function SummaryA() {
  const profileData = {
    age: "25-30",
    cycleLength: "28-30 days",
    periodLength: "4-5 days",
    goals: ["Period Tracking", "Fertility"],
    symptomsTracked: 6,
  };

  // Constellation node positions (x, y) on a 300x300 viewBox
  const constellationNodes = [
    { x: 150, y: 40, label: "Age", value: profileData.age },
    { x: 260, y: 100, label: "Cycle", value: profileData.cycleLength },
    { x: 230, y: 200, label: "Period", value: profileData.periodLength },
    { x: 70, y: 200, label: "Goals", value: `${profileData.goals.length} active` },
    { x: 40, y: 100, label: "Symptoms", value: `${profileData.symptomsTracked} tracked` },
    { x: 150, y: 130, label: "Core", value: "" },
  ];

  // Lines connecting nodes (index pairs)
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0],
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
  ];

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)" }}
    >
      {/* Star field */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Nebula glow behind constellation */}
      <div
        className="absolute top-[15%] left-[50%] translate-x-[-50%] w-[350px] h-[350px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #f5d882, transparent 65%)", filter: "blur(80px)" }}
      />

      {/* Header */}
      <div className="z-10 text-center mb-2 mt-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#f5d882]"
            style={{ boxShadow: "0 0 8px rgba(245,216,130,0.6)" }} />
          <span className="text-[10px] text-[#f5d882]/60 tracking-[0.3em] uppercase font-medium">
            Profile Mapped
          </span>
          <div className="w-2 h-2 rounded-full bg-[#f5d882]"
            style={{ boxShadow: "0 0 8px rgba(245,216,130,0.6)" }} />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          Your Celestial Profile
        </h1>
        <p className="text-sm text-purple-300/50 font-light">
          Every data point is a star in your constellation
        </p>
      </div>

      {/* Constellation Map */}
      <div className="relative z-10 my-6">
        <svg width="300" height="260" viewBox="0 0 300 260" fill="none">
          {/* Connection lines */}
          {connections.map(([from, to], i) => (
            <line
              key={`line-${i}`}
              x1={constellationNodes[from].x}
              y1={constellationNodes[from].y}
              x2={constellationNodes[to].x}
              y2={constellationNodes[to].y}
              stroke="url(#gold-line)"
              strokeWidth="1"
              opacity="0.4"
              strokeDasharray={to === 5 || from === 5 ? "4 4" : "none"}
            />
          ))}

          {/* Data point nodes */}
          {constellationNodes.map((node, i) => (
            <g key={`node-${i}`}>
              {/* Glow */}
              <circle cx={node.x} cy={node.y} r={i === 5 ? 16 : 10} fill="rgba(245,216,130,0.08)" />
              {/* Outer ring */}
              <circle
                cx={node.x} cy={node.y}
                r={i === 5 ? 12 : 6}
                fill="none"
                stroke="#f5d882"
                strokeWidth="0.8"
                opacity={i === 5 ? 0.6 : 0.4}
              />
              {/* Inner dot */}
              <circle
                cx={node.x} cy={node.y}
                r={i === 5 ? 5 : 3}
                fill={i === 5 ? "#f5d882" : "rgba(245,216,130,0.8)"}
              />
            </g>
          ))}

          {/* Labels for outer nodes */}
          {constellationNodes.slice(0, 5).map((node, i) => {
            const yOffset = node.y < 100 ? -18 : 24;
            return (
              <g key={`label-${i}`}>
                <text
                  x={node.x}
                  y={node.y + yOffset}
                  textAnchor="middle"
                  fill="#f5d882"
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="0.05em"
                >
                  {node.label.toUpperCase()}
                </text>
                <text
                  x={node.x}
                  y={node.y + yOffset + 13}
                  textAnchor="middle"
                  fill="rgba(210,195,255,0.5)"
                  fontSize="10"
                >
                  {node.value}
                </text>
              </g>
            );
          })}

          <defs>
            <linearGradient id="gold-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5d882" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c9a23c" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Summary stats bar */}
      <div className="z-10 w-full max-w-sm mb-6">
        <div
          className="rounded-2xl px-5 py-4"
          style={{
            background: "rgba(245,216,130,0.04)",
            border: "1px solid rgba(245,216,130,0.1)",
          }}
        >
          <div className="flex justify-between items-center">
            {[
              { label: "Goals", value: "2" },
              { label: "Symptoms", value: "6" },
              { label: "Cycle", value: "28d" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center">
                {i > 0 && (
                  <div
                    className="absolute h-8 w-px bg-[#f5d882]/10"
                    style={{ transform: "translateX(-30px)" }}
                  />
                )}
                <span className="text-xl font-bold text-[#f5d882]">{stat.value}</span>
                <span className="text-[10px] text-purple-300/40 tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals tags */}
      <div className="z-10 flex gap-2 mb-8">
        {profileData.goals.map((goal) => (
          <span
            key={goal}
            className="px-3 py-1.5 rounded-full text-[11px] font-medium text-[#f5d882]/80"
            style={{
              background: "rgba(245,216,130,0.06)",
              border: "1px solid rgba(245,216,130,0.15)",
            }}
          >
            {goal}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="w-full z-10 space-y-3 mt-auto px-2">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide text-[#0c0a1d]"
          style={{
            background: "linear-gradient(135deg, #f5d882, #e8c55a)",
            boxShadow: "0 4px 24px rgba(245,216,130,0.3), 0 0 60px rgba(245,216,130,0.1)",
          }}
        >
          Start Your Journey
        </button>
        <p className="text-center text-xs text-purple-400/40 mt-2">
          Your stars are aligned. The cosmos awaits.
        </p>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
