"use client";
import { useState } from "react";

export default function Profile() {
  const [age, setAge] = useState<string|null>(null);
  const ages = ["Under 18", "18-24", "25-30", "31-35", "36-40", "40+"];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10" style={{ background: "#faf6f0", fontFamily: "system-ui, sans-serif" }}>
      <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "Georgia, serif", color: "#3d2e1f" }}>About you</h2>
      <p className="text-sm mb-8 text-center" style={{ color: "rgba(61,46,31,0.5)" }}>This helps Dune personalize your experience</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {ages.map(a => (
          <button key={a} onClick={() => setAge(a)} className="w-full py-4 px-5 rounded-2xl text-left text-sm font-medium transition-all duration-200 cursor-pointer" style={{ background: age === a ? "#c2956b" : "rgba(194,149,107,0.06)", color: age === a ? "#ffffff" : "#3d2e1f", border: age === a ? "2px solid #c2956b" : "2px solid rgba(0,0,0,0.06)" }}>{a}</button>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-8"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(0,0,0,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(0,0,0,0.2)"}}>Your data stays private</span></div>
      <div className="flex gap-2 mt-6">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===3?24:8,height:8,background:i===3?"#c2956b":"rgba(0,0,0,0.12)"}}/>))}</div>
    </div>
  );
}
