"use client";
import { useState, useEffect } from "react";

export default function Cycle() {
  const [activePhase, setActivePhase] = useState(0);
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 35 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 4,
    })));
  }, []);

  const phases = [
    { name: "Menstrual", days: "Day 1-5", color: "#e06070", desc: "Release & renewal. Your body sheds and resets.", angle: 0, shadow: 0.95 },
    { name: "Follicular", days: "Day 6-13", color: "#82d4a8", desc: "Rising energy. Estrogen builds, creativity peaks.", angle: 90, shadow: 0.5 },
    { name: "Ovulatory", days: "Day 14-16", color: "#f5d882", desc: "Full radiance. Peak fertility and confidence.", angle: 180, shadow: 0 },
    { name: "Luteal", days: "Day 17-28", color: "#a78bfa", desc: "Turning inward. Progesterone rises, intuition deepens.", angle: 270, shadow: 0.75 },
  ];

  const cx = 150, cy = 150, orbitR = 100, bodyR = 18;

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col items-center"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.4,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
        YOUR CYCLE
      </h2>
      <p className="text-center text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
        Four phases, one orbit
      </p>

      <div className="relative" style={{ width: 300, height: 300 }}>
        <svg width="300" height="300" viewBox="0 0 300 300">
          <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="rgba(245,216,130,0.08)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx={cx} cy={cy} r={orbitR * 0.5} fill="none" stroke="rgba(245,216,130,0.04)" strokeWidth="0.5" />

          <circle cx={cx} cy={cy} r="28" fill="#f5d882" opacity="0.15" />
          <circle cx={cx} cy={cy} r="22" fill="#1a0533" />
          <circle cx={cx} cy={cy} r="20" fill="#f5d882" opacity="0.9" style={{ filter: "drop-shadow(0 0 15px rgba(245,216,130,0.5))" }} />

          {phases.map((p, i) => {
            const rad = ((p.angle - 90) * Math.PI) / 180;
            const bx = cx + orbitR * Math.cos(rad);
            const by = cy + orbitR * Math.sin(rad);
            const isActive = activePhase === i;
            return (
              <g key={i} onClick={() => setActivePhase(i)} className="cursor-pointer">
                {isActive && <circle cx={bx} cy={by} r={bodyR + 6} fill="none" stroke={p.color} strokeWidth="1" opacity="0.4" />}
                <circle cx={bx} cy={by} r={bodyR} fill={p.color} opacity={isActive ? 0.9 : 0.35}
                  style={isActive ? { filter: `drop-shadow(0 0 10px ${p.color})` } : {}} />
                <circle cx={bx + bodyR * p.shadow * 0.5} cy={by} r={bodyR * 0.9} fill="#0c0a1d" opacity={p.shadow} />
                <line x1={cx} y1={cy} x2={bx} y2={by} stroke={isActive ? p.color : "rgba(245,216,130,0.06)"} strokeWidth="0.5" opacity={isActive ? 0.3 : 1} />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="w-full max-w-xs mt-6 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {phases.map((p, i) => (
            <button key={i} onClick={() => setActivePhase(i)}
              className="px-3 py-1.5 rounded-full text-xs border-0 cursor-pointer tracking-wide"
              style={{
                background: activePhase === i ? `${p.color}20` : "transparent",
                color: activePhase === i ? p.color : "rgba(255,255,255,0.3)",
                border: `1px solid ${activePhase === i ? `${p.color}40` : "transparent"}`,
                transition: "all 0.3s ease",
              }}>
              {p.name}
            </button>
          ))}
        </div>
        <p className="text-xs tracking-wider mb-1" style={{ color: phases[activePhase].color }}>
          {phases[activePhase].days}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          {phases[activePhase].desc}
        </p>
      </div>

      <button className="mt-auto mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #f5d882, #d4a843)", color: "#0c0a1d" }}>
        Next
      </button>
    </div>
  );
}
