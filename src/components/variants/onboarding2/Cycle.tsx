"use client";

import { useState } from "react";

/**
 * VARIANT — "Topographic" Cycle Education
 * Geological strata cross-section. Each menstrual phase as a
 * different sedimentary layer with unique pattern fills.
 */
export default function Cycle() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      name: "Menstrual",
      days: "Days 1-5",
      color: "#c8352e",
      opacity: 0.85,
      desc: "The shedding layer. Your body releases and renews. Rest is the geology of recovery.",
      pattern: "dots",
    },
    {
      name: "Follicular",
      days: "Days 6-13",
      color: "#1a1a1a",
      opacity: 0.15,
      desc: "The building layer. Estrogen rises like new sediment forming. Energy accumulates.",
      pattern: "diagonal",
    },
    {
      name: "Ovulatory",
      days: "Days 14-16",
      color: "#c8352e",
      opacity: 0.25,
      desc: "The peak elevation. Your most fertile terrain. Everything reaches its highest point.",
      pattern: "cross",
    },
    {
      name: "Luteal",
      days: "Days 17-28",
      color: "#1a1a1a",
      opacity: 0.08,
      desc: "The settling layer. Progesterone lays down like ancient bedrock. Prepare for the next cycle.",
      pattern: "horizontal",
    },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#fafaf8", color: "#1a1a1a" }}
    >
      {/* Header */}
      <div className="z-10 mb-8">
        <span
          className="text-[10px] uppercase tracking-[0.4em] block mb-3"
          style={{ fontFamily: "system-ui", opacity: 0.35 }}
        >
          Vela / Cycle
        </span>
        <h1 className="text-3xl font-light tracking-tight" style={{ fontFamily: "system-ui" }}>
          Your Cycle<br />Stratigraphy
        </h1>
      </div>

      {/* Strata cross-section */}
      <div className="z-10 flex-1 flex flex-col justify-center">
        <svg width="100%" height="240" viewBox="0 0 320 240" fill="none" className="mb-8">
          <defs>
            <pattern id="topo-dots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="#c8352e" opacity="0.5" />
            </pattern>
            <pattern id="topo-diag" width="6" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="6" x2="6" y2="0" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <pattern id="topo-cross" width="8" height="8" patternUnits="userSpaceOnUse">
              <line x1="4" y1="0" x2="4" y2="8" stroke="#c8352e" strokeWidth="0.4" opacity="0.3" />
              <line x1="0" y1="4" x2="8" y2="4" stroke="#c8352e" strokeWidth="0.4" opacity="0.3" />
            </pattern>
            <pattern id="topo-horiz" width="10" height="4" patternUnits="userSpaceOnUse">
              <line x1="0" y1="2" x2="10" y2="2" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
            </pattern>
          </defs>
          {layers.map((layer, i) => {
            const fills = ["url(#topo-dots)", "url(#topo-diag)", "url(#topo-cross)", "url(#topo-horiz)"];
            const y = 20 + i * 55;
            const curve = i % 2 === 0 ? 8 : -6;
            return (
              <g
                key={i}
                onClick={() => setActiveLayer(i)}
                style={{ cursor: "pointer" }}
              >
                <path
                  d={`M0 ${y + curve} Q80 ${y - curve} 160 ${y + curve * 0.5} T320 ${y + curve} L320 ${y + 50 + curve} Q240 ${y + 50 - curve} 160 ${y + 50 + curve * 0.5} T0 ${y + 50 + curve} Z`}
                  fill={fills[i]}
                  stroke={activeLayer === i ? "#c8352e" : "#1a1a1a"}
                  strokeWidth={activeLayer === i ? "1.5" : "0.5"}
                  opacity={activeLayer === i ? 1 : 0.6}
                />
                <text
                  x="16"
                  y={y + 30}
                  fill={activeLayer === i ? "#c8352e" : "#1a1a1a"}
                  fontSize="9"
                  fontFamily="ui-monospace, monospace"
                  letterSpacing="0.1em"
                  opacity={activeLayer === i ? 1 : 0.4}
                >
                  {layer.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Active layer info */}
        <div className="border-t border-[#1a1a1a]/10 pt-5">
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="text-lg font-medium tracking-tight" style={{ fontFamily: "system-ui" }}>
              {layers[activeLayer].name}
            </h3>
            <span
              className="text-[11px] tracking-[0.2em]"
              style={{ fontFamily: "ui-monospace, monospace", color: "#c8352e" }}
            >
              {layers[activeLayer].days}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ opacity: 0.4 }}>
            {layers[activeLayer].desc}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="z-10 mt-8 w-full">
        <button
          className="w-full h-14 rounded-none text-xs font-medium uppercase tracking-[0.3em]"
          style={{ background: "#1a1a1a", color: "#fafaf8", fontFamily: "system-ui" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
