"use client";

import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface GoalsScreenProps {
  onNext: (goals: string[]) => void;
  onBack: () => void;
}

const goals = [
  {
    id: "period-tracking",
    title: "Track My Period",
    description: "Get accurate predictions and stay prepared for every cycle",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#ec4899" strokeWidth="2" fill="#fce7f3" />
        <path d="M16 8V16L20 20" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #fce7f3, #fdf2f8)",
    borderColor: "#f9a8d4",
    activeGradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  },
  {
    id: "fertility",
    title: "Understand Fertility",
    description: "Know your fertile window and ovulation with precision",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C16 4 8 12 8 20C8 24.418 11.582 28 16 28C20.418 28 24 24.418 24 20C24 12 16 4 16 4Z"
          fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
        <circle cx="16" cy="18" r="3" fill="#a855f7" opacity="0.4" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #f3e8ff, #faf5ff)",
    borderColor: "#d8b4fe",
    activeGradient: "linear-gradient(135deg, #f3e8ff, #e9d5ff)",
  },
  {
    id: "pregnancy",
    title: "Plan a Pregnancy",
    description: "Get personalized insights to support your conception journey",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L18 12H26L20 17L22 25L16 20L10 25L12 17L6 12H14L16 4Z"
          fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #fef3c7, #fffbeb)",
    borderColor: "#fde68a",
    activeGradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
  },
  {
    id: "wellness",
    title: "Improve Wellness",
    description: "Track mood, sleep, energy, and how your cycle impacts daily life",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C12 4 4 10 4 18C4 24 8 28 16 28C24 28 28 24 28 18C28 10 20 4 16 4Z"
          fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
        <path d="M12 16L15 19L20 13" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #dcfce7, #f0fdf4)",
    borderColor: "#86efac",
    activeGradient: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
  },
];

export default function GoalsScreen({ onNext, onBack }: GoalsScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-4">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Your Goals
          </h2>
          <p className="text-sm text-gray-400 max-w-[260px] mx-auto">
            Select what matters most to you right now
          </p>
        </div>

        {/* Goal cards */}
        <div className="w-full max-w-sm mx-auto space-y-3">
          {goals.map((goal, index) => {
            const isSelected = selected.includes(goal.id);
            return (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className="w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 animate-fade-in-up"
                style={{
                  opacity: 0,
                  animationDelay: `${200 + index * 100}ms`,
                  background: isSelected ? goal.activeGradient : "white",
                  borderColor: isSelected ? goal.borderColor : "#f3f4f6",
                  boxShadow: isSelected
                    ? `0 4px 16px ${goal.borderColor}40`
                    : "none",
                }}
              >
                <div className="flex items-start gap-3.5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: goal.gradient }}>
                    {goal.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm text-foreground">
                        {goal.title}
                      </h3>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? "border-bloom-500 bg-bloom-500"
                            : "border-gray-200"
                        }`}
                      >
                        {isSelected && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <NavigationButtons
        onNext={() => onNext(selected)}
        onBack={onBack}
        disabled={selected.length === 0}
        nextLabel={selected.length > 0 ? "Continue" : "Select at least one"}
      />
    </div>
  );
}
