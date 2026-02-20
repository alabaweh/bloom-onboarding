"use client";
import { useState, useEffect } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 30 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 4,
    })));
  }, []);

  const symptoms = [
    { id: "cramps", label: "Cramps", x: 50, y: 18, group: 0 },
    { id: "bloating", label: "Bloating", x: 28, y: 32, group: 0 },
    { id: "headache", label: "Headache", x: 72, y: 28, group: 1 },
    { id: "fatigue", label: "Fatigue", x: 15, y: 52, group: 1 },
    { id: "mood", label: "Mood Shifts", x: 50, y: 45, group: 0 },
    { id: "acne", label: "Acne", x: 82, y: 50, group: 2 },
    { id: "cravings", label: "Cravings", x: 35, y: 65, group: 2 },
    { id: "insomnia", label: "Insomnia", x: 68, y: 68, group: 1 },
    { id: "tender", label: "Tenderness", x: 20, y: 78, group: 2 },
    { id: "nausea", label: "Nausea", x: 55, y: 82, group: 0 },
    { id: "backpain", label: "Back Pain", x: 85, y: 78, group: 1 },
    { id: "anxiety", label: "Anxiety", x: 42, y: 95, group: 2 },
  ];

  const connections: [string, string][] = [
    ["cramps", "bloating"], ["cramps", "mood"], ["headache", "fatigue"],
    ["mood", "bloating"], ["fatigue", "insomnia"], ["acne", "headache"],
    ["cravings", "mood"], ["cravings", "bloating"], ["insomnia", "headache"],
    ["tender", "cramps"], ["nausea", "cramps"], ["backpain", "insomnia"],
    ["anxiety", "mood"], ["anxiety", "nausea"], ["tender", "nausea"],
  ];

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const getPos = (id: string) => {
    const s = symptoms.find((s) => s.id === id);
    return s ? { x: s.x, y: s.y } : { x: 0, y: 0 };
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`@keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes pulseNode { 0%,100% { box-shadow: 0 0 8px rgba(245,216,130,0.3); } 50% { box-shadow: 0 0 20px rgba(245,216,130,0.6); } }`}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.3,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
        STAR MAP
      </h2>
      <p className="text-center text-sm mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
        Tap the symptoms you experience
      </p>
      <p className="text-center text-xs mb-6" style={{ color: "rgba(245,216,130,0.3)" }}>
        {selected.size} selected
      </p>

      <div className="relative flex-1 max-w-md mx-auto w-full" style={{ minHeight: 420 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {connections.map(([a, b], i) => {
            const pa = getPos(a), pb = getPos(b);
            const bothActive = selected.has(a) && selected.has(b);
            const oneActive = selected.has(a) || selected.has(b);
            return (
              <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
                stroke={bothActive ? "rgba(245,216,130,0.5)" : oneActive ? "rgba(245,216,130,0.12)" : "rgba(245,216,130,0.04)"}
                strokeWidth={bothActive ? 0.4 : 0.2} strokeLinecap="round"
                style={{ transition: "all 0.4s ease" }}
              />
            );
          })}
        </svg>

        {symptoms.map((s) => {
          const isActive = selected.has(s.id);
          return (
            <button key={s.id} onClick={() => toggle(s.id)}
              className="absolute flex flex-col items-center border-0 bg-transparent cursor-pointer p-0"
              style={{ left: `${s.x}%`, top: `${s.y}%`, transform: "translate(-50%, -50%)", zIndex: 10 }}>
              <div className="rounded-full flex items-center justify-center mb-1" style={{
                width: isActive ? 34 : 26, height: isActive ? 34 : 26,
                background: isActive ? "rgba(245,216,130,0.15)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${isActive ? "rgba(245,216,130,0.5)" : "rgba(255,255,255,0.08)"}`,
                animation: isActive ? "pulseNode 2.5s ease-in-out infinite" : "none",
                transition: "all 0.3s ease",
              }}>
                <div className="rounded-full" style={{
                  width: isActive ? 8 : 4, height: isActive ? 8 : 4,
                  background: isActive ? "#f5d882" : "rgba(245,216,130,0.25)",
                  transition: "all 0.3s ease",
                }} />
              </div>
              <span className="text-[10px] whitespace-nowrap" style={{
                color: isActive ? "#f5d882" : "rgba(255,255,255,0.3)",
                transition: "color 0.3s ease",
              }}>
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      <button className="mt-4 mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{
          background: selected.size > 0 ? "linear-gradient(135deg, #f5d882, #d4a843)" : "rgba(245,216,130,0.1)",
          color: selected.size > 0 ? "#0c0a1d" : "rgba(245,216,130,0.3)",
        }}>
        Continue
      </button>
    </div>
  );
}
