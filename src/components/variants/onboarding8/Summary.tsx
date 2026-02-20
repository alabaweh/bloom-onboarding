"use client";
import { useState, useEffect } from "react";

export default function Summary() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const summaryItems = [
    { label: "Cycle Length", value: "28 days", color: "#f9a8c9" },
    { label: "Period Length", value: "5 days", color: "#c4b5e0" },
    { label: "Typical Flow", value: "Medium", color: "#fcd5b4" },
    { label: "Tracking Goals", value: "Cycle & Wellness", color: "#f9a8c9" },
    { label: "Notifications", value: "3 active", color: "#c4b5e0" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes softPulse { 0%,100% { opacity: 0.25; } 50% { opacity: 0.4; } }
      `}</style>

      {/* Corner watercolor wash blobs forming a frame */}
      <div className="absolute" style={{
        width: 220, height: 200, top: "-3%", left: "-8%",
        borderRadius: "48% 52% 55% 45% / 50% 46% 54% 50%",
        background: "radial-gradient(ellipse, #f9a8c9 0%, transparent 65%)",
        filter: "blur(50px)", opacity: 0.3, animation: "softPulse 5s ease-in-out infinite",
      }} />
      <div className="absolute" style={{
        width: 200, height: 180, top: "-2%", right: "-6%",
        borderRadius: "55% 45% 48% 52% / 46% 54% 50% 50%",
        background: "radial-gradient(ellipse, #c4b5e0 0%, transparent 65%)",
        filter: "blur(50px)", opacity: 0.25, animation: "softPulse 5s ease-in-out 1.5s infinite",
      }} />
      <div className="absolute" style={{
        width: 200, height: 180, bottom: "-2%", left: "-6%",
        borderRadius: "50% 50% 45% 55% / 52% 48% 54% 46%",
        background: "radial-gradient(ellipse, #c4b5e0 0%, transparent 65%)",
        filter: "blur(50px)", opacity: 0.25, animation: "softPulse 5s ease-in-out 2.5s infinite",
      }} />
      <div className="absolute" style={{
        width: 220, height: 200, bottom: "-3%", right: "-8%",
        borderRadius: "52% 48% 50% 50% / 48% 52% 46% 54%",
        background: "radial-gradient(ellipse, #fcd5b4 0%, transparent 65%)",
        filter: "blur(50px)", opacity: 0.3, animation: "softPulse 5s ease-in-out 3.5s infinite",
      }} />

      <div className="relative z-10 w-full max-w-sm">
        {/* Petal icon */}
        <div className="flex justify-center mb-5" style={{
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
        }}>
          <svg width="48" height="48" viewBox="0 0 80 80" style={{ opacity: 0.7 }}>
            <ellipse cx="40" cy="28" rx="10" ry="18" fill="#f9a8c9" opacity="0.5" transform="rotate(0 40 40)" />
            <ellipse cx="40" cy="28" rx="10" ry="18" fill="#c4b5e0" opacity="0.4" transform="rotate(72 40 40)" />
            <ellipse cx="40" cy="28" rx="10" ry="18" fill="#fcd5b4" opacity="0.4" transform="rotate(144 40 40)" />
            <ellipse cx="40" cy="28" rx="10" ry="18" fill="#f9a8c9" opacity="0.3" transform="rotate(216 40 40)" />
            <ellipse cx="40" cy="28" rx="10" ry="18" fill="#c4b5e0" opacity="0.3" transform="rotate(288 40 40)" />
          </svg>
        </div>

        <h2 className="text-3xl font-light text-center mb-2" style={{
          fontFamily: "Georgia, serif", color: "#3d2c2c",
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.1s both" : "none",
        }}>Your Painting is Ready</h2>
        <p className="text-center text-sm mb-8" style={{
          color: "rgba(61,44,44,0.5)", fontWeight: 300,
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.2s both" : "none",
        }}>Here is everything we have captured</p>

        {/* Summary card with watercolor border effect */}
        <div className="rounded-3xl p-6 mb-8" style={{
          background: "rgba(254,254,254,0.9)",
          border: "1px solid rgba(249,168,201,0.12)",
          boxShadow: "0 4px 32px rgba(249,168,201,0.08), 0 0 0 4px rgba(249,168,201,0.04), 0 0 0 8px rgba(196,181,224,0.03)",
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.3s both" : "none",
        }}>
          {summaryItems.map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between py-3.5">
                <span className="text-sm" style={{ color: "rgba(61,44,44,0.5)", fontWeight: 300 }}>{item.label}</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{
                  background: `${item.color}15`, color: item.color, fontWeight: 400,
                }}>{item.value}</span>
              </div>
              {i < summaryItems.length - 1 && (
                <div style={{
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${summaryItems[i + 1].color}20, transparent)`,
                }} />
              )}
            </div>
          ))}
        </div>

        <button className="block w-full mx-auto px-10 py-4 rounded-full text-sm tracking-widest border-0 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #f9a8c9, #e898b8)", color: "#fefefe",
            fontWeight: 400, letterSpacing: "0.15em",
            boxShadow: "0 8px 32px rgba(249,168,201,0.3)",
            opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.45s both" : "none",
          }}>
          Start Your Journey
        </button>

        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 8 ? 18 : 6, height: 6,
              background: i === 8 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
