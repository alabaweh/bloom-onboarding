"use client";
import { useState } from "react";

export default function Goals() {
  const [selected, setSelected] = useState<string|null>(null);
  const goals = [{title:"Track my cycle",desc:"Understand your rhythm and predict your period"},{title:"Trying to conceive",desc:"Optimize fertile windows and track ovulation"},{title:"Pregnancy",desc:"Week-by-week guidance through your journey"},{title:"General wellness",desc:"Holistic insights for everyday health"}];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#f4f1ec", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "Georgia, serif", color: "#2d3a28" }}>Your goal</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(45,58,40,0.5)" }}>What brings you to Sage?</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {goals.map(g=>(
          <button key={g.title} onClick={()=>setSelected(g.title)} className="w-full p-5 rounded-2xl text-left transition-all cursor-pointer" style={{background:selected===g.title?"#6b8f5e":"rgba(107,143,94,0.08)",border:selected===g.title?"2px solid #6b8f5e":"2px solid rgba(0,0,0,0.06)"}}>
            <h3 className="text-sm font-bold mb-1" style={{color:selected===g.title?"#ffffff":"#2d3a28"}}>{g.title}</h3>
            <p className="text-xs" style={{color:selected===g.title?"#ffffff":"rgba(45,58,40,0.5)"}}>{g.desc}</p>
          </button>
        ))}
      </div>
      <div className="flex gap-2 mt-8">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===6?24:8,height:8,background:i===6?"#6b8f5e":"rgba(0,0,0,0.12)"}}/>))}</div>
    </div>
  );
}
