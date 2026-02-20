"use client";

import { useState } from "react";

/**
 * VARIANT E — "Pulse"
 * Concept: Terminal / data matrix calendar. Cyberpunk clinical aesthetic.
 * Black bg, neon pink accent, monospace grid, blinking cursor selection.
 */
export default function PeriodE() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  const dayNames = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

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

  const padDay = (d: number) => String(d).padStart(2, "0");

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-10 overflow-hidden"
      style={{
        background: "#0a0a0a",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,62,138,0.02) 2px, rgba(255,62,138,0.02) 4px)",
        }}
      />

      {/* Pulsing corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 opacity-30"
        style={{ borderColor: "#ff3e8a", animation: "pulseCorner 2s ease-in-out infinite" }} />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 opacity-30"
        style={{ borderColor: "#ff3e8a", animation: "pulseCorner 2s ease-in-out infinite 0.5s" }} />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 opacity-30"
        style={{ borderColor: "#ff3e8a", animation: "pulseCorner 2s ease-in-out infinite 1s" }} />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 opacity-30"
        style={{ borderColor: "#ff3e8a", animation: "pulseCorner 2s ease-in-out infinite 1.5s" }} />

      {/* Header */}
      <div className="w-full max-w-sm z-10 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#ff3e8a]"
            style={{ animation: "pulseBlink 1s ease-in-out infinite", boxShadow: "0 0 6px #ff3e8a" }} />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#ff3e8a]/60">
            SYS.PERIOD_INPUT
          </span>
        </div>

        <div className="mb-4" style={{ borderBottom: "1px solid rgba(255, 62, 138, 0.1)" }}>
          <p className="text-xs text-white/20 mb-1">{"> query: last_period_start"}</p>
          <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
            PERIOD <span style={{ color: "#ff3e8a" }}>START</span> DATE
          </h1>
          <p className="text-xs text-white/20 mb-3">
            {"// Select the start date of your most recent cycle"}
          </p>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between text-[9px] tracking-wider text-white/15 uppercase">
          <span>STATUS: {selectedDate ? "DATE_SELECTED" : "AWAITING_INPUT"}</span>
          <span>{monthNames[currentMonth]}.{currentYear}</span>
        </div>
      </div>

      {/* Terminal calendar */}
      <div
        className="w-full max-w-sm z-10 p-4 relative"
        style={{
          background: "rgba(255, 62, 138, 0.02)",
          border: "1px solid rgba(255, 62, 138, 0.1)",
        }}
      >
        {/* Month navigation row */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="text-xs text-[#ff3e8a]/40 hover:text-[#ff3e8a] transition-colors tracking-wider"
          >
            {"<< PREV"}
          </button>
          <div className="text-center">
            <span className="text-sm font-bold text-[#ff3e8a] tracking-[0.2em]">
              {monthNames[currentMonth]}
            </span>
            <span className="text-sm text-white/30 ml-2">{currentYear}</span>
          </div>
          <button
            onClick={nextMonth}
            className="text-xs text-[#ff3e8a]/40 hover:text-[#ff3e8a] transition-colors tracking-wider"
          >
            {"NEXT >>"}
          </button>
        </div>

        {/* Separator line */}
        <div className="mb-3 text-[10px] text-white/10 tracking-widest text-center overflow-hidden whitespace-nowrap">
          {"----+----+----+----+----+----+----"}
        </div>

        {/* Day header row */}
        <div className="grid grid-cols-7 gap-0 mb-1">
          {dayNames.map((d) => (
            <div
              key={d}
              className="text-center text-[10px] tracking-[0.15em] font-bold py-1"
              style={{
                color: "#ff3e8a",
                opacity: 0.5,
                borderBottom: "1px solid rgba(255, 62, 138, 0.08)",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Data grid */}
        <div className="grid grid-cols-7 gap-0">
          {blanks.map((_, i) => (
            <div
              key={`blank-${i}`}
              className="aspect-square flex items-center justify-center text-[10px] text-white/5"
              style={{ borderRight: "1px solid rgba(255, 62, 138, 0.03)" }}
            >
              --
            </div>
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
                className="relative aspect-square flex items-center justify-center transition-all duration-150"
                style={{
                  borderRight: "1px solid rgba(255, 62, 138, 0.03)",
                  borderBottom: "1px solid rgba(255, 62, 138, 0.03)",
                  cursor: future ? "not-allowed" : "pointer",
                  background: selected
                    ? "rgba(255, 62, 138, 0.15)"
                    : todayMark
                    ? "rgba(255, 62, 138, 0.04)"
                    : "transparent",
                }}
              >
                {/* Blinking cursor border for selected */}
                {selected && (
                  <div
                    className="absolute inset-0"
                    style={{
                      border: "1px solid #ff3e8a",
                      boxShadow: "0 0 8px rgba(255, 62, 138, 0.4), inset 0 0 8px rgba(255, 62, 138, 0.1)",
                      animation: "pulseBorder 1.2s ease-in-out infinite",
                    }}
                  />
                )}

                {/* Today marker: corner brackets */}
                {todayMark && !selected && (
                  <>
                    <div className="absolute top-[2px] left-[2px] w-2 h-2 border-l border-t"
                      style={{ borderColor: "rgba(255, 62, 138, 0.3)" }} />
                    <div className="absolute bottom-[2px] right-[2px] w-2 h-2 border-r border-b"
                      style={{ borderColor: "rgba(255, 62, 138, 0.3)" }} />
                  </>
                )}

                <span
                  className={`relative z-10 text-xs transition-colors ${
                    selected ? "font-bold" : "font-normal"
                  }`}
                  style={{
                    color: selected
                      ? "#ff3e8a"
                      : future
                      ? "rgba(255,255,255,0.07)"
                      : todayMark
                      ? "#ff3e8a"
                      : "rgba(255,255,255,0.35)",
                    textShadow: selected ? "0 0 8px rgba(255, 62, 138, 0.6)" : "none",
                  }}
                >
                  {padDay(day)}
                </span>

                {/* Blinking cursor after selected date */}
                {selected && (
                  <div
                    className="absolute right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-3"
                    style={{
                      background: "#ff3e8a",
                      animation: "terminalCursor 0.8s step-end infinite",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom separator */}
        <div className="mt-3 text-[10px] text-white/10 tracking-widest text-center overflow-hidden whitespace-nowrap">
          {"----+----+----+----+----+----+----"}
        </div>
      </div>

      {/* Selected date readout */}
      <div className="w-full max-w-sm z-10 mt-4">
        <div
          className="p-3"
          style={{
            background: "rgba(255, 62, 138, 0.02)",
            border: "1px solid rgba(255, 62, 138, 0.06)",
          }}
        >
          <div className="flex items-start gap-2">
            <span className="text-[10px] text-[#ff3e8a]/30">{">"}</span>
            {selectedDate ? (
              <div className="text-xs">
                <span className="text-white/20">output: </span>
                <span className="text-[#ff3e8a] font-bold">
                  {selectedDate}
                </span>
                <span className="text-white/20"> // </span>
                <span className="text-white/30">
                  {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            ) : (
              <span className="text-xs text-white/15">
                awaiting date selection
                <span
                  className="inline-block w-[6px] h-[12px] ml-1 align-middle"
                  style={{
                    background: "#ff3e8a",
                    animation: "terminalCursor 0.8s step-end infinite",
                    opacity: 0.5,
                  }}
                />
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="w-full max-w-sm z-10 mt-auto pt-6 space-y-3">
        <button
          disabled={!selectedDate}
          className="w-full h-14 font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 relative overflow-hidden"
          style={{
            background: selectedDate ? "transparent" : "transparent",
            color: selectedDate ? "#ff3e8a" : "rgba(255, 62, 138, 0.15)",
            border: selectedDate
              ? "2px solid #ff3e8a"
              : "2px solid rgba(255, 62, 138, 0.08)",
            boxShadow: selectedDate
              ? "0 0 20px rgba(255, 62, 138, 0.2), inset 0 0 20px rgba(255, 62, 138, 0.05)"
              : "none",
            cursor: selectedDate ? "pointer" : "not-allowed",
          }}
        >
          {selectedDate && (
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255, 62, 138, 0.08), transparent)",
                animation: "pulseSweep 2s ease-in-out infinite",
              }}
            />
          )}
          <span className="relative z-10">
            {selectedDate ? "[CONFIRM]" : "[AWAITING INPUT]"}
          </span>
        </button>

        <button className="w-full text-center text-[10px] text-white/15 tracking-[0.2em] uppercase hover:text-white/30 transition-colors py-2">
          {">> SKIP_STEP"}
        </button>
      </div>

      {/* Bottom status line */}
      <div className="w-full max-w-sm z-10 mt-4 flex items-center justify-between text-[8px] text-white/10 tracking-widest uppercase">
        <span>BLOOM.OS v2.1</span>
        <span className="flex items-center gap-1">
          <div className="w-1 h-1 rounded-full"
            style={{
              background: selectedDate ? "#ff3e8a" : "#333",
              boxShadow: selectedDate ? "0 0 4px #ff3e8a" : "none",
            }}
          />
          {selectedDate ? "READY" : "IDLE"}
        </span>
      </div>

      <style jsx>{`
        @keyframes pulseBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes terminalCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulseBorder {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes pulseCorner {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        @keyframes pulseSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
