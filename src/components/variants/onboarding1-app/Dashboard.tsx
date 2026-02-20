"use client";
import { useState } from "react";

export default function Dashboard() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const modes = [
    { key: "cycle" as const, label: "Cycle Tracking" },
    { key: "ttc" as const, label: "Trying to Conceive" },
    { key: "pregnancy" as const, label: "Pregnancy" },
  ];

  const Nav = ({ active = "home" }: { active?: string }) => {
    const items = [
      { id: "home", icon: "M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z", label: "Home" },
      { id: "calendar", icon: "M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z", label: "Calendar" },
      { id: "log", icon: "M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z", label: "Log" },
      { id: "insights", icon: "M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z", label: "Insights" },
      { id: "settings", icon: "M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5zm7.43-2.53a7.5 7.5 0 000-1.94l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.61-.22l-2.49 1a7.3 7.3 0 00-1.68-.98l-.38-2.65A.49.49 0 0014 2h-4a.49.49 0 00-.5.42l-.38 2.65a7.3 7.3 0 00-1.68.98l-2.49-1a.5.5 0 00-.61.22l-2 3.46a.49.49 0 00.12.64l2.11 1.65a7.5 7.5 0 000 1.94l-2.11 1.65a.5.5 0 00-.12.64l2 3.46a.5.5 0 00.61.22l2.49-1a7.3 7.3 0 001.68.98l.38 2.65A.49.49 0 0010 22h4a.49.49 0 00.5-.42l.38-2.65a7.3 7.3 0 001.68-.98l2.49 1a.5.5 0 00.61-.22l2-3.46a.5.5 0 00-.12-.64l-2.11-1.65z", label: "Settings" },
    ];
    return (
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "linear-gradient(to top, #0c0a1d, rgba(12,10,29,0.95))", borderTop: "1px solid rgba(245,216,130,0.1)" }}>
        {items.map((it) => (
          <button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active === it.id ? "#f5d882" : "rgba(255,255,255,0.3)"}><path d={it.icon} /></svg>
            <span className="text-[9px]" style={{ color: active === it.id ? "#f5d882" : "rgba(255,255,255,0.3)" }}>{it.label}</span>
          </button>
        ))}
      </nav>
    );
  };

  const bbtPoints = [36.2, 36.3, 36.1, 36.4, 36.6, 36.8, 36.7];

  return (
    <div className="min-h-screen pb-20 relative" style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`@keyframes twinkle { 0%,100% { opacity:0.2 } 50% { opacity:1 } }`}</style>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="absolute rounded-full" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 23) % 100}%`, width: i % 5 === 0 ? 2 : 1, height: i % 5 === 0 ? 2 : 1, background: i % 7 === 0 ? "#f5d882" : "#fff", animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.3}s`, opacity: 0.4 }} />
      ))}

      <div className="relative z-10 px-5 pt-14">
        <h1 className="text-2xl font-light tracking-widest text-center mb-1" style={{ color: "#f5d882", fontFamily: "Georgia, serif" }}>Luna</h1>
        <p className="text-center text-xs mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>Good evening, Sarah</p>

        <div className="flex gap-1 p-1 rounded-full mb-6" style={{ background: "rgba(245,216,130,0.08)" }}>
          {modes.map((m) => (
            <button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-2 rounded-full text-[10px] font-medium tracking-wider border-0 cursor-pointer transition-all" style={{ background: mode === m.key ? "rgba(245,216,130,0.2)" : "transparent", color: mode === m.key ? "#f5d882" : "rgba(255,255,255,0.3)" }}>
              {m.label}
            </button>
          ))}
        </div>

        {mode === "cycle" && (
          <>
            <div className="flex justify-center mb-6">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <defs><linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f5d882" /><stop offset="100%" stopColor="#e879a0" /></linearGradient></defs>
                <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(245,216,130,0.08)" strokeWidth="8" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="url(#ringG)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(14 / 28) * 534} ${534 - (14 / 28) * 534}`} transform="rotate(-90 100 100)" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(245,216,130,0.05)" strokeWidth="1" />
                <text x="100" y="82" textAnchor="middle" fill="#f5d882" fontSize="36" fontFamily="Georgia, serif">14</text>
                <text x="100" y="102" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">of 28 days</text>
                <text x="100" y="125" textAnchor="middle" fill="#e879a0" fontSize="13" fontFamily="Georgia, serif">Ovulation</text>
              </svg>
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(245,216,130,0.06)", border: "1px solid rgba(245,216,130,0.1)" }}>
              <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Days until period</p>
              <p className="text-2xl font-light" style={{ color: "#f5d882", fontFamily: "Georgia, serif" }}>14 days</p>
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(232,121,160,0.06)", border: "1px solid rgba(232,121,160,0.1)" }}>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>Your energy peaks now — great time for connection</p>
              <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>Phase-specific insight</p>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "rgba(245,216,130,0.06)" }}>
                <p className="text-lg" style={{ color: "#f5d882" }}>Good</p>
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Mood</p>
              </div>
              <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "rgba(245,216,130,0.06)" }}>
                <p className="text-lg" style={{ color: "#f5d882" }}>High</p>
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Energy</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-full text-sm font-medium border-0 cursor-pointer" style={{ background: "linear-gradient(135deg, #f5d882, #d4a843)", color: "#0c0a1d" }}>+ Quick Log</button>
          </>
        )}

        {mode === "ttc" && (
          <>
            <div className="rounded-2xl p-5 mb-4 text-center" style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.15)" }}>
              <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Fertile window</p>
              <p className="text-3xl font-light mb-1" style={{ color: "#0d9488", fontFamily: "Georgia, serif" }}>2 days left</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Ovulation expected in 2 days</p>
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(245,216,130,0.06)", border: "1px solid rgba(245,216,130,0.1)" }}>
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>BBT — Last 7 days</p>
              <svg width="100%" height="60" viewBox="0 0 280 60" preserveAspectRatio="none">
                <polyline points={bbtPoints.map((v, i) => `${i * 46},${60 - ((v - 36) * 60)}`).join(" ")} fill="none" stroke="#0d9488" strokeWidth="2" />
                {bbtPoints.map((v, i) => <circle key={i} cx={i * 46} cy={60 - ((v - 36) * 60)} r="3" fill="#0d9488" />)}
              </svg>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "rgba(13,148,136,0.08)" }}>
                <p className="text-lg font-medium" style={{ color: "#0d9488" }}>High</p>
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Conception probability</p>
              </div>
              <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "rgba(245,216,130,0.06)" }}>
                <p className="text-lg font-medium" style={{ color: "#f5d882" }}>32%</p>
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>Likelihood</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-full text-sm font-medium border-0 cursor-pointer" style={{ background: "linear-gradient(135deg, #0d9488, #0f766e)", color: "#fff" }}>Log Intercourse</button>
          </>
        )}

        {mode === "pregnancy" && (
          <>
            <div className="flex justify-center mb-5">
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(245,216,130,0.08)" strokeWidth="6" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="#f5d882" strokeWidth="6" strokeDasharray={`${(12 / 40) * 440} ${440 - (12 / 40) * 440}`} transform="rotate(-90 80 80)" strokeLinecap="round" />
                <text x="80" y="70" textAnchor="middle" fill="#f5d882" fontSize="32" fontFamily="Georgia, serif">12</text>
                <text x="80" y="90" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">weeks</text>
                <text x="80" y="112" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="10">Trimester 1</text>
              </svg>
            </div>
            <div className="rounded-2xl p-4 mb-3 text-center" style={{ background: "rgba(245,216,130,0.06)", border: "1px solid rgba(245,216,130,0.1)" }}>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Baby is the size of a</p>
              <p className="text-xl font-light" style={{ color: "#f5d882", fontFamily: "Georgia, serif" }}>Lime</p>
            </div>
            <div className="rounded-2xl p-4 mb-3" style={{ background: "rgba(232,121,160,0.06)", border: "1px solid rgba(232,121,160,0.1)" }}>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Due date countdown</p>
              <p className="text-2xl font-light" style={{ color: "#e879a0", fontFamily: "Georgia, serif" }}>189 days to go</p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-[10px] mb-1" style={{ color: "rgba(255,255,255,0.3)" }}><span>Trimester 1</span><span>Trimester 2</span><span>Trimester 3</span></div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(245,216,130,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: "33%", background: "linear-gradient(90deg, #f5d882, #e879a0)" }} />
              </div>
            </div>
            <div className="rounded-2xl p-4 mb-3" style={{ background: "rgba(245,216,130,0.04)" }}>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>Milestone: Risk of miscarriage drops significantly this week</p>
            </div>
          </>
        )}

        <div className="flex items-center justify-center gap-2 mt-5 mb-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z" /></svg>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>Your data stays on your device</span>
        </div>
      </div>
      <Nav active="home" />
    </div>
  );
}