"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [age, setAge] = useState<number | null>(null);
  const [cycleLength, setCycleLength] = useState<number | null>(null);
  const [periodLength, setPeriodLength] = useState<number | null>(null);
  const [stars, setStars] = useState<{ x: number; y: number; s: number; d: number }[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 30 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      s: Math.random() * 2 + 0.5, d: Math.random() * 4,
    })));
  }, []);

  const ageOptions = [{ label: "18-24", val: 21 }, { label: "25-30", val: 27 }, { label: "31-35", val: 33 }, { label: "36-40", val: 38 }, { label: "41+", val: 45 }];
  const cycleOptions = [24, 26, 28, 30, 32, 34];
  const periodOptions = [3, 4, 5, 6, 7];

  const NodeRow = ({ label, options, selected, onSelect, formatLabel }: {
    label: string; options: { label: string; val: number }[] | number[];
    selected: number | null; onSelect: (v: number) => void;
    formatLabel?: (v: number | { label: string; val: number }) => string;
  }) => {
    const items = options.map((o) => typeof o === "number" ? { label: `${o}`, val: o } : o);
    return (
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(245,216,130,0.6)" }}>{label}</p>
        <div className="relative">
          <svg className="absolute inset-0 w-full" height="4" style={{ top: 22 }}>
            <line x1="0" y1="2" x2="100%" y2="2" stroke="rgba(245,216,130,0.08)" strokeWidth="1" />
          </svg>
          <div className="flex justify-between relative">
            {items.map((item, i) => {
              const isSelected = selected === item.val;
              return (
                <button key={i} onClick={() => onSelect(item.val)}
                  className="flex flex-col items-center gap-2 border-0 bg-transparent cursor-pointer p-0"
                  style={{ transition: "all 0.3s ease" }}>
                  <div className="rounded-full flex items-center justify-center" style={{
                    width: isSelected ? 44 : 36, height: isSelected ? 44 : 36,
                    background: isSelected ? "rgba(245,216,130,0.15)" : "rgba(255,255,255,0.03)",
                    border: `1.5px solid ${isSelected ? "#f5d882" : "rgba(255,255,255,0.08)"}`,
                    boxShadow: isSelected ? "0 0 20px rgba(245,216,130,0.25)" : "none",
                    transition: "all 0.3s ease",
                  }}>
                    <div className="rounded-full" style={{
                      width: isSelected ? 10 : 5, height: isSelected ? 10 : 5,
                      background: isSelected ? "#f5d882" : "rgba(245,216,130,0.2)",
                      boxShadow: isSelected ? "0 0 8px #f5d882" : "none",
                      transition: "all 0.3s ease",
                    }} />
                  </div>
                  <span className="text-xs" style={{
                    color: isSelected ? "#f5d882" : "rgba(255,255,255,0.3)",
                    fontWeight: isSelected ? 500 : 400,
                  }}>
                    {formatLabel ? formatLabel(item) : item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden px-6 py-14 flex flex-col"
      style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`@keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }`}</style>

      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{
          left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
          backgroundColor: "#fff", animation: `twinkle ${2 + s.d}s ease-in-out infinite`,
          animationDelay: `${s.d}s`, opacity: 0.4,
        }} />
      ))}

      <h2 className="text-2xl font-extralight tracking-[0.2em] text-center mb-1" style={{ color: "#f5d882" }}>
        YOUR STARS
      </h2>
      <p className="text-center text-sm mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
        Chart your constellation profile
      </p>

      <div className="flex-1 max-w-sm mx-auto w-full">
        <NodeRow label="Age Range" options={ageOptions} selected={age} onSelect={setAge} />
        <NodeRow label="Cycle Length (days)" options={cycleOptions} selected={cycleLength}
          onSelect={setCycleLength} formatLabel={(v) => `${(v as { label: string; val: number }).val}`} />
        <NodeRow label="Period Length (days)" options={periodOptions} selected={periodLength}
          onSelect={setPeriodLength} formatLabel={(v) => `${(v as { label: string; val: number }).val}`} />
      </div>

      <div className="text-center mb-6">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(245,216,130,0.1)" strokeWidth="0.5" />
          {[age, cycleLength, periodLength].map((v, i) => {
            const a = (i * 120 - 90) * Math.PI / 180;
            return <circle key={i} cx={30 + 25 * Math.cos(a)} cy={30 + 25 * Math.sin(a)}
              r={v ? 4 : 2} fill={v ? "#f5d882" : "rgba(245,216,130,0.15)"}
              style={v ? { filter: "drop-shadow(0 0 6px rgba(245,216,130,0.5))" } : {}} />;
          })}
          {age && cycleLength && <line x1={30 + 25 * Math.cos(-90 * Math.PI / 180)} y1={30 + 25 * Math.sin(-90 * Math.PI / 180)}
            x2={30 + 25 * Math.cos(30 * Math.PI / 180)} y2={30 + 25 * Math.sin(30 * Math.PI / 180)} stroke="rgba(245,216,130,0.3)" strokeWidth="0.5" />}
          {cycleLength && periodLength && <line x1={30 + 25 * Math.cos(30 * Math.PI / 180)} y1={30 + 25 * Math.sin(30 * Math.PI / 180)}
            x2={30 + 25 * Math.cos(150 * Math.PI / 180)} y2={30 + 25 * Math.sin(150 * Math.PI / 180)} stroke="rgba(245,216,130,0.3)" strokeWidth="0.5" />}
        </svg>
      </div>

      <button
        className="mx-auto px-10 py-3 rounded-full text-sm font-medium tracking-widest uppercase border-0 cursor-pointer"
        style={{
          background: age && cycleLength && periodLength ? "linear-gradient(135deg, #f5d882, #d4a843)" : "rgba(245,216,130,0.1)",
          color: age && cycleLength && periodLength ? "#0c0a1d" : "rgba(245,216,130,0.3)",
          transition: "all 0.4s ease",
        }}>
        Continue
      </button>
    </div>
  );
}
