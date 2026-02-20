"use client";

import { useState, useEffect } from "react";

export default function Welcome() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const fireflies = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6">
      <style>{`
        @keyframes fireflyPulse { 0%,100% { opacity:0.2; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.2); } }
        @keyframes fireflyFloat { 0%,100% { transform:translateY(0) translateX(0); } 33% { transform:translateY(-12px) translateX(8px); } 66% { transform:translateY(6px) translateX(-6px); } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      {fireflies.map((f) => (
        <div key={f.id} style={{
          position: "absolute", left: f.left, top: f.top, width: f.size, height: f.size,
          borderRadius: "50%", background: "#c9a96e",
          boxShadow: "0 0 6px 2px rgba(201,169,110,0.5), 0 0 12px 4px rgba(201,169,110,0.2)",
          animation: `fireflyPulse ${f.duration}s ease-in-out ${f.delay}s infinite, fireflyFloat ${f.duration + 2}s ease-in-out ${f.delay}s infinite`,
        }} />
      ))}

      {/* Botanical silhouettes */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.08 }} width="200" height="300" viewBox="0 0 200 300">
        <path d="M30 300 Q40 240 20 200 Q60 220 50 160 Q80 200 70 140 Q100 180 90 120 Q60 100 80 60" stroke="#d4a574" strokeWidth="1.5" fill="none" />
        <ellipse cx="80" cy="55" rx="18" ry="25" fill="#064e3b" transform="rotate(-15 80 55)" />
        <ellipse cx="55" cy="90" rx="15" ry="22" fill="#064e3b" transform="rotate(20 55 90)" />
      </svg>
      <svg style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.08 }} width="180" height="280" viewBox="0 0 180 280">
        <path d="M150 280 Q140 220 160 180 Q120 200 130 140 Q100 170 110 110" stroke="#d4a574" strokeWidth="1.5" fill="none" />
        <ellipse cx="110" cy="105" rx="16" ry="24" fill="#064e3b" transform="rotate(10 110 105)" />
      </svg>

      <div style={{ animation: visible ? "fadeUp 0.8s ease-out" : "none", opacity: visible ? 1 : 0 }} className="text-center z-10">
        {/* Bloom flower icon */}
        <svg width="56" height="56" viewBox="0 0 56 56" className="mx-auto mb-5">
          {[0, 60, 120, 180, 240, 300].map((r) => (
            <ellipse key={r} cx="28" cy="14" rx="8" ry="14" fill="#d4a574" opacity="0.7" transform={`rotate(${r} 28 28)`} />
          ))}
          <circle cx="28" cy="28" r="6" fill="#c9a96e" />
        </svg>

        <h1 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "2.8rem", fontWeight: 400, letterSpacing: "0.04em" }} className="mb-3">
          Bloom
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", fontStyle: "italic", letterSpacing: "0.02em" }} className="mb-10">
          Your private garden
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.6, maxWidth: 280 }} className="mx-auto mb-12">
          A sanctuary for understanding your body, rooted in nature and guided by care.
        </p>

        <button style={{
          background: "linear-gradient(135deg, #d4a574, #c9a96e)",
          color: "#0a1a14", fontWeight: 600, fontSize: "1rem",
          padding: "14px 48px", borderRadius: 28, border: "none", cursor: "pointer",
          boxShadow: "0 4px 20px rgba(212,165,116,0.3)",
        }} className="transition-transform active:scale-95">
          Begin your journey
        </button>
      </div>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 1 of 9
      </p>
    </div>
  );
}
