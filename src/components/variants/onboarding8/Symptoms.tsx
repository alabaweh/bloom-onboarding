"use client";
import { useState, useEffect } from "react";

export default function Symptoms() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const symptoms = [
    { name: "Cramps", color: "#f9a8c9" },
    { name: "Bloating", color: "#c4b5e0" },
    { name: "Headache", color: "#fcd5b4" },
    { name: "Fatigue", color: "#f9a8c9" },
    { name: "Mood swings", color: "#c4b5e0" },
    { name: "Back pain", color: "#fcd5b4" },
    { name: "Breast tenderness", color: "#f9a8c9" },
    { name: "Acne", color: "#c4b5e0" },
    { name: "Insomnia", color: "#fcd5b4" },
    { name: "Cravings", color: "#f9a8c9" },
    { name: "Nausea", color: "#c4b5e0" },
    { name: "Anxiety", color: "#fcd5b4" },
  ];

  const toggle = (name: string) => {
    setSelected((prev) => prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Decorative wash */}
      <div className="absolute" style={{
        width: 300, height: 280, top: "2%", left: "-12%",
        borderRadius: "52% 48% 44% 56% / 49% 55% 45% 51%",
        background: "radial-gradient(ellipse, rgba(249,168,201,0.2) 0%, transparent 70%)",
        filter: "blur(45px)",
      }} />
      <div className="absolute" style={{
        width: 220, height: 200, bottom: "10%", right: "-8%",
        borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%",
        background: "radial-gradient(ellipse, rgba(252,213,180,0.2) 0%, transparent 70%)",
        filter: "blur(40px)",
      }} />

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>Your Symptoms</h2>
      <p className="text-center text-sm mb-3 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.15s both" : "none",
      }}>Select the tones you experience most</p>
      <p className="text-center text-xs mb-8 relative z-10" style={{
        color: "rgba(61,44,44,0.3)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.2s both" : "none",
      }}>{selected.length} selected</p>

      {/* Symptom pills */}
      <div className="max-w-sm mx-auto w-full flex flex-wrap justify-center gap-3 relative z-10" style={{
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.3s both" : "none",
      }}>
        {symptoms.map((s) => {
          const isActive = selected.includes(s.name);
          return (
            <button key={s.name} onClick={() => toggle(s.name)}
              className="relative px-5 py-2.5 rounded-full border-0 cursor-pointer text-sm overflow-hidden"
              style={{
                background: isActive ? "transparent" : "rgba(61,44,44,0.03)",
                color: isActive ? "#fefefe" : "rgba(61,44,44,0.55)",
                fontWeight: 300, transition: "all 0.4s ease",
                border: isActive ? "none" : "1px solid rgba(61,44,44,0.06)",
              }}>
              {/* Watercolor wash fill on selection */}
              {isActive && (
                <div className="absolute inset-0" style={{
                  borderRadius: "inherit",
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`,
                  opacity: 0.85,
                }} />
              )}
              <span className="relative z-10">{s.name}</span>
            </button>
          );
        })}
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
            width: i === 5 ? 18 : 6, height: 6,
            background: i === 5 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
