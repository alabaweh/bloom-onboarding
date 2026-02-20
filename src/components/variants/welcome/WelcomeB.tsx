"use client";

/**
 * VARIANT B — "Topographic"
 * Concept: Abstract terrain/contour lines — body as landscape.
 * Minimal, editorial, high-fashion vibe. Monochrome + single accent.
 */
export default function WelcomeB() {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-8 py-14 overflow-hidden bg-[#fafaf8]">

      {/* Topo contour lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 800" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse key={i}
            cx={200 + Math.sin(i * 0.8) * 40}
            cy={350 + i * 8}
            rx={160 - i * 12}
            ry={120 - i * 9}
            stroke="#1a1a1a"
            strokeWidth="1"
            fill="none"
            transform={`rotate(${i * 3}, 200, 350)`}
          />
        ))}
      </svg>

      <div />

      {/* Center content */}
      <div className="flex flex-col items-center z-10">
        {/* Abstract mark */}
        <div className="mb-10 relative">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="36" stroke="#1a1a1a" strokeWidth="1" fill="none" />
            <circle cx="40" cy="40" r="24" stroke="#1a1a1a" strokeWidth="1" fill="none" />
            <circle cx="40" cy="40" r="12" fill="#c8352e" />
          </svg>
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#c8352e]" />
        </div>

        <h1 className="text-5xl font-display font-bold text-[#1a1a1a] tracking-[-0.03em] mb-2">
          Vela
        </h1>
        <div className="w-12 h-px bg-[#c8352e] mb-6" />
        <p className="text-xs text-[#1a1a1a]/40 tracking-[0.3em] uppercase font-medium">
          Body Intelligence
        </p>

        <p className="text-sm text-[#1a1a1a]/35 text-center max-w-[260px] leading-relaxed mt-8 font-light">
          Precision health tracking that reads your body like a map. Every contour tells a story.
        </p>
      </div>

      {/* Bottom */}
      <div className="w-full z-10 space-y-4">
        <button className="w-full h-14 rounded-none font-medium text-sm tracking-[0.15em] uppercase text-white bg-[#1a1a1a] hover:bg-[#333] transition-colors">
          Enter
        </button>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
          <span className="text-[10px] text-[#1a1a1a]/30 tracking-[0.2em] uppercase">or</span>
          <div className="h-px flex-1 bg-[#1a1a1a]/10" />
        </div>
        <button className="w-full text-center text-xs text-[#1a1a1a]/40 font-medium tracking-wide hover:text-[#1a1a1a]/60 transition-colors">
          I already have an account
        </button>
      </div>
    </div>
  );
}
