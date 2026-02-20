"use client";
import { useState } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<string[]>([]);

  const symptoms = [
    { id: "cramps", label: "Cramps" },
    { id: "headache", label: "Headaches" },
    { id: "bloating", label: "Bloating" },
    { id: "fatigue", label: "Fatigue" },
    { id: "mood", label: "Mood Shifts" },
    { id: "acne", label: "Skin Changes" },
    { id: "breast", label: "Breast Tenderness" },
    { id: "insomnia", label: "Sleep Issues" },
    { id: "cravings", label: "Cravings" },
    { id: "backpain", label: "Back Pain" },
    { id: "anxiety", label: "Anxiety" },
    { id: "nausea", label: "Nausea" },
  ];

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      <div className="absolute" style={{
        width: 260, height: 260, borderRadius: "50%",
        background: "radial-gradient(circle, #c4b5e0 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.2, top: "15%", right: "-8%",
      }} />
      <div className="absolute" style={{
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, #d4b483 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.15, bottom: "20%", left: "-5%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          Common Symptoms
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          Select any you experience regularly
        </p>

        <div className="flex flex-wrap gap-3">
          {symptoms.map((s) => {
            const isOn = selected.includes(s.id);
            return (
              <button key={s.id} onClick={() => toggle(s.id)}
                className="rounded-2xl px-4 py-2.5 text-sm cursor-pointer transition-all duration-200 flex items-center gap-2"
                style={{
                  background: isOn ? "rgba(196,181,224,0.15)" : "rgba(255,255,255,0.06)",
                  border: isOn ? "1px solid rgba(196,181,224,0.4)" : "1px solid rgba(255,255,255,0.1)",
                  color: isOn ? "#c4b5e0" : "rgba(255,255,255,0.6)",
                  fontFamily: "system-ui",
                  boxShadow: isOn ? "0 0 14px rgba(196,181,224,0.15)" : "none",
                }}>
                {isOn && (
                  <span className="rounded-full" style={{
                    width: 6, height: 6, background: "#d4b483",
                    boxShadow: "0 0 6px rgba(212,180,131,0.4)",
                  }} />
                )}
                {s.label}
              </button>
            );
          })}
        </div>

        <p className="text-xs mt-5 text-center"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "system-ui" }}>
          {selected.length} selected
        </p>

        <button className="w-full mt-6 rounded-2xl py-4 text-sm font-semibold cursor-pointer"
          style={{
            background: selected.length > 0 ? "linear-gradient(135deg, #c4b5e0, #d4b483)" : "rgba(255,255,255,0.06)",
            color: selected.length > 0 ? "#1a0e2e" : "rgba(255,255,255,0.3)",
            fontFamily: "system-ui",
          }}>
          {selected.length > 0 ? "Continue" : "Select symptoms to continue"}
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 5 ? 18 : 6, height: 6,
              background: i === 5 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 5 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
