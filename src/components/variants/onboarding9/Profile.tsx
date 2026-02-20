"use client";
import { useState } from "react";

export default function Profile() {
  const [age, setAge] = useState("");
  const [cycleLen, setCycleLen] = useState("28");
  const [activity, setActivity] = useState("");

  const cycleLengths = ["24", "25", "26", "27", "28", "29", "30", "31", "32", "35+"];
  const activities = ["Sedentary", "Light", "Moderate", "Active", "Intense"];

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes driftBlob { 0%,100% { transform: translate(0,0); } 50% { transform: translate(10px,-15px); } }
      `}</style>

      {/* Background blobs */}
      <div className="absolute rounded-full" style={{
        width: 280, height: 280, top: -80, right: -60,
        background: "radial-gradient(circle, #8b5cf6 0%, #ff6467 70%, transparent 90%)",
        filter: "blur(50px)", opacity: 0.4, animation: "driftBlob 10s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 200, height: 200, bottom: 60, left: -40,
        background: "radial-gradient(circle, #fbbf24 0%, #38bdf8 70%, transparent 90%)",
        filter: "blur(45px)", opacity: 0.35, animation: "driftBlob 12s ease-in-out infinite",
      }} />

      <div className="relative z-10 flex-1 flex flex-col items-center">
        <h2 className="text-3xl font-black text-center mb-1" style={{ color: "#111111" }}>
          About You
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: "#6b7280" }}>
          Let&apos;s personalize your experience
        </p>

        {/* Age input */}
        <div className="w-full max-w-sm mb-6">
          <label className="text-sm font-bold mb-2 block" style={{ color: "#111111" }}>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-5 py-3 rounded-full text-sm outline-none transition-all duration-300"
            style={{
              border: age ? "2px solid #8b5cf6" : "2px solid #e5e7eb",
              background: age ? "#8b5cf610" : "#f9fafb",
              color: "#111111",
            }}
          />
        </div>

        {/* Cycle length pills */}
        <div className="w-full max-w-sm mb-6">
          <label className="text-sm font-bold mb-2 block" style={{ color: "#111111" }}>
            Avg Cycle Length (days)
          </label>
          <div className="flex flex-wrap gap-2">
            {cycleLengths.map((len) => (
              <button
                key={len}
                onClick={() => setCycleLen(len)}
                className="px-4 py-2 rounded-full text-sm font-semibold border-0 cursor-pointer transition-all duration-300"
                style={{
                  background: cycleLen === len
                    ? "linear-gradient(135deg, #8b5cf6, #ff6467)"
                    : "#f3f4f6",
                  color: cycleLen === len ? "#ffffff" : "#6b7280",
                  transform: cycleLen === len ? "scale(1.05)" : "scale(1)",
                }}
              >
                {len}
              </button>
            ))}
          </div>
        </div>

        {/* Activity level */}
        <div className="w-full max-w-sm mb-8">
          <label className="text-sm font-bold mb-2 block" style={{ color: "#111111" }}>
            Activity Level
          </label>
          <div className="flex flex-wrap gap-2">
            {activities.map((a) => (
              <button
                key={a}
                onClick={() => setActivity(a)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border-0 cursor-pointer transition-all duration-300"
                style={{
                  background: activity === a
                    ? "linear-gradient(135deg, #ff6467, #fbbf24)"
                    : "#f3f4f6",
                  color: activity === a ? "#ffffff" : "#6b7280",
                  transform: activity === a ? "scale(1.05)" : "scale(1)",
                }}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        <button
          className="px-10 py-3.5 rounded-full text-base font-bold border-0 cursor-pointer transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #ff6467)",
            color: "#ffffff",
            opacity: age && activity ? 1 : 0.5,
          }}
        >
          Continue
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 3 ? 24 : 8, height: 8,
              background: i === 3 ? "linear-gradient(90deg, #8b5cf6, #ff6467)" : "#e5e7eb",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
