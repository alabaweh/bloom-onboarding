"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);
  const [flow, setFlow] = useState<string | null>(null);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const flowOptions = ["Light", "Medium", "Heavy", "Varies"];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Decorative wash */}
      <div className="absolute" style={{
        width: 280, height: 260, top: "-8%", left: "-15%",
        borderRadius: "48% 52% 55% 45% / 50% 46% 54% 50%",
        background: "radial-gradient(ellipse, rgba(252,213,180,0.3) 0%, transparent 70%)",
        filter: "blur(40px)",
      }} />

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>Your Canvas</h2>
      <p className="text-center text-sm mb-10 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.15s both" : "none",
      }}>Tell us about your unique palette</p>

      <div className="max-w-sm mx-auto w-full flex flex-col gap-6 relative z-10">
        {/* Cycle Length Card */}
        <div className="rounded-3xl p-5" style={{
          background: "rgba(254,254,254,0.9)", border: "1px solid rgba(249,168,201,0.15)",
          boxShadow: "0 4px 24px rgba(249,168,201,0.08)",
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.25s both" : "none",
        }}>
          <div className="rounded-2xl px-4 py-2 mb-4 inline-block" style={{
            background: "linear-gradient(135deg, rgba(249,168,201,0.12), rgba(249,168,201,0.05))",
          }}>
            <span className="text-xs" style={{ color: "#f9a8c9", fontWeight: 400 }}>Cycle Length</span>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={() => setCycleLength(Math.max(20, cycleLength - 1))}
              className="w-10 h-10 rounded-full border-0 cursor-pointer text-lg"
              style={{ background: "rgba(249,168,201,0.1)", color: "#f9a8c9" }}>-</button>
            <span className="text-2xl font-light" style={{ fontFamily: "Georgia, serif", color: "#3d2c2c" }}>
              {cycleLength} <span className="text-sm" style={{ color: "rgba(61,44,44,0.4)" }}>days</span>
            </span>
            <button onClick={() => setCycleLength(Math.min(40, cycleLength + 1))}
              className="w-10 h-10 rounded-full border-0 cursor-pointer text-lg"
              style={{ background: "rgba(249,168,201,0.1)", color: "#f9a8c9" }}>+</button>
          </div>
        </div>

        {/* Period Length Card */}
        <div className="rounded-3xl p-5" style={{
          background: "rgba(254,254,254,0.9)", border: "1px solid rgba(196,181,224,0.15)",
          boxShadow: "0 4px 24px rgba(196,181,224,0.08)",
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.35s both" : "none",
        }}>
          <div className="rounded-2xl px-4 py-2 mb-4 inline-block" style={{
            background: "linear-gradient(135deg, rgba(196,181,224,0.15), rgba(196,181,224,0.05))",
          }}>
            <span className="text-xs" style={{ color: "#c4b5e0", fontWeight: 400 }}>Period Length</span>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={() => setPeriodLength(Math.max(2, periodLength - 1))}
              className="w-10 h-10 rounded-full border-0 cursor-pointer text-lg"
              style={{ background: "rgba(196,181,224,0.1)", color: "#c4b5e0" }}>-</button>
            <span className="text-2xl font-light" style={{ fontFamily: "Georgia, serif", color: "#3d2c2c" }}>
              {periodLength} <span className="text-sm" style={{ color: "rgba(61,44,44,0.4)" }}>days</span>
            </span>
            <button onClick={() => setPeriodLength(Math.min(10, periodLength + 1))}
              className="w-10 h-10 rounded-full border-0 cursor-pointer text-lg"
              style={{ background: "rgba(196,181,224,0.1)", color: "#c4b5e0" }}>+</button>
          </div>
        </div>

        {/* Flow Selection */}
        <div className="rounded-3xl p-5" style={{
          background: "rgba(254,254,254,0.9)", border: "1px solid rgba(252,213,180,0.15)",
          boxShadow: "0 4px 24px rgba(252,213,180,0.08)",
          opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.45s both" : "none",
        }}>
          <div className="rounded-2xl px-4 py-2 mb-4 inline-block" style={{
            background: "linear-gradient(135deg, rgba(252,213,180,0.15), rgba(252,213,180,0.05))",
          }}>
            <span className="text-xs" style={{ color: "#d4a87a", fontWeight: 400 }}>Typical Flow</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {flowOptions.map((f) => (
              <button key={f} onClick={() => setFlow(f)}
                className="px-4 py-2 rounded-full border-0 cursor-pointer text-xs"
                style={{
                  background: flow === f ? "#fcd5b4" : "rgba(252,213,180,0.1)",
                  color: flow === f ? "#fefefe" : "rgba(61,44,44,0.5)",
                  fontWeight: 300, transition: "all 0.3s ease",
                }}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      <button className="block mx-auto mt-auto px-10 py-3.5 rounded-full text-sm tracking-widest border-0 cursor-pointer relative z-10"
        style={{
          background: "linear-gradient(135deg, #f9a8c9, #e898b8)", color: "#fefefe",
          fontWeight: 400, letterSpacing: "0.12em", boxShadow: "0 8px 32px rgba(249,168,201,0.25)",
        }}>Continue</button>

      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 3 ? 18 : 6, height: 6,
            background: i === 3 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
