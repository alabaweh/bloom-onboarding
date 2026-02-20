"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Goals: Goal cards with sunrise glow on selection, terracotta check marks
 */

import { useState } from "react";

const goals = [
  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Track my cycle", desc: "Know when your period is coming" },
  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Plan pregnancy", desc: "Understand your fertile window" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Improve wellness", desc: "Sync habits with your cycle" },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", label: "Spot patterns", desc: "Discover trends in your symptoms" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Period reminders", desc: "Never be caught off guard" },
];

export default function Goals() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        Your Goals
      </h2>
      <p className="text-sm mb-8" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        What matters most to you?
      </p>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        {goals.map((g) => {
          const isActive = selected.has(g.label);
          return (
            <button
              key={g.label}
              onClick={() => toggle(g.label)}
              className="relative rounded-2xl p-4 text-left transition-all duration-300 flex items-center gap-4"
              style={{
                background: isActive ? "#ffecd2" : "#fff",
                border: `1.5px solid ${isActive ? "#c06840" : "#ffcba4"}`,
                boxShadow: isActive ? "0 4px 16px rgba(192,104,64,0.2)" : "0 1px 6px rgba(212,160,96,0.08)",
              }}
            >
              {/* Sunrise glow on selected */}
              {isActive && (
                <div
                  className="absolute -top-2 -right-2 w-16 h-16 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #ffcba420, transparent 70%)",
                  }}
                />
              )}
              <svg
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke={isActive ? "#c06840" : "#d4a060"} strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" className="shrink-0"
              >
                <path d={g.icon} />
              </svg>
              <div className="flex-1">
                <h3 className="text-sm font-semibold" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
                  {g.label}
                </h3>
                <p className="text-xs mt-0.5" style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.6 }}>
                  {g.desc}
                </p>
              </div>
              {/* Terracotta check */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all"
                style={{
                  background: isActive ? "#c06840" : "transparent",
                  border: `2px solid ${isActive ? "#c06840" : "#ffcba4"}`,
                }}
              >
                {isActive && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff8f0" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
