"use client";
import { useState } from "react";

const phases = [
  { name: "Menstrual", days: "Days 1-5", desc: "Your body sheds the uterine lining. Rest and gentle movement support recovery.", color: "#4b7bec" },
  { name: "Follicular", days: "Days 6-13", desc: "Estrogen rises, energy builds. An ideal time for planning and new initiatives.", color: "#60a5fa" },
  { name: "Ovulatory", days: "Days 14-16", desc: "Peak fertility and energy. Communication and confidence are at their highest.", color: "#38bdf8" },
  { name: "Luteal", days: "Days 17-28", desc: "Progesterone rises, energy shifts inward. Focus on completion and self-care.", color: "#94a3b8" },
];

export default function Cycle() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Understanding</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Your Cycle Phases</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      {/* Horizontal timeline */}
      <div className="w-full max-w-sm mb-8 px-2">
        <div className="relative flex items-center justify-between">
          {/* Connecting line */}
          <div className="absolute top-3 left-6 right-6 h-0.5" style={{ background: "linear-gradient(90deg, #4b7bec, #60a5fa, #38bdf8, #94a3b8)" }} />
          {phases.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative z-10 flex flex-col items-center border-0 bg-transparent cursor-pointer p-0"
              style={{ width: "25%" }}
            >
              <div
                className="rounded-full transition-all duration-300 mb-2 flex items-center justify-center"
                style={{
                  width: active === i ? 28 : 20,
                  height: active === i ? 28 : 20,
                  background: active === i ? `linear-gradient(135deg, ${p.color}, #4b7bec)` : "#ffffff",
                  border: `2px solid ${p.color}`,
                  boxShadow: active === i ? `0 2px 12px ${p.color}50` : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {active === i && (
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#ffffff" }} />
                )}
              </div>
              <span className="text-[10px] font-medium" style={{ color: active === i ? "#1e293b" : "#94a3b8" }}>{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active phase detail card */}
      <div
        className="rounded-xl p-6 w-full max-w-sm transition-all duration-300"
        style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: phases[active].color }} />
          <h3 className="text-lg font-medium" style={{ color: "#1e293b" }}>{phases[active].name}</h3>
          <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: "#f0f4f8", color: "#94a3b8" }}>{phases[active].days}</span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{phases[active].desc}</p>
      </div>


      {/* Page dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 2 ? 20 : 6, height: 6, backgroundColor: i === 2 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
