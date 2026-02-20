"use client";
import { useState } from "react";

export default function Goals() {
  const [active, setActive] = useState<string[]>([]);

  const goals = [
    { id: "predict", icon: "\u263E", title: "Period Prediction", desc: "Know when your next cycle begins" },
    { id: "fertile", icon: "\u2661", title: "Fertility Awareness", desc: "Track your fertile windows" },
    { id: "fitness", icon: "\u2726", title: "Phase-Based Fitness", desc: "Align workouts with your cycle" },
    { id: "mood", icon: "\u2728", title: "Mood Patterns", desc: "Understand emotional rhythms" },
    { id: "sleep", icon: "\u2605", title: "Sleep Optimization", desc: "Better rest through cycle awareness" },
    { id: "nutrition", icon: "\u2740", title: "Cycle Nutrition", desc: "Nourish each phase intentionally" },
  ];

  const toggle = (id: string) => {
    setActive((prev) => prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      <div className="absolute" style={{
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, #c97b8b 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.15, bottom: "5%", right: "-10%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          Your Goals
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          What would you like Aura to help with?
        </p>

        <div className="grid grid-cols-2 gap-3">
          {goals.map((g) => {
            const isOn = active.includes(g.id);
            return (
              <button key={g.id} onClick={() => toggle(g.id)}
                className="rounded-2xl p-4 text-left cursor-pointer transition-all duration-300"
                style={{
                  background: isOn
                    ? "linear-gradient(135deg, rgba(196,181,224,0.15), rgba(212,180,131,0.1))"
                    : "rgba(255,255,255,0.04)",
                  border: isOn ? "1px solid rgba(212,180,131,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isOn ? "0 0 16px rgba(196,181,224,0.12)" : "none",
                }}>
                <span style={{ fontSize: 20 }}>{g.icon}</span>
                <p className="text-sm font-semibold mt-2 mb-1"
                  style={{ fontFamily: "Georgia, serif", color: isOn ? "#d4b483" : "#c4b5e0" }}>
                  {g.title}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
                  {g.desc}
                </p>
              </button>
            );
          })}
        </div>

        <p className="text-xs text-center mt-5"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "system-ui" }}>
          {active.length} goal{active.length !== 1 ? "s" : ""} selected
        </p>

        <button className="w-full mt-4 rounded-2xl py-4 text-sm font-semibold cursor-pointer"
          style={{
            background: active.length > 0 ? "linear-gradient(135deg, #c4b5e0, #d4b483)" : "rgba(255,255,255,0.06)",
            color: active.length > 0 ? "#1a0e2e" : "rgba(255,255,255,0.3)",
            fontFamily: "system-ui",
          }}>
          {active.length > 0 ? "Continue" : "Choose at least one goal"}
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 6 ? 18 : 6, height: 6,
              background: i === 6 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 6 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
