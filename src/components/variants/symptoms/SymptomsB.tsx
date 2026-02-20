"use client";

import { useState } from "react";

/**
 * VARIANT B — "Topographic"
 * Concept: Clean editorial / magazine layout. Two-column list with serif headers.
 * Cream background, black text, red accent for checkmarks and selection.
 * Grouped under elegant serif category headers with fine borders.
 */

const SYMPTOM_GROUPS = [
  {
    name: "Physical",
    symptoms: [
      { id: "cramps", label: "Cramps" },
      { id: "headache", label: "Headache" },
      { id: "bloating", label: "Bloating" },
      { id: "fatigue", label: "Fatigue" },
      { id: "breast-tenderness", label: "Breast tenderness" },
      { id: "back-pain", label: "Back pain" },
    ],
  },
  {
    name: "Emotional",
    symptoms: [
      { id: "mood-swings", label: "Mood swings" },
      { id: "anxiety", label: "Anxiety" },
      { id: "irritability", label: "Irritability" },
      { id: "sadness", label: "Sadness" },
    ],
  },
  {
    name: "Other",
    symptoms: [
      { id: "cravings", label: "Cravings" },
      { id: "insomnia", label: "Insomnia" },
      { id: "skin-changes", label: "Skin changes" },
      { id: "digestion", label: "Digestion" },
    ],
  },
];

export default function SymptomsB() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#fafaf8" }}
    >
      {/* Topographic line pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 + (i % 3 - 1) * 40}
            cy={100 + i * 70}
            rx={80 + i * 15}
            ry={30 + i * 8}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth={0.8}
          />
        ))}
      </svg>

      {/* Header */}
      <div className="relative z-10 px-7 pt-14 pb-2">
        <div className="flex items-baseline gap-3 mb-1">
          <span
            className="text-[11px] font-mono tracking-[0.25em] uppercase"
            style={{ color: "#c8352e" }}
          >
            Step 04
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(26, 26, 26, 0.12)" }} />
        </div>
        <h1
          className="text-[32px] font-light tracking-tight mb-2"
          style={{ color: "#1a1a1a", fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Symptoms to Track
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
          Select the symptoms you experience. These help us personalize your tracking experience.
        </p>
      </div>

      {/* Symptom groups */}
      <div className="relative z-10 flex-1 px-7 py-6 space-y-8">
        {SYMPTOM_GROUPS.map((group) => (
          <div key={group.name}>
            {/* Group header */}
            <div className="flex items-center gap-3 mb-4">
              <h2
                className="text-lg font-normal italic"
                style={{ color: "#1a1a1a", fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {group.name}
              </h2>
              <div className="h-px flex-1" style={{ backgroundColor: "rgba(26, 26, 26, 0.1)" }} />
              <span className="text-[10px] font-mono tracking-wider" style={{ color: "rgba(26, 26, 26, 0.3)" }}>
                {group.symptoms.filter((s) => selected.has(s.id)).length}/{group.symptoms.length}
              </span>
            </div>

            {/* Two-column grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-0">
              {group.symptoms.map((symptom) => {
                const isSelected = selected.has(symptom.id);
                return (
                  <button
                    key={symptom.id}
                    onClick={() => toggle(symptom.id)}
                    className="flex items-center gap-3 py-3 text-left transition-all duration-200"
                    style={{
                      borderBottom: "1px solid rgba(26, 26, 26, 0.08)",
                    }}
                  >
                    {/* Checkbox */}
                    <div
                      className="flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 3,
                        border: isSelected ? "none" : "1.5px solid rgba(26, 26, 26, 0.2)",
                        backgroundColor: isSelected ? "#c8352e" : "transparent",
                      }}
                    >
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="#fafaf8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    {/* Label */}
                    <span
                      className="text-[13px] transition-colors duration-200"
                      style={{
                        color: isSelected ? "#1a1a1a" : "rgba(26, 26, 26, 0.55)",
                        fontWeight: isSelected ? 500 : 400,
                      }}
                    >
                      {symptom.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="relative z-10 px-7 pb-10 pt-4">
        {/* Selected count */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs" style={{ color: "rgba(26, 26, 26, 0.4)" }}>
            {selected.size === 0
              ? "No symptoms selected"
              : `${selected.size} symptom${selected.size !== 1 ? "s" : ""} selected`}
          </span>
          {selected.size > 0 && (
            <button
              onClick={() => setSelected(new Set())}
              className="text-xs font-medium"
              style={{ color: "#c8352e" }}
            >
              Clear all
            </button>
          )}
        </div>

        <button
          className="w-full h-14 rounded-lg font-medium text-sm tracking-wide transition-all duration-300"
          style={{
            backgroundColor: selected.size > 0 ? "#1a1a1a" : "rgba(26, 26, 26, 0.08)",
            color: selected.size > 0 ? "#fafaf8" : "rgba(26, 26, 26, 0.3)",
          }}
        >
          Continue
        </button>

        <div className="flex justify-center mt-4 gap-1.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 4 ? 20 : 6,
                height: 6,
                borderRadius: i === 4 ? 3 : "50%",
                backgroundColor: i === 4 ? "#c8352e" : "rgba(26, 26, 26, 0.12)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
