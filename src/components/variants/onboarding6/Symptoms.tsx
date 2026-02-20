"use client";
import { useState } from "react";

const symptoms = [
  "Cramps", "Bloating", "Headache", "Fatigue", "Mood Swings",
  "Back Pain", "Breast Tenderness", "Acne", "Insomnia", "Nausea",
  "Cravings", "Anxiety", "Joint Pain", "Dizziness", "Hot Flashes",
];

export default function Symptoms() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) => {
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Select</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Common Symptoms</h2>
      <div className="w-10 h-px mx-auto mb-2" style={{ backgroundColor: "#4b7bec" }} />
      <p className="text-xs mb-6" style={{ color: "#94a3b8" }}>Tap all that you typically experience</p>

      {/* Chip grid */}
      <div className="flex flex-wrap gap-2.5 justify-center max-w-sm">
        {symptoms.map((s) => {
          const isActive = selected.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggle(s)}
              className="px-4 py-2 rounded-lg text-xs cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: isActive ? "#4b7bec" : "#ffffff",
                color: isActive ? "#ffffff" : "#334155",
                border: `1.5px solid ${isActive ? "#4b7bec" : "#e2e8f0"}`,
                boxShadow: isActive ? "0 2px 8px rgba(75,123,236,0.2)" : "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {isActive && (
                <svg width="10" height="10" viewBox="0 0 10 10" className="inline mr-1.5" style={{ verticalAlign: "middle" }}>
                  <path d="M2 5L4 7L8 3" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
              {s}
            </button>
          );
        })}
      </div>

      {/* Selection count */}
      {selected.length > 0 && (
        <div className="mt-5 px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
          <p className="text-xs" style={{ color: "#4b7bec" }}>
            {selected.length} symptom{selected.length > 1 ? "s" : ""} selected
          </p>
        </div>
      )}

      {/* Page dots */}
      <div className="flex gap-2 mt-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 5 ? 20 : 6, height: 6, backgroundColor: i === 5 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
