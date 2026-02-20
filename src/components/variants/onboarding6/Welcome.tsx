"use client";
import { useState } from "react";

export default function Welcome() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: "#f0f4f8", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
      `}</style>

      {/* Cool gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64" style={{ background: "linear-gradient(180deg, #dbeafe 0%, transparent 100%)", opacity: 0.5 }} />

      {/* Ice crystal SVG mark */}
      <div style={{ animation: "fadeUp 0.8s ease-out" }} className="mb-8 relative z-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {/* Hexagonal crystal */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x2 = 60 + 40 * Math.cos(rad);
            const y2 = 60 + 40 * Math.sin(rad);
            return <line key={deg} x1="60" y1="60" x2={x2} y2={y2} stroke="#4b7bec" strokeWidth="1.5" opacity="0.7" />;
          })}
          {/* Outer hexagon */}
          <polygon
            points={[0, 60, 120, 180, 240, 300].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return `${60 + 40 * Math.cos(rad)},${60 + 40 * Math.sin(rad)}`;
            }).join(" ")}
            fill="none" stroke="#4b7bec" strokeWidth="1.5"
          />
          {/* Inner hexagon */}
          <polygon
            points={[30, 90, 150, 210, 270, 330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return `${60 + 20 * Math.cos(rad)},${60 + 20 * Math.sin(rad)}`;
            }).join(" ")}
            fill="none" stroke="#4b7bec" strokeWidth="1" opacity="0.5"
          />
          {/* Branch details */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const mx = 60 + 25 * Math.cos(rad);
            const my = 60 + 25 * Math.sin(rad);
            const bx1 = mx + 8 * Math.cos(rad + 0.8);
            const by1 = my + 8 * Math.sin(rad + 0.8);
            const bx2 = mx + 8 * Math.cos(rad - 0.8);
            const by2 = my + 8 * Math.sin(rad - 0.8);
            return (
              <g key={`b-${deg}`}>
                <line x1={mx} y1={my} x2={bx1} y2={by1} stroke="#4b7bec" strokeWidth="1" opacity="0.5" />
                <line x1={mx} y1={my} x2={bx2} y2={by2} stroke="#4b7bec" strokeWidth="1" opacity="0.5" />
              </g>
            );
          })}
          <circle cx="60" cy="60" r="4" fill="#4b7bec" opacity="0.3" />
          <circle cx="60" cy="60" r="2" fill="#4b7bec" opacity="0.6" />
        </svg>
      </div>

      {/* Brand */}
      <h1 className="text-4xl font-light tracking-wider mb-2 relative z-10" style={{ color: "#1e293b", animation: "fadeUp 0.8s ease-out 0.2s both" }}>
        Frost
      </h1>
      <div className="w-16 h-px mx-auto mb-3 relative z-10" style={{ backgroundColor: "#4b7bec", opacity: 0.4 }} />
      <p className="text-xs tracking-[0.3em] uppercase mb-3 relative z-10" style={{ color: "#94a3b8", animation: "fadeUp 0.8s ease-out 0.3s both" }}>
        Clarity for your cycle
      </p>
      <p className="text-center text-sm max-w-xs mx-auto mb-10 leading-relaxed relative z-10" style={{ color: "#334155", opacity: 0.7, animation: "fadeUp 0.8s ease-out 0.4s both" }}>
        Precise, intuitive period tracking designed for women who value clarity and control.
      </p>

      {/* CTA */}
      <button
        className="px-10 py-3.5 rounded-xl text-sm font-medium tracking-wider uppercase border-0 cursor-pointer transition-all duration-300 relative z-10"
        style={{
          backgroundColor: hovered ? "#3b6bdc" : "#4b7bec",
          color: "#ffffff",
          boxShadow: hovered ? "0 8px 24px rgba(75,123,236,0.35)" : "0 4px 12px rgba(75,123,236,0.2)",
          animation: "fadeUp 0.8s ease-out 0.6s both",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Get Started
      </button>

      {/* Page dots */}
      <div className="flex gap-2 mt-10 relative z-10" style={{ animation: "fadeUp 0.8s ease-out 0.8s both" }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-full" style={{ width: i === 0 ? 20 : 6, height: 6, backgroundColor: i === 0 ? "#4b7bec" : "#cbd5e1", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
