"use client";
import { useState, useEffect } from "react";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState({
    period: true, fertile: false, mood: true, medication: false, insights: true,
  });
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const notifications = [
    { key: "period" as const, title: "Period Reminders", desc: "Gentle heads-up before your cycle begins", color: "#f9a8c9" },
    { key: "fertile" as const, title: "Fertile Window", desc: "Know when you are most fertile", color: "#c4b5e0" },
    { key: "mood" as const, title: "Mood Check-in", desc: "Daily invitation to paint your mood", color: "#fcd5b4" },
    { key: "medication" as const, title: "Medication", desc: "Soft nudges for pills or supplements", color: "#c4b5e0" },
    { key: "insights" as const, title: "Weekly Insights", desc: "A summary of your cycle patterns", color: "#f9a8c9" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background washes */}
      <div className="absolute" style={{
        width: 260, height: 240, top: "5%", right: "-8%",
        borderRadius: "48% 52% 55% 45% / 50% 46% 54% 50%",
        background: "radial-gradient(ellipse, rgba(252,213,180,0.2) 0%, transparent 70%)",
        filter: "blur(45px)",
      }} />

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>Gentle Reminders</h2>
      <p className="text-center text-sm mb-10 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.15s both" : "none",
      }}>Choose which whispers to receive</p>

      <div className="max-w-sm mx-auto w-full flex flex-col relative z-10">
        {notifications.map((n, i) => (
          <div key={n.key}>
            <div className="flex items-center justify-between py-5" style={{
              opacity: visible ? 1 : 0,
              animation: visible ? `fadeIn 0.8s ease-out ${0.25 + i * 0.1}s both` : "none",
            }}>
              <div className="flex-1 pr-4">
                <h3 className="text-sm font-normal mb-1" style={{
                  fontFamily: "Georgia, serif", color: "#3d2c2c",
                }}>{n.title}</h3>
                <p className="text-xs" style={{ color: "rgba(61,44,44,0.4)", fontWeight: 300, lineHeight: 1.5 }}>
                  {n.desc}
                </p>
              </div>

              {/* Toggle switch */}
              <button onClick={() => toggle(n.key)} className="relative border-0 cursor-pointer p-0 flex-shrink-0"
                style={{
                  width: 48, height: 28, borderRadius: 14,
                  background: settings[n.key]
                    ? `linear-gradient(135deg, ${n.color}, ${n.color}cc)`
                    : "rgba(61,44,44,0.08)",
                  transition: "all 0.4s ease",
                  boxShadow: settings[n.key] ? `0 2px 12px ${n.color}33` : "none",
                }}>
                <div className="absolute rounded-full" style={{
                  width: 22, height: 22, top: 3,
                  left: settings[n.key] ? 23 : 3,
                  background: "#fefefe",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  transition: "left 0.3s ease",
                }} />
              </button>
            </div>

            {/* Watercolor divider wash */}
            {i < notifications.length - 1 && (
              <div className="relative h-px w-full overflow-visible">
                <div style={{
                  position: "absolute", left: "10%", right: "10%", height: 1,
                  background: `linear-gradient(90deg, transparent, ${notifications[i + 1].color}30, transparent)`,
                }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="block mx-auto mt-auto px-10 py-3.5 rounded-full text-sm tracking-widest border-0 cursor-pointer relative z-10"
        style={{
          background: "linear-gradient(135deg, #f9a8c9, #e898b8)", color: "#fefefe",
          fontWeight: 400, letterSpacing: "0.12em",
          boxShadow: "0 8px 32px rgba(249,168,201,0.25)",
        }}>Continue</button>

      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 7 ? 18 : 6, height: 6,
            background: i === 7 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
