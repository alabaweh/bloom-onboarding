"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Summary
 * Editorial recap with three numbered sections,
 * red accent CTA.
 */
export default function Summary() {
  const [ready, setReady] = useState(false);

  const sections = [
    {
      num: "01",
      label: "Profile",
      items: [
        { key: "Age", value: "25-30" },
        { key: "Cycle", value: "28 days" },
        { key: "Conditions", value: "None" },
      ],
    },
    {
      num: "02",
      label: "Tracking",
      items: [
        { key: "Last Period", value: "Feb 12, 2025" },
        { key: "Symptoms", value: "4 selected" },
        { key: "Goals", value: "2 active" },
      ],
    },
    {
      num: "03",
      label: "Signals",
      items: [
        { key: "Notifications", value: "3 active" },
        { key: "Insights", value: "Weekly" },
        { key: "Reminders", value: "Enabled" },
      ],
    },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse key={i} cx={200} cy={400} rx={80 + i * 40} ry={100 + i * 50} stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
        ))}
        <circle cx={200} cy={400} r={8} fill="#c8352e" opacity="0.15" />
      </svg>

      {/* Header */}
      <div className="z-10 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "system-ui", opacity: 0.35 }}>
          Vela / Summary
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Your Terrain<br />Overview
        </h1>
        <div className="w-8 h-px bg-[#c8352e] mt-4" />
      </div>

      {/* Summary sections */}
      <div className="z-10 flex-1 flex flex-col gap-0">
        {sections.map((s, idx) => (
          <div key={idx}>
            {/* Section header */}
            <div className="flex items-baseline gap-3 mb-4 mt-2">
              <span className="text-[11px] tracking-[0.2em]"
                style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>
                {s.num}
              </span>
              <span className="text-xs uppercase tracking-[0.25em]"
                style={{ fontFamily: "system-ui", opacity: 0.4 }}>
                {s.label}
              </span>
              <div className="flex-1 h-px bg-[#1a1a1a] opacity-[0.06]" />
            </div>

            {/* Items */}
            <div className="mb-6">
              {s.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid rgba(26,26,26,0.04)" }}
                >
                  <span className="text-[12px]" style={{ fontFamily: "system-ui", opacity: 0.4 }}>
                    {item.key}
                  </span>
                  <span className="text-[12px] tracking-wide"
                    style={{ fontFamily: "ui-monospace, monospace", opacity: 0.7 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Red rule between sections */}
            {idx < sections.length - 1 && (
              <div className="w-full h-px bg-[#c8352e] opacity-15 mb-4" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full space-y-4">
        <div className="w-full h-px bg-[#1a1a1a] opacity-[0.08]" />
        <p className="text-[11px] text-center leading-relaxed" style={{ fontFamily: "system-ui", opacity: 0.3 }}>
          Your terrain has been mapped. Ready to begin tracking.
        </p>
        <button
          onClick={() => setReady(true)}
          className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em] transition-colors"
          style={{
            background: ready ? "#c8352e" : "#c8352e",
            color: "#fafaf8",
            fontFamily: "system-ui",
          }}
        >
          Begin Tracking
        </button>
        <div className="flex items-center justify-center gap-4 pt-1">
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-1 h-1 bg-[#1a1a1a] opacity-15" />
          <div className="w-6 h-px bg-[#c8352e]" />
        </div>
      </div>
    </div>
  );
}
