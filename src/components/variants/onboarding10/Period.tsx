"use client";
import { useState } from "react";

export default function Period() {
  const [selectedDay, setSelectedDay] = useState(14);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const blanks = Array.from({ length: firstDayOfWeek }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        Last Period
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        When did it last begin?
      </p>

      {/* Calendar paper card */}
      <div className="rounded-xl p-5 max-w-sm w-full relative z-10" style={{
        background: "#fff", transform: "rotate(-0.5deg)",
        boxShadow: "0 4px 16px rgba(74,55,40,0.12), 0 2px 6px rgba(74,55,40,0.06)",
      }}>
        {/* Paper curl effect - top right corner */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-xl">
          <div className="absolute -top-4 -right-4 w-8 h-8" style={{
            background: "linear-gradient(135deg, #faf5eb 50%, #e8ddd0 50%)",
            transform: "rotate(0deg)",
          }} />
        </div>

        <h3 className="text-center text-lg font-medium mb-4" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
          {monthName} {year}
        </h3>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map(d => (
            <div key={d} className="text-center text-xs py-1" style={{ color: "#4a3728", opacity: 0.4 }}>
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {blanks.map(b => <div key={`b-${b}`} />)}
          {days.map(d => (
            <button key={d} onClick={() => setSelectedDay(d)}
              className="aspect-square rounded-lg text-xs font-medium border-0 cursor-pointer transition-all duration-200 flex items-center justify-center"
              style={{
                background: selectedDay === d ? "#e8735a" : "transparent",
                color: selectedDay === d ? "#fff" : "#4a3728",
                boxShadow: selectedDay === d ? "0 2px 8px rgba(232,115,90,0.35)" : "none",
                transform: selectedDay === d ? "scale(1.15)" : "scale(1)",
                opacity: d > today.getDate() ? 0.3 : 1,
              }}>
              {d}
            </button>
          ))}
        </div>

        {/* Paper curl effect - bottom left corner */}
        <div className="absolute bottom-0 left-0 w-6 h-6 overflow-hidden rounded-bl-xl">
          <div className="absolute -bottom-3 -left-3 w-6 h-6" style={{
            background: "linear-gradient(315deg, #faf5eb 50%, #e8ddd0 50%)",
          }} />
        </div>
      </div>

      {selectedDay && (
        <p className="text-sm mt-4 relative z-10" style={{ color: "#4a3728", opacity: 0.65 }}>
          Selected: {monthName} {selectedDay}, {year}
        </p>
      )}

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 4 ? 18 : 6, height: 6,
            background: i === 4 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
