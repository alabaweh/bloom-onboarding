"use client";

import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface FeatureHighlightsProps {
  onNext: () => void;
  onBack: () => void;
}

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="url(#g1)" strokeWidth="2.5" fill="none" />
        <path d="M24 12V24L32 28" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="url(#g1)" />
        <defs>
          <linearGradient id="g1" x1="4" y1="4" x2="44" y2="44">
            <stop stopColor="#ec4899" /><stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Smart Cycle Tracking",
    description: "AI-powered predictions that learn your unique patterns over time for increasingly accurate forecasts.",
    color: "bloom",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 8C24 8 12 18 12 28C12 34.627 17.373 40 24 40C30.627 40 36 34.627 36 28C36 18 24 8 24 8Z"
          fill="none" stroke="url(#g2)" strokeWidth="2.5" />
        <path d="M24 20C24 20 19 25 19 29C19 31.761 21.239 34 24 34C26.761 34 29 31.761 29 29C29 25 24 20 24 20Z"
          fill="url(#g2)" opacity="0.3" />
        <defs>
          <linearGradient id="g2" x1="12" y1="8" x2="36" y2="40">
            <stop stopColor="#a855f7" /><stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Fertility Window",
    description: "Know your most fertile days with precision. Plan or prevent with confidence and clarity.",
    color: "plum",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z"
          fill="none" stroke="url(#g3)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 12L26.5 20H34L28 25L30.5 33L24 28L17.5 33L20 25L14 20H21.5L24 12Z"
          fill="url(#g3)" opacity="0.2" />
        <defs>
          <linearGradient id="g3" x1="8" y1="4" x2="40" y2="36">
            <stop stopColor="#f59e0b" /><stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Holistic Wellness",
    description: "Track symptoms, mood, energy, and sleep. Discover how your cycle affects every part of your life.",
    color: "warm",
  },
];

export default function FeatureHighlights({ onNext, onBack }: FeatureHighlightsProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center px-6 pt-16 pb-4">
        {/* Section header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Designed for You
          </h2>
          <p className="text-sm text-gray-400">
            Everything you need in one beautiful app
          </p>
        </div>

        {/* Feature cards */}
        <div className="w-full max-w-sm space-y-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 animate-fade-in-up ${
                activeFeature === index
                  ? "border-bloom-200 bg-white shadow-lg shadow-bloom-100/50"
                  : "border-gray-100 bg-white/50 hover:bg-white hover:border-gray-200"
              }`}
              style={{ opacity: 0, animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                  activeFeature === index ? "bg-bloom-50" : "bg-gray-50"
                } transition-colors duration-300`}>
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-all duration-300 ${
                    activeFeature === index
                      ? "text-gray-500 max-h-20 opacity-100"
                      : "text-gray-400 max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex items-center gap-2 mt-8">
          {features.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeFeature
                  ? "w-6 bg-bloom-400"
                  : "w-1.5 bg-bloom-200"
              }`}
            />
          ))}
        </div>
      </div>

      <NavigationButtons
        onNext={onNext}
        onBack={onBack}
        showBack={true}
        nextLabel="Continue"
      />
    </div>
  );
}
