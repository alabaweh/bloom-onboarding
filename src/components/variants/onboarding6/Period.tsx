"use client";
import { useState } from "react";

export default function Period() {
  const [selectedDay, setSelectedDay] = useState(14);
  const month = "February";
  const year = 2026;
  const daysInMonth = 28;
  const startOffset = 0; // Feb 2026 starts on Sunday
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Record</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Last Period Start</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      {/* Calendar card */}
      <div
        className="rounded-xl p-5 w-full max-w-sm"
        style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      >
        {/* Month header */}
        <div className="flex items-center justify-between mb-4">
          <button className="w-8 h-8 rounded-lg border-0 cursor-pointer flex items-center justify-center" style={{ backgroundColor: "#f0f4f8", color: "#4b7bec" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <span className="text-sm font-medium" style={{ color: "#1e293b" }}>{month} {year}</span>
          <button className="w-8 h-8 rounded-lg border-0 cursor-pointer flex items-center justify-center" style={{ backgroundColor: "#f0f4f8", color: "#4b7bec" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Gray grid line */}
        <div className="w-full h-px mb-3" style={{ backgroundColor: "#e2e8f0" }} />

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((d) => (
            <div key={d} className="text-center text-[11px] py-1 font-medium" style={{ color: "#94a3b8" }}>{d}</div>
          ))}
        </div>

        <div className="w-full h-px mb-2" style={{ backgroundColor: "#f1f5f9" }} />

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startOffset }).map((_, i) => (
            <div key={`e${i}`} className="w-9 h-9" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = day === selectedDay;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className="w-9 h-9 rounded-full text-xs border-0 cursor-pointer flex items-center justify-center mx-auto transition-all duration-200"
                style={{
                  backgroundColor: isSelected ? "#4b7bec" : "transparent",
                  color: isSelected ? "#ffffff" : "#334155",
                  fontWeight: isSelected ? 600 : 400,
                  boxShadow: isSelected ? "0 2px 8px rgba(75,123,236,0.3)" : "none",
                }}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Bottom grid line */}
        <div className="w-full h-px mt-3" style={{ backgroundColor: "#e2e8f0" }} />
      </div>

      {/* Selected date */}
      {selectedDay && (
        <div className="mt-4 px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
          <p className="text-sm" style={{ color: "#334155" }}>
            Selected: <span className="font-medium" style={{ color: "#4b7bec" }}>{month} {selectedDay}, {year}</span>
          </p>
        </div>
      )}

      {/* Page dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 4 ? 20 : 6, height: 6, backgroundColor: i === 4 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
