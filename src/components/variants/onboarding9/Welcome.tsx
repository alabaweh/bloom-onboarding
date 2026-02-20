"use client";
import { useState } from "react";

export default function Welcome() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes float1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.05); } }
        @keyframes float2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-25px,15px) scale(1.08); } }
        @keyframes float3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(15px,25px) scale(0.95); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulseGlow { 0%,100% { box-shadow: 0 4px 30px rgba(139,92,246,0.3); } 50% { box-shadow: 0 4px 50px rgba(255,100,103,0.5); } }
      `}</style>

      {/* Gradient Blob 1 - Violet/Coral top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 420, height: 420, top: -80, left: -60,
          background: "radial-gradient(circle at 40% 40%, #8b5cf6 0%, #ff6467 60%, transparent 80%)",
          filter: "blur(50px)", opacity: 0.7,
          animation: "float1 8s ease-in-out infinite",
        }}
      />
      {/* Gradient Blob 2 - Yellow/Blue top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 380, height: 380, top: -40, right: -80,
          background: "radial-gradient(circle at 60% 30%, #fbbf24 0%, #38bdf8 70%, transparent 85%)",
          filter: "blur(55px)", opacity: 0.65,
          animation: "float2 10s ease-in-out infinite",
        }}
      />
      {/* Gradient Blob 3 - Coral/Violet center */}
      <div
        className="absolute rounded-full"
        style={{
          width: 350, height: 350, bottom: 40, left: "20%",
          background: "radial-gradient(circle at 50% 50%, #ff6467 0%, #8b5cf6 55%, transparent 80%)",
          filter: "blur(45px)", opacity: 0.6,
          animation: "float3 9s ease-in-out infinite",
        }}
      />
      {/* Gradient Blob 4 - Blue/Yellow bottom-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 300, height: 300, bottom: -60, right: -30,
          background: "radial-gradient(circle at 50% 60%, #38bdf8 0%, #fbbf24 65%, transparent 85%)",
          filter: "blur(50px)", opacity: 0.55,
          animation: "float1 11s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center" style={{ animation: "fadeUp 0.8s ease-out forwards" }}>
        <h1 className="font-black tracking-tight mb-2" style={{ fontSize: 72, color: "#111111", lineHeight: 1 }}>
          VIBE
        </h1>
        <p className="text-lg font-medium mb-1" style={{ color: "#6b7280" }}>
          Sync with yourself
        </p>
        <p className="text-sm max-w-xs mx-auto mb-10" style={{ color: "#9ca3af", lineHeight: 1.6 }}>
          Your cycle, your energy, your power. Track it all with bold confidence.
        </p>

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="px-10 py-4 rounded-full text-base font-bold tracking-wide border-0 cursor-pointer transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #8b5cf6 0%, #ff6467 50%, #fbbf24 100%)",
            color: "#ffffff",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            animation: "pulseGlow 3s ease-in-out infinite",
          }}
        >
          Get Started
        </button>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 0 ? 24 : 8,
                height: 8,
                background: i === 0
                  ? "linear-gradient(90deg, #8b5cf6, #ff6467)"
                  : "#e5e7eb",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
