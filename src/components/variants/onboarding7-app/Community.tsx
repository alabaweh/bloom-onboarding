"use client";
import { useState } from "react";
export default function Community() {
  const [activeTab,setActiveTab]=useState("all");
  const tabs=["All","Questions","Tips","Stories"];
  const posts=[{cat:"Question",user:"Anonymous Daisy",time:"2h ago",text:"Does anyone else get really bad cramps on day 2?",hearts:24},{cat:"Tip",user:"Anonymous Rose",time:"4h ago",text:"Hot water bottle + magnesium = game changer for period pain",hearts:67},{cat:"Story",user:"Anonymous Lily",time:"6h ago",text:"Finally got my BFP after 8 months. Don't give up!",hearts:142},{cat:"Question",user:"Anonymous Violet",time:"8h ago",text:"Is it normal for cycles to vary by 3-4 days?",hearts:18}];
  const filtered=activeTab==="all"?posts:posts.filter(p=>p.cat.toLowerCase()+"s"===activeTab.toLowerCase());
  const Nav = ({active="home"}:{active?:string}) => { const items = [{id:"home",icon:"M12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3l9-8z",label:"Home"},{id:"calendar",icon:"M6 2v2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2V2h-2v2H8V2H6zm-2 8h16v10H4V10z",label:"Calendar"},{id:"log",icon:"M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z",label:"Log"},{id:"insights",icon:"M3 20h18v-2H3v2zm0-6h10v-2H3v2zm0-6h14V6H3v2z",label:"Insights"},{id:"settings",icon:"M12 15.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 15.5z",label:"Settings"}]; return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{background:"rgba(26,16,37,0.95)",borderTop:"1px solid rgba(192,132,252,0.1)"}}>{items.map(it=>(<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill={active===it.id?"#c084fc":"rgba(255,255,255,0.3)"}><path d={it.icon}/></svg><span className="text-[9px]" style={{color:active===it.id?"#c084fc":"rgba(255,255,255,0.3)"}}>{it.label}</span></button>))}</nav>); };
  return (
    <div className="min-h-screen pb-20" style={{background:"#1a1025",fontFamily:"system-ui"}}>
      <div className="px-5 pt-14">
        <h1 className="text-xl font-light tracking-widest mb-1" style={{color:"#c084fc",fontFamily:"Georgia, serif"}}>Community</h1>
        <p className="text-xs mb-5" style={{color:"rgba(255,255,255,0.4)"}}>Anonymous & supportive</p>
        <div className="flex gap-2 overflow-x-auto mb-5 pb-1">{tabs.map(t=>(<button key={t} onClick={()=>setActiveTab(t.toLowerCase())} className="px-4 py-2 rounded-full text-[11px] font-medium whitespace-nowrap border-0 cursor-pointer" style={{background:activeTab===t.toLowerCase()?"#c084fc":"rgba(255,255,255,0.05)",color:activeTab===t.toLowerCase()?"#1a1025":"rgba(255,255,255,0.4)"}}>{t}</button>))}</div>
        {filtered.map((p,i)=>(<div key={i} className="rounded-2xl p-4 mb-3" style={{background:"rgba(255,255,255,0.05)"}}>
          <div className="flex justify-between items-center mb-2"><div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style={{background:"rgba(255,255,255,0.15)",color:"#c084fc"}}>{p.user.split(" ")[1][0]}</div><span className="text-xs font-medium" style={{color:"rgba(255,255,255,0.85)"}}>{p.user}</span></div><span className="text-[10px]" style={{color:"rgba(255,255,255,0.4)"}}>{p.time}</span></div>
          <span className="text-[10px] font-semibold" style={{color:"#c084fc"}}>{p.cat}</span>
          <p className="text-sm mt-1 mb-3" style={{color:"rgba(255,255,255,0.85)"}}>{p.text}</p>
          <div className="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg><span className="text-xs" style={{color:"rgba(255,255,255,0.4)"}}>{p.hearts}</span></div>
        </div>))}
        <button className="w-full py-3 rounded-full text-sm font-medium border-0 cursor-pointer mt-2" style={{background:"#c084fc",color:"#1a1025"}}>Post Anonymously</button>
      </div>
      <Nav active="home"/>
    </div>
  );
}
