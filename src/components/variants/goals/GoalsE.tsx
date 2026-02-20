"use client";

import { useState } from "react";

/**
 * VARIANT E — "Pulse"
 * Goals as system modules with power-on indicators and status lights.
 * Black background, neon pink accents, cyberpunk/tech aesthetic.
 * Toggle-style interaction with system boot-up feel.
 */

const goals = [
  {
    id: "period-tracking",
    title: "Track My Period",
    description: "Cycle prediction engine. Pattern recognition. Adaptive learning.",
    moduleCode: "CYC-01",
    statusLabel: "Cycle Module",
  },
  {
    id: "fertility",
    title: "Understand Fertility",
    description: "Fertile window mapping. Ovulation detection. Hormonal insight.",
    moduleCode: "FRT-02",
    statusLabel: "Fertility Module",
  },
  {
    id: "pregnancy",
    title: "Plan a Pregnancy",
    description: "Conception optimizer. Timing analysis. Health preparation.",
    moduleCode: "PRG-03",
    statusLabel: "Pregnancy Module",
  },
  {
    id: "wellness",
    title: "Improve Wellness",
    description: "Mood tracking. Sleep analysis. Energy optimization. Symptom log.",
    moduleCode: "WLN-04",
    statusLabel: "Wellness Module",
  },
];

export default function GoalsE() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const canProceed = selected.length > 0;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 62, 138, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 62, 138, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 62, 138, 0.15) 2px, rgba(255, 62, 138, 0.15) 4px)",
        }}
      />

      {/* Glow spot */}
      <div
        className="absolute top-[20%] left-[50%] w-[300px] h-[300px] rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255, 62, 138, 0.06), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Header */}
      <div className="z-10 px-6 pt-14 pb-2">
        {/* System status bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#ff3e8a",
                boxShadow: "0 0 6px rgba(255, 62, 138, 0.6)",
                animation: "goalsEStatusBlink 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-[9px] tracking-[0.2em] uppercase font-mono"
              style={{ color: "rgba(255, 62, 138, 0.4)" }}
            >
              System Config
            </span>
          </div>
          <span
            className="text-[9px] font-mono"
            style={{ color: "rgba(255, 255, 255, 0.15)" }}
          >
            v3.2.1
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight leading-tight mb-1">
          Activate
          <br />
          <span style={{ color: "#ff3e8a" }}>Modules</span>
        </h1>
        <p
          className="text-sm font-mono"
          style={{ color: "rgba(255, 255, 255, 0.2)" }}
        >
          Select systems to initialize
        </p>
      </div>

      {/* Module cards */}
      <div className="z-10 flex-1 px-6 mt-6 space-y-3">
        {goals.map((goal) => {
          const isSelected = selected.includes(goal.id);

          return (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className="w-full text-left relative"
            >
              <div
                className="relative overflow-hidden transition-all duration-300"
                style={{
                  background: isSelected
                    ? "rgba(255, 62, 138, 0.06)"
                    : "rgba(255, 255, 255, 0.02)",
                  border: isSelected
                    ? "1px solid rgba(255, 62, 138, 0.2)"
                    : "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: 8,
                  padding: "14px 16px",
                }}
              >
                {/* Neon glow edge on selected */}
                {isSelected && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 20px rgba(255, 62, 138, 0.08), 0 0 15px rgba(255, 62, 138, 0.05)",
                      borderRadius: 8,
                    }}
                  />
                )}

                <div className="flex items-center gap-3 relative z-10">
                  {/* Power toggle */}
                  <div className="shrink-0 relative" style={{ width: 44, height: 24 }}>
                    <div
                      className="w-full h-full rounded-full transition-all duration-300"
                      style={{
                        background: isSelected
                          ? "rgba(255, 62, 138, 0.25)"
                          : "rgba(255, 255, 255, 0.05)",
                        border: isSelected
                          ? "1px solid rgba(255, 62, 138, 0.4)"
                          : "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      {/* Toggle knob */}
                      <div
                        className="absolute top-[2px] w-[18px] h-[18px] rounded-full transition-all duration-300"
                        style={{
                          left: isSelected ? 23 : 2,
                          background: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.15)",
                          boxShadow: isSelected
                            ? "0 0 10px rgba(255, 62, 138, 0.5), 0 0 20px rgba(255, 62, 138, 0.2)"
                            : "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Module code + title row */}
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded transition-all duration-300"
                        style={{
                          background: isSelected
                            ? "rgba(255, 62, 138, 0.15)"
                            : "rgba(255, 255, 255, 0.04)",
                          color: isSelected
                            ? "#ff3e8a"
                            : "rgba(255, 255, 255, 0.2)",
                          border: isSelected
                            ? "1px solid rgba(255, 62, 138, 0.2)"
                            : "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        {goal.moduleCode}
                      </span>
                      <h3
                        className="text-sm font-semibold tracking-tight transition-colors duration-300"
                        style={{
                          color: isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.45)",
                        }}
                      >
                        {goal.title}
                      </h3>
                    </div>

                    {/* Description row */}
                    <div
                      className="overflow-hidden transition-all duration-400"
                      style={{
                        maxHeight: isSelected ? 40 : 0,
                        opacity: isSelected ? 1 : 0,
                      }}
                    >
                      <p
                        className="text-[11px] font-mono leading-relaxed"
                        style={{ color: "rgba(255, 255, 255, 0.2)" }}
                      >
                        {goal.description}
                      </p>
                    </div>
                  </div>

                  {/* Status lights column */}
                  <div className="shrink-0 flex flex-col items-center gap-1">
                    {/* Status indicator lights */}
                    <div className="flex gap-1">
                      <div
                        className="w-[5px] h-[5px] rounded-full transition-all duration-300"
                        style={{
                          background: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.08)",
                          boxShadow: isSelected
                            ? "0 0 4px rgba(255, 62, 138, 0.6)"
                            : "none",
                          animation: isSelected
                            ? "goalsELightPulse 1.5s ease-in-out infinite"
                            : "none",
                        }}
                      />
                      <div
                        className="w-[5px] h-[5px] rounded-full transition-all duration-500"
                        style={{
                          background: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.08)",
                          boxShadow: isSelected
                            ? "0 0 4px rgba(255, 62, 138, 0.6)"
                            : "none",
                          animation: isSelected
                            ? "goalsELightPulse 1.5s ease-in-out infinite 0.3s"
                            : "none",
                        }}
                      />
                      <div
                        className="w-[5px] h-[5px] rounded-full transition-all duration-700"
                        style={{
                          background: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.08)",
                          boxShadow: isSelected
                            ? "0 0 4px rgba(255, 62, 138, 0.6)"
                            : "none",
                          animation: isSelected
                            ? "goalsELightPulse 1.5s ease-in-out infinite 0.6s"
                            : "none",
                        }}
                      />
                    </div>
                    <span
                      className="text-[7px] font-mono uppercase tracking-wider transition-colors duration-300"
                      style={{
                        color: isSelected ? "#ff3e8a" : "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {isSelected ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>

                {/* Bottom power line indicator */}
                <div
                  className="mt-3 h-[1px] transition-all duration-500"
                  style={{
                    background: isSelected
                      ? "linear-gradient(90deg, #ff3e8a44, #ff3e8a, #ff3e8a44)"
                      : "rgba(255, 255, 255, 0.03)",
                    width: isSelected ? "100%" : "0%",
                    boxShadow: isSelected
                      ? "0 0 8px rgba(255, 62, 138, 0.3)"
                      : "none",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* System status footer */}
      <div className="z-10 px-6 mt-4 mb-2">
        <div
          className="flex items-center justify-between py-3 px-4 rounded-lg"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className="w-2 h-4 transition-all duration-300"
                  style={{
                    background: selected.includes(goal.id)
                      ? "#ff3e8a"
                      : "rgba(255, 255, 255, 0.05)",
                    boxShadow: selected.includes(goal.id)
                      ? "0 0 4px rgba(255, 62, 138, 0.4)"
                      : "none",
                  }}
                />
              ))}
            </div>
            <span
              className="text-[9px] font-mono"
              style={{ color: "rgba(255, 255, 255, 0.2)" }}
            >
              {selected.length}/4 modules active
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: canProceed ? "#00ff88" : "rgba(255, 255, 255, 0.1)",
                boxShadow: canProceed ? "0 0 6px rgba(0, 255, 136, 0.5)" : "none",
              }}
            />
            <span
              className="text-[9px] font-mono"
              style={{
                color: canProceed
                  ? "rgba(0, 255, 136, 0.6)"
                  : "rgba(255, 255, 255, 0.15)",
              }}
            >
              {canProceed ? "Ready" : "Standby"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 px-6 pb-14 pt-3 w-full">
        <button
          className="w-full h-14 rounded-lg font-semibold text-sm tracking-wide transition-all duration-400 relative overflow-hidden"
          style={{
            background: canProceed ? "#ff3e8a" : "rgba(255, 62, 138, 0.06)",
            color: canProceed ? "#ffffff" : "rgba(255, 62, 138, 0.25)",
            border: canProceed
              ? "none"
              : "1px solid rgba(255, 62, 138, 0.1)",
            cursor: canProceed ? "pointer" : "default",
            boxShadow: canProceed
              ? "0 0 30px rgba(255, 62, 138, 0.3), 0 4px 16px rgba(255, 62, 138, 0.2)"
              : "none",
            fontFamily: "monospace",
          }}
        >
          {canProceed && (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                animation: "goalsESweep 3s linear infinite",
              }}
            />
          )}
          <span className="relative z-10">
            {canProceed ? "Initialize System" : "Select at least one module"}
          </span>
        </button>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-1 mt-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-sm transition-all duration-300"
              style={{
                width: i === 2 ? 20 : 6,
                height: 3,
                background:
                  i === 2 ? "#ff3e8a" : "rgba(255, 62, 138, 0.1)",
                boxShadow:
                  i === 2 ? "0 0 6px rgba(255, 62, 138, 0.3)" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes goalsEStatusBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes goalsELightPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes goalsESweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
