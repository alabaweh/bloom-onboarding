"use client";
import { useState } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<string[]>([]);

  const categories = [
    {
      label: "Physical",
      color: "#ff6467",
      gradient: "linear-gradient(135deg, #ff6467, #fbbf24)",
      items: ["Cramps", "Bloating", "Headache", "Fatigue", "Back Pain", "Breast Tenderness"],
    },
    {
      label: "Emotional",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #38bdf8)",
      items: ["Mood Swings", "Anxiety", "Irritability", "Sadness", "Brain Fog"],
    },
    {
      label: "Energy",
      color: "#38bdf8",
      gradient: "linear-gradient(135deg, #38bdf8, #fbbf24)",
      items: ["Low Energy", "Restless", "Insomnia", "High Energy", "Nesting"],
    },
  ];

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col px-6 py-12"
      style={{ background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Background blobs */}
      <div className="absolute rounded-full" style={{
        width: 260, height: 260, top: -60, right: -80,
        background: "radial-gradient(circle, #ff6467, #8b5cf6 70%, transparent 90%)",
        filter: "blur(50px)", opacity: 0.3,
      }} />
      <div className="absolute rounded-full" style={{
        width: 200, height: 200, bottom: 80, left: -40,
        background: "radial-gradient(circle, #fbbf24, #38bdf8 70%, transparent 90%)",
        filter: "blur(45px)", opacity: 0.25,
      }} />

      <div className="relative z-10 flex-1 flex flex-col items-center">
        <h2 className="text-3xl font-black text-center mb-1" style={{ color: "#111111" }}>
          Your Symptoms
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: "#6b7280" }}>
          Select what you typically experience
        </p>

        <div className="w-full max-w-sm space-y-6">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ background: cat.gradient }} />
                <span className="text-sm font-bold" style={{ color: cat.color }}>{cat.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => {
                  const isSelected = selected.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() => toggle(item)}
                      className="px-4 py-2.5 rounded-full text-sm font-semibold border-0 cursor-pointer transition-all duration-300"
                      style={{
                        background: isSelected ? cat.gradient : "#f3f4f6",
                        color: isSelected ? "#ffffff" : "#6b7280",
                        transform: isSelected ? "scale(1.05)" : "scale(1)",
                        boxShadow: isSelected ? `0 4px 15px ${cat.color}33` : "none",
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {selected.length > 0 && (
          <p className="text-sm font-semibold mt-6" style={{ color: "#8b5cf6" }}>
            {selected.length} symptom{selected.length > 1 ? "s" : ""} selected
          </p>
        )}

        <button
          className="mt-8 px-10 py-3.5 rounded-full text-base font-bold border-0 cursor-pointer"
          style={{
            background: selected.length > 0
              ? "linear-gradient(135deg, #8b5cf6, #ff6467)"
              : "#e5e7eb",
            color: selected.length > 0 ? "#ffffff" : "#9ca3af",
          }}
        >
          Continue
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 5 ? 24 : 8, height: 8,
              background: i === 5 ? "linear-gradient(90deg, #8b5cf6, #38bdf8)" : "#e5e7eb",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
