"use client";
import { useState, useEffect } from "react";

export default function Cycle() {
  const [visible, setVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const phases = [
    { name: "Menstrual", days: "Days 1-5", color: "#f9a8c9", desc: "A time of release and renewal, like the first wash on fresh paper" },
    { name: "Follicular", days: "Days 6-13", color: "#fcd5b4", desc: "Energy blooms as your body prepares, colors brightening on the palette" },
    { name: "Ovulatory", days: "Days 14-16", color: "#c4b5e0", desc: "Your most vibrant phase, when the painting reaches its fullest expression" },
    { name: "Luteal", days: "Days 17-28", color: "#d4c5a9", desc: "A gentle fade into warm tones, preparing for the next beautiful canvas" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>Your Watercolor Cycle</h2>
      <p className="text-center text-sm mb-10 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.15s both" : "none",
      }}>Each phase paints a different story</p>

      {/* Overlapping watercolor washes — the four phases bleeding into each other */}
      <div className="relative mx-auto mb-8" style={{ width: 300, height: 180, opacity: visible ? 1 : 0, animation: visible ? "fadeIn 1s ease-out 0.3s both" : "none" }}>
        {phases.map((p, i) => (
          <div key={i} className="absolute cursor-pointer" onClick={() => setActivePhase(i)} style={{
            width: 140, height: 140,
            left: `${i * 22}%`, top: i % 2 === 0 ? "0%" : "15%",
            borderRadius: "50% 45% 55% 48% / 48% 52% 46% 54%",
            background: `radial-gradient(ellipse at ${45 + i * 5}% ${45 + i * 3}%, ${p.color} 0%, rgba(255,255,255,0) 65%)`,
            filter: "blur(18px)",
            opacity: activePhase === i ? 0.7 : 0.35,
            transform: activePhase === i ? "scale(1.1)" : "scale(1)",
            transition: "all 0.5s ease",
            zIndex: activePhase === i ? 10 : i,
          }} />
        ))}
      </div>

      {/* Phase labels */}
      <div className="flex justify-center gap-3 mb-8 relative z-10">
        {phases.map((p, i) => (
          <button key={i} onClick={() => setActivePhase(i)}
            className="px-4 py-2 rounded-full border-0 cursor-pointer text-xs"
            style={{
              background: activePhase === i ? p.color : "rgba(61,44,44,0.04)",
              color: activePhase === i ? "#fefefe" : "rgba(61,44,44,0.5)",
              fontWeight: 300, transition: "all 0.4s ease",
              boxShadow: activePhase === i ? `0 4px 16px ${p.color}44` : "none",
            }}>
            {p.name}
          </button>
        ))}
      </div>

      {/* Active phase detail */}
      <div className="max-w-sm mx-auto w-full text-center relative z-10 rounded-3xl p-6" style={{
        background: `linear-gradient(135deg, ${phases[activePhase].color}11, ${phases[activePhase].color}08)`,
        transition: "all 0.5s ease",
      }}>
        <p className="text-lg font-light mb-1" style={{ fontFamily: "Georgia, serif", color: "#3d2c2c" }}>
          {phases[activePhase].name} Phase
        </p>
        <p className="text-xs mb-3" style={{ color: phases[activePhase].color, fontWeight: 400 }}>
          {phases[activePhase].days}
        </p>
        <p className="text-sm" style={{ color: "rgba(61,44,44,0.55)", fontWeight: 300, lineHeight: 1.7 }}>
          {phases[activePhase].desc}
        </p>
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
            width: i === 2 ? 18 : 6, height: 6,
            background: i === 2 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
