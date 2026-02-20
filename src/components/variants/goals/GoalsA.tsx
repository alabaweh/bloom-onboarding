"use client";

import { useState } from "react";

/**
 * VARIANT A — "Celestial"
 * Goals as planetary bodies orbiting around the user (the sun).
 * Tapping a planet brings it into a closer, glowing orbit.
 * Night sky with gold accents, deep purple cosmos.
 */

const goals = [
  {
    id: "period-tracking",
    title: "Track My Period",
    description: "Cycle predictions synced to your rhythm",
    color: "#c4a6ff",
    glowColor: "rgba(196, 166, 255, 0.4)",
    size: 52,
    orbitRadius: 130,
    startAngle: 225,
    speed: 25,
    moons: 1,
  },
  {
    id: "fertility",
    title: "Understand Fertility",
    description: "Map your fertile window with precision",
    color: "#82d4f5",
    glowColor: "rgba(130, 212, 245, 0.4)",
    size: 44,
    orbitRadius: 130,
    startAngle: 315,
    speed: 30,
    moons: 2,
  },
  {
    id: "pregnancy",
    title: "Plan a Pregnancy",
    description: "Guided insights for your conception journey",
    color: "#f5d882",
    glowColor: "rgba(245, 216, 130, 0.4)",
    size: 48,
    orbitRadius: 130,
    startAngle: 45,
    speed: 20,
    moons: 0,
  },
  {
    id: "wellness",
    title: "Improve Wellness",
    description: "Sleep, mood, energy, all in alignment",
    color: "#82f5a8",
    glowColor: "rgba(130, 245, 168, 0.4)",
    size: 40,
    orbitRadius: 130,
    startAngle: 135,
    speed: 35,
    moons: 1,
  },
];

export default function GoalsA() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const canProceed = selected.length > 0;

  return (
    <div
      className="relative flex flex-col items-center min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0c0a1d 0%, #1a1145 40%, #2d1b69 100%)",
      }}
    >
      {/* Star field */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            top: `${(i * 13.7) % 100}%`,
            left: `${(i * 29.3) % 100}%`,
            opacity: ((i * 7) % 10) / 20 + 0.05,
            animation: `goalsATwinkle ${((i % 4) + 2)}s ease-in-out infinite`,
            animationDelay: `${(i % 7) * 0.3}s`,
          }}
        />
      ))}

      {/* Cosmic dust / nebula */}
      <div
        className="absolute top-[35%] left-[50%] w-[500px] h-[500px] rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(45, 27, 105, 0.6), transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Header */}
      <div className="z-10 pt-14 px-8 w-full">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#f5d882" }}
          />
          <span className="text-[10px] text-[#f5d882]/60 tracking-[0.3em] uppercase font-medium">
            Your Universe
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight leading-tight">
          Choose Your<br />Celestial Goals
        </h1>
        <p className="text-sm text-purple-300/40 mt-2 font-light">
          Tap planets to bring them into your orbit
        </p>
      </div>

      {/* Solar system container */}
      <div className="z-10 relative flex-1 flex items-center justify-center w-full">
        <div className="relative" style={{ width: 300, height: 300 }}>
          {/* Orbit rings */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: 260,
              height: 260,
              transform: "translate(-50%, -50%)",
              border: "1px solid rgba(210, 195, 255, 0.06)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: 180,
              height: 180,
              transform: "translate(-50%, -50%)",
              border: "1px dashed rgba(245, 216, 130, 0.1)",
            }}
          />

          {/* The Sun (you) at center */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle at 35% 35%, #fffbe6, #f5d882, #c9a23c)",
              boxShadow:
                "0 0 30px rgba(245, 216, 130, 0.5), 0 0 60px rgba(245, 216, 130, 0.2), 0 0 90px rgba(245, 216, 130, 0.1)",
              animation: "goalsASunPulse 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-[8px] text-[#f5d882]/40 tracking-[0.15em] uppercase whitespace-nowrap"
              style={{ position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)" }}>
              You
            </span>
          </div>

          {/* Planets */}
          {goals.map((goal) => {
            const isSelected = selected.includes(goal.id);
            const orbitR = isSelected ? 80 : goal.orbitRadius;
            const angleRad = (goal.startAngle * Math.PI) / 180;
            const x = 150 + orbitR * Math.cos(angleRad) - goal.size / 2;
            const y = 150 + orbitR * Math.sin(angleRad) - goal.size / 2;

            return (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className="absolute group"
                style={{
                  left: x,
                  top: y,
                  width: goal.size,
                  height: goal.size,
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: isSelected ? "scale(1.25)" : "scale(1)",
                  zIndex: isSelected ? 20 : 10,
                }}
              >
                {/* Planet glow ring when selected */}
                {isSelected && (
                  <div
                    className="absolute inset-[-8px] rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${goal.glowColor}, transparent 70%)`,
                      animation: "goalsAPlanetGlow 2s ease-in-out infinite",
                    }}
                  />
                )}

                {/* Selection ring */}
                {isSelected && (
                  <div
                    className="absolute inset-[-4px] rounded-full"
                    style={{
                      border: `2px solid ${goal.color}`,
                      opacity: 0.6,
                      animation: "goalsARingPulse 3s ease-in-out infinite",
                    }}
                  />
                )}

                {/* Planet body */}
                <div
                  className="w-full h-full rounded-full relative overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, ${goal.color}, ${goal.color}88 60%, ${goal.color}44)`,
                    boxShadow: isSelected
                      ? `0 0 20px ${goal.glowColor}, 0 0 40px ${goal.glowColor}`
                      : `0 0 10px ${goal.color}22`,
                    transition: "box-shadow 0.5s ease",
                  }}
                >
                  {/* Planet surface detail */}
                  <div
                    className="absolute rounded-full opacity-30"
                    style={{
                      width: "60%",
                      height: "20%",
                      top: "30%",
                      left: "15%",
                      background: "rgba(255,255,255,0.3)",
                      filter: "blur(4px)",
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    className="absolute rounded-full opacity-15"
                    style={{
                      width: "40%",
                      height: "12%",
                      top: "55%",
                      left: "35%",
                      background: "rgba(255,255,255,0.3)",
                      filter: "blur(3px)",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* Tiny moons */}
                {Array.from({ length: goal.moons }).map((_, mi) => (
                  <div
                    key={mi}
                    className="absolute rounded-full"
                    style={{
                      width: 5,
                      height: 5,
                      background: `${goal.color}88`,
                      top: mi === 0 ? -6 : goal.size + 2,
                      left: mi === 0 ? goal.size * 0.7 : goal.size * 0.3,
                      animation: `goalsAMoonOrbit ${3 + mi}s linear infinite`,
                    }}
                  />
                ))}

                {/* Label */}
                <div
                  className="absolute left-1/2 whitespace-nowrap pointer-events-none"
                  style={{
                    top: goal.size + 10,
                    transform: "translateX(-50%)",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <span
                    className="text-[10px] font-medium block text-center"
                    style={{ color: isSelected ? goal.color : "rgba(210, 195, 255, 0.5)" }}
                  >
                    {goal.title}
                  </span>
                  {isSelected && (
                    <span className="text-[8px] text-purple-300/30 block text-center mt-0.5">
                      {goal.description}
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {/* Orbital path traces for selected */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={300}
            height={300}
            viewBox="0 0 300 300"
          >
            {goals.map((goal) => {
              const isSelected = selected.includes(goal.id);
              if (!isSelected) return null;
              return (
                <circle
                  key={goal.id}
                  cx={150}
                  cy={150}
                  r={80}
                  fill="none"
                  stroke={goal.color}
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  opacity={0.3}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selection count */}
      <div className="z-10 px-8 mb-3 w-full flex items-center justify-between">
        <span className="text-[10px] text-purple-300/30 tracking-wider uppercase">
          {selected.length === 0
            ? "No planets in orbit"
            : `${selected.length} planet${selected.length > 1 ? "s" : ""} in orbit`}
        </span>
        <div className="flex gap-1.5">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="w-2 h-2 rounded-full transition-all duration-500"
              style={{
                background: selected.includes(goal.id) ? goal.color : "rgba(210, 195, 255, 0.15)",
                boxShadow: selected.includes(goal.id) ? `0 0 6px ${goal.glowColor}` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 px-8 pb-14 w-full">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-500"
          style={{
            background: canProceed
              ? "linear-gradient(135deg, #f5d882, #e8c55a)"
              : "rgba(245, 216, 130, 0.08)",
            color: canProceed ? "#0c0a1d" : "rgba(245, 216, 130, 0.3)",
            boxShadow: canProceed ? "0 4px 24px rgba(245, 216, 130, 0.3)" : "none",
            border: canProceed ? "none" : "1px solid rgba(245, 216, 130, 0.1)",
            cursor: canProceed ? "pointer" : "default",
          }}
        >
          {canProceed ? "Launch Into Your Journey" : "Select at least one planet"}
        </button>

        {/* Page dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 2 ? 20 : 5,
                height: 5,
                background: i === 2 ? "#f5d882" : "rgba(245, 216, 130, 0.2)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes goalsATwinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
        @keyframes goalsASunPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(245, 216, 130, 0.5), 0 0 60px rgba(245, 216, 130, 0.2); }
          50% { box-shadow: 0 0 40px rgba(245, 216, 130, 0.7), 0 0 80px rgba(245, 216, 130, 0.3); }
        }
        @keyframes goalsAPlanetGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes goalsARingPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0.3; }
        }
        @keyframes goalsAMoonOrbit {
          0% { transform: rotate(0deg) translateX(3px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(3px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
