"use client";
import { useState } from "react";
export default function LearnHub() {
  const [activeCat,setActiveCat]=useState("all");
  const cats=["All","Cycle","Fertility","Nutrition","Mental Health"];
  const articles=[{cat:"Cycle",title:"Understanding Your Luteal Phase",time:"4 min"},{cat:"Fertility",title:"The Fertile Window Explained",time:"5 min"},{cat:"Nutrition",title:"Iron-Rich Foods for Your Period",time:"3 min"},{cat:"Mental Health",title:"PMS and Emotional Wellbeing",time:"6 min"},{cat:"Cycle",title:"Cervical Mucus Patterns",time:"4 min"}];
  const filtered=activeCat==="all"?articles:articles.filter(a=>a.cat.toLowerCase()===activeCat);
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"rgba(255,255,255,0.95)",borderTop:"1px solid rgba(139,92,246,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#8b5cf6":"rgba(0,0,0,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#8b5cf6":"rgba(0,0,0,0.3)"}}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20" style={{background:"#ffffff",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest mb-1" style={{color:"#8b5cf6",fontFamily:"system-ui"}}>Learn</h1>
        <p className="text-xs mb-5" style={{color:"rgba(0,0,0,0.4)"}}>Evidence-based education</p>
        <div className="rounded-2xl p-4 mb-5" style={{background:"rgba(0,0,0,0.08)",border:"1px solid #8b5cf640"}}>
          <p className="text-[10px] font-semibold tracking-wider mb-1" style={{color:"#8b5cf6"}}>DAILY FACT</p>
          <p className="text-sm" style={{color:"#111827"}}>The average cycle is 28 days, but 21-35 days is normal.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto mb-5 pb-1">{cats.map(c=>(<button key={c} onClick={()=>setActiveCat(c.toLowerCase())} className="px-4 py-2 rounded-full text-[11px] font-medium whitespace-nowrap border-0 cursor-pointer" style={{background:activeCat===c.toLowerCase()?"#8b5cf6":"rgba(0,0,0,0.04)",color:activeCat===c.toLowerCase()?"#ffffff":"rgba(0,0,0,0.4)"}}>{c}</button>))}</div>
        {filtered.map((a,i)=>(<div key={i} className="rounded-2xl p-4 mb-3 cursor-pointer" style={{background:"rgba(0,0,0,0.04)"}}>
          <div className="flex justify-between mb-1"><span className="text-[10px] font-semibold" style={{color:"#8b5cf6"}}>{a.cat}</span><span className="text-[10px]" style={{color:"rgba(0,0,0,0.4)"}}>{a.time}</span></div>
          <p className="text-sm font-medium" style={{color:"#111827"}}>{a.title}</p>
        </div>))}
      </div>
      <Nav active="insights"/>
    </div>
  );
}
