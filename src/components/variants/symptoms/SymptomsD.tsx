"use client";

import { useState } from "react";

/**
 * VARIANT D — "Woven"
 * Concept: Patchwork quilt / textile craft. Each symptom is a fabric swatch.
 * Linen background, warm brown & copper tones. Stitching borders.
 * Tapping a patch toggles it as "sewn in" with a visible stitch pattern.
 */

const SYMPTOM_GROUPS = [
  {
    name: "Physical",
    icon: "\u2740",
    symptoms: [
      { id: "cramps", label: "Cramps", pattern: "crosshatch" },
      { id: "headache", label: "Headache", pattern: "dots" },
      { id: "bloating", label: "Bloating", pattern: "stripes" },
      { id: "fatigue", label: "Fatigue", pattern: "waves" },
      { id: "breast-tenderness", label: "Breast tenderness", pattern: "diamonds" },
      { id: "back-pain", label: "Back pain", pattern: "zigzag" },
    ],
  },
  {
    name: "Emotional",
    icon: "\u2661",
    symptoms: [
      { id: "mood-swings", label: "Mood swings", pattern: "crosshatch" },
      { id: "anxiety", label: "Anxiety", pattern: "dots" },
      { id: "irritability", label: "Irritability", pattern: "stripes" },
      { id: "sadness", label: "Sadness", pattern: "waves" },
    ],
  },
  {
    name: "Other",
    icon: "\u2726",
    symptoms: [
      { id: "cravings", label: "Cravings", pattern: "diamonds" },
      { id: "insomnia", label: "Insomnia", pattern: "zigzag" },
      { id: "skin-changes", label: "Skin changes", pattern: "crosshatch" },
      { id: "digestion", label: "Digestion", pattern: "dots" },
    ],
  },
];

function FabricPattern({ pattern, selected }: { pattern: string; selected: boolean }) {
  const opacity = selected ? 0.15 : 0.06;
  const color = selected ? "#c17f4e" : "#3d2b1f";

  return (
    <svg className="absolute inset-0 w-full h-full" style={{ opacity }}>
      {pattern === "crosshatch" && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`a${i}`} x1={i * 12} y1="0" x2={i * 12} y2="100%" stroke={color} strokeWidth="0.5" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`b${i}`} x1="0" y1={i * 12} x2="100%" y2={i * 12} stroke={color} strokeWidth="0.5" />
          ))}
        </>
      )}
      {pattern === "dots" &&
        Array.from({ length: 36 }).map((_, i) => (
          <circle
            key={i}
            cx={(i % 6) * 20 + 10}
            cy={Math.floor(i / 6) * 14 + 7}
            r="1.5"
            fill={color}
          />
        ))}
      {pattern === "stripes" &&
        Array.from({ length: 10 }).map((_, i) => (
          <line
            key={i}
            x1={0}
            y1={i * 10}
            x2="100%"
            y2={i * 10}
            stroke={color}
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        ))}
      {pattern === "waves" &&
        Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${i * 12 + 6} Q 15 ${i * 12}, 30 ${i * 12 + 6} T 60 ${i * 12 + 6} T 90 ${i * 12 + 6} T 120 ${i * 12 + 6} T 150 ${i * 12 + 6}`}
            fill="none"
            stroke={color}
            strokeWidth="0.8"
          />
        ))}
      {pattern === "diamonds" &&
        Array.from({ length: 12 }).map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const cx = col * 30 + 15;
          const cy = row * 28 + 14;
          return (
            <polygon
              key={i}
              points={`${cx},${cy - 8} ${cx + 8},${cy} ${cx},${cy + 8} ${cx - 8},${cy}`}
              fill="none"
              stroke={color}
              strokeWidth="0.6"
            />
          );
        })}
      {pattern === "zigzag" &&
        Array.from({ length: 7 }).map((_, i) => (
          <polyline
            key={i}
            points={`0,${i * 14} 10,${i * 14 + 7} 20,${i * 14} 30,${i * 14 + 7} 40,${i * 14} 50,${i * 14 + 7} 60,${i * 14} 70,${i * 14 + 7} 80,${i * 14} 90,${i * 14 + 7} 100,${i * 14} 110,${i * 14 + 7} 120,${i * 14}`}
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />
        ))}
    </svg>
  );
}

function StitchBorder({ selected }: { selected: boolean }) {
  if (!selected) return null;
  return (
    <div className="absolute inset-0 pointer-events-none rounded-xl">
      <svg className="absolute inset-0 w-full h-full">
        <rect
          x="3"
          y="3"
          width="calc(100% - 6px)"
          height="calc(100% - 6px)"
          rx="10"
          fill="none"
          stroke="#c17f4e"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          style={{ width: "calc(100% - 6px)", height: "calc(100% - 6px)" }}
        />
      </svg>
    </div>
  );
}

export default function SymptomsD() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#f7f3ee" }}
    >
      {/* Linen texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(61, 43, 31, 0.015) 2px,
            rgba(61, 43, 31, 0.015) 3px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(61, 43, 31, 0.015) 2px,
            rgba(61, 43, 31, 0.015) 3px
          )`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 px-6 pt-14 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i === 0 ? "#c17f4e" : i === 1 ? "#3d2b1f" : "#d4a574",
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
          <div
            className="h-px flex-1 ml-2"
            style={{
              borderTop: "1.5px dashed rgba(61, 43, 31, 0.15)",
            }}
          />
        </div>
        <h1
          className="text-[28px] font-bold tracking-tight mb-2"
          style={{ color: "#3d2b1f" }}
        >
          Stitch Your Symptoms
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(61, 43, 31, 0.5)" }}>
          Tap each patch to weave it into your tracking quilt.
        </p>
      </div>

      {/* Symptom Groups */}
      <div className="relative z-10 flex-1 px-5 py-2 space-y-6 overflow-y-auto">
        {SYMPTOM_GROUPS.map((group) => (
          <div key={group.name}>
            {/* Group header with thread line */}
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-base" style={{ color: "#c17f4e" }}>{group.icon}</span>
              <span
                className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#3d2b1f" }}
              >
                {group.name}
              </span>
              <div
                className="h-0 flex-1"
                style={{ borderTop: "1px dashed rgba(193, 127, 78, 0.3)" }}
              />
            </div>

            {/* Patchwork quilt grid */}
            <div className="grid grid-cols-3 gap-2.5">
              {group.symptoms.map((symptom) => {
                const isSelected = selected.has(symptom.id);
                return (
                  <button
                    key={symptom.id}
                    onClick={() => toggle(symptom.id)}
                    className="relative rounded-xl overflow-hidden text-left transition-all duration-300"
                    style={{
                      aspectRatio: "1",
                      backgroundColor: isSelected
                        ? "rgba(193, 127, 78, 0.08)"
                        : "rgba(255, 255, 255, 0.5)",
                      border: isSelected
                        ? "none"
                        : "1px solid rgba(61, 43, 31, 0.08)",
                      boxShadow: isSelected
                        ? "0 2px 8px rgba(193, 127, 78, 0.12)"
                        : "0 1px 2px rgba(61, 43, 31, 0.04)",
                    }}
                  >
                    <FabricPattern pattern={symptom.pattern} selected={isSelected} />
                    <StitchBorder selected={isSelected} />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-2.5">
                      {/* Selected indicator: sewn-in thread cross */}
                      {isSelected && (
                        <div className="self-end">
                          <svg width="16" height="16" viewBox="0 0 16 16">
                            <line x1="3" y1="3" x2="13" y2="13" stroke="#c17f4e" strokeWidth="1.5" strokeDasharray="2 2" />
                            <line x1="13" y1="3" x2="3" y2="13" stroke="#c17f4e" strokeWidth="1.5" strokeDasharray="2 2" />
                          </svg>
                        </div>
                      )}
                      {!isSelected && <div className="self-end h-4" />}

                      <span
                        className="text-[11px] font-medium leading-tight"
                        style={{
                          color: isSelected ? "#3d2b1f" : "rgba(61, 43, 31, 0.4)",
                        }}
                      >
                        {symptom.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="relative z-10 px-6 pb-10 pt-5">
        {/* Stitch counter */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-0 flex-1" style={{ borderTop: "1px dashed rgba(61, 43, 31, 0.12)" }} />
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" style={{ color: "#c17f4e" }}>
              <path
                d="M1 7h12M7 1v12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
            </svg>
            <span className="text-xs font-medium" style={{ color: "#3d2b1f" }}>
              {selected.size} patch{selected.size !== 1 ? "es" : ""} stitched
            </span>
          </div>
          <div className="h-0 flex-1" style={{ borderTop: "1px dashed rgba(61, 43, 31, 0.12)" }} />
        </div>

        <button
          className="w-full h-14 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
          style={{
            backgroundColor: selected.size > 0 ? "#3d2b1f" : "rgba(61, 43, 31, 0.08)",
            color: selected.size > 0 ? "#f7f3ee" : "rgba(61, 43, 31, 0.3)",
            border: selected.size > 0 ? "none" : "1px dashed rgba(61, 43, 31, 0.15)",
          }}
        >
          Weave My Pattern
        </button>
      </div>
    </div>
  );
}
