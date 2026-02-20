"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Cycle: 4 phases as sunrise-to-sunset arc (dawn, morning, noon, dusk)
 */

import { useState } from "react";

const phases = [
  { name: "Menstrual", time: "Dawn", days: "Days 1-5", color: "#c06840", desc: "A time to rest and renew, like the first light of day" },
  { name: "Follicular", time: "Morning", days: "Days 6-13", color: "#d4a060", desc: "Energy builds gently, warmth spreading across the horizon" },
  { name: "Ovulation", time: "Noon", days: "Days 14-16", color: "#ffcba4", desc: "Your brightest moment, full radiance and vitality" },
  { name: "Luteal", time: "Dusk", days: "Days 17-28", color: "#3d2520", desc: "A soft winding down, preparing for peaceful renewal" },
];

export default function Cycle() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        Your Cycle, Your Sun
      </h2>
      <p className="text-sm mb-6" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        Four phases, like the arc of a day
      </p>

      {/* Sunrise arc */}
      <div className="relative mb-6" style={{ width: 280, height: 150 }}>
        <svg width="280" height="150" viewBox="0 0 280 150">
          <path d="M 20 140 Q 140 -20 260 140" fill="none" stroke="#ffecd2" strokeWidth="3" />
          {phases.map((p, i) => {
            const t = i / 3;
            const x = 20 + t * 240;
            const y = 140 - Math.sin(t * Math.PI) * 130;
            return (
              <g key={i} onClick={() => setSelected(i)} style={{ cursor: "pointer" }}>
                <circle cx={x} cy={y} r={selected === i ? 22 : 16} fill={p.color} opacity={selected === i ? 1 : 0.5} />
                <text
                  x={x}
                  y={y + 34}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#3d2520"
                  style={{ fontFamily: "system-ui" }}
                >
                  {p.time}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected phase detail */}
      <div
        className="w-full max-w-sm rounded-2xl p-5 mb-4 transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${phases[selected].color}15, #ffecd2)`,
          border: `1.5px solid ${phases[selected].color}40`,
        }}
      >
        <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
          {phases[selected].name}
        </h3>
        <p className="text-xs mb-2" style={{ fontFamily: "system-ui", color: "#c06840" }}>
          {phases[selected].days}
        </p>
        <p className="text-sm" style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.75 }}>
          {phases[selected].desc}
        </p>
      </div>

      {/* Phase pills */}
      <div className="flex gap-2 mb-6">
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="px-3 py-1.5 rounded-2xl text-xs font-medium transition-all"
            style={{
              fontFamily: "system-ui",
              background: selected === i ? p.color : "transparent",
              color: selected === i ? "#fff8f0" : "#3d2520",
              border: `1px solid ${p.color}60`,
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

    </div>
  );
}
