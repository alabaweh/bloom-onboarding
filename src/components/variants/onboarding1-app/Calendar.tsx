"use client";
import { useState } from "react";

export default function Calendar() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [selectedDay, setSelectedDay] = useState(14);
  const modes = [{ key: "cycle" as const, label: "Cycle" }, { key: "ttc" as const, label: "TTC" }, { key: "pregnancy" as const, label: "Pregnancy" }];
  const daysInMonth = 31; const startOffset = 2; const periodDays = [1,2,3,4,5]; const fertileDays = [12,13,14,15,16]; const ovulationDay = 14; const today = 18;
  const weekDays = ["M","T","W","T","F","S","S"];
  const getDayColor = (d: number) => { if (mode === "pregnancy") return d <= today ? "rgba(245,216,130,0.15)" : "transparent"; if (periodDays.includes(d)) return "rgba(232,121,160,0.25)"; if (fertileDays.includes(d)) return "rgba(13,148,136,0.2)"; return "transparent"; };
  const getDayText = (d: number) => { if (d === today) return "#f5d882"; if (periodDays.includes(d)) return "#e879a0"; if (fertileDays.includes(d)) return "#0d9488"; return "rgba(255,255,255,0.6)"; };
  const Nav = ({ active = "calendar" }: { active?: string }) => { const items = [{ id: "home", icon: "M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z", label: "Home" },{ id: "calendar", icon: "M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z", label: "Calendar" },{ id: "log", icon: "M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z", label: "Log" },{ id: "insights", icon: "M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z", label: "Insights" },{ id: "settings", icon: "M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z", label: "Settings" }]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "linear-gradient(to top, #0c0a1d, rgba(12,10,29,0.95))", borderTop: "1px solid rgba(245,216,130,0.1)" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active === it.id ? "#f5d882" : "rgba(255,255,255,0.3)"}><path d={it.icon} /></svg><span className="text-[9px]" style={{ color: active === it.id ? "#f5d882" : "rgba(255,255,255,0.3)" }}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20 relative" style={{ background: "linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)", fontFamily: "system-ui" }}>
      <style>{`@keyframes twinkle { 0%,100% { opacity:0.2 } 50% { opacity:1 } }`}</style>
      {Array.from({ length: 20 }).map((_, i) => (<div key={i} className="absolute rounded-full" style={{ left: `${(i*37)%100}%`, top: `${(i*23)%100}%`, width: i%5===0?2:1, height: i%5===0?2:1, background: i%7===0?"#f5d882":"#fff", animation: `twinkle ${2+(i%3)}s ease-in-out infinite`, animationDelay: `${i*0.3}s`, opacity: 0.3 }} />))}
      <div className="relative z-10 px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest text-center mb-1" style={{ color: "#f5d882", fontFamily: "Georgia, serif" }}>January 2025</h1>
        <div className="flex gap-1 p-1 rounded-full mb-5" style={{ background: "rgba(245,216,130,0.08)" }}>
          {modes.map(m => (<button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-2 rounded-full text-[10px] font-medium tracking-wider border-0 cursor-pointer" style={{ background: mode === m.key ? "rgba(245,216,130,0.2)" : "transparent", color: mode === m.key ? "#f5d882" : "rgba(255,255,255,0.3)" }}>{m.label}</button>))}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">{weekDays.map((d,i) => (<div key={i} className="text-center text-[10px] py-1" style={{ color: "rgba(255,255,255,0.3)" }}>{d}</div>))}</div>
        <div className="grid grid-cols-7 gap-1 mb-5">
          {Array.from({ length: startOffset }).map((_,i) => <div key={`e${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_,i) => { const day = i+1; return (
            <button key={day} onClick={() => setSelectedDay(day)} className="aspect-square rounded-xl flex flex-col items-center justify-center border-0 cursor-pointer relative" style={{ background: getDayColor(day), outline: selectedDay === day ? "1.5px solid #f5d882" : "none" }}>
              <span className="text-xs" style={{ color: getDayText(day) }}>{day}</span>
              {day === ovulationDay && mode !== "pregnancy" && <svg width="8" height="8" viewBox="0 0 12 12" className="absolute bottom-0.5"><polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" fill="#f5d882" /></svg>}
            </button>); })}
        </div>
        {selectedDay && (<div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(245,216,130,0.06)", border: "1px solid rgba(245,216,130,0.1)" }}>
          <p className="text-sm mb-1" style={{ color: "#f5d882", fontFamily: "Georgia, serif" }}>January {selectedDay}</p>
          {mode === "cycle" && <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{periodDays.includes(selectedDay) ? "Period day" : fertileDays.includes(selectedDay) ? "Fertile window" : "Cycle day " + selectedDay}</p>}
          {mode === "ttc" && <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{fertileDays.includes(selectedDay) ? "High fertility window" : "Low fertility"}</p>}
          {mode === "pregnancy" && <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Week {8 + Math.floor(selectedDay/7)} — Baby developing</p>}
        </div>)}
        <div className="flex gap-3 mb-4">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{background:"#e879a0"}} /><span className="text-[10px]" style={{color:"rgba(255,255,255,0.4)"}}>Period</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{background:"#0d9488"}} /><span className="text-[10px]" style={{color:"rgba(255,255,255,0.4)"}}>Fertile</span></div>
        </div>
      </div>
      <Nav active="calendar" />
    </div>
  );
}
