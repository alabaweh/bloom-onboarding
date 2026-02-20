"use client";

import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface HealthProfileScreenProps {
  onNext: (data: { age: string; cycleLength: string; periodLength: string }) => void;
  onBack: () => void;
}

const ageRanges = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
const cycleLengths = ["21-24", "25-27", "28-30", "31-34", "35+", "Irregular"];
const periodLengths = ["2-3 days", "4-5 days", "6-7 days", "7+ days"];

export default function HealthProfileScreen({ onNext, onBack }: HealthProfileScreenProps) {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");

  const isComplete = age && cycleLength && periodLength;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-4 overflow-y-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Tell Us About You
          </h2>
          <p className="text-sm text-gray-400 max-w-[260px] mx-auto">
            This helps us personalize your experience
          </p>
        </div>

        {/* Age selection */}
        <div className="mb-6 animate-fade-in-up animation-delay-200" style={{ opacity: 0 }}>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Your age range
          </label>
          <div className="grid grid-cols-3 gap-2">
            {ageRanges.map((range) => (
              <button
                key={range}
                onClick={() => setAge(range)}
                className={`h-11 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  age === range
                    ? "border-bloom-400 bg-bloom-50 text-bloom-700"
                    : "border-gray-100 bg-white text-gray-500 hover:border-gray-200"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Cycle length */}
        <div className="mb-6 animate-fade-in-up animation-delay-300" style={{ opacity: 0 }}>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Average cycle length
          </label>
          <p className="text-xs text-gray-400 mb-3">Days from first day of one period to the next</p>
          <div className="grid grid-cols-3 gap-2">
            {cycleLengths.map((len) => (
              <button
                key={len}
                onClick={() => setCycleLength(len)}
                className={`h-11 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  cycleLength === len
                    ? "border-plum-400 bg-plum-50 text-plum-700"
                    : "border-gray-100 bg-white text-gray-500 hover:border-gray-200"
                }`}
              >
                {len}
              </button>
            ))}
          </div>
        </div>

        {/* Period length */}
        <div className="mb-6 animate-fade-in-up animation-delay-400" style={{ opacity: 0 }}>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Average period length
          </label>
          <p className="text-xs text-gray-400 mb-3">How long your period typically lasts</p>
          <div className="grid grid-cols-2 gap-2">
            {periodLengths.map((len) => (
              <button
                key={len}
                onClick={() => setPeriodLength(len)}
                className={`h-11 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  periodLength === len
                    ? "border-warm-400 bg-warm-50 text-warm-500"
                    : "border-gray-100 bg-white text-gray-500 hover:border-gray-200"
                }`}
              >
                {len}
              </button>
            ))}
          </div>
        </div>

        {/* Privacy note */}
        <div className="flex items-start gap-2 p-3 rounded-xl bg-plum-50/50 border border-plum-100 animate-fade-in animation-delay-500" style={{ opacity: 0 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
            <path d="M8 1L10 5L14 5.5L11 8.5L12 13L8 11L4 13L5 8.5L2 5.5L6 5L8 1Z" fill="#a855f7" opacity="0.6" />
          </svg>
          <p className="text-xs text-plum-600 leading-relaxed">
            Your data stays on your device. We never share your personal health information.
          </p>
        </div>
      </div>

      <NavigationButtons
        onNext={() => onNext({ age, cycleLength, periodLength })}
        onBack={onBack}
        disabled={!isComplete}
        nextLabel="Continue"
      />
    </div>
  );
}
