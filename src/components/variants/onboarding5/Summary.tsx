"use client";
import { useState } from "react";

export default function Summary() {
  const [pressed, setPressed] = useState(false);

  const summary = [
    { label: "Cycle length", value: "28 days" },
    { label: "Period length", value: "5 days" },
    { label: "Age range", value: "25-30" },
    { label: "Symptoms", value: "4 tracked" },
    { label: "Goals", value: "3 selected" },
    { label: "Reminders", value: "3 active" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      {/* Background blobs */}
      <div className="absolute top-[-40px] left-[-30px] w-44 h-44 opacity-10" style={{ background: "#9caa8b", borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />
      <div className="absolute bottom-[-30px] right-[-20px] w-40 h-40 opacity-10" style={{ background: "#c27a56", borderRadius: "45% 55% 60% 40% / 55% 45% 40% 60%" }} />

      <h2 className="text-3xl font-bold mb-1 text-center" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>You are ready</h2>
      <p className="text-sm mb-6" style={{ color: "#8b6b4a" }}>Your Terra profile at a glance</p>

      {/* Clay-textured summary card */}
      <div className="w-full max-w-sm p-6 mb-6 relative" style={{
        background: "linear-gradient(145deg, #e8d5c0, #f0dece, #e5cfb8)",
        borderRadius: "30px 36px 32px 34px / 34px 30px 36px 32px",
        boxShadow: "0 6px 24px #8b6b4a15",
        border: "2px solid #c27a5620",
      }}>
        {/* Organic decorative border shape */}
        <div className="absolute top-3 right-3 w-8 h-8 opacity-20" style={{ background: "#c27a56", borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%" }} />

        <div className="space-y-3">
          {summary.map((row) => (
            <div key={row.label} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid #c27a5615" }}>
              <span className="text-sm" style={{ color: "#8b6b4a" }}>{row.label}</span>
              <span className="text-sm font-bold" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Privacy badge */}
        <div className="flex items-center gap-2 mt-5 py-2 px-4 rounded-2xl" style={{ background: "#f5ede3" }}>
          <svg width="14" height="14" viewBox="0 0 20 20">
            <rect x="6" y="9" width="8" height="8" rx="1.5" fill="#9caa8b" />
            <path d="M7 9 V6 Q7 3, 10 3 Q13 3, 13 6 V9" stroke="#9caa8b" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="text-xs" style={{ color: "#8b6b4a" }}>Your data stays private and secure</span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        className="px-10 py-4 text-white text-lg font-medium transition-all duration-200"
        style={{
          background: pressed ? "#a8663f" : "#c27a56",
          borderRadius: "40% 60% 50% 50% / 60% 40% 60% 40%",
          fontFamily: "Georgia, serif",
          transform: pressed ? "scale(0.96)" : "scale(1)",
          boxShadow: "0 4px 16px #c27a5630",
          border: "none",
          cursor: "pointer",
        }}
      >
        Begin your journey
      </button>

      <div className="flex gap-2 mt-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 8 ? 24 : 8, background: i === 8 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
