"use client";
import { useState } from "react";
export default function DailyLog() {
  const [mode, setMode] = useState<"cycle"|"ttc"|"pregnancy">("cycle");
  const [selectedMood, setSelectedMood] = useState("good");
  const [selectedEnergy, setSelectedEnergy] = useState("high");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(["cramps"]);
  const [selectedFlow, setSelectedFlow] = useState("medium");
  const modes = [{key:"cycle" as const,label:"Cycle"},{key:"ttc" as const,label:"TTC"},{key:"pregnancy" as const,label:"Pregnancy"}];
  const moods = ["Great","Good","Okay","Low","Awful"];
  const energyLevels = ["Very High","High","Medium","Low","Exhausted"];
  const symptoms = ["Cramps","Bloating","Headache","Breast tenderness","Back pain","Acne","Fatigue","Nausea"];
  const flows = ["None","Spotting","Light","Medium","Heavy"];
  const ttcExtras = ["CM: Dry","CM: Sticky","CM: Creamy","CM: Egg white","OPK: Negative","OPK: Positive"];
  const pregExtras = ["Morning sickness","Heartburn","Swelling","Baby movement","Pelvic pressure"];
  const toggleSymptom = (s: string) => setSelectedSymptoms(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev,s]);
  const Nav = ({active="log"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"linear-gradient(to top, #0c0a1d, rgba(12,10,29,0.95))",borderTop:"1px solid rgba(245,216,130,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#f5d882":"rgba(255,255,255,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#f5d882":"rgba(255,255,255,0.3)"}}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20 relative" style={{background:"linear-gradient(165deg, #0c0a1d 0%, #1a0533 50%, #0c0a1d 100%)",fontFamily:"system-ui"}}>
      <div className="relative z-10 px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest mb-1" style={{color:"#f5d882",fontFamily:"Georgia, serif"}}>Daily Log</h1>
        <p className="text-xs mb-5" style={{color:"rgba(255,255,255,0.3)"}}>January 18 · Day 18</p>
        <div className="flex gap-1 p-1 rounded-full mb-6" style={{background:"rgba(245,216,130,0.08)"}}>
          {modes.map(m=>(<button key={m.key} onClick={()=>setMode(m.key)} className="flex-1 py-2 rounded-full text-[10px] font-medium border-0 cursor-pointer" style={{background:mode===m.key?"rgba(245,216,130,0.2)":"transparent",color:mode===m.key?"#f5d882":"rgba(255,255,255,0.3)"}}>{m.label}</button>))}
        </div>
        <div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>MOOD</p><div className="flex flex-wrap gap-2">{moods.map(m=>(<button key={m} onClick={()=>setSelectedMood(m.toLowerCase())} className="px-4 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedMood===m.toLowerCase()?"rgba(245,216,130,0.2)":"rgba(255,255,255,0.05)",color:selectedMood===m.toLowerCase()?"#f5d882":"rgba(255,255,255,0.4)"}}>{m}</button>))}</div></div>
        <div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>ENERGY</p><div className="flex flex-wrap gap-2">{energyLevels.map(e=>(<button key={e} onClick={()=>setSelectedEnergy(e.toLowerCase())} className="px-4 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedEnergy===e.toLowerCase()?"rgba(245,216,130,0.2)":"rgba(255,255,255,0.05)",color:selectedEnergy===e.toLowerCase()?"#f5d882":"rgba(255,255,255,0.4)"}}>{e}</button>))}</div></div>
        {mode==="cycle"&&<div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>FLOW</p><div className="flex flex-wrap gap-2">{flows.map(f=>(<button key={f} onClick={()=>setSelectedFlow(f.toLowerCase())} className="px-4 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedFlow===f.toLowerCase()?"rgba(232,121,160,0.3)":"rgba(255,255,255,0.05)",color:selectedFlow===f.toLowerCase()?"#e879a0":"rgba(255,255,255,0.4)"}}>{f}</button>))}</div></div>}
        <div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>SYMPTOMS</p><div className="flex flex-wrap gap-2">{symptoms.map(s=>(<button key={s} onClick={()=>toggleSymptom(s.toLowerCase())} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedSymptoms.includes(s.toLowerCase())?"rgba(245,216,130,0.2)":"rgba(255,255,255,0.05)",color:selectedSymptoms.includes(s.toLowerCase())?"#f5d882":"rgba(255,255,255,0.4)"}}>{s}</button>))}</div></div>
        {mode==="ttc"&&<div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>FERTILITY</p><div className="flex flex-wrap gap-2">{ttcExtras.map(t=>(<button key={t} onClick={()=>toggleSymptom(t.toLowerCase())} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedSymptoms.includes(t.toLowerCase())?"rgba(13,148,136,0.3)":"rgba(255,255,255,0.05)",color:selectedSymptoms.includes(t.toLowerCase())?"#0d9488":"rgba(255,255,255,0.4)"}}>{t}</button>))}</div></div>}
        {mode==="pregnancy"&&<div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>PREGNANCY</p><div className="flex flex-wrap gap-2">{pregExtras.map(p=>(<button key={p} onClick={()=>toggleSymptom(p.toLowerCase())} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedSymptoms.includes(p.toLowerCase())?"rgba(245,216,130,0.2)":"rgba(255,255,255,0.05)",color:selectedSymptoms.includes(p.toLowerCase())?"#f5d882":"rgba(255,255,255,0.4)"}}>{p}</button>))}</div></div>}
        <button className="w-full py-3 rounded-full text-sm font-medium border-0 cursor-pointer mb-4" style={{background:"linear-gradient(135deg, #f5d882, #d4a843)",color:"#0c0a1d"}}>Save Log</button>
        <div className="flex items-center justify-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(255,255,255,0.2)"}}>Only you can see your logs</span></div>
      </div>
      <Nav active="log"/>
    </div>
  );
}
