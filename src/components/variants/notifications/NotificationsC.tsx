"use client";

import { useState } from "react";

/**
 * VARIANT C -- "Aurora" Notifications Screen
 * Dark background with glassmorphism cards. Each notification is a frosted glass panel
 * that glows with aurora colors (green/teal/purple) when ON, and dims to a muted
 * translucent glass when OFF. The aurora dances subtly in the background.
 */

const notifications = [
  {
    id: "period-predictions",
    title: "Period Predictions",
    description: "Get notified 2 days before your predicted period starts",
    defaultOn: true,
    auroraColor: "#4ade80",
    auroraGrad: "linear-gradient(135deg, #4ade80, #22d3ee)",
  },
  {
    id: "fertile-window",
    title: "Fertile Window",
    description: "Alerts when your fertile window begins and peaks",
    defaultOn: true,
    auroraColor: "#22d3ee",
    auroraGrad: "linear-gradient(135deg, #22d3ee, #818cf8)",
  },
  {
    id: "daily-checkin",
    title: "Daily Check-in",
    description: "A gentle reminder to log your symptoms each day",
    defaultOn: false,
    auroraColor: "#818cf8",
    auroraGrad: "linear-gradient(135deg, #818cf8, #c084fc)",
  },
  {
    id: "weekly-insights",
    title: "Weekly Insights",
    description: "Personalized health insights based on your tracked data",
    defaultOn: true,
    auroraColor: "#c084fc",
    auroraGrad: "linear-gradient(135deg, #c084fc, #f472b6)",
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "Phase-specific nutrition, exercise, and self-care tips",
    defaultOn: false,
    auroraColor: "#f472b6",
    auroraGrad: "linear-gradient(135deg, #f472b6, #4ade80)",
  },
];

export default function NotificationsC() {
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
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora background layers */}
      <div
        className="absolute top-[-20%] left-[-30%] w-[160%] h-[60%] opacity-20"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, #4ade80, transparent 50%), radial-gradient(ellipse at 70% 30%, #818cf8, transparent 50%), radial-gradient(ellipse at 50% 60%, #22d3ee, transparent 60%)",
          filter: "blur(80px)",
          animation: "auroraShift 15s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-20%] w-[120%] h-[50%] opacity-15"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, #c084fc, transparent 50%), radial-gradient(ellipse at 30% 70%, #f472b6, transparent 50%)",
          filter: "blur(100px)",
          animation: "auroraShift 12s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* Header */}
      <div className="z-10 text-center mb-8">
        {/* Glass icon container */}
        <div
          className="mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 3C10 3 7 7 7 12V18L4 22H24L21 18V12C21 7 18 3 14 3Z"
              stroke="url(#bellAurora)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M10.5 22C10.5 23.93 12.07 25.5 14 25.5C15.93 25.5 17.5 23.93 17.5 22"
              stroke="url(#bellAurora)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <defs>
              <linearGradient id="bellAurora" x1="4" y1="3" x2="24" y2="25">
                <stop stopColor="#4ade80" />
                <stop offset="0.5" stopColor="#22d3ee" />
                <stop offset="1" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          Your Signals
        </h1>
        <p className="text-sm font-light max-w-[260px] mx-auto" style={{ color: "rgba(255, 255, 255, 0.35)" }}>
          Illuminate the notifications that guide your journey through each phase.
        </p>
      </div>

      {/* Glass toggle cards */}
      <div className="z-10 flex-1 flex flex-col gap-3 max-w-sm mx-auto w-full">
        {notifications.map((notif, index) => {
          const isOn = prefs[notif.id];
          return (
            <button
              key={notif.id}
              onClick={() => toggle(notif.id)}
              className="relative flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-500"
              style={{
                background: isOn
                  ? "rgba(255, 255, 255, 0.07)"
                  : "rgba(255, 255, 255, 0.025)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: isOn
                  ? `1px solid ${notif.auroraColor}33`
                  : "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: isOn
                  ? `0 4px 24px ${notif.auroraColor}15, inset 0 1px 0 rgba(255, 255, 255, 0.06)`
                  : "inset 0 1px 0 rgba(255, 255, 255, 0.02)",
                animation: `fadeUpC 0.4s ease-out ${index * 0.07}s both`,
              }}
            >
              {/* Aurora glow edge when ON */}
              {isOn && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-30 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${notif.auroraColor}08, transparent 50%)`,
                  }}
                />
              )}

              {/* Glass toggle panel */}
              <div className="relative shrink-0" style={{ width: 48, height: 32 }}>
                {/* Background panel */}
                <div
                  className="absolute inset-0 rounded-lg transition-all duration-500"
                  style={{
                    background: isOn
                      ? `${notif.auroraColor}18`
                      : "rgba(255, 255, 255, 0.04)",
                    border: isOn
                      ? `1px solid ${notif.auroraColor}30`
                      : "1px solid rgba(255, 255, 255, 0.06)",
                    boxShadow: isOn
                      ? `0 0 16px ${notif.auroraColor}20, inset 0 0 12px ${notif.auroraColor}08`
                      : "none",
                  }}
                />
                {/* Glass knob */}
                <div
                  className="absolute top-[3px] w-[26px] h-[26px] rounded-md transition-all duration-400"
                  style={{
                    left: isOn ? 19 : 3,
                    background: isOn
                      ? `linear-gradient(135deg, ${notif.auroraColor}cc, ${notif.auroraColor}88)`
                      : "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: isOn
                      ? `1px solid ${notif.auroraColor}50`
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: isOn
                      ? `0 2px 8px ${notif.auroraColor}40`
                      : "0 1px 4px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Inner glow dot */}
                  <div
                    className="absolute top-1/2 left-1/2 rounded-full transition-all duration-400"
                    style={{
                      width: isOn ? 6 : 4,
                      height: isOn ? 6 : 4,
                      transform: "translate(-50%, -50%)",
                      background: isOn ? "#fff" : "rgba(255, 255, 255, 0.15)",
                      boxShadow: isOn ? `0 0 8px ${notif.auroraColor}` : "none",
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0 relative z-10">
                <h3
                  className="text-sm font-semibold tracking-tight transition-colors duration-500"
                  style={{ color: isOn ? "#fff" : "rgba(255, 255, 255, 0.35)" }}
                >
                  {notif.title}
                </h3>
                <p
                  className="text-[11px] leading-relaxed mt-0.5 transition-colors duration-500"
                  style={{ color: isOn ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.15)" }}
                >
                  {notif.description}
                </p>
              </div>

              {/* Status indicator */}
              <div
                className="shrink-0 w-2 h-2 rounded-full transition-all duration-500"
                style={{
                  background: isOn ? notif.auroraColor : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isOn ? `0 0 8px ${notif.auroraColor}60` : "none",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Status */}
      <div className="z-10 mt-6 text-center">
        <p className="text-[11px] font-light" style={{ color: "rgba(255, 255, 255, 0.2)" }}>
          {enabledCount} of {notifications.length} signals active
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full max-w-sm mx-auto">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "#fff",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
          }}
        >
          Continue
        </button>
        <div className="flex items-center justify-center gap-2 mt-5">
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 5 ? 24 : 6,
                height: 6,
                background: i === 5
                  ? "linear-gradient(90deg, #4ade80, #22d3ee, #818cf8)"
                  : "rgba(255, 255, 255, 0.1)",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes auroraShift {
          0% { transform: translateX(-5%) rotate(0deg); }
          50% { transform: translateX(5%) rotate(2deg); }
          100% { transform: translateX(-3%) rotate(-1deg); }
        }
        @keyframes fadeUpC {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
