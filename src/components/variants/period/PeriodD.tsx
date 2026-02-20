"use client";

import { useState } from "react";

/**
 * VARIANT D — "Woven"
 * Concept: Handwritten journal / kraft paper calendar. Warm, tactile, personal.
 * Linen bg, brown text, copper accents. Hand-drawn circles for selection.
 */
export default function PeriodD() {
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

  // Generate a pseudo-random hand-drawn circle SVG path for each day
  const getHandDrawnCircle = (seed: number) => {
    const r = 15;
    const wobble = (i: number) => {
      const angle = (i / 12) * Math.PI * 2;
      const noise = Math.sin(seed * 7 + i * 3.7) * 2.5 + Math.cos(seed * 11 + i * 2.3) * 1.5;
      const x = (r + noise) * Math.cos(angle) + 18;
      const y = (r + noise) * Math.sin(angle) + 18;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    };
    const points = Array.from({ length: 13 }, (_, i) => wobble(i));
    return `M ${points[0]} C ${points.slice(1).join(" ")} ${points[0]}`;
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "#f7f3ee" }}
    >
      {/* Subtle linen texture via SVG noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <filter id="linenNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#linenNoise)" />
      </svg>

      {/* Decorative woven line border elements */}
      <div className="absolute top-8 left-6 right-6 flex items-center gap-2 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex-1 h-px" style={{ background: i % 2 === 0 ? "#3d2b1f" : "#c17f4e" }} />
        ))}
      </div>

      {/* Header */}
      <div className="text-center z-10 mt-8 mb-6">
        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-3"
          style={{ color: "#c17f4e", fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          ~ journal entry ~
        </p>
        <h1
          className="text-3xl font-bold tracking-tight mb-2"
          style={{
            color: "#3d2b1f",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Last Period Date
        </h1>
        <p
          className="text-sm leading-relaxed max-w-[260px] mx-auto"
          style={{
            color: "#3d2b1f80",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
          }}
        >
          When did your most recent cycle begin? Flip through the pages and mark the date.
        </p>
      </div>

      {/* Kraft paper calendar card */}
      <div
        className="w-full max-w-sm z-10 rounded-sm p-5 relative"
        style={{
          background: "linear-gradient(135deg, #f0e8db 0%, #ede4d4 50%, #e8dcc8 100%)",
          boxShadow: "0 2px 8px rgba(61, 43, 31, 0.08), 0 1px 2px rgba(61, 43, 31, 0.06)",
          border: "1px solid rgba(61, 43, 31, 0.08)",
        }}
      >
        {/* Torn paper top edge effect */}
        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
          <svg width="100%" height="4" viewBox="0 0 360 4" preserveAspectRatio="none">
            <path
              d="M0,2 Q10,0 20,2 Q30,4 40,2 Q50,0 60,2 Q70,4 80,2 Q90,0 100,2 Q110,4 120,2 Q130,0 140,2 Q150,4 160,2 Q170,0 180,2 Q190,4 200,2 Q210,0 220,2 Q230,4 240,2 Q250,0 260,2 Q270,4 280,2 Q290,0 300,2 Q310,4 320,2 Q330,0 340,2 Q350,4 360,2"
              stroke="rgba(61, 43, 31, 0.1)"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Journal hole punches */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: "#f7f3ee",
                border: "1px solid rgba(61, 43, 31, 0.12)",
                boxShadow: "inset 0 1px 2px rgba(61, 43, 31, 0.06)",
              }}
            />
          ))}
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-5 ml-5">
          <button
            onClick={prevMonth}
            className="p-1 transition-opacity hover:opacity-70"
          >
            <span style={{ color: "#c17f4e", fontSize: 18, fontFamily: "Georgia, serif" }}>&larr;</span>
          </button>
          <h3
            className="text-lg font-bold tracking-wide"
            style={{
              color: "#3d2b1f",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            {monthNames[currentMonth]}{" "}
            <span className="font-normal" style={{ color: "#3d2b1f60" }}>{currentYear}</span>
          </h3>
          <button
            onClick={nextMonth}
            className="p-1 transition-opacity hover:opacity-70"
          >
            <span style={{ color: "#c17f4e", fontSize: 18, fontFamily: "Georgia, serif" }}>&rarr;</span>
          </button>
        </div>

        {/* Horizontal ruled line */}
        <div className="ml-5 mb-3" style={{ borderTop: "1px dashed rgba(61, 43, 31, 0.12)" }} />

        {/* Day names */}
        <div className="grid grid-cols-7 gap-1 ml-5 mb-2">
          {dayNames.map((d) => (
            <div
              key={d}
              className="text-center text-[10px] font-medium uppercase"
              style={{
                color: "#3d2b1f50",
                fontFamily: "Georgia, 'Times New Roman', serif",
                letterSpacing: "0.1em",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 ml-5">
          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="aspect-square" />
          ))}
          {days.map((day) => {
            const future = isFuture(day);
            const selected = isSelected(day);
            const todayMark = isToday(day);

            return (
              <button
                key={day}
                disabled={future}
                onClick={() => setSelectedDate(formatDate(day))}
                className="relative aspect-square flex items-center justify-center transition-all duration-200"
                style={{
                  cursor: future ? "not-allowed" : "pointer",
                }}
              >
                {/* Hand-drawn circle for selected */}
                {selected && (
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 36 36"
                    fill="none"
                    style={{ animation: "wovenDrawCircle 0.4s ease-out" }}
                  >
                    <path
                      d={getHandDrawnCircle(day)}
                      stroke="#c17f4e"
                      strokeWidth="2"
                      fill="rgba(193, 127, 78, 0.08)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {/* Today: small dot below */}
                {todayMark && !selected && (
                  <div
                    className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#c17f4e" }}
                  />
                )}

                <span
                  className={`relative z-10 text-sm transition-colors ${
                    selected ? "font-bold" : future ? "font-normal" : todayMark ? "font-bold" : "font-normal"
                  }`}
                  style={{
                    color: selected
                      ? "#c17f4e"
                      : future
                      ? "#3d2b1f20"
                      : todayMark
                      ? "#c17f4e"
                      : "#3d2b1f90",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Horizontal ruled line bottom */}
        <div className="ml-5 mt-3" style={{ borderTop: "1px dashed rgba(61, 43, 31, 0.12)" }} />
      </div>

      {/* Selected date display */}
      {selectedDate && (
        <div className="mt-5 z-10 text-center" style={{ animation: "wovenFadeIn 0.4s ease-out" }}>
          <p
            className="text-sm"
            style={{
              color: "#3d2b1f60",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
            }}
          >
            Marked:{" "}
            <span className="font-bold not-italic" style={{ color: "#c17f4e" }}>
              {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
      )}

      {/* Bottom buttons */}
      <div className="w-full max-w-sm z-10 mt-auto pt-6 space-y-3">
        <button
          disabled={!selectedDate}
          className="w-full h-14 rounded-sm font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            background: selectedDate
              ? "linear-gradient(135deg, #c17f4e, #a8693f)"
              : "rgba(61, 43, 31, 0.06)",
            color: selectedDate ? "#f7f3ee" : "#3d2b1f30",
            boxShadow: selectedDate ? "0 2px 12px rgba(193, 127, 78, 0.25)" : "none",
            cursor: selectedDate ? "pointer" : "not-allowed",
            fontFamily: "Georgia, 'Times New Roman', serif",
            border: selectedDate ? "none" : "1px dashed rgba(61, 43, 31, 0.12)",
          }}
        >
          Turn the Page
        </button>
        <button
          className="w-full text-center text-xs py-2 hover:opacity-70 transition-opacity"
          style={{
            color: "#3d2b1f40",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
          }}
        >
          I can&apos;t quite recall &middot; Skip
        </button>
      </div>

      {/* Bottom woven border */}
      <div className="absolute bottom-8 left-6 right-6 flex items-center gap-2 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex-1 h-px" style={{ background: i % 2 === 0 ? "#c17f4e" : "#3d2b1f" }} />
        ))}
      </div>

      <style jsx>{`
        @keyframes wovenDrawCircle {
          from {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            opacity: 0;
          }
          to {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes wovenFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
