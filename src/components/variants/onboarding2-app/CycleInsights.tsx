"use client";
import { useState } from "react";

export default function CycleInsights() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const modes = [{ key: "cycle" as const, label: "Cycle" }, { key: "ttc" as const, label: "TTC" }, { key: "pregnancy" as const, label: "Pregnancy" }];
  const cycleLengths = [28,27,29,28,30,28,27];
  const Nav = ({ active = "insights" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>Cycle Insights</h1>
        <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {modes.map(m => (<button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase border-0 cursor-pointer bg-transparent" style={{ color: mode === m.key ? "#c8352e" : "#999", borderBottom: mode === m.key ? "2px solid #c8352e" : "2px solid transparent" }}>{m.label}</button>))}
        </div>
        {mode === "cycle" && (<>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Cycle Length — Last 7 Cycles</p>
            <svg width="100%" height="80" viewBox="0 0 280 80" preserveAspectRatio="none">
              {cycleLengths.map((v,i) => (<rect key={i} x={i*40+5} y={80-((v-25)*10)} width="30" height={(v-25)*10} fill={i===cycleLengths.length-1?"#c8352e":"#e5e5e5"} />))}
            </svg>
            <div className="flex justify-between mt-2"><span className="text-[10px]" style={{color:"#999"}}>Jul</span><span className="text-[10px]" style={{color:"#999"}}>Aug</span><span className="text-[10px]" style={{color:"#999"}}>Sep</span><span className="text-[10px]" style={{color:"#999"}}>Oct</span><span className="text-[10px]" style={{color:"#999"}}>Nov</span><span className="text-[10px]" style={{color:"#999"}}>Dec</span><span className="text-[10px] font-semibold" style={{color:"#c8352e"}}>Jan</span></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}><p className="text-xs" style={{color:"#999"}}>AVG LENGTH</p><p className="text-xl font-bold" style={{color:"#1a1a1a"}}>28.1 days</p></div>
            <div className="p-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}><p className="text-xs" style={{color:"#999"}}>VARIATION</p><p className="text-xl font-bold" style={{color:"#1a1a1a"}}>±1.5 days</p></div>
          </div>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>Top Symptoms</p>
            {["Cramps","Bloating","Fatigue"].map((s,i) => (<div key={s} className="flex items-center gap-3 py-2" style={{ borderBottom: i < 2 ? "1px solid #f0f0f0" : "none" }}><div className="h-1.5 flex-1" style={{ background: "#e5e5e5" }}><div className="h-full" style={{ width: `${90-i*20}%`, background: "#c8352e" }} /></div><span className="text-xs w-12 text-right" style={{color:"#1a1a1a"}}>{s}</span></div>))}
          </div>
        </>)}
        {mode === "ttc" && (<>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>Cycles Trying</p>
            <p className="text-3xl font-bold" style={{color:"#1a1a1a"}}>4</p>
          </div>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>Ovulation Consistency</p>
            <p className="text-sm" style={{color:"#1a1a1a"}}>Ovulation detected on days 13-15 across last 4 cycles. Regular pattern.</p>
          </div>
        </>)}
        {mode === "pregnancy" && (<>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>Weight Trend</p>
            <svg width="100%" height="60" viewBox="0 0 280 60" preserveAspectRatio="none">
              <polyline points={[58,58.5,59,59.5,60,61,62].map((v,i) => `${i*46},${60-((v-57)*12)}`).join(" ")} fill="none" stroke="#c8352e" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "#999" }}>Common Symptoms This Trimester</p>
            <p className="text-sm" style={{color:"#1a1a1a"}}>Nausea, fatigue, and breast tenderness are most common in trimester 1.</p>
          </div>
        </>)}
      </div>
      <Nav active="insights" />
    </div>
  );
}