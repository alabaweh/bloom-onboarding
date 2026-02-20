"use client";

import { useState } from "react";

/**
 * VARIANT A — "Celestial"
 * Concept: Lunar calendar / star map. Days arranged in concentric orbital rings.
 * Night sky gradient, gold accent, constellation-style day markers.
 */
export default function PeriodA() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    const nextM = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextY = currentMonth === 11 ? currentYear + 1 : currentYear;
    const futureCheck = new Date(nextY, nextM, 1);
    if (futureCheck > new Date(today.getFullYear(), today.getMonth() + 1, 0)) return;
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isFuture = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return date > today;
  };

  const formatDate = (day: number) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isSelected = (day: number) => selectedDate === formatDate(day);

  const isToday = (day: number) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  // Orbital layout: place days in concentric rings
  const totalCells = blanks.length + days.length;
  const ringCapacities = [8, 12, 16, 20]; // days per ring
  const rings: { day: number | null; ring: number; angle: number; index: number }[] = [];
  let cellIndex = 0;

  for (let r = 0; r < ringCapacities.length && cellIndex < totalCells; r++) {
    const cap = ringCapacities[r];
    for (let i = 0; i < cap && cellIndex < totalCells; i++) {
      const actualDay = cellIndex < blanks.length ? null : cellIndex - blanks.length + 1;
      rings.push({
        day: actualDay,
        ring: r,
        angle: (i / cap) * 360 - 90,
        index: cellIndex,
      });
      cellIndex++;
    }
  }

  const ringRadii = [60, 95, 130, 165];
  const centerX = 190;
  const centerY = 190;

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)" }}
    >
      {/* Star field */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `celestialTwinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Header */}
      <div className="text-center z-10 mb-6">
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#f5d882]/50 mb-2 font-medium">
          Lunar Calendar
        </p>
        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
          When Did Your Last
        </h1>
        <h1 className="text-2xl font-bold text-[#f5d882] tracking-tight">
          Period Begin?
        </h1>
        <p className="text-xs text-purple-300/50 mt-3 max-w-[220px] mx-auto leading-relaxed">
          Select the start date on the celestial map below
        </p>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between w-full max-w-[260px] z-10 mb-4">
        <button onClick={prevMonth} className="text-[#f5d882]/60 hover:text-[#f5d882] transition-colors p-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <span className="text-sm text-white/80 tracking-[0.15em] uppercase font-medium">
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button onClick={nextMonth} className="text-[#f5d882]/60 hover:text-[#f5d882] transition-colors p-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Orbital Calendar */}
      <div className="relative z-10" style={{ width: 380, height: 380 }}>
        <svg width="380" height="380" viewBox="0 0 380 380" className="absolute inset-0">
          {/* Orbital rings */}
          {ringRadii.map((r, i) => (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={r}
              fill="none"
              stroke="rgba(245, 216, 130, 0.06)"
              strokeWidth="1"
              strokeDasharray={i % 2 === 0 ? "none" : "4 4"}
            />
          ))}
          {/* Center moon */}
          <circle cx={centerX} cy={centerY} r="22" fill="url(#moonGrad)" />
          <defs>
            <radialGradient id="moonGrad" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#fffbe6" />
              <stop offset="60%" stopColor="#f5d882" />
              <stop offset="100%" stopColor="#c9a23c" />
            </radialGradient>
          </defs>
        </svg>

        {/* Day markers on orbits */}
        {rings.map((item, idx) => {
          if (item.day === null) return null;
          const rad = (item.angle * Math.PI) / 180;
          const r = ringRadii[item.ring];
          const x = centerX + r * Math.cos(rad);
          const y = centerY + r * Math.sin(rad);
          const future = isFuture(item.day);
          const selected = isSelected(item.day);
          const todayMark = isToday(item.day);

          return (
            <button
              key={idx}
              disabled={future}
              onClick={() => setSelectedDate(formatDate(item.day!))}
              className="absolute flex items-center justify-center transition-all duration-300"
              style={{
                width: selected ? 34 : 28,
                height: selected ? 34 : 28,
                borderRadius: "50%",
                left: x - (selected ? 17 : 14),
                top: y - (selected ? 17 : 14),
                background: selected
                  ? "radial-gradient(circle at 40% 35%, #fffbe6, #f5d882)"
                  : todayMark
                  ? "rgba(245, 216, 130, 0.15)"
                  : "rgba(255,255,255, 0.04)",
                border: todayMark && !selected
                  ? "1px solid rgba(245, 216, 130, 0.4)"
                  : selected
                  ? "none"
                  : "1px solid rgba(255,255,255, 0.06)",
                boxShadow: selected
                  ? "0 0 20px rgba(245, 216, 130, 0.5), 0 0 40px rgba(245, 216, 130, 0.2)"
                  : "none",
                opacity: future ? 0.2 : 1,
                cursor: future ? "not-allowed" : "pointer",
                fontSize: selected ? 11 : 10,
                fontWeight: selected ? 700 : todayMark ? 600 : 400,
                color: selected
                  ? "#0c0a1d"
                  : todayMark
                  ? "#f5d882"
                  : "rgba(255,255,255,0.55)",
              }}
            >
              {item.day}
            </button>
          );
        })}
      </div>

      {/* Day names legend */}
      <div className="flex gap-4 mt-3 z-10">
        {dayNames.map((d) => (
          <span key={d} className="text-[9px] tracking-wider text-purple-400/30 uppercase">
            {d}
          </span>
        ))}
      </div>

      {/* Selected date display */}
      {selectedDate && (
        <div className="mt-5 z-10 text-center animate-fadeInCelestial">
          <p className="text-xs text-purple-300/50">
            Selected:{" "}
            <span className="text-[#f5d882] font-semibold">
              {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
      )}

      {/* Continue button */}
      <div className="w-full max-w-sm z-10 mt-6 space-y-3">
        <button
          disabled={!selectedDate}
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            background: selectedDate
              ? "linear-gradient(135deg, #f5d882, #e8c55a)"
              : "rgba(245, 216, 130, 0.15)",
            color: selectedDate ? "#0c0a1d" : "rgba(245, 216, 130, 0.3)",
            boxShadow: selectedDate ? "0 4px 24px rgba(245, 216, 130, 0.3)" : "none",
            cursor: selectedDate ? "pointer" : "not-allowed",
          }}
        >
          Continue
        </button>
        <button className="w-full text-center text-xs text-purple-400/40 hover:text-purple-300/60 transition-colors py-2">
          I don&apos;t remember &middot; Skip
        </button>
      </div>

      <style jsx>{`
        @keyframes celestialTwinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
        @keyframes fadeInCelestial {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInCelestial {
          animation: fadeInCelestial 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
