"use client";

import { useState } from "react";

/**
 * VARIANT B — "Topographic"
 * Concept: Clean editorial / cartographic. Numbered sections divided by horizontal rules.
 * Cream background, black text, red accent. Sharp corners, grid layout, Swiss design.
 */

const ageRanges = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
const cycleLengths = ["21-24", "25-27", "28-30", "31-34", "35+", "Irregular"];
const periodLengths = ["2-3 days", "4-5 days", "6-7 days", "7+ days"];

function SectionBlock({
  number,
  title,
  description,
  options,
  selected,
  onSelect,
  columns = 3,
}: {
  number: string;
  title: string;
  description: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
  columns?: number;
}) {
  return (
    <div className="mb-0">
      {/* Horizontal rule */}
      <div className="w-full h-px bg-[#1a1a1a] opacity-10" />

      <div className="py-6">
        {/* Section number + title */}
        <div className="flex items-baseline gap-3 mb-1">
          <span
            className="text-[10px] font-mono font-bold tracking-widest uppercase"
            style={{ color: "#c8352e" }}
          >
            {number}
          </span>
          <h3
            className="text-lg font-bold tracking-tight"
            style={{ color: "#1a1a1a", fontFamily: "system-ui" }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-xs mb-5 ml-[42px]"
          style={{ color: "rgba(26,26,26,0.4)" }}
        >
          {description}
        </p>

        {/* Grid of options */}
        <div
          className="grid gap-[1px]"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            background: "rgba(26,26,26,0.08)",
          }}
        >
          {options.map((option) => {
            const isSelected = selected === option;
            return (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className="relative flex items-center justify-center py-3 transition-all duration-200"
                style={{
                  background: isSelected ? "#1a1a1a" : "#fafaf8",
                  color: isSelected ? "#fafaf8" : "#1a1a1a",
                }}
              >
                {/* Red marker for selected */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 w-full h-[2px]"
                    style={{ background: "#c8352e" }}
                  />
                )}
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ fontFamily: "system-ui" }}
                >
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ProfileB() {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");

  const isComplete = age && cycleLength && periodLength;
  const completedCount = [age, cycleLength, periodLength].filter(Boolean).length;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#fafaf8" }}
    >
      {/* Topographic lines - subtle background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        viewBox="0 0 400 800"
        fill="none"
      >
        {[120, 200, 300, 380, 480, 560, 650].map((y, i) => (
          <path
            key={i}
            d={`M0 ${y} C100 ${y - 20 + i * 5} 200 ${y + 15 - i * 3} 300 ${y - 10 + i * 4} S400 ${y + 10} 400 ${y}`}
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-6">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <span
            className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase"
            style={{ color: "rgba(26,26,26,0.3)" }}
          >
            Profile
          </span>
          <span
            className="text-[10px] font-mono tracking-widest"
            style={{ color: "#c8352e" }}
          >
            {completedCount}/3
          </span>
        </div>

        <h1
          className="text-3xl font-bold tracking-[-0.03em] mb-2"
          style={{ color: "#1a1a1a", fontFamily: "system-ui" }}
        >
          Health Profile
        </h1>
        <p className="text-sm" style={{ color: "rgba(26,26,26,0.4)" }}>
          Complete each section to calibrate your experience.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-6 overflow-y-auto">
        <SectionBlock
          number="01"
          title="Age Range"
          description="Select your current age bracket"
          options={ageRanges}
          selected={age}
          onSelect={setAge}
          columns={3}
        />

        <SectionBlock
          number="02"
          title="Cycle Length"
          description="Average days between periods"
          options={cycleLengths}
          selected={cycleLength}
          onSelect={setCycleLength}
          columns={3}
        />

        <SectionBlock
          number="03"
          title="Period Length"
          description="Typical duration of your period"
          options={periodLengths}
          selected={periodLength}
          onSelect={setPeriodLength}
          columns={2}
        />

        {/* Final rule */}
        <div className="w-full h-px bg-[#1a1a1a] opacity-10" />
      </div>

      {/* Privacy + CTA */}
      <div className="relative z-10 px-6 pb-10 pt-4">
        {/* Privacy */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="2" y="5" width="8" height="6" rx="1" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.25" />
            <path d="M4 5V3.5C4 2.12 5.12 1 6 1C6.88 1 8 2.12 8 3.5V5" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.25" />
          </svg>
          <p className="text-[10px] tracking-wide" style={{ color: "rgba(26,26,26,0.3)" }}>
            Data stored locally. Never shared.
          </p>
        </div>

        <button
          className="w-full h-14 font-bold text-sm tracking-wide transition-all duration-300"
          style={{
            background: isComplete ? "#1a1a1a" : "rgba(26,26,26,0.05)",
            color: isComplete ? "#fafaf8" : "rgba(26,26,26,0.2)",
            cursor: isComplete ? "pointer" : "default",
          }}
        >
          {isComplete ? (
            <span className="flex items-center justify-center gap-2">
              Continue
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          ) : (
            "Complete All Sections"
          )}
        </button>

        {/* Red accent line at bottom */}
        {isComplete && (
          <div
            className="w-12 h-[2px] mx-auto mt-4 transition-all duration-500"
            style={{ background: "#c8352e" }}
          />
        )}
      </div>
    </div>
  );
}
