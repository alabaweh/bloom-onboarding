"use client";

import { useState } from "react";

export default function Notifications() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    period: true, fertile: false, symptoms: true, wellness: false, weekly: true,
  });

  const fireflies = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 1.5 + Math.random() * 2,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 3,
  }));

  const items = [
    { key: "period", label: "Period reminders", desc: "Get notified before your period starts" },
    { key: "fertile", label: "Fertile window", desc: "Know your most fertile days" },
    { key: "symptoms", label: "Symptom check-in", desc: "Daily nudge to log how you feel" },
    { key: "wellness", label: "Wellness tips", desc: "Personalized care for each phase" },
    { key: "weekly", label: "Weekly insights", desc: "Your garden summary each week" },
  ];

  const toggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">
      <style>{`
        @keyframes fireflyGlow { 0%,100% { opacity:0.15; } 50% { opacity:0.8; } }
        @keyframes fireflyDrift { 0%,100% { transform:translate(0,0); } 50% { transform:translate(6px,-8px); } }
      `}</style>

      {fireflies.map((f) => (
        <div key={f.id} style={{
          position: "absolute", left: f.left, top: f.top, width: f.size, height: f.size,
          borderRadius: "50%", background: "#c9a96e",
          boxShadow: "0 0 4px 1px rgba(201,169,110,0.4)",
          animation: `fireflyGlow ${f.duration}s ease-in-out ${f.delay}s infinite, fireflyDrift ${f.duration + 1}s ease-in-out ${f.delay}s infinite`,
        }} />
      ))}

      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center z-10">
        Gentle reminders
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-8 text-center z-10">
        Choose what nurtures you
      </p>

      <div style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: "8px 0", width: "100%", maxWidth: 360,
      }} className="z-10">
        {items.map((item, i) => {
          const on = toggles[item.key];
          return (
            <div key={item.key}>
              <button onClick={() => toggle(item.key)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "14px 20px" }}
                className="flex items-center justify-between">
                <div className="text-left">
                  <p style={{ color: on ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)", fontSize: "0.92rem", fontWeight: 500 }}>
                    {item.label}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>{item.desc}</p>
                </div>
                <div style={{
                  width: 44, height: 24, borderRadius: 12, padding: 2, flexShrink: 0,
                  background: on ? "rgba(212,165,116,0.3)" : "rgba(255,255,255,0.1)",
                  border: `1px solid ${on ? "rgba(212,165,116,0.5)" : "rgba(255,255,255,0.15)"}`,
                  transition: "all 0.3s ease", position: "relative",
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: "50%",
                    background: on ? "#d4a574" : "rgba(255,255,255,0.3)",
                    boxShadow: on ? "0 0 8px rgba(212,165,116,0.5)" : "none",
                    transform: on ? "translateX(20px)" : "translateX(0)",
                    transition: "all 0.3s ease",
                  }} />
                </div>
              </button>
              {i < items.length - 1 && (
                <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0 20px" }} />
              )}
            </div>
          );
        })}
      </div>

      <button style={{
        background: "linear-gradient(135deg, #d4a574, #c9a96e)",
        color: "#0a1a14", fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none", cursor: "pointer",
        boxShadow: "0 4px 20px rgba(212,165,116,0.3)",
      }} className="mt-8 z-10 transition-transform active:scale-95">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }} className="z-10">
        Step 8 of 9
      </p>
    </div>
  );
}
