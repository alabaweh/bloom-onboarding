"use client";

import { useState } from "react";

/**
 * VARIANT D — "Woven"
 * Goals as woven tapestry panels / bookmark ribbon cards.
 * Linen background, brown typography, copper accents.
 * Thread-like stitch details, frayed edges, and textile texture.
 */

const goals = [
  {
    id: "period-tracking",
    title: "Track My Period",
    description: "Cycle predictions woven into your daily rhythm. Stay prepared with pattern-aware insights.",
    pattern: "zigzag",
    threadColor: "#c17f4e",
  },
  {
    id: "fertility",
    title: "Understand Fertility",
    description: "Your fertile window mapped with precision. Every thread of data carefully interlaced.",
    pattern: "diamond",
    threadColor: "#8b6f5c",
  },
  {
    id: "pregnancy",
    title: "Plan a Pregnancy",
    description: "Guided conception insights stitched into personalized recommendations for your journey.",
    pattern: "wave",
    threadColor: "#a67c52",
  },
  {
    id: "wellness",
    title: "Improve Wellness",
    description: "Mood, sleep, energy and symptoms woven together into your holistic health tapestry.",
    pattern: "cross",
    threadColor: "#7a5c3f",
  },
];

function StitchPattern({
  pattern,
  color,
  active,
}: {
  pattern: string;
  color: string;
  active: boolean;
}) {
  const opacity = active ? 0.6 : 0.15;

  if (pattern === "zigzag") {
    return (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" style={{ opacity }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M${5 + (i % 2) * 10},${i * 10} L${15 + (i % 2) * 10},${i * 10 + 5} L${5 + (i % 2) * 10},${i * 10 + 10}`}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`b${i}`}
            d={`M${30 + (i % 2) * 10},${i * 10 + 3} L${40 + (i % 2) * 10},${i * 10 + 8} L${30 + (i % 2) * 10},${i * 10 + 13}`}
            stroke={color}
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="2 3"
          />
        ))}
      </svg>
    );
  }
  if (pattern === "diamond") {
    return (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" style={{ opacity }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i}>
            <path
              d={`M30,${i * 20} L42,${i * 20 + 10} L30,${i * 20 + 20} L18,${i * 20 + 10} Z`}
              stroke={color}
              strokeWidth="1"
              fill="none"
            />
            <circle cx={30} cy={i * 20 + 10} r="1.5" fill={color} />
          </g>
        ))}
      </svg>
    );
  }
  if (pattern === "wave") {
    return (
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" style={{ opacity }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M0,${i * 10 + 5} Q15,${i * 10 + (i % 2 === 0 ? 0 : 10)} 30,${i * 10 + 5} T60,${i * 10 + 5}`}
            stroke={color}
            strokeWidth={i % 3 === 0 ? "1.5" : "0.8"}
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </svg>
    );
  }
  // cross pattern
  return (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" style={{ opacity }}>
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <g key={`${row}-${col}`}>
            <line
              x1={col * 20 + 5}
              y1={row * 16 + 3}
              x2={col * 20 + 15}
              y2={row * 16 + 13}
              stroke={color}
              strokeWidth="1"
              strokeLinecap="round"
            />
            <line
              x1={col * 20 + 15}
              y1={row * 16 + 3}
              x2={col * 20 + 5}
              y2={row * 16 + 13}
              stroke={color}
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>
        ))
      )}
    </svg>
  );
}

export default function GoalsD() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const canProceed = selected.length > 0;

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#f7f3ee" }}
    >
      {/* Linen texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(61, 43, 31, 0.3) 2px,
            rgba(61, 43, 31, 0.3) 3px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(61, 43, 31, 0.3) 2px,
            rgba(61, 43, 31, 0.3) 3px
          )`,
        }}
      />

      {/* Decorative thread line */}
      <svg
        className="absolute top-0 right-8 w-[1px] h-full opacity-[0.08]"
        viewBox="0 0 1 900"
        preserveAspectRatio="none"
      >
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="900"
          stroke="#c17f4e"
          strokeWidth="1"
          strokeDasharray="8 12"
        />
      </svg>

      {/* Header */}
      <div className="z-10 px-7 pt-14 pb-2">
        {/* Decorative stitch line */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path
              d="M2,6 L6,2 L10,6 L14,2 L18,6 L22,2"
              stroke="#c17f4e"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span
            className="text-[10px] tracking-[0.25em] uppercase font-medium"
            style={{ color: "#c17f4e" }}
          >
            Your Tapestry
          </span>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path
              d="M2,6 L6,2 L10,6 L14,2 L18,6 L22,2"
              stroke="#c17f4e"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <h1
          className="text-[30px] font-bold leading-[1.15] tracking-tight mb-2"
          style={{ color: "#3d2b1f", fontFamily: "Georgia, serif" }}
        >
          Weave your
          <br />
          intentions
        </h1>
        <p
          className="text-sm font-light"
          style={{ color: "#3d2b1f", opacity: 0.4 }}
        >
          Each goal adds a thread to your wellness tapestry
        </p>
      </div>

      {/* Bookmark / Ribbon cards */}
      <div className="z-10 flex-1 px-7 mt-6 space-y-3">
        {goals.map((goal, idx) => {
          const isSelected = selected.includes(goal.id);

          return (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className="w-full text-left relative group"
              style={{
                transition: "all 0.4s ease",
              }}
            >
              <div
                className="relative overflow-hidden transition-all duration-400"
                style={{
                  background: isSelected ? "#faf6f0" : "#f3ede5",
                  borderRadius: "4px 12px 12px 4px",
                  borderLeft: `3px solid ${isSelected ? goal.threadColor : "rgba(193, 127, 78, 0.15)"}`,
                  padding: "16px 16px 16px 14px",
                  boxShadow: isSelected
                    ? "0 4px 16px rgba(61, 43, 31, 0.08), inset 0 0 0 1px rgba(193, 127, 78, 0.12)"
                    : "0 1px 4px rgba(61, 43, 31, 0.04)",
                }}
              >
                {/* Woven pattern overlay on right */}
                <div className="absolute top-0 right-0 h-full pointer-events-none">
                  <StitchPattern
                    pattern={goal.pattern}
                    color={goal.threadColor}
                    active={isSelected}
                  />
                </div>

                {/* Bookmark notch at top-right */}
                <div
                  className="absolute top-0 right-4 w-6 transition-all duration-300"
                  style={{
                    height: isSelected ? 28 : 16,
                    background: isSelected ? goal.threadColor : "rgba(193, 127, 78, 0.1)",
                    clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
                  }}
                />

                <div className="flex items-start gap-3 pr-16">
                  {/* Thread-wrapped number */}
                  <div className="relative shrink-0">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        border: `1.5px ${isSelected ? "solid" : "dashed"} ${
                          isSelected ? goal.threadColor : "rgba(193, 127, 78, 0.2)"
                        }`,
                        background: isSelected
                          ? `${goal.threadColor}11`
                          : "transparent",
                      }}
                    >
                      <span
                        className="text-xs font-semibold transition-colors duration-300"
                        style={{
                          color: isSelected
                            ? goal.threadColor
                            : "rgba(61, 43, 31, 0.25)",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        {idx + 1}
                      </span>
                    </div>

                    {/* Connecting thread to next card */}
                    {idx < goals.length - 1 && (
                      <div
                        className="absolute left-1/2 w-[1px] -translate-x-1/2"
                        style={{
                          top: "100%",
                          height: 16,
                          background: `repeating-linear-gradient(
                            180deg,
                            ${goal.threadColor}22 0px,
                            ${goal.threadColor}22 2px,
                            transparent 2px,
                            transparent 5px
                          )`,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-sm font-semibold tracking-tight transition-colors duration-300"
                      style={{
                        color: isSelected ? "#3d2b1f" : "rgba(61, 43, 31, 0.5)",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {goal.title}
                    </h3>

                    {/* Description - woven in on select */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isSelected ? 50 : 0,
                        opacity: isSelected ? 1 : 0,
                        marginTop: isSelected ? 4 : 0,
                      }}
                    >
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(61, 43, 31, 0.4)" }}
                      >
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom fringe / thread detail when selected */}
                {isSelected && (
                  <div className="flex gap-1 mt-3 ml-12">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full"
                        style={{
                          width: 1,
                          height: 6 + (i % 3) * 2,
                          background: `${goal.threadColor}${i % 2 === 0 ? "44" : "22"}`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Thread count indicator */}
      <div className="z-10 px-7 mt-4 mb-3">
        <div className="flex items-center gap-3">
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path
              d="M2,6 Q5,2 10,6 T18,6"
              stroke="#c17f4e"
              strokeWidth="1"
              fill="none"
              opacity={0.3}
            />
          </svg>
          <span
            className="text-[10px] tracking-wider"
            style={{ color: "rgba(61, 43, 31, 0.3)" }}
          >
            {selected.length === 0
              ? "No threads chosen"
              : `${selected.length} thread${selected.length > 1 ? "s" : ""} woven`}
          </span>
          <div className="flex-1" />
          <div className="flex gap-1">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className="w-4 h-[3px] rounded-full transition-all duration-300"
                style={{
                  background: selected.includes(goal.id)
                    ? goal.threadColor
                    : "rgba(193, 127, 78, 0.12)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 px-7 pb-14 pt-4 w-full">
        <button
          className="w-full h-14 font-semibold text-sm tracking-wide transition-all duration-500"
          style={{
            background: canProceed
              ? "linear-gradient(135deg, #3d2b1f, #5a3f2e)"
              : "rgba(61, 43, 31, 0.04)",
            color: canProceed ? "#f7f3ee" : "rgba(61, 43, 31, 0.2)",
            borderRadius: "4px 12px 12px 4px",
            cursor: canProceed ? "pointer" : "default",
            border: canProceed
              ? "none"
              : "1px dashed rgba(193, 127, 78, 0.15)",
            boxShadow: canProceed
              ? "0 4px 16px rgba(61, 43, 31, 0.15)"
              : "none",
            fontFamily: "Georgia, serif",
          }}
        >
          {canProceed ? "Continue Weaving" : "Select at least one thread"}
        </button>

        {/* Step stitch indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: i === 2 ? 16 : 6,
                height: 3,
                borderRadius: 1,
                background:
                  i === 2 ? "#c17f4e" : "rgba(193, 127, 78, 0.15)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
