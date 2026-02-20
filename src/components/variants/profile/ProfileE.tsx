"use client";

import { useState } from "react";

/**
 * VARIANT E — "Pulse"
 * Concept: Terminal / CLI / biometric data input. Black background, neon pink accent.
 * Each section looks like a command prompt. Selections are data-chip badges.
 * Blinking cursor effect on active/unfilled sections.
 */

const ageRanges = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
const cycleLengths = ["21-24", "25-27", "28-30", "31-34", "35+", "Irregular"];
const periodLengths = ["2-3 days", "4-5 days", "6-7 days", "7+ days"];

function TerminalSection({
  command,
  description,
  options,
  selected,
  onSelect,
  index,
}: {
  command: string;
  description: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
  index: number;
}) {
  const isActive = !selected;

  return (
    <div className="mb-6">
      {/* Command prompt line */}
      <div className="flex items-center gap-2 mb-1">
        <span
          className="text-[10px] font-mono font-bold"
          style={{ color: "#ff3e8a" }}
        >
          $
        </span>
        <span
          className="text-xs font-mono font-bold tracking-wider uppercase"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {command}
        </span>
        {/* Blinking cursor for active unfilled sections */}
        {isActive && (
          <span
            className="inline-block w-[6px] h-[14px] ml-1"
            style={{
              background: "#ff3e8a",
              animation: "terminalBlink 1s step-end infinite",
            }}
          />
        )}
      </div>

      {/* Description as comment */}
      <p
        className="text-[10px] font-mono mb-3 ml-4"
        style={{ color: "rgba(255,255,255,0.15)" }}
      >
        // {description}
      </p>

      {/* Data chips */}
      <div className="flex flex-wrap gap-1.5 ml-4">
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="relative font-mono transition-all duration-200"
              style={{
                padding: "6px 12px",
                background: isSelected
                  ? "rgba(255,62,138,0.12)"
                  : "rgba(255,255,255,0.02)",
                border: isSelected
                  ? "1px solid rgba(255,62,138,0.4)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
              }}
            >
              {/* Selection indicator */}
              {isSelected && (
                <div
                  className="absolute top-0 left-0 w-full h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #ff3e8a, transparent)",
                  }}
                />
              )}

              <span
                className="text-[11px] font-medium"
                style={{
                  color: isSelected ? "#ff3e8a" : "rgba(255,255,255,0.25)",
                  textShadow: isSelected
                    ? "0 0 10px rgba(255,62,138,0.4)"
                    : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {isSelected && (
                  <span style={{ color: "#ff3e8a", opacity: 0.5 }}>[</span>
                )}
                {option}
                {isSelected && (
                  <span style={{ color: "#ff3e8a", opacity: 0.5 }}>]</span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Response line when selected */}
      {selected && (
        <div className="flex items-center gap-2 mt-2 ml-4">
          <span
            className="text-[10px] font-mono"
            style={{ color: "rgba(255,62,138,0.4)" }}
          >
            {">"}
          </span>
          <span
            className="text-[10px] font-mono"
            style={{ color: "rgba(255,62,138,0.6)" }}
          >
            SET {command.toUpperCase().replace(/\s/g, "_")} = &quot;{selected}&quot;
          </span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-1">
            <path d="M2 5L4 7L8 3" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function ProfileE() {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");

  const isComplete = age && cycleLength && periodLength;
  const completedCount = [age, cycleLength, periodLength].filter(Boolean).length;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Neon glow at top */}
      <div
        className="absolute top-[-50px] left-[50%] -translate-x-1/2 w-[300px] h-[150px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #ff3e8a, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-6">
        {/* Top status bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#ff3e8a",
                boxShadow: "0 0 6px #ff3e8a",
                animation: "terminalBlink 2s ease-in-out infinite",
              }}
            />
            <span
              className="text-[9px] font-mono tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              PROFILE.SYS
            </span>
          </div>
          <span
            className="text-[9px] font-mono"
            style={{ color: "rgba(255,62,138,0.5)" }}
          >
            [{completedCount}/3]
          </span>
        </div>

        {/* Pulse waveform */}
        <div className="flex justify-center mb-5">
          <svg width="160" height="40" viewBox="0 0 160 40" fill="none">
            <path
              d="M0 20 L25 20 L35 20 L45 5 L55 35 L65 12 L72 28 L80 18 L88 20 L160 20"
              stroke="url(#pulseGradProfile)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="pulseGradProfile" x1="0" y1="20" x2="160" y2="20">
                <stop stopColor="#ff3e8a" stopOpacity="0" />
                <stop offset="0.2" stopColor="#ff3e8a" stopOpacity="0.5" />
                <stop offset="0.5" stopColor="#ff3e8a" />
                <stop offset="0.8" stopColor="#ff3e8a" stopOpacity="0.5" />
                <stop offset="1" stopColor="#ff3e8a" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Title as terminal header */}
        <div
          className="px-4 py-3 mb-2"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: 4,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,62,138,0.4)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>
            <span
              className="text-[8px] font-mono tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              health_profile.sh
            </span>
          </div>
          <h1
            className="text-lg font-bold font-mono text-white tracking-tight"
          >
            HEALTH PROFILE
          </h1>
          <p
            className="text-[10px] font-mono"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Initialize your biometric parameters
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-6 overflow-y-auto pb-4">
        <TerminalSection
          command="set age"
          description="Select your current age range"
          options={ageRanges}
          selected={age}
          onSelect={setAge}
          index={0}
        />

        <TerminalSection
          command="set cycle"
          description="Average days between periods"
          options={cycleLengths}
          selected={cycleLength}
          onSelect={setCycleLength}
          index={1}
        />

        <TerminalSection
          command="set period"
          description="How long your period typically lasts"
          options={periodLengths}
          selected={periodLength}
          onSelect={setPeriodLength}
          index={2}
        />

        {/* System output log */}
        {isComplete && (
          <div
            className="mt-2 px-3 py-2"
            style={{
              background: "rgba(34,197,94,0.03)",
              border: "1px solid rgba(34,197,94,0.1)",
              borderRadius: 4,
            }}
          >
            <p className="text-[10px] font-mono" style={{ color: "rgba(34,197,94,0.5)" }}>
              {"> "}ALL PARAMETERS SET. PROFILE READY.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 pb-10 pt-4">
        {/* Privacy / encryption line */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="1.5" y="4" width="7" height="5" rx="1" stroke="rgba(255,62,138,0.2)" strokeWidth="0.8" />
            <path d="M3 4V2.5C3 1.4 3.9 0.5 5 0.5C6.1 0.5 7 1.4 7 2.5V4" stroke="rgba(255,62,138,0.2)" strokeWidth="0.8" />
          </svg>
          <span
            className="text-[8px] font-mono tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.1)" }}
          >
            AES-256 ENCRYPTED // LOCAL STORAGE ONLY
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[2px] mb-4" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${(completedCount / 3) * 100}%`,
              background:
                "linear-gradient(90deg, #ff3e8a, #d62872)",
              boxShadow: "0 0 8px rgba(255,62,138,0.3)",
            }}
          />
        </div>

        {/* CTA */}
        <button
          className="w-full h-14 font-mono font-bold text-sm tracking-wider uppercase transition-all duration-300 relative overflow-hidden"
          style={{
            background: isComplete
              ? "rgba(255,62,138,0.1)"
              : "rgba(255,255,255,0.02)",
            border: isComplete
              ? "1px solid rgba(255,62,138,0.3)"
              : "1px solid rgba(255,255,255,0.04)",
            borderRadius: 4,
            color: isComplete ? "#ff3e8a" : "rgba(255,255,255,0.1)",
            boxShadow: isComplete
              ? "0 0 20px rgba(255,62,138,0.1), inset 0 0 20px rgba(255,62,138,0.03)"
              : "none",
            cursor: isComplete ? "pointer" : "default",
          }}
        >
          {/* Top glow line */}
          {isComplete && (
            <div
              className="absolute top-0 left-0 w-full h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #ff3e8a, transparent)",
              }}
            />
          )}
          <span className="relative flex items-center justify-center gap-2">
            {isComplete ? (
              <>
                EXECUTE
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L10 7L5 11" stroke="#ff3e8a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </>
            ) : (
              <>
                AWAITING INPUT
                <span
                  className="inline-block w-[6px] h-[12px]"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    animation: "terminalBlink 1s step-end infinite",
                  }}
                />
              </>
            )}
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes terminalBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
