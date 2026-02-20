"use client";

import { useState } from "react";

/**
 * VARIANT B — "Topographic"
 * Clean editorial cards with bold numbering, full-width, sharp corners.
 * Cream background, black typography, red accent on selected state.
 * Inspired by editorial print design and architectural minimalism.
 */

const goals = [
  {
    id: "period-tracking",
    title: "Track My Period",
    description:
      "Accurate predictions and calendar syncing. Stay prepared for every cycle with intelligent pattern recognition.",
  },
  {
    id: "fertility",
    title: "Understand Fertility",
    description:
      "Know your fertile window and ovulation with precision tracking. Science-backed insights for awareness.",
  },
  {
    id: "pregnancy",
    title: "Plan a Pregnancy",
    description:
      "Personalized insights supporting your conception journey. Optimal timing guidance and health metrics.",
  },
  {
    id: "wellness",
    title: "Improve Wellness",
    description:
      "Track mood, sleep, energy, and symptoms. Understand how your cycle impacts your daily life.",
  },
];

export default function GoalsB() {
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
      style={{ background: "#fafaf8" }}
    >
      {/* Topographic background lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        viewBox="0 0 400 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d={`M${-50 + i * 20},${100 + i * 60} Q${100 + i * 15},${50 + i * 40} ${200 + i * 10},${120 + i * 55} T${450 + i * 5},${80 + i * 70}`}
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 px-6 pt-14 pb-2">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-[2px]"
            style={{ background: "#c8352e" }}
          />
          <span
            className="text-[10px] tracking-[0.25em] uppercase font-medium"
            style={{ color: "#c8352e" }}
          >
            Select Goals
          </span>
        </div>

        <h1
          className="text-[32px] font-bold leading-[1.1] tracking-tight mb-2"
          style={{ color: "#1a1a1a" }}
        >
          What brings you
          <br />
          here today?
        </h1>
        <p className="text-sm font-light" style={{ color: "#1a1a1a", opacity: 0.4 }}>
          Choose all that apply. You can change these later.
        </p>
      </div>

      {/* Goal cards - full-width, editorial style */}
      <div className="z-10 flex-1 px-6 mt-6 space-y-0">
        {goals.map((goal, idx) => {
          const isSelected = selected.includes(goal.id);

          return (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className="w-full text-left relative"
              style={{
                borderTop: idx === 0 ? "1px solid rgba(26, 26, 26, 0.08)" : "none",
                borderBottom: "1px solid rgba(26, 26, 26, 0.08)",
              }}
            >
              {/* Red left accent bar on selected */}
              <div
                className="absolute left-0 top-0 bottom-0 transition-all duration-300"
                style={{
                  width: isSelected ? 3 : 0,
                  background: "#c8352e",
                }}
              />

              <div
                className="py-5 transition-all duration-300"
                style={{
                  paddingLeft: isSelected ? 16 : 0,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Large editorial number */}
                  <span
                    className="text-[40px] leading-none font-bold tabular-nums transition-colors duration-300"
                    style={{
                      color: isSelected ? "#c8352e" : "rgba(26, 26, 26, 0.07)",
                      fontFeatureSettings: '"tnum"',
                      minWidth: 48,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base font-semibold tracking-tight transition-colors duration-300"
                        style={{
                          color: isSelected ? "#1a1a1a" : "rgba(26, 26, 26, 0.7)",
                        }}
                      >
                        {goal.title}
                      </h3>

                      {/* Sharp checkbox */}
                      <div
                        className="w-5 h-5 flex items-center justify-center transition-all duration-200"
                        style={{
                          border: isSelected
                            ? "none"
                            : "1.5px solid rgba(26, 26, 26, 0.15)",
                          background: isSelected ? "#c8352e" : "transparent",
                        }}
                      >
                        {isSelected && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2.5 6L5 8.5L9.5 3.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="square"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-xs leading-relaxed mt-1 max-w-[280px] transition-all duration-300"
                      style={{
                        color: "rgba(26, 26, 26, 0.35)",
                        maxHeight: isSelected ? 60 : 0,
                        opacity: isSelected ? 1 : 0,
                        overflow: "hidden",
                      }}
                    >
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selection summary */}
      <div className="z-10 px-6 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <span
              className="text-xs font-medium"
              style={{ color: "#c8352e" }}
            >
              {selected.length}
            </span>
          )}
          <span
            className="text-xs"
            style={{ color: "rgba(26, 26, 26, 0.3)" }}
          >
            {selected.length === 0
              ? "No goals selected"
              : `goal${selected.length > 1 ? "s" : ""} selected`}
          </span>
        </div>

        {/* Minimal progress blocks */}
        <div className="flex gap-1">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="w-6 h-1 transition-all duration-300"
              style={{
                background: selected.includes(goal.id)
                  ? "#c8352e"
                  : "rgba(26, 26, 26, 0.06)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 px-6 pb-14 pt-5 w-full">
        <button
          className="w-full h-14 font-semibold text-sm tracking-wide transition-all duration-400"
          style={{
            background: canProceed ? "#1a1a1a" : "rgba(26, 26, 26, 0.04)",
            color: canProceed ? "#fafaf8" : "rgba(26, 26, 26, 0.2)",
            cursor: canProceed ? "pointer" : "default",
          }}
        >
          {canProceed ? "Continue" : "Select at least one goal"}
        </button>

        {/* Step indicator */}
        <div className="flex items-center justify-center mt-5 gap-1">
          <span className="text-[10px] font-medium" style={{ color: "#c8352e" }}>
            03
          </span>
          <span className="text-[10px]" style={{ color: "rgba(26, 26, 26, 0.2)" }}>
            / 06
          </span>
        </div>
      </div>
    </div>
  );
}
