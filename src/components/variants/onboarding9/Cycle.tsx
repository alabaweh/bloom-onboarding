"use client";
import { useState } from "react";

export default function Cycle() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      name: "Menstrual",
      days: "Days 1-5",
      desc: "Rest, reflect, recharge. Your body is resetting.",
      gradient: "radial-gradient(circle, #ff6467 0%, #8b5cf6 80%)",
      color: "#ff6467",
    },
    {
      name: "Follicular",
      days: "Days 6-13",
      desc: "Rising energy, new ideas, creativity is peaking.",
      gradient: "radial-gradient(circle, #fbbf24 0%, #ff6467 80%)",
      color: "#fbbf24",
    },
    {
      name: "Ovulation",
      days: "Days 14-16",
      desc: "Peak confidence, social energy, you're magnetic.",
      gradient: "radial-gradient(circle, #38bdf8 0%, #fbbf24 80%)",
      color: "#38bdf8",
    },
    {
      name: "Luteal",
      days: "Days 17-28",
      desc: "Winding down, nesting mode, honor your needs.",
      gradient: "radial-gradient(circle, #8b5cf6 0%, #38bdf8 80%)",
      color: "#8b5cf6",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes morphBlob { 0% { border-radius: 40% 60% 55% 45%; } 33% { border-radius: 55% 45% 40% 60%; } 66% { border-radius: 45% 55% 60% 40%; } 100% { border-radius: 40% 60% 55% 45%; } }
        @keyframes fadeScale { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
      `}</style>

      <h2 className="text-3xl font-black text-center mb-1 relative z-10" style={{ color: "#111111" }}>
        Your Cycle Phases
      </h2>
      <p className="text-sm text-center mb-10 relative z-10" style={{ color: "#6b7280" }}>
        4 phases, 4 vibes, 1 powerful you
      </p>

      {/* Active phase blob display */}
      <div className="relative w-48 h-48 mb-8 flex items-center justify-center" style={{ animation: "fadeScale 0.5s ease-out" }}>
        <div
          className="absolute inset-0"
          style={{
            background: phases[activePhase].gradient,
            filter: "blur(2px)", opacity: 0.75,
            animation: "morphBlob 8s ease-in-out infinite",
            transition: "background 0.5s ease",
          }}
        />
        <div className="relative z-10 text-center">
          <p className="text-3xl font-black" style={{ color: "#111111" }}>{phases[activePhase].name}</p>
          <p className="text-sm font-semibold mt-1" style={{ color: "#6b7280" }}>{phases[activePhase].days}</p>
        </div>
      </div>

      <p className="text-sm text-center max-w-xs mb-8 relative z-10" style={{ color: "#6b7280", lineHeight: 1.6 }}>
        {phases[activePhase].desc}
      </p>

      {/* Phase selectors */}
      <div className="grid grid-cols-4 gap-3 w-full max-w-sm relative z-10">
        {phases.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePhase(i)}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl border-0 cursor-pointer transition-all duration-300"
            style={{
              background: activePhase === i ? `${p.color}15` : "#f9fafb",
              border: activePhase === i ? `2px solid ${p.color}` : "2px solid transparent",
            }}
          >
            <div
              className="w-10 h-10 rounded-full"
              style={{
                background: p.gradient,
                filter: "blur(1px)",
                opacity: activePhase === i ? 1 : 0.4,
                transition: "opacity 0.3s",
              }}
            />
            <span className="text-xs font-bold" style={{ color: activePhase === i ? p.color : "#9ca3af" }}>
              {p.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10 relative z-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 2 ? 24 : 8, height: 8,
            background: i === 2 ? "linear-gradient(90deg, #38bdf8, #8b5cf6)" : "#e5e7eb",
          }} />
        ))}
      </div>
    </div>
  );
}
