"use client";
import { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);
  const features = [
    { icon: "M60 80 C60 50, 90 40, 90 70 C90 40, 120 50, 120 80 C120 110, 90 130, 90 130 C90 130, 60 110, 60 80Z", title: "Cycle Wisdom", desc: "Understand your rhythm with gentle, accurate predictions rooted in your unique pattern." },
    { icon: "M50 90 Q50 50, 90 50 Q130 50, 130 90 Q130 120, 90 130 Q50 120, 50 90Z", title: "Body Signals", desc: "Track symptoms and moods with care. Every signal your body sends matters." },
    { icon: "M90 40 L120 70 L120 110 L60 110 L60 70Z", title: "Gentle Insights", desc: "Patterns emerge over time. Receive thoughtful, personalized wellness guidance." },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#2a1f14", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute top-[-30px] right-[-40px] w-44 h-44 opacity-8" style={{ background: "#8b6a2a", borderRadius: "55% 45% 50% 50% / 45% 55% 50% 50%" }} />
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "Georgia, serif", color: "#f0e4d0" }}>What Sola offers</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(240,228,208,0.4)" }}>Tap to explore</p>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {features.map((f, i) => (
          <button key={i} onClick={() => setActive(i)} className="flex items-start gap-4 p-5 text-left transition-all duration-300 cursor-pointer" style={{ background: active === i ? "rgba(212,162,78,0.08)" : "transparent", borderRadius: 20, border: active === i ? "2px solid #d4a24e" : "2px solid rgba(255,255,255,0.06)", boxShadow: active === i ? "0 4px 20px #d4a24e18" : "none" }}>
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl" style={{ background: active === i ? "#d4a24e" : "rgba(212,162,78,0.08)" }}>
              <svg width="28" height="28" viewBox="0 0 160 160"><path d={f.icon} fill={active === i ? "#2a1f14" : "#d4a24e"} /></svg>
            </div>
            <div>
              <h3 className="text-base font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#f0e4d0" }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(240,228,208,0.4)" }}>{f.desc}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-10">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===1?24:8,height:8,background:i===1?"#d4a24e":"rgba(255,255,255,0.15)"}}/>))}</div>
    </div>
  );
}
