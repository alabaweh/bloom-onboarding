"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Profile
 * Health profile as clean numbered sections with sharp-cornered
 * selection grids. Red markers on selected items.
 */
export default function Profile() {
  const [age, setAge] = useState<string | null>(null);
  const [cycleLength, setCycleLength] = useState<string | null>(null);
  const [conditions, setConditions] = useState<string[]>([]);

  const ages = ["18-24", "25-30", "31-35", "36-40", "41+"];
  const lengths = ["21-24", "25-28", "29-32", "33-36", "Irregular"];
  const conditionOptions = ["PCOS", "Endometriosis", "Fibroids", "Thyroid", "None"];

  const toggleCondition = (c: string) => {
    setConditions((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Topographic background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx={200 + (i % 3) * 30} cy={100 + i * 90} rx={160 - i * 12} ry={60 + i * 8} stroke="#1a1a1a" strokeWidth="0.75" fill="none" />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] block mb-3" style={{ fontFamily: "system-ui", opacity: 0.35 }}>
          Vela / Profile
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Map Your<br />Health Terrain
        </h1>
      </div>

      <div className="z-10 flex-1 space-y-10">
        {/* Section 01: Age */}
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>01</span>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "system-ui", opacity: 0.5 }}>Age Range</span>
          </div>
          <div className="grid grid-cols-5 gap-0">
            {ages.map((a) => (
              <button key={a} onClick={() => setAge(a)}
                className="h-12 rounded-none text-[11px] tracking-wide border border-[#1a1a1a]/10 transition-colors"
                style={{
                  fontFamily: "ui-monospace, monospace",
                  background: age === a ? "#c8352e" : "transparent",
                  color: age === a ? "#fafaf8" : "#1a1a1a",
                  borderColor: age === a ? "#c8352e" : undefined,
                }}>
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1a1a1a] opacity-[0.06]" />

        {/* Section 02: Cycle Length */}
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>02</span>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "system-ui", opacity: 0.5 }}>Cycle Length (Days)</span>
          </div>
          <div className="grid grid-cols-5 gap-0">
            {lengths.map((l) => (
              <button key={l} onClick={() => setCycleLength(l)}
                className="h-12 rounded-none text-[11px] tracking-wide border border-[#1a1a1a]/10 transition-colors"
                style={{
                  fontFamily: "ui-monospace, monospace",
                  background: cycleLength === l ? "#c8352e" : "transparent",
                  color: cycleLength === l ? "#fafaf8" : "#1a1a1a",
                  borderColor: cycleLength === l ? "#c8352e" : undefined,
                }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1a1a1a] opacity-[0.06]" />

        {/* Section 03: Conditions */}
        <div>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}>03</span>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "system-ui", opacity: 0.5 }}>Conditions</span>
          </div>
          <div className="grid grid-cols-3 gap-0">
            {conditionOptions.map((c) => (
              <button key={c} onClick={() => toggleCondition(c)}
                className="h-12 rounded-none text-[11px] tracking-wide border border-[#1a1a1a]/10 transition-colors"
                style={{
                  fontFamily: "system-ui",
                  background: conditions.includes(c) ? "#c8352e" : "transparent",
                  color: conditions.includes(c) ? "#fafaf8" : "#1a1a1a",
                  borderColor: conditions.includes(c) ? "#c8352e" : undefined,
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="z-10 mt-8 w-full">
        <button className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{ background: "#1a1a1a", color: "#fafaf8", fontFamily: "system-ui" }}>
          Continue
        </button>
      </div>
    </div>
  );
}
