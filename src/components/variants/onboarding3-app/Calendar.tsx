"use client";
import { useState } from "react";
export default function Calendar() {
  const [mode, setMode] = useState<"cycle"|"ttc"|"pregnancy">("cycle"); const modes = [{key:"cycle" as const,label:"Cycle"},{key:"ttc" as const,label:"TTC"},{key:"pregnancy" as const,label:"Pregnancy"}];
  const [selectedDay, setSelectedDay] = useState(14);
  const periodDays=[1,2,3,4,5]; const fertileDays=[12,13,14,15,16]; const weekDays=["M","T","W","T","F","S","S"];
  const getDayBg = (d:number)=>{ if(mode==="pregnancy") return d<=18?"rgba(0,0,0,0.08)":"transparent"; if(periodDays.includes(d)) return "rgba(232,121,160,0.2)"; if(fertileDays.includes(d)) return "rgba(13,148,136,0.15)"; return "transparent"; };
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"#fff8f0",borderTop:"1px solid rgba(192,104,64,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#d4a060":"rgba(0,0,0,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#d4a060":"rgba(0,0,0,0.3)"}}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20" style={{background:"#fff8f0",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest text-center mb-1" style={{color:"#d4a060",fontFamily:"Georgia, serif"}}>January 2025</h1>
        <div className="flex gap-1 p-1 rounded-full mb-6" style={{background:"rgba(0,0,0,0.04)"}}>{modes.map(m=>(<button key={m.key} onClick={()=>setMode(m.key)} className="flex-1 py-2 rounded-full text-[10px] font-medium border-0 cursor-pointer" style={{background:mode===m.key?"rgba(0,0,0,0.08)":"transparent",color:mode===m.key?"#d4a060":"rgba(0,0,0,0.4)"}}>{m.label}</button>))}</div>
        <div className="grid grid-cols-7 gap-1 mb-2">{weekDays.map((d,i)=>(<div key={i} className="text-center text-[10px] py-1" style={{color:"rgba(0,0,0,0.4)"}}>{d}</div>))}</div>
        <div className="grid grid-cols-7 gap-1 mb-5">
          {Array.from({length:2}).map((_,i)=><div key={`e${i}`}/>)}
          {Array.from({length:31}).map((_,i)=>{const day=i+1;return(<button key={day} onClick={()=>setSelectedDay(day)} className="aspect-square rounded-xl flex items-center justify-center border-0 cursor-pointer text-xs" style={{background:getDayBg(day),outline:selectedDay===day?`1.5px solid #d4a060`:"none",color:periodDays.includes(day)?"#e879a0":fertileDays.includes(day)?"#0d9488":"#3d2b1f"}}>{day}</button>);})}
        </div>
        {selectedDay&&(<div className="rounded-2xl p-4 mb-4" style={{background:"rgba(0,0,0,0.04)"}}>
          <p className="text-sm mb-1" style={{color:"#d4a060",fontFamily:"Georgia, serif"}}>January {selectedDay}</p>
          {mode==="cycle"&&<p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>{periodDays.includes(selectedDay)?"Period day":fertileDays.includes(selectedDay)?"Fertile window":"Cycle day "+selectedDay}</p>}
          {mode==="ttc"&&<p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>{fertileDays.includes(selectedDay)?"High fertility":"Low fertility"}</p>}
          {mode==="pregnancy"&&<p className="text-xs" style={{color:"rgba(0,0,0,0.4)"}}>Week {8+Math.floor(selectedDay/7)}</p>}
        </div>)}
        <div className="flex items-center justify-center gap-2 mt-4 mb-4"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(0,0,0,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(0,0,0,0.2)"}}>Your data stays on your device</span></div>
      </div>
      <Nav active="calendar"/>
    </div>
  );
}
