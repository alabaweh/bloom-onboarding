"use client";

/**
 * VARIANT E — "Pulse"
 * Summary / All Set screen: "SYSTEM INITIALIZED" terminal boot sequence.
 * Shows all loaded modules as a system dashboard.
 * Black bg (#0a0a0a), neon pink (#ff3e8a).
 */
export default function SummaryE() {
  const profileData = {
    age: "25-30",
    cycleLength: "28-30 days",
    periodLength: "4-5 days",
    goals: ["Period Tracking", "Fertility"],
    symptomsTracked: 6,
  };

  const modules = [
    { id: "USR_PROFILE", status: "LOADED", detail: `Age: ${profileData.age}` },
    { id: "CYC_ENGINE", status: "LOADED", detail: `Cycle: ${profileData.cycleLength}` },
    { id: "PER_TRACKER", status: "LOADED", detail: `Period: ${profileData.periodLength}` },
    { id: "GOAL_SYS", status: "LOADED", detail: `${profileData.goals.length} goals active` },
    { id: "SYM_MONITOR", status: "LOADED", detail: `${profileData.symptomsTracked} symptoms` },
    { id: "FERT_MODULE", status: "LOADED", detail: "Fertility mode ON" },
  ];

  return (
    <div className="relative flex flex-col min-h-screen px-5 py-10 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow accent */}
      <div
        className="absolute top-[20%] left-[50%] translate-x-[-50%] w-[300px] h-[200px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ff3e8a, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Terminal header */}
      <div className="z-10 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff3e8a]"
            style={{ boxShadow: "0 0 8px rgba(255,62,138,0.6)", animation: "pulse-dot 2s ease-in-out infinite" }} />
          <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase" style={{ fontFamily: "monospace" }}>
            sys.status: online
          </span>
        </div>

        <h1
          className="text-3xl font-bold text-white tracking-[-0.02em] mb-1"
          style={{ fontFamily: "system-ui" }}
        >
          SYSTEM INITIALIZED
        </h1>
        <p className="text-xs text-white/15 tracking-wider" style={{ fontFamily: "monospace" }}>
          All modules loaded successfully. Ready to begin.
        </p>
      </div>

      {/* Boot log output */}
      <div
        className="z-10 rounded-lg p-4 mb-5"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] text-[#ff3e8a]/60 tracking-wider uppercase" style={{ fontFamily: "monospace" }}>
            boot_log.v1.0
          </span>
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-[10px] text-white/10" style={{ fontFamily: "monospace" }}>
            6/6
          </span>
        </div>
        <div className="space-y-1.5" style={{ fontFamily: "monospace" }}>
          {modules.map((mod, i) => (
            <div key={mod.id} className="flex items-center gap-2 text-[11px]">
              <span className="text-[#ff3e8a]/40">[{String(i + 1).padStart(2, "0")}]</span>
              <span className="text-white/50 w-24 shrink-0">{mod.id}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded"
                style={{
                  color: "#10b981",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.15)",
                }}
              >
                {mod.status}
              </span>
              <span className="text-white/20 text-[10px] ml-auto">{mod.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Profile data dashboard */}
      <div className="z-10 grid grid-cols-2 gap-2.5 mb-5">
        {/* Cycle card */}
        <div
          className="rounded-lg p-4"
          style={{
            background: "rgba(255,62,138,0.04)",
            border: "1px solid rgba(255,62,138,0.08)",
          }}
        >
          <span className="text-[9px] text-[#ff3e8a]/40 tracking-wider uppercase block mb-2" style={{ fontFamily: "monospace" }}>
            CYC_LEN
          </span>
          <span className="text-2xl font-bold text-white block">28-30</span>
          <span className="text-[10px] text-white/15" style={{ fontFamily: "monospace" }}>days</span>
        </div>

        {/* Period card */}
        <div
          className="rounded-lg p-4"
          style={{
            background: "rgba(139,92,246,0.04)",
            border: "1px solid rgba(139,92,246,0.08)",
          }}
        >
          <span className="text-[9px] text-[#8b5cf6]/40 tracking-wider uppercase block mb-2" style={{ fontFamily: "monospace" }}>
            PER_DUR
          </span>
          <span className="text-2xl font-bold text-white block">4-5</span>
          <span className="text-[10px] text-white/15" style={{ fontFamily: "monospace" }}>days</span>
        </div>

        {/* Goals card */}
        <div
          className="rounded-lg p-4"
          style={{
            background: "rgba(6,182,212,0.04)",
            border: "1px solid rgba(6,182,212,0.08)",
          }}
        >
          <span className="text-[9px] text-[#06b6d4]/40 tracking-wider uppercase block mb-2" style={{ fontFamily: "monospace" }}>
            GOALS
          </span>
          <span className="text-2xl font-bold text-white block">{profileData.goals.length}</span>
          <span className="text-[10px] text-white/15" style={{ fontFamily: "monospace" }}>active</span>
        </div>

        {/* Symptoms card */}
        <div
          className="rounded-lg p-4"
          style={{
            background: "rgba(16,185,129,0.04)",
            border: "1px solid rgba(16,185,129,0.08)",
          }}
        >
          <span className="text-[9px] text-[#10b981]/40 tracking-wider uppercase block mb-2" style={{ fontFamily: "monospace" }}>
            SYM_TRK
          </span>
          <span className="text-2xl font-bold text-white block">{profileData.symptomsTracked}</span>
          <span className="text-[10px] text-white/15" style={{ fontFamily: "monospace" }}>tracked</span>
        </div>
      </div>

      {/* Goals loaded */}
      <div className="z-10 mb-6">
        <span className="text-[9px] text-white/15 tracking-wider uppercase block mb-2" style={{ fontFamily: "monospace" }}>
          goal_modules_loaded:
        </span>
        <div className="flex gap-2">
          {profileData.goals.map((goal) => (
            <span
              key={goal}
              className="px-3 py-1.5 rounded text-[11px] font-medium"
              style={{
                color: "#ff3e8a",
                background: "rgba(255,62,138,0.06)",
                border: "1px solid rgba(255,62,138,0.12)",
                fontFamily: "monospace",
              }}
            >
              {goal}
            </span>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="z-10 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] text-white/15 tracking-wider uppercase" style={{ fontFamily: "monospace" }}>
            initialization
          </span>
          <span className="text-[11px] text-[#ff3e8a] font-bold" style={{ fontFamily: "monospace" }}>
            100%
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, #ff3e8a, #d62872)",
              boxShadow: "0 0 12px rgba(255,62,138,0.4)",
            }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="w-full z-10 space-y-3 mt-auto">
        <button
          className="w-full h-14 rounded-xl font-bold text-sm tracking-wide text-white transition-all"
          style={{
            background: "linear-gradient(135deg, #ff3e8a, #d62872)",
            boxShadow: "0 0 30px rgba(255,62,138,0.3), 0 4px 16px rgba(255,62,138,0.2)",
            fontFamily: "system-ui",
          }}
        >
          START YOUR JOURNEY
        </button>
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-1 rounded-full bg-[#ff3e8a]/30" />
          <span className="text-[10px] text-white/10 tracking-wider" style={{ fontFamily: "monospace" }}>
            all systems operational
          </span>
          <div className="w-1 h-1 rounded-full bg-[#ff3e8a]/30" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
