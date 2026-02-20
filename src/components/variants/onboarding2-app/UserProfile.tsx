"use client";
import { useState } from "react";

export default function UserProfile() {
  const [activeNav] = useState("settings");
  const Nav = ({ active = "settings" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  const badges = ["First Log","7-Day Streak","Cycle Expert","Community Helper"];
  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-3" style={{ background: "#e5e5e5", color: "#999" }}>S</div>
          <h1 className="text-xl font-bold" style={{ color: "#1a1a1a" }}>Sarah Mitchell</h1>
          <p className="text-xs" style={{ color: "#999" }}>Member since Jan 2024</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 text-center" style={{ background: "#fff", border: "1px solid #e5e5e5" }}><p className="text-xl font-bold" style={{color:"#c8352e"}}>12</p><p className="text-[10px]" style={{color:"#999"}}>Cycles Tracked</p></div>
          <div className="p-3 text-center" style={{ background: "#fff", border: "1px solid #e5e5e5" }}><p className="text-xl font-bold" style={{color:"#c8352e"}}>28</p><p className="text-[10px]" style={{color:"#999"}}>Avg Length</p></div>
          <div className="p-3 text-center" style={{ background: "#fff", border: "1px solid #e5e5e5" }}><p className="text-xl font-bold" style={{color:"#c8352e"}}>89</p><p className="text-[10px]" style={{color:"#999"}}>Days Logged</p></div>
        </div>
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>ACHIEVEMENTS</p>
          <div className="flex flex-wrap gap-2">
            {badges.map(b => (<div key={b} className="px-3 py-2 text-xs font-medium" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>{b}</div>))}
          </div>
        </div>
        <div className="p-4 mb-4 flex items-center justify-between" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
          <div><p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Subscription</p><p className="text-xs" style={{ color: "#999" }}>Premium · Renews Feb 2025</p></div>
          <span className="text-xs font-semibold" style={{ color: "#c8352e" }}>ACTIVE</span>
        </div>
        <div className="p-4 mb-4 flex items-center justify-between" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
          <div><p className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Connected Devices</p><p className="text-xs" style={{ color: "#999" }}>Apple Watch, Oura Ring</p></div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>
      <Nav active={activeNav} />
    </div>
  );
}