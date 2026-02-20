"use client";

/**
 * VARIANT C — "Aurora"
 * Summary / All Set screen: Aurora-lit glass cards stacked vertically.
 * Dark bg (#0a0e1a), glassmorphism, aurora colors.
 * Big glowing "Begin" button at bottom.
 */
export default function SummaryC() {
  const profileData = {
    age: "25-30",
    cycleLength: "28-30 days",
    periodLength: "4-5 days",
    goals: ["Period Tracking", "Fertility"],
    symptomsTracked: 6,
  };

  const glassCardStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden"
      style={{ background: "#0a0e1a" }}
    >
      {/* Aurora blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-[-10%] left-[-20%] w-[450px] h-[450px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 60%)",
            filter: "blur(90px)",
            animation: "auroraShift1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[30%] right-[-15%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent 60%)",
            filter: "blur(80px)",
            animation: "auroraShift2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[5%] left-[5%] w-[350px] h-[350px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #ec4899, transparent 60%)",
            filter: "blur(70px)",
            animation: "auroraShift3 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[25%] right-[10%] w-[250px] h-[250px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #10b981, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Header */}
      <div className="z-10 text-center mb-6 mt-2">
        {/* Completion ring */}
        <div className="mx-auto mb-5 relative w-16 h-16">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
            <circle
              cx="32" cy="32" r="28"
              stroke="url(#aurora-ring)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="176"
              strokeDashoffset="0"
              transform="rotate(-90 32 32)"
            />
            <defs>
              <linearGradient id="aurora-ring" x1="0" y1="0" x2="64" y2="64">
                <stop stopColor="#06b6d4" />
                <stop offset="0.5" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path d="M2 8L7.5 13.5L18 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
          You're All Set
        </h1>
        <p className="text-sm text-white/30 font-light">
          Your personalized profile is ready
        </p>
      </div>

      {/* Stacked glass cards */}
      <div className="z-10 w-full max-w-sm space-y-3 flex-1">
        {/* Profile Card */}
        <div className="rounded-2xl p-5 backdrop-blur-xl" style={glassCardStyle}>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(6,182,212,0.2)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="4" r="2.5" stroke="#06b6d4" strokeWidth="1.2" />
                <path d="M1.5 11C1.5 8.5 3.5 7 6 7C8.5 7 10.5 8.5 10.5 11" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[11px] text-white/40 tracking-wider uppercase font-medium">
              Profile
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <span className="text-lg font-bold text-white">{profileData.age}</span>
              <span className="text-[10px] text-white/25 block mt-0.5">Age</span>
            </div>
            <div>
              <span className="text-lg font-bold text-white">{profileData.cycleLength.split(" ")[0]}</span>
              <span className="text-[10px] text-white/25 block mt-0.5">Cycle days</span>
            </div>
            <div>
              <span className="text-lg font-bold text-white">{profileData.periodLength.split(" ")[0]}</span>
              <span className="text-[10px] text-white/25 block mt-0.5">Period days</span>
            </div>
          </div>
        </div>

        {/* Goals Card */}
        <div className="rounded-2xl p-5 backdrop-blur-xl" style={glassCardStyle}>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(139,92,246,0.2)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#8b5cf6" strokeWidth="1.2" />
                <circle cx="6" cy="6" r="2" fill="#8b5cf6" />
              </svg>
            </div>
            <span className="text-[11px] text-white/40 tracking-wider uppercase font-medium">
              Goals
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.goals.map((goal, i) => {
              const colors = ["#06b6d4", "#8b5cf6"];
              return (
                <span
                  key={goal}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium backdrop-blur-md"
                  style={{
                    color: colors[i],
                    background: `${colors[i]}15`,
                    border: `1px solid ${colors[i]}25`,
                  }}
                >
                  {goal}
                </span>
              );
            })}
          </div>
        </div>

        {/* Tracking Card */}
        <div className="rounded-2xl p-5 backdrop-blur-xl" style={glassCardStyle}>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(236,72,153,0.2)" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 9L3.5 4L6 7L8.5 2L11 5" stroke="#ec4899" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[11px] text-white/40 tracking-wider uppercase font-medium">
              Tracking
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">{profileData.symptomsTracked}</span>
              <span className="text-sm text-white/25">symptoms</span>
            </div>
            {/* Mini bar chart */}
            <div className="flex items-end gap-1 h-8">
              {[0.4, 0.7, 0.5, 1, 0.6, 0.8].map((h, i) => {
                const barColors = ["#06b6d4", "#8b5cf6", "#ec4899", "#10b981", "#06b6d4", "#8b5cf6"];
                return (
                  <div
                    key={i}
                    className="w-2 rounded-full"
                    style={{
                      height: `${h * 100}%`,
                      background: barColors[i],
                      opacity: 0.6,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Readiness Card */}
        <div className="rounded-2xl p-5 backdrop-blur-xl" style={glassCardStyle}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] text-white/40 tracking-wider uppercase font-medium block mb-1">
                Readiness
              </span>
              <span className="text-sm text-white/60 font-light">
                Everything is configured
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10b981]"
                style={{ boxShadow: "0 0 8px rgba(16,185,129,0.5)" }} />
              <span className="text-sm font-bold text-[#10b981]">Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full z-10 mt-6 px-2">
        <button
          className="w-full h-16 rounded-2xl font-bold text-base text-white backdrop-blur-xl transition-all"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.5), rgba(139,92,246,0.5), rgba(236,72,153,0.5))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 0 40px rgba(139,92,246,0.25), 0 0 80px rgba(6,182,212,0.15), 0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          Begin
        </button>
        <p className="text-center text-xs text-white/20 mt-3">
          Your journey starts now
        </p>
      </div>

      <style jsx>{`
        @keyframes auroraShift1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        @keyframes auroraShift2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }
        @keyframes auroraShift3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, -15px); }
        }
      `}</style>
    </div>
  );
}
