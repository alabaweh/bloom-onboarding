"use client";

import { useState } from "react";

export default function Period() {
  const [selected, setSelected] = useState<number[]>([]);
  const [fertile] = useState([10, 11, 12, 13, 14]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const startOffset = 3; // month starts on Wednesday

  const toggleDay = (d: number) => {
    setSelected((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
  };

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative">
      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center">
        When did your last period start?
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-6 text-center">
        Tap the days of your last period
      </p>

      <div style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: "20px 16px", width: "100%", maxWidth: 340,
      }}>
        <p style={{ fontFamily: "Georgia, serif", color: "rgba(255,255,255,0.7)", fontSize: "1rem", textAlign: "center" }} className="mb-4">
          January 2025
        </p>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((d, i) => (
            <div key={i} style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", textAlign: "center", padding: 4 }}>
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startOffset }).map((_, i) => <div key={`e-${i}`} />)}
          {days.map((d) => {
            const isPeriod = selected.includes(d);
            const isFertile = fertile.includes(d);
            return (
              <button key={d} onClick={() => toggleDay(d)} style={{
                width: 38, height: 38, borderRadius: "50%", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.8rem", fontWeight: isPeriod ? 700 : 400,
                background: isPeriod ? "linear-gradient(135deg, #d4a574, #c9a96e)" : "transparent",
                color: isPeriod ? "#0a1a14" : isFertile ? "#2d8a6e" : "rgba(255,255,255,0.55)",
                boxShadow: isPeriod ? "0 2px 10px rgba(212,165,116,0.4)" : "none",
                transition: "all 0.2s ease",
                position: "relative",
              }}>
                {d}
                {isFertile && !isPeriod && (
                  <span style={{ position: "absolute", bottom: 2, width: 4, height: 4, borderRadius: "50%", background: "#064e3b" }} />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4 mt-4 justify-center">
          <div className="flex items-center gap-1.5">
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "linear-gradient(135deg, #d4a574, #c9a96e)" }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>Period</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#064e3b" }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>Fertile window</span>
          </div>
        </div>
      </div>

      <button style={{
        background: selected.length > 0 ? "linear-gradient(135deg, #d4a574, #c9a96e)" : "rgba(255,255,255,0.08)",
        color: selected.length > 0 ? "#0a1a14" : "rgba(255,255,255,0.3)",
        fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none",
        cursor: selected.length > 0 ? "pointer" : "default",
        boxShadow: selected.length > 0 ? "0 4px 20px rgba(212,165,116,0.3)" : "none",
        transition: "all 0.3s ease",
      }} className="mt-6">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 5 of 9
      </p>
    </div>
  );
}
