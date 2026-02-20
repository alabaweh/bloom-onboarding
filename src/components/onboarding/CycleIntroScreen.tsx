"use client";

import NavigationButtons from "./NavigationButtons";

interface CycleIntroScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const phases = [
  {
    name: "Menstrual",
    days: "Day 1-5",
    color: "#ec4899",
    bgColor: "#fce7f3",
    icon: "🌙",
    description: "Rest & renew",
  },
  {
    name: "Follicular",
    days: "Day 6-13",
    color: "#22c55e",
    bgColor: "#dcfce7",
    icon: "🌱",
    description: "Energy rises",
  },
  {
    name: "Ovulation",
    days: "Day 14-16",
    color: "#a855f7",
    bgColor: "#f3e8ff",
    icon: "✨",
    description: "Peak vitality",
  },
  {
    name: "Luteal",
    days: "Day 17-28",
    color: "#f59e0b",
    bgColor: "#fef3c7",
    icon: "🍂",
    description: "Wind down",
  },
];

export default function CycleIntroScreen({ onNext, onBack }: CycleIntroScreenProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center px-6 pt-16 pb-4">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Your Cycle Phases
          </h2>
          <p className="text-sm text-gray-400 max-w-[260px] mx-auto">
            Understanding your cycle helps you optimize every day
          </p>
        </div>

        {/* Cycle wheel visualization */}
        <div className="relative w-56 h-56 mb-10 animate-scale-in animation-delay-200" style={{ opacity: 0 }}>
          {/* Outer ring segments */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="seg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <linearGradient id="seg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
              <linearGradient id="seg3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="seg4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            {/* Phase arcs */}
            <path d="M100 10 A90 90 0 0 1 190 100" fill="none" stroke="url(#seg1)" strokeWidth="12" strokeLinecap="round" />
            <path d="M190 100 A90 90 0 0 1 100 190" fill="none" stroke="url(#seg2)" strokeWidth="12" strokeLinecap="round" />
            <path d="M100 190 A90 90 0 0 1 10 100" fill="none" stroke="url(#seg3)" strokeWidth="12" strokeLinecap="round" />
            <path d="M10 100 A90 90 0 0 1 100 10" fill="none" stroke="url(#seg4)" strokeWidth="12" strokeLinecap="round" />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl mb-1">🌸</span>
            <span className="text-xs font-semibold text-bloom-600">28 Days</span>
            <span className="text-[10px] text-gray-400">Average Cycle</span>
          </div>
        </div>

        {/* Phase cards */}
        <div className="w-full max-w-sm grid grid-cols-2 gap-3">
          {phases.map((phase, index) => (
            <div
              key={phase.name}
              className="p-3.5 rounded-2xl border border-gray-100 bg-white animate-fade-in-up"
              style={{
                opacity: 0,
                animationDelay: `${400 + index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                  style={{ backgroundColor: phase.bgColor }}
                >
                  {phase.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: phase.color }}>
                    {phase.name}
                  </p>
                  <p className="text-[10px] text-gray-400">{phase.days}</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-500">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>

      <NavigationButtons
        onNext={onNext}
        onBack={onBack}
        nextLabel="Continue"
      />
    </div>
  );
}
