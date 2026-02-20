"use client";

/**
 * VARIANT D — "Woven"
 * Concept: Textile/weave patterns — body as fabric, cycles as threads.
 * Warm earth tones, tactile, artisanal luxury feel. Think Aesop meets health tech.
 */
export default function WelcomeD() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-8 py-14 overflow-hidden"
      style={{ background: "#f7f3ee" }}>

      {/* Woven pattern background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 800">
        {Array.from({ length: 40 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="#3d2b1f" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="800" stroke="#3d2b1f" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Top botanical line */}
      <div className="w-full flex justify-center z-10">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="opacity-30">
          <path d="M60 38C60 38 40 20 30 10M60 38C60 38 80 20 90 10M60 38V2" stroke="#3d2b1f" strokeWidth="1" />
          <circle cx="30" cy="8" r="4" fill="none" stroke="#3d2b1f" strokeWidth="0.8" />
          <circle cx="90" cy="8" r="4" fill="none" stroke="#3d2b1f" strokeWidth="0.8" />
          <circle cx="60" cy="2" r="2" fill="#8b5e3c" />
        </svg>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center z-10">
        {/* Hand-drawn circle mark */}
        <div className="mb-8 relative">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50 8C50 8 92 8 92 50C92 92 50 92 50 92C50 92 8 92 8 50C8 8 50 8 50 8Z"
              stroke="#3d2b1f" strokeWidth="1.2" fill="none" strokeDasharray="4 3" />
            <circle cx="50" cy="50" r="20" fill="#c17f4e" opacity="0.15" />
            <text x="50" y="55" textAnchor="middle" className="font-display" fontSize="24" fill="#3d2b1f" fontWeight="600">
              fh
            </text>
          </svg>
        </div>

        <h1 className="text-4xl font-display font-bold text-[#3d2b1f] tracking-tight mb-2">
          Fable Health
        </h1>
        <p className="text-xs text-[#3d2b1f]/40 tracking-[0.25em] uppercase font-medium mb-10">
          Woven into your rhythm
        </p>

        <div className="max-w-[260px] border-l-2 border-[#c17f4e]/30 pl-4">
          <p className="text-sm text-[#3d2b1f]/45 leading-relaxed font-light italic">
            Every body has a story woven through time. We help you read the pattern and find your rhythm within it.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full z-10 space-y-4">
        <button className="w-full h-14 rounded-xl font-semibold text-sm text-[#f7f3ee] transition-colors"
          style={{
            background: "#3d2b1f",
            boxShadow: "0 4px 16px rgba(61,43,31,0.2)",
          }}>
          Discover Your Pattern
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-px bg-[#3d2b1f]/15" />
          <p className="text-[11px] text-[#3d2b1f]/30 font-medium">
            Existing member? <span className="text-[#c17f4e]">Continue</span>
          </p>
          <div className="w-6 h-px bg-[#3d2b1f]/15" />
        </div>
      </div>
    </div>
  );
}
