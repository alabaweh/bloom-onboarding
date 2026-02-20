"use client";
import { useState } from "react";

export default function Calendar() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [selectedDay, setSelectedDay] = useState(14);
  const modes = [{ key: "cycle" as const, label: "Cycle" }, { key: "ttc" as const, label: "TTC" }, { key: "pregnancy" as const, label: "Pregnancy" }];
  const periodDays = [1,2,3,4,5]; const fertileDays = [12,13,14,15,16]; const ovDay = 14;
  const weekDays = ["M","T","W","T","F","S","S"];

  const Nav = ({ active = "calendar" }: { active?: string }) => {
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
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>January 2025</h1>
        <div className="flex gap-0 mb-5" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {modes.map(m => (
            <button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase border-0 cursor-pointer bg-transparent" style={{ color: mode === m.key ? "#c8352e" : "#999", borderBottom: mode === m.key ? "2px solid #c8352e" : "2px solid transparent" }}>{m.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0 mb-2">
          {weekDays.map((d,i) => <div key={i} className="text-center text-[10px] font-semibold py-1" style={{ color: "#999" }}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-0 mb-5">
          {Array.from({length:2}).map((_,i) => <div key={`e${i}`} />)}
          {Array.from({length:31}).map((_,i) => {
            const day = i+1;
            const isPeriod = periodDays.includes(day) && mode !== "pregnancy";
            const isFertile = fertileDays.includes(day) && mode !== "pregnancy";
            const isOv = day === ovDay && mode !== "pregnancy";
            return (
              <button key={day} onClick={() => setSelectedDay(day)} className="aspect-square flex items-center justify-center text-xs font-medium border-0 cursor-pointer relative" style={{ background: isPeriod ? "rgba(200,53,46,0.1)" : isFertile ? "rgba(200,53,46,0.05)" : "transparent", color: day === selectedDay ? "#c8352e" : "#1a1a1a", borderBottom: day === selectedDay ? "2px solid #c8352e" : "2px solid transparent" }}>
                {day}
                {isOv && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#c8352e" }} />}
              </button>
            );
          })}
        </div>
        {selectedDay && (
          <div className="p-4 mb-4" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <p className="text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>January {selectedDay}</p>
            {mode === "cycle" && <p className="text-xs" style={{ color: "#999" }}>{periodDays.includes(selectedDay) ? "Period day — moderate flow expected" : fertileDays.includes(selectedDay) ? "Fertile window — peak fertility" : `Cycle day ${selectedDay}`}</p>}
            {mode === "ttc" && <p className="text-xs" style={{ color: "#999" }}>{fertileDays.includes(selectedDay) ? "High fertility — optimal for conception" : "Low fertility window"}</p>}
            {mode === "pregnancy" && <p className="text-xs" style={{ color: "#999" }}>Week {Math.ceil(selectedDay/7)+8} — Baby developing steadily</p>}
          </div>
        )}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5" style={{ background: "rgba(200,53,46,0.3)" }} /><span className="text-[10px]" style={{ color: "#999" }}>Period</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5" style={{ background: "rgba(200,53,46,0.15)" }} /><span className="text-[10px]" style={{ color: "#999" }}>Fertile</span></div>
          <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c8352e" }} /><span className="text-[10px]" style={{ color: "#999" }}>Ovulation</span></div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          <span className="text-[10px]" style={{ color: "#999" }}>Your data stays on your device</span>
        </div>
      </div>
      <Nav active="calendar" />
    </div>
  );
}