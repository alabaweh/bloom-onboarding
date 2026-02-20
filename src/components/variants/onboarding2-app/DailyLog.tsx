"use client";
import { useState } from "react";

export default function DailyLog() {
  const [mode, setMode] = useState<"cycle" | "ttc" | "pregnancy">("cycle");
  const [selectedMood, setSelectedMood] = useState("good");
  const [selectedEnergy, setSelectedEnergy] = useState("high");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(["cramps"]);
  const [selectedFlow, setSelectedFlow] = useState("medium");
  const modes = [{ key: "cycle" as const, label: "Cycle" }, { key: "ttc" as const, label: "TTC" }, { key: "pregnancy" as const, label: "Pregnancy" }];
  const moods = ["Great","Good","Okay","Low","Awful"];
  const energyLevels = ["Very High","High","Medium","Low","Exhausted"];
  const symptoms = ["Cramps","Bloating","Headache","Breast tenderness","Back pain","Acne","Fatigue","Nausea","Insomnia","Cravings"];
  const flows = ["None","Spotting","Light","Medium","Heavy"];
  const ttcExtras = ["CM: Dry","CM: Sticky","CM: Creamy","CM: Watery","CM: Egg white","OPK: Negative","OPK: Positive"];
  const pregExtras = ["Morning sickness","Heartburn","Swelling","Braxton Hicks","Baby movement","Pelvic pressure"];

  const Nav = ({ active = "log" }: { active?: string }) => {
    const items = [
      { id: "home", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Home" },
      { id: "calendar", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Calendar" },
      { id: "log", icon: "M12 4v16m8-8H4", label: "Log" },
      { id: "insights", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6 0h6m0 0v-10a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6", label: "Insights" },
      { id: "settings", icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", label: "Settings" },
    ];
    return (
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-2 z-50" style={{ background: "#fafaf8", borderTop: "1px solid #e5e5e5" }}>
        {items.map((it) => (
          <button key={it.id} className="flex flex-col items-center gap-0.5 bg-transparent border-0 cursor-pointer p-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active === it.id ? "#c8352e" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg>
            <span className="text-[9px] font-medium" style={{ color: active === it.id ? "#c8352e" : "#999" }}>{it.label}</span>
          </button>
        ))}
      </nav>
    );
  };

  const toggleSymptom = (s: string) => setSelectedSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  return (
    <div className="min-h-screen pb-20" style={{ background: "#fafaf8", fontFamily: "system-ui" }}>
      <div className="px-5 pt-14">
        <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: "#1a1a1a" }}>Daily Log</h1>
        <p className="text-xs mb-5" style={{ color: "#999" }}>January 18, 2025 · Day 18</p>
        <div className="flex gap-0 mb-6" style={{ borderBottom: "1px solid #e5e5e5" }}>
          {modes.map(m => (
            <button key={m.key} onClick={() => setMode(m.key)} className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase border-0 cursor-pointer bg-transparent" style={{ color: mode === m.key ? "#c8352e" : "#999", borderBottom: mode === m.key ? "2px solid #c8352e" : "2px solid transparent" }}>{m.label}</button>
          ))}
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Mood</p>
          <div className="flex flex-wrap gap-2">
            {moods.map(m => (
              <button key={m} onClick={() => setSelectedMood(m.toLowerCase())} className="px-4 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: selectedMood === m.toLowerCase() ? "#c8352e" : "#fff", color: selectedMood === m.toLowerCase() ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{m}</button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Energy</p>
          <div className="flex flex-wrap gap-2">
            {energyLevels.map(e => (
              <button key={e} onClick={() => setSelectedEnergy(e.toLowerCase())} className="px-4 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: selectedEnergy === e.toLowerCase() ? "#c8352e" : "#fff", color: selectedEnergy === e.toLowerCase() ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{e}</button>
            ))}
          </div>
        </div>

        {mode === "cycle" && (
          <div className="mb-5">
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Flow</p>
            <div className="flex flex-wrap gap-2">
              {flows.map(f => (
                <button key={f} onClick={() => setSelectedFlow(f.toLowerCase())} className="px-4 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: selectedFlow === f.toLowerCase() ? "#c8352e" : "#fff", color: selectedFlow === f.toLowerCase() ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{f}</button>
              ))}
            </div>
          </div>
        )}

        <div className="mb-5">
          <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Symptoms</p>
          <div className="flex flex-wrap gap-2">
            {symptoms.map(s => (
              <button key={s} onClick={() => toggleSymptom(s.toLowerCase())} className="px-3 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: selectedSymptoms.includes(s.toLowerCase()) ? "#c8352e" : "#fff", color: selectedSymptoms.includes(s.toLowerCase()) ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{s}</button>
            ))}
          </div>
        </div>

        {mode === "ttc" && (
          <div className="mb-5">
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Fertility Tracking</p>
            <div className="flex flex-wrap gap-2">
              {ttcExtras.map(t => (
                <button key={t} onClick={() => toggleSymptom(t.toLowerCase())} className="px-3 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: selectedSymptoms.includes(t.toLowerCase()) ? "#c8352e" : "#fff", color: selectedSymptoms.includes(t.toLowerCase()) ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{t}</button>
              ))}
            </div>
          </div>
        )}

        {mode === "pregnancy" && (
          <div className="mb-5">
            <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "#999" }}>Pregnancy Symptoms</p>
            <div className="flex flex-wrap gap-2">
              {pregExtras.map(p => (
                <button key={p} onClick={() => toggleSymptom(p.toLowerCase())} className="px-3 py-2 text-xs font-medium border-0 cursor-pointer" style={{ background: selectedSymptoms.includes(p.toLowerCase()) ? "#c8352e" : "#fff", color: selectedSymptoms.includes(p.toLowerCase()) ? "#fff" : "#1a1a1a", border: "1px solid #e5e5e5" }}>{p}</button>
              ))}
            </div>
          </div>
        )}

        <button className="w-full py-3 text-sm font-semibold border-0 cursor-pointer mb-4" style={{ background: "#c8352e", color: "#fff" }}>Save Log</button>
        <div className="flex items-center justify-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          <span className="text-[10px]" style={{ color: "#999" }}>Only you can see your logs</span>
        </div>
      </div>
      <Nav active="log" />
    </div>
  );
}