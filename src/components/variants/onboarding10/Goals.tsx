"use client";
import { useState } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<string[]>([]);

  const goals = [
    { id: "predict", title: "Predict My Period", desc: "Know when to expect your next cycle", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { id: "fertility", title: "Track Fertility", desc: "Understand your fertile window", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { id: "symptoms", title: "Manage Symptoms", desc: "Log and understand your patterns", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { id: "wellness", title: "Overall Wellness", desc: "Holistic health and lifestyle tracking", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
  ];

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const cardRotations = [-1, 0.8, -0.5, 1.2];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        Your Goals
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Pick the cards that speak to you
      </p>

      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto w-full relative z-10">
        {goals.map((g, i) => {
          const isActive = selected.includes(g.id);
          return (
            <button key={g.id} onClick={() => toggle(g.id)}
              className="relative rounded-xl p-4 text-left border-0 cursor-pointer transition-all duration-300"
              style={{
                background: "#fff",
                transform: isActive
                  ? "rotate(0deg) scale(1.04) translateY(-4px)"
                  : `rotate(${cardRotations[i]}deg) scale(1)`,
                boxShadow: isActive
                  ? "0 8px 28px rgba(74,55,40,0.16), 0 4px 12px rgba(74,55,40,0.08)"
                  : "0 2px 8px rgba(74,55,40,0.1), 0 1px 3px rgba(74,55,40,0.06)",
              }}>
              {/* Coral check mark */}
              {isActive && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#e8735a" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{
                background: isActive ? "rgba(232,115,90,0.12)" : "#f0e6d6",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke={isActive ? "#e8735a" : "#4a3728"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={g.icon} />
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
                {g.title}
              </h3>
              <p className="text-xs" style={{ color: "#4a3728", opacity: 0.5, lineHeight: 1.5 }}>
                {g.desc}
              </p>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 6 ? 18 : 6, height: 6,
            background: i === 6 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
