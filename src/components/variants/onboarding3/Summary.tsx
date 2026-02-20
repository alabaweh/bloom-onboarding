"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Summary: Warm recap card with sunrise gradient header, privacy badge, CTA
 */

import { useState } from "react";

const summaryItems = [
  { label: "Age Range", value: "25-34", icon: "\u{2600}" },
  { label: "Cycle Length", value: "28 days", icon: "\u{1F504}" },
  { label: "Period Length", value: "5 days", icon: "\u{1F4C5}" },
  { label: "Goals", value: "Track cycle, Wellness", icon: "\u{2728}" },
  { label: "Notifications", value: "3 active", icon: "\u{1F514}" },
];

export default function Summary() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10" style={{ background: "#fff8f0" }}>
      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}>
        Your Solara
      </h2>
      <p className="text-sm mb-6" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        Everything looks warm and ready
      </p>

      {/* Recap card */}
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden mb-6"
        style={{ border: "1.5px solid #ffcba4", boxShadow: "0 4px 24px rgba(212,160,96,0.15)" }}
      >
        {/* Sunrise gradient header */}
        <div
          className="px-5 py-4"
          style={{ background: "linear-gradient(135deg, #c06840, #d4a060, #ffcba4)" }}
        >
          <h3 className="text-lg font-bold" style={{ fontFamily: "Georgia, serif", color: "#fff8f0" }}>
            Your Profile
          </h3>
          <p className="text-xs mt-0.5" style={{ fontFamily: "system-ui", color: "#ffecd2" }}>
            Personalized just for you
          </p>
        </div>

        {/* Summary rows */}
        <div style={{ background: "#fff" }}>
          {summaryItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-5 py-3.5"
              style={{
                borderBottom: i < summaryItems.length - 1 ? "1px solid #ffecd2" : "none",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm" style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.7 }}>
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-semibold" style={{ fontFamily: "system-ui", color: "#3d2520" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-2xl mb-6" style={{ background: "#ffecd2" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c06840" strokeWidth="2">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="text-xs font-medium" style={{ fontFamily: "system-ui", color: "#3d2520" }}>
          Your data stays on your device
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={() => setStarted(true)}
        className="w-full max-w-sm py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
        style={{
          fontFamily: "Georgia, serif",
          background: started
            ? "linear-gradient(135deg, #d4a060, #c06840)"
            : "linear-gradient(135deg, #c06840, #d4a060)",
          color: "#fff8f0",
          boxShadow: started
            ? "0 2px 8px rgba(192,104,64,0.2)"
            : "0 6px 24px rgba(192,104,64,0.35)",
          transform: started ? "scale(0.98)" : "scale(1)",
        }}
      >
        {started ? "Welcome to Solara" : "Begin Your Journey"}
      </button>
    </div>
  );
}
