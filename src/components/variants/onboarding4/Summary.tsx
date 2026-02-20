"use client";

import { useState } from "react";

export default function Summary() {
  const [entered, setEntered] = useState(false);

  const fireflies = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 1.5 + Math.random() * 2.5,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
  }));

  const items = [
    { label: "Cycle length", value: "28 days" },
    { label: "Period duration", value: "5 days" },
    { label: "Tracking goals", value: "Cycle, Symptoms" },
    { label: "Notifications", value: "Period, Check-in, Weekly" },
  ];

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      <style>{`
        @keyframes fireflyPulse { 0%,100% { opacity:0.15; } 50% { opacity:0.9; } }
        @keyframes fireflyFloat { 0%,100% { transform:translateY(0) translateX(0); } 33% { transform:translateY(-10px) translateX(6px); } 66% { transform:translateY(5px) translateX(-5px); } }
      `}</style>

      {fireflies.map((f) => (
        <div key={f.id} style={{
          position: "absolute", left: f.left, top: f.top, width: f.size, height: f.size,
          borderRadius: "50%", background: "#c9a96e",
          boxShadow: "0 0 5px 2px rgba(201,169,110,0.4)",
          animation: `fireflyPulse ${f.duration}s ease-in-out ${f.delay}s infinite, fireflyFloat ${f.duration + 1}s ease-in-out ${f.delay}s infinite`,
        }} />
      ))}

      {/* Bloom flower */}
      <svg width="44" height="44" viewBox="0 0 56 56" className="mx-auto mb-4 z-10">
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="28" cy="14" rx="7" ry="12" fill="#d4a574" opacity="0.6" transform={`rotate(${r} 28 28)`} />
        ))}
        <circle cx="28" cy="28" r="5" fill="#c9a96e" />
      </svg>

      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center z-10">
        Your garden is ready
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-6 text-center z-10">
        Here is what we have planted
      </p>

      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: "24px 20px", width: "100%", maxWidth: 340,
        position: "relative",
      }} className="z-10">
        {/* Botanical corner accents */}
        <svg style={{ position: "absolute", top: -1, left: -1, opacity: 0.15 }} width="50" height="50" viewBox="0 0 50 50">
          <path d="M0 0 Q20 5 25 25 Q5 20 0 0z" fill="none" stroke="#d4a574" strokeWidth="0.8" />
        </svg>
        <svg style={{ position: "absolute", bottom: -1, right: -1, opacity: 0.15, transform: "rotate(180deg)" }} width="50" height="50" viewBox="0 0 50 50">
          <path d="M0 0 Q20 5 25 25 Q5 20 0 0z" fill="none" stroke="#d4a574" strokeWidth="0.8" />
        </svg>

        {items.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center py-3">
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{item.label}</span>
              <span style={{ color: "#d4a574", fontSize: "0.85rem", fontWeight: 500 }}>{item.value}</span>
            </div>
            {i < items.length - 1 && <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />}
          </div>
        ))}
      </div>

      <div style={{
        background: "rgba(6,78,59,0.15)", border: "1px solid rgba(6,78,59,0.25)",
        borderRadius: 12, padding: "10px 16px", marginTop: 16, maxWidth: 340,
      }} className="flex items-center gap-2 z-10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#2d8a6e">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" />
        </svg>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>
          Your data stays on your device
        </p>
      </div>

      <button onClick={() => setEntered(true)} style={{
        background: "linear-gradient(135deg, #d4a574, #c9a96e)",
        color: "#0a1a14", fontWeight: 600, fontSize: "1rem",
        padding: "14px 48px", borderRadius: 28, border: "none", cursor: "pointer",
        boxShadow: "0 4px 24px rgba(212,165,116,0.35)",
        transform: entered ? "scale(0.96)" : "scale(1)",
        transition: "all 0.2s ease",
      }} className="mt-8 z-10">
        Enter your garden
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }} className="z-10">
        Step 9 of 9
      </p>
    </div>
  );
}
