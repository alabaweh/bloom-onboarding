"use client";
import { useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);

  const features = [
    { title: "Track Your Cycle", desc: "Log periods, symptoms, and moods with a paper-simple interface that feels as natural as journaling.", icon: "M12 8v8m-4-4h8" },
    { title: "Personalized Insights", desc: "Receive gentle, tailored observations about your patterns crafted just for you.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Gentle Reminders", desc: "Timely nudges that arrive like a note from a friend, never intrusive, always caring.", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0" },
  ];

  const rotations = [1.5, -1, 2];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-14" style={{ background: "#faf5eb", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#4a3728 0.5px, transparent 0.5px)", backgroundSize: "16px 16px",
      }} />

      <h2 className="text-3xl text-center mb-2 relative z-10" style={{ fontFamily: "Georgia, serif", color: "#4a3728" }}>
        Crafted for You
      </h2>
      <p className="text-center text-sm mb-10 relative z-10" style={{ color: "#4a3728", opacity: 0.55 }}>
        Every feature folded with care
      </p>

      <div className="flex flex-col gap-5 max-w-sm mx-auto w-full relative z-10">
        {features.map((f, i) => (
          <div key={i}>
            <div
              className="rounded-xl p-6 cursor-pointer transition-all duration-300"
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "#fff" : "#faf5eb",
                border: "1px solid rgba(74,55,40,0.08)",
                transform: `rotate(${active === i ? 0 : rotations[i]}deg) scale(${active === i ? 1.02 : 1})`,
                boxShadow: active === i
                  ? "0 6px 24px rgba(74,55,40,0.14), 0 2px 8px rgba(74,55,40,0.08)"
                  : "0 2px 8px rgba(74,55,40,0.08), 0 1px 3px rgba(74,55,40,0.06)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  background: active === i ? "#e8735a" : "#f0e6d6",
                  transition: "background 0.3s",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={active === i ? "#fff" : "#4a3728"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1" style={{ color: "#4a3728", fontFamily: "Georgia, serif" }}>{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#4a3728", opacity: 0.6 }}>{f.desc}</p>
                </div>
              </div>
            </div>

            {/* Torn paper edge divider */}
            {i < features.length - 1 && (
              <svg width="100%" height="12" viewBox="0 0 320 12" preserveAspectRatio="none" className="my-1 opacity-20">
                <path d="M0 6 Q20 2 40 6 T80 6 T120 6 T160 6 T200 6 T240 6 T280 6 T320 6" fill="none" stroke="#4a3728" strokeWidth="0.5" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-auto pt-8 relative z-10">
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="rounded-full" style={{
            width: i === 1 ? 18 : 6, height: 6,
            background: i === 1 ? "#e8735a" : "#ddd0c1",
          }} />
        ))}
      </div>
    </div>
  );
}
