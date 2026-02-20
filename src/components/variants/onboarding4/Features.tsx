"use client";

import { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);

  const features = [
    { title: "Cycle Tracking", desc: "Follow your rhythm through every season of your cycle with intuitive, visual insights.", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3 3 0 110 6 3 3 0 010-6z" },
    { title: "Symptom Garden", desc: "Log how you feel each day and watch patterns bloom over time.", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
    { title: "Private Sanctuary", desc: "Your data stays rooted on your device. No clouds, no sharing, no compromise.", icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" },
  ];

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Leaf decoration */}
      <svg style={{ position: "absolute", top: 20, right: 20, opacity: 0.06 }} width="80" height="120" viewBox="0 0 80 120">
        <path d="M40 120 Q38 80 10 50 Q30 60 40 10 Q50 60 70 50 Q42 80 40 120z" fill="#064e3b" />
      </svg>
      <svg style={{ position: "absolute", bottom: 40, left: 16, opacity: 0.06 }} width="60" height="100" viewBox="0 0 60 100">
        <path d="M30 100 Q28 65 5 40 Q25 48 30 5 Q35 48 55 40 Q32 65 30 100z" fill="#064e3b" />
      </svg>

      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.7rem" }} className="mb-2 text-center">
        What Bloom offers
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }} className="mb-8 text-center">
        Tools that grow with you
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {features.map((f, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            background: active === i ? "rgba(6,78,59,0.25)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${active === i ? "rgba(212,165,116,0.3)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 16, padding: "18px 16px", textAlign: "left", cursor: "pointer",
            transition: "all 0.3s ease",
          }} className="flex items-start gap-4">
            <div style={{
              background: active === i ? "rgba(212,165,116,0.15)" : "rgba(255,255,255,0.06)",
              borderRadius: 12, padding: 10, flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill={active === i ? "#d4a574" : "rgba(255,255,255,0.4)"}>
                <path d={f.icon} />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", color: active === i ? "#d4a574" : "rgba(255,255,255,0.85)", fontSize: "1.05rem" }} className="mb-1">
                {f.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", lineHeight: 1.5 }}>
                {f.desc}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-2 mt-8">
        {features.map((_, i) => (
          <div key={i} style={{
            width: active === i ? 20 : 6, height: 6, borderRadius: 3,
            background: active === i ? "#d4a574" : "rgba(255,255,255,0.15)",
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>

      <button style={{
        background: "linear-gradient(135deg, #d4a574, #c9a96e)",
        color: "#0a1a14", fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none", cursor: "pointer",
        boxShadow: "0 4px 20px rgba(212,165,116,0.3)",
      }} className="mt-8 transition-transform active:scale-95">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 2 of 9
      </p>
    </div>
  );
}
