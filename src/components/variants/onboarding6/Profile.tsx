"use client";
import { useState } from "react";

const ageRanges = ["18-24", "25-30", "31-35", "36-40", "41-45", "46+"];
const cycleLengths = [24, 25, 26, 27, 28, 29, 30, 31, 32, 35];
const periodLengths = [3, 4, 5, 6, 7];

export default function Profile() {
  const [age, setAge] = useState("");
  const [cycle, setCycle] = useState(28);
  const [period, setPeriod] = useState(5);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Personalize</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Your Profile</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      <div className="w-full max-w-sm space-y-6">
        {/* Age Range */}
        <div className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <label className="block text-sm font-medium mb-3" style={{ color: "#1e293b" }}>Age Range</label>
          <div className="flex flex-wrap gap-2">
            {ageRanges.map((a) => (
              <button
                key={a}
                onClick={() => setAge(a)}
                className="px-4 py-2 rounded-lg text-xs border cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: age === a ? "#4b7bec" : "#ffffff",
                  color: age === a ? "#ffffff" : "#334155",
                  borderColor: age === a ? "#4b7bec" : "#e2e8f0",
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Cycle Length */}
        <div className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <label className="block text-sm font-medium mb-3" style={{ color: "#1e293b" }}>Cycle Length</label>
          <div className="flex flex-wrap gap-2">
            {cycleLengths.map((d) => (
              <button
                key={d}
                onClick={() => setCycle(d)}
                className="w-10 h-10 rounded-lg text-xs border cursor-pointer flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: cycle === d ? "#4b7bec" : "#ffffff",
                  color: cycle === d ? "#ffffff" : "#334155",
                  borderColor: cycle === d ? "#4b7bec" : "#e2e8f0",
                }}
              >
                {d}
              </button>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: "#94a3b8" }}>{cycle} days selected</p>
        </div>

        {/* Period Duration */}
        <div className="rounded-xl p-5" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <label className="block text-sm font-medium mb-3" style={{ color: "#1e293b" }}>Period Duration</label>
          <div className="flex gap-3">
            {periodLengths.map((d) => (
              <button
                key={d}
                onClick={() => setPeriod(d)}
                className="flex-1 py-2.5 rounded-lg text-sm border cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor: period === d ? "#4b7bec" : "#ffffff",
                  color: period === d ? "#ffffff" : "#334155",
                  borderColor: period === d ? "#4b7bec" : "#e2e8f0",
                }}
              >
                {d}
              </button>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: "#94a3b8" }}>{period} days selected</p>
        </div>
      </div>

      {/* Page dots */}
      <div className="flex gap-2 mt-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 3 ? 20 : 6, height: 6, backgroundColor: i === 3 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
