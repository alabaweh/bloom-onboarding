"use client";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [periodReminder, setPeriodReminder] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const Nav = ({ active = "settings" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  const Toggle = ({ on, onToggle }: { on: boolean; onToggle: () => void }) => (
    <button onClick={onToggle} className="w-10 h-6 rounded-full relative border-0 cursor-pointer transition-all" style={{ background: on ? "#c8352e" : "#e5e5e5" }}>
      <div className="w-4 h-4 rounded-full absolute top-1 transition-all" style={{ background: "#fff", left: on ? 22 : 4 }} />
    </button>
  );
  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-6" style={{ color: "#1a1a1a" }}>Settings</h1>
        <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>NOTIFICATIONS</p>
        <div className="mb-5">
          {[{label:"Push Notifications",desc:"Daily reminders and insights",on:notifications,toggle:()=>setNotifications(!notifications)},{label:"Period Reminder",desc:"3 days before predicted start",on:periodReminder,toggle:()=>setPeriodReminder(!periodReminder)}].map(s => (
            <div key={s.label} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid #f0f0f0" }}>
              <div><p className="text-sm font-medium" style={{color:"#1a1a1a"}}>{s.label}</p><p className="text-xs" style={{color:"#999"}}>{s.desc}</p></div>
              <Toggle on={s.on} onToggle={s.toggle} />
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>PRIVACY & SECURITY</p>
        <div className="mb-5">
          <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid #f0f0f0" }}>
            <div><p className="text-sm font-medium" style={{color:"#1a1a1a"}}>Biometric Lock</p><p className="text-xs" style={{color:"#999"}}>Require Face ID/Touch ID</p></div>
            <Toggle on={biometric} onToggle={() => setBiometric(!biometric)} />
          </div>
          <div className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid #f0f0f0" }}>
            <div><p className="text-sm font-medium" style={{color:"#1a1a1a"}}>Data Encryption</p><p className="text-xs" style={{color:"#999"}}>AES-256 encryption enabled</p></div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#c8352e"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
        </div>
        <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>DATA</p>
        <div className="mb-5">
          <button className="w-full py-3 text-sm font-medium text-left border-0 cursor-pointer bg-transparent" style={{ color: "#1a1a1a", borderBottom: "1px solid #f0f0f0" }}>Export My Data</button>
          <button className="w-full py-3 text-sm font-medium text-left border-0 cursor-pointer bg-transparent" style={{ color: "#c8352e", borderBottom: "1px solid #f0f0f0" }}>Delete Account</button>
        </div>
        <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>ABOUT</p>
        <div className="mb-5">
          <div className="flex justify-between py-3" style={{ borderBottom: "1px solid #f0f0f0" }}><span className="text-sm" style={{color:"#1a1a1a"}}>Version</span><span className="text-sm" style={{color:"#999"}}>2.1.0</span></div>
          <div className="flex justify-between py-3" style={{ borderBottom: "1px solid #f0f0f0" }}><span className="text-sm" style={{color:"#1a1a1a"}}>Terms of Service</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg></div>
          <div className="flex justify-between py-3" style={{ borderBottom: "1px solid #f0f0f0" }}><span className="text-sm" style={{color:"#1a1a1a"}}>Privacy Policy</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg></div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><span className="text-[10px]" style={{ color: "#999" }}>Your privacy is our priority</span></div>
      </div>
      <Nav active="settings" />
    </div>
  );
}