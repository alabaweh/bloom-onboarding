"use client";
import { useState } from "react";

export default function Cycle() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    { name: "Menstrual", days: "Days 1-5", gradient: "linear-gradient(135deg, #c97b8b, #8b3a5e)", emoji: "\u2600", desc: "A time of release and renewal. Honor rest and gentle self-care." },
    { name: "Follicular", days: "Days 6-13", gradient: "linear-gradient(135deg, #d4b483, #c97b8b)", emoji: "\u263D", desc: "Rising energy and creativity. Plant seeds for new intentions." },
    { name: "Ovulatory", days: "Days 14-16", gradient: "linear-gradient(135deg, #c4b5e0, #d4b483)", emoji: "\u2605", desc: "Peak radiance and connection. Your most magnetic phase." },
    { name: "Luteal", days: "Days 17-28", gradient: "linear-gradient(135deg, #2d1854, #c4b5e0)", emoji: "\u263E", desc: "Deepening intuition. Turn inward and prepare for renewal." },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      <div className="absolute" style={{
        width: 260, height: 260, borderRadius: "50%",
        background: "radial-gradient(circle, #c4b5e0 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.18, top: "5%", left: "-8%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          Your Cycle Phases
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          The evening sky of your inner world
        </p>

        {/* Phase gradient band */}
        <div className="flex rounded-2xl overflow-hidden mb-6" style={{ height: 8 }}>
          {phases.map((p, i) => (
            <div key={i} className="flex-1 cursor-pointer" onClick={() => setActivePhase(i)}
              style={{ background: p.gradient, opacity: activePhase === i ? 1 : 0.5 }} />
          ))}
        </div>

        {/* Phase cards */}
        <div className="space-y-3">
          {phases.map((p, i) => (
            <button key={i} onClick={() => setActivePhase(i)}
              className="w-full rounded-2xl p-4 text-left cursor-pointer transition-all duration-300"
              style={{
                background: activePhase === i ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                border: activePhase === i ? "1px solid rgba(196,181,224,0.3)" : "1px solid rgba(255,255,255,0.06)",
              }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: p.gradient }}>
                  <span style={{ fontSize: 18 }}>{p.emoji}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold"
                      style={{ fontFamily: "Georgia, serif", color: activePhase === i ? "#d4b483" : "#c4b5e0" }}>
                      {p.name}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "system-ui" }}>
                      {p.days}
                    </span>
                  </div>
                  {activePhase === i && (
                    <p className="text-xs mt-1 leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.6)", fontFamily: "system-ui" }}>
                      {p.desc}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>


        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 2 ? 18 : 6, height: 6,
              background: i === 2 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 2 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
