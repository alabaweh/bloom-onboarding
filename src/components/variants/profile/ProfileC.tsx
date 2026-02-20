"use client";

import { useState } from "react";

/**
 * VARIANT C — "Aurora"
 * Concept: Northern lights / glassmorphism. Frosted glass pills floating over
 * shifting aurora gradients. Dark background with ethereal glow.
 */

const ageRanges = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
const cycleLengths = ["21-24", "25-27", "28-30", "31-34", "35+", "Irregular"];
const periodLengths = ["2-3 days", "4-5 days", "6-7 days", "7+ days"];

const auroraColors = {
  green: "#22d3a7",
  blue: "#3b82f6",
  purple: "#a855f7",
  teal: "#06b6d4",
};

function FrostedSection({
  title,
  subtitle,
  options,
  selected,
  onSelect,
  accentFrom,
  accentTo,
}: {
  title: string;
  subtitle?: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
  accentFrom: string;
  accentTo: string;
}) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-1">
        {/* Aurora dot */}
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            boxShadow: `0 0 8px ${accentFrom}40`,
          }}
        />
        <h3 className="text-sm font-semibold text-white/90">{title}</h3>
      </div>
      {subtitle && (
        <p className="text-[11px] text-white/25 mb-3 ml-4">{subtitle}</p>
      )}

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="relative px-4 py-2.5 rounded-2xl transition-all duration-400"
              style={{
                background: isSelected
                  ? `linear-gradient(135deg, ${accentFrom}25, ${accentTo}20)`
                  : "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: isSelected
                  ? `1px solid ${accentFrom}50`
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: isSelected
                  ? `0 0 20px ${accentFrom}15, inset 0 1px 0 rgba(255,255,255,0.1)`
                  : "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              {/* Inner glow for selected */}
              {isSelected && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-30"
                  style={{
                    background: `radial-gradient(ellipse at center, ${accentFrom}30, transparent 70%)`,
                  }}
                />
              )}
              <span
                className="relative text-xs font-medium"
                style={{
                  color: isSelected ? accentFrom : "rgba(255,255,255,0.35)",
                  transition: "color 0.3s ease",
                  textShadow: isSelected ? `0 0 20px ${accentFrom}40` : "none",
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

export default function ProfileC() {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");

  const isComplete = age && cycleLength && periodLength;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary aurora band */}
        <div
          className="absolute w-[600px] h-[300px] top-[-50px] left-[-100px]"
          style={{
            background: `linear-gradient(120deg, ${auroraColors.green}15, ${auroraColors.blue}10, ${auroraColors.purple}12, transparent)`,
            filter: "blur(80px)",
            animation: "auroraShift1 8s ease-in-out infinite",
            transform: "rotate(-15deg)",
          }}
        />
        {/* Secondary aurora band */}
        <div
          className="absolute w-[500px] h-[250px] top-[100px] right-[-150px]"
          style={{
            background: `linear-gradient(200deg, ${auroraColors.teal}10, ${auroraColors.purple}15, ${auroraColors.green}08, transparent)`,
            filter: "blur(70px)",
            animation: "auroraShift2 10s ease-in-out infinite",
            transform: "rotate(10deg)",
          }}
        />
        {/* Bottom glow */}
        <div
          className="absolute w-[400px] h-[200px] bottom-[50px] left-[50%] -translate-x-1/2"
          style={{
            background: `radial-gradient(ellipse, ${auroraColors.blue}08, ${auroraColors.green}05, transparent)`,
            filter: "blur(60px)",
            animation: "auroraShift3 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-2">
        {/* Glass card header */}
        <div
          className="rounded-3xl px-6 py-6 mb-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Aurora icon */}
          <div className="flex justify-center mb-4">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <path
                d="M0 20 C5 14, 10 8, 15 10 S25 2, 30 8 S38 12, 40 6"
                stroke="url(#auroraGrad1)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M0 22 C8 16, 14 12, 20 14 S30 6, 35 12 S38 16, 40 10"
                stroke="url(#auroraGrad2)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
              <defs>
                <linearGradient id="auroraGrad1" x1="0" y1="12" x2="40" y2="12">
                  <stop stopColor={auroraColors.green} />
                  <stop offset="0.5" stopColor={auroraColors.blue} />
                  <stop offset="1" stopColor={auroraColors.purple} />
                </linearGradient>
                <linearGradient id="auroraGrad2" x1="0" y1="14" x2="40" y2="14">
                  <stop stopColor={auroraColors.teal} />
                  <stop offset="1" stopColor={auroraColors.green} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white text-center mb-1">
            Your Health Profile
          </h1>
          <p className="text-xs text-white/25 text-center">
            Tell us about your cycle to personalize your experience
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-6 overflow-y-auto pb-4">
        <FrostedSection
          title="Age Range"
          options={ageRanges}
          selected={age}
          onSelect={setAge}
          accentFrom={auroraColors.green}
          accentTo={auroraColors.teal}
        />

        <FrostedSection
          title="Cycle Length"
          subtitle="Days from first day of one period to the next"
          options={cycleLengths}
          selected={cycleLength}
          onSelect={setCycleLength}
          accentFrom={auroraColors.blue}
          accentTo={auroraColors.purple}
        />

        <FrostedSection
          title="Period Length"
          subtitle="How long your period typically lasts"
          options={periodLengths}
          selected={periodLength}
          onSelect={setPeriodLength}
          accentFrom={auroraColors.purple}
          accentTo={auroraColors.teal}
        />
      </div>

      {/* Privacy + CTA */}
      <div className="relative z-10 px-6 pb-10 pt-2">
        {/* Privacy glass chip */}
        <div
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-full mx-auto w-fit mb-5"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="1.5" y="4" width="7" height="5" rx="1" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <path d="M3 4V2.5C3 1.4 3.9 0.5 5 0.5C6.1 0.5 7 1.4 7 2.5V4" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          </svg>
          <span className="text-[9px] text-white/20 tracking-wide">
            Encrypted & on-device only
          </span>
        </div>

        {/* CTA button */}
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-500 relative overflow-hidden"
          style={{
            background: isComplete
              ? `linear-gradient(135deg, ${auroraColors.green}30, ${auroraColors.blue}25, ${auroraColors.purple}30)`
              : "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: isComplete
              ? `1px solid ${auroraColors.green}30`
              : "1px solid rgba(255,255,255,0.05)",
            color: isComplete ? "#fff" : "rgba(255,255,255,0.15)",
            boxShadow: isComplete
              ? `0 0 30px ${auroraColors.green}15, 0 0 60px ${auroraColors.blue}10`
              : "none",
            cursor: isComplete ? "pointer" : "default",
          }}
        >
          {isComplete && (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${auroraColors.green}10, transparent, ${auroraColors.purple}10)`,
                animation: "auroraShift1 4s ease-in-out infinite",
              }}
            />
          )}
          <span className="relative">{isComplete ? "Continue" : "Select all options"}</span>
        </button>
      </div>

      <style jsx>{`
        @keyframes auroraShift1 {
          0%, 100% { transform: rotate(-15deg) translateX(0); }
          50% { transform: rotate(-12deg) translateX(30px); }
        }
        @keyframes auroraShift2 {
          0%, 100% { transform: rotate(10deg) translateX(0); }
          50% { transform: rotate(8deg) translateX(-25px); }
        }
        @keyframes auroraShift3 {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
          50% { transform: translateX(-45%) scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
