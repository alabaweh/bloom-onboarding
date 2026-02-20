"use client";

import { useState } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<string[]>([]);

  const symptoms = [
    "Cramps", "Bloating", "Headache", "Fatigue", "Mood swings",
    "Back pain", "Breast tenderness", "Acne", "Insomnia", "Cravings",
    "Nausea", "Anxiety", "Brain fog", "Hot flashes", "Joint pain",
  ];

  const toggle = (s: string) => {
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative">
      {/* Leaf accent */}
      <svg style={{ position: "absolute", top: 16, left: 16, opacity: 0.06 }} width="50" height="80" viewBox="0 0 50 80">
        <path d="M25 80 Q23 50 5 30 Q20 38 25 5 Q30 38 45 30 Q27 50 25 80z" fill="#064e3b" />
      </svg>
      <svg style={{ position: "absolute", bottom: 60, right: 12, opacity: 0.06 }} width="44" height="70" viewBox="0 0 44 70">
        <path d="M22 70 Q20 45 4 26 Q18 33 22 4 Q26 33 40 26 Q24 45 22 70z" fill="#064e3b" />
      </svg>

      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center">
        What do you experience?
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-2 text-center">
        Select all that apply
      </p>
      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }} className="mb-6 text-center">
        {selected.length} selected
      </p>

      <div className="flex flex-wrap gap-2.5 justify-center max-w-sm">
        {symptoms.map((s) => {
          const on = selected.includes(s);
          return (
            <button key={s} onClick={() => toggle(s)} style={{
              padding: "9px 16px", borderRadius: 20, cursor: "pointer",
              background: on ? "rgba(212,165,116,0.18)" : "rgba(255,255,255,0.04)",
              border: `1.5px solid ${on ? "#d4a574" : "rgba(255,255,255,0.1)"}`,
              color: on ? "#d4a574" : "rgba(255,255,255,0.55)",
              fontSize: "0.83rem", fontWeight: on ? 600 : 400,
              transition: "all 0.2s ease",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              {on && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#d4a574">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
              {s}
            </button>
          );
        })}
      </div>

      <button style={{
        background: selected.length > 0 ? "linear-gradient(135deg, #d4a574, #c9a96e)" : "rgba(255,255,255,0.08)",
        color: selected.length > 0 ? "#0a1a14" : "rgba(255,255,255,0.3)",
        fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none",
        cursor: selected.length > 0 ? "pointer" : "default",
        boxShadow: selected.length > 0 ? "0 4px 20px rgba(212,165,116,0.3)" : "none",
        transition: "all 0.3s ease",
      }} className="mt-8">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 6 of 9
      </p>
    </div>
  );
}
