"use client";

/**
 * VARIANT D — "Woven"
 * Summary / All Set screen: Handwritten journal entry style.
 * Diary page with wax seal / stamp of completion.
 * Linen bg (#f7f3ee), brown (#3d2b1f), copper (#c17f4e).
 */
export default function SummaryD() {
  const profileData = {
    age: "25-30",
    cycleLength: "28-30 days",
    periodLength: "4-5 days",
    goals: ["Period Tracking", "Fertility"],
    symptomsTracked: 6,
  };

  return (
    <div
      className="relative flex flex-col min-h-screen px-6 py-10 overflow-hidden"
      style={{ background: "#f7f3ee" }}
    >
      {/* Woven pattern background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800">
        {Array.from({ length: 40 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="#3d2b1f" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 20} y1="0" x2={i * 20} y2="800" stroke="#3d2b1f" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Notebook rule lines (faint) */}
      <div className="absolute inset-0 opacity-[0.04]">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-px bg-[#3d2b1f]"
            style={{ position: "absolute", top: `${60 + i * 24}px` }}
          />
        ))}
        {/* Margin line */}
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: "48px", background: "rgba(193,127,78,0.15)" }}
        />
      </div>

      {/* Date header */}
      <div className="z-10 flex items-center justify-between mb-6">
        <span
          className="text-xs tracking-[0.2em] uppercase font-medium"
          style={{ color: "rgba(61,43,31,0.3)" }}
        >
          Journal Entry
        </span>
        <span
          className="text-xs font-light"
          style={{ color: "rgba(61,43,31,0.25)", fontStyle: "italic" }}
        >
          Today
        </span>
      </div>

      {/* Journal page card */}
      <div
        className="z-10 rounded-xl p-6 mb-6 flex-1"
        style={{
          background: "rgba(255,252,248,0.7)",
          border: "1px solid rgba(61,43,31,0.06)",
          boxShadow: "0 2px 16px rgba(61,43,31,0.04)",
        }}
      >
        {/* Opening flourish */}
        <div className="flex justify-center mb-4">
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none" opacity="0.2">
            <path d="M0 8C10 8 15 2 20 2C25 2 25 8 30 8C35 8 35 14 40 14C45 14 45 8 50 8C55 8 55 2 60 2C65 2 70 8 80 8" stroke="#c17f4e" strokeWidth="1" />
          </svg>
        </div>

        {/* Journal title */}
        <h1
          className="text-2xl font-bold text-[#3d2b1f] mb-1 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Dear Journal,
        </h1>
        <p
          className="text-sm text-center mb-6 leading-relaxed"
          style={{ color: "rgba(61,43,31,0.4)", fontStyle: "italic", fontFamily: "Georgia, serif" }}
        >
          My wellness profile is now complete.
        </p>

        <div className="w-full h-px bg-[#3d2b1f]/8 mb-5" />

        {/* Journal entries as handwritten notes */}
        <div className="space-y-4">
          {/* About me */}
          <div className="border-l-2 border-[#c17f4e]/25 pl-4">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-medium block mb-2"
              style={{ color: "rgba(193,127,78,0.6)" }}
            >
              About Me
            </span>
            <p className="text-sm text-[#3d2b1f]/70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
              I am <span className="font-semibold text-[#3d2b1f]">{profileData.age} years old</span> with
              a cycle of <span className="font-semibold text-[#3d2b1f]">{profileData.cycleLength}</span> and
              a period lasting <span className="font-semibold text-[#3d2b1f]">{profileData.periodLength}</span>.
            </p>
          </div>

          {/* My goals */}
          <div className="border-l-2 border-[#c17f4e]/25 pl-4">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-medium block mb-2"
              style={{ color: "rgba(193,127,78,0.6)" }}
            >
              My Goals
            </span>
            <div className="flex flex-col gap-1.5">
              {profileData.goals.map((goal) => (
                <div key={goal} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5" stroke="#c17f4e" strokeWidth="1" fill="none" opacity="0.4" />
                    <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#c17f4e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-[#3d2b1f]/70" style={{ fontFamily: "Georgia, serif" }}>
                    {goal}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tracking */}
          <div className="border-l-2 border-[#c17f4e]/25 pl-4">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-medium block mb-2"
              style={{ color: "rgba(193,127,78,0.6)" }}
            >
              Tracking
            </span>
            <p className="text-sm text-[#3d2b1f]/70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
              I will be tracking <span className="font-semibold text-[#3d2b1f]">{profileData.symptomsTracked} symptoms</span> to
              better understand my body's patterns and rhythms.
            </p>
          </div>
        </div>

        {/* Closing flourish */}
        <div className="flex justify-center mt-5 mb-2">
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" opacity="0.15">
            <path d="M0 6H25M35 6H60" stroke="#3d2b1f" strokeWidth="0.8" />
            <circle cx="30" cy="6" r="3" fill="none" stroke="#c17f4e" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      {/* Wax seal of completion */}
      <div className="z-10 flex justify-center mb-6">
        <div className="relative">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Outer wax drip shape */}
            <path
              d="M40 4C40 4 58 4 66 12C74 20 76 40 76 40C76 40 76 60 66 68C58 76 40 76 40 76C40 76 22 76 14 68C6 60 4 40 4 40C4 40 6 20 14 12C22 4 40 4 40 4Z"
              fill="#c17f4e"
              opacity="0.9"
            />
            {/* Inner ring */}
            <circle cx="40" cy="40" r="24" fill="none" stroke="rgba(247,243,238,0.3)" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="20" fill="none" stroke="rgba(247,243,238,0.15)" strokeWidth="0.8" />
            {/* Checkmark */}
            <path
              d="M30 40L37 47L52 32"
              stroke="#f7f3ee"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Seal text arc (simplified) */}
            <text
              x="40" y="63"
              textAnchor="middle"
              fill="rgba(247,243,238,0.5)"
              fontSize="6"
              letterSpacing="0.15em"
              fontWeight="500"
            >
              COMPLETE
            </text>
          </svg>
          {/* Ribbon tails */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-4">
            <div
              className="w-3 h-6 rounded-b-sm"
              style={{ background: "#c17f4e", opacity: 0.5, transform: "rotate(-8deg)" }}
            />
            <div
              className="w-3 h-6 rounded-b-sm"
              style={{ background: "#c17f4e", opacity: 0.5, transform: "rotate(8deg)" }}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full z-10 space-y-4 mt-auto">
        <button
          className="w-full h-14 rounded-xl font-semibold text-sm text-[#f7f3ee] transition-colors"
          style={{
            background: "#3d2b1f",
            boxShadow: "0 4px 16px rgba(61,43,31,0.2)",
          }}
        >
          Start Your Journey
        </button>
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-px bg-[#3d2b1f]/10" />
          <p
            className="text-[11px] font-light"
            style={{ color: "rgba(61,43,31,0.3)", fontStyle: "italic", fontFamily: "Georgia, serif" }}
          >
            A new chapter begins
          </p>
          <div className="w-6 h-px bg-[#3d2b1f]/10" />
        </div>
      </div>
    </div>
  );
}
