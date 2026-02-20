"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Period: Calendar with warm grid, terracotta selection, peach today marker
 */

import { useState } from "react";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const today = new Date();
const todayDate = today.getDate();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const monthName = today.toLocaleString("default", { month: "long", year: "numeric" });

export default function Period() {
  const [selected, setSelected] = useState<number | null>(null);

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        Last Period
      </h2>
      <p className="text-sm mb-6" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        When did your last period start?
      </p>

      {/* Calendar card */}
      <div
        className="w-full max-w-sm rounded-2xl p-5"
        style={{ background: "#fff", border: "1.5px solid #ffcba4", boxShadow: "0 4px 20px rgba(212,160,96,0.1)" }}
      >
        <h3 className="text-center text-base font-semibold mb-4" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
          {monthName}
        </h3>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((d, i) => (
            <div key={i} className="text-center text-xs font-medium py-1" style={{ fontFamily: "system-ui", color: "#d4a060" }}>
              {d}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            const isSelected = day === selected;
            const isToday = day === todayDate;
            return (
              <button
                key={i}
                onClick={() => day && setSelected(day)}
                disabled={!day}
                className="aspect-square flex items-center justify-center rounded-full text-sm transition-all duration-200 relative"
                style={{
                  fontFamily: "system-ui",
                  background: isSelected ? "#c06840" : "transparent",
                  color: isSelected ? "#fff8f0" : day ? "#3d2520" : "transparent",
                  fontWeight: isSelected || isToday ? 600 : 400,
                }}
              >
                {day || ""}
                {isToday && !isSelected && (
                  <span
                    className="absolute bottom-0.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#ffcba4" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected date display */}
      {selected && (
        <div
          className="mt-5 px-5 py-3 rounded-2xl flex items-center gap-2"
          style={{ background: "#ffecd2", border: "1px solid #d4a060" }}
        >
          <div className="w-3 h-3 rounded-full" style={{ background: "#c06840" }} />
          <span className="text-sm font-medium" style={{ fontFamily: "system-ui", color: "#3d2520" }}>
            Started on {monthName.split(" ")[0]} {selected}
          </span>
        </div>
      )}

      {/* Warm bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to top, #ffecd2, transparent)", pointerEvents: "none" }}
      />
    </div>
  );
}
