"use client";
import { useState } from "react";

export default function Notifications() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    period: true,
    fertile: true,
    symptoms: false,
    mood: false,
    wellness: false,
  });

  const notifications = [
    { id: "period", icon: "🩸", title: "Period Reminders", desc: "Get notified before your period starts", gradient: "linear-gradient(135deg, #ff6467, #8b5cf6)" },
    { id: "fertile", icon: "🌸", title: "Fertile Window", desc: "Know when you're most fertile", gradient: "linear-gradient(135deg, #fbbf24, #ff6467)" },
    { id: "symptoms", icon: "📝", title: "Symptom Logging", desc: "Daily reminder to log how you feel", gradient: "linear-gradient(135deg, #8b5cf6, #38bdf8)" },
    { id: "mood", icon: "💜", title: "Mood Check-ins", desc: "Quick emotional pulse throughout the day", gradient: "linear-gradient(135deg, #38bdf8, #fbbf24)" },
    { id: "wellness", icon: "🧘", title: "Wellness Tips", desc: "Phase-specific self-care suggestions", gradient: "linear-gradient(135deg, #8b5cf6, #fbbf24)" },
  ];

  const handleToggle = (id: string) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Background blobs */}
      <div className="absolute rounded-full" style={{
        width: 320, height: 320, top: -120, right: -100,
        background: "radial-gradient(circle, #8b5cf6, #38bdf8 70%, transparent 90%)",
        filter: "blur(55px)", opacity: 0.3,
      }} />
      <div className="absolute rounded-full" style={{
        width: 220, height: 220, bottom: 40, left: -60,
        background: "radial-gradient(circle, #fbbf24, #ff6467 70%, transparent 90%)",
        filter: "blur(45px)", opacity: 0.25,
      }} />

      <div className="relative z-10 flex-1 flex flex-col items-center">
        <h2 className="text-3xl font-black text-center mb-1" style={{ color: "#111111" }}>
          Stay in the Loop
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: "#6b7280" }}>
          Choose your notification vibes
        </p>

        <div className="w-full max-w-sm space-y-3">
          {notifications.map((n) => {
            const isOn = toggles[n.id];
            return (
              <div
                key={n.id}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                style={{
                  background: isOn ? "#fafafa" : "#f9fafb",
                  border: isOn ? "1px solid #e5e7eb" : "1px solid #f3f4f6",
                }}
              >
                <div className="text-xl flex-shrink-0">{n.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm" style={{ color: "#111111" }}>{n.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{n.desc}</p>
                </div>
                {/* Toggle switch */}
                <button
                  onClick={() => handleToggle(n.id)}
                  className="relative flex-shrink-0 border-0 cursor-pointer p-0 transition-all duration-300"
                  style={{
                    width: 52, height: 28, borderRadius: 14,
                    background: isOn ? "#e5e7eb" : "#f3f4f6",
                  }}
                >
                  {/* Track glow when active */}
                  {isOn && (
                    <div className="absolute inset-0 rounded-full opacity-30" style={{ background: n.gradient }} />
                  )}
                  {/* Knob */}
                  <div
                    className="absolute top-1 rounded-full transition-all duration-300"
                    style={{
                      width: 20, height: 20,
                      left: isOn ? 28 : 4,
                      background: isOn ? n.gradient : "#d1d5db",
                      boxShadow: isOn ? "0 2px 8px rgba(139,92,246,0.3)" : "none",
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <button
          className="mt-8 px-10 py-3.5 rounded-full text-base font-bold border-0 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #ff6467)",
            color: "#ffffff",
          }}
        >
          Continue
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 7 ? 24 : 8, height: 8,
              background: i === 7 ? "linear-gradient(90deg, #38bdf8, #8b5cf6)" : "#e5e7eb",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
