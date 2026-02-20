"use client";
import { useState } from "react";

const goals = [
  { title: "Track My Cycle", desc: "Stay aware of each phase and duration", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Plan Ahead", desc: "Predict and prepare with confidence", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { title: "Manage Symptoms", desc: "Understand patterns and ease discomfort", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { title: "Fertility Awareness", desc: "Know your fertile window precisely", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

export default function Goals() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (i: number) => setSelected((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Focus</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Your Goals</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {goals.map((g, i) => {
          const isActive = selected.includes(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="relative rounded-xl p-4 text-left cursor-pointer transition-all duration-300 border-0"
              style={{
                backgroundColor: "#ffffff",
                border: `1.5px solid ${isActive ? "#4b7bec" : "#e2e8f0"}`,
                boxShadow: isActive ? "0 4px 16px rgba(75,123,236,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
                transform: isActive ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {/* Check icon */}
              {isActive && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "#4b7bec" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M2 5L4 7L8 3" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: isActive ? "#4b7bec" : "#f0f4f8" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#ffffff" : "#94a3b8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={g.icon} />
                </svg>
              </div>

              <h3 className="text-sm font-medium mb-0.5" style={{ color: "#1e293b" }}>{g.title}</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: "#94a3b8" }}>{g.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Page dots */}
      <div className="flex gap-2 mt-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 6 ? 20 : 6, height: 6, backgroundColor: i === 6 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
