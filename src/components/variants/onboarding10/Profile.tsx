"use client";
import { useState } from "react";

export default function Profile() {
  const [age, setAge] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [selected, setSelected] = useState<string | null>(null);

  const cycleLengths = ["24", "26", "28", "30", "32", "34"];
  const goals = ["Track periods", "Plan pregnancy", "Understand patterns", "Manage symptoms"];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        About You
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Help us craft your experience
      </p>

      <div className="max-w-sm mx-auto w-full relative z-10 space-y-5">
        {/* Age card */}
        <div className="rounded-xl p-5" style={{
          background: "#fff", transform: "rotate(-0.5deg)",
          boxShadow: "0 2px 8px rgba(74,55,40,0.1), 0 4px 16px rgba(74,55,40,0.08)",
        }}>
          <label className="text-sm font-medium block mb-2" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
            Your age
          </label>
          <input
            type="number" value={age} onChange={e => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: "#faf5eb", border: "1px solid #e8ddd0", color: "#4a3728" }}
          />
        </div>

        {/* Cycle length card */}
        <div className="rounded-xl p-5" style={{
          background: "#fff", transform: "rotate(0.5deg)",
          boxShadow: "0 2px 8px rgba(74,55,40,0.1), 0 4px 16px rgba(74,55,40,0.08)",
        }}>
          <label className="text-sm font-medium block mb-3" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
            Typical cycle length
          </label>
          <div className="flex flex-wrap gap-2">
            {cycleLengths.map(c => (
              <button key={c} onClick={() => setCycleLength(c)}
                className="px-4 py-2 rounded-lg text-xs font-medium border-0 cursor-pointer transition-all duration-200"
                style={{
                  background: cycleLength === c ? "#e8735a" : "#faf5eb",
                  color: cycleLength === c ? "#fff" : "#4a3728",
                  transform: cycleLength === c ? "rotate(-1deg) scale(1.05)" : "rotate(0deg)",
                  boxShadow: cycleLength === c ? "0 2px 8px rgba(232,115,90,0.3)" : "none",
                }}>
                {c} days
              </button>
            ))}
          </div>
        </div>

        {/* Primary goal card */}
        <div className="rounded-xl p-5" style={{
          background: "#fff", transform: "rotate(-0.3deg)",
          boxShadow: "0 2px 8px rgba(74,55,40,0.1), 0 4px 16px rgba(74,55,40,0.08)",
        }}>
          <label className="text-sm font-medium block mb-3" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
            Primary goal
          </label>
          <div className="space-y-2">
            {goals.map(g => (
              <button key={g} onClick={() => setSelected(g)}
                className="w-full text-left px-4 py-3 rounded-lg text-sm border-0 cursor-pointer transition-all duration-200"
                style={{
                  background: selected === g ? "rgba(232,115,90,0.1)" : "#faf5eb",
                  color: "#4a3728",
                  borderLeft: selected === g ? "3px solid #e8735a" : "3px solid transparent",
                  transform: selected === g ? "rotate(-0.5deg)" : "none",
                  boxShadow: selected === g ? "0 2px 8px rgba(74,55,40,0.08)" : "none",
                }}>
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 3 ? 18 : 6, height: 6,
            background: i === 3 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
