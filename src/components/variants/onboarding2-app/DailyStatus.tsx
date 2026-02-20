"use client";
import { useState } from "react";

export default function DailyStatus() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [waterCount, setWaterCount] = useState(4);
  const modes = [{ key: "cycle" as const, label: "Cycle" }, { key: "ttc" as const, label: "TTC" }, { key: "pregnancy" as const, label: "Pregnancy" }];
  const Nav = ({ active = "home" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>Today&apos;s Status</h1>
        <p className="text-xs mb-5" style={{ color: "#999" }}>January 18 · Cycle Day 18</p>
        <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {modes.map(m => (<button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase border-0 cursor-pointer bg-transparent" style={{ color: mode === m.key ? "#c8352e" : "#999", borderBottom: mode === m.key ? "2px solid #c8352e" : "2px solid transparent" }}>{m.label}</button>))}
        </div>
        {mode === "cycle" && (<>
          <div className="p-4 mb-4" style={{ borderLeft: "3px solid #c8352e" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#c8352e" }}>LUTEAL PHASE</p>
            <p className="text-sm" style={{ color: "#1a1a1a" }}>Progesterone is rising. You may feel more tired and crave comfort foods. This is completely normal.</p>
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>HORMONE LEVELS</p>
            {[{name:"Estrogen",level:40},{name:"Progesterone",level:75},{name:"LH",level:15}].map(h => (
              <div key={h.name} className="flex items-center gap-3 mb-2"><span className="text-xs w-24" style={{color:"#1a1a1a"}}>{h.name}</span><div className="flex-1 h-1.5" style={{background:"#e5e5e5"}}><div className="h-full" style={{width:`${h.level}%`,background:"#c8352e"}} /></div><span className="text-[10px] w-8 text-right" style={{color:"#999"}}>{h.level}%</span></div>
            ))}
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>RECOMMENDED</p>
            {["Light yoga or stretching","Warm herbal tea","Extra sleep tonight"].map(a => (
              <div key={a} className="flex items-center gap-2 py-2" style={{ borderBottom: "1px solid #f0f0f0" }}><div className="w-1.5 h-1.5 rounded-full" style={{background:"#c8352e"}} /><span className="text-sm" style={{color:"#1a1a1a"}}>{a}</span></div>
            ))}
          </div>
        </>)}
        {mode === "ttc" && (<>
          <div className="p-4 mb-4" style={{ borderLeft: "3px solid #c8352e" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#c8352e" }}>POST-OVULATION</p>
            <p className="text-sm" style={{ color: "#1a1a1a" }}>You are in the two-week wait. Try to relax and avoid symptom-spotting. Implantation may occur in 6-12 days.</p>
          </div>
        </>)}
        {mode === "pregnancy" && (<>
          <div className="p-4 mb-4" style={{ borderLeft: "3px solid #c8352e" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "#c8352e" }}>WEEK 12</p>
            <p className="text-sm" style={{ color: "#1a1a1a" }}>Baby is about 2 inches long. The risk of miscarriage drops significantly. Most organs have formed and are maturing.</p>
          </div>
        </>)}
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>WATER INTAKE</p>
          <div className="flex gap-2">
            {Array.from({length:8}).map((_,i) => (
              <button key={i} onClick={() => setWaterCount(i+1)} className="w-8 h-8 rounded-full border-0 cursor-pointer" style={{ background: i < waterCount ? "#c8352e" : "#e5e5e5" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill={i < waterCount ? "#fff" : "#999"} className="mx-auto"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
              </button>
            ))}
          </div>
          <p className="text-[10px] mt-2" style={{ color: "#999" }}>{waterCount}/8 glasses today</p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><span className="text-[10px]" style={{ color: "#999" }}>Your data stays on your device</span></div>
      </div>
      <Nav active="home" />
    </div>
  );
}