"use client";
import { useState } from "react";

export default function Notifications() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    period: true,
    fertility: false,
    symptoms: true,
    wellness: false,
    weekly: true,
  });

  const notifications = [
    { key: "period", title: "Period Reminders", desc: "Get notified before your period starts", rotate: -0.5 },
    { key: "fertility", title: "Fertility Window", desc: "Know when your fertile days arrive", rotate: 0.8 },
    { key: "symptoms", title: "Symptom Logging", desc: "Daily prompts to log how you feel", rotate: -0.3 },
    { key: "wellness", title: "Wellness Tips", desc: "Phase-specific health suggestions", rotate: 0.6 },
    { key: "weekly", title: "Weekly Digest", desc: "A summary letter of your week", rotate: -0.7 },
  ];

  const toggle = (key: string) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        Stay in Touch
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Choose your gentle reminders
      </p>

      <div className="max-w-sm mx-auto w-full relative z-10 space-y-3">
        {notifications.map(n => {
          const isOn = toggles[n.key];
          return (
            <div key={n.key} className="rounded-xl p-4 flex items-center justify-between transition-all duration-300"
              style={{
                background: "#fff", transform: `rotate(${n.rotate}deg)`,
                boxShadow: "0 2px 8px rgba(74,55,40,0.1), 0 1px 3px rgba(74,55,40,0.06)",
              }}>
              <div className="flex-1 mr-4">
                <h3 className="text-sm font-medium" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
                  {n.title}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: "#4a3728", opacity: 0.5 }}>
                  {n.desc}
                </p>
              </div>

              {/* Paper-style toggle */}
              <button onClick={() => toggle(n.key)}
                className="relative rounded-full border-0 cursor-pointer flex-shrink-0 transition-all duration-300"
                style={{
                  width: 48, height: 26,
                  background: isOn ? "#e8735a" : "#e8ddd0",
                  boxShadow: "inset 0 1px 3px rgba(74,55,40,0.15)",
                }}>
                <div className="absolute rounded-full transition-all duration-300" style={{
                  width: 20, height: 20, top: 3,
                  left: isOn ? 25 : 3,
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(74,55,40,0.2), 0 1px 2px rgba(74,55,40,0.1)",
                }} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 7 ? 18 : 6, height: 6,
            background: i === 7 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
