"use client";

import { useState } from "react";

/**
 * VARIANT D — "Woven"
 * Concept: Handcraft / textile art. Linen background, stitched borders on tag-style
 * buttons. Warm browns and copper. Feels like a hand-sewn label system.
 */

const ageRanges = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
const cycleLengths = ["21-24", "25-27", "28-30", "31-34", "35+", "Irregular"];
const periodLengths = ["2-3 days", "4-5 days", "6-7 days", "7+ days"];

function StitchedTag({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-3 transition-all duration-300"
      style={{
        background: isSelected ? "#3d2b1f" : "rgba(61,43,31,0.03)",
        borderRadius: 2,
      }}
    >
      {/* Stitched border effect using dashed outline */}
      <div
        className="absolute inset-[3px] rounded-[1px] pointer-events-none"
        style={{
          border: isSelected
            ? "1.5px dashed rgba(193,127,78,0.6)"
            : "1.5px dashed rgba(61,43,31,0.12)",
          transition: "border-color 0.3s ease",
        }}
      />

      {/* Corner stitch marks */}
      {[
        { top: 0, left: 0 },
        { top: 0, right: 0 },
        { bottom: 0, left: 0 },
        { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-[6px] h-[6px] pointer-events-none"
          style={{
            ...pos,
          }}
        >
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <line
              x1={i % 2 === 0 ? 0 : 6}
              y1={i < 2 ? 0 : 6}
              x2={i % 2 === 0 ? 6 : 0}
              y2={i < 2 ? 6 : 0}
              stroke={isSelected ? "#c17f4e" : "rgba(61,43,31,0.15)"}
              strokeWidth="1"
              style={{ transition: "stroke 0.3s ease" }}
            />
          </svg>
        </div>
      ))}

      {/* Label text */}
      <span
        className="relative text-xs font-medium tracking-wide"
        style={{
          color: isSelected ? "#f7f3ee" : "rgba(61,43,31,0.5)",
          fontFamily: "system-ui",
          transition: "color 0.3s ease",
        }}
      >
        {label}
      </span>

      {/* Thread/needle hole marker on selected */}
      {isSelected && (
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{
            background: "#c17f4e",
            boxShadow: "0 0 4px rgba(193,127,78,0.4)",
          }}
        />
      )}
    </button>
  );
}

function WovenSection({
  title,
  subtitle,
  icon,
  options,
  selected,
  onSelect,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="mb-8">
      {/* Section header with woven line */}
      <div className="flex items-center gap-3 mb-1">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full"
          style={{
            background: "rgba(193,127,78,0.08)",
            border: "1px solid rgba(193,127,78,0.15)",
          }}
        >
          {icon}
        </div>
        <div>
          <h3
            className="text-sm font-bold tracking-wide"
            style={{ color: "#3d2b1f" }}
          >
            {title}
          </h3>
        </div>
      </div>
      {subtitle && (
        <p
          className="text-[11px] mb-3 ml-11"
          style={{ color: "rgba(61,43,31,0.35)" }}
        >
          {subtitle}
        </p>
      )}

      {/* Woven line separator */}
      <div className="mb-4 ml-11">
        <svg width="100%" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
          <path
            d="M0 2 C10 0, 20 4, 30 2 S50 0, 60 2 S80 4, 90 2 S110 0, 120 2 S140 4, 150 2 S170 0, 180 2 S195 3, 200 2"
            stroke="rgba(193,127,78,0.2)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 ml-11">
        {options.map((option) => (
          <StitchedTag
            key={option}
            label={option}
            isSelected={selected === option}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProfileD() {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");

  const isComplete = age && cycleLength && periodLength;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#f7f3ee" }}
    >
      {/* Linen texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zM4 4h1v1H4z' fill='%233d2b1f' fill-opacity='0.02'/%3E%3C/svg%3E")`,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-4">
        {/* Woven pattern icon */}
        <div className="flex justify-center mb-5">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Woven cross-hatch pattern */}
            {[8, 16, 24, 32, 40].map((x) => (
              <line
                key={`v${x}`}
                x1={x}
                y1="4"
                x2={x}
                y2="44"
                stroke="#c17f4e"
                strokeWidth="1.5"
                opacity="0.2"
              />
            ))}
            {[8, 16, 24, 32, 40].map((y) => (
              <line
                key={`h${y}`}
                x1="4"
                y1={y}
                x2="44"
                y2={y}
                stroke="#3d2b1f"
                strokeWidth="1"
                opacity="0.15"
              />
            ))}
            {/* Center circle */}
            <circle
              cx="24"
              cy="24"
              r="8"
              fill="none"
              stroke="#c17f4e"
              strokeWidth="1.5"
              strokeDasharray="3 2"
              opacity="0.4"
            />
            <circle cx="24" cy="24" r="2" fill="#c17f4e" opacity="0.5" />
          </svg>
        </div>

        <h1
          className="text-2xl font-bold text-center mb-2 tracking-tight"
          style={{ color: "#3d2b1f", fontFamily: "system-ui" }}
        >
          Weave Your Profile
        </h1>
        <p
          className="text-xs text-center tracking-wide"
          style={{ color: "rgba(61,43,31,0.4)" }}
        >
          Each thread tells your story
        </p>

        {/* Decorative woven line */}
        <div className="flex justify-center mt-4">
          <svg width="120" height="6" viewBox="0 0 120 6" fill="none">
            <path
              d="M0 3 C5 0, 10 6, 15 3 S25 0, 30 3 S40 6, 45 3 S55 0, 60 3 S70 6, 75 3 S85 0, 90 3 S100 6, 105 3 S115 0, 120 3"
              stroke="#c17f4e"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-6 overflow-y-auto pb-4">
        <WovenSection
          title="Your Age"
          icon={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="5" r="3" stroke="#c17f4e" strokeWidth="1" />
              <path d="M2 13C2 10.24 4.24 8 7 8C9.76 8 12 10.24 12 13" stroke="#c17f4e" strokeWidth="1" />
            </svg>
          }
          options={ageRanges}
          selected={age}
          onSelect={setAge}
        />

        <WovenSection
          title="Cycle Length"
          subtitle="Days from one period to the next"
          icon={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5" stroke="#c17f4e" strokeWidth="1" fill="none" />
              <path d="M7 3V7L9.5 9.5" stroke="#c17f4e" strokeWidth="1" strokeLinecap="round" />
            </svg>
          }
          options={cycleLengths}
          selected={cycleLength}
          onSelect={setCycleLength}
        />

        <WovenSection
          title="Period Length"
          subtitle="How long it typically lasts"
          icon={
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2C7 2 3 6 3 8.5C3 10.71 4.79 12.5 7 12.5C9.21 12.5 11 10.71 11 8.5C11 6 7 2 7 2Z" stroke="#c17f4e" strokeWidth="1" />
            </svg>
          }
          options={periodLengths}
          selected={periodLength}
          onSelect={setPeriodLength}
        />
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 pb-10 pt-2">
        {/* Privacy — craft-style label */}
        <div
          className="flex items-center justify-center gap-2 py-2 px-4 mb-5 mx-auto w-fit"
          style={{
            background: "rgba(193,127,78,0.05)",
            border: "1px dashed rgba(193,127,78,0.2)",
            borderRadius: 2,
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1L6 4H9L6.5 6L7.5 9L5 7L2.5 9L3.5 6L1 4H4L5 1Z" fill="#c17f4e" opacity="0.3" />
          </svg>
          <span
            className="text-[9px] tracking-wider"
            style={{ color: "rgba(61,43,31,0.35)" }}
          >
            Your data is woven only for you
          </span>
        </div>

        {/* CTA */}
        <button
          className="w-full h-14 relative font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            background: isComplete ? "#3d2b1f" : "rgba(61,43,31,0.05)",
            color: isComplete ? "#f7f3ee" : "rgba(61,43,31,0.2)",
            borderRadius: 2,
            cursor: isComplete ? "pointer" : "default",
          }}
        >
          {/* Stitched border on CTA */}
          <div
            className="absolute inset-[3px] pointer-events-none"
            style={{
              border: isComplete
                ? "1.5px dashed rgba(193,127,78,0.4)"
                : "1.5px dashed rgba(61,43,31,0.08)",
              borderRadius: 1,
              transition: "border-color 0.3s ease",
            }}
          />
          <span className="relative">
            {isComplete ? "Continue Weaving" : "Complete Your Pattern"}
          </span>
        </button>
      </div>
    </div>
  );
}
