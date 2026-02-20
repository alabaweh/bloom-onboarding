"use client";
import { useState } from "react";

export default function Notifications() {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    period: true,
    fertile: false,
    symptoms: true,
    daily: false,
    weekly: true,
  });

  const notifications = [
    { id: "period", title: "Period Reminders", desc: "Get notified before your period starts" },
    { id: "fertile", title: "Fertility Alerts", desc: "Know when your fertile window opens" },
    { id: "symptoms", title: "Daily Check-in", desc: "A gentle nudge to log how you feel" },
    { id: "daily", title: "Morning Insight", desc: "Start your day with cycle-aware guidance" },
    { id: "weekly", title: "Weekly Reflection", desc: "A summary of your week and patterns" },
  ];

  const toggle = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      <div className="absolute" style={{
        width: 250, height: 250, borderRadius: "50%",
        background: "radial-gradient(circle, #d4b483 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.18, top: "10%", left: "-8%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          Stay Connected
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          Choose which gentle reminders you would like
        </p>

        <div className="space-y-3">
          {notifications.map((n) => {
            const isOn = settings[n.id];
            return (
              <button key={n.id} onClick={() => toggle(n.id)}
                className="w-full rounded-2xl p-4 flex items-center gap-4 text-left cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: isOn ? "1px solid rgba(196,181,224,0.25)" : "1px solid rgba(255,255,255,0.1)",
                }}>
                <div className="flex-1">
                  <p className="text-sm font-semibold"
                    style={{ fontFamily: "Georgia, serif", color: isOn ? "#c4b5e0" : "rgba(255,255,255,0.5)" }}>
                    {n.title}
                  </p>
                  <p className="text-xs mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "system-ui" }}>
                    {n.desc}
                  </p>
                </div>
                {/* Toggle */}
                <div className="shrink-0 rounded-full relative" style={{
                  width: 48, height: 28,
                  background: isOn ? "rgba(196,181,224,0.3)" : "rgba(255,255,255,0.1)",
                  transition: "background 0.2s",
                }}>
                  <div className="absolute top-1 rounded-full transition-all duration-200" style={{
                    width: 20, height: 20,
                    left: isOn ? 26 : 2,
                    background: isOn ? "#c4b5e0" : "rgba(255,255,255,0.3)",
                    boxShadow: isOn ? "0 0 8px rgba(212,180,131,0.4)" : "none",
                  }} />
                </div>
              </button>
            );
          })}
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
              width: i === 7 ? 18 : 6, height: 6,
              background: i === 7 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 7 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
