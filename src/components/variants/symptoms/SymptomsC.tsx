"use client";

import { useState } from "react";

/**
 * VARIANT C — "Aurora"
 * Concept: Dark space with aurora borealis glow. Frosted glass chips/bubbles.
 * Floating pill-shaped glass elements that glow with aurora colors when selected.
 * Deep dark background with shifting aurora gradient overlays.
 */

const SYMPTOM_GROUPS = [
  {
    name: "Physical",
    color: { from: "#00d4aa", to: "#0099ff" },
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
    color: { from: "#a855f7", to: "#ec4899" },
    symptoms: [
      { id: "mood-swings", label: "Mood swings" },
      { id: "anxiety", label: "Anxiety" },
      { id: "irritability", label: "Irritability" },
      { id: "sadness", label: "Sadness" },
    ],
  },
  {
    name: "Other",
    color: { from: "#f59e0b", to: "#06b6d4" },
    symptoms: [
      { id: "cravings", label: "Cravings" },
      { id: "insomnia", label: "Insomnia" },
      { id: "skin-changes", label: "Skin changes" },
      { id: "digestion", label: "Digestion" },
    ],
  },
];

export default function SymptomsC() {
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
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(170deg, #0a0e1a 0%, #0d1525 35%, #0a1628 70%, #0a0e1a 100%)" }}
    >
      {/* Aurora gradient blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 212, 170, 0.08) 0%, transparent 65%)",
          transform: "translate(30%, -30%)",
          animation: "auroraDrift1 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.06) 0%, transparent 65%)",
          transform: "translate(-40%, 0)",
          animation: "auroraDrift2 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.05) 0%, transparent 65%)",
          transform: "translate(20%, 30%)",
          animation: "auroraDrift3 10s ease-in-out infinite",
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Track Your Symptoms
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
          Select the symptoms that matter to you. Each selection lights up your personal aurora.
        </p>
      </div>

      {/* Symptom groups */}
      <div className="relative z-10 flex-1 px-5 py-2 space-y-7 overflow-y-auto">
        {SYMPTOM_GROUPS.map((group) => {
          const groupCount = group.symptoms.filter((s) => selected.has(s.id)).length;
          return (
            <div key={group.name}>
              {/* Group label */}
              <div className="flex items-center gap-3 mb-3 px-1">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${group.color.from}, ${group.color.to})`,
                    boxShadow: `0 0 6px ${group.color.from}40`,
                  }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: "rgba(255, 255, 255, 0.35)" }}
                >
                  {group.name}
                </span>
                {groupCount > 0 && (
                  <span
                    className="text-[10px] font-medium ml-auto"
                    style={{ color: group.color.from }}
                  >
                    {groupCount}
                  </span>
                )}
              </div>

              {/* Glass chips */}
              <div className="flex flex-wrap gap-2.5">
                {group.symptoms.map((symptom) => {
                  const isSelected = selected.has(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      onClick={() => toggle(symptom.id)}
                      className="relative px-4 py-2.5 rounded-2xl transition-all duration-500"
                      style={{
                        background: isSelected
                          ? `linear-gradient(135deg, ${group.color.from}20, ${group.color.to}15)`
                          : "rgba(255, 255, 255, 0.04)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: isSelected
                          ? `1px solid ${group.color.from}50`
                          : "1px solid rgba(255, 255, 255, 0.06)",
                        boxShadow: isSelected
                          ? `0 0 20px ${group.color.from}15, inset 0 1px 0 ${group.color.from}20`
                          : "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      {/* Inner glow on select */}
                      {isSelected && (
                        <div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: `radial-gradient(ellipse at 50% 0%, ${group.color.from}12 0%, transparent 70%)`,
                          }}
                        />
                      )}
                      <span
                        className="relative text-[13px] font-medium transition-colors duration-300"
                        style={{
                          color: isSelected ? group.color.from : "rgba(255, 255, 255, 0.4)",
                          textShadow: isSelected ? `0 0 12px ${group.color.from}30` : "none",
                        }}
                      >
                        {symptom.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="relative z-10 px-6 pb-10 pt-6">
        {/* Selected count with glass style */}
        <div
          className="flex items-center justify-center gap-2 mb-5 py-2.5 rounded-xl mx-auto max-w-[200px]"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: selected.size > 0
                ? "linear-gradient(135deg, #00d4aa, #a855f7)"
                : "rgba(255, 255, 255, 0.15)",
              boxShadow: selected.size > 0 ? "0 0 8px rgba(0, 212, 170, 0.4)" : "none",
            }}
          />
          <span className="text-xs font-medium" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            {selected.size} selected
          </span>
        </div>

        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-500"
          style={{
            background: selected.size > 0
              ? "linear-gradient(135deg, rgba(0, 212, 170, 0.8), rgba(0, 153, 255, 0.6))"
              : "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            color: selected.size > 0 ? "white" : "rgba(255, 255, 255, 0.2)",
            border: selected.size > 0
              ? "1px solid rgba(0, 212, 170, 0.3)"
              : "1px solid rgba(255, 255, 255, 0.06)",
            boxShadow: selected.size > 0
              ? "0 8px 32px rgba(0, 212, 170, 0.2)"
              : "none",
          }}
        >
          Continue
        </button>
      </div>

      <style jsx>{`
        @keyframes auroraDrift1 {
          0%, 100% { transform: translate(30%, -30%) scale(1); }
          50% { transform: translate(25%, -25%) scale(1.1); }
        }
        @keyframes auroraDrift2 {
          0%, 100% { transform: translate(-40%, 0) scale(1); }
          50% { transform: translate(-35%, 5%) scale(1.15); }
        }
        @keyframes auroraDrift3 {
          0%, 100% { transform: translate(20%, 30%) scale(1); }
          50% { transform: translate(15%, 25%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
