"use client";
import { useState } from "react";

export default function Community() {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = ["All","Questions","Tips","Stories"];
  const posts = [
    { cat: "Question", user: "Anonymous Daisy", time: "2h ago", text: "Does anyone else get really bad cramps on day 2? What helps?", hearts: 24 },
    { cat: "Tip", user: "Anonymous Rose", time: "4h ago", text: "Hot water bottle + magnesium supplements = game changer for period pain", hearts: 67 },
    { cat: "Story", user: "Anonymous Lily", time: "6h ago", text: "Finally got my BFP after 8 months of trying. Don't give up!", hearts: 142 },
    { cat: "Question", user: "Anonymous Violet", time: "8h ago", text: "Is it normal for cycles to vary by 3-4 days each month?", hearts: 18 },
    { cat: "Tip", user: "Anonymous Iris", time: "12h ago", text: "Track your basal body temp first thing in the morning before getting out of bed", hearts: 45 },
  ];
  const filtered = activeTab === "all" ? posts : posts.filter(p => p.cat.toLowerCase() + "s" === activeTab.toLowerCase());
  const Nav = ({ active = "home" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>Community</h1>
        <p className="text-xs mb-5" style={{ color: "#999" }}>Anonymous & supportive space</p>
        <div className="flex gap-2 overflow-x-auto mb-5 pb-1">
          {tabs.map(t => (<button key={t} onClick={() => setActiveTab(t.toLowerCase())} className="px-4 py-2 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap border-0 cursor-pointer" style={{ background: activeTab === t.toLowerCase() ? "#c8352e" : "#fff", color: activeTab === t.toLowerCase() ? "#fff" : "#999", border: "1px solid #e5e5e5" }}>{t}</button>))}
        </div>
        {filtered.map((p, i) => (
          <div key={i} className="p-4 mb-3" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "#e5e5e5", color: "#999" }}>{p.user.split(" ")[1][0]}</div>
                <span className="text-xs font-medium" style={{ color: "#1a1a1a" }}>{p.user}</span>
              </div>
              <span className="text-[10px]" style={{ color: "#999" }}>{p.time}</span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: "#c8352e" }}>{p.cat}</span>
            <p className="text-sm mt-1 mb-3" style={{ color: "#1a1a1a" }}>{p.text}</p>
            <div className="flex items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg><span className="text-xs" style={{ color: "#999" }}>{p.hearts}</span></div>
          </div>
        ))}
        <button className="w-full py-3 text-sm font-semibold border-0 cursor-pointer mt-2" style={{ background: "#c8352e", color: "#fff" }}>Post Anonymously</button>
      </div>
      <Nav active="home" />
    </div>
  );
}