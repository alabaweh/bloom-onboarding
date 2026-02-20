"use client";
import { useState } from "react";

export default function Period() {
  const [selected, setSelected] = useState<number | null>(null);
  const today = 18;
  const year = 2026;
  const month = 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const monthName = new Date(year, month).toLocaleString("en", { month: "long" });
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks: (number | null)[] = Array.from({ length: firstDay }, () => null);
  const grid = [...blanks, ...days];
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < grid.length; i += 7) weeks.push(grid.slice(i, i + 7));

  const headers = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      <div className="absolute" style={{
        width: 240, height: 240, borderRadius: "50%",
        background: "radial-gradient(circle, #c97b8b 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.15, top: "8%", right: "-5%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          Last Period Start
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          When did your most recent period begin?
        </p>

        {/* Calendar */}
        <div className="rounded-2xl p-5" style={{
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <p className="text-center text-base font-semibold mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
            {monthName} {year}
          </p>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {headers.map((h) => (
              <div key={h} className="text-center text-xs py-1"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "system-ui" }}>{h}</div>
            ))}
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-1">
              {week.map((day, di) => {
                const isSel = selected === day;
                const isToday = day === today;
                return (
                  <button key={di} disabled={day === null}
                    onClick={() => day && setSelected(day)}
                    className="text-center text-sm py-2 rounded-2xl cursor-pointer transition-all duration-200"
                    style={{
                      background: isSel ? "rgba(196,181,224,0.3)" : "transparent",
                      color: day === null ? "transparent" : isSel ? "#c4b5e0" : "rgba(255,255,255,0.6)",
                      border: isToday && !isSel ? "1px solid #d4b483" : isSel ? "1px solid #c4b5e0" : "1px solid transparent",
                      fontFamily: "system-ui",
                      boxShadow: isToday ? "0 0 8px rgba(212,180,131,0.2)" : "none",
                    }}>
                    {day ?? ""}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {selected && (
          <p className="text-sm text-center mt-4" style={{ color: "#d4b483", fontFamily: "system-ui" }}>
            Selected: {monthName} {selected}, {year}
          </p>
        )}

        <button className="w-full mt-6 rounded-2xl py-4 text-sm font-semibold cursor-pointer"
          style={{
            background: selected ? "linear-gradient(135deg, #c4b5e0, #d4b483)" : "rgba(255,255,255,0.06)",
            color: selected ? "#1a0e2e" : "rgba(255,255,255,0.3)",
            fontFamily: "system-ui",
          }}>
          {selected ? "Continue" : "Select a date"}
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 4 ? 18 : 6, height: 6,
              background: i === 4 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 4 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
