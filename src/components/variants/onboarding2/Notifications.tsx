"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Notifications
 * Minimal horizontal line switches with sliding red dot indicator.
 * Ultra-clean toggle design.
 */
export default function Notifications() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    period: true,
    fertile: true,
    symptoms: false,
    insights: false,
    reminders: true,
  });

  const notifications = [
    { key: "period", num: "01", title: "Period Predictions", desc: "Get notified before your period starts" },
    { key: "fertile", num: "02", title: "Fertile Window", desc: "Alerts during your fertile days" },
    { key: "symptoms", num: "03", title: "Symptom Logging", desc: "Daily reminders to log symptoms" },
    { key: "insights", num: "04", title: "Weekly Insights", desc: "Cycle analysis and health patterns" },
    { key: "reminders", num: "05", title: "Wellness Tips", desc: "Phase-specific health recommendations" },
  ];

  const toggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCount = Object.values(toggles).filter(Boolean).length;

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M-20 ${60 + i * 55} Q200 ${40 + i * 55 + (i % 2 ? 20 : -10)} 420 ${60 + i * 55}`} stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "system-ui", opacity: 0.35 }}>
          Vela / Notifications
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Signal<br />Preferences
        </h1>
      </div>

      {/* Active count */}
      <div className="z-10 flex items-center gap-3 mb-8">
        <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>
          {String(activeCount).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-[#1a1a1a] opacity-[0.08]" />
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "system-ui", opacity: 0.3 }}>
          Active
        </span>
      </div>

      {/* Toggle list */}
      <div className="z-10 flex-1 flex flex-col">
        {notifications.map((n) => {
          const isOn = toggles[n.key];
          return (
            <div
              key={n.key}
              className="flex items-center justify-between py-5"
              style={{ borderBottom: "1px solid rgba(26,26,26,0.06)" }}
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[10px] tracking-[0.2em]"
                    style={{ fontFamily: "ui-monospace, monospace", color: isOn ? "#c8352e" : "#1a1a1a", opacity: isOn ? 1 : 0.2 }}>
                    {n.num}
                  </span>
                  <span className="text-[13px] tracking-tight"
                    style={{ fontFamily: "system-ui", opacity: isOn ? 0.9 : 0.35 }}>
                    {n.title}
                  </span>
                </div>
                <p className="text-[11px] pl-8" style={{ fontFamily: "system-ui", opacity: isOn ? 0.3 : 0.15 }}>
                  {n.desc}
                </p>
              </div>

              {/* Minimal line toggle with red dot */}
              <button
                onClick={() => toggle(n.key)}
                className="relative flex-shrink-0 ml-6"
                style={{ width: 44, height: 20 }}
              >
                {/* Track line */}
                <div
                  className="absolute top-1/2 left-0 right-0 h-px"
                  style={{
                    background: isOn ? "#c8352e" : "#1a1a1a",
                    opacity: isOn ? 0.4 : 0.12,
                    transform: "translateY(-50%)",
                  }}
                />
                {/* Sliding dot */}
                <div
                  className="absolute top-1/2 transition-all duration-300"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: isOn ? "#c8352e" : "#1a1a1a",
                    opacity: isOn ? 1 : 0.2,
                    transform: `translate(${isOn ? 34 : 0}px, -50%)`,
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="z-10 mt-8 w-full">
        <button className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{ background: "#1a1a1a", color: "#fafaf8", fontFamily: "system-ui" }}>
          Continue
        </button>
      </div>
    </div>
  );
}
