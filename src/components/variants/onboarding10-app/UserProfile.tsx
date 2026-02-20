"use client";
import { useState } from "react";
export default function UserProfile() {
  const [tab]=useState("profile");
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"#faf5eb",borderTop:"1px solid rgba(232,115,90,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#e8735a":"rgba(0,0,0,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#e8735a":"rgba(0,0,0,0.3)"}}>{it.label}</span></button>))}</nav>); };
  const badges=["First Log","7-Day Streak","Cycle Expert","Community Helper"];
  return (
    <div className="min-h-screen pb-20" style={{background:"#faf5eb",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-3" style={{background:"rgba(0,0,0,0.04)",color:"#e8735a"}}>S</div>
          <h1 className="text-xl font-medium" style={{color:"#2d2520"}}>Sarah Mitchell</h1>
          <p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>Member since Jan 2024</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="rounded-xl p-3 text-center" style={{background:"rgba(0,0,0,0.04)"}}><p className="text-xl font-medium" style={{color:"#e8735a"}}>12</p><p className="text-[10px]" style={{color:"rgba(0,0,0,0.4)"}}>Cycles</p></div>
          <div className="rounded-xl p-3 text-center" style={{background:"rgba(0,0,0,0.04)"}}><p className="text-xl font-medium" style={{color:"#e8735a"}}>28</p><p className="text-[10px]" style={{color:"rgba(0,0,0,0.4)"}}>Avg Days</p></div>
          <div className="rounded-xl p-3 text-center" style={{background:"rgba(0,0,0,0.04)"}}><p className="text-xl font-medium" style={{color:"#e8735a"}}>89</p><p className="text-[10px]" style={{color:"rgba(0,0,0,0.4)"}}>Logged</p></div>
        </div>
        <div className="mb-6"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(0,0,0,0.4)"}}>ACHIEVEMENTS</p><div className="flex flex-wrap gap-2">{badges.map(b=>(<div key={b} className="px-3 py-2 rounded-full text-xs" style={{background:"rgba(0,0,0,0.04)",color:"#2d2520"}}>{b}</div>))}</div></div>
        <div className="rounded-2xl p-4 mb-4 flex items-center justify-between" style={{background:"rgba(0,0,0,0.04)"}}><div><p className="text-sm font-medium" style={{color:"#2d2520"}}>Subscription</p><p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>Premium · Renews Feb 2025</p></div><span className="text-xs font-semibold" style={{color:"#e8735a"}}>ACTIVE</span></div>
        <div className="rounded-2xl p-4 mb-4 flex items-center justify-between" style={{background:"rgba(0,0,0,0.04)"}}><div><p className="text-sm font-medium" style={{color:"#2d2520"}}>Devices</p><p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>Apple Watch, Oura Ring</p></div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg></div>
      </div>
      <Nav active="settings"/>
    </div>
  );
}
