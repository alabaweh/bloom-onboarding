"use client";
import { useState } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<string|null>(null);
  const goals = [{title:"Track my cycle",desc:"Understand your rhythm and predict your period"},{title:"Trying to conceive",desc:"Optimize fertile windows and track ovulation"},{title:"Pregnancy",desc:"Week-by-week guidance through your journey"},{title:"General wellness",desc:"Holistic insights for everyday health"}];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#2a1f14", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "Georgia, serif", color: "#f0e4d0" }}>Your goal</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(240,228,208,0.4)" }}>What brings you to Sola?</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {goals.map(g=>(
          <button key={g.title} onClick={()=>setSelected(g.title)} className="w-full p-5 rounded-2xl text-left transition-all cursor-pointer" style={{background:selected===g.title?"#d4a24e":"rgba(212,162,78,0.08)",border:selected===g.title?"2px solid #d4a24e":"2px solid rgba(255,255,255,0.06)"}}>
            <h3 className="text-sm font-bold mb-1" style={{color:selected===g.title?"#2a1f14":"#f0e4d0"}}>{g.title}</h3>
            <p className="text-xs" style={{color:selected===g.title?"#2a1f14":"rgba(240,228,208,0.4)"}}>{g.desc}</p>
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-8">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===6?24:8,height:8,background:i===6?"#d4a24e":"rgba(255,255,255,0.15)"}}/>))}</div>
    </div>
  );
}
