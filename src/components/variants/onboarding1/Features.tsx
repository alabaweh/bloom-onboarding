"use client";
import { useState, useEffect } from "react";

export default function Features() {
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setStars(Array.from({ length: 40 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 5,
    })));
  }, []);

  const features = [
    {
      title: "Cycle Mapping",
      desc: "Precision tracking aligned with lunar rhythms and your unique biology.",
      nodes: [[20, 15], [50, 10], [80, 20], [65, 45], [35, 40], [20, 15]] as [number, number][],
      icon: "M12 3a9 9 0 1 0 0 18c-3.5 0-6.5-2-8-5a7 7 0 0 1 8-13z",
    },
    {
      title: "Insight Nebula",
      desc: "AI-powered health insights that reveal patterns hidden in your data.",
      nodes: [[15, 25], [40, 10], [70, 15], [85, 35], [60, 50], [30, 45], [15, 25]] as [number, number][],
      icon: "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z",
    },
    {
      title: "Cosmic Sync",
      desc: "Partner sharing, reminders, and wellness protocols in perfect harmony.",
      nodes: [[25, 10], [55, 8], [80, 25], [70, 50], [40, 48], [15, 35], [25, 10]] as [number, number][],
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes conGlow { 0%,100% { filter: drop-shadow(0 0 4px rgba(245,216,130,0.2)); } 50% { filter: drop-shadow(0 0 12px rgba(245,216,130,0.6)); } }
      `}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2.5 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.5,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-2" style={{ color: "#f5d882" }}>
        DISCOVER
      </h2>
      <p className="text-center text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
        Three pillars of your celestial wellness
      </p>

      <div className="flex flex-col gap-6 flex-1 max-w-sm mx-auto w-full">
        {features.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(activeCard === i ? null : i)}
            className="relative rounded-2xl p-5 text-left border-0 cursor-pointer w-full"
            style={{
              background: activeCard === i
                ? "rgba(245,216,130,0.08)"
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeCard === i ? "rgba(245,216,130,0.3)" : "rgba(255,255,255,0.06)"}`,
              transition: "all 0.4s ease",
            }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none"
              style={{ animation: activeCard === i ? "conGlow 3s ease-in-out infinite" : "none" }}>
              <polyline
                points={f.nodes.map(([x, y]) => `${x},${y}`).join(" ")}
                fill="none" stroke={activeCard === i ? "rgba(245,216,130,0.4)" : "rgba(245,216,130,0.1)"}
                strokeWidth="0.3" strokeLinecap="round"
              />
              {f.nodes.map(([x, y], j) => (
                <circle key={j} cx={x} cy={y} r={activeCard === i ? 1.5 : 0.8}
                  fill={activeCard === i ? "#f5d882" : "rgba(245,216,130,0.3)"}
                />
              ))}
            </svg>

            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: activeCard === i ? "rgba(245,216,130,0.15)" : "rgba(245,216,130,0.05)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d={f.icon} fill={activeCard === i ? "#f5d882" : "rgba(245,216,130,0.4)"} />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium tracking-wide mb-1" style={{ color: activeCard === i ? "#f5d882" : "rgba(255,255,255,0.7)" }}>
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{f.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button className="mt-8 mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #f5d882, #d4a843)", color: "#0c0a1d" }}>
        Continue
      </button>
    </div>
  );
}
