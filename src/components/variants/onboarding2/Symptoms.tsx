"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Symptoms
 * Editorial checklist with square checkboxes, two-column layout,
 * red fill on checked items.
 */
export default function Symptoms() {
  const [checked, setChecked] = useState<string[]>([]);

  const symptoms = [
    "Cramps", "Bloating", "Headache", "Fatigue",
    "Mood Swings", "Acne", "Back Pain", "Nausea",
    "Insomnia", "Breast Pain", "Cravings", "Anxiety",
  ];

  const toggle = (s: string) => {
    setChecked((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse key={i} cx={300} cy={200 + i * 80} rx={200 - i * 20} ry={120 - i * 10} stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "system-ui", opacity: 0.35 }}>
          Vela / Symptoms
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Common<br />Symptoms
        </h1>
        <p className="text-xs mt-2" style={{ opacity: 0.35, fontFamily: "system-ui" }}>
          Select all that you typically experience.
        </p>
      </div>

      {/* Count indicator */}
      <div className="z-10 flex items-center gap-3 mb-6">
        <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>
          {String(checked.length).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-[#1a1a1a] opacity-[0.08]" />
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "system-ui", opacity: 0.3 }}>
          Selected
        </span>
      </div>

      {/* Two-column checklist */}
      <div className="z-10 flex-1 grid grid-cols-2 gap-x-0 gap-y-0">
        {symptoms.map((s, i) => {
          const isChecked = checked.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggle(s)}
              className="flex items-center gap-3 h-14 border-b border-[#1a1a1a]/[0.06] transition-colors"
              style={{
                borderRight: i % 2 === 0 ? "1px solid rgba(26,26,26,0.06)" : "none",
                paddingLeft: i % 2 === 0 ? 0 : 12,
              }}
            >
              {/* Square checkbox */}
              <div
                className="w-4 h-4 rounded-none flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                  border: isChecked ? "none" : "1.5px solid rgba(26,26,26,0.2)",
                  background: isChecked ? "#c8352e" : "transparent",
                }}
              >
                {isChecked && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4.5 7.5L8 3" stroke="#fafaf8" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                )}
              </div>
              <span
                className="text-[12px] tracking-wide"
                style={{
                  fontFamily: "system-ui",
                  opacity: isChecked ? 1 : 0.45,
                  color: isChecked ? "#1a1a1a" : "#1a1a1a",
                }}
              >
                {s}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="z-10 mt-8 w-full">
        <div className="w-full h-px bg-[#1a1a1a] opacity-[0.08] mb-6" />
        <button className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{ background: "#1a1a1a", color: "#fafaf8", fontFamily: "system-ui" }}>
          Continue
        </button>
      </div>
    </div>
  );
}
