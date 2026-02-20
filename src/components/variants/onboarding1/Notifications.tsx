"use client";
import { useState, useEffect } from "react";

export default function Notifications() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    period: true, fertile: false, pms: true, daily: false, weekly: true,
  });
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 30 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 4,
    })));
  }, []);

  const notifications = [
    { id: "period", label: "Period Reminder", desc: "2 days before your predicted start", beaconAngle: 0 },
    { id: "fertile", label: "Fertile Window", desc: "When your fertile window opens", beaconAngle: 72 },
    { id: "pms", label: "PMS Alert", desc: "Heads up for pre-menstrual phase", beaconAngle: 144 },
    { id: "daily", label: "Daily Check-in", desc: "Gentle nudge to log symptoms", beaconAngle: 216 },
    { id: "weekly", label: "Weekly Insights", desc: "Cosmic summary of your patterns", beaconAngle: 288 },
  ];

  const toggle = (id: string) => setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  const activeCount = Object.values(toggles).filter(Boolean).length;

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes beaconPulse { 0%,100% { r: 3; opacity: 0.8; } 50% { r: 6; opacity: 0.3; } }
        @keyframes signalRing { 0% { r: 8; opacity: 0.4; } 100% { r: 24; opacity: 0; } }
      `}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.4,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
        SIGNALS
      </h2>
      <p className="text-center text-sm mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
        Choose your celestial notifications
      </p>

      <div className="flex justify-center mb-8">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(245,216,130,0.06)" strokeWidth="0.5" />
          <circle cx="60" cy="60" r="6" fill="rgba(245,216,130,0.15)" />
          <circle cx="60" cy="60" r="3" fill="#f5d882" opacity="0.6" />
          {notifications.map((n) => {
            const rad = ((n.beaconAngle - 90) * Math.PI) / 180;
            const bx = 60 + 40 * Math.cos(rad);
            const by = 60 + 40 * Math.sin(rad);
            const on = toggles[n.id];
            return (
              <g key={n.id}>
                <line x1="60" y1="60" x2={bx} y2={by} stroke={on ? "rgba(245,216,130,0.2)" : "rgba(245,216,130,0.04)"} strokeWidth="0.5" />
                {on && <circle cx={bx} cy={by} r="8" fill="none" stroke="#f5d882" strokeWidth="0.5" opacity="0.3">
                  <animate attributeName="r" values="8;22;8" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                </circle>}
                <circle cx={bx} cy={by} r={on ? 4 : 2.5} fill={on ? "#f5d882" : "rgba(245,216,130,0.15)"}
                  style={on ? { filter: "drop-shadow(0 0 6px rgba(245,216,130,0.6))" } : {}}>
                  {on && <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />}
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex-1 max-w-sm mx-auto w-full flex flex-col gap-3">
        {notifications.map((n) => {
          const on = toggles[n.id];
          return (
            <button key={n.id} onClick={() => toggle(n.id)}
              className="flex items-center gap-4 p-4 rounded-xl border-0 cursor-pointer w-full text-left"
              style={{
                background: on ? "rgba(245,216,130,0.06)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${on ? "rgba(245,216,130,0.2)" : "rgba(255,255,255,0.05)"}`,
                transition: "all 0.3s ease",
              }}>
              <div className="relative flex-shrink-0">
                <div className="rounded-full" style={{
                  width: 40, height: 40,
                  background: on ? "rgba(245,216,130,0.12)" : "rgba(255,255,255,0.03)",
                  border: `1.5px solid ${on ? "rgba(245,216,130,0.4)" : "rgba(255,255,255,0.08)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: on ? "0 0 20px rgba(245,216,130,0.15)" : "none",
                }}>
                  <div className="rounded-full" style={{
                    width: on ? 12 : 6, height: on ? 12 : 6,
                    background: on ? "#f5d882" : "rgba(255,255,255,0.1)",
                    boxShadow: on ? "0 0 8px #f5d882" : "none",
                    transition: "all 0.3s ease",
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                  }} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-0.5" style={{ color: on ? "#f5d882" : "rgba(255,255,255,0.5)" }}>
                  {n.label}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{n.desc}</p>
              </div>
              <div className="w-10 h-5 rounded-full relative flex-shrink-0" style={{
                background: on ? "rgba(245,216,130,0.3)" : "rgba(255,255,255,0.06)",
                transition: "background 0.3s ease",
              }}>
                <div className="absolute top-0.5 rounded-full" style={{
                  width: 16, height: 16,
                  left: on ? 20 : 2,
                  background: on ? "#f5d882" : "rgba(255,255,255,0.15)",
                  boxShadow: on ? "0 0 6px rgba(245,216,130,0.5)" : "none",
                  transition: "all 0.3s ease",
                }} />
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs mt-4 mb-4" style={{ color: "rgba(245,216,130,0.3)" }}>
        {activeCount} signal{activeCount !== 1 ? "s" : ""} active
      </p>

      <button className="mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #f5d882, #d4a843)", color: "#0c0a1d" }}>
        Continue
      </button>
    </div>
  );
}
