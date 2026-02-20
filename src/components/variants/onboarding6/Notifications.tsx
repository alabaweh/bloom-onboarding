"use client";
import { useState } from "react";

const items = [
  { key: "period", label: "Period Reminders", desc: "Notified 2 days before your period starts" },
  { key: "fertile", label: "Fertile Window", desc: "Know when your fertile window opens" },
  { key: "symptoms", label: "Symptom Logging", desc: "Daily reminders to log how you feel" },
  { key: "wellness", label: "Wellness Tips", desc: "Phase-specific health suggestions" },
  { key: "weekly", label: "Weekly Summary", desc: "A concise overview of your week" },
];

export default function Notifications() {
  const [settings, setSettings] = useState({
    period: true,
    fertile: false,
    symptoms: true,
    wellness: false,
    weekly: true,
  });

  const toggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#94a3b8" }}>Preferences</p>
      <h2 className="text-2xl font-light mb-1" style={{ color: "#1e293b" }}>Notifications</h2>
      <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: "#4b7bec" }} />

      <div
        className="w-full max-w-sm rounded-xl p-5"
        style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      >
        {items.map((item, i) => {
          const isOn = settings[item.key as keyof typeof settings];
          return (
            <div key={item.key}>
              <div className="flex items-center justify-between py-3.5">
                <div className="flex-1 mr-4">
                  <p className="text-sm font-medium" style={{ color: "#1e293b" }}>{item.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "#94a3b8" }}>{item.desc}</p>
                </div>
                {/* Toggle */}
                <button
                  onClick={() => toggle(item.key)}
                  className="relative border-0 cursor-pointer rounded-full p-0 flex-shrink-0"
                  style={{
                    width: 44,
                    height: 24,
                    backgroundColor: isOn ? "#dbeafe" : "#e2e8f0",
                    transition: "background-color 0.3s",
                  }}
                >
                  <div
                    className="absolute top-1 rounded-full transition-all duration-300"
                    style={{
                      width: 16,
                      height: 16,
                      backgroundColor: isOn ? "#4b7bec" : "#94a3b8",
                      left: isOn ? 24 : 4,
                      boxShadow: isOn ? "0 1px 4px rgba(75,123,236,0.3)" : "none",
                    }}
                  />
                </button>
              </div>
              {i < items.length - 1 && <div className="w-full h-px" style={{ backgroundColor: "#f1f5f9" }} />}
            </div>
          );
        })}
      </div>

      {/* Active count */}
      <div className="mt-4 px-4 py-2 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
        <p className="text-xs" style={{ color: "#94a3b8" }}>
          <span style={{ color: "#4b7bec", fontWeight: 600 }}>{Object.values(settings).filter(Boolean).length}</span> of {items.length} enabled
        </p>
      </div>

      {/* Page dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 7 ? 20 : 6, height: 6, backgroundColor: i === 7 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
