"use client";
import { useState, useEffect } from "react";

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const paperLayers = [
    { rotate: -3, top: "18%", left: "8%", w: 180, h: 120, bg: "#f0e6d6", z: 1 },
    { rotate: 2, top: "14%", left: "52%", w: 160, h: 100, bg: "#f7efe3", z: 2 },
    { rotate: -1.5, top: "22%", left: "30%", w: 200, h: 130, bg: "#faf5eb", z: 3 },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6"
      style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes paperFloat { 0%,100% { transform: translateY(0) rotate(var(--r)); } 50% { transform: translateY(-6px) rotate(var(--r)); } }
      `}</style>

      {/* Background paper texture dots */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)",
        backgroundSize: "16px 16px",
      }} />

      {/* Decorative paper layers */}
      {paperLayers.map((p, i) => (
        <div key={i} className="absolute rounded-xl" style={{
          top: p.top, left: p.left, width: p.w, height: p.h,
          background: p.bg, transform: `rotate(${p.rotate}deg)`, zIndex: p.z,
          boxShadow: "0 2px 8px rgba(74,55,40,0.1), 0 4px 16px rgba(74,55,40,0.08)",
          ["--r" as string]: `${p.rotate}deg`,
          animation: `paperFloat ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
        }} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center" style={{
        opacity: visible ? 1 : 0,
        animation: visible ? "fadeUp 0.8s ease-out forwards" : "none",
      }}>
        {/* Paper cutout logo area */}
        <div className="relative mx-auto mb-8" style={{ width: 200, height: 160 }}>
          <div className="absolute rounded-xl" style={{
            width: 160, height: 120, top: 20, left: 0,
            background: "#f0e6d6", transform: "rotate(-4deg)",
            boxShadow: "0 3px 12px rgba(74,55,40,0.12)",
          }} />
          <div className="absolute rounded-xl" style={{
            width: 160, height: 120, top: 10, left: 20,
            background: "#f7efe3", transform: "rotate(2deg)",
            boxShadow: "0 3px 12px rgba(74,55,40,0.12)",
          }} />
          <div className="absolute rounded-xl flex items-center justify-center" style={{
            width: 160, height: 120, top: 15, left: 10,
            background: "#fff", transform: "rotate(-1deg)",
            boxShadow: "0 4px 16px rgba(74,55,40,0.15)",
          }}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path d="M10 50 Q30 10 50 50" fill="none" stroke="#e8735a" strokeWidth="3" strokeLinecap="round" />
              <path d="M15 45 Q30 20 45 45" fill="none" stroke="#e8735a" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl mb-3 tracking-wide" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
          Fold
        </h1>
        <div className="w-12 h-0.5 mx-auto mb-4 rounded-full" style={{ background: "#e8735a" }} />
        <p className="text-lg mb-2" style={{ color: "#4a3728", fontFamily: "Georgia, serif", opacity: 0.8 }}>
          Unfold your health
        </p>
        <p className="text-sm max-w-xs mx-auto mb-10" style={{ color: "#4a3728", opacity: 0.55, lineHeight: 1.7 }}>
          A gentle, handcrafted approach to understanding your body and its rhythms.
        </p>

        <button className="px-10 py-3.5 rounded-xl text-sm font-medium tracking-wide border-0 cursor-pointer" style={{
          background: "#e8735a", color: "#fff",
          boxShadow: "0 3px 12px rgba(232,115,90,0.35), 0 1px 3px rgba(74,55,40,0.1)",
        }}>
          Get Started
        </button>

        <div className="flex justify-center gap-2 mt-10">
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="rounded-full" style={{
              width: i === 0 ? 18 : 6, height: 6,
              background: i === 0 ? "#e8735a" : "#ddd0c1",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
