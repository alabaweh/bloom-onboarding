"use client";

import { useState } from "react";

/**
 * VARIANT E -- "Pulse" Notifications Screen
 * Black background with neon pink accents. Terminal / system alert aesthetic.
 * Notifications are presented as system channels with [ACTIVE] / [MUTED] text
 * indicators. Monospace typography, scanline effects, and blinking cursors.
 */

const notifications = [
  {
    id: "period-predictions",
    title: "Period Predictions",
    description: "ALERT: 2 days before predicted cycle onset",
    channel: "CH_01",
    defaultOn: true,
  },
  {
    id: "fertile-window",
    title: "Fertile Window",
    description: "ALERT: Fertile window open / peak ovulation",
    channel: "CH_02",
    defaultOn: true,
  },
  {
    id: "daily-checkin",
    title: "Daily Check-in",
    description: "PING: Daily symptom log reminder",
    channel: "CH_03",
    defaultOn: false,
  },
  {
    id: "weekly-insights",
    title: "Weekly Insights",
    description: "DATA: Weekly health pattern analysis ready",
    channel: "CH_04",
    defaultOn: true,
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "INFO: Phase-aligned wellness recommendations",
    channel: "CH_05",
    defaultOn: false,
  },
];

export default function NotificationsE() {
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
      className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)",
        }}
      />

      {/* Neon glow in background */}
      <div
        className="absolute top-[20%] left-[50%] w-[300px] h-[300px] rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255, 62, 138, 0.06), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Header - terminal style */}
      <div className="z-10 mb-8">
        {/* System header bar */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff3e8a" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255, 62, 138, 0.3)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255, 62, 138, 0.15)" }} />
          </div>
          <span
            className="text-[9px] font-mono tracking-widest uppercase"
            style={{ color: "rgba(255, 62, 138, 0.4)" }}
          >
            sys://notifications
          </span>
        </div>

        {/* Glitch-style title */}
        <div className="relative">
          <h1
            className="text-3xl font-bold tracking-tight font-mono"
            style={{ color: "#fff" }}
          >
            SIGNAL
            <br />
            <span style={{ color: "#ff3e8a" }}>CHANNELS</span>
          </h1>
          {/* Glitch shadow */}
          <h1
            className="absolute top-0 left-0 text-3xl font-bold tracking-tight font-mono opacity-20"
            style={{ color: "#ff3e8a", transform: "translate(2px, -1px)" }}
            aria-hidden="true"
          >
            SIGNAL
            <br />
            <span>CHANNELS</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#ff3e8a",
              boxShadow: "0 0 6px #ff3e8a",
              animation: "blinkE 1.5s ease-in-out infinite",
            }}
          />
          <p
            className="text-[11px] font-mono"
            style={{ color: "rgba(255, 255, 255, 0.3)" }}
          >
            Configure alert channels below
          </p>
        </div>
      </div>

      {/* Channel toggles */}
      <div className="z-10 flex-1 flex flex-col gap-2 max-w-sm mx-auto w-full">
        {notifications.map((notif, index) => {
          const isOn = prefs[notif.id];
          return (
            <button
              key={notif.id}
              onClick={() => toggle(notif.id)}
              className="relative flex items-stretch text-left transition-all duration-300 group overflow-hidden"
              style={{
                background: isOn
                  ? "rgba(255, 62, 138, 0.04)"
                  : "rgba(255, 255, 255, 0.015)",
                border: isOn
                  ? "1px solid rgba(255, 62, 138, 0.2)"
                  : "1px solid rgba(255, 255, 255, 0.04)",
                animation: `termLineIn 0.3s ease-out ${index * 0.06}s both`,
              }}
            >
              {/* Channel ID sidebar */}
              <div
                className="flex flex-col items-center justify-center px-3 shrink-0 transition-all duration-300"
                style={{
                  background: isOn
                    ? "rgba(255, 62, 138, 0.08)"
                    : "rgba(255, 255, 255, 0.02)",
                  borderRight: isOn
                    ? "1px solid rgba(255, 62, 138, 0.15)"
                    : "1px solid rgba(255, 255, 255, 0.03)",
                }}
              >
                <span
                  className="text-[8px] font-mono tracking-wider transition-colors duration-300"
                  style={{ color: isOn ? "#ff3e8a" : "rgba(255, 255, 255, 0.15)" }}
                >
                  {notif.channel}
                </span>
                {/* Signal strength bars */}
                <div className="flex items-end gap-[2px] mt-1.5">
                  {[1, 2, 3].map((bar) => (
                    <div
                      key={bar}
                      className="transition-all duration-300"
                      style={{
                        width: 3,
                        height: bar * 3 + 2,
                        background: isOn && bar <= 3
                          ? `rgba(255, 62, 138, ${0.3 + bar * 0.2})`
                          : "rgba(255, 255, 255, 0.06)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content area */}
              <div className="flex-1 flex items-center gap-3 p-4 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-[13px] font-semibold font-mono tracking-tight transition-colors duration-300"
                      style={{ color: isOn ? "#fff" : "rgba(255, 255, 255, 0.25)" }}
                    >
                      {notif.title}
                    </h3>
                  </div>
                  <p
                    className="text-[10px] font-mono leading-relaxed mt-1 transition-colors duration-300"
                    style={{ color: isOn ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)" }}
                  >
                    {notif.description}
                  </p>
                </div>

                {/* [ACTIVE] / [MUTED] text toggle */}
                <div className="shrink-0 flex flex-col items-end gap-1">
                  <span
                    className="text-[10px] font-mono font-bold tracking-wider transition-all duration-300"
                    style={{
                      color: isOn ? "#ff3e8a" : "rgba(255, 255, 255, 0.15)",
                      textShadow: isOn ? "0 0 10px rgba(255, 62, 138, 0.5)" : "none",
                    }}
                  >
                    [{isOn ? "ACTIVE" : "MUTED"}]
                  </span>
                  {/* Signal line */}
                  <div className="flex items-center gap-[1px]">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="transition-all duration-300"
                        style={{
                          width: 2,
                          height: isOn
                            ? Math.abs(Math.sin((i + index) * 0.8)) * 6 + 2
                            : 1,
                          background: isOn
                            ? `rgba(255, 62, 138, ${0.3 + Math.abs(Math.sin((i + index) * 0.8)) * 0.4})`
                            : "rgba(255, 255, 255, 0.05)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Active left border glow */}
              {isOn && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{
                    background: "#ff3e8a",
                    boxShadow: "0 0 8px #ff3e8a, 0 0 16px rgba(255, 62, 138, 0.3)",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Terminal status line */}
      <div className="z-10 mt-6">
        <div className="flex items-center gap-2 max-w-sm mx-auto w-full">
          <span
            className="text-[10px] font-mono"
            style={{ color: "rgba(255, 62, 138, 0.4)" }}
          >
            $
          </span>
          <span
            className="text-[10px] font-mono"
            style={{ color: "rgba(255, 255, 255, 0.2)" }}
          >
            {enabledCount} of {notifications.length} channels active
          </span>
          <span
            className="inline-block w-[6px] h-[14px]"
            style={{
              background: "#ff3e8a",
              opacity: 0.6,
              animation: "blinkE 1s step-end infinite",
            }}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full max-w-sm mx-auto">
        <button
          className="w-full h-14 font-bold text-sm tracking-widest uppercase font-mono relative overflow-hidden"
          style={{
            background: "transparent",
            border: "1px solid #ff3e8a",
            color: "#ff3e8a",
            boxShadow: "0 0 20px rgba(255, 62, 138, 0.15), inset 0 0 20px rgba(255, 62, 138, 0.05)",
          }}
        >
          {/* Horizontal scan line on button */}
          <div
            className="absolute left-0 right-0 h-[1px] opacity-30"
            style={{
              background: "linear-gradient(90deg, transparent, #ff3e8a, transparent)",
              animation: "scanE 3s linear infinite",
            }}
          />
          <span className="relative z-10">&gt; CONTINUE_</span>
        </button>

        {/* Progress blocks instead of dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div
              key={i}
              style={{
                width: i === 5 ? 20 : 6,
                height: 4,
                background: i === 5 ? "#ff3e8a" : "rgba(255, 62, 138, 0.1)",
                boxShadow: i === 5 ? "0 0 8px rgba(255, 62, 138, 0.4)" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blinkE {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scanE {
          0% { top: 0; }
          100% { top: 100%; }
        }
        @keyframes termLineIn {
          from {
            opacity: 0;
            transform: translateX(-12px);
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
