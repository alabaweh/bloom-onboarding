"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Profile: Selection-only pills for age range, cycle length, period length. No text inputs.
 */

import { useState } from "react";

const ageRanges = ["Under 18", "18-24", "25-34", "35-44", "45+"];
const cycleLengths = ["21-24", "25-28", "29-32", "33-36", "Irregular"];
const periodLengths = ["2-3", "4-5", "6-7", "7+"];

export default function Profile() {
  const [age, setAge] = useState("");
  const [cycle, setCycle] = useState("");
  const [period, setPeriod] = useState("");

  const PillGroup = ({ label, options, value, onChange }: {
    label: string; options: string[]; value: string; onChange: (v: string) => void;
  }) => (
    <div
      className="rounded-2xl p-5 mb-4"
      style={{ background: "#fff", border: "1.5px solid #ffcba4" }}
    >
      <h3 className="text-base font-semibold mb-3" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200"
            style={{
              fontFamily: "system-ui",
              background: value === opt
                ? "linear-gradient(135deg, #c06840, #d4a060)"
                : "#ffecd2",
              color: value === opt ? "#fff8f0" : "#3d2520",
              border: `1px solid ${value === opt ? "#c06840" : "#ffcba4"}`,
              boxShadow: value === opt ? "0 2px 10px rgba(192,104,64,0.25)" : "none",
            }}
          >
            {opt} {label.includes("length") ? " days" : ""}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      {/* Soft glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, #ffcba4 0%, transparent 70%)",
          opacity: 0.3,
          filter: "blur(30px)",
        }}
      />

      <h2 className="text-3xl font-bold mb-1 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        About You
      </h2>
      <p className="text-sm mb-8 relative z-10" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        Help Solara understand your rhythm
      </p>

      <div className="w-full max-w-sm relative z-10">
        <PillGroup label="Your age range" options={ageRanges} value={age} onChange={setAge} />
        <PillGroup label="Typical cycle length" options={cycleLengths} value={cycle} onChange={setCycle} />
        <PillGroup label="Typical period length" options={periodLengths} value={period} onChange={setPeriod} />
      </div>

      {/* Progress indicator */}
      <div className="flex gap-1.5 mt-6">
        {[age, cycle, period].map((v, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: v ? 32 : 16,
              background: v ? "#c06840" : "#ffcba4",
            }}
          />
        ))}
      </div>
    </div>
  );
}
