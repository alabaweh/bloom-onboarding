"use client";
import { useState, useEffect } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 30 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 4,
    })));
  }, []);

  const goals = [
    { label: "Track My Cycle", icon: "M12 3a9 9 0 1 0 0 18c-3.5 0-6.5-2-8-5a7 7 0 0 1 8-13z", color: "#a78bfa" },
    { label: "Get Pregnant", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", color: "#f5a0b8" },
    { label: "Avoid Pregnancy", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z", color: "#82d4a8" },
    { label: "Understand PMS", icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z", color: "#f5d882" },
    { label: "Fitness Sync", icon: "M13 3L4 14h7l-1 7 9-11h-7l1-7z", color: "#60c0e0" },
    { label: "Improve Sleep", icon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", color: "#c4b5fd" },
  ];

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const cx = 150, cy = 155;
  const outerR = 120, innerR = 55;

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col items-center"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes orbitPulse { 0%,100% { opacity: 0.06; } 50% { opacity: 0.12; } }
      `}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.4,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
        YOUR ORBIT
      </h2>
      <p className="text-center text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
        What are you tracking toward?
      </p>

      <div className="relative" style={{ width: 300, height: 310 }}>
        <svg width="300" height="310" viewBox="0 0 300 310">
          <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="rgba(245,216,130,0.06)" strokeWidth="1" strokeDasharray="6 4"
            style={{ animation: "orbitPulse 4s ease-in-out infinite" }} />
          <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="rgba(245,216,130,0.1)" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx={cx} cy={cy} r="18" fill="#f5d882" opacity="0.12" />
          <circle cx={cx} cy={cy} r="12" fill="#f5d882" opacity="0.2" style={{ filter: "drop-shadow(0 0 10px rgba(245,216,130,0.3))" }} />

          {goals.map((g, i) => {
            const isActive = selected.has(i);
            const angle = ((i * 60) - 90) * Math.PI / 180;
            const r = isActive ? innerR : outerR;
            const px = cx + r * Math.cos(angle);
            const py = cy + r * Math.sin(angle);
            const planetR = isActive ? 24 : 18;

            return (
              <g key={i} onClick={() => toggle(i)} className="cursor-pointer">
                <line x1={cx} y1={cy} x2={px} y2={py}
                  stroke={isActive ? `${g.color}40` : "rgba(245,216,130,0.03)"} strokeWidth="0.5"
                  style={{ transition: "all 0.5s ease" }} />
                {isActive && <circle cx={px} cy={py} r={planetR + 5} fill="none" stroke={g.color} strokeWidth="0.8" opacity="0.3" />}
                <circle cx={px} cy={py} r={planetR} fill={isActive ? `${g.color}25` : "rgba(255,255,255,0.03)"}
                  stroke={isActive ? g.color : "rgba(255,255,255,0.08)"} strokeWidth="1"
                  style={{ transition: "all 0.5s ease", filter: isActive ? `drop-shadow(0 0 12px ${g.color}60)` : "none" }} />
                <g transform={`translate(${px - 10}, ${py - 10}) scale(0.83)`}>
                  <path d={g.icon} fill={isActive ? g.color : "rgba(255,255,255,0.2)"} style={{ transition: "fill 0.3s ease" }} />
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-2 max-w-xs">
        {goals.map((g, i) => (
          <button key={i} onClick={() => toggle(i)}
            className="text-[10px] px-3 py-1 rounded-full border-0 cursor-pointer tracking-wide"
            style={{
              background: selected.has(i) ? `${g.color}15` : "transparent",
              color: selected.has(i) ? g.color : "rgba(255,255,255,0.3)",
              border: `1px solid ${selected.has(i) ? `${g.color}30` : "rgba(255,255,255,0.06)"}`,
              transition: "all 0.3s ease",
            }}>
            {g.label}
          </button>
        ))}
      </div>

      <button className="mt-auto mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{
          background: selected.size > 0 ? "linear-gradient(135deg, #f5d882, #d4a843)" : "rgba(245,216,130,0.1)",
          color: selected.size > 0 ? "#0c0a1d" : "rgba(245,216,130,0.3)",
        }}>
        Continue
      </button>
    </div>
  );
}
