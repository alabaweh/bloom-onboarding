"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Welcome
 * Concentric circle mark, editorial Swiss design, ultra-minimal.
 * Cream background, near-black text, red accent, sharp corners.
 */
export default function Welcome() {
  const [entered, setEntered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-between min-h-screen px-8 py-16 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic contour background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {[280, 240, 200, 160, 120, 80, 50].map((r, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="400"
            rx={r}
            ry={r * 1.3}
            stroke="#1a1a1a"
            strokeWidth="0.75"
            fill="none"
          />
        ))}
        {[320, 350, 380].map((r, i) => (
          <ellipse
            key={`o-${i}`}
            cx="160"
            cy="600"
            rx={r}
            ry={r * 0.7}
            stroke="#1a1a1a"
            strokeWidth="0.5"
            fill="none"
          />
        ))}
      </svg>

      {/* Top marker */}
      <div className="z-10 flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#c8352e]" />
        <span
          className="text-[10px] uppercase tracking-[0.4em]"
          style={{ fontFamily: "system-ui", color: "#1a1a1a", opacity: 0.4 }}
        >
          Est. 2025
        </span>
      </div>

      {/* Center: concentric circle mark + brand */}
      <div className="z-10 flex flex-col items-center">
        {/* Concentric circle mark */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="mb-10">
          {[50, 40, 30, 20, 10].map((r, i) => (
            <circle
              key={i}
              cx="60"
              cy="60"
              r={r}
              stroke={i === 2 ? "#c8352e" : "#1a1a1a"}
              strokeWidth={i === 2 ? "1.5" : "0.75"}
              fill="none"
              opacity={i === 2 ? 1 : 0.25 + i * 0.12}
            />
          ))}
          <circle cx="60" cy="60" r="3" fill="#c8352e" />
        </svg>

        <h1
          className="text-5xl font-light tracking-[0.15em] uppercase mb-3"
          style={{ fontFamily: "system-ui", letterSpacing: "0.2em" }}
        >
          Vela
        </h1>

        {/* Horizontal rule */}
        <div className="w-12 h-px bg-[#c8352e] mb-4" />

        <p
          className="text-xs uppercase tracking-[0.35em] mb-8"
          style={{ fontFamily: "system-ui", color: "#1a1a1a", opacity: 0.45 }}
        >
          Body Intelligence
        </p>

        <p
          className="text-sm text-center max-w-[260px] leading-relaxed"
          style={{ color: "#1a1a1a", opacity: 0.35, fontFamily: "system-ui" }}
        >
          Precision cycle tracking mapped to your body's unique terrain.
        </p>
      </div>

      {/* Bottom */}
      <div className="z-10 w-full space-y-5">
        <button
          onClick={() => setEntered(true)}
          className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em] transition-colors"
          style={{
            background: entered ? "#c8352e" : "#1a1a1a",
            color: "#fafaf8",
            fontFamily: "system-ui",
          }}
        >
          Enter
        </button>
        <p className="text-center text-[11px]" style={{ color: "#1a1a1a", opacity: 0.3 }}>
          Already a member?{" "}
          <span className="underline underline-offset-2" style={{ color: "#c8352e" }}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
