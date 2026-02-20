"use client";
import { useState } from "react";

export default function Profile() {
  const [cycle, setCycle] = useState(28);
  const [period, setPeriod] = useState(5);
  const [age, setAge] = useState<string | null>(null);
  const [activity, setActivity] = useState<string | null>(null);

  const ages = ["18-24", "25-30", "31-35", "36-40", "41+"];
  const activities = ["Gentle", "Moderate", "Active", "Intense"];
  const cycleOptions = [24, 26, 28, 30, 32, 35];
  const periodOptions = [3, 4, 5, 6, 7];

  const Bead = ({ label, selected, onTap }: { label: string; selected: boolean; onTap: () => void }) => (
    <button onClick={onTap} className="px-4 py-2 text-sm transition-all duration-200 cursor-pointer" style={{
      background: selected ? "#c27a56" : "#e8d5c0",
      color: selected ? "#fff" : "#8b6b4a",
      borderRadius: "50% 50% 45% 55% / 55% 45% 50% 50%",
      border: "none",
      fontFamily: "system-ui, sans-serif",
      fontWeight: selected ? 600 : 400,
      boxShadow: selected ? "0 2px 10px #c27a5630" : "none",
      transform: selected ? "scale(1.05)" : "scale(1)",
    }}>
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#f5ede3", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#3a2e24" }}>Shape your profile</h2>
      <p className="text-sm mb-8" style={{ color: "#8b6b4a" }}>Tap the clay tokens that fit you</p>

      <div className="w-full max-w-sm space-y-6">
        {/* Cycle Length */}
        <div>
          <p className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: "#8b6b4a" }}>Cycle length: {cycle} days</p>
          <div className="flex flex-wrap gap-2">
            {cycleOptions.map((v) => <Bead key={v} label={`${v}`} selected={cycle === v} onTap={() => setCycle(v)} />)}
          </div>
        </div>

        {/* Period Length */}
        <div>
          <p className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: "#8b6b4a" }}>Period length: {period} days</p>
          <div className="flex flex-wrap gap-2">
            {periodOptions.map((v) => <Bead key={v} label={`${v}`} selected={period === v} onTap={() => setPeriod(v)} />)}
          </div>
        </div>

        {/* Age */}
        <div>
          <p className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: "#8b6b4a" }}>Age range</p>
          <div className="flex flex-wrap gap-2">
            {ages.map((a) => <Bead key={a} label={a} selected={age === a} onTap={() => setAge(a)} />)}
          </div>
        </div>

        {/* Activity */}
        <div>
          <p className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: "#8b6b4a" }}>Activity level</p>
          <div className="flex flex-wrap gap-2">
            {activities.map((a) => <Bead key={a} label={a} selected={activity === a} onTap={() => setActivity(a)} />)}
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-2 rounded-full" style={{ width: i === 3 ? 24 : 8, background: i === 3 ? "#c27a56" : "#e8d5c0" }} />
        ))}
      </div>
    </div>
  );
}
