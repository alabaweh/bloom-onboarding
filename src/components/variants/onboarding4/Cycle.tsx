"use client";

import { useState } from "react";

export default function Cycle() {
  const [active, setActive] = useState(0);

  const phases = [
    { name: "Menstrual", season: "Dormant", days: "Days 1-5", color: "#8b5e3c",
      desc: "Rest and renewal. Your garden lies quiet, gathering strength beneath the surface.",
      icon: "M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" },
    { name: "Follicular", season: "Sprouting", days: "Days 6-13", color: "#2d8a6e",
      desc: "Energy rises. New growth pushes through as your body prepares to bloom.",
      icon: "M12 22V12m0 0V2m0 10l-5 5m5-5l5 5M7 7l5-5 5 5" },
    { name: "Ovulation", season: "Full Bloom", days: "Days 14-16", color: "#d4a574",
      desc: "Peak vitality. Your garden is at its most vibrant and alive.",
      icon: "M12 2L9 9H2l6 4-2 7 6-5 6 5-2-7 6-4h-7z" },
    { name: "Luteal", season: "Harvest", days: "Days 17-28", color: "#c9a96e",
      desc: "Winding down. Gathering the fruits before the cycle begins anew.",
      icon: "M17 8C17 5.24 14.76 3 12 3S7 5.24 7 8c0 2.85 2.92 7.21 5 9.88 2.08-2.67 5-7.03 5-9.88z" },
  ];

  const p = phases[active];

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative">
      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center">
        Your cycle, your seasons
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-6 text-center">
        Tap each phase to explore
      </p>

      <div className="flex gap-2 mb-6 w-full max-w-xs justify-center">
        {phases.map((ph, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            flex: 1, padding: "10px 4px", borderRadius: 12, cursor: "pointer",
            background: active === i ? `${ph.color}22` : "rgba(255,255,255,0.04)",
            border: `1.5px solid ${active === i ? ph.color : "rgba(255,255,255,0.08)"}`,
            transition: "all 0.3s ease",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" className="mx-auto mb-1" fill="none" stroke={active === i ? ph.color : "rgba(255,255,255,0.3)"} strokeWidth="1.5">
              <path d={ph.icon} />
            </svg>
            <p style={{ color: active === i ? ph.color : "rgba(255,255,255,0.35)", fontSize: "0.6rem", fontWeight: 600 }}>
              {ph.season}
            </p>
          </button>
        ))}
      </div>

      <div style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: "24px 20px", width: "100%", maxWidth: 340,
        transition: "all 0.3s ease",
      }}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{ background: `${p.color}20`, borderRadius: 10, padding: 8 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill={p.color}>
              <path d={p.icon} />
            </svg>
          </div>
          <div>
            <h3 style={{ fontFamily: "Georgia, serif", color: p.color, fontSize: "1.15rem" }}>{p.name}</h3>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>{p.days}</p>
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.6 }}>{p.desc}</p>
      </div>


      <button style={{
        background: "linear-gradient(135deg, #d4a574, #c9a96e)",
        color: "#0a1a14", fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none", cursor: "pointer",
        boxShadow: "0 4px 20px rgba(212,165,116,0.3)",
      }} className="mt-6 transition-transform active:scale-95">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 3 of 9
      </p>
    </div>
  );
}
