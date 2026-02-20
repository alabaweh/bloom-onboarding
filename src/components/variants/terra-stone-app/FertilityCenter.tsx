"use client";
import { useState } from "react";
export default function FertilityCenter() {
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"#f0eded",borderTop:"1px solid rgba(138,112,96,0.12)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#8a7060":"rgba(0,0,0,0.2)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#8a7060":"rgba(0,0,0,0.2)"}}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20" style={{background:"#f0eded",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest text-center mb-1" style={{color:"#8a7060",fontFamily:"system-ui, sans-serif"}}>Fertility</h1>
        <div className="mb-6"/>
        <div className="rounded-2xl p-5 mb-4 text-center" style={{background:"rgba(138,112,96,0.06)",border:"1px solid rgba(0,0,0,0.06)"}}><p className="text-xs" style={{color:"rgba(45,37,34,0.5)"}}>Fertility score</p><p className="text-4xl font-light" style={{color:"#8a7060",fontFamily:"system-ui, sans-serif"}}>78%</p><p className="text-xs mt-1" style={{color:"rgba(45,37,34,0.5)"}}>Based on current cycle data</p></div><div className="space-y-3">{[{l:"Ovulation tracking",v:"Active"},{l:"BBT logging",v:"7 days"},{l:"Cervical mucus",v:"Egg-white"},{l:"LH test",v:"Positive"}].map(s=>(<div key={s.l} className="flex justify-between items-center p-3 rounded-xl" style={{background:"rgba(138,112,96,0.06)",border:"1px solid rgba(0,0,0,0.06)"}}><span className="text-xs" style={{color:"#2d2522"}}>{s.l}</span><span className="text-xs font-medium" style={{color:"#8a7060"}}>{s.v}</span></div>))}</div>
        <div className="flex items-center justify-center gap-2 mt-4 mb-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(0,0,0,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(0,0,0,0.2)"}}>Your data stays on your device</span></div>
      </div>
      <Nav active="home"/>
    </div>
  );
}
