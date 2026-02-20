"use client";
import { useState } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<string[]>([]);

  const goals = [
    {
      id: "track",
      icon: "📊",
      title: "Track My Cycle",
      desc: "Know exactly where I am in my cycle",
      gradient: "radial-gradient(circle at 30% 70%, #8b5cf6 0%, #ff6467 80%, transparent 95%)",
    },
    {
      id: "fertility",
      icon: "🌱",
      title: "Fertility Awareness",
      desc: "Understand my fertile window",
      gradient: "radial-gradient(circle at 70% 30%, #fbbf24 0%, #ff6467 80%, transparent 95%)",
    },
    {
      id: "wellness",
      icon: "✨",
      title: "Wellness Optimization",
      desc: "Align workouts, nutrition & self-care",
      gradient: "radial-gradient(circle at 50% 50%, #38bdf8 0%, #8b5cf6 80%, transparent 95%)",
    },
    {
      id: "symptoms",
      icon: "💡",
      title: "Symptom Patterns",
      desc: "Spot trends and feel more in control",
      gradient: "radial-gradient(circle at 40% 60%, #ff6467 0%, #fbbf24 80%, transparent 95%)",
    },
    {
      id: "mood",
      icon: "🎭",
      title: "Mood Insights",
      desc: "Understand my emotional waves",
      gradient: "radial-gradient(circle at 60% 40%, #8b5cf6 0%, #38bdf8 80%, transparent 95%)",
    },
  ];

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes revealBlob { from { opacity:0; transform:scale(0.5); } to { opacity:0.7; transform:scale(1); } }
      `}</style>

      <h2 className="text-3xl font-black text-center mb-1 relative z-10" style={{ color: "#111111" }}>
        Your Goals
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#6b7280" }}>
        What matters most to you?
      </p>

      <div className="w-full max-w-sm space-y-3 relative z-10">
        {goals.map((g) => {
          const isSelected = selected.includes(g.id);
          return (
            <button
              key={g.id}
              onClick={() => toggle(g.id)}
              className="w-full relative overflow-hidden rounded-2xl p-5 border-0 cursor-pointer text-left transition-all duration-400"
              style={{
                background: isSelected ? "#fafafa" : "#f9fafb",
                border: isSelected ? "2px solid #8b5cf6" : "2px solid #f3f4f6",
                transform: isSelected ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* Gradient mesh reveal on selection */}
              {isSelected && (
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 160, height: 160, top: -30, right: -30,
                    background: g.gradient,
                    filter: "blur(35px)", opacity: 0.7,
                    animation: "revealBlob 0.4s ease-out forwards",
                  }}
                />
              )}
              <div className="relative z-10 flex items-center gap-4">
                <div className="text-2xl flex-shrink-0">{g.icon}</div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: "#111111" }}>{g.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "#6b7280" }}>{g.desc}</p>
                </div>
                <div
                  className="ml-auto w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: isSelected ? "linear-gradient(135deg, #8b5cf6, #ff6467)" : "#e5e7eb",
                  }}
                >
                  {isSelected && <span className="text-white text-xs font-bold">&#10003;</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        className="mt-8 px-10 py-3.5 rounded-full text-base font-bold border-0 cursor-pointer relative z-10"
        style={{
          background: selected.length > 0 ? "linear-gradient(135deg, #8b5cf6, #ff6467, #fbbf24)" : "#e5e7eb",
          color: selected.length > 0 ? "#ffffff" : "#9ca3af",
        }}
      >
        Continue
      </button>

      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 6 ? 24 : 8, height: 8,
            background: i === 6 ? "linear-gradient(90deg, #fbbf24, #ff6467)" : "#e5e7eb",
          }} />
        ))}
      </div>
    </div>
  );
}
