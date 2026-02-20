"use client";
import { useState } from "react";

export default function Period() {
  const [selectedDay, setSelectedDay] = useState(14);
  const [month, setMonth] = useState(1);
  const [year] = useState(2026);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = daysInMonth[month];

  const prevMonth = () => setMonth((m) => (m === 0 ? 11 : m - 1));
  const nextMonth = () => setMonth((m) => (m === 11 ? 0 : m + 1));

  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Background blobs */}
      <div className="absolute rounded-full" style={{
        width: 300, height: 300, top: -100, left: -50,
        background: "radial-gradient(circle, #ff6467, #fbbf24 70%, transparent 90%)",
        filter: "blur(55px)", opacity: 0.35,
      }} />
      <div className="absolute rounded-full" style={{
        width: 250, height: 250, bottom: -50, right: -60,
        background: "radial-gradient(circle, #38bdf8, #8b5cf6 70%, transparent 90%)",
        filter: "blur(50px)", opacity: 0.3,
      }} />

      <div className="relative z-10 w-full max-w-sm">
        <h2 className="text-3xl font-black text-center mb-1" style={{ color: "#111111" }}>
          Last Period
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: "#6b7280" }}>
          When did your last period start?
        </p>

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="w-10 h-10 rounded-full border-0 cursor-pointer flex items-center justify-center text-lg font-bold"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ff6467)", color: "#fff" }}>
            &larr;
          </button>
          <span className="text-xl font-black" style={{ color: "#111111" }}>
            {months[month]} {year}
          </span>
          <button onClick={nextMonth} className="w-10 h-10 rounded-full border-0 cursor-pointer flex items-center justify-center text-lg font-bold"
            style={{ background: "linear-gradient(135deg, #ff6467, #fbbf24)", color: "#fff" }}>
            &rarr;
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div key={d} className="text-center text-xs font-bold py-1" style={{ color: "#9ca3af" }}>
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {blanks.map((b) => (
            <div key={`blank-${b}`} className="w-full aspect-square" />
          ))}
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className="w-full aspect-square rounded-2xl border-0 cursor-pointer flex items-center justify-center text-sm font-bold transition-all duration-200 relative"
              style={{
                background: selectedDay === day
                  ? "linear-gradient(135deg, #8b5cf6, #ff6467, #fbbf24)"
                  : "transparent",
                color: selectedDay === day ? "#ffffff" : "#111111",
                transform: selectedDay === day ? "scale(1.1)" : "scale(1)",
              }}
            >
              {day}
            </button>
          ))}
        </div>

        {selectedDay && (
          <p className="text-center text-sm font-semibold mt-6" style={{ color: "#8b5cf6" }}>
            Selected: {months[month]} {selectedDay}, {year}
          </p>
        )}

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 4 ? 24 : 8, height: 8,
              background: i === 4 ? "linear-gradient(90deg, #ff6467, #fbbf24)" : "#e5e7eb",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
