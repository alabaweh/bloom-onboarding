"use client";
import { useState, useEffect } from "react";

export default function Goals() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const goals = [
    {
      id: "track", title: "Track My Cycle", desc: "Know when each phase begins and ends",
      color: "#f9a8c9", blob: "48% 52% 55% 45% / 50% 46% 54% 50%",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z",
    },
    {
      id: "fertility", title: "Plan Ahead", desc: "Understand your fertile window",
      color: "#c4b5e0", blob: "55% 45% 48% 52% / 46% 54% 50% 50%",
      icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    },
    {
      id: "symptoms", title: "Manage Symptoms", desc: "Identify patterns and find relief",
      color: "#fcd5b4", blob: "50% 50% 45% 55% / 52% 48% 54% 46%",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z",
    },
    {
      id: "wellness", title: "Overall Wellness", desc: "Holistic health insights and tips",
      color: "#f9a8c9", blob: "52% 48% 50% 50% / 48% 52% 46% 54%",
      icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    },
  ];

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background wash */}
      <div className="absolute" style={{
        width: 320, height: 300, top: "-5%", right: "-15%",
        borderRadius: "48% 52% 55% 45% / 50% 46% 54% 50%",
        background: "radial-gradient(ellipse, rgba(196,181,224,0.18) 0%, transparent 70%)",
        filter: "blur(45px)",
      }} />

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>Your Intentions</h2>
      <p className="text-center text-sm mb-8 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.15s both" : "none",
      }}>What would you like Petal to paint for you?</p>

      <div className="max-w-sm mx-auto w-full flex flex-col gap-4 relative z-10">
        {goals.map((g, i) => {
          const isActive = selected.includes(g.id);
          return (
            <button key={g.id} onClick={() => toggle(g.id)}
              className="relative rounded-3xl p-5 border-0 cursor-pointer text-left overflow-hidden"
              style={{
                background: isActive ? `linear-gradient(135deg, ${g.color}18, ${g.color}0a)` : "rgba(254,254,254,0.95)",
                border: `1px solid ${isActive ? g.color + "40" : "rgba(61,44,44,0.06)"}`,
                boxShadow: isActive ? `0 4px 20px ${g.color}20` : "0 2px 12px rgba(0,0,0,0.02)",
                transition: "all 0.4s ease",
                opacity: visible ? 1 : 0, animation: visible ? `fadeIn 0.8s ease-out ${0.25 + i * 0.12}s both` : "none",
              }}>
              {/* Watercolor illustration accent */}
              <div className="absolute" style={{
                width: 80, height: 80, top: -10, right: -10,
                borderRadius: g.blob,
                background: `radial-gradient(ellipse, ${g.color} 0%, transparent 70%)`,
                filter: "blur(16px)", opacity: isActive ? 0.35 : 0.12,
                transition: "opacity 0.4s ease",
              }} />

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{
                  background: isActive ? `${g.color}25` : "rgba(61,44,44,0.03)",
                  transition: "all 0.3s ease",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d={g.icon} fill={isActive ? g.color : "rgba(61,44,44,0.25)"} style={{ transition: "fill 0.3s ease" }} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-normal mb-1" style={{
                    fontFamily: "Georgia, serif", color: "#3d2c2c",
                  }}>{g.title}</h3>
                  <p className="text-xs" style={{ color: "rgba(61,44,44,0.45)", fontWeight: 300, lineHeight: 1.5 }}>{g.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button className="block mx-auto mt-auto px-10 py-3.5 rounded-full text-sm tracking-widest border-0 cursor-pointer relative z-10"
        style={{
          background: "linear-gradient(135deg, #f9a8c9, #e898b8)", color: "#fefefe",
          fontWeight: 400, letterSpacing: "0.12em", boxShadow: "0 8px 32px rgba(249,168,201,0.25)",
        }}>Continue</button>

      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 6 ? 18 : 6, height: 6,
            background: i === 6 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
