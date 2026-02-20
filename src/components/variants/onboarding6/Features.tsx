"use client";
import { useState } from "react";

const features = [
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Precision Tracking", desc: "AI-powered cycle predictions with 96% accuracy. Know exactly when to expect each phase." },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m14 0v-6a2 2 0 012-2h2a2 2 0 012 2v6", title: "Smart Insights", desc: "Personalized health analytics that adapt to your unique patterns over time." },
  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Private & Secure", desc: "End-to-end encryption. Your health data stays on your device, always." },
];

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`}</style>

      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Why Frost</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Designed for clarity</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      <div className="w-full max-w-sm flex flex-col gap-4">
        {features.map((f, i) => (
          <button
            key={i}
            className="w-full text-left rounded-xl border-0 cursor-pointer transition-all duration-300 flex items-start gap-4 p-5"
            style={{
              backgroundColor: active === i ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              borderLeft: `3px solid ${active === i ? "#4b7bec" : "#e2e8f0"}`,
              boxShadow: active === i ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
              animation: `fadeUp 0.6s ease-out ${i * 0.15}s both`,
            }}
            onClick={() => setActive(i)}
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
              style={{ backgroundColor: active === i ? "#4b7bec" : "#f0f4f8" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active === i ? "#ffffff" : "#94a3b8"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={f.icon} />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "#1e293b" }}>{f.title}</h3>
              <p className="text-xs leading-relaxed m-0" style={{ color: "#64748b" }}>{f.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Page dots */}
      <div className="flex gap-2 mt-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 1 ? 20 : 6, height: 6, backgroundColor: i === 1 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
