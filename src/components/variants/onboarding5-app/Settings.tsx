"use client";
import { useState } from "react";
export default function Settings() {
  const [notifs,setNotifs]=useState(true);
  const [periodRemind,setPeriodRemind]=useState(true);
  const [bio,setBio]=useState(false);
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"#f5f0eb",borderTop:"1px solid rgba(192,122,80,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#c07a50":"rgba(0,0,0,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#c07a50":"rgba(0,0,0,0.3)"}}>{it.label}</span></button>))}</nav>); };
  const Toggle=({on,onToggle}:{on:boolean;onToggle:()=>void})=>(<button onClick={onToggle} className="w-10 h-6 rounded-full relative border-0 cursor-pointer" style={{background:on?"#c07a50":"rgba(0,0,0,0.04)"}}><div className="w-4 h-4 rounded-full absolute top-1 transition-all" style={{background:on?"#f5f0eb":"rgba(0,0,0,0.4)",left:on?22:4}}/></button>);
  return (
    <div className="min-h-screen pb-20" style={{background:"#f5f0eb",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest mb-6" style={{color:"#c07a50",fontFamily:"Georgia, serif"}}>Settings</h1>
        <p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(0,0,0,0.4)"}}>NOTIFICATIONS</p>
        <div className="mb-5">{[{l:"Push Notifications",d:"Daily reminders",on:notifs,t:()=>setNotifs(!notifs)},{l:"Period Reminder",d:"3 days before",on:periodRemind,t:()=>setPeriodRemind(!periodRemind)}].map(s=>(<div key={s.l} className="flex items-center justify-between py-3" style={{borderBottom:"1px solid rgba(0,0,0,0.04)"}}><div><p className="text-sm font-medium" style={{color:"#3c2f2f"}}>{s.l}</p><p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>{s.d}</p></div><Toggle on={s.on} onToggle={s.t}/></div>))}</div>
        <p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(0,0,0,0.4)"}}>PRIVACY & SECURITY</p>
        <div className="mb-5">
          <div className="flex items-center justify-between py-3" style={{borderBottom:"1px solid rgba(0,0,0,0.04)"}}><div><p className="text-sm font-medium" style={{color:"#3c2f2f"}}>Biometric Lock</p><p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>Face ID / Touch ID</p></div><Toggle on={bio} onToggle={()=>setBio(!bio)}/></div>
          <div className="flex items-center justify-between py-3" style={{borderBottom:"1px solid rgba(0,0,0,0.04)"}}><div><p className="text-sm font-medium" style={{color:"#3c2f2f"}}>Data Encryption</p><p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>AES-256 enabled</p></div><svg width="14" height="14" viewBox="0 0 24 24" fill="#c07a50"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
        </div>
        <p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(0,0,0,0.4)"}}>DATA</p>
        <div className="mb-5">
          <button className="w-full py-3 text-sm font-medium text-left border-0 cursor-pointer bg-transparent" style={{color:"#3c2f2f",borderBottom:"1px solid rgba(0,0,0,0.04)"}}>Export My Data</button>
          <button className="w-full py-3 text-sm font-medium text-left border-0 cursor-pointer bg-transparent" style={{color:"#8b5e3c",borderBottom:"1px solid rgba(0,0,0,0.04)"}}>Delete Account</button>
        </div>
        <p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(0,0,0,0.4)"}}>ABOUT</p>
        <div className="flex justify-between py-3" style={{borderBottom:"1px solid rgba(0,0,0,0.04)"}}><span className="text-sm" style={{color:"#3c2f2f"}}>Version</span><span className="text-sm" style={{color:"rgba(0,0,0,0.4)"}}>2.1.0</span></div>
        <div className="flex justify-between py-3" style={{borderBottom:"1px solid rgba(0,0,0,0.04)"}}><span className="text-sm" style={{color:"#3c2f2f"}}>Privacy Policy</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg></div>
        <div className="flex items-center justify-center gap-2 mt-4 mb-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(0,0,0,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(0,0,0,0.2)"}}>Your data stays on your device</span></div>
      </div>
      <Nav active="settings"/>
    </div>
  );
}
