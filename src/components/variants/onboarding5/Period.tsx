"use client";
import { useState } from "react";

export default function Period() {
  const [selected, setSelected] = useState<number | null>(null);
  const today = 18;

  const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const startOffset = 5;
  const totalDays = 28;
  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute bottom-[-20px] right-[-20px] w-36 h-36 opacity-10" style={{ background: "#9caa8b", borderRadius: "50% 40% 60% 50% / 40% 60% 45% 55%" }} />

      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>When did it start?</h2>
      <p className="text-sm mb-6" style={{ color: "#8b6b4a" }}>Select the first day of your last period</p>

      <div className="w-full max-w-sm">
        {/* Month header */}
        <div className="flex justify-between items-center mb-4 px-2">
          <span className="text-lg font-bold" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>February 2026</span>
          <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ background: "#e8d5c0" }}>
            <svg width="14" height="14" viewBox="0 0 20 20"><path d="M8 4 L14 10 L8 16" stroke="#8b6b4a" strokeWidth="2" fill="none" /></svg>
          </div>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {dayLabels.map((d) => (
            <div key={d} className="text-center text-xs py-2 font-medium" style={{ color: "#8b6b4a" }}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 p-3 rounded-3xl" style={{ background: "#e8d5c020" }}>
          {cells.map((day, i) => {
            const isSelected = day === selected;
            const isToday = day === today;
            return (
              <button key={i} onClick={() => day && setSelected(day)} className="flex items-center justify-center transition-all duration-200 cursor-pointer" style={{
                width: 42, height: 42, border: "none", borderRadius: isSelected ? "50% 45% 55% 50% / 45% 55% 50% 50%" : "50%",
                background: isSelected ? "#c27a56" : "transparent",
                color: isSelected ? "#fff" : day ? "#3a2e24" : "transparent",
                fontWeight: isSelected || isToday ? 700 : 400,
                fontSize: 14, fontFamily: "system-ui, sans-serif",
                boxShadow: isToday && !isSelected ? "inset 0 0 0 2px #9caa8b" : "none",
              }}>
                {day || ""}
              </button>
            );
          })}
        </div>

        {/* Selected date display */}
        {selected && (
          <div className="mt-4 py-3 px-5 text-center rounded-2xl" style={{ background: "#e8d5c0" }}>
            <span className="text-sm" style={{ color: "#3a2e24" }}>Selected: </span>
            <span className="text-sm font-bold" style={{ color: "#c27a56" }}>February {selected}, 2026</span>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 4 ? 24 : 8, background: i === 4 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
