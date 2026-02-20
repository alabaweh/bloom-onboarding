"use client";
import { useState } from "react";

export default function Cycle() {
  const [active, setActive] = useState(0);

  const phases = [
    { name: "Menstrual", days: "Days 1-5", desc: "A time of release and rest. Honor your body's need to slow down.", vessel: "M60 110 L60 60 Q60 40, 80 40 L100 40 Q120 40, 120 60 L120 110 Q120 120, 90 120 Q60 120, 60 110Z", color: "#c27a56" },
    { name: "Follicular", days: "Days 6-13", desc: "Energy builds gently. New possibilities unfold like spring.", vessel: "M55 115 L65 45 Q70 30, 90 30 Q110 30, 115 45 L125 115 Q125 125, 90 125 Q55 125, 55 115Z", color: "#9caa8b" },
    { name: "Ovulation", days: "Days 14-16", desc: "Your fullest expression. Radiant energy at its peak.", vessel: "M50 100 Q40 60, 60 45 Q75 35, 90 35 Q105 35, 120 45 Q140 60, 130 100 Q125 120, 90 125 Q55 120, 50 100Z", color: "#c27a56" },
    { name: "Luteal", days: "Days 17-28", desc: "Turning inward with grace. Nourish and prepare.", vessel: "M55 110 Q50 70, 65 50 Q75 40, 90 42 Q105 40, 115 50 Q130 70, 125 110 L115 115 Q90 130, 65 115Z", color: "#8b6b4a" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute top-10 left-[-20px] w-32 h-32 opacity-10" style={{ background: "#c27a56", borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />

      <h2 className="text-3xl font-bold mb-1 text-center" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>Your cycle, shaped</h2>
      <p className="text-sm mb-6 text-center" style={{ color: "#8b6b4a" }}>Each phase is a vessel of its own</p>

      {/* Phase vessels */}
      <div className="flex gap-3 mb-6">
        {phases.map((p, i) => (
          <button key={i} onClick={() => setActive(i)} className="flex flex-col items-center cursor-pointer transition-all duration-300" style={{ border: "none", background: "none", transform: active === i ? "scale(1.1)" : "scale(1)", opacity: active === i ? 1 : 0.5 }}>
            <svg width="70" height="70" viewBox="0 0 160 160">
              <path d={p.vessel} fill={p.color} opacity={active === i ? 0.9 : 0.4} />
              {active === i && <circle cx="90" cy="80" r="8" fill="#fff" opacity="0.6" />}
            </svg>
            <span className="text-xs mt-1" style={{ color: active === i ? "#3a2e24" : "#8b6b4a80", fontFamily: "Georgia, serif" }}>{p.name}</span>
          </button>
        ))}
      </div>

      {/* Active detail card */}
      <div className="w-full max-w-sm p-6 transition-all duration-300" style={{ background: "#e8d5c0", borderRadius: "28px 34px 30px 32px / 32px 28px 34px 30px", boxShadow: "0 4px 20px #8b6b4a10" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-full" style={{ background: phases[active].color }} />
          <h3 className="text-lg font-bold" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>{phases[active].name}</h3>
          <span className="text-xs ml-auto" style={{ color: "#8b6b4a" }}>{phases[active].days}</span>
        </div>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#3a2e24cc" }}>{phases[active].desc}</p>
      </div>

      <div className="flex gap-2 mt-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 2 ? 24 : 8, background: i === 2 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
