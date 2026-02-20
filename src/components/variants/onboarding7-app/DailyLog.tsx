"use client";
import { useState } from "react";
export default function DailyLog() {
  const [mode, setMode] = useState<"cycle"|"ttc"|"pregnancy">("cycle"); const modes = [{key:"cycle" as const,label:"Cycle"},{key:"ttc" as const,label:"TTC"},{key:"pregnancy" as const,label:"Pregnancy"}];
  const [selectedMood,setSelectedMood]=useState("good");
  const [selectedSymptoms,setSelectedSymptoms]=useState<string[]>(["cramps"]);
  const moods=["Great","Good","Okay","Low","Awful"];
  const symptoms=["Cramps","Bloating","Headache","Breast tenderness","Back pain","Fatigue","Nausea","Insomnia"];
  const flows=["None","Spotting","Light","Medium","Heavy"];
  const ttcExtras=["CM: Dry","CM: Sticky","CM: Creamy","CM: Egg white","OPK: Neg","OPK: Pos"];
  const pregExtras=["Morning sickness","Heartburn","Swelling","Baby movement"];
  const toggle=(s:string)=>setSelectedSymptoms(p=>p.includes(s)?p.filter(x=>x!==s):[...p,s]);
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"rgba(26,16,37,0.95)",borderTop:"1px solid rgba(192,132,252,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#c084fc":"rgba(255,255,255,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#c084fc":"rgba(255,255,255,0.3)"}}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20" style={{background:"#1a1025",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest mb-1" style={{color:"#c084fc",fontFamily:"Georgia, serif"}}>Daily Log</h1>
        <p className="text-xs mb-5" style={{color:"rgba(255,255,255,0.4)"}}>January 18 · Day 18</p>
        <div className="flex gap-1 p-1 rounded-full mb-6" style={{background:"rgba(255,255,255,0.05)"}}>{modes.map(m=>(<button key={m.key} onClick={()=>setMode(m.key)} className="flex-1 py-2 rounded-full text-[10px] font-medium border-0 cursor-pointer" style={{background:mode===m.key?"rgba(255,255,255,0.15)":"transparent",color:mode===m.key?"#c084fc":"rgba(255,255,255,0.4)"}}>{m.label}</button>))}</div>
        <div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>MOOD</p><div className="flex flex-wrap gap-2">{moods.map(m=>(<button key={m} onClick={()=>setSelectedMood(m.toLowerCase())} className="px-4 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedMood===m.toLowerCase()?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.05)",color:selectedMood===m.toLowerCase()?"#c084fc":"rgba(255,255,255,0.4)"}}>{m}</button>))}</div></div>
        {mode==="cycle"&&<div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>FLOW</p><div className="flex flex-wrap gap-2">{flows.map(f=>(<button key={f} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.4)"}}>{f}</button>))}</div></div>}
        <div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>SYMPTOMS</p><div className="flex flex-wrap gap-2">{symptoms.map(s=>(<button key={s} onClick={()=>toggle(s.toLowerCase())} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:selectedSymptoms.includes(s.toLowerCase())?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.05)",color:selectedSymptoms.includes(s.toLowerCase())?"#c084fc":"rgba(255,255,255,0.4)"}}>{s}</button>))}</div></div>
        {mode==="ttc"&&<div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>FERTILITY</p><div className="flex flex-wrap gap-2">{ttcExtras.map(t=>(<button key={t} onClick={()=>toggle(t.toLowerCase())} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.4)"}}>{t}</button>))}</div></div>}
        {mode==="pregnancy"&&<div className="mb-5"><p className="text-[10px] tracking-wider mb-3" style={{color:"rgba(255,255,255,0.4)"}}>PREGNANCY</p><div className="flex flex-wrap gap-2">{pregExtras.map(p=>(<button key={p} onClick={()=>toggle(p.toLowerCase())} className="px-3 py-2 rounded-full text-xs border-0 cursor-pointer" style={{background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.4)"}}>{p}</button>))}</div></div>}
        <button className="w-full py-3 rounded-full text-sm font-medium border-0 cursor-pointer" style={{background:"#c084fc",color:"#1a1025"}}>Save Log</button>
        <div className="flex items-center justify-center gap-2 mt-4 mb-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(255,255,255,0.2)"}}>Your data stays on your device</span></div>
      </div>
      <Nav active="log"/>
    </div>
  );
}
