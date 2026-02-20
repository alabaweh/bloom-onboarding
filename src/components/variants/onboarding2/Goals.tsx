"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Goals
 * Clean numbered cards with massive editorial numbers
 * that turn red on selection.
 */
export default function Goals() {
  const [selected, setSelected] = useState<number[]>([]);

  const goals = [
    { num: "01", title: "Track My Cycle", desc: "Build awareness of your cycle pattern and predict future dates." },
    { num: "02", title: "Manage Symptoms", desc: "Log and understand symptoms to find relief strategies." },
    { num: "03", title: "Plan Pregnancy", desc: "Identify your fertile window with precision timing." },
    { num: "04", title: "Prevent Pregnancy", desc: "Track fertility signals for natural family planning." },
    { num: "05", title: "Improve Wellness", desc: "Sync fitness, nutrition, and lifestyle to your cycle." },
  ];

  const toggle = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx={100} cy={400} r={60 + i * 35} stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "system-ui", opacity: 0.35 }}>
          Vela / Goals
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Your<br />Coordinates
        </h1>
        <p className="text-xs mt-2" style={{ opacity: 0.35, fontFamily: "system-ui" }}>
          Select all goals that define your journey.
        </p>
      </div>

      {/* Goal cards */}
      <div className="z-10 flex-1 flex flex-col gap-0">
        {goals.map((g, i) => {
          const isSelected = selected.includes(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="relative flex items-start gap-5 py-5 text-left transition-colors"
              style={{
                borderBottom: "1px solid rgba(26,26,26,0.06)",
              }}
            >
              {/* Massive editorial number */}
              <span
                className="text-[42px] font-extralight leading-none select-none transition-colors"
                style={{
                  fontFamily: "ui-monospace, monospace",
                  color: isSelected ? "#c8352e" : "#1a1a1a",
                  opacity: isSelected ? 1 : 0.08,
                  minWidth: "56px",
                }}
              >
                {g.num}
              </span>

              {/* Content */}
              <div className="pt-1 flex-1">
                <h3
                  className="text-[14px] font-medium tracking-tight mb-1 transition-colors"
                  style={{
                    fontFamily: "system-ui",
                    color: isSelected ? "#1a1a1a" : "#1a1a1a",
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >
                  {g.title}
                </h3>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ fontFamily: "system-ui", opacity: isSelected ? 0.45 : 0.25 }}
                >
                  {g.desc}
                </p>
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <div className="absolute top-5 right-0 w-2 h-8 bg-[#c8352e]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="z-10 mt-6 w-full">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>
            {String(selected.length).padStart(2, "0")}
          </span>
          <div className="flex-1 h-px bg-[#1a1a1a] opacity-[0.08]" />
        </div>
        <button className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{
            background: selected.length > 0 ? "#1a1a1a" : "#1a1a1a",
            color: "#fafaf8",
            fontFamily: "system-ui",
            opacity: selected.length > 0 ? 1 : 0.3,
          }}>
          Continue
        </button>
      </div>
    </div>
  );
}
