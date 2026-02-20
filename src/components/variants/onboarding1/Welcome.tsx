"use client";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number; opacity: number }[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(generated);
    setTimeout(() => setVisible(true), 100);
  }, []);

  const moonPhases = [0.15, 0.35, 0.5, 0.65, 0.85];

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 20px rgba(245,216,130,0.3); } 50% { box-shadow: 0 0 40px rgba(245,216,130,0.6); } }
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`, top: `${s.y}%`,
            width: s.size, height: s.size,
            backgroundColor: i % 7 === 0 ? "#f5d882" : "#ffffff",
            animation: `twinkle ${2 + s.delay}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
            opacity: s.opacity,
          }}
        />
      ))}

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }} />

      <div style={{ opacity: visible ? 1 : 0, animation: visible ? "fadeUp 1s ease-out forwards" : "none" }}>
        <div className="relative flex justify-center mb-10">
          <svg width="220" height="80" viewBox="0 0 220 80">
            <path d="M 10 70 Q 110 -10 210 70" fill="none" stroke="rgba(245,216,130,0.15)" strokeWidth="1" strokeDasharray="4 4" />
            {moonPhases.map((t, i) => {
              const x = 10 + t * 200;
              const y = 70 - Math.sin(t * Math.PI) * 70;
              const r = i === 2 ? 14 : 8;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r={r + 3} fill="none" stroke="rgba(245,216,130,0.2)" strokeWidth="0.5" />
                  <circle cx={x} cy={y} r={r} fill={i === 2 ? "#f5d882" : "rgba(245,216,130,0.4)"} />
                  {i !== 2 && <circle cx={x + r * 0.4} cy={y} r={r * 0.85} fill="#0c0a1d" />}
                  {i === 2 && <circle cx={x} cy={y} r={r} fill="#f5d882" style={{ filter: "drop-shadow(0 0 12px rgba(245,216,130,0.8))" }} />}
                </g>
              );
            })}
          </svg>
        </div>

        <h1 className="text-5xl font-extralight tracking-[0.3em] text-center mb-3" style={{ color: "#f5d882" }}>
          LUNA
        </h1>
        <div className="w-16 h-px mx-auto mb-4" style={{ background: "linear-gradient(90deg, transparent, #f5d882, transparent)" }} />
        <p className="text-center text-sm tracking-[0.2em] uppercase mb-2" style={{ color: "rgba(245,216,130,0.6)" }}>
          Celestial Cycle Tracking
        </p>
        <p className="text-center text-base max-w-xs mx-auto mb-12" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
          Align your rhythm with the cosmos. Track, understand, and embrace every phase of your cycle.
        </p>

        <button
          className="block mx-auto px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #f5d882 0%, #d4a843 100%)",
            color: "#0c0a1d",
            animation: "pulse 3s ease-in-out infinite",
          }}
        >
          Begin Your Journey
        </button>

        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 0 ? 20 : 6, height: 6,
              background: i === 0 ? "#f5d882" : "rgba(245,216,130,0.2)",
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full opacity-5" height="100" viewBox="0 0 400 100" preserveAspectRatio="none">
        <path d="M0 100 Q100 60 200 80 Q300 100 400 70 L400 100 Z" fill="#7c3aed" />
      </svg>
    </div>
  );
}
