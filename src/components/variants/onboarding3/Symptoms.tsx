"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Symptoms: Chip-based selection grid with peach fill on selected, warm rounded pills
 */

import { useState } from "react";

const symptoms = [
  { emoji: "\u{1F4A7}", label: "Cramps" },
  { emoji: "\u{1F971}", label: "Fatigue" },
  { emoji: "\u{1F614}", label: "Headache" },
  { emoji: "\u{1F60A}", label: "Mood Swings" },
  { emoji: "\u{1F917}", label: "Bloating" },
  { emoji: "\u{1F634}", label: "Insomnia" },
  { emoji: "\u{1F60B}", label: "Cravings" },
  { emoji: "\u{1F495}", label: "Breast Pain" },
  { emoji: "\u{1F4AB}", label: "Dizziness" },
  { emoji: "\u{1F622}", label: "Anxiety" },
  { emoji: "\u{1F912}", label: "Nausea" },
  { emoji: "\u{2728}", label: "Acne" },
];

export default function Symptoms() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        Your Symptoms
      </h2>
      <p className="text-sm mb-2" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        Select what you commonly experience
      </p>
      <p className="text-xs mb-8" style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.5 }}>
        Tap to select, tap again to remove
      </p>

      {/* Chip grid */}
      <div className="flex flex-wrap gap-3 max-w-sm justify-center mb-8">
        {symptoms.map((s) => {
          const isActive = selected.has(s.label);
          return (
            <button
              key={s.label}
              onClick={() => toggle(s.label)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-200"
              style={{
                fontFamily: "system-ui",
                background: isActive ? "#ffcba4" : "#fff",
                color: "#3d2520",
                border: `1.5px solid ${isActive ? "#c06840" : "#ffecd2"}`,
                boxShadow: isActive ? "0 2px 12px rgba(192,104,64,0.2)" : "0 1px 4px rgba(212,160,96,0.08)",
                transform: isActive ? "scale(1.03)" : "scale(1)",
              }}
            >
              <span className="text-base">{s.emoji}</span>
              <span className="text-sm font-medium">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Count badge */}
      {selected.size > 0 && (
        <div
          className="px-5 py-2.5 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #c06840, #d4a060)",
            color: "#fff8f0",
          }}
        >
          <span className="text-sm font-medium" style={{ fontFamily: "system-ui" }}>
            {selected.size} symptom{selected.size > 1 ? "s" : ""} selected
          </span>
        </div>
      )}
    </div>
  );
}
