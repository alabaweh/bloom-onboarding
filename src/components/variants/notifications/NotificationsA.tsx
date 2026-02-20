"use client";

import { useState } from "react";

/**
 * VARIANT A -- "Celestial" Notifications Screen
 * Night sky with notification beacons. Each notification is a signal beacon
 * that illuminates with golden glow when active, dims when muted.
 * Tap the beacon to toggle -- a celestial lighthouse metaphor.
 */

const notifications = [
  {
    id: "period-predictions",
    title: "Period Predictions",
    description: "A beacon lights 2 days before your predicted cycle begins",
    defaultOn: true,
    angle: -40,
  },
  {
    id: "fertile-window",
    title: "Fertile Window",
    description: "Your fertile constellation illuminated when the window opens",
    defaultOn: true,
    angle: -20,
  },
  {
    id: "daily-checkin",
    title: "Daily Check-in",
    description: "A gentle starlight nudge to log your symptoms each day",
    defaultOn: false,
    angle: 0,
  },
  {
    id: "weekly-insights",
    title: "Weekly Insights",
    description: "Celestial readings of your personal health patterns",
    defaultOn: true,
    angle: 20,
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "Phase-aligned guidance from the stars for body and mind",
    defaultOn: false,
    angle: 40,
  },
];

export default function NotificationsA() {
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
      style={{
        background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)",
      }}
    >
      {/* Star field */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            top: `${(i * 17.3) % 100}%`,
            left: `${(i * 31.7) % 100}%`,
            opacity: ((i * 7) % 10) / 15 + 0.08,
            animation: `twinkleNotifA ${(i % 4) + 2}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.4}s`,
          }}
        />
      ))}

      {/* Large diffuse glow behind header */}
      <div
        className="absolute top-[8%] left-[50%] w-[300px] h-[300px] rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(245, 216, 130, 0.06), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Header */}
      <div className="z-10 text-center mb-10">
        {/* Beacon icon */}
        <div className="mx-auto mb-5 relative" style={{ width: 72, height: 72 }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(245, 216, 130, 0.15), transparent 70%)",
              filter: "blur(20px)",
              animation: "beaconPulseA 3s ease-in-out infinite",
            }}
          />
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="relative z-10">
            {/* Signal arcs */}
            <path
              d="M20 28C20 19.16 27.16 12 36 12C44.84 12 52 19.16 52 28"
              stroke="rgba(245, 216, 130, 0.2)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M25 28C25 21.93 29.93 17 36 17C42.07 17 47 21.93 47 28"
              stroke="rgba(245, 216, 130, 0.35)"
              strokeWidth="1"
              fill="none"
            />
            {/* Bell / beacon body */}
            <path
              d="M36 20C30 20 26 26 26 32V40L22 46H50L46 40V32C46 26 42 20 36 20Z"
              fill="none"
              stroke="#f5d882"
              strokeWidth="1.5"
              opacity="0.8"
            />
            <path
              d="M31 46C31 48.76 33.24 51 36 51C38.76 51 41 48.76 41 46"
              stroke="#f5d882"
              strokeWidth="1.5"
              opacity="0.8"
            />
            {/* Glow dot at top */}
            <circle cx="36" cy="20" r="2.5" fill="#f5d882" opacity="0.9" />
            <circle cx="36" cy="20" r="5" fill="rgba(245, 216, 130, 0.15)" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f5d882]/30" />
          <span className="text-[10px] text-[#f5d882]/50 tracking-[0.3em] uppercase font-medium">
            Signal Beacons
          </span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f5d882]/30" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Light Your Beacons
        </h1>
        <p className="text-sm text-purple-300/40 mt-2 font-light max-w-[260px] mx-auto">
          Each beacon is a signal from your cycle. Illuminate the ones that guide you.
        </p>
      </div>

      {/* Beacon toggles */}
      <div className="z-10 flex-1 flex flex-col gap-4 max-w-sm mx-auto w-full">
        {notifications.map((notif, index) => {
          const isOn = prefs[notif.id];
          return (
            <button
              key={notif.id}
              onClick={() => toggle(notif.id)}
              className="relative flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-500"
              style={{
                background: isOn
                  ? "rgba(245, 216, 130, 0.06)"
                  : "rgba(255, 255, 255, 0.02)",
                border: isOn
                  ? "1px solid rgba(245, 216, 130, 0.2)"
                  : "1px solid rgba(210, 195, 255, 0.06)",
                boxShadow: isOn
                  ? "0 0 30px rgba(245, 216, 130, 0.08), inset 0 1px 0 rgba(245, 216, 130, 0.05)"
                  : "none",
                animation: `fadeSlideInA 0.4s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Beacon lamp */}
              <div className="relative shrink-0" style={{ width: 44, height: 44 }}>
                {/* Glow behind beacon when ON */}
                {isOn && (
                  <div
                    className="absolute inset-[-8px] rounded-full transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle, rgba(245, 216, 130, 0.25), transparent 70%)",
                      filter: "blur(6px)",
                    }}
                  />
                )}
                <div
                  className="relative w-full h-full rounded-full flex items-center justify-center transition-all duration-500"
                  style={{
                    background: isOn
                      ? "radial-gradient(circle at 40% 35%, #fffbe6, #f5d882, #c9a23c)"
                      : "rgba(210, 195, 255, 0.06)",
                    border: isOn
                      ? "1.5px solid rgba(245, 216, 130, 0.5)"
                      : "1.5px solid rgba(210, 195, 255, 0.1)",
                    boxShadow: isOn
                      ? "0 0 20px rgba(245, 216, 130, 0.3), 0 0 6px rgba(245, 216, 130, 0.5)"
                      : "none",
                  }}
                >
                  {/* Inner beacon symbol - signal wave lines */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle
                      cx="10"
                      cy="10"
                      r="3"
                      fill={isOn ? "#0c0a1d" : "rgba(210, 195, 255, 0.2)"}
                      style={{ transition: "fill 0.5s" }}
                    />
                    <path
                      d="M5.5 5.5C7 4 8.5 3.5 10 3.5C11.5 3.5 13 4 14.5 5.5"
                      stroke={isOn ? "#0c0a1d" : "rgba(210, 195, 255, 0.15)"}
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      fill="none"
                      style={{ transition: "stroke 0.5s" }}
                    />
                    <path
                      d="M3.5 3.5C5.5 1.5 7.5 0.5 10 0.5C12.5 0.5 14.5 1.5 16.5 3.5"
                      stroke={isOn ? "rgba(12, 10, 29, 0.4)" : "rgba(210, 195, 255, 0.08)"}
                      strokeWidth="1"
                      strokeLinecap="round"
                      fill="none"
                      style={{ transition: "stroke 0.5s" }}
                    />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-semibold tracking-tight transition-colors duration-500"
                  style={{ color: isOn ? "#f5d882" : "rgba(255, 255, 255, 0.5)" }}
                >
                  {notif.title}
                </h3>
                <p
                  className="text-[11px] leading-relaxed mt-0.5 transition-colors duration-500"
                  style={{ color: isOn ? "rgba(210, 195, 255, 0.45)" : "rgba(210, 195, 255, 0.2)" }}
                >
                  {notif.description}
                </p>
              </div>

              {/* State text */}
              <span
                className="text-[9px] tracking-[0.15em] uppercase font-mono shrink-0 transition-colors duration-500"
                style={{ color: isOn ? "#f5d882" : "rgba(210, 195, 255, 0.2)" }}
              >
                {isOn ? "LIT" : "DIM"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Status bar */}
      <div className="z-10 mt-6 text-center">
        <p className="text-[11px] text-purple-300/30 font-light">
          {enabledCount} of {notifications.length} beacons illuminated
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full max-w-sm mx-auto">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide text-[#0c0a1d]"
          style={{
            background: "linear-gradient(135deg, #f5d882, #e8c55a)",
            boxShadow: "0 4px 24px rgba(245, 216, 130, 0.3)",
          }}
        >
          Continue
        </button>
        <div className="flex items-center justify-center gap-2 mt-5">
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 5 ? 24 : 6,
                height: 6,
                background: i === 5 ? "#f5d882" : "rgba(245, 216, 130, 0.2)",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkleNotifA {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
        @keyframes beaconPulseA {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        @keyframes fadeSlideInA {
          from {
            opacity: 0;
            transform: translateY(12px);
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
