"use client";
import { useState } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<string[]>([]);

  const symptoms = [
    { name: "Cramps", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Headache", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0" },
    { name: "Bloating", icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" },
    { name: "Fatigue", icon: "M20 12H4m0 0l4-4m-4 4l4 4" },
    { name: "Mood swings", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Back pain", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "Cravings", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 7v1" },
    { name: "Insomnia", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" },
  ];

  const toggle = (name: string) => {
    setSelected(prev => prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]);
  };

  const tagRotations = [0.8, -1.2, 0.5, -0.8, 1, -0.5, 0.7, -1];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        Your Symptoms
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Select the ones you experience
      </p>

      <div className="flex flex-wrap gap-3 justify-center max-w-sm mx-auto relative z-10">
        {symptoms.map((s, i) => {
          const isActive = selected.includes(s.name);
          return (
            <button key={s.name} onClick={() => toggle(s.name)}
              className="relative px-4 py-3 rounded-xl text-sm border-0 cursor-pointer transition-all duration-300 flex items-center gap-2"
              style={{
                background: isActive ? "#e8735a" : "#fff",
                color: isActive ? "#fff" : "#4a3728",
                transform: `rotate(${isActive ? 0 : tagRotations[i]}deg) scale(${isActive ? 1.05 : 1})`,
                boxShadow: isActive
                  ? "0 4px 16px rgba(232,115,90,0.3), 0 2px 6px rgba(74,55,40,0.08)"
                  : "0 2px 8px rgba(74,55,40,0.1), 0 1px 3px rgba(74,55,40,0.06)",
              }}>
              {/* Folded corner */}
              <div className="absolute top-0 right-0 w-3 h-3 overflow-hidden rounded-tr-xl">
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3" style={{
                  background: isActive
                    ? "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)"
                    : "linear-gradient(135deg, transparent 50%, #f0e6d6 50%)",
                }} />
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.icon} />
              </svg>
              {s.name}
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <p className="text-center text-xs mt-6 relative z-10" style={{ color: "#4a3728", opacity: 0.5 }}>
          {selected.length} symptom{selected.length > 1 ? "s" : ""} selected
        </p>
      )}

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 5 ? 18 : 6, height: 6,
            background: i === 5 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
