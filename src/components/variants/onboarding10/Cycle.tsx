"use client";
import { useState } from "react";

export default function Cycle() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    { name: "Menstrual", days: "Days 1-5", color: "#e8735a", desc: "Your body sheds and renews. Rest and gentle care." },
    { name: "Follicular", days: "Days 6-13", color: "#e8a87c", desc: "Energy builds. A time of growth and possibility." },
    { name: "Ovulatory", days: "Days 14-16", color: "#d4a574", desc: "Peak vitality. Your most radiant phase." },
    { name: "Luteal", days: "Days 17-28", color: "#c49a6c", desc: "Winding down. Nesting and reflection." },
  ];

  const positions = [
    { cx: 130, cy: 140 }, { cx: 200, cy: 130 },
    { cx: 210, cy: 200 }, { cx: 140, cy: 210 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        Your Cycle, Unfolded
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Four phases, beautifully layered
      </p>

      {/* Overlapping paper circles */}
      <div className="relative z-10 mb-6" style={{ width: 320, height: 320 }}>
        <svg width="320" height="320" viewBox="0 0 340 340">
          {phases.map((p, i) => (
            <g key={i} onClick={() => setActivePhase(i)} style={{ cursor: "pointer" }}>
              <circle cx={positions[i].cx} cy={positions[i].cy} r={activePhase === i ? 78 : 72}
                fill={p.color} opacity={activePhase === i ? 0.35 : 0.18}
                stroke={activePhase === i ? p.color : "none"} strokeWidth="2"
                style={{ transition: "all 0.4s ease", filter: "drop-shadow(0 2px 6px rgba(74,55,40,0.1))" }}
              />
              <text x={positions[i].cx} y={positions[i].cy + 4}
                textAnchor="middle" fontSize="11" fontFamily="Georgia, serif"
                fill="#4a3728" opacity={activePhase === i ? 1 : 0.6}
                style={{ transition: "opacity 0.3s" }}>
                {p.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Active phase paper card */}
      <div className="rounded-xl p-5 max-w-sm w-full relative z-10" style={{
        background: "#fff", transform: "rotate(-0.5deg)",
        boxShadow: "0 4px 16px rgba(74,55,40,0.12), 0 2px 6px rgba(74,55,40,0.06)",
        borderLeft: `3px solid ${phases[activePhase].color}`,
      }}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full" style={{ background: phases[activePhase].color }} />
          <h3 className="text-lg font-medium" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
            {phases[activePhase].name} Phase
          </h3>
        </div>
        <p className="text-xs mb-1 font-medium" style={{ color: phases[activePhase].color }}>{phases[activePhase].days}</p>
        <p className="text-sm" style={{ color: "#4a3728", opacity: 0.65, lineHeight: 1.6 }}>{phases[activePhase].desc}</p>
      </div>

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 2 ? 18 : 6, height: 6,
            background: i === 2 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
