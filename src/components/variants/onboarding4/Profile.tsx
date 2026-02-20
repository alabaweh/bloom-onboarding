"use client";

import { useState } from "react";

export default function Profile() {
  const [age, setAge] = useState("");
  const [length, setLength] = useState("");
  const [regularity, setRegularity] = useState("");

  const ages = ["18-24", "25-30", "31-35", "36-40", "41+"];
  const lengths = ["21-24", "25-28", "29-32", "33-36", "Unsure"];
  const regularities = ["Very regular", "Somewhat", "Irregular", "Not sure"];

  const Selector = ({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="mb-6">
      <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 500 }} className="block mb-3">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button key={opt} onClick={() => onChange(opt)} style={{
            padding: "9px 18px", borderRadius: 20, cursor: "pointer",
            background: value === opt ? "rgba(212,165,116,0.2)" : "rgba(255,255,255,0.04)",
            border: `1.5px solid ${value === opt ? "#d4a574" : "rgba(255,255,255,0.1)"}`,
            color: value === opt ? "#d4a574" : "rgba(255,255,255,0.55)",
            fontSize: "0.85rem", fontWeight: value === opt ? 600 : 400,
            transition: "all 0.25s ease",
          }}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ background: "#0a1a14", fontFamily: "system-ui, sans-serif" }} className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative">
      <h2 style={{ fontFamily: "Georgia, serif", color: "#d4a574", fontSize: "1.6rem" }} className="mb-1 text-center">
        Tell us about you
      </h2>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }} className="mb-8 text-center">
        This helps Bloom grow with you
      </p>

      <div style={{
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20, padding: "24px 20px", width: "100%", maxWidth: 360,
      }}>
        <Selector label="Age range" options={ages} value={age} onChange={setAge} />
        <Selector label="Typical cycle length (days)" options={lengths} value={length} onChange={setLength} />
        <Selector label="How regular is your cycle?" options={regularities} value={regularity} onChange={setRegularity} />
      </div>

      <div className="flex items-center gap-2 mt-5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z" />
        </svg>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>
          This stays private on your device
        </p>
      </div>

      <button style={{
        background: age && length && regularity ? "linear-gradient(135deg, #d4a574, #c9a96e)" : "rgba(255,255,255,0.08)",
        color: age && length && regularity ? "#0a1a14" : "rgba(255,255,255,0.3)",
        fontWeight: 600, fontSize: "0.95rem",
        padding: "13px 44px", borderRadius: 28, border: "none",
        cursor: age && length && regularity ? "pointer" : "default",
        boxShadow: age && length && regularity ? "0 4px 20px rgba(212,165,116,0.3)" : "none",
        transition: "all 0.3s ease",
      }} className="mt-6">
        Continue
      </button>

      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", position: "absolute", bottom: 24 }}>
        Step 4 of 9
      </p>
    </div>
  );
}
