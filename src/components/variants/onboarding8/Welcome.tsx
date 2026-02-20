"use client";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes breathe { 0%,100% { transform: scale(1); opacity: 0.35; } 50% { transform: scale(1.08); opacity: 0.45; } }
        @keyframes bloomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

      {/* Large watercolor wash blob — primary pink */}
      <div className="absolute" style={{
        width: 420, height: 420, top: "8%", left: "50%", transform: "translateX(-50%)",
        borderRadius: "52% 48% 44% 56% / 49% 55% 45% 51%",
        background: "radial-gradient(ellipse at 40% 40%, #f9a8c9 0%, rgba(249,168,201,0.3) 50%, transparent 75%)",
        filter: "blur(40px)", animation: "breathe 6s ease-in-out infinite",
      }} />

      {/* Secondary lavender wash */}
      <div className="absolute" style={{
        width: 260, height: 240, top: "18%", right: "5%",
        borderRadius: "45% 55% 50% 50% / 58% 42% 58% 42%",
        background: "radial-gradient(ellipse at 50% 50%, #c4b5e0 0%, rgba(196,181,224,0.2) 55%, transparent 80%)",
        filter: "blur(45px)", opacity: 0.4,
      }} />

      {/* Peach accent wash */}
      <div className="absolute" style={{
        width: 200, height: 200, bottom: "15%", left: "8%",
        borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%",
        background: "radial-gradient(ellipse at 60% 40%, #fcd5b4 0%, rgba(252,213,180,0.2) 55%, transparent 80%)",
        filter: "blur(38px)", opacity: 0.4,
      }} />

      <div className="relative z-10" style={{
        opacity: visible ? 1 : 0,
        animation: visible ? "bloomIn 1.2s ease-out forwards" : "none",
      }}>
        {/* Watercolor petal icon */}
        <div className="flex justify-center mb-8">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <ellipse cx="40" cy="28" rx="12" ry="20" fill="#f9a8c9" opacity="0.6" transform="rotate(0 40 40)" />
            <ellipse cx="40" cy="28" rx="12" ry="20" fill="#c4b5e0" opacity="0.5" transform="rotate(72 40 40)" />
            <ellipse cx="40" cy="28" rx="12" ry="20" fill="#fcd5b4" opacity="0.5" transform="rotate(144 40 40)" />
            <ellipse cx="40" cy="28" rx="12" ry="20" fill="#f9a8c9" opacity="0.4" transform="rotate(216 40 40)" />
            <ellipse cx="40" cy="28" rx="12" ry="20" fill="#c4b5e0" opacity="0.4" transform="rotate(288 40 40)" />
            <circle cx="40" cy="40" r="5" fill="#fefefe" opacity="0.8" />
          </svg>
        </div>

        <h1 className="text-5xl font-light tracking-wide text-center mb-3" style={{
          fontFamily: "Georgia, 'Times New Roman', serif", color: "#3d2c2c",
        }}>
          Petal
        </h1>

        <div className="w-20 h-px mx-auto mb-4" style={{
          background: "linear-gradient(90deg, transparent, #f9a8c9, transparent)",
        }} />

        <p className="text-center text-sm tracking-widest uppercase mb-2" style={{
          color: "#c4b5e0", fontWeight: 300, letterSpacing: "0.25em",
        }}>
          Painted by nature
        </p>

        <p className="text-center text-base max-w-xs mx-auto mb-12" style={{
          color: "rgba(61,44,44,0.6)", lineHeight: 1.8, fontWeight: 300,
        }}>
          A gentle companion for every phase of your cycle, crafted with the softness of watercolor.
        </p>

        <button className="block mx-auto px-10 py-3.5 rounded-full text-sm tracking-widest border-0 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #f9a8c9 0%, #e898b8 100%)",
            color: "#fefefe", fontWeight: 400, letterSpacing: "0.15em",
            boxShadow: "0 8px 32px rgba(249,168,201,0.3)",
          }}
        >
          Begin
        </button>

        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 0 ? 18 : 6, height: 6,
              background: i === 0 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
