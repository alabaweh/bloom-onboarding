"use client";

import { useState } from "react";

/**
 * VARIANT C — "Aurora"
 * Goals as energy orbs with glassmorphism detail cards.
 * Dark background with aurora borealis colors (green, teal, purple).
 * Selected orbs pulse with aurora glow; glass card expands with details.
 */

const goals = [
  {
    id: "period-tracking",
    title: "Track My Period",
    description: "Intelligent cycle predictions that learn your unique rhythm over time",
    orbColors: ["#00ff88", "#00cc99", "#00aa77"],
    glowColor: "rgba(0, 255, 136, 0.3)",
    auroraAngle: 120,
  },
  {
    id: "fertility",
    title: "Understand Fertility",
    description: "Precise fertile window mapping backed by science and your personal data",
    orbColors: ["#00ddff", "#00aadd", "#0088bb"],
    glowColor: "rgba(0, 221, 255, 0.3)",
    auroraAngle: 160,
  },
  {
    id: "pregnancy",
    title: "Plan a Pregnancy",
    description: "Conception insights and optimal timing guidance for your journey",
    orbColors: ["#aa77ff", "#8855dd", "#7744cc"],
    glowColor: "rgba(170, 119, 255, 0.3)",
    auroraAngle: 200,
  },
  {
    id: "wellness",
    title: "Improve Wellness",
    description: "Holistic tracking of mood, sleep, energy aligned with your cycle",
    orbColors: ["#ff77aa", "#dd5599", "#cc4488"],
    glowColor: "rgba(255, 119, 170, 0.3)",
    auroraAngle: 240,
  },
];

export default function GoalsC() {
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
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora background layers */}
      <div
        className="absolute top-[-10%] left-[-20%] w-[140%] h-[50%]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0, 255, 136, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(0, 170, 255, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 70%, rgba(170, 119, 255, 0.05) 0%, transparent 50%)",
          filter: "blur(40px)",
          animation: "goalsCaurora 12s ease-in-out infinite alternate",
        }}
      />

      {/* Secondary aurora wave */}
      <div
        className="absolute top-[20%] right-[-10%] w-[80%] h-[40%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0, 221, 255, 0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
          animation: "goalsCaurora2 10s ease-in-out infinite alternate",
        }}
      />

      {/* Particle field */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2,
            height: 2,
            top: `${(i * 19.3) % 100}%`,
            left: `${(i * 23.7) % 100}%`,
            background: i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#00ddff" : "#aa77ff",
            opacity: 0.15,
            animation: `goalsCFloat ${4 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i % 5) * 0.8}s`,
          }}
        />
      ))}

      {/* Header */}
      <div className="z-10 px-7 pt-14 pb-2">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, #00ff88, #00ddff)",
              boxShadow: "0 0 8px rgba(0, 255, 136, 0.5)",
            }}
          />
          <span className="text-[10px] text-white/30 tracking-[0.25em] uppercase">
            Your Intentions
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight leading-tight mb-2">
          Select Your
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #00ff88, #00ddff, #aa77ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Energy Focus
          </span>
        </h1>
        <p className="text-sm text-white/25 font-light">
          Tap the orbs to activate your goals
        </p>
      </div>

      {/* Energy orbs grid */}
      <div className="z-10 flex-1 px-7 mt-6 space-y-4">
        {goals.map((goal, idx) => {
          const isSelected = selected.includes(goal.id);

          return (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className="w-full text-left relative overflow-hidden transition-all duration-500"
              style={{
                background: isSelected
                  ? "rgba(255, 255, 255, 0.07)"
                  : "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: 16,
                border: isSelected
                  ? `1px solid ${goal.orbColors[0]}33`
                  : "1px solid rgba(255, 255, 255, 0.05)",
                padding: isSelected ? "20px" : "16px",
              }}
            >
              {/* Aurora glow overlay on selected */}
              {isSelected && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${goal.glowColor}, transparent 60%)`,
                    animation: "goalsCCardGlow 3s ease-in-out infinite",
                  }}
                />
              )}

              <div className="flex items-start gap-4 relative z-10">
                {/* Energy orb */}
                <div className="relative shrink-0" style={{ width: 48, height: 48 }}>
                  {/* Outer glow ring */}
                  {isSelected && (
                    <div
                      className="absolute inset-[-6px] rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${goal.glowColor}, transparent 70%)`,
                        animation: "goalsCOrbPulse 2s ease-in-out infinite",
                      }}
                    />
                  )}

                  {/* Orb body */}
                  <div
                    className="w-full h-full rounded-full relative overflow-hidden transition-all duration-500"
                    style={{
                      background: isSelected
                        ? `radial-gradient(circle at 35% 30%, ${goal.orbColors[0]}, ${goal.orbColors[1]} 60%, ${goal.orbColors[2]})`
                        : `radial-gradient(circle at 35% 30%, ${goal.orbColors[0]}44, ${goal.orbColors[2]}22)`,
                      boxShadow: isSelected
                        ? `0 0 20px ${goal.glowColor}, inset 0 0 15px rgba(255,255,255,0.15)`
                        : `0 0 10px ${goal.orbColors[2]}11`,
                    }}
                  >
                    {/* Inner light refraction */}
                    <div
                      className="absolute w-5 h-5 rounded-full"
                      style={{
                        top: "15%",
                        left: "20%",
                        background: "rgba(255,255,255,0.25)",
                        filter: "blur(4px)",
                      }}
                    />
                    <div
                      className="absolute w-3 h-2 rounded-full"
                      style={{
                        top: "55%",
                        left: "50%",
                        background: "rgba(255,255,255,0.1)",
                        filter: "blur(3px)",
                      }}
                    />

                    {/* Energy ring inside orb */}
                    {isSelected && (
                      <div
                        className="absolute inset-[6px] rounded-full"
                        style={{
                          border: `1px solid ${goal.orbColors[0]}66`,
                          animation: "goalsCInnerRing 4s linear infinite",
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-sm font-semibold tracking-tight transition-colors duration-300"
                      style={{
                        color: isSelected ? goal.orbColors[0] : "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {goal.title}
                    </h3>

                    {/* Status indicator */}
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                        style={{
                          background: isSelected ? goal.orbColors[0] : "rgba(255, 255, 255, 0.1)",
                          boxShadow: isSelected
                            ? `0 0 6px ${goal.glowColor}`
                            : "none",
                        }}
                      />
                      <span
                        className="text-[9px] uppercase tracking-widest transition-colors duration-300"
                        style={{
                          color: isSelected
                            ? `${goal.orbColors[0]}aa`
                            : "rgba(255, 255, 255, 0.15)",
                        }}
                      >
                        {isSelected ? "Active" : "Idle"}
                      </span>
                    </div>
                  </div>

                  {/* Description - expands on select */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: isSelected ? 48 : 0,
                      opacity: isSelected ? 1 : 0,
                      marginTop: isSelected ? 6 : 0,
                    }}
                  >
                    <p className="text-xs text-white/25 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom energy bar */}
              <div
                className="mt-3 h-[1px] rounded-full transition-all duration-700 relative z-10"
                style={{
                  background: isSelected
                    ? `linear-gradient(90deg, ${goal.orbColors[0]}66, ${goal.orbColors[1]}33, transparent)`
                    : "rgba(255, 255, 255, 0.03)",
                  width: isSelected ? "100%" : "30%",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Activation meter */}
      <div className="z-10 px-7 mt-4 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-white/20 tracking-wider uppercase">
            Energy Level
          </span>
          <span className="text-[10px] text-white/20">
            {selected.length}/4 activated
          </span>
        </div>
        <div
          className="w-full h-1 rounded-full overflow-hidden"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${(selected.length / 4) * 100}%`,
              background: "linear-gradient(90deg, #00ff88, #00ddff, #aa77ff)",
              boxShadow: selected.length > 0 ? "0 0 10px rgba(0, 255, 136, 0.3)" : "none",
            }}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="z-10 px-7 pb-14 pt-4 w-full">
        <button
          className="w-full h-14 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-500 relative overflow-hidden"
          style={{
            background: canProceed
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            color: canProceed ? "#00ff88" : "rgba(255, 255, 255, 0.15)",
            border: canProceed
              ? "1px solid rgba(0, 255, 136, 0.2)"
              : "1px solid rgba(255, 255, 255, 0.05)",
            cursor: canProceed ? "pointer" : "default",
            boxShadow: canProceed
              ? "0 0 30px rgba(0, 255, 136, 0.1), inset 0 0 30px rgba(0, 255, 136, 0.05)"
              : "none",
          }}
        >
          {canProceed ? "Channel Your Energy" : "Select at least one focus"}
        </button>

        {/* Aurora dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 2 ? 16 : 4,
                height: 4,
                background:
                  i === 2
                    ? "linear-gradient(90deg, #00ff88, #00ddff)"
                    : "rgba(255, 255, 255, 0.1)",
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes goalsCaurora {
          0% { transform: translateX(-5%) rotate(-2deg); opacity: 0.6; }
          100% { transform: translateX(5%) rotate(2deg); opacity: 1; }
        }
        @keyframes goalsCaurora2 {
          0% { transform: translateY(-5%) scale(1); }
          100% { transform: translateY(5%) scale(1.1); }
        }
        @keyframes goalsCFloat {
          0%, 100% { transform: translateY(0); opacity: 0.1; }
          50% { transform: translateY(-8px); opacity: 0.25; }
        }
        @keyframes goalsCCardGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes goalsCOrbPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        @keyframes goalsCInnerRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
