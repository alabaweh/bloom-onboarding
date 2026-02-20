"use client";
import { useState } from "react";

export default function Summary() {
  const [hovered, setHovered] = useState(false);

  const data = [
    { label: "Cycle Length", value: "28 days", color: "#8b5cf6" },
    { label: "Last Period", value: "Feb 14, 2026", color: "#ff6467" },
    { label: "Activity Level", value: "Moderate", color: "#fbbf24" },
    { label: "Goals", value: "3 selected", color: "#38bdf8" },
    { label: "Symptoms Tracked", value: "5 selected", color: "#8b5cf6" },
    { label: "Notifications", value: "2 active", color: "#ff6467" },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes meshFloat1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px,-10px) scale(1.05); } }
        @keyframes meshFloat2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-15px,12px) scale(1.08); } }
        @keyframes meshFloat3 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(10px,18px); } }
        @keyframes slideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      {/* Gradient mesh background - top half */}
      <div className="relative w-full" style={{ height: "45vh", overflow: "hidden" }}>
        <div className="absolute rounded-full" style={{
          width: 400, height: 400, top: -80, left: -50,
          background: "radial-gradient(circle at 40% 40%, #8b5cf6 0%, #ff6467 60%, transparent 80%)",
          filter: "blur(45px)", opacity: 0.75,
          animation: "meshFloat1 8s ease-in-out infinite",
        }} />
        <div className="absolute rounded-full" style={{
          width: 350, height: 350, top: -40, right: -80,
          background: "radial-gradient(circle at 60% 30%, #fbbf24 0%, #38bdf8 65%, transparent 85%)",
          filter: "blur(50px)", opacity: 0.7,
          animation: "meshFloat2 10s ease-in-out infinite",
        }} />
        <div className="absolute rounded-full" style={{
          width: 280, height: 280, bottom: -60, left: "30%",
          background: "radial-gradient(circle, #ff6467 0%, #fbbf24 60%, transparent 85%)",
          filter: "blur(40px)", opacity: 0.6,
          animation: "meshFloat3 9s ease-in-out infinite",
        }} />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: "#111111" }}>
            You&apos;re all set
          </p>
          <h1 className="text-5xl font-black" style={{ color: "#111111" }}>
            VIBE
          </h1>
          <p className="text-sm mt-2" style={{ color: "#374151" }}>Ready to sync with yourself</p>
        </div>
      </div>

      {/* White card overlay */}
      <div
        className="relative z-10 -mt-8 mx-4 rounded-3xl p-6 flex-1"
        style={{
          background: "#ffffff",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.08)",
          animation: "slideUp 0.6s ease-out forwards",
        }}
      >
        <h3 className="text-lg font-black mb-4 text-center" style={{ color: "#111111" }}>
          Your Profile Summary
        </h3>

        <div className="space-y-3 mb-6">
          {data.map((d, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 px-4 rounded-2xl"
              style={{ background: "#f9fafb" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                <span className="text-sm font-medium" style={{ color: "#6b7280" }}>{d.label}</span>
              </div>
              <span className="text-sm font-bold" style={{ color: "#111111" }}>{d.value}</span>
            </div>
          ))}
        </div>

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="w-full py-4 rounded-full text-base font-bold border-0 cursor-pointer transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #8b5cf6 0%, #ff6467 50%, #fbbf24 100%)",
            color: "#ffffff",
            transform: hovered ? "scale(1.02)" : "scale(1)",
            boxShadow: hovered
              ? "0 8px 30px rgba(139,92,246,0.4)"
              : "0 4px 15px rgba(139,92,246,0.2)",
          }}
        >
          Start Your Journey
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 8 ? 24 : 8, height: 8,
              background: i === 8 ? "linear-gradient(90deg, #8b5cf6, #ff6467, #fbbf24)" : "#e5e7eb",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
