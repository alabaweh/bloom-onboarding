"use client";
import { useState } from "react";

export default function Dashboard() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [mood, setMood] = useState(2);
  const modes = ["cycle", "ttc", "pregnancy"] as const;
  const modeLabels = { cycle: "Cycle", ttc: "TTC", pregnancy: "Pregnancy" };

  const CycleRing = () => (
    <svg width="180" height="180" viewBox="0 0 180 180">
      <defs>
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffcba4" />
          <stop offset="100%" stopColor="#c06840" />
        </linearGradient>
      </defs>
      <circle cx="90" cy="90" r="78" fill="none" stroke="#ffcba4" strokeWidth="8" opacity={0.3} />
      <circle cx="90" cy="90" r="78" fill="none" stroke="url(#sunGrad)" strokeWidth="8"
        strokeDasharray={`${(14 / 28) * 490} 490`} strokeLinecap="round" transform="rotate(-90 90 90)" />
      <circle cx="90" cy="90" r="60" fill="rgba(192,104,64,0.06)" />
      <text x="90" y="78" textAnchor="middle" style={{ fontFamily: "Georgia", fontSize: 28, fill: "#3d2520" }}>Day 14</text>
      <text x="90" y="102" textAnchor="middle" style={{ fontFamily: "system-ui", fontSize: 13, fill: "#c06840" }}>of 28</text>
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(180deg, #fff8f0 0%, #fff2e6 50%, #fff8f0 100%)" }}>
      {/* Sunrise glow */}
      <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 400, height: 200,
        background: "radial-gradient(ellipse, rgba(212,160,96,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="flex-1 px-5 pt-6 pb-24 relative z-10">
        <div className="flex items-center justify-between mb-5">
          <h1 style={{ fontFamily: "Georgia", fontSize: 24, color: "#3d2520" }}>Solara</h1>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "rgba(192,104,64,0.08)" }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="#c06840" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span style={{ fontFamily: "system-ui", fontSize: 11, color: "#c06840" }}>Private</span>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-6 p-1 rounded-2xl" style={{ background: "rgba(192,104,64,0.06)" }}>
          {modes.map(m => (
            <button key={m} onClick={() => setMode(m)} className="flex-1 py-2.5 rounded-xl transition-all"
              style={{ background: mode === m ? "#c06840" : "transparent", color: mode === m ? "#fff" : "#3d2520",
                fontFamily: "system-ui", fontSize: 13, fontWeight: 600, boxShadow: mode === m ? "0 4px 12px rgba(192,104,64,0.3)" : "none" }}>
              {modeLabels[m]}
            </button>
          ))}
        </div>

        {mode === "cycle" && (
          <>
            <div className="flex flex-col items-center mb-5"><CycleRing /></div>
            <div className="text-center mb-5">
              <span className="inline-block px-4 py-1.5 rounded-full" style={{ background: "rgba(212,160,96,0.15)", color: "#d4a060", fontFamily: "Georgia", fontSize: 15 }}>Ovulation Phase</span>
              <p style={{ fontFamily: "system-ui", fontSize: 13, color: "#3d2520", opacity: 0.6, marginTop: 6 }}>~14 days until next period</p>
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(255,203,164,0.2)", border: "1px solid rgba(192,104,64,0.1)" }}>
              <p style={{ fontFamily: "system-ui", fontSize: 13, color: "#3d2520", lineHeight: 1.5 }}>Your body temperature may rise slightly. Energy levels are typically at their peak during ovulation.</p>
            </div>
            <div className="flex gap-3 mb-4">
              {["😊", "😐", "😔", "😴", "🤗"].map((e, i) => (
                <button key={i} onClick={() => setMood(i)} className="flex-1 py-3 rounded-2xl text-xl transition-all"
                  style={{ background: mood === i ? "rgba(192,104,64,0.15)" : "rgba(192,104,64,0.04)", border: mood === i ? "2px solid #c06840" : "2px solid transparent" }}>{e}</button>
              ))}
            </div>
            <button className="w-full py-3.5 rounded-2xl" style={{ background: "linear-gradient(135deg, #c06840, #d4a060)", color: "#fff", fontFamily: "system-ui", fontSize: 15, fontWeight: 600, boxShadow: "0 4px 16px rgba(192,104,64,0.3)" }}>+ Quick Log</button>
          </>
        )}

        {mode === "ttc" && (
          <>
            <div className="text-center mb-5">
              <p style={{ fontFamily: "Georgia", fontSize: 36, color: "#c06840" }}>32%</p>
              <p style={{ fontFamily: "system-ui", fontSize: 13, color: "#d4a060" }}>Conception Probability</p>
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(212,160,96,0.12)", border: "1px solid rgba(212,160,96,0.2)" }}>
              <p style={{ fontFamily: "Georgia", fontSize: 15, color: "#3d2520", marginBottom: 8 }}>Fertile Window</p>
              <div className="flex gap-1 mb-2">{[1,2,3,4,5,6].map(d => (
                <div key={d} className="flex-1 h-8 rounded-lg" style={{ background: d >= 3 && d <= 5 ? "linear-gradient(180deg, #d4a060, #c06840)" : "rgba(192,104,64,0.1)" }} />
              ))}</div>
              <p style={{ fontFamily: "system-ui", fontSize: 11, color: "#3d2520", opacity: 0.5 }}>Day 11-16 &middot; Ovulation ~Day 14</p>
            </div>
            <svg width="100%" height="80" viewBox="0 0 300 80" className="mb-4">
              <polyline points="10,60 60,55 120,40 180,25 240,45 290,50" fill="none" stroke="#c06840" strokeWidth="2" />
              <text x="150" y="75" textAnchor="middle" style={{ fontSize: 10, fill: "#3d2520" }}>BBT Trend</text>
            </svg>
            <button className="w-full py-3.5 rounded-2xl mb-3" style={{ background: "linear-gradient(135deg, #c06840, #d4a060)", color: "#fff", fontFamily: "system-ui", fontSize: 15, fontWeight: 600 }}>Log Intercourse</button>
          </>
        )}

        {mode === "pregnancy" && (
          <>
            <div className="text-center mb-5">
              <p style={{ fontFamily: "Georgia", fontSize: 44, color: "#c06840" }}>Week 12</p>
              <p style={{ fontFamily: "system-ui", fontSize: 14, color: "#d4a060", marginTop: 4 }}>Baby is the size of a lime</p>
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(192,104,64,0.06)", border: "1px solid rgba(192,104,64,0.1)" }}>
              <p style={{ fontFamily: "Georgia", fontSize: 15, color: "#3d2520", marginBottom: 4 }}>Due Date Countdown</p>
              <p style={{ fontFamily: "Georgia", fontSize: 32, color: "#c06840" }}>189 <span style={{ fontSize: 14 }}>days</span></p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span style={{ fontFamily: "system-ui", fontSize: 12, color: "#3d2520" }}>Trimester 1</span>
                <span style={{ fontFamily: "system-ui", fontSize: 12, color: "#d4a060" }}>Week 12 of 40</span>
              </div>
              <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: "rgba(192,104,64,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: "30%", background: "linear-gradient(90deg, #ffcba4, #c06840)" }} />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around py-3 px-4" style={{ background: "#fff8f0", borderTop: "1px solid rgba(192,104,64,0.1)", boxShadow: "0 -4px 20px rgba(192,104,64,0.05)" }}>
        {[{icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home", active: true},
          {icon: "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4M8 2v4M3 10h18", label: "Calendar"},
          {icon: "M12 5v14M5 12h14", label: "Log", isPlus: true},
          {icon: "M3 3v18h18M7 16l4-4 4 4 5-5", label: "Insights"},
          {icon: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33", label: "Settings"}
        ].map((n, i) => (
          <button key={i} className="flex flex-col items-center gap-1">
            {n.isPlus ? (
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c06840, #d4a060)", boxShadow: "0 4px 12px rgba(192,104,64,0.3)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d={n.icon}/></svg>
              </div>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={n.active ? "#c06840" : "#3d2520"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity={n.active ? 1 : 0.4}><path d={n.icon}/></svg>
            )}
            {!n.isPlus && <span style={{ fontFamily: "system-ui", fontSize: 10, color: n.active ? "#c06840" : "#3d2520", opacity: n.active ? 1 : 0.4 }}>{n.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}