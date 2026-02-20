"use client";
import { useState } from "react";

export default function Notifications() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    period: true, fertility: false, symptoms: true, insights: false, wellness: true,
  });

  const toggle = (key: string) => setToggles((p) => ({ ...p, [key]: !p[key] }));

  const items = [
    { key: "period", label: "Period reminders", desc: "Gentle heads-up before your cycle" },
    { key: "fertility", label: "Fertility window", desc: "Know your fertile days" },
    { key: "symptoms", label: "Daily check-in", desc: "A moment to log how you feel" },
    { key: "insights", label: "Weekly insights", desc: "Patterns and gentle guidance" },
    { key: "wellness", label: "Wellness nudges", desc: "Hydration, rest, and care" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute top-[-30px] right-[-20px] w-36 h-36 opacity-10" style={{ background: "#c27a56", borderRadius: "45% 55% 50% 50% / 55% 45% 50% 50%" }} />

      <h2 className="text-3xl font-bold mb-1 text-center" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>Stay connected</h2>
      <p className="text-sm mb-8" style={{ color: "#8b6b4a" }}>Choose your gentle reminders</p>

      <div className="w-full max-w-sm space-y-3">
        {items.map((n) => {
          const on = toggles[n.key];
          return (
            <div key={n.key} className="flex items-center justify-between p-4 transition-all duration-200" style={{
              background: on ? "#e8d5c0" : "#f5ede3",
              borderRadius: "22px 28px 24px 26px / 26px 22px 28px 24px",
              border: on ? "2px solid #c27a5640" : "2px solid #e8d5c0",
            }}>
              <div className="flex-1">
                <h4 className="text-sm font-bold mb-0.5" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>{n.label}</h4>
                <p className="text-xs" style={{ color: "#8b6b4a" }}>{n.desc}</p>
              </div>
              <button onClick={() => toggle(n.key)} className="relative cursor-pointer" style={{ width: 52, height: 28, borderRadius: "50px", background: on ? "#c27a56" : "#e8d5c0", border: "none", transition: "background 0.2s" }}>
                <div className="absolute top-1 transition-all duration-200" style={{
                  width: 20, height: 20, borderRadius: "50% 45% 55% 50% / 45% 55% 50% 50%",
                  background: on ? "#fff" : "#8b6b4a50",
                  left: on ? 28 : 4,
                  boxShadow: "0 1px 4px #00000015",
                }} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-4 py-2 px-4 rounded-2xl" style={{ background: "#e8d5c0" }}>
        <span className="text-xs" style={{ color: "#8b6b4a" }}>
          {Object.values(toggles).filter(Boolean).length} of {items.length} active
        </span>
      </div>

      <div className="flex gap-2 mt-8">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 7 ? 24 : 8, background: i === 7 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
