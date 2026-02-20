"use client";
import { useState } from "react";

export default function Welcome() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      {/* Organic blob shapes */}
      <div className="absolute top-[-60px] left-[-40px] w-52 h-52 opacity-20" style={{ background: "#c27a56", borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%" }} />
      <div className="absolute top-20 right-[-30px] w-40 h-40 opacity-15" style={{ background: "#9caa8b", borderRadius: "55% 45% 40% 60% / 45% 55% 50% 50%" }} />
      <div className="absolute bottom-[-40px] left-10 w-48 h-48 opacity-15" style={{ background: "#8b6b4a", borderRadius: "45% 55% 60% 40% / 55% 45% 40% 60%" }} />
      <div className="absolute bottom-20 right-[-20px] w-36 h-36 opacity-10" style={{ background: "#c27a56", borderRadius: "60% 40% 45% 55% / 40% 60% 55% 45%" }} />

      {/* Central clay form illustration */}
      <div className="relative mb-8">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path d="M90 20 C130 20, 160 50, 155 90 C150 130, 120 160, 90 160 C60 160, 30 130, 25 90 C20 50, 50 20, 90 20Z" fill="#c27a56" opacity="0.25" />
          <path d="M90 40 C120 40, 140 60, 138 90 C136 120, 115 140, 90 140 C65 140, 44 120, 42 90 C40 60, 60 40, 90 40Z" fill="#c27a56" opacity="0.35" />
          <path d="M90 60 C110 60, 120 72, 118 90 C116 108, 108 118, 90 118 C72 118, 64 108, 62 90 C60 72, 70 60, 90 60Z" fill="#9caa8b" opacity="0.4" />
          <circle cx="90" cy="90" r="20" fill="#c27a56" opacity="0.5" />
        </svg>
      </div>

      {/* Branding */}
      <h1 className="text-5xl font-bold mb-3 tracking-wide" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>
        Terra
      </h1>
      <p className="text-lg mb-2 text-center" style={{ color: "#8b6b4a", fontFamily: "Georgia, serif" }}>
        Grounded in your body
      </p>
      <p className="text-sm text-center max-w-xs mb-10 leading-relaxed" style={{ color: "#3a2e2490" }}>
        A mindful companion for understanding your cycle, rooted in warmth and care.
      </p>

      {/* CTA Button */}
      <button
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        className="px-10 py-4 text-white text-lg font-medium transition-all duration-200"
        style={{
          background: pressed ? "#a8663f" : "#c27a56",
          borderRadius: "40% 60% 50% 50% / 60% 40% 60% 40%",
          fontFamily: "Georgia, serif",
          transform: pressed ? "scale(0.96)" : "scale(1)",
          boxShadow: "0 4px 16px #c27a5630",
          border: "none",
          cursor: "pointer",
        }}
      >
        Begin
      </button>

      {/* Page dots */}
      <div className="flex gap-2 mt-10">
        <div className="w-6 h-2 rounded-full" style={{ background: "#c27a56" }} />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
