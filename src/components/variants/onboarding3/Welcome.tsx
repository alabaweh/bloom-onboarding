"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Welcome: Radial sunrise gradient, Solara branding with sun-ray SVG lines, warm CTA
 */

import { useState } from "react";

export default function Welcome() {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "#fff8f0" }}
    >
      {/* Radial sunrise glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 420,
          height: 420,
          background: "radial-gradient(circle, #ffcba4 0%, #d4a060 35%, #c06840 65%, transparent 100%)",
          opacity: 0.45,
          filter: "blur(40px)",
        }}
      />

      {/* Sun-ray SVG lines */}
      <svg
        width="260"
        height="130"
        viewBox="0 0 260 130"
        className="mb-4 relative z-10"
        style={{ opacity: 0.7 }}
      >
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = -90 + (i * 180) / 8;
          const rad = (angle * Math.PI) / 180;
          const x2 = 130 + Math.cos(rad) * 120;
          const y2 = 130 + Math.sin(rad) * 120;
          return (
            <line
              key={i}
              x1="130"
              y1="130"
              x2={x2}
              y2={y2}
              stroke="#d4a060"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={0.5 + (i % 3) * 0.15}
            />
          );
        })}
        <circle cx="130" cy="130" r="28" fill="#ffcba4" opacity="0.6" />
        <circle cx="130" cy="130" r="16" fill="#d4a060" opacity="0.8" />
      </svg>

      {/* App name */}
      <h1
        className="text-5xl font-bold relative z-10 mb-3"
        style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}
      >
        Solara
      </h1>

      {/* Tagline */}
      <p
        className="text-lg relative z-10 mb-2"
        style={{ fontFamily: "system-ui", color: "#c06840", letterSpacing: "0.02em" }}
      >
        Your warmth, your rhythm
      </p>

      <p
        className="text-sm relative z-10 mb-10 max-w-xs text-center"
        style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.65 }}
      >
        Track your cycle with the gentle confidence of a new morning
      </p>

      {/* CTA Button */}
      <button
        onClick={() => setPressed(true)}
        className="relative z-10 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
        style={{
          fontFamily: "Georgia, serif",
          background: pressed
            ? "linear-gradient(135deg, #d4a060, #c06840)"
            : "linear-gradient(135deg, #c06840, #d4a060)",
          color: "#fff8f0",
          boxShadow: pressed
            ? "0 2px 8px rgba(192,104,64,0.3)"
            : "0 6px 24px rgba(192,104,64,0.35)",
          transform: pressed ? "scale(0.97)" : "scale(1)",
        }}
      >
        {pressed ? "Welcome" : "Begin with Solara"}
      </button>

      {/* Bottom warm accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, #ffecd2, transparent)",
        }}
      />
    </div>
  );
}
