"use client";

/**
 * VARIANT D — "Woven" Features Screen
 * Features as woven thread/textile illustrations with handcraft feel.
 * Warm linen background, brown + copper palette, textile patterns,
 * italic quotes, artisanal luxury. Each feature has a hand-drawn
 * weave/thread SVG illustration and an artisan quote.
 */
export default function FeaturesD() {
  const features = [
    {
      title: "Cycle Intelligence",
      quote: "Every cycle is a thread in the tapestry of your body\u2019s story.",
      description: "Adaptive predictions that honor your unique pattern. No two rhythms are alike.",
      weavePattern: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-40">
          {/* Circular weave pattern */}
          <circle cx="32" cy="32" r="28" stroke="#3d2b1f" strokeWidth="0.8" fill="none" strokeDasharray="3 4" />
          <circle cx="32" cy="32" r="20" stroke="#c17f4e" strokeWidth="0.8" fill="none" strokeDasharray="2 3" />
          <circle cx="32" cy="32" r="12" stroke="#3d2b1f" strokeWidth="0.8" fill="none" />
          {/* Cross threads */}
          <line x1="32" y1="4" x2="32" y2="60" stroke="#3d2b1f" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="4" y1="32" x2="60" y2="32" stroke="#3d2b1f" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="11" y1="11" x2="53" y2="53" stroke="#c17f4e" strokeWidth="0.4" strokeDasharray="3 5" />
          <line x1="53" y1="11" x2="11" y2="53" stroke="#c17f4e" strokeWidth="0.4" strokeDasharray="3 5" />
          <circle cx="32" cy="32" r="4" fill="#c17f4e" opacity="0.2" />
        </svg>
      ),
    },
    {
      title: "Fertility Insights",
      quote: "The fertile window\u200a\u2014\u200aa golden thread woven through each cycle.",
      description: "Six biomarkers interlaced to reveal your most fertile days with quiet confidence.",
      weavePattern: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-40">
          {/* Diamond loom pattern */}
          <path d="M32 4L60 32L32 60L4 32Z" stroke="#3d2b1f" strokeWidth="0.8" fill="none" strokeDasharray="3 4" />
          <path d="M32 14L50 32L32 50L14 32Z" stroke="#c17f4e" strokeWidth="0.8" fill="none" strokeDasharray="2 3" />
          <path d="M32 24L40 32L32 40L24 32Z" stroke="#3d2b1f" strokeWidth="0.8" fill="none" />
          {/* Weave threads */}
          <line x1="4" y1="32" x2="60" y2="32" stroke="#3d2b1f" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="32" y1="4" x2="32" y2="60" stroke="#3d2b1f" strokeWidth="0.5" strokeDasharray="2 4" />
          {/* Corner accents */}
          <circle cx="32" cy="4" r="2" fill="#c17f4e" opacity="0.3" />
          <circle cx="60" cy="32" r="2" fill="#c17f4e" opacity="0.3" />
          <circle cx="32" cy="60" r="2" fill="#c17f4e" opacity="0.3" />
          <circle cx="4" cy="32" r="2" fill="#c17f4e" opacity="0.3" />
        </svg>
      ),
    },
    {
      title: "Holistic Wellness",
      quote: "Sleep, mood, and energy\u200a\u2014\u200athree strands braided into wholeness.",
      description: "A living portrait of your wellbeing, stitched together from twelve gentle dimensions.",
      weavePattern: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-40">
          {/* Braided triple strand */}
          <path d="M20 4C20 4 30 16 20 28C10 40 30 52 20 60" stroke="#3d2b1f" strokeWidth="0.8" fill="none" />
          <path d="M32 4C32 4 42 16 32 28C22 40 42 52 32 60" stroke="#c17f4e" strokeWidth="0.8" fill="none" />
          <path d="M44 4C44 4 54 16 44 28C34 40 54 52 44 60" stroke="#3d2b1f" strokeWidth="0.8" fill="none" />
          {/* Cross stitches */}
          {[12, 24, 36, 48].map((y) => (
            <g key={y}>
              <line x1="16" y1={y - 2} x2="48" y2={y - 2} stroke="#c17f4e" strokeWidth="0.3" strokeDasharray="2 3" />
              <circle cx="20" cy={y} r="1.5" fill="#c17f4e" opacity="0.15" />
              <circle cx="32" cy={y} r="1.5" fill="#c17f4e" opacity="0.15" />
              <circle cx="44" cy={y} r="1.5" fill="#c17f4e" opacity="0.15" />
            </g>
          ))}
        </svg>
      ),
    },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen px-8 py-12 overflow-hidden"
      style={{ background: "#f7f3ee" }}
    >
      {/* Linen weave background texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 900">
        {Array.from({ length: 45 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20}
            stroke="#3d2b1f" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="900"
            stroke="#3d2b1f" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Header */}
      <div className="z-10 mb-8">
        {/* Top botanical ornament */}
        <div className="flex justify-center mb-4">
          <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="opacity-20">
            <line x1="0" y1="10" x2="30" y2="10" stroke="#3d2b1f" strokeWidth="0.5" />
            <circle cx="40" cy="10" r="3" fill="none" stroke="#c17f4e" strokeWidth="0.8" />
            <circle cx="40" cy="10" r="1" fill="#c17f4e" opacity="0.4" />
            <line x1="50" y1="10" x2="80" y2="10" stroke="#3d2b1f" strokeWidth="0.5" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-[#3d2b1f] tracking-tight text-center leading-tight mb-2">
          The Threads of<br />Your Wellbeing
        </h1>
        <p className="text-xs text-[#3d2b1f]/30 tracking-[0.2em] uppercase font-medium text-center">
          Three pillars, beautifully woven
        </p>
      </div>

      {/* Feature cards */}
      <div className="z-10 flex-1 flex flex-col gap-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative rounded-xl px-5 py-5"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(61,43,31,0.06)",
              boxShadow: "0 2px 12px rgba(61,43,31,0.04)",
            }}
          >
            <div className="flex gap-4">
              {/* Weave illustration */}
              <div className="flex-shrink-0 flex items-start pt-1">
                {feature.weavePattern}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title with copper accent */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c17f4e]/40" />
                  <h3 className="text-sm font-bold text-[#3d2b1f] tracking-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Italic quote */}
                <div className="border-l-2 border-[#c17f4e]/20 pl-3 mb-2">
                  <p className="text-[11px] text-[#3d2b1f]/40 italic leading-relaxed font-light">
                    &ldquo;{feature.quote}&rdquo;
                  </p>
                </div>

                <p className="text-[11px] text-[#3d2b1f]/30 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative and CTA */}
      <div className="z-10 mt-8 w-full">
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-[#3d2b1f]/10" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-20">
            <path d="M8 1L15 8L8 15L1 8Z" stroke="#c17f4e" strokeWidth="0.8" fill="none" />
            <circle cx="8" cy="8" r="2" fill="#c17f4e" opacity="0.3" />
          </svg>
          <div className="w-8 h-px bg-[#3d2b1f]/10" />
        </div>

        <button
          className="w-full h-14 rounded-xl font-semibold text-sm text-[#f7f3ee]"
          style={{
            background: "#3d2b1f",
            boxShadow: "0 4px 16px rgba(61,43,31,0.2)",
          }}
        >
          Continue
        </button>

        {/* Page indicator */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3d2b1f]/10" />
          <div className="w-5 h-1.5 rounded-full bg-[#c17f4e]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#3d2b1f]/10" />
        </div>
      </div>
    </div>
  );
}
