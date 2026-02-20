"use client";
import { useState, useEffect } from "react";

export default function Period() {
  const [visible, setVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(14);
  const [selectedMonth, setSelectedMonth] = useState("February");
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const months = ["January", "February", "March"];
  const daysInMonth = 28;
  const startDayOffset = 5; // Friday start

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const blanks = Array.from({ length: startDayOffset }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background washes */}
      <div className="absolute" style={{
        width: 250, height: 250, bottom: "5%", right: "-10%",
        borderRadius: "50% 45% 55% 48% / 48% 52% 46% 54%",
        background: "radial-gradient(ellipse, rgba(196,181,224,0.2) 0%, transparent 70%)",
        filter: "blur(45px)",
      }} />

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>Last Period</h2>
      <p className="text-center text-sm mb-8 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.15s both" : "none",
      }}>When did your last brushstroke begin?</p>

      {/* Month selector */}
      <div className="flex justify-center gap-3 mb-6 relative z-10" style={{
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.2s both" : "none",
      }}>
        {months.map((m) => (
          <button key={m} onClick={() => setSelectedMonth(m)}
            className="px-5 py-2 rounded-full border-0 cursor-pointer text-xs"
            style={{
              background: selectedMonth === m ? "rgba(249,168,201,0.15)" : "transparent",
              color: selectedMonth === m ? "#f9a8c9" : "rgba(61,44,44,0.4)",
              fontWeight: selectedMonth === m ? 400 : 300, transition: "all 0.3s ease",
            }}>{m}</button>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="max-w-sm mx-auto w-full relative z-10 rounded-3xl p-5" style={{
        background: "rgba(254,254,254,0.95)", border: "1px solid rgba(249,168,201,0.1)",
        boxShadow: "0 4px 32px rgba(249,168,201,0.06)",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.3s both" : "none",
      }}>
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {dayNames.map((d, i) => (
            <div key={i} className="text-center text-xs py-1" style={{ color: "rgba(61,44,44,0.35)", fontWeight: 300 }}>{d}</div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1">
          {blanks.map((b) => <div key={`b${b}`} />)}
          {days.map((d) => (
            <button key={d} onClick={() => setSelectedDay(d)}
              className="relative w-full aspect-square rounded-full border-0 cursor-pointer flex items-center justify-center text-sm"
              style={{
                background: selectedDay === d ? "transparent" : "transparent",
                color: selectedDay === d ? "#fefefe" : "rgba(61,44,44,0.55)",
                fontWeight: 300, transition: "all 0.3s ease", zIndex: 1,
              }}>
              {/* Watercolor blob behind selected */}
              {selectedDay === d && (
                <div className="absolute inset-0" style={{
                  borderRadius: "48% 52% 45% 55% / 50% 46% 54% 50%",
                  background: "radial-gradient(ellipse at 45% 45%, #f9a8c9 0%, rgba(249,168,201,0.7) 60%, rgba(249,168,201,0.2) 100%)",
                  filter: "blur(2px)", transform: "scale(1.2)",
                }} />
              )}
              <span className="relative z-10">{d}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedDay && (
        <p className="text-center text-sm mt-6 relative z-10" style={{ color: "rgba(61,44,44,0.45)", fontWeight: 300 }}>
          Selected: {selectedMonth} {selectedDay}
        </p>
      )}

      <button className="block mx-auto mt-auto px-10 py-3.5 rounded-full text-sm tracking-widest border-0 cursor-pointer relative z-10"
        style={{
          background: "linear-gradient(135deg, #f9a8c9, #e898b8)", color: "#fefefe",
          fontWeight: 400, letterSpacing: "0.12em", boxShadow: "0 8px 32px rgba(249,168,201,0.25)",
        }}>Continue</button>

      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 4 ? 18 : 6, height: 6,
            background: i === 4 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
