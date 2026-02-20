"use client";
import { useState } from "react";

export default function Period() {
  const [selected, setSelected] = useState<number|null>(null);
  const options = ["Less than 3 days","3-4 days","5-6 days","7+ days","It varies","Not sure"];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#f0eded", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "system-ui, sans-serif", color: "#2d2522" }}>Your period</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(45,37,34,0.5)" }}>How long does your period typically last?</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {options.map((o,i)=>(
          <button key={i} onClick={()=>setSelected(i)} className="w-full py-4 px-5 rounded-2xl text-left text-sm font-medium transition-all cursor-pointer" style={{background:selected===i?"#8a7060":"rgba(138,112,96,0.06)",color:selected===i?"#ffffff":"#2d2522",border:selected===i?"2px solid #8a7060":"2px solid rgba(0,0,0,0.06)"}}>{o}</button>
        ))}
      </div>
      <div className="flex gap-2 mt-8">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===4?24:8,height:8,background:i===4?"#8a7060":"rgba(0,0,0,0.12)"}}/>))}</div>
    </div>
  );
}
