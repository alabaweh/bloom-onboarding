"use client";
import { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);

  const features = [
    {
      icon: "🔮",
      title: "Smart Predictions",
      desc: "AI-powered cycle forecasting that learns your unique rhythm and adapts over time.",
      gradient: "radial-gradient(circle at 30% 70%, #8b5cf6 0%, #ff6467 70%, transparent 90%)",
      accent: "#8b5cf6",
    },
    {
      icon: "⚡",
      title: "Energy Mapping",
      desc: "Know your high and low energy days so you can plan your life around your flow.",
      gradient: "radial-gradient(circle at 70% 30%, #fbbf24 0%, #ff6467 70%, transparent 90%)",
      accent: "#ff6467",
    },
    {
      icon: "🌊",
      title: "Mood Waves",
      desc: "Track emotional patterns and discover what vibes with each phase of your cycle.",
      gradient: "radial-gradient(circle at 50% 50%, #38bdf8 0%, #8b5cf6 70%, transparent 90%)",
      accent: "#38bdf8",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes blobPeek { 0%,100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.1) rotate(5deg); } }
        @keyframes slideIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      <h2 className="text-3xl font-black text-center mb-2 relative z-10" style={{ color: "#111111" }}>
        Your Superpowers
      </h2>
      <p className="text-sm text-center mb-10 relative z-10" style={{ color: "#6b7280" }}>
        Everything you need to own your cycle
      </p>

      <div className="flex flex-col gap-6 w-full max-w-sm relative z-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="relative cursor-pointer"
            onClick={() => setActive(i)}
            style={{ animation: `slideIn 0.5s ease-out ${i * 0.15}s both` }}
          >
            {/* Gradient blob peeking behind card */}
            <div
              className="absolute rounded-full"
              style={{
                width: 140, height: 140,
                top: -20, right: i % 2 === 0 ? -30 : "auto", left: i % 2 !== 0 ? -30 : "auto",
                background: f.gradient,
                filter: "blur(40px)", opacity: active === i ? 0.8 : 0.3,
                animation: "blobPeek 6s ease-in-out infinite",
                animationDelay: `${i * 1.5}s`,
                transition: "opacity 0.4s ease",
              }}
            />
            {/* Card */}
            <div
              className="relative rounded-2xl p-5 backdrop-blur-sm transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: active === i ? `2px solid ${f.accent}` : "2px solid #f3f4f6",
                boxShadow: active === i ? `0 8px 30px ${f.accent}22` : "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: active === i ? `${f.accent}15` : "#f9fafb" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#111111" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10 relative z-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 1 ? 24 : 8, height: 8,
            background: i === 1 ? "linear-gradient(90deg, #ff6467, #fbbf24)" : "#e5e7eb",
          }} />
        ))}
      </div>
    </div>
  );
}
