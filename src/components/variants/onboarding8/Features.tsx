"use client";
import { useState, useEffect } from "react";

export default function Features() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const features = [
    {
      icon: "M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
      title: "Cycle Tracking",
      desc: "Gentle daily logging that flows with your rhythm",
      wash: "#f9a8c9", blobRadius: "48% 52% 45% 55% / 50% 46% 54% 50%",
    },
    {
      icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
      title: "Mood Journal",
      desc: "Paint your emotional landscape each day",
      wash: "#c4b5e0", blobRadius: "55% 45% 50% 50% / 45% 55% 48% 52%",
    },
    {
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z",
      title: "Gentle Insights",
      desc: "Soft patterns revealed through your unique story",
      wash: "#fcd5b4", blobRadius: "50% 50% 55% 45% / 52% 48% 50% 50%",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col px-6 py-16"
      style={{ background: "#fefefe", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Background wash */}
      <div className="absolute" style={{
        width: 300, height: 280, top: "-5%", right: "-10%",
        borderRadius: "52% 48% 44% 56% / 49% 55% 45% 51%",
        background: "radial-gradient(ellipse, rgba(196,181,224,0.25) 0%, transparent 70%)",
        filter: "blur(40px)",
      }} />

      <h2 className="text-3xl font-light text-center mb-2 relative z-10" style={{
        fontFamily: "Georgia, serif", color: "#3d2c2c",
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out forwards" : "none",
      }}>
        How Petal Blooms
      </h2>
      <p className="text-center text-sm mb-12 relative z-10" style={{
        color: "rgba(61,44,44,0.5)", fontWeight: 300,
        opacity: visible ? 1 : 0, animation: visible ? "fadeIn 0.8s ease-out 0.2s both" : "none",
      }}>
        Three gentle brushstrokes of care
      </p>

      <div className="flex flex-col gap-8 max-w-sm mx-auto w-full relative z-10">
        {features.map((f, i) => (
          <div key={i} className="relative flex items-start gap-5" style={{
            opacity: visible ? 1 : 0,
            animation: visible ? `fadeIn 0.8s ease-out ${0.3 + i * 0.2}s both` : "none",
          }}>
            {/* Watercolor blob behind icon */}
            <div className="relative flex-shrink-0">
              <div className="absolute" style={{
                width: 70, height: 70, top: -10, left: -10,
                borderRadius: f.blobRadius,
                background: `radial-gradient(ellipse at 45% 45%, ${f.wash} 0%, rgba(255,255,255,0) 70%)`,
                filter: "blur(12px)", opacity: 0.45,
              }} />
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full"
                style={{ background: "rgba(254,254,254,0.8)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d={f.icon} fill={f.wash} />
                </svg>
              </div>
            </div>

            <div className="pt-1">
              <h3 className="text-base font-normal mb-1" style={{
                fontFamily: "Georgia, serif", color: "#3d2c2c",
              }}>{f.title}</h3>
              <p className="text-sm" style={{ color: "rgba(61,44,44,0.5)", fontWeight: 300, lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="block mx-auto mt-14 px-10 py-3.5 rounded-full text-sm tracking-widest border-0 cursor-pointer relative z-10"
        style={{
          background: "linear-gradient(135deg, #f9a8c9, #e898b8)",
          color: "#fefefe", fontWeight: 400, letterSpacing: "0.12em",
          boxShadow: "0 8px 32px rgba(249,168,201,0.25)",
        }}>
        Continue
      </button>

      <div className="flex justify-center gap-2 mt-10 relative z-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="rounded-full" style={{
            width: i === 1 ? 18 : 6, height: 6,
            background: i === 1 ? "#f9a8c9" : "rgba(249,168,201,0.2)",
          }} />
        ))}
      </div>
    </div>
  );
}
