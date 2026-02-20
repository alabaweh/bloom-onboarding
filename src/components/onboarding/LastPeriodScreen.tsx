"use client";

import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface LastPeriodScreenProps {
  onNext: (date: string) => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function LastPeriodScreen({ onNext, onBack, onSkip }: LastPeriodScreenProps) {
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
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day: number) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  const isFuture = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    return date > today;
  };

  const formatDate = (day: number) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isSelected = (day: number) => selectedDate === formatDate(day);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-4">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Last Period Start
          </h2>
          <p className="text-sm text-gray-400 max-w-[260px] mx-auto">
            When did your most recent period begin?
          </p>
        </div>

        {/* Calendar */}
        <div className="w-full max-w-sm mx-auto bg-white rounded-3xl border border-gray-100 p-5 shadow-sm animate-scale-in animation-delay-200" style={{ opacity: 0 }}>
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-5">
            <button
              onClick={prevMonth}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-foreground hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <h3 className="text-sm font-semibold text-foreground">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={nextMonth}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-foreground hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-[10px] font-semibold text-gray-300 uppercase">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {blanks.map((_, i) => (
              <div key={`blank-${i}`} />
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
                  className={`w-full aspect-square rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-200 ${
                    selected
                      ? "text-white shadow-md"
                      : todayMark
                      ? "text-bloom-600 bg-bloom-50 font-bold"
                      : future
                      ? "text-gray-200 cursor-not-allowed"
                      : "text-gray-600 hover:bg-bloom-50 hover:text-bloom-600"
                  }`}
                  style={
                    selected
                      ? {
                          background: "linear-gradient(135deg, #ec4899, #a855f7)",
                          boxShadow: "0 2px 8px rgba(168, 85, 247, 0.3)",
                        }
                      : undefined
                  }
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected date display */}
        {selectedDate && (
          <div className="text-center mt-5 animate-fade-in">
            <p className="text-sm text-gray-500">
              Selected:{" "}
              <span className="font-semibold text-bloom-600">
                {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>
        )}
      </div>

      <NavigationButtons
        onNext={() => onNext(selectedDate)}
        onBack={onBack}
        onSkip={onSkip}
        showSkip={true}
        disabled={!selectedDate}
        nextLabel="Continue"
      />
    </div>
  );
}
