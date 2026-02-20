"use client";
import { useState } from "react";

export default function LearnHub() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["All","Your Cycle","Fertility 101","Nutrition","Mental Health"];
  const articles = [
    { cat: "Your Cycle", title: "Understanding Your Luteal Phase", time: "4 min", desc: "What happens after ovulation and why it matters" },
    { cat: "Fertility 101", title: "The Fertile Window Explained", time: "5 min", desc: "When conception is most likely to occur" },
    { cat: "Nutrition", title: "Iron-Rich Foods for Your Period", time: "3 min", desc: "Combat fatigue with these nutritional powerhouses" },
    { cat: "Mental Health", title: "PMS and Emotional Wellbeing", time: "6 min", desc: "Evidence-based strategies for mood management" },
    { cat: "Your Cycle", title: "Cervical Mucus Patterns", time: "4 min", desc: "What your body is telling you throughout your cycle" },
    { cat: "Nutrition", title: "Omega-3s and Menstrual Health", time: "3 min", desc: "How fatty acids reduce inflammation and cramping" },
  ];
  const filtered = activeCategory === "all" ? articles : articles.filter(a => a.cat.toLowerCase() === activeCategory.toLowerCase());
  const Nav = ({ active = "insights" }: { active?: string }) => {
    const items = [{ id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },{ id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },{ id: "log", icon: "M12 4v16m8-8H4", label: "Log" },{ id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },{ id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4", label: "Settings" }];
    return (<nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>{items.map(it => (<button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg><span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span></button>))}</nav>);
  };
  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>Learn</h1>
        <p className="text-xs mb-5" style={{ color: "#999" }}>Evidence-based health education</p>
        <div className="p-4 mb-5" style={{ background: "#fff", border: "1px solid #c8352e" }}>
          <p className="text-[10px] font-semibold tracking-wider uppercase mb-1" style={{ color: "#c8352e" }}>DAILY FACT</p>
          <p className="text-sm font-medium" style={{ color: "#1a1a1a" }}>The average menstrual cycle is 28 days, but cycles between 21-35 days are considered normal.</p>
          <p className="text-[10px] mt-2" style={{ color: "#999" }}>Source: ACOG Guidelines</p>
        </div>
        <div className="flex gap-2 overflow-x-auto mb-5 pb-1">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c.toLowerCase())} className="px-4 py-2 text-[11px] font-semibold tracking-wide uppercase whitespace-nowrap border-0 cursor-pointer" style={{ background: activeCategory === c.toLowerCase() ? "#c8352e" : "#fff", color: activeCategory === c.toLowerCase() ? "#fff" : "#999", border: "1px solid #e5e5e5" }}>{c}</button>
          ))}
        </div>
        {filtered.map((a, i) => (
          <div key={i} className="p-4 mb-3 cursor-pointer" style={{ background: "#fff", border: "1px solid #e5e5e5" }}>
            <div className="flex justify-between items-start mb-1">
              <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: "#c8352e" }}>{a.cat}</span>
              <span className="text-[10px]" style={{ color: "#999" }}>{a.time} read</span>
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: "#1a1a1a" }}>{a.title}</p>
            <p className="text-xs" style={{ color: "#999" }}>{a.desc}</p>
          </div>
        ))}
      </div>
      <Nav active="insights" />
    </div>
  );
}