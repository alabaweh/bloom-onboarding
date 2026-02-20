"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Period Date Picker
 * Ultra-clean calendar grid with visible cell borders,
 * red circle on selected date, Helvetica-style typography.
 */
export default function Period() {
  const [selected, setSelected] = useState<number | null>(null);

  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const currentMonth = "February";
  const currentYear = "2025";
  const startDay = 5; // Saturday start offset for Feb 2025
  const totalDays = 28;

  const blanks = Array.from({ length: startDay }, (_, i) => i);
  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d={`M-20 ${150 + i * 60} Q100 ${130 + i * 60} 200 ${155 + i * 60} T420 ${145 + i * 60}`} stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-8">
        <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "system-ui", opacity: 0.35 }}>
          Vela / Period
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Last Period<br />Start Date
        </h1>
        <p className="text-xs mt-2" style={{ opacity: 0.35, fontFamily: "system-ui" }}>
          Select the first day of your most recent period.
        </p>
      </div>

      {/* Month/Year header */}
      <div className="z-10 flex items-baseline justify-between mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
            {currentMonth}
          </span>
          <span className="text-[11px] tracking-[0.15em]"
            style={{ fontFamily: "ui-monospace, monospace", opacity: 0.35 }}>
            {currentYear}
          </span>
        </div>
        <div className="flex gap-4">
          <button className="text-[10px] uppercase tracking-[0.2em]" style={{ opacity: 0.3 }}>Prev</button>
          <button className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#c8352e" }}>Next</button>
        </div>
      </div>

      {/* Day headers */}
      <div className="z-10 grid grid-cols-7 mb-0">
        {days.map((d, i) => (
          <div key={i} className="h-10 flex items-center justify-center border border-[#1a1a1a]/[0.06]"
            style={{ fontFamily: "system-ui" }}>
            <span className="text-[10px] uppercase tracking-[0.2em]" style={{ opacity: 0.3 }}>{d}</span>
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="z-10 grid grid-cols-7 flex-1">
        {blanks.map((_, i) => (
          <div key={`b-${i}`} className="h-12 border border-[#1a1a1a]/[0.06]" />
        ))}
        {dates.map((d) => (
          <button key={d} onClick={() => setSelected(d)}
            className="h-12 flex items-center justify-center border border-[#1a1a1a]/[0.06] rounded-none transition-colors relative"
            style={{ fontFamily: "ui-monospace, monospace" }}>
            {selected === d && (
              <div className="absolute inset-1 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#c8352e]" />
              </div>
            )}
            <span className="relative text-[13px]" style={{
              color: selected === d ? "#fafaf8" : "#1a1a1a",
              opacity: selected === d ? 1 : 0.6,
            }}>
              {d}
            </span>
          </button>
        ))}
      </div>

      {/* Selected indicator */}
      {selected && (
        <div className="z-10 flex items-center gap-3 mt-4 mb-2">
          <div className="w-2 h-2 bg-[#c8352e]" />
          <span className="text-[11px] tracking-[0.15em]" style={{ fontFamily: "ui-monospace, monospace", opacity: 0.5 }}>
            {currentMonth.toUpperCase()} {selected}, {currentYear}
          </span>
        </div>
      )}

      {/* Bottom */}
      <div className="z-10 mt-4 w-full">
        <button className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{
            background: selected ? "#1a1a1a" : "#1a1a1a",
            color: "#fafaf8",
            fontFamily: "system-ui",
            opacity: selected ? 1 : 0.3,
          }}>
          Continue
        </button>
      </div>
    </div>
  );
}
