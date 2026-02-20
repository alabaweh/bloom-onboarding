"use client";

/**
 * ONBOARDING 3 — "Sunrise Warmth"
 * Features: 3 warm cards with soft sunrise glow behind icons, nurturing language
 */

import { useState } from "react";

const features = [
  {
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Gentle Tracking",
    desc: "Log your cycle with ease, like journaling your morning light",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Nurturing Insights",
    desc: "Understand your body with warm, personalized health wisdom",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Safe & Private",
    desc: "Your most personal data, protected and kept on your device",
  },
];

export default function Features() {
  const [active, setActive] = useState(-1);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12" style={{ background: "#fff8f0" }}>
      <h2
        className="text-3xl font-bold mb-2"
        style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}
      >
        Made for You
      </h2>
      <p className="text-sm mb-8" style={{ fontFamily: "system-ui", color: "#c06840" }}>
        Everything you need, wrapped in warmth
      </p>

      <div className="flex flex-col gap-5 w-full max-w-sm">
        {features.map((f, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative rounded-2xl p-5 text-left transition-all duration-300"
            style={{
              background: active === i ? "#ffecd2" : "#fff",
              border: `1.5px solid ${active === i ? "#d4a060" : "#ffcba4"}`,
              boxShadow: active === i
                ? "0 4px 20px rgba(212,160,96,0.25)"
                : "0 2px 8px rgba(212,160,96,0.1)",
            }}
          >
            {/* Sunrise glow behind icon */}
            <div
              className="absolute top-4 left-4 w-12 h-12 rounded-full"
              style={{
                background: "radial-gradient(circle, #ffcba4 0%, transparent 70%)",
                opacity: active === i ? 0.8 : 0.4,
              }}
            />
            <div className="flex items-start gap-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={active === i ? "#c06840" : "#d4a060"}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 mt-1 shrink-0"
              >
                <path d={f.icon} />
              </svg>
              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "Georgia, serif", color: "#3d2520" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm" style={{ fontFamily: "system-ui", color: "#3d2520", opacity: 0.7 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
