"use client";
import { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);

  const features = [
    { icon: "\u2728", title: "Cycle Intelligence", desc: "Predictive tracking that learns your unique rhythm and adapts to your body over time." },
    { icon: "\u2661", title: "Symptom Insights", desc: "Log and decode patterns in your symptoms with intuitive visualizations and correlations." },
    { icon: "\u263E", title: "Wellness Harmony", desc: "Sleep, mood, and energy aligned to your cycle phases for holistic well-being." },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      {/* Mist blobs */}
      <div className="absolute" style={{
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, #c4b5e0 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.2, top: "-5%", right: "-10%",
      }} />
      <div className="absolute" style={{
        width: 220, height: 220, borderRadius: "50%",
        background: "radial-gradient(circle, #d4b483 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.15, bottom: "10%", left: "-5%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          What Aura Offers
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          Intuitive tools designed for your journey
        </p>

        <div className="space-y-4">
          {features.map((f, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="w-full rounded-2xl p-5 text-left cursor-pointer transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: active === i ? "1px solid rgba(196,181,224,0.4)" : "1px solid rgba(255,255,255,0.1)",
                boxShadow: active === i ? "0 0 20px rgba(196,181,224,0.15)" : "none",
              }}>
              <div className="flex items-start gap-4">
                {/* Icon with purple glow */}
                <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(196,181,224,0.2), rgba(212,180,131,0.15))",
                    boxShadow: active === i ? "0 0 16px rgba(196,181,224,0.3)" : "none",
                  }}>
                  <span style={{ fontSize: 22 }}>{f.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1"
                    style={{ fontFamily: "Georgia, serif", color: active === i ? "#d4b483" : "#c4b5e0" }}>
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "system-ui" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button className="w-full mt-8 rounded-2xl py-4 text-sm font-semibold cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #c4b5e0 0%, #a89cc8 100%)",
            color: "#1a0e2e", fontFamily: "system-ui",
          }}>
          Continue
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 1 ? 18 : 6, height: 6,
              background: i === 1 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 1 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
