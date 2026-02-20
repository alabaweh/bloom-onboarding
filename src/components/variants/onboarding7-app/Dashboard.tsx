"use client";
import { useState } from "react";

export default function Dashboard() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [activeNav, setActiveNav] = useState("home");
  const modes = [
    { key: "cycle", label: "Cycle" },
    { key: "ttc", label: "TTC" },
    { key: "pregnancy", label: "Pregnancy" },
  ] as const;

  const cycleDay = 14, totalDays = 28, phase = "Ovulatory", daysUntil = 14;
  const radius = 54, circumference = 2 * Math.PI * radius;
  const progress = (cycleDay / totalDays) * circumference;

  return (
    <div style={{ background: "linear-gradient(135deg, #1a0e2e 0%, #2d1854 100%)" }} className="min-h-screen flex flex-col font-[system-ui] text-white/85 relative overflow-hidden">
      {/* Lavender mist blobs */}
      <div className="absolute top-[-60px] right-[-40px] w-[200px] h-[200px] rounded-full opacity-20" style={{ background: "#c4b5e0", filter: "blur(60px)" }} />
      <div className="absolute bottom-[120px] left-[-60px] w-[180px] h-[180px] rounded-full opacity-15" style={{ background: "#c97b8b", filter: "blur(60px)" }} />

      <div className="flex-1 px-5 pt-12 pb-24">
        <h1 style={{ fontFamily: "Georgia, serif" }} className="text-2xl font-bold mb-1">Aura</h1>
        <p className="text-sm text-white/50 mb-4">Your cycle companion</p>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-6 p-1 rounded-2xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {modes.map((m) => (
            <button key={m.key} onClick={() => setMode(m.key)} className={`flex-1 py-2 text-sm rounded-xl transition-all ${mode === m.key ? "text-white font-semibold" : "text-white/50"}`} style={mode === m.key ? { background: "rgba(196,181,224,0.25)" } : {}}>
              {m.label}
            </button>
          ))}
        </div>

        {/* Cycle Mode */}
        {mode === "cycle" && (
          <div className="flex flex-col items-center gap-5">
            <div className="relative">
              <svg width="140" height="140" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                <circle cx="70" cy="70" r={radius} fill="none" stroke="#c97b8b" strokeWidth="10" strokeDasharray={`${progress} ${circumference}`} strokeLinecap="round" transform="rotate(-90 70 70)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Day {cycleDay}</span>
                <span className="text-xs text-white/50">of {totalDays}</span>
              </div>
            </div>
            <div className="rounded-2xl p-4 w-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm text-white/50">Current Phase</p>
              <p className="text-lg font-semibold" style={{ color: "#c4b5e0" }}>{phase}</p>
              <p className="text-xs text-white/40 mt-1">Next period in ~{daysUntil} days</p>
            </div>
            <div className="rounded-2xl p-4 w-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs" style={{ color: "#d4b483" }}>Daily Tip</p>
              <p className="text-sm mt-1">Your energy peaks during ovulation. Great time for workouts and social activities.</p>
            </div>
            <button className="w-full py-3 rounded-2xl text-sm font-semibold" style={{ background: "rgba(201,123,139,0.3)", color: "#c97b8b" }}>+ Quick Log</button>
          </div>
        )}

        {/* TTC Mode */}
        {mode === "ttc" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-5 text-center" style={{ background: "rgba(196,181,224,0.15)", border: "1px solid rgba(196,181,224,0.2)" }}>
              <p className="text-sm text-white/50">Fertile Window Opens In</p>
              <p className="text-4xl font-bold mt-1" style={{ fontFamily: "Georgia, serif", color: "#c4b5e0" }}>3 Days</p>
              <p className="text-xs text-white/40 mt-1">Ovulation est. Day 14</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs text-white/50 mb-2">BBT Trend (7 days)</p>
              <svg width="100%" height="50" viewBox="0 0 200 50">
                {[97.2,97.3,97.1,97.4,97.8,98.0,98.1].map((v,i)=><circle key={i} cx={15+i*28} cy={50-((v-97)*50)} r="3" fill="#c4b5e0"/>)}
                <polyline points={[97.2,97.3,97.1,97.4,97.8,98.0,98.1].map((v,i)=>`${15+i*28},${50-((v-97)*50)}`).join(" ")} fill="none" stroke="#c4b5e0" strokeWidth="1.5" opacity="0.6"/>
              </svg>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm text-white/50">Conception Probability</p>
              <p className="text-2xl font-bold" style={{ color: "#d4b483" }}>18%</p>
              <p className="text-xs text-white/40">Based on your cycle data</p>
            </div>
          </div>
        )}

        {/* Pregnancy Mode */}
        {mode === "pregnancy" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-5 text-center" style={{ background: "rgba(201,123,139,0.15)", border: "1px solid rgba(201,123,139,0.2)" }}>
              <p className="text-5xl mb-1">🫐</p>
              <p className="text-sm text-white/50">Week 12 — Baby is the size of a</p>
              <p className="text-xl font-bold" style={{ fontFamily: "Georgia, serif", color: "#c97b8b" }}>Plum</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-sm text-white/50">Due Date</p>
              <p className="font-semibold">August 15, 2025</p>
              <p className="text-xs text-white/40 mt-1">196 days remaining</p>
            </div>
            <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs text-white/50 mb-2">Trimester Progress</p>
              <div className="flex gap-1">
                {["1st","2nd","3rd"].map((t,i)=>(
                  <div key={t} className="flex-1">
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full" style={{ width: i===0?"90%":i===1?"5%":"0%", background: i===0?"#c97b8b":"#c4b5e0" }}/>
                    </div>
                    <p className="text-[10px] text-center text-white/40 mt-1">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Privacy Badge */}
        <div className="flex items-center justify-center gap-1 mt-6">
          <span className="text-[10px] text-white/30">🔒 All data stored locally on your device</span>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around py-3 px-2" style={{ background: "rgba(26,14,46,0.95)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        {[{k:"home",l:"Home",icon:"◉"},{k:"calendar",l:"Calendar",icon:"▦"},{k:"log",l:"Log",icon:"✎"},{k:"insights",l:"Insights",icon:"◈"},{k:"profile",l:"Profile",icon:"○"}].map(n=>(
          <button key={n.k} onClick={()=>setActiveNav(n.k)} className="flex flex-col items-center gap-0.5">
            <span className={`text-lg ${activeNav===n.k?"opacity-100":"opacity-40"}`} style={activeNav===n.k?{color:"#c4b5e0"}:{}}>{n.icon}</span>
            <span className={`text-[10px] ${activeNav===n.k?"text-white/80":"text-white/40"}`}>{n.l}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
