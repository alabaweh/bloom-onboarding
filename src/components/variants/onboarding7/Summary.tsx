"use client";
import { useState } from "react";

export default function Summary() {
  const [launched, setLaunched] = useState(false);

  const summaryItems = [
    { label: "Profile", value: "Age 25-30, 28-day cycle" },
    { label: "Tracking", value: "Period prediction, mood patterns" },
    { label: "Symptoms", value: "5 symptoms logged" },
    { label: "Notifications", value: "3 reminders active" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0e2e 0%, #2d1854 100%)" }}>
      {/* Mist blobs */}
      <div className="absolute" style={{
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, #c4b5e0 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.2, top: "-5%", left: "-8%",
      }} />
      <div className="absolute" style={{
        width: 240, height: 240, borderRadius: "50%",
        background: "radial-gradient(circle, #d4b483 0%, transparent 70%)",
        filter: "blur(60px)", opacity: 0.15, bottom: "8%", right: "-5%",
      }} />

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full relative z-10">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
          Your Aura Awaits
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
          Everything is set for your journey
        </p>

        {/* Summary card with gold border accents */}
        <div className="rounded-2xl p-6 mb-6 relative" style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          {/* Gold accent lines */}
          <div className="absolute top-0 left-6 right-6 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #d4b483, transparent)" }} />
          <div className="absolute bottom-0 left-6 right-6 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #d4b483, transparent)" }} />

          <div className="space-y-4">
            {summaryItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm font-medium"
                  style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>
                  {item.label}
                </span>
                <span className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

          {/* App branding */}
          <p className="text-center text-lg font-bold"
            style={{ fontFamily: "Georgia, serif", color: "#d4b483" }}>
            Aura
          </p>
          <p className="text-center text-xs mt-1"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "system-ui" }}>
            Your personal cycle companion
          </p>
        </div>

        {/* Privacy badge */}
        <div className="flex items-center justify-center gap-2 rounded-2xl py-2.5 px-4 mb-6"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontSize: 12 }}>&#128274;</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "system-ui" }}>
            Your data is encrypted and never shared
          </span>
        </div>

        {/* CTA */}
        <button onClick={() => setLaunched(true)}
          className="w-full rounded-2xl py-4 text-base font-semibold cursor-pointer transition-all duration-300"
          style={{
            background: launched
              ? "linear-gradient(135deg, #d4b483, #c97b8b)"
              : "linear-gradient(135deg, #c4b5e0 0%, #a89cc8 100%)",
            color: "#1a0e2e",
            fontFamily: "system-ui",
            boxShadow: "0 0 20px rgba(196,181,224,0.2)",
            transform: launched ? "scale(0.97)" : "scale(1)",
          }}>
          {launched ? "Welcome to Aura" : "Begin Your Discovery"}
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-full" style={{
              width: i === 8 ? 18 : 6, height: 6,
              background: i === 8 ? "#d4b483" : "rgba(196,181,224,0.25)",
              borderRadius: i === 8 ? 3 : "50%",
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
