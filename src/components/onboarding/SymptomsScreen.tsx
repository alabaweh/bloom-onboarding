"use client";

import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface SymptomsScreenProps {
  onNext: (symptoms: string[]) => void;
  onBack: () => void;
}

const symptomCategories = [
  {
    category: "Physical",
    symptoms: [
      { id: "cramps", label: "Cramps", icon: "💫" },
      { id: "headache", label: "Headache", icon: "🤕" },
      { id: "bloating", label: "Bloating", icon: "🫧" },
      { id: "fatigue", label: "Fatigue", icon: "😴" },
      { id: "breast-tenderness", label: "Breast tenderness", icon: "🩹" },
      { id: "backache", label: "Back pain", icon: "🔥" },
    ],
  },
  {
    category: "Emotional",
    symptoms: [
      { id: "mood-swings", label: "Mood swings", icon: "🎭" },
      { id: "anxiety", label: "Anxiety", icon: "😰" },
      { id: "irritability", label: "Irritability", icon: "😤" },
      { id: "sadness", label: "Sadness", icon: "😢" },
    ],
  },
  {
    category: "Other",
    symptoms: [
      { id: "cravings", label: "Cravings", icon: "🍫" },
      { id: "insomnia", label: "Insomnia", icon: "🌙" },
      { id: "acne", label: "Skin changes", icon: "✨" },
      { id: "digestion", label: "Digestion", icon: "🍃" },
    ],
  },
];

export default function SymptomsScreen({ onNext, onBack }: SymptomsScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSymptom = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-4 overflow-y-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            What Do You Track?
          </h2>
          <p className="text-sm text-gray-400 max-w-[260px] mx-auto">
            Select symptoms you want to monitor regularly
          </p>
        </div>

        {/* Selection count badge */}
        {selected.length > 0 && (
          <div className="flex justify-center mb-5 animate-scale-in">
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>
              {selected.length} selected
            </span>
          </div>
        )}

        {/* Symptom categories */}
        {symptomCategories.map((cat, catIndex) => (
          <div
            key={cat.category}
            className="mb-6 animate-fade-in-up"
            style={{ opacity: 0, animationDelay: `${200 + catIndex * 150}ms` }}
          >
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.symptoms.map((symptom) => {
                const isSelected = selected.includes(symptom.id);
                return (
                  <button
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 border ${
                      isSelected
                        ? "border-bloom-300 bg-bloom-50 text-bloom-700 shadow-sm"
                        : "border-gray-100 bg-white text-gray-500 hover:border-gray-200"
                    }`}
                  >
                    <span className="text-base">{symptom.icon}</span>
                    {symptom.label}
                    {isSelected && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-0.5">
                        <path d="M3 7L6 10L11 4" stroke="#be185d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <NavigationButtons
        onNext={() => onNext(selected)}
        onBack={onBack}
        nextLabel={selected.length > 0 ? `Continue with ${selected.length}` : "Continue"}
      />
    </div>
  );
}
