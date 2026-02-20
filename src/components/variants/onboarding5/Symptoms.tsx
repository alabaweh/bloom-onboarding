"use client";
import { useState } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const symptoms = [
    "Cramps", "Headache", "Bloating", "Fatigue",
    "Mood shifts", "Acne", "Back pain", "Nausea",
    "Insomnia", "Cravings", "Tenderness", "Anxiety",
  ];

  const toggle = (s: string) => {
    const next = new Set(selected);
    next.has(s) ? next.delete(s) : next.add(s);
    setSelected(next);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute top-[-20px] left-[-20px] w-32 h-32 opacity-10" style={{ background: "#c27a56", borderRadius: "55% 45% 50% 50% / 45% 55% 50% 50%" }} />

      <h2 className="text-3xl font-bold mb-1 text-center" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>What do you feel?</h2>
      <p className="text-sm mb-6" style={{ color: "#8b6b4a" }}>Select your common symptoms</p>

      <div className="flex flex-wrap gap-3 max-w-sm justify-center mb-6">
        {symptoms.map((s) => {
          const active = selected.has(s);
          return (
            <button key={s} onClick={() => toggle(s)} className="px-5 py-3 text-sm transition-all duration-200 cursor-pointer" style={{
              background: active ? "#c27a56" : "#e8d5c0",
              color: active ? "#fff" : "#8b6b4a",
              border: "none",
              borderRadius: "50% 45% 55% 48% / 48% 52% 45% 55%",
              fontWeight: active ? 600 : 400,
              fontFamily: "system-ui, sans-serif",
              transform: active ? "scale(1.05)" : "scale(1)",
              boxShadow: active ? "0 3px 12px #c27a5625" : "none",
            }}>
              {s}
            </button>
          );
        })}
      </div>

      {/* Selected count */}
      <div className="py-2 px-5 rounded-2xl" style={{ background: "#e8d5c0" }}>
        <span className="text-xs" style={{ color: "#8b6b4a" }}>
          {selected.size} symptom{selected.size !== 1 ? "s" : ""} selected
        </span>
      </div>

      <div className="flex gap-2 mt-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 5 ? 24 : 8, background: i === 5 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
