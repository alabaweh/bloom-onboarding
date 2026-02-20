"use client";

import { useState } from "react";

/**
 * VARIANT B — "Topographic"
 * Concept: Ultra-clean editorial / Swiss-modernist calendar grid.
 * Cream bg, black text, red circle selection. Helvetica-style precision.
 */
export default function PeriodB() {
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

  return (
    <div className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden bg-[#fafaf8]">
      {/* Subtle topo contour lines in background */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 900" fill="none">
        {Array.from({ length: 15 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 + Math.sin(i * 0.6) * 30}
            cy={450 + i * 5}
            rx={180 - i * 11}
            ry={140 - i * 8}
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
            transform={`rotate(${i * 2}, 200, 450)`}
          />
        ))}
      </svg>

      {/* Top section */}
      <div className="w-full max-w-sm z-10 mb-10">
        <div className="flex items-center justify-between mb-10">
          <div className="w-3 h-3 rounded-full bg-[#c8352e]" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#1a1a1a]/30 font-medium">
            Step 04
          </p>
        </div>

        <h1
          className="text-4xl font-bold text-[#1a1a1a] tracking-[-0.03em] leading-[1.1] mb-3"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Last period
          <br />
          start date.
        </h1>
        <div className="w-10 h-[2px] bg-[#c8352e] mb-4" />
        <p className="text-sm text-[#1a1a1a]/35 font-light leading-relaxed max-w-[280px]">
          When did your most recent menstrual cycle begin? Select the date below.
        </p>
      </div>

      {/* Calendar */}
      <div className="w-full max-w-sm z-10">
        {/* Month navigation - editorial style */}
        <div className="flex items-end justify-between mb-6 border-b border-[#1a1a1a]/10 pb-4">
          <div>
            <span
              className="text-5xl font-bold text-[#1a1a1a] tracking-[-0.04em] leading-none"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              {monthNames[currentMonth]}
            </span>
            <span className="text-lg text-[#1a1a1a]/25 ml-3 font-light">{currentYear}</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <button
              onClick={prevMonth}
              className="w-8 h-8 flex items-center justify-center text-[#1a1a1a]/30 hover:text-[#1a1a1a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              onClick={nextMonth}
              className="w-8 h-8 flex items-center justify-center text-[#1a1a1a]/30 hover:text-[#1a1a1a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Day names row */}
        <div className="grid grid-cols-7 mb-2">
          {dayNames.map((d) => (
            <div
              key={d}
              className="text-center text-[10px] tracking-[0.15em] uppercase text-[#1a1a1a]/25 font-medium py-2"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Grid with visible cell borders */}
        <div className="grid grid-cols-7 border-t border-l border-[#1a1a1a]/[0.07]">
          {blanks.map((_, i) => (
            <div
              key={`blank-${i}`}
              className="border-r border-b border-[#1a1a1a]/[0.07]"
              style={{ aspectRatio: "1" }}
            />
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
                className="relative border-r border-b border-[#1a1a1a]/[0.07] flex items-center justify-center transition-all duration-200 group"
                style={{
                  aspectRatio: "1",
                  cursor: future ? "not-allowed" : "pointer",
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                {/* Red circle for selected */}
                {selected && (
                  <div
                    className="absolute inset-1 rounded-full bg-[#c8352e]"
                    style={{
                      animation: "topoScaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  />
                )}

                {/* Today underline */}
                {todayMark && !selected && (
                  <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-[1.5px] bg-[#c8352e]" />
                )}

                <span
                  className={`relative z-10 text-sm font-medium transition-colors ${
                    selected
                      ? "text-white"
                      : future
                      ? "text-[#1a1a1a]/12"
                      : todayMark
                      ? "text-[#c8352e] font-bold"
                      : "text-[#1a1a1a]/70 group-hover:text-[#1a1a1a]"
                  }`}
                >
                  {day}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected date */}
      {selectedDate && (
        <div className="mt-6 z-10 text-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c8352e]" />
            <p
              className="text-xs text-[#1a1a1a]/40 font-medium tracking-wide"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
              {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      )}

      {/* Bottom buttons */}
      <div className="w-full max-w-sm z-10 mt-auto pt-8 space-y-3">
        <button
          disabled={!selectedDate}
          className="w-full h-14 font-medium text-sm tracking-[0.15em] uppercase transition-all duration-300"
          style={{
            background: selectedDate ? "#1a1a1a" : "#1a1a1a10",
            color: selectedDate ? "#fafaf8" : "#1a1a1a30",
            cursor: selectedDate ? "pointer" : "not-allowed",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          }}
        >
          Continue
        </button>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#1a1a1a]/[0.06]" />
          <button className="text-[10px] text-[#1a1a1a]/25 tracking-[0.2em] uppercase hover:text-[#1a1a1a]/50 transition-colors">
            Skip
          </button>
          <div className="h-px flex-1 bg-[#1a1a1a]/[0.06]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes topoScaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
