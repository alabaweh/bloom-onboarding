"use client";
import { useState, useEffect } from "react";

export default function Period() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 30 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 4,
    })));
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const monthName = today.toLocaleString("default", { month: "long" });
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getMoonPhase = (day: number): number => {
    const jd = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 2)) + day - 1524.5;
    const phase = ((jd - 2451550.1) / 29.530588853) % 1;
    return phase < 0 ? phase + 1 : phase;
  };

  const renderMoon = (phase: number, size: number, active: boolean) => {
    const fill = active ? "#f5d882" : "rgba(245,216,130,0.25)";
    const shadow = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
    return (
      <svg width={size} height={size} viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="6" fill={fill} opacity={active ? 0.9 : 0.4} />
        {shadow < 0.95 && (
          <circle cx={8 + (phase < 0.5 ? 4 * (1 - shadow) : -4 * (1 - shadow))} cy="8" r="5.5"
            fill={active ? "#1a0533" : "#0c0a1d"} opacity={0.85} />
        )}
      </svg>
    );
  };

  const calendarDays: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`@keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }`}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.4,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
        LUNAR CALENDAR
      </h2>
      <p className="text-center text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        When did your last period start?
      </p>

      <div className="max-w-sm mx-auto w-full flex-1">
        <div className="flex items-center justify-between mb-5 px-2">
          <button className="border-0 bg-transparent cursor-pointer p-1" style={{ color: "rgba(245,216,130,0.5)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M12 4l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
          <span className="text-base tracking-[0.15em] font-light" style={{ color: "#f5d882" }}>
            {monthName.toUpperCase()} {year}
          </span>
          <button className="border-0 bg-transparent cursor-pointer p-1" style={{ color: "rgba(245,216,130,0.5)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M8 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((d) => (
            <div key={d} className="text-center text-xs py-1" style={{ color: "rgba(245,216,130,0.3)" }}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, i) => {
            if (!day) return <div key={i} />;
            const isSelected = selectedDay === day;
            const isToday = day === today.getDate();
            const phase = getMoonPhase(day);
            return (
              <button key={i} onClick={() => setSelectedDay(day)}
                className="flex flex-col items-center justify-center py-1.5 rounded-lg border-0 cursor-pointer"
                style={{
                  background: isSelected ? "rgba(245,216,130,0.15)" : "transparent",
                  border: isSelected ? "1px solid rgba(245,216,130,0.4)" : "1px solid transparent",
                  boxShadow: isSelected ? "0 0 15px rgba(245,216,130,0.15)" : "none",
                  transition: "all 0.2s ease",
                }}>
                {renderMoon(phase, 16, isSelected)}
                <span className="text-xs mt-0.5" style={{
                  color: isSelected ? "#f5d882" : isToday ? "rgba(245,216,130,0.8)" : "rgba(255,255,255,0.35)",
                  fontWeight: isToday ? 600 : 400,
                }}>
                  {day}
                </span>
              </button>
            );
          })}
        </div>

        {selectedDay && (
          <div className="mt-4 text-center p-3 rounded-xl" style={{ background: "rgba(245,216,130,0.05)", border: "1px solid rgba(245,216,130,0.1)" }}>
            <p className="text-xs" style={{ color: "rgba(245,216,130,0.6)" }}>
              Selected: {monthName} {selectedDay}, {year}
            </p>
          </div>
        )}
      </div>

      <button className="mt-6 mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{
          background: selectedDay ? "linear-gradient(135deg, #f5d882, #d4a843)" : "rgba(245,216,130,0.1)",
          color: selectedDay ? "#0c0a1d" : "rgba(245,216,130,0.3)",
          transition: "all 0.4s ease",
        }}>
        Continue
      </button>
    </div>
  );
}
