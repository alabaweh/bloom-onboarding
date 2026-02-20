"use client";
import { useState } from "react";

const summaryItems = [
  { label: "Cycle Length", value: "28 days" },
  { label: "Period Duration", value: "5 days" },
  { label: "Last Period", value: "Feb 14, 2026" },
  { label: "Symptoms Tracked", value: "4 selected" },
  { label: "Goals", value: "Track & Plan" },
  { label: "Notifications", value: "3 active" },
];

export default function Summary() {
  const [started, setStarted] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Review</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Your Setup</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      {/* Recap card */}
      <div
        className="rounded-xl p-6 w-full max-w-sm"
        style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      >
        {/* Frost header */}
        <div className="text-center mb-5">
          <h3 className="text-lg font-light tracking-wider" style={{ color: "#4b7bec" }}>Frost</h3>
          <div className="w-8 h-px mx-auto mt-1" style={{ backgroundColor: "#4b7bec", opacity: 0.4 }} />
        </div>

        {/* Summary rows */}
        <div className="space-y-0">
          {summaryItems.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between items-center py-3">
                <span className="text-sm" style={{ color: "#94a3b8" }}>{item.label}</span>
                <span className="text-sm font-medium" style={{ color: "#4b7bec" }}>{item.value}</span>
              </div>
              {i < summaryItems.length - 1 && <div className="w-full h-px" style={{ backgroundColor: "#f1f5f9" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Privacy badge */}
      <div className="flex items-center gap-2 mt-5 px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b7bec" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="text-[10px]" style={{ color: "#94a3b8" }}>Your data is encrypted and stored locally</span>
      </div>

      {/* CTA */}
      <button
        onClick={() => setStarted(true)}
        className="mt-6 px-10 py-3.5 rounded-xl text-sm font-medium tracking-wider border-0 cursor-pointer transition-all duration-300"
        style={{
          backgroundColor: started ? "#22c55e" : "#4b7bec",
          color: "#ffffff",
          boxShadow: started ? "0 4px 12px rgba(34,197,94,0.3)" : "0 4px 12px rgba(75,123,236,0.2)",
        }}
      >
        {started ? "Welcome to Frost" : "Start Tracking"}
      </button>

      {/* Page dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 8 ? 20 : 6, height: 6, backgroundColor: i === 8 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
