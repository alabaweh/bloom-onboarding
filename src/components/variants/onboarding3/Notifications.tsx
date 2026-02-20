"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Notifications: Toggle switches with amber/terracotta active states
 */

import { useState } from "react";

const notifications = [
  { key: "period", label: "Period Reminders", desc: "Get notified before your period starts" },
  { key: "fertile", label: "Fertile Window", desc: "Know your most fertile days" },
  { key: "symptoms", label: "Symptom Check-in", desc: "Daily gentle reminder to log" },
  { key: "insights", label: "Weekly Insights", desc: "Personalized cycle summaries" },
  { key: "wellness", label: "Wellness Tips", desc: "Cycle-synced health suggestions" },
];

export default function Notifications() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    period: true,
    fertile: true,
    symptoms: false,
    insights: false,
    wellness: false,
  });

  const toggle = (key: string) => {
    setEnabled((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full"
        style={{
          background: "radial-gradient(circle, #ffcba4 0%, transparent 70%)",
          opacity: 0.25,
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      <h2 className="text-3xl font-bold mb-1 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        Stay in Tune
      </h2>
      <p className="text-sm mb-8 relative z-10" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        Choose what feels right for you
      </p>

      <div className="w-full max-w-sm flex flex-col gap-3 relative z-10">
        {notifications.map((n) => {
          const isOn = enabled[n.key];
          return (
            <div
              key={n.key}
              className="rounded-2xl p-4 flex items-center justify-between transition-all duration-200"
              style={{
                background: isOn ? "#ffecd2" : "#fff",
                border: `1.5px solid ${isOn ? "#d4a060" : "#ffcba4"}`,
              }}
            >
              <div className="flex-1 mr-4">
                <h3 className="text-sm font-semibold" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
                  {n.label}
                </h3>
                <p className="text-xs mt-0.5" style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.6 }}>
                  {n.desc}
                </p>
              </div>

              {/* Toggle switch */}
              <button
                onClick={() => toggle(n.key)}
                className="relative w-12 h-7 rounded-full transition-all duration-300 shrink-0"
                style={{
                  background: isOn
                    ? "linear-gradient(135deg, #c06840, #d4a060)"
                    : "#ffecd2",
                  border: `1px solid ${isOn ? "#c06840" : "#ffcba4"}`,
                }}
              >
                <div
                  className="absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300"
                  style={{
                    background: isOn ? "#fff8f0" : "#d4a060",
                    left: isOn ? 22 : 2,
                    boxShadow: "0 1px 4px rgba(61,37,32,0.15)",
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Summary count */}
      <p className="mt-6 text-xs relative z-10" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        {Object.values(enabled).filter(Boolean).length} of {notifications.length} enabled
      </p>
    </div>
  );
}
