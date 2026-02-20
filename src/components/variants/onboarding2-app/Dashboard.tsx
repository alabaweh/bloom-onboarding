"use client";
import { useState } from "react";

export default function Dashboard() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const modes = [
    { key: "cycle" as const, label: "Cycle" },
    { key: "ttc" as const, label: "TTC" },
    { key: "pregnancy" as const, label: "Pregnancy" },
  ];

  const Nav = ({ active = "home" }: { active?: string }) => {
    const items = [
      { id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },
      { id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },
      { id: "log", icon: "M12 4v16m8-8H4", label: "Log" },
      { id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },
      { id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", label: "Settings" },
    ];
    return (
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>
        {items.map((it) => (
          <button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg>
            <span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span>
          </button>
        ))}
      </nav>
    );
  };

  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div className="px-5 pt-14">
        <div className="flex justify-between items-baseline mb-1">
          <h1 className="text-3xl font-bold tracking-tight" style={{ color: "#1a1a1a" }}>Vela</h1>
          <span className="text-xs font-medium" style={{ color: "#c8352e" }}>Day 14</span>
        </div>
        <p className="text-xs mb-6" style={{ color: "#999" }}>Good morning, Sarah</p>

        <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {modes.map((m) => (
            <button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase border-0 cursor-pointer transition-all bg-transparent" style={{ color: mode === m.key ? "#c8352e" : "#999", borderBottom: mode === m.key ? "2px solid #c8352e" : "2px solid transparent" }}>
              {m.label}
            </button>
          ))}
        </div>

        {mode === "cycle" && (
          <>
            <div className="flex justify-center mb-6">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="85" fill="none" stroke="#e5e5e5" strokeWidth="2" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="#c8352e" strokeWidth="2" strokeDasharray={`${(14/28)*534} ${534-(14/28)*534}`} transform="rotate(-90 100 100)" strokeLinecap="round" />
                {[0,1,2,3].map(i => <line key={i} x1="100" y1="15" x2="100" y2="10" stroke="#e5e5e5" strokeWidth="1" transform={`rotate(${i*90} 100 100)`} />)}
                <text x="100" y="90" textAnchor="middle" fill="#1a1a1a" fontSize="48" fontWeight="700">14</text>
                <text x="100" y="110" textAnchor="middle" fill="#999" fontSize="11" fontWeight="500">of 28 days</text>
                <text x="100" y="132" textAnchor="middle" fill="#c8352e" fontSize="12" fontWeight="600">OVULATION</text>
              </svg>
            </div>
            <div className="mb-4 p-4" style={{ borderLeft: "3px solid #c8352e" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#999" }}>NEXT PERIOD</p>
              <p className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>14 days</p>
            </div>
            <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
              <p className="text-sm" style={{ color: "#1a1a1a" }}>Peak energy today — ideal for high-intensity exercise</p>
              <p className="text-[10px] mt-1" style={{ color: "#999" }}>Phase-specific insight</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
                <p className="text-lg font-bold" style={{ color: "#1a1a1a" }}>Good</p>
                <p className="text-[10px]" style={{ color: "#999" }}>Mood</p>
              </div>
              <div className="p-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
                <p className="text-lg font-bold" style={{ color: "#1a1a1a" }}>High</p>
                <p className="text-[10px]" style={{ color: "#999" }}>Energy</p>
              </div>
            </div>
            <button className="w-full py-3 text-sm font-semibold border-0 cursor-pointer" style={{ background: "#c8352e", color: "#fff" }}>+ Quick Log</button>
          </>
        )}

        {mode === "ttc" && (
          <>
            <div className="p-5 mb-4 text-center" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: "#999" }}>FERTILE WINDOW</p>
              <p className="text-3xl font-bold mb-1" style={{ color: "#c8352e" }}>2 days left</p>
              <p className="text-xs" style={{ color: "#999" }}>Ovulation expected in 2 days</p>
            </div>
            <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
              <p className="text-xs font-semibold mb-3" style={{ color: "#999" }}>BBT — LAST 7 DAYS</p>
              <svg width="100%" height="60" viewBox="0 0 280 60" preserveAspectRatio="none">
                {[36.2,36.3,36.1,36.4,36.6,36.8,36.7].map((v,i) => <circle key={i} cx={i*46} cy={60-((v-36)*60)} r="3" fill="#c8352e" />)}
                <polyline points={[36.2,36.3,36.1,36.4,36.6,36.8,36.7].map((v,i) => `${i*46},${60-((v-36)*60)}`).join(" ")} fill="none" stroke="#c8352e" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
                <p className="text-lg font-bold" style={{ color: "#c8352e" }}>High</p>
                <p className="text-[10px]" style={{ color: "#999" }}>Conception probability</p>
              </div>
              <div className="p-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
                <p className="text-lg font-bold" style={{ color: "#1a1a1a" }}>32%</p>
                <p className="text-[10px]" style={{ color: "#999" }}>Likelihood</p>
              </div>
            </div>
            <button className="w-full py-3 text-sm font-semibold border-0 cursor-pointer" style={{ background: "#c8352e", color: "#fff" }}>Log Intercourse</button>
          </>
        )}

        {mode === "pregnancy" && (
          <>
            <div className="flex justify-center mb-5">
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e5e5" strokeWidth="2" />
                <circle cx="80" cy="80" r="70" fill="none" stroke="#c8352e" strokeWidth="2" strokeDasharray={`${(12/40)*440} ${440-(12/40)*440}`} transform="rotate(-90 80 80)" strokeLinecap="round" />
                <text x="80" y="70" textAnchor="middle" fill="#1a1a1a" fontSize="36" fontWeight="700">12</text>
                <text x="80" y="90" textAnchor="middle" fill="#999" fontSize="11">weeks</text>
                <text x="80" y="110" textAnchor="middle" fill="#c8352e" fontSize="10" fontWeight="600">TRIMESTER 1</text>
              </svg>
            </div>
            <div className="p-4 mb-3 text-center" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
              <p className="text-xs" style={{ color: "#999" }}>Baby is the size of a</p>
              <p className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Lime</p>
            </div>
            <div className="p-4 mb-3" style={{ borderLeft: "3px solid #c8352e" }}>
              <p className="text-xs" style={{ color: "#999" }}>Due date countdown</p>
              <p className="text-2xl font-bold" style={{ color: "#1a1a1a" }}>189 days to go</p>
            </div>
            <div className="mb-3">
              <div className="flex justify-between text-[10px] mb-1" style={{ color: "#999" }}><span>T1</span><span>T2</span><span>T3</span></div>
              <div className="h-1.5 overflow-hidden" style={{ background: "#e5e5e5" }}>
                <div className="h-full" style={{ width: "33%", background: "#c8352e" }} />
              </div>
            </div>
          </>
        )}

        <div className="flex items-center justify-center gap-2 mt-6 mb-4">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          <span className="text-[10px]" style={{ color: "#999" }}>Your data stays on your device</span>
        </div>
      </div>
      <Nav active="home" />
    </div>
  );
}