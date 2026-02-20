"use client";
import { useState } from "react";

export default function Symptoms() {
  const [selected, setSelected] = useState<string[]>([]);
  const symptoms = ["Cramps","Bloating","Headache","Fatigue","Mood swings","Breast tenderness","Acne","Back pain","Cravings","Insomnia","Nausea","Anxiety"];
  const toggle = (s:string) => setSelected(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev, s]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#1a1210", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "Georgia, serif", color: "#f5e6dc" }}>Your symptoms</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(245,230,220,0.4)" }}>Select all that you commonly experience</p>
      <div className="flex flex-wrap gap-2 justify-center max-w-sm">
        {symptoms.map(s=>(
          <button key={s} onClick={()=>toggle(s)} className="px-4 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer" style={{background:selected.includes(s)?"#d4663a":"rgba(212,102,58,0.08)",color:selected.includes(s)?"#1a1210":"#f5e6dc",border:selected.includes(s)?"2px solid #d4663a":"2px solid rgba(255,255,255,0.06)"}}>{s}</button>
        ))}
      </div>
      {selected.length>0&&<p className="text-xs mt-4" style={{color:"#d4663a"}}>{selected.length} selected</p>}
      <div className="flex gap-2 mt-8">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===5?24:8,height:8,background:i===5?"#d4663a":"rgba(255,255,255,0.15)"}}/>))}</div>
    </div>
  );
}
