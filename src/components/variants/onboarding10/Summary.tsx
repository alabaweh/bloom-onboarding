"use client";
import { useState } from "react";

export default function Summary() {
  const [opened, setOpened] = useState(false);

  const summaryData = [
    { label: "Cycle Length", value: "28 days" },
    { label: "Last Period", value: "Feb 14, 2026" },
    { label: "Symptoms Tracked", value: "Cramps, Fatigue" },
    { label: "Goals", value: "Predict, Wellness" },
    { label: "Notifications", value: "Period, Symptoms" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        All Set
      </h2>
      <p className="text-sm text-center mb-8 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Your wellness letter is ready
      </p>

      {/* Envelope */}
      <div className="relative z-10 w-full max-w-sm cursor-pointer" onClick={() => setOpened(!opened)}>
        {/* Back flap of envelope */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[95%]" style={{
          height: 60, background: "#e8ddd0",
          clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          boxShadow: "0 -2px 8px rgba(74,55,40,0.08)",
          transform: opened ? "scaleY(-1) translateY(60px)" : "scaleY(1)",
          transition: "transform 0.5s ease",
          transformOrigin: "bottom center",
          zIndex: opened ? 0 : 3,
        }} />

        {/* Letter content */}
        <div className="rounded-xl p-6 transition-all duration-500" style={{
          background: "#fff",
          transform: opened ? "translateY(-30px) rotate(-0.5deg)" : "translateY(20px) rotate(-0.5deg)",
          boxShadow: "0 4px 16px rgba(74,55,40,0.12), 0 2px 6px rgba(74,55,40,0.06)",
          zIndex: 2,
          position: "relative",
        }}>
          {/* Coral wax seal */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center" style={{
            background: "#e8735a",
            boxShadow: "0 2px 8px rgba(232,115,90,0.4)",
            zIndex: 5,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <p className="text-center text-xs mt-4 mb-4 italic" style={{ color: "#4a3728", opacity: 0.5 }}>
            {opened ? "Your personalized profile" : "Tap to open your letter"}
          </p>

          {opened && (
            <div className="space-y-3">
              {summaryData.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 transition-all duration-300" style={{
                  borderBottom: i < summaryData.length - 1 ? "1px dashed #e8ddd0" : "none",
                  animation: `fadeIn 0.4s ease ${i * 0.1}s both`,
                }}>
                  <span className="text-xs" style={{ color: "#4a3728", opacity: 0.55 }}>{item.label}</span>
                  <span className="text-sm font-medium" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Envelope body */}
        <div className="rounded-b-xl" style={{
          height: 40, background: "#f0e6d6", marginTop: -8,
          boxShadow: "0 4px 16px rgba(74,55,40,0.1)",
          position: "relative", zIndex: 1,
        }} />
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {opened && (
        <button className="mt-8 px-10 py-3.5 rounded-xl text-sm font-medium tracking-wide border-0 cursor-pointer relative z-10" style={{
          background: "#e8735a", color: "#fff",
          boxShadow: "0 3px 12px rgba(232,115,90,0.35), 0 1px 3px rgba(74,55,40,0.1)",
        }}>
          Begin Your Journey
        </button>
      )}

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 8 ? 18 : 6, height: 6,
            background: i === 8 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
