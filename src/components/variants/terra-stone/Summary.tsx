"use client";

export default function Summary() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden" style={{ background: "#f0eded", fontFamily: "system-ui, sans-serif" }}>
      <div className="absolute top-[-50px] right-[-40px] w-48 h-48 opacity-10" style={{ background: "#8a7060", borderRadius: "50% 50% 40% 60% / 40% 60% 50% 50%" }} />
      <div className="relative mb-8">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" fill="#8a7060" opacity="0.15" />
          <circle cx="60" cy="60" r="40" fill="#8a7060" opacity="0.25" />
          <path d="M45 60 L55 70 L78 47" stroke="#8a7060" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-3 text-center" style={{ fontFamily: "system-ui, sans-serif", color: "#2d2522" }}>You&apos;re all set</h2>
      <p className="text-sm text-center max-w-xs mb-6 leading-relaxed" style={{ color: "rgba(45,37,34,0.5)" }}>Petra is personalized and ready to support your journey</p>
      <div className="w-full max-w-xs space-y-3 mb-8">
        <div className="flex items-center gap-3 p-3 rounded-xl" style={{background:"rgba(138,112,96,0.06)",border:"1px solid rgba(0,0,0,0.06)"}}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"#8a7060"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
          <div><p className="text-xs font-medium" style={{color:"#2d2522"}}>Profile complete</p><p className="text-[10px]" style={{color:"rgba(45,37,34,0.5)"}}>Personalized for you</p></div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl" style={{background:"rgba(138,112,96,0.06)",border:"1px solid rgba(0,0,0,0.06)"}}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"#8a7060"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
          <div><p className="text-xs font-medium" style={{color:"#2d2522"}}>Predictions active</p><p className="text-[10px]" style={{color:"rgba(45,37,34,0.5)"}}>Based on your cycle data</p></div>
        </div>
      </div>
      <button className="px-8 py-4 rounded-full text-base font-semibold transition-all cursor-pointer" style={{background:"#8a7060",color:"#ffffff",border:"none",boxShadow:"0 4px 16px #8a706030"}}>Enter Petra</button>
      <div className="flex items-center gap-2 mt-6"><svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(0,0,0,0.2)"><path d="M18 8h-1V6A5 5 0 007 6v2H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zM9 6a3 3 0 016 0v2H9V6zm4 10h-2v-4h2v4z"/></svg><span className="text-[10px]" style={{color:"rgba(0,0,0,0.2)"}}>End-to-end encrypted</span></div>
      <div className="flex gap-2 mt-6">{[0,1,2,3,4,5,6,7,8].map(i=>(<div key={i} className="rounded-full" style={{width:i===8?24:8,height:8,background:i===8?"#8a7060":"rgba(0,0,0,0.12)"}}/>))}</div>
    </div>
  );
}
