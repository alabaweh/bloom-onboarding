"use client";

import { useState } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<string[]>([]);

  const goals = [
    { id: "track", label: "Track my cycle", desc: "Know when to expect each phase",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" },
    { id: "fertility", label: "Understand fertility", desc: "Plan or prevent with confidence",
      icon: "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z" },
    { id: "symptoms", label: "Manage symptoms", desc: "Spot patterns and find relief",
      icon: "M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" },
    { id: "wellness", label: "Holistic wellness", desc: "Nurture body, mind, and spirit",
      icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
  ];

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative">
      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center">
        What would you like to grow?
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-8 text-center">
        Choose your intentions
      </p>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        {goals.map((g) => {
          const on = selected.includes(g.id);
          return (
            <button key={g.id} onClick={() => toggle(g.id)} style={{
              background: on ? "rgba(6,78,59,0.2)" : "rgba(255,255,255,0.04)",
              border: `1.5px solid ${on ? "rgba(212,165,116,0.35)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 16, padding: "16px", textAlign: "left", cursor: "pointer",
              transition: "all 0.25s ease",
            }} className="flex items-center gap-4">
              <div style={{
                background: on ? "rgba(212,165,116,0.15)" : "rgba(255,255,255,0.06)",
                borderRadius: 12, padding: 10, flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill={on ? "#d4a574" : "rgba(255,255,255,0.35)"}>
                  <path d={g.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 style={{ fontFamily: "Georgia, serif", color: on ? "#d4a574" : "rgba(255,255,255,0.85)", fontSize: "1rem" }} className="mb-0.5">
                  {g.label}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{g.desc}</p>
              </div>
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                border: `2px solid ${on ? "#d4a574" : "rgba(255,255,255,0.15)"}`,
                background: on ? "#d4a574" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.2s ease",
              }}>
                {on && <svg width="14" height="14" viewBox="0 0 24 24" fill="#0a1a14"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>}
              </div>
            </button>
          );
        })}
      </div>

      <button style={{
        background: selected.length > 0 ? "linear-gradient(135deg, #d4a574, #c9a96e)" : "rgba(255,255,255,0.08)",
        color: selected.length > 0 ? "#0a1a14" : "rgba(255,255,255,0.3)",
        fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none",
        cursor: selected.length > 0 ? "pointer" : "default",
        boxShadow: selected.length > 0 ? "0 4px 20px rgba(212,165,116,0.3)" : "none",
        transition: "all 0.3s ease",
      }} className="mt-8">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 7 of 9
      </p>
    </div>
  );
}
