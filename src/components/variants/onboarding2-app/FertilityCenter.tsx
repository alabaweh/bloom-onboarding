"use client";
import { useState } from "react";

export default function FertilityCenter() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [lhResults, setLhResults] = useState<string[]>([]);
  const modes = [{ key: "cycle" as const, label: "Cycle" }, { key: "ttc" as const, label: "TTC" }, { key: "pregnancy" as const, label: "Pregnancy" }];
  const Nav = ({ active = "home" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  const toggleLh = (day: string) => setLhResults(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);

  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>Fertility Center</h1>
        <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {modes.map(m => (<button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase border-0 cursor-pointer bg-transparent" style={{ color: mode === m.key ? "#c8352e" : "#999", borderBottom: mode === m.key ? "2px solid #c8352e" : "2px solid transparent" }}>{m.label}</button>))}
        </div>
        {mode === "cycle" && (<>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>FERTILE WINDOW</p>
            <p className="text-sm" style={{ color: "#1a1a1a" }}>Jan 12 — Jan 16</p>
            <p className="text-xs mt-1" style={{ color: "#999" }}>Ovulation estimated: Jan 14</p>
          </div>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>CURRENT FERTILITY</p>
            <div className="h-2 mb-2" style={{ background: "#e5e5e5" }}><div className="h-full" style={{ width: "75%", background: "#c8352e" }} /></div>
            <p className="text-sm font-semibold" style={{ color: "#c8352e" }}>High</p>
          </div>
        </>)}
        {mode === "ttc" && (<>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>LH TEST LOG</p>
            <div className="flex flex-wrap gap-2">
              {["Day 10","Day 11","Day 12","Day 13","Day 14"].map(d => (
                <button key={d} onClick={() => toggleLh(d)} className="px-4 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: lhResults.includes(d) ? "#c8352e" : "#fff", color: lhResults.includes(d) ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{d} {lhResults.includes(d) ? "+" : "−"}</button>
              ))}
            </div>
          </div>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>CONCEPTION PROBABILITY</p>
            <p className="text-3xl font-bold" style={{ color: "#c8352e" }}>32%</p>
            <p className="text-xs mt-1" style={{ color: "#999" }}>Based on cycle day and symptoms</p>
          </div>
          <div className="p-4 mb-4 flex items-center justify-between" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <div><p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Partner Sharing</p><p className="text-xs" style={{ color: "#999" }}>Share fertile window with partner</p></div>
            <div className="w-10 h-6 rounded-full relative cursor-pointer" style={{ background: "#e5e5e5" }}><div className="w-4 h-4 rounded-full absolute top-1 left-1" style={{ background: "#fff" }} /></div>
          </div>
        </>)}
        {mode === "pregnancy" && (<>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>NEXT APPOINTMENT</p>
            <p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Week 12 Ultrasound</p>
            <p className="text-xs mt-1" style={{ color: "#999" }}>NT scan and blood work</p>
          </div>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>PRENATAL VITAMINS</p>
            <p className="text-sm" style={{ color: "#1a1a1a" }}>Folic acid, Iron, DHA — daily</p>
          </div>
        </>)}
        <div className="flex items-center justify-center gap-2 mt-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><span className="text-[10px]" style={{ color: "#999" }}>Your fertility data is encrypted</span></div>
      </div>
      <Nav active="home" />
    </div>
  );
}