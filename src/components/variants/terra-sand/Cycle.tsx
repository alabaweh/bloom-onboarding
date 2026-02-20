"use client";
import { useState } from "react";

export default function Cycle() {
  const [active, setActive] = useState(0);
  const phases = [
    { name: "Menstrual", days: "Days 1-5", desc: "A time of release and rest. Honor your body's need to slow down.", color: "#c2956b" },
    { name: "Follicular", days: "Days 6-13", desc: "Energy builds gently. New possibilities unfold like spring.", color: "#e8c9a8" },
    { name: "Ovulation", days: "Days 14-16", desc: "Your fullest expression. Radiant energy at its peak.", color: "#c2956b" },
    { name: "Luteal", days: "Days 17-28", desc: "Turning inward with grace. Nourish and prepare.", color: "#a07850" },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#faf6f0", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-1 text-center" style={{ fontFamily: "Georgia, serif", color: "#3d2e1f" }}>Your cycle, shaped</h2>
      <p className="text-sm mb-6 text-center" style={{ color: "rgba(61,46,31,0.5)" }}>Each phase is a vessel of its own</p>
      <div className="flex gap-3 mb-6">
        {phases.map((p, i) => (
          <button key={i} onClick={() => setActive(i)} className="flex flex-col items-center cursor-pointer transition-all duration-300" style={{ border: "none", background: "none", transform: active === i ? "scale(1.1)" : "scale(1)", opacity: active === i ? 1 : 0.5 }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: p.color, opacity: active === i ? 0.9 : 0.4 }}>
              <span className="text-lg" style={{ color: "#ffffff" }}>{i + 1}</span>
            </div>
            <span className="text-[10px] mt-1" style={{ color: active === i ? "#3d2e1f" : "rgba(61,46,31,0.5)", fontFamily: "Georgia, serif" }}>{p.name}</span>
          </button>
        ))}
      </div>
      <div className="w-full max-w-sm p-6 rounded-3xl transition-all duration-300" style={{ background: "rgba(194,149,107,0.06)", border: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 rounded-full" style={{ background: phases[active].color }} />
          <h3 className="text-lg font-bold" style={{ fontFamily: "Georgia, serif", color: "#3d2e1f" }}>{phases[active].name}</h3>
          <span className="text-xs ml-auto" style={{ color: "rgba(61,46,31,0.5)" }}>{phases[active].days}</span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(61,46,31,0.5)" }}>{phases[active].desc}</p>
      </div>
      <div className="flex gap-2 mt-8">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===2?24:8,height:8,background:i===2?"#c2956b":"rgba(0,0,0,0.12)"}}/>))}</div>
    </div>
  );
}
