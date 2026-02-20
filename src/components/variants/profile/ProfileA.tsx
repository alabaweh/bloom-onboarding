"use client";

import { useState } from "react";

/**
 * VARIANT A — "Celestial"
 * Concept: Constellation / star map. Each option is a star node you tap to illuminate.
 * Connected by faint constellation lines. Night sky palette with gold accent.
 */

const ageRanges = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
const cycleLengths = ["21-24", "25-27", "28-30", "31-34", "35+", "Irregular"];
const periodLengths = ["2-3 days", "4-5 days", "6-7 days", "7+ days"];

// Pseudo-random constellation positions for each group
const constellationPositions = {
  age: [
    { x: 15, y: 20 }, { x: 42, y: 8 }, { x: 72, y: 22 },
    { x: 25, y: 55 }, { x: 55, y: 48 }, { x: 82, y: 58 },
  ],
  cycle: [
    { x: 12, y: 15 }, { x: 38, y: 28 }, { x: 68, y: 12 },
    { x: 22, y: 58 }, { x: 52, y: 52 }, { x: 80, y: 42 },
  ],
  period: [
    { x: 18, y: 25 }, { x: 50, y: 15 },
    { x: 78, y: 30 }, { x: 45, y: 60 },
  ],
};

// Lines connecting constellation nodes
const constellationLines = {
  age: [[0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [1, 4]],
  cycle: [[0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5]],
  period: [[0, 1], [1, 2], [2, 3], [0, 3]],
};

function ConstellationGroup({
  title,
  subtitle,
  options,
  selected,
  onSelect,
  positions,
  lines,
}: {
  title: string;
  subtitle?: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
  positions: { x: number; y: number }[];
  lines: number[][];
}) {
  return (
    <div className="mb-8">
      <h3
        className="text-sm font-semibold tracking-[0.15em] uppercase mb-1"
        style={{ color: "#f5d882" }}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="text-xs mb-3" style={{ color: "rgba(210, 195, 255, 0.4)" }}>
          {subtitle}
        </p>
      )}
      <div className="relative w-full" style={{ height: 120 }}>
        {/* Constellation lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 70"
          preserveAspectRatio="none"
        >
          {lines.map(([a, b], i) => (
            <line
              key={i}
              x1={positions[a].x}
              y1={positions[a].y}
              x2={positions[b].x}
              y2={positions[b].y}
              stroke={
                selected === options[a] || selected === options[b]
                  ? "rgba(245, 216, 130, 0.3)"
                  : "rgba(210, 195, 255, 0.08)"
              }
              strokeWidth="0.3"
              style={{ transition: "stroke 0.5s ease" }}
            />
          ))}
        </svg>

        {/* Star nodes */}
        {options.map((option, i) => {
          const pos = positions[i];
          const isSelected = selected === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="absolute flex flex-col items-center group"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: isSelected ? 10 : 1,
              }}
            >
              {/* Star glow */}
              {isSelected && (
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 40,
                    height: 40,
                    background: "radial-gradient(circle, rgba(245,216,130,0.3), transparent 70%)",
                    filter: "blur(6px)",
                    animation: "celestialPulse 2s ease-in-out infinite",
                  }}
                />
              )}

              {/* Star shape */}
              <svg
                width={isSelected ? 20 : 12}
                height={isSelected ? 20 : 12}
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  filter: isSelected
                    ? "drop-shadow(0 0 8px rgba(245,216,130,0.8))"
                    : "none",
                }}
              >
                <path
                  d="M12 2L14.5 9L22 9.5L16.5 14L18 22L12 18L6 22L7.5 14L2 9.5L9.5 9L12 2Z"
                  fill={isSelected ? "#f5d882" : "rgba(210, 195, 255, 0.2)"}
                  style={{ transition: "fill 0.4s ease" }}
                />
              </svg>

              {/* Label */}
              <span
                className="mt-1 text-[10px] font-medium whitespace-nowrap"
                style={{
                  color: isSelected ? "#f5d882" : "rgba(210, 195, 255, 0.35)",
                  transition: "color 0.4s ease",
                  textShadow: isSelected
                    ? "0 0 12px rgba(245,216,130,0.5)"
                    : "none",
                }}
              >
                {option}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ProfileA() {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");

  const isComplete = age && cycleLength && periodLength;

  return (
    <div
      className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)",
      }}
    >
      {/* Star field background */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${(i * 7 + 3) % 3 + 1}px`,
            height: `${(i * 7 + 3) % 3 + 1}px`,
            top: `${(i * 17 + 5) % 100}%`,
            left: `${(i * 23 + 11) % 100}%`,
            opacity: ((i * 13 + 7) % 6) / 10 + 0.1,
            animation: `twinkle ${((i * 11 + 3) % 3) + 2}s ease-in-out infinite`,
            animationDelay: `${((i * 7 + 2) % 20) / 10}s`,
          }}
        />
      ))}

      {/* Cosmic glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245,216,130,0.3), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        {/* Constellation icon */}
        <div className="flex justify-center mb-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="8" r="3" fill="#f5d882" opacity="0.8" />
            <circle cx="10" cy="28" r="2.5" fill="#f5d882" opacity="0.5" />
            <circle cx="38" cy="24" r="2" fill="#f5d882" opacity="0.6" />
            <circle cx="20" cy="40" r="2.5" fill="#f5d882" opacity="0.4" />
            <circle cx="36" cy="40" r="2" fill="#f5d882" opacity="0.5" />
            <line x1="24" y1="8" x2="10" y2="28" stroke="#f5d882" strokeWidth="0.5" opacity="0.3" />
            <line x1="24" y1="8" x2="38" y2="24" stroke="#f5d882" strokeWidth="0.5" opacity="0.3" />
            <line x1="10" y1="28" x2="20" y2="40" stroke="#f5d882" strokeWidth="0.5" opacity="0.3" />
            <line x1="38" y1="24" x2="36" y2="40" stroke="#f5d882" strokeWidth="0.5" opacity="0.3" />
            <line x1="20" y1="40" x2="36" y2="40" stroke="#f5d882" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>
        <h1
          className="text-2xl font-bold text-white tracking-tight mb-2"
          style={{ fontFamily: "system-ui" }}
        >
          Map Your Stars
        </h1>
        <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(210,195,255,0.5)" }}>
          Tap each star to illuminate your profile
        </p>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex-1 overflow-y-auto pb-4">
        <ConstellationGroup
          title="Your Age"
          options={ageRanges}
          selected={age}
          onSelect={setAge}
          positions={constellationPositions.age}
          lines={constellationLines.age}
        />

        <ConstellationGroup
          title="Cycle Length"
          subtitle="Days between periods"
          options={cycleLengths}
          selected={cycleLength}
          onSelect={setCycleLength}
          positions={constellationPositions.cycle}
          lines={constellationLines.cycle}
        />

        <ConstellationGroup
          title="Period Length"
          subtitle="How long it lasts"
          options={periodLengths}
          selected={periodLength}
          onSelect={setPeriodLength}
          positions={constellationPositions.period}
          lines={constellationLines.period}
        />
      </div>

      {/* Privacy note */}
      <div
        className="relative z-10 flex items-center gap-2 px-4 py-3 rounded-xl mb-4"
        style={{
          background: "rgba(245,216,130,0.05)",
          border: "1px solid rgba(245,216,130,0.1)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1L8.5 5L13 5.5L9.5 8.5L10.5 13L7 11L3.5 13L4.5 8.5L1 5.5L5.5 5L7 1Z"
            fill="#f5d882"
            opacity="0.4"
          />
        </svg>
        <p className="text-[10px]" style={{ color: "rgba(210,195,255,0.4)" }}>
          Your health data stays private. Protected by the cosmos.
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            background: isComplete
              ? "linear-gradient(135deg, #f5d882, #e8c55a)"
              : "rgba(245,216,130,0.1)",
            color: isComplete ? "#0c0a1d" : "rgba(245,216,130,0.3)",
            boxShadow: isComplete
              ? "0 4px 24px rgba(245,216,130,0.3)"
              : "none",
            cursor: isComplete ? "pointer" : "default",
          }}
        >
          {isComplete ? "Continue Your Journey" : "Illuminate All Stars"}
        </button>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.7; }
        }
        @keyframes celestialPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
