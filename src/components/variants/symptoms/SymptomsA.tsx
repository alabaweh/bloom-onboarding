"use client";

import { useState } from "react";

/**
 * VARIANT A — "Celestial"
 * Concept: Star map / constellation. Each symptom is a tappable star node.
 * Selected stars glow gold and form constellation lines.
 * Night sky background with deep purple gradient.
 */

const SYMPTOM_GROUPS = {
  Physical: [
    { id: "cramps", label: "Cramps", x: 12, y: 18 },
    { id: "headache", label: "Headache", x: 38, y: 8 },
    { id: "bloating", label: "Bloating", x: 62, y: 20 },
    { id: "fatigue", label: "Fatigue", x: 85, y: 12 },
    { id: "breast-tenderness", label: "Breast tenderness", x: 25, y: 32 },
    { id: "back-pain", label: "Back pain", x: 72, y: 34 },
  ],
  Emotional: [
    { id: "mood-swings", label: "Mood swings", x: 15, y: 52 },
    { id: "anxiety", label: "Anxiety", x: 42, y: 46 },
    { id: "irritability", label: "Irritability", x: 68, y: 50 },
    { id: "sadness", label: "Sadness", x: 88, y: 44 },
  ],
  Other: [
    { id: "cravings", label: "Cravings", x: 10, y: 70 },
    { id: "insomnia", label: "Insomnia", x: 35, y: 66 },
    { id: "skin-changes", label: "Skin changes", x: 60, y: 72 },
    { id: "digestion", label: "Digestion", x: 85, y: 68 },
  ],
};

const ALL_SYMPTOMS = Object.values(SYMPTOM_GROUPS).flat();

// Constellation lines connecting nearby stars in each group
const CONSTELLATION_LINES: Record<string, [string, string][]> = {
  Physical: [
    ["cramps", "headache"],
    ["headache", "bloating"],
    ["bloating", "fatigue"],
    ["cramps", "breast-tenderness"],
    ["bloating", "back-pain"],
    ["breast-tenderness", "back-pain"],
  ],
  Emotional: [
    ["mood-swings", "anxiety"],
    ["anxiety", "irritability"],
    ["irritability", "sadness"],
  ],
  Other: [
    ["cravings", "insomnia"],
    ["insomnia", "skin-changes"],
    ["skin-changes", "digestion"],
  ],
};

export default function SymptomsA() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getSymptomById = (id: string) => ALL_SYMPTOMS.find((s) => s.id === id);

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)",
      }}
    >
      {/* Tiny background stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`bg-star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            top: `${(i * 17 + 7) % 100}%`,
            left: `${(i * 23 + 13) % 100}%`,
            opacity: ((i * 7) % 10) / 20 + 0.1,
            animation: `celestialTwinkle ${((i % 4) + 2)}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.4}s`,
          }}
        />
      ))}

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-4">
        <p
          className="text-xs font-medium tracking-[0.3em] uppercase mb-2"
          style={{ color: "rgba(210, 195, 255, 0.5)" }}
        >
          Map Your Stars
        </p>
        <h1
          className="text-3xl font-bold tracking-tight mb-2"
          style={{ color: "#f5d882" }}
        >
          Symptom Constellations
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(210, 195, 255, 0.6)" }}>
          Tap each star to track. Selected stars illuminate your personal sky map.
        </p>
      </div>

      {/* Star Map */}
      <div className="relative z-10 flex-1 mx-4 my-2">
        {/* Constellation group labels */}
        {Object.entries(SYMPTOM_GROUPS).map(([group, symptoms]) => {
          const avgY = symptoms.reduce((s, sym) => s + sym.y, 0) / symptoms.length;
          const minX = Math.min(...symptoms.map((s) => s.x));
          return (
            <div
              key={group}
              className="absolute text-[10px] font-medium tracking-[0.2em] uppercase"
              style={{
                top: `${avgY - 6}%`,
                left: `${minX - 2}%`,
                color: "rgba(210, 195, 255, 0.3)",
              }}
            >
              {group}
            </div>
          );
        })}

        {/* SVG constellation lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
          viewBox="0 0 100 85"
          preserveAspectRatio="none"
        >
          {Object.entries(CONSTELLATION_LINES).map(([group, lines]) =>
            lines.map(([fromId, toId]) => {
              const from = getSymptomById(fromId);
              const to = getSymptomById(toId);
              if (!from || !to) return null;
              const bothSelected = selected.has(fromId) && selected.has(toId);
              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={bothSelected ? "#f5d882" : "rgba(210, 195, 255, 0.12)"}
                  strokeWidth={bothSelected ? 0.3 : 0.15}
                  style={{
                    transition: "stroke 0.5s ease, stroke-width 0.5s ease",
                    filter: bothSelected ? "drop-shadow(0 0 2px rgba(245, 216, 130, 0.5))" : "none",
                  }}
                />
              );
            })
          )}
        </svg>

        {/* Star nodes */}
        {ALL_SYMPTOMS.map((symptom) => {
          const isSelected = selected.has(symptom.id);
          return (
            <button
              key={symptom.id}
              onClick={() => toggle(symptom.id)}
              className="absolute flex flex-col items-center group"
              style={{
                left: `${symptom.x}%`,
                top: `${symptom.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              {/* Star glow */}
              {isSelected && (
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 40,
                    height: 40,
                    background: "radial-gradient(circle, rgba(245, 216, 130, 0.3) 0%, transparent 70%)",
                    animation: "celestialPulse 2s ease-in-out infinite",
                  }}
                />
              )}
              {/* Star point */}
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: isSelected ? 14 : 8,
                  height: isSelected ? 14 : 8,
                  background: isSelected
                    ? "radial-gradient(circle at 35% 35%, #fffbe6, #f5d882)"
                    : "radial-gradient(circle, rgba(210, 195, 255, 0.6), rgba(210, 195, 255, 0.2))",
                  boxShadow: isSelected
                    ? "0 0 12px rgba(245, 216, 130, 0.6), 0 0 30px rgba(245, 216, 130, 0.2)"
                    : "0 0 4px rgba(210, 195, 255, 0.2)",
                }}
              />
              {/* Label */}
              <span
                className="mt-1.5 text-[10px] font-medium whitespace-nowrap transition-all duration-300"
                style={{
                  color: isSelected ? "#f5d882" : "rgba(210, 195, 255, 0.45)",
                  textShadow: isSelected ? "0 0 8px rgba(245, 216, 130, 0.3)" : "none",
                }}
              >
                {symptom.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 px-6 pb-10 pt-4">
        {/* Selected count */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(90deg, transparent, rgba(245, 216, 130, 0.2), transparent)" }}
          />
          <span className="text-xs font-medium tracking-wider" style={{ color: "#f5d882" }}>
            {selected.size} star{selected.size !== 1 ? "s" : ""} illuminated
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(90deg, transparent, rgba(245, 216, 130, 0.2), transparent)" }}
          />
        </div>

        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            background: selected.size > 0
              ? "linear-gradient(135deg, #f5d882, #e8c55a)"
              : "rgba(245, 216, 130, 0.15)",
            color: selected.size > 0 ? "#0c0a1d" : "rgba(245, 216, 130, 0.4)",
            boxShadow: selected.size > 0 ? "0 4px 24px rgba(245, 216, 130, 0.3)" : "none",
          }}
        >
          Chart My Constellation
        </button>
      </div>

      <style jsx>{`
        @keyframes celestialTwinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.6; }
        }
        @keyframes celestialPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
