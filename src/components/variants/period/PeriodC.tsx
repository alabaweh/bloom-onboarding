"use client";

import { useState } from "react";

/**
 * VARIANT C — "Aurora"
 * Concept: Frosted glass calendar floating over aurora gradients.
 * Dark bg, glassmorphism, aurora colors. Selected day glows with aurora light.
 */
export default function PeriodC() {
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
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora blobs */}
      <div
        className="absolute top-[-20%] left-[-30%] w-[80vw] h-[60vh] rounded-full opacity-30"
        style={{
          background: "radial-gradient(ellipse, #00d4aa 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "auroraFloat1 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[10%] right-[-20%] w-[60vw] h-[50vh] rounded-full opacity-25"
        style={{
          background: "radial-gradient(ellipse, #7b68ee 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "auroraFloat2 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[10%] w-[70vw] h-[40vh] rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse, #00bfff 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "auroraFloat3 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[40%] left-[20%] w-[50vw] h-[30vh] rounded-full opacity-15"
        style={{
          background: "radial-gradient(ellipse, #ff6ec7 0%, transparent 70%)",
          filter: "blur(90px)",
          animation: "auroraFloat1 14s ease-in-out infinite reverse",
        }}
      />

      {/* Header */}
      <div className="text-center z-10 mb-8">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{
            boxShadow: "0 0 6px rgba(0, 212, 170, 0.6)",
          }} />
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium">
            Period Tracking
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          When did your last
        </h1>
        <h1 className="text-3xl font-bold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #00d4aa, #7b68ee, #00bfff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          period start?
        </h1>
        <p className="text-xs text-white/30 mt-3 max-w-[240px] mx-auto leading-relaxed">
          Tap the date your most recent cycle began
        </p>
      </div>

      {/* Frosted glass calendar panel */}
      <div
        className="w-full max-w-sm z-10 rounded-3xl p-5 relative"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        }}
      >
        {/* Inner glow at top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0, 212, 170, 0.3), rgba(123, 104, 238, 0.3), transparent)",
          }}
        />

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={prevMonth}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/[0.06]"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <h3 className="text-sm font-semibold text-white/80 tracking-wide">
            {monthNames[currentMonth]} {currentYear}
          </h3>
          <button
            onClick={nextMonth}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white/[0.06]"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((d) => (
            <div key={d} className="text-center text-[10px] font-medium text-white/20 uppercase tracking-wider">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
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
                className="relative aspect-square rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  cursor: future ? "not-allowed" : "pointer",
                  background: selected
                    ? "rgba(0, 212, 170, 0.15)"
                    : todayMark
                    ? "rgba(255, 255, 255, 0.04)"
                    : "transparent",
                  border: selected
                    ? "1px solid rgba(0, 212, 170, 0.4)"
                    : todayMark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid transparent",
                  boxShadow: selected
                    ? "0 0 20px rgba(0, 212, 170, 0.2), 0 0 40px rgba(123, 104, 238, 0.1), inset 0 0 15px rgba(0, 212, 170, 0.1)"
                    : "none",
                }}
              >
                {/* Glow ring for selected */}
                {selected && (
                  <div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(0, 212, 170, 0.15), rgba(123, 104, 238, 0.15))",
                      animation: "auroraGlow 3s ease-in-out infinite",
                    }}
                  />
                )}
                <span
                  className={`relative z-10 text-sm font-medium ${
                    selected
                      ? "text-emerald-300 font-bold"
                      : future
                      ? "text-white/10"
                      : todayMark
                      ? "text-white/80 font-bold"
                      : "text-white/45 hover:text-white/70"
                  }`}
                  style={{
                    textShadow: selected ? "0 0 10px rgba(0, 212, 170, 0.5)" : "none",
                  }}
                >
                  {day}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected date display */}
      {selectedDate && (
        <div
          className="mt-5 z-10 px-5 py-2.5 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.06)",
            animation: "auroraFadeIn 0.4s ease-out",
          }}
        >
          <p className="text-xs text-white/40">
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #7b68ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
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
      <div className="w-full max-w-sm z-10 mt-auto pt-6 space-y-3">
        <button
          disabled={!selectedDate}
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            background: selectedDate
              ? "linear-gradient(135deg, #00d4aa, #7b68ee)"
              : "rgba(255,255,255,0.04)",
            color: selectedDate ? "#fff" : "rgba(255,255,255,0.15)",
            boxShadow: selectedDate
              ? "0 4px 24px rgba(0, 212, 170, 0.25), 0 0 60px rgba(123, 104, 238, 0.1)"
              : "none",
            border: selectedDate ? "none" : "1px solid rgba(255,255,255,0.06)",
            cursor: selectedDate ? "pointer" : "not-allowed",
          }}
        >
          Continue
        </button>
        <button className="w-full text-center text-xs text-white/20 hover:text-white/40 transition-colors py-2">
          I&apos;m not sure &middot; Skip this step
        </button>
      </div>

      <style jsx>{`
        @keyframes auroraFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        @keyframes auroraFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 15px) scale(1.05); }
        }
        @keyframes auroraFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.15); }
        }
        @keyframes auroraGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes auroraFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
