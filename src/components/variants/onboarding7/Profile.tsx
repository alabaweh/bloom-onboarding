"use client";
import { useState } from "react";

export default function Profile() {
  const [age, setAge] = useState<string | null>(null);
  const [cycleLen, setCycleLen] = useState<number | null>(null);
  const [periodLen, setPeriodLen] = useState<number | null>(null);

  const ageRanges = ["18-24", "25-30", "31-35", "36-40", "41-45", "46+"];
  const cycleLengths = [24, 26, 28, 30, 32, 35];
  const periodLengths = [3, 4, 5, 6, 7];
  const allSet = age !== null && cycleLen !== null && periodLen !== null;

  const Pill = ({ label, selected, onTap }: { label: string; selected: boolean; onTap: () => void }) => (
    <button onClick={onTap}
      className="rounded-2xl px-4 py-2 text-sm cursor-pointer transition-all duration-200"
      style={{
        background: selected ? "rgba(212,180,131,0.25)" : "rgba(255,255,255,0.04)",
        border: selected ? "1px solid #d4b483" : "1px solid rgba(196,181,224,0.25)",
        color: selected ? "#d4b483" : "rgba(255,255,255,0.6)",
        fontFamily: "system-ui",
        boxShadow: selected ? "0 0 12px rgba(212,180,131,0.15)" : "none",
      }}>
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      <div className="absolute" style={{
        width: 280, height: 280, borderRadius: "50%",
        background: "radial-gradient(circle, #c4b5e0 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.2, bottom: "10%", right: "-10%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          About You
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          Help us personalize your experience
        </p>

        {/* Age */}
        <div className="mb-6">
          <p className="text-sm mb-3 font-medium" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>Age Range</p>
          <div className="flex flex-wrap gap-2">
            {ageRanges.map((a) => <Pill key={a} label={a} selected={age === a} onTap={() => setAge(a)} />)}
          </div>
        </div>

        {/* Cycle length */}
        <div className="mb-6">
          <p className="text-sm mb-3 font-medium" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>Cycle Length (days)</p>
          <div className="flex flex-wrap gap-2">
            {cycleLengths.map((c) => <Pill key={c} label={`${c}`} selected={cycleLen === c} onTap={() => setCycleLen(c)} />)}
          </div>
        </div>

        {/* Period length */}
        <div className="mb-8">
          <p className="text-sm mb-3 font-medium" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>Period Length (days)</p>
          <div className="flex flex-wrap gap-2">
            {periodLengths.map((p) => <Pill key={p} label={`${p}`} selected={periodLen === p} onTap={() => setPeriodLen(p)} />)}
          </div>
        </div>

        <button className="w-full rounded-2xl py-4 text-sm font-semibold cursor-pointer transition-all duration-300"
          style={{
            background: allSet ? "linear-gradient(135deg, #c4b5e0, #d4b483)" : "rgba(255,255,255,0.06)",
            color: allSet ? "#1a0e2e" : "rgba(255,255,255,0.3)",
            fontFamily: "system-ui",
          }}>
          {allSet ? "Continue" : "Select all to continue"}
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 3 ? 18 : 6, height: 6,
              background: i === 3 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 3 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
