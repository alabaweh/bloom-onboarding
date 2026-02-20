"use client";
import { useState } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const goals = [
    { id: "predict", label: "Period prediction", desc: "Know when your cycle begins" },
    { id: "symptoms", label: "Symptom patterns", desc: "Understand recurring signals" },
    { id: "fertility", label: "Fertility awareness", desc: "Track your fertile window" },
    { id: "mood", label: "Mood tracking", desc: "Connect emotions to your cycle" },
    { id: "wellness", label: "Wellness insights", desc: "Holistic health guidance" },
    { id: "regularity", label: "Cycle regularity", desc: "Monitor your rhythm" },
  ];

  const toggle = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute bottom-10 right-[-30px] w-40 h-40 opacity-10" style={{ background: "#9caa8b", borderRadius: "40% 60% 55% 45% / 55% 45% 50% 50%" }} />

      <h2 className="text-3xl font-bold mb-1 text-center" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>What matters to you?</h2>
      <p className="text-sm mb-8" style={{ color: "#8b6b4a" }}>Choose your wellness goals</p>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {goals.map((g) => {
          const active = selected.has(g.id);
          return (
            <button key={g.id} onClick={() => toggle(g.id)} className="p-4 text-left transition-all duration-200 cursor-pointer relative" style={{
              background: active ? "#e8d5c0" : "#f5ede3",
              border: active ? "2px solid #c27a56" : "2px solid #e8d5c0",
              borderRadius: "28px 34px 30px 32px / 32px 28px 34px 30px",
              boxShadow: active ? "0 3px 14px #c27a5615" : "none",
            }}>
              {active && (
                <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full" style={{ background: "#9caa8b" }}>
                  <svg width="12" height="12" viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 6" stroke="#fff" strokeWidth="2.5" fill="none" /></svg>
                </div>
              )}
              <h4 className="text-sm font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>{g.label}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "#8b6b4a" }}>{g.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 mt-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 6 ? 24 : 8, background: i === 6 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
