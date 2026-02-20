"use client";
import { useState } from "react";

export default function Notifications() {
  const [enabled, setEnabled] = useState<string[]>(["period","fertile"]);
  const notifs = [{id:"period",title:"Period reminders",desc:"Get notified before your period starts"},{id:"fertile",title:"Fertile window",desc:"Know your most fertile days"},{id:"daily",title:"Daily check-in",desc:"Gentle reminder to log your day"},{id:"insights",title:"Weekly insights",desc:"Personalized wellness updates"}];
  const toggle = (id:string) => setEnabled(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#2a1f14", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "Georgia, serif", color: "#f0e4d0" }}>Stay in tune</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(240,228,208,0.4)" }}>Choose which notifications matter to you</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {notifs.map(n=>(
          <button key={n.id} onClick={()=>toggle(n.id)} className="w-full p-4 rounded-2xl text-left flex items-center gap-4 transition-all cursor-pointer" style={{background:"rgba(212,162,78,0.08)",border:enabled.includes(n.id)?"2px solid #d4a24e":"2px solid rgba(255,255,255,0.06)"}}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:enabled.includes(n.id)?"#d4a24e":"rgba(255,255,255,0.06)"}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={enabled.includes(n.id)?"#2a1f14":"rgba(240,228,208,0.4)"}><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
            </div>
            <div className="flex-1"><h3 className="text-sm font-medium" style={{color:"#f0e4d0"}}>{n.title}</h3><p className="text-[11px]" style={{color:"rgba(240,228,208,0.4)"}}>{n.desc}</p></div>
            <div className="w-10 h-6 rounded-full flex items-center px-0.5 transition-all" style={{background:enabled.includes(n.id)?"#d4a24e":"rgba(255,255,255,0.06)"}}>
              <div className="w-5 h-5 rounded-full bg-white transition-all" style={{marginLeft:enabled.includes(n.id)?16:0}}/>
            </div>
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-8">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===7?24:8,height:8,background:i===7?"#d4a24e":"rgba(255,255,255,0.15)"}}/>))}</div>
    </div>
  );
}
