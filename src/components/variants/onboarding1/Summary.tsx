"use client";
import { useState, useEffect } from "react";

export default function Summary() {
  const [visible, setVisible] = useState(false);
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 40 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 5,
    })));
    setTimeout(() => setVisible(true), 200);
  }, []);

  const profileData = [
    { label: "Age", value: "25-30", x: 50, y: 8 },
    { label: "Cycle", value: "28 days", x: 85, y: 22 },
    { label: "Period", value: "5 days", x: 92, y: 48 },
    { label: "Last Period", value: "Feb 3", x: 80, y: 72 },
    { label: "Goals", value: "Track, Sleep", x: 55, y: 88 },
    { label: "Symptoms", value: "Cramps, Mood", x: 22, y: 75 },
    { label: "Signals", value: "3 active", x: 8, y: 50 },
    { label: "Phase", value: "Follicular", x: 18, y: 25 },
  ];

  const connections: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col items-center"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes drawLine { from { stroke-dashoffset: 200; } to { stroke-dashoffset: 0; } }
        @keyframes glowPulse { 0%,100% { filter: drop-shadow(0 0 4px rgba(245,216,130,0.3)); } 50% { filter: drop-shadow(0 0 12px rgba(245,216,130,0.6)); } }
      `}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: i % 5 === 0 ? "#f5d882" : "#fff",
          animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.4,
        }} />
      ))}

      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}>
        <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
          YOUR CONSTELLATION
        </h2>
        <p className="text-center text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
          Your celestial profile is mapped
        </p>
      </div>

      <div className="relative w-full max-w-sm" style={{ height: 340, opacity: visible ? 1 : 0, animation: visible ? "fadeIn 1.2s ease-out" : "none" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ animation: "glowPulse 4s ease-in-out infinite" }}>
          {connections.map(([a, b], i) => (
            <line key={i}
              x1={profileData[a].x} y1={profileData[a].y}
              x2={profileData[b].x} y2={profileData[b].y}
              stroke="rgba(245,216,130,0.15)" strokeWidth="0.3"
              strokeDasharray="200" style={{ animation: `drawLine 2s ease-out ${i * 0.15}s forwards` }}
            />
          ))}

          <circle cx="50" cy="48" r="22" fill="none" stroke="rgba(245,216,130,0.04)" strokeWidth="0.3" />

          {profileData.map((d, i) => (
            <g key={i}>
              <circle cx={d.x} cy={d.y} r="3.5" fill="rgba(245,216,130,0.1)" stroke="rgba(245,216,130,0.3)" strokeWidth="0.5" />
              <circle cx={d.x} cy={d.y} r="1.5" fill="#f5d882" style={{ filter: "drop-shadow(0 0 4px rgba(245,216,130,0.6))" }} />
            </g>
          ))}

          <circle cx="50" cy="48" r="5" fill="#f5d882" opacity="0.08" />
          <circle cx="50" cy="48" r="2" fill="#f5d882" opacity="0.4" />
        </svg>

        {profileData.map((d, i) => {
          const alignRight = d.x > 70;
          const alignLeft = d.x < 30;
          return (
            <div key={i} className="absolute" style={{
              left: `${d.x}%`, top: `${d.y}%`,
              transform: `translate(${alignRight ? "-100%" : alignLeft ? "0%" : "-50%"}, ${d.y < 20 ? "-120%" : "60%"})`,
              animation: `fadeIn 0.6s ease-out ${0.5 + i * 0.1}s both`,
            }}>
              <p className="text-[9px] tracking-wider whitespace-nowrap" style={{ color: "rgba(245,216,130,0.5)" }}>
                {d.label}
              </p>
              <p className="text-[11px] font-medium whitespace-nowrap" style={{ color: "rgba(255,255,255,0.7)" }}>
                {d.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-xs mt-4" style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 1s" }}>
        <div className="rounded-xl p-4 mb-6" style={{ background: "rgba(245,216,130,0.04)", border: "1px solid rgba(245,216,130,0.1)" }}>
          <p className="text-xs text-center leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Luna has mapped your unique cycle constellation. Your personalized insights will align with your rhythm.
          </p>
        </div>

        <button className="w-full py-3.5 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #f5d882, #d4a843)", color: "#0c0a1d",
            boxShadow: "0 0 30px rgba(245,216,130,0.3)",
          }}>
          Launch Luna
        </button>

        <p className="text-center text-xs mt-4" style={{ color: "rgba(245,216,130,0.25)" }}>
          Your data is encrypted and private
        </p>
      </div>
    </div>
  );
}
