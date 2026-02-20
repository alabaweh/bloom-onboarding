"use client";

/**
 * VARIANT A — "Celestial"
 * Concept: Phases as orbital celestial bodies circling a central moon.
 * Night-sky palette (#0c0a1d -> #2d1b69), gold accent (#f5d882).
 * Each phase is a distinct orbital body at a different distance / angle.
 */

const phases = [
  {
    name: "Menstrual",
    days: "Day 1-5",
    description: "Rest & release",
    angle: -60,
    distance: 130,
    size: 28,
    color: "#e8a0bf",
    glow: "rgba(232,160,191,0.4)",
    moonPhase: 0.15, // thin crescent
  },
  {
    name: "Follicular",
    days: "Day 6-13",
    description: "Rising energy",
    angle: 30,
    distance: 115,
    color: "#a8d8ea",
    glow: "rgba(168,216,234,0.4)",
    size: 22,
    moonPhase: 0.4, // waxing half
  },
  {
    name: "Ovulation",
    days: "Day 14-16",
    description: "Peak radiance",
    angle: 120,
    distance: 105,
    color: "#f5d882",
    glow: "rgba(245,216,130,0.5)",
    size: 24,
    moonPhase: 1, // full
  },
  {
    name: "Luteal",
    days: "Day 17-28",
    description: "Inner wisdom",
    angle: 210,
    distance: 125,
    color: "#c4a8ff",
    glow: "rgba(196,168,255,0.4)",
    size: 20,
    moonPhase: 0.6, // waning
  },
];

export default function CycleA() {
  const cx = 160;
  const cy = 160;

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-14 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)",
      }}
    >
      {/* Star field */}
      {Array.from({ length: 45 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            top: `${(i * 17.3) % 100}%`,
            left: `${(i * 23.7) % 100}%`,
            opacity: 0.15 + (i % 5) * 0.1,
            animation: `twinkle-a ${2 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i % 7) * 0.3}s`,
          }}
        />
      ))}

      {/* Nebula glow behind orrery */}
      <div
        className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5), rgba(245,216,130,0.15), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Title */}
      <div className="text-center mb-6 z-10">
        <h2
          className="text-2xl font-bold text-white tracking-tight mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Your Celestial Cycle
        </h2>
        <p className="text-xs text-purple-300/50 tracking-[0.2em] uppercase">
          Four phases, one orbit
        </p>
      </div>

      {/* Orrery — central moon + orbital bodies */}
      <div className="relative z-10 mb-8" style={{ width: 320, height: 320 }}>
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          className="absolute inset-0"
        >
          {/* Orbital rings (dashed) */}
          {[105, 115, 125, 130].map((r, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeDasharray="4 6"
              fill="none"
            />
          ))}

          {/* Connecting lines from center to each body */}
          {phases.map((phase, i) => {
            const rad = (phase.angle * Math.PI) / 180;
            const px = cx + Math.cos(rad) * phase.distance;
            const py = cy + Math.sin(rad) * phase.distance;
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={px}
                y2={py}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Central moon */}
        <div
          className="absolute rounded-full"
          style={{
            width: 56,
            height: 56,
            left: cx - 28,
            top: cy - 28,
            background:
              "radial-gradient(circle at 35% 30%, #fffbe6 0%, #f5d882 40%, #c9a23c 100%)",
            boxShadow:
              "0 0 50px rgba(245,216,130,0.5), 0 0 100px rgba(245,216,130,0.2)",
          }}
        >
          {/* Moon shadow overlay for crescent effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 65% 40%, transparent 40%, rgba(12,10,29,0.3) 100%)",
            }}
          />
        </div>

        {/* Orbital phase bodies */}
        {phases.map((phase, i) => {
          const rad = (phase.angle * Math.PI) / 180;
          const px = cx + Math.cos(rad) * phase.distance - phase.size / 2;
          const py = cy + Math.sin(rad) * phase.distance - phase.size / 2;

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: phase.size,
                height: phase.size,
                left: px,
                top: py,
                background: `radial-gradient(circle at 35% 30%, ${phase.color}, ${phase.color}88)`,
                boxShadow: `0 0 20px ${phase.glow}`,
                animation: `float-orbit-${i} ${8 + i * 2}s ease-in-out infinite`,
              }}
            >
              {/* Moon phase shadow (crescent overlay) */}
              {phase.moonPhase < 1 && (
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(${
                      phase.moonPhase < 0.5 ? "90deg" : "270deg"
                    }, rgba(12,10,29,0.85) ${
                      (1 - phase.moonPhase) * 60
                    }%, transparent 100%)`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Phase legend cards */}
      <div className="w-full max-w-sm space-y-2.5 z-10">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Mini orbital body */}
            <div
              className="flex-shrink-0 rounded-full"
              style={{
                width: 14,
                height: 14,
                background: phase.color,
                boxShadow: `0 0 8px ${phase.glow}`,
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-white/90">
                  {phase.name}
                </span>
                <span className="text-[10px] text-white/25">{phase.days}</span>
              </div>
              <p className="text-[11px] text-white/35">{phase.description}</p>
            </div>
            {/* Moon phase icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="flex-shrink-0"
            >
              <circle cx="9" cy="9" r="7" fill={phase.color} opacity="0.6" />
              {phase.moonPhase < 1 && (
                <circle
                  cx={9 + (1 - phase.moonPhase) * 5}
                  cy="9"
                  r="6.5"
                  fill="#0c0a1d"
                />
              )}
            </svg>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-sm mt-auto pt-8 z-10">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide text-[#0c0a1d]"
          style={{
            background: "linear-gradient(135deg, #f5d882, #e8c55a)",
            boxShadow: "0 4px 24px rgba(245,216,130,0.3)",
          }}
        >
          Continue
        </button>
      </div>

      <style jsx>{`
        @keyframes twinkle-a {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes float-orbit-0 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(3px, -5px);
          }
        }
        @keyframes float-orbit-1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-4px, 3px);
          }
        }
        @keyframes float-orbit-2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, 4px);
          }
        }
        @keyframes float-orbit-3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-3px, -4px);
          }
        }
      `}</style>
    </div>
  );
}
