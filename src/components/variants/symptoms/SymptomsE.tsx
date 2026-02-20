"use client";

import { useState } from "react";

/**
 * VARIANT E — "Pulse"
 * Concept: Health monitoring dashboard / signal meters. Black background,
 * neon pink accents. Each symptom is a toggleable signal indicator with
 * animated bar meters. Clinical-tech aesthetic.
 */

const SYMPTOM_GROUPS = [
  {
    name: "Physical",
    tag: "PHY",
    symptoms: [
      { id: "cramps", label: "Cramps", code: "CRM" },
      { id: "headache", label: "Headache", code: "HDA" },
      { id: "bloating", label: "Bloating", code: "BLT" },
      { id: "fatigue", label: "Fatigue", code: "FTG" },
      { id: "breast-tenderness", label: "Breast tenderness", code: "BST" },
      { id: "back-pain", label: "Back pain", code: "BKP" },
    ],
  },
  {
    name: "Emotional",
    tag: "EMO",
    symptoms: [
      { id: "mood-swings", label: "Mood swings", code: "MDS" },
      { id: "anxiety", label: "Anxiety", code: "ANX" },
      { id: "irritability", label: "Irritability", code: "IRR" },
      { id: "sadness", label: "Sadness", code: "SAD" },
    ],
  },
  {
    name: "Other",
    tag: "OTH",
    symptoms: [
      { id: "cravings", label: "Cravings", code: "CRV" },
      { id: "insomnia", label: "Insomnia", code: "INS" },
      { id: "skin-changes", label: "Skin changes", code: "SKN" },
      { id: "digestion", label: "Digestion", code: "DGS" },
    ],
  },
];

function SignalBars({ active, index }: { active: boolean; index: number }) {
  const barCount = 5;
  return (
    <div className="flex items-end gap-[2px]" style={{ height: 18 }}>
      {Array.from({ length: barCount }).map((_, i) => {
        const barHeight = 6 + i * 3;
        const isLit = active;
        const delay = (index * 0.1 + i * 0.05);
        return (
          <div
            key={i}
            className="rounded-sm transition-all duration-300"
            style={{
              width: 3,
              height: barHeight,
              backgroundColor: isLit ? "#ff3e8a" : "rgba(255, 62, 138, 0.1)",
              boxShadow: isLit ? `0 0 6px rgba(255, 62, 138, ${0.3 + i * 0.1})` : "none",
              transitionDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function PulseWave({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <svg
      width="100%"
      height="20"
      viewBox="0 0 100 20"
      className="absolute bottom-0 left-0 right-0"
      style={{ opacity: 0.2 }}
      preserveAspectRatio="none"
    >
      <polyline
        points="0,10 15,10 20,3 25,17 30,10 35,10 45,10 50,5 55,15 60,10 70,10 75,3 80,17 85,10 100,10"
        fill="none"
        stroke="#ff3e8a"
        strokeWidth="1"
        style={{
          animation: "pulseSweep 2s linear infinite",
        }}
      />
    </svg>
  );
}

export default function SymptomsE() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalSymptoms = SYMPTOM_GROUPS.reduce((s, g) => s + g.symptoms.length, 0);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 62, 138, 0.01) 2px, rgba(255, 62, 138, 0.01) 4px)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-5 pt-14 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "#ff3e8a",
                boxShadow: "0 0 8px rgba(255, 62, 138, 0.5)",
                animation: "pulseBeacon 1.5s ease-in-out infinite",
              }}
            />
            <span
              className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase"
              style={{ color: "#ff3e8a" }}
            >
              SYM.TRACK
            </span>
          </div>
          <span
            className="text-[10px] font-mono"
            style={{ color: "rgba(255, 62, 138, 0.3)" }}
          >
            {selected.size.toString().padStart(2, "0")}/{totalSymptoms.toString().padStart(2, "0")} ACTIVE
          </span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">
          Signal Monitoring
        </h1>
        <p className="text-xs font-mono" style={{ color: "rgba(255, 255, 255, 0.3)" }}>
          Toggle symptom signals to activate tracking
        </p>
      </div>

      {/* Status bar */}
      <div className="relative z-10 mx-5 mb-4">
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(255, 62, 138, 0.08)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(selected.size / totalSymptoms) * 100}%`,
              background: "linear-gradient(90deg, #ff3e8a, #ff6fab)",
              boxShadow: "0 0 10px rgba(255, 62, 138, 0.4)",
            }}
          />
        </div>
      </div>

      {/* Symptom groups */}
      <div className="relative z-10 flex-1 px-4 py-1 space-y-5 overflow-y-auto">
        {SYMPTOM_GROUPS.map((group) => {
          const activeCount = group.symptoms.filter((s) => selected.has(s.id)).length;
          return (
            <div key={group.name}>
              {/* Group header */}
              <div className="flex items-center gap-2 mb-3 px-1">
                <span
                  className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{
                    color: "#ff3e8a",
                    backgroundColor: "rgba(255, 62, 138, 0.08)",
                    border: "1px solid rgba(255, 62, 138, 0.15)",
                  }}
                >
                  {group.tag}
                </span>
                <span
                  className="text-[11px] font-mono font-medium tracking-wider uppercase"
                  style={{ color: "rgba(255, 255, 255, 0.3)" }}
                >
                  {group.name}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255, 62, 138, 0.06)" }} />
                <span
                  className="text-[10px] font-mono"
                  style={{ color: activeCount > 0 ? "#ff3e8a" : "rgba(255, 255, 255, 0.15)" }}
                >
                  {activeCount}/{group.symptoms.length}
                </span>
              </div>

              {/* Signal grid */}
              <div className="grid grid-cols-2 gap-2">
                {group.symptoms.map((symptom, idx) => {
                  const isSelected = selected.has(symptom.id);
                  return (
                    <button
                      key={symptom.id}
                      onClick={() => toggle(symptom.id)}
                      className="relative rounded-lg overflow-hidden text-left transition-all duration-300"
                      style={{
                        padding: "12px",
                        backgroundColor: isSelected
                          ? "rgba(255, 62, 138, 0.06)"
                          : "rgba(255, 255, 255, 0.02)",
                        border: isSelected
                          ? "1px solid rgba(255, 62, 138, 0.2)"
                          : "1px solid rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      <PulseWave active={isSelected} />

                      {/* Top row: code + signal bars */}
                      <div className="flex items-start justify-between mb-2">
                        <span
                          className="text-[9px] font-mono font-bold tracking-wider"
                          style={{
                            color: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.15)",
                          }}
                        >
                          {symptom.code}
                        </span>
                        <SignalBars active={isSelected} index={idx} />
                      </div>

                      {/* Symptom label */}
                      <span
                        className="text-[12px] font-medium block mb-2 transition-colors duration-300"
                        style={{
                          color: isSelected ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {symptom.label}
                      </span>

                      {/* Toggle indicator */}
                      <div className="flex items-center gap-2">
                        <div
                          className="relative w-8 h-4 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: isSelected
                              ? "rgba(255, 62, 138, 0.3)"
                              : "rgba(255, 255, 255, 0.06)",
                          }}
                        >
                          <div
                            className="absolute top-0.5 w-3 h-3 rounded-full transition-all duration-300"
                            style={{
                              left: isSelected ? 17 : 2,
                              backgroundColor: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.15)",
                              boxShadow: isSelected ? "0 0 8px rgba(255, 62, 138, 0.5)" : "none",
                            }}
                          />
                        </div>
                        <span
                          className="text-[9px] font-mono tracking-wider"
                          style={{
                            color: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.12)",
                          }}
                        >
                          {isSelected ? "ACTIVE" : "IDLE"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="relative z-10 px-5 pb-10 pt-5">
        {/* Signal summary */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: selected.size > 0 ? "#ff3e8a" : "rgba(255, 255, 255, 0.1)",
                boxShadow: selected.size > 0 ? "0 0 6px rgba(255, 62, 138, 0.4)" : "none",
              }}
            />
            <span
              className="text-[11px] font-mono"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              {selected.size} signal{selected.size !== 1 ? "s" : ""} active
            </span>
          </div>
          {selected.size > 0 && (
            <button
              onClick={() => setSelected(new Set())}
              className="text-[10px] font-mono tracking-wider"
              style={{ color: "rgba(255, 62, 138, 0.5)" }}
            >
              RESET ALL
            </button>
          )}
        </div>

        <button
          className="w-full h-14 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 font-mono"
          style={{
            backgroundColor: selected.size > 0 ? "#ff3e8a" : "rgba(255, 62, 138, 0.08)",
            color: selected.size > 0 ? "#0a0a0a" : "rgba(255, 62, 138, 0.25)",
            border: selected.size > 0
              ? "1px solid #ff3e8a"
              : "1px solid rgba(255, 62, 138, 0.1)",
            boxShadow: selected.size > 0
              ? "0 0 30px rgba(255, 62, 138, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
              : "none",
          }}
        >
          Initialize Tracking
        </button>
      </div>

      <style jsx>{`
        @keyframes pulseBeacon {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes pulseSweep {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
