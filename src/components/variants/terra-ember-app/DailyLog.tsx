"use client";
import { useState } from "react";
export default function DailyLog() {
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"#1a1210",borderTop:"1px solid rgba(212,102,58,0.15)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#d4663a":"rgba(255,255,255,0.2)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#d4663a":"rgba(255,255,255,0.2)"}}>{it.label}</span></button>))}</nav>); };
  const [mode, setMode] = useState<"cycle"|"ttc"|"pregnancy">("cycle"); const modes = [{key:"cycle" as const,label:"Cycle"},{key:"ttc" as const,label:"TTC"},{key:"pregnancy" as const,label:"Pregnancy"}];
  return (
    <div className="min-h-screen pb-20" style={{background:"#1a1210",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest text-center mb-1" style={{color:"#d4663a",fontFamily:"Georgia, serif"}}>Daily Log</h1>
        <div className="flex gap-1 p-1 rounded-full mb-6" style={{background:"rgba(212,102,58,0.08)"}}>{modes.map(m=>(<button key={m.key} onClick={()=>setMode(m.key)} className="flex-1 py-2 rounded-full text-[10px] font-medium border-0 cursor-pointer" style={{background:mode===m.key?"rgba(255,255,255,0.1)":"transparent",color:mode===m.key?"#d4663a":"rgba(255,255,255,0.4)"}}>{m.label}</button>))}</div>
        <div className="space-y-3">{["Mood","Energy","Sleep","Cramps","Flow"].map(cat=>(<div key={cat} className="rounded-2xl p-4" style={{background:"rgba(212,102,58,0.08)",border:"1px solid rgba(255,255,255,0.06)"}}><p className="text-sm font-medium mb-2" style={{color:"#f5e6dc"}}>{cat}</p><div className="flex gap-2">{[1,2,3,4,5].map(n=>(<button key={n} className="w-10 h-10 rounded-xl border-0 cursor-pointer text-xs" style={{background:n===3?"#d4663a":"transparent",color:n===3?"#1a1210":"rgba(245,230,220,0.4)",border:"1px solid rgba(255,255,255,0.06)"}}>{n}</button>))}</div></div>))}</div>
        <div className="flex items-center justify-center gap-2 mt-4 mb-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(255,255,255,0.2)"}}>Your data stays on your device</span></div>
      </div>
      <Nav active="log"/>
    </div>
  );
}
