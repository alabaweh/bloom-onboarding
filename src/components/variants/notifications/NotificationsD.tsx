"use client";

import { useState } from "react";

/**
 * VARIANT D -- "Woven" Notifications Screen
 * Linen background with handcraft aesthetic. Toggles are fabric patches with
 * a stitched appearance -- ON state shows a copper-colored "sewn on" patch,
 * OFF state shows a faded, unattached patch with loose stitch marks.
 * Uses brown/copper palette with textile-inspired textures.
 */

const notifications = [
  {
    id: "period-predictions",
    title: "Period Predictions",
    description: "A reminder woven 2 days before your predicted cycle begins",
    defaultOn: true,
    stitchPattern: "cross",
  },
  {
    id: "fertile-window",
    title: "Fertile Window",
    description: "Threads of awareness when your fertile window opens",
    defaultOn: true,
    stitchPattern: "running",
  },
  {
    id: "daily-checkin",
    title: "Daily Check-in",
    description: "A gentle tug to log your daily symptoms and feelings",
    defaultOn: false,
    stitchPattern: "blanket",
  },
  {
    id: "weekly-insights",
    title: "Weekly Insights",
    description: "Health patterns woven from your personal data tapestry",
    defaultOn: true,
    stitchPattern: "chain",
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "Phase-aligned self-care woven into your weekly rhythm",
    defaultOn: false,
    stitchPattern: "back",
  },
];

export default function NotificationsD() {
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
      style={{ background: "#f7f3ee" }}
    >
      {/* Linen texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #3d2b1f 2px,
            #3d2b1f 3px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            #3d2b1f 2px,
            #3d2b1f 3px
          )`,
        }}
      />

      {/* Decorative corner stitch marks */}
      <svg className="absolute top-4 left-4 w-12 h-12 opacity-10" viewBox="0 0 40 40" fill="none">
        <path d="M0 10L10 0" stroke="#3d2b1f" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M0 20L20 0" stroke="#3d2b1f" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M0 30L30 0" stroke="#3d2b1f" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      <svg className="absolute top-4 right-4 w-12 h-12 opacity-10" viewBox="0 0 40 40" fill="none">
        <path d="M40 10L30 0" stroke="#3d2b1f" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M40 20L20 0" stroke="#3d2b1f" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M40 30L10 0" stroke="#3d2b1f" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Header */}
      <div className="z-10 mb-8">
        {/* Thread / needle icon */}
        <div className="mb-5">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Spool shape */}
            <rect x="16" y="8" width="16" height="32" rx="3" fill="none" stroke="#c17f4e" strokeWidth="1.5" />
            <path d="M16 14H32" stroke="#c17f4e" strokeWidth="1" opacity="0.4" />
            <path d="M16 34H32" stroke="#c17f4e" strokeWidth="1" opacity="0.4" />
            {/* Thread wraps */}
            {[18, 21, 24, 27, 30].map((y) => (
              <path
                key={y}
                d={`M17 ${y}H31`}
                stroke="#c17f4e"
                strokeWidth="0.8"
                opacity="0.25"
              />
            ))}
            {/* Thread going out */}
            <path
              d="M32 24C36 24 40 20 42 16"
              stroke="#c17f4e"
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.5"
            />
            {/* Needle */}
            <path d="M42 16L44 10" stroke="#3d2b1f" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="43.5" cy="9" r="1.5" fill="none" stroke="#3d2b1f" strokeWidth="1" />
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-medium"
            style={{ color: "#c17f4e" }}
          >
            Weave Your Alerts
          </span>
          <div
            className="flex-1 h-[1px]"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, #c17f4e 0px, #c17f4e 4px, transparent 4px, transparent 8px)",
              opacity: 0.25,
            }}
          />
        </div>

        <h1
          className="text-[28px] font-bold tracking-tight leading-tight"
          style={{ color: "#3d2b1f" }}
        >
          Choose Your<br />Notification Threads
        </h1>
        <p
          className="text-sm leading-relaxed mt-2 max-w-[280px]"
          style={{ color: "rgba(61, 43, 31, 0.45)" }}
        >
          Each thread connects you to a part of your cycle. Stitch in the ones you need.
        </p>
      </div>

      {/* Toggle patches */}
      <div className="z-10 flex-1 flex flex-col gap-3 max-w-sm mx-auto w-full">
        {notifications.map((notif, index) => {
          const isOn = prefs[notif.id];
          return (
            <button
              key={notif.id}
              onClick={() => toggle(notif.id)}
              className="relative flex items-center gap-4 rounded-xl p-4 text-left transition-all duration-500"
              style={{
                background: isOn ? "rgba(193, 127, 78, 0.06)" : "rgba(61, 43, 31, 0.015)",
                border: isOn
                  ? "1.5px dashed rgba(193, 127, 78, 0.35)"
                  : "1.5px dashed rgba(61, 43, 31, 0.08)",
                animation: `fadeInD 0.35s ease-out ${index * 0.07}s both`,
              }}
            >
              {/* Fabric toggle patch */}
              <div className="relative shrink-0" style={{ width: 52, height: 32 }}>
                {/* Patch background - fabric texture */}
                <div
                  className="absolute inset-0 rounded-md transition-all duration-500 overflow-hidden"
                  style={{
                    background: isOn
                      ? "linear-gradient(135deg, #c17f4e, #a86938)"
                      : "rgba(61, 43, 31, 0.04)",
                    border: isOn
                      ? "none"
                      : "1px solid rgba(61, 43, 31, 0.08)",
                    boxShadow: isOn
                      ? "0 2px 8px rgba(193, 127, 78, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.15)"
                      : "none",
                  }}
                >
                  {/* Woven texture lines on the patch */}
                  {isOn && (
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 2px,
                          rgba(255,255,255,0.3) 2px,
                          rgba(255,255,255,0.3) 3px
                        )`,
                      }}
                    />
                  )}
                </div>

                {/* Stitch marks around the patch when ON */}
                <svg
                  className="absolute inset-[-4px] transition-opacity duration-500"
                  style={{
                    width: "calc(100% + 8px)",
                    height: "calc(100% + 8px)",
                    opacity: isOn ? 0.5 : 0,
                  }}
                  viewBox="0 0 60 40"
                  fill="none"
                >
                  {/* Top stitch */}
                  <path d="M8 2L12 6L16 2L20 6L24 2L28 6L32 2L36 6L40 2L44 6L48 2L52 6" stroke="#c17f4e" strokeWidth="0.8" />
                  {/* Bottom stitch */}
                  <path d="M8 38L12 34L16 38L20 34L24 38L28 34L32 38L36 34L40 38L44 34L48 38L52 34" stroke="#c17f4e" strokeWidth="0.8" />
                  {/* Left stitch */}
                  <path d="M2 8L6 12L2 16L6 20L2 24L6 28L2 32" stroke="#c17f4e" strokeWidth="0.8" />
                  {/* Right stitch */}
                  <path d="M58 8L54 12L58 16L54 20L58 24L54 28L58 32" stroke="#c17f4e" strokeWidth="0.8" />
                </svg>

                {/* Toggle label text on patch */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                >
                  <span
                    className="text-[9px] font-bold tracking-[0.1em] uppercase transition-colors duration-500"
                    style={{
                      color: isOn ? "rgba(255, 255, 255, 0.9)" : "rgba(61, 43, 31, 0.2)",
                      textShadow: isOn ? "0 1px 2px rgba(0,0,0,0.2)" : "none",
                    }}
                  >
                    {isOn ? "Sewn" : "Loose"}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[15px] font-semibold tracking-tight transition-colors duration-500"
                  style={{ color: isOn ? "#3d2b1f" : "rgba(61, 43, 31, 0.3)" }}
                >
                  {notif.title}
                </h3>
                <p
                  className="text-[11px] leading-relaxed mt-0.5 transition-colors duration-500"
                  style={{ color: isOn ? "rgba(61, 43, 31, 0.45)" : "rgba(61, 43, 31, 0.18)" }}
                >
                  {notif.description}
                </p>
              </div>

              {/* Thread dot connector */}
              <div className="shrink-0 flex flex-col items-center gap-1">
                <div
                  className="w-1 h-1 rounded-full transition-colors duration-500"
                  style={{ background: isOn ? "#c17f4e" : "rgba(61, 43, 31, 0.1)" }}
                />
                <div
                  className="w-[1px] h-3 transition-colors duration-500"
                  style={{
                    backgroundImage: isOn
                      ? "repeating-linear-gradient(180deg, #c17f4e 0px, #c17f4e 2px, transparent 2px, transparent 4px)"
                      : "repeating-linear-gradient(180deg, rgba(61,43,31,0.08) 0px, rgba(61,43,31,0.08) 2px, transparent 2px, transparent 4px)",
                  }}
                />
                <div
                  className="w-1 h-1 rounded-full transition-colors duration-500"
                  style={{ background: isOn ? "#c17f4e" : "rgba(61, 43, 31, 0.1)" }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Status */}
      <div className="z-10 mt-6 text-center">
        <p
          className="text-[11px] font-light"
          style={{ color: "rgba(61, 43, 31, 0.3)" }}
        >
          {enabledCount} of {notifications.length} threads woven in
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 mt-6 w-full max-w-sm mx-auto">
        <button
          className="w-full h-14 rounded-xl font-semibold text-sm tracking-wide relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3d2b1f, #4a3425)",
            color: "#f7f3ee",
            boxShadow: "0 4px 16px rgba(61, 43, 31, 0.15)",
            border: "1.5px solid rgba(193, 127, 78, 0.2)",
          }}
        >
          {/* Subtle weave texture on button */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 3px,
                rgba(255,255,255,0.5) 3px,
                rgba(255,255,255,0.5) 4px
              )`,
            }}
          />
          <span className="relative z-10">Continue</span>
        </button>

        {/* Progress dots styled as thread knots */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 5 ? 20 : 6,
                height: 6,
                background: i === 5
                  ? "#c17f4e"
                  : "rgba(193, 127, 78, 0.15)",
                border: i === 5
                  ? "none"
                  : "0.5px solid rgba(193, 127, 78, 0.1)",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInD {
          from {
            opacity: 0;
            transform: translateY(10px);
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
