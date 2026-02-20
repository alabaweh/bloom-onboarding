"use client";

import { useState } from "react";

/**
 * VARIANT B -- "Topographic" Notifications Screen
 * Clean editorial layout on cream background. Minimal line-based toggle switches
 * with a red dot indicator. Inspired by Swiss design / topographic map aesthetics.
 * Each notification is a clean row with hairline separators and precise typography.
 */

const notifications = [
  {
    id: "period-predictions",
    title: "Period Predictions",
    description: "Notified 2 days before your predicted period starts",
    defaultOn: true,
  },
  {
    id: "fertile-window",
    title: "Fertile Window",
    description: "Alerts when your fertile window begins and peaks",
    defaultOn: true,
  },
  {
    id: "daily-checkin",
    title: "Daily Check-in",
    description: "A gentle reminder to log symptoms each day",
    defaultOn: false,
  },
  {
    id: "weekly-insights",
    title: "Weekly Insights",
    description: "Personalized health insights from your data",
    defaultOn: true,
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "Phase-specific nutrition, exercise, and self-care",
    defaultOn: false,
  },
];

export default function NotificationsB() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    notifications.forEach((n) => {
      initial[n.id] = n.defaultOn;
    });
    return initial;
  });

  const toggle = (id: string) => {
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const enabledCount = Object.values(prefs).filter(Boolean).length;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#fafaf8" }}
    >
      {/* Subtle topographic lines in background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx={200 + (i % 3 - 1) * 30}
            cy={400 + (i % 4 - 2) * 60}
            rx={80 + i * 25}
            ry={50 + i * 20}
            stroke="#1a1a1a"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 px-6 pt-14 pb-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.25em] uppercase font-medium"
              style={{ color: "#c8352e" }}
            >
              06
            </span>
            <div className="flex-1 h-[1px]" style={{ background: "#1a1a1a", opacity: 0.1 }} />
          </div>

          <h1
            className="text-[32px] font-bold tracking-tight leading-[1.1] mb-3"
            style={{ color: "#1a1a1a" }}
          >
            Notifications
          </h1>
          <p
            className="text-sm leading-relaxed max-w-[300px]"
            style={{ color: "rgba(26, 26, 26, 0.4)" }}
          >
            Select which signals matter most to you.
            You can adjust these anytime in settings.
          </p>
        </div>

        {/* Toggle list */}
        <div className="flex-1">
          {/* Column headers */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span
              className="text-[9px] tracking-[0.2em] uppercase font-medium"
              style={{ color: "rgba(26, 26, 26, 0.25)" }}
            >
              Notification
            </span>
            <span
              className="text-[9px] tracking-[0.2em] uppercase font-medium"
              style={{ color: "rgba(26, 26, 26, 0.25)" }}
            >
              Status
            </span>
          </div>

          <div
            className="w-full h-[1px] mb-1"
            style={{ background: "#1a1a1a", opacity: 0.08 }}
          />

          {notifications.map((notif, index) => {
            const isOn = prefs[notif.id];
            return (
              <div key={notif.id}>
                <button
                  onClick={() => toggle(notif.id)}
                  className="w-full flex items-center gap-4 py-5 px-1 text-left group"
                  style={{
                    animation: `fadeInB 0.3s ease-out ${index * 0.06}s both`,
                  }}
                >
                  {/* Left: index number */}
                  <span
                    className="text-[10px] font-mono shrink-0 w-5 text-right"
                    style={{ color: "rgba(26, 26, 26, 0.2)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Center: text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[15px] font-semibold tracking-tight transition-colors duration-300"
                      style={{ color: isOn ? "#1a1a1a" : "rgba(26, 26, 26, 0.3)" }}
                    >
                      {notif.title}
                    </h3>
                    <p
                      className="text-[11px] leading-relaxed mt-0.5 transition-colors duration-300"
                      style={{ color: isOn ? "rgba(26, 26, 26, 0.4)" : "rgba(26, 26, 26, 0.18)" }}
                    >
                      {notif.description}
                    </p>
                  </div>

                  {/* Right: minimal line toggle with red dot */}
                  <div className="shrink-0 relative" style={{ width: 44, height: 24 }}>
                    {/* Track: a thin horizontal line */}
                    <div
                      className="absolute top-1/2 left-0 right-0 transition-all duration-300"
                      style={{
                        height: 1.5,
                        transform: "translateY(-50%)",
                        background: isOn ? "#1a1a1a" : "rgba(26, 26, 26, 0.12)",
                      }}
                    />
                    {/* Dot indicator */}
                    <div
                      className="absolute top-1/2 transition-all duration-400 rounded-full"
                      style={{
                        width: isOn ? 10 : 7,
                        height: isOn ? 10 : 7,
                        transform: `translate(${isOn ? 34 : 0}px, -50%)`,
                        background: isOn ? "#c8352e" : "rgba(26, 26, 26, 0.15)",
                        boxShadow: isOn ? "0 0 8px rgba(200, 53, 46, 0.3)" : "none",
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                    {/* Small tick marks along the line */}
                    {[0, 11, 22, 33, 44].map((x) => (
                      <div
                        key={x}
                        className="absolute top-1/2"
                        style={{
                          left: x,
                          width: 1,
                          height: 4,
                          transform: "translateY(-50%)",
                          background: "rgba(26, 26, 26, 0.06)",
                        }}
                      />
                    ))}
                  </div>
                </button>

                {/* Separator line */}
                {index < notifications.length - 1 && (
                  <div
                    className="w-full h-[1px] ml-7"
                    style={{ background: "rgba(26, 26, 26, 0.06)" }}
                  />
                )}
              </div>
            );
          })}

          <div
            className="w-full h-[1px] mt-1"
            style={{ background: "#1a1a1a", opacity: 0.08 }}
          />
        </div>

        {/* Status count */}
        <div className="flex items-center justify-between mt-6 px-1">
          <p
            className="text-[11px] font-mono"
            style={{ color: "rgba(26, 26, 26, 0.25)" }}
          >
            {enabledCount}/{notifications.length} active
          </p>
          <button
            className="text-[11px] font-medium transition-colors"
            style={{ color: "rgba(26, 26, 26, 0.3)" }}
            onClick={() => {
              const allOn = enabledCount === notifications.length;
              const updated: Record<string, boolean> = {};
              notifications.forEach((n) => {
                updated[n.id] = !allOn;
              });
              setPrefs(updated);
            }}
          >
            {enabledCount === notifications.length ? "Disable all" : "Enable all"}
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 w-full">
          <button
            className="w-full h-14 rounded-none font-semibold text-sm tracking-wide transition-colors"
            style={{
              background: "#1a1a1a",
              color: "#fafaf8",
            }}
          >
            Continue
          </button>

          <div className="flex items-center justify-center gap-3 mt-6">
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 5 ? 20 : 4,
                  height: 4,
                  background: i === 5 ? "#c8352e" : "rgba(26, 26, 26, 0.12)",
                  borderRadius: i === 5 ? 2 : 999,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid overlay accent -- topographic coordinate marks */}
      <div
        className="absolute top-8 right-6 text-right z-10"
        style={{ color: "rgba(26, 26, 26, 0.06)" }}
      >
        <div className="text-[8px] font-mono tracking-wider">47.3769 N</div>
        <div className="text-[8px] font-mono tracking-wider">8.5417 E</div>
      </div>

      <style jsx>{`
        @keyframes fadeInB {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
