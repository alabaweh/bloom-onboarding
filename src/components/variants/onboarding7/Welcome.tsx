"use client";
import { useState } from "react";

export default function Welcome() {
  const [entered, setEntered] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 50%, #1a0e2e 100%)" }}
    >
      {/* Lavender mist blobs */}
      <div className="absolute" style={{
        width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, #c4b5e0 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.2, top: "-8%", left: "-10%",
      }} />
      <div className="absolute" style={{
        width: 280, height: 280, borderRadius: "50%",
        background: "radial-gradient(circle, #c97b8b 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.15, bottom: "5%", right: "-8%",
      }} />
      <div className="absolute" style={{
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, #d4b483 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.18, top: "40%", left: "60%",
      }} />

      {/* Moon icon */}
      <div className="mb-6 flex items-center justify-center rounded-full" style={{
        width: 80, height: 80,
        background: "linear-gradient(135deg, #c4b5e0 0%, #d4b483 100%)",
        boxShadow: "0 0 40px rgba(196,181,224,0.3)",
      }}>
        <span style={{ fontSize: 36 }}>&#9790;</span>
      </div>

      {/* App name */}
      <h1 className="text-5xl font-bold mb-3 tracking-wide"
        style={{ fontFamily: "Georgia, serif", color: "#d4b483" }}>
        Aura
      </h1>

      {/* Tagline */}
      <p className="text-lg mb-2 text-center px-8"
        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "system-ui" }}>
        Discover your inner rhythm
      </p>
      <p className="text-sm mb-10 text-center px-10"
        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
        Track, understand, and embrace every phase of your cycle with intuitive elegance
      </p>

      {/* CTA button */}
      <button
        onClick={() => setEntered(true)}
        className="rounded-2xl px-10 py-4 text-base font-semibold transition-all duration-300 cursor-pointer"
        style={{
          background: entered
            ? "linear-gradient(135deg, #c4b5e0 0%, #d4b483 100%)"
            : "linear-gradient(135deg, #c4b5e0 0%, #a89cc8 100%)",
          color: "#1a0e2e",
          fontFamily: "system-ui",
          boxShadow: "0 0 24px rgba(212,180,131,0.25)",
          transform: entered ? "scale(0.96)" : "scale(1)",
        }}
      >
        {entered ? "Welcome to Aura" : "Begin Your Journey"}
      </button>

      {/* Decorative dots */}
      <div className="flex gap-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-full" style={{
            width: 6, height: 6,
            background: i === 0 ? "#d4b483" : "rgba(196,181,224,0.3)",
          }} />
        ))}
      </div>
    </div>
  );
}
