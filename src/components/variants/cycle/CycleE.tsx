"use client";

/**
 * VARIANT E — "Pulse"
 * Concept: Phases as overlapping waveform signals on a dark oscilloscope.
 * Black bg (#0a0a0a), neon pink (#ff3e8a).
 * Each phase is a distinct biometric waveform with unique frequency / shape.
 */

const phases = [
  {
    name: "Menstrual",
    days: "Day 1-5",
    description: "Low amplitude — rest mode",
    color: "#ff3e8a",
    waveType: "slow",
    bpm: "58",
  },
  {
    name: "Follicular",
    days: "Day 6-13",
    description: "Rising frequency — building",
    color: "#8b5cf6",
    waveType: "rising",
    bpm: "72",
  },
  {
    name: "Ovulation",
    days: "Day 14-16",
    description: "Peak signal — max output",
    color: "#06b6d4",
    waveType: "peak",
    bpm: "88",
  },
  {
    name: "Luteal",
    days: "Day 17-28",
    description: "Decaying wave — winding down",
    color: "#f59e0b",
    waveType: "decay",
    bpm: "65",
  },
];

function generateWaveform(
  type: string,
  width: number,
  yCenter: number,
  amplitude: number
): string {
  const points: string[] = [];
  const steps = 60;
  const stepWidth = width / steps;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    let y = yCenter;

    switch (type) {
      case "slow": {
        // Low, slow sine wave with occasional deeper dips
        const base = Math.sin(t * Math.PI * 3) * amplitude * 0.4;
        const spike =
          t > 0.3 && t < 0.35
            ? -amplitude * 0.9
            : t > 0.65 && t < 0.7
            ? -amplitude * 0.7
            : 0;
        y = yCenter + base + spike;
        break;
      }
      case "rising": {
        // Frequency increases from left to right
        const freq = 2 + t * 8;
        const amp = amplitude * (0.3 + t * 0.7);
        y = yCenter + Math.sin(t * Math.PI * freq) * amp;
        break;
      }
      case "peak": {
        // Sharp EKG-like spikes
        const cycle = (t * 5) % 1;
        if (cycle > 0.4 && cycle < 0.45) {
          y = yCenter - amplitude * 0.5;
        } else if (cycle > 0.45 && cycle < 0.5) {
          y = yCenter + amplitude;
        } else if (cycle > 0.5 && cycle < 0.55) {
          y = yCenter - amplitude * 0.8;
        } else if (cycle > 0.55 && cycle < 0.6) {
          y = yCenter + amplitude * 0.3;
        } else {
          y = yCenter + Math.sin(cycle * Math.PI * 2) * amplitude * 0.08;
        }
        break;
      }
      case "decay": {
        // Starts strong, decays exponentially
        const decayAmp = amplitude * Math.exp(-t * 2.5);
        y =
          yCenter +
          Math.sin(t * Math.PI * 6) * decayAmp +
          Math.cos(t * Math.PI * 3) * decayAmp * 0.3;
        break;
      }
    }

    points.push(`${i === 0 ? "M" : "L"}${(i * stepWidth).toFixed(1)} ${y.toFixed(1)}`);
  }

  return points.join(" ");
}

export default function CycleE() {
  const svgWidth = 360;
  const waveHeight = 60;
  const waveGap = 18;
  const startY = 40;
  const totalHeight = startY + (waveHeight + waveGap) * 4 + 20;

  return (
    <div className="relative flex flex-col items-center min-h-screen px-6 py-14 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grid (oscilloscope) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
        }}
      />

      {/* Neon glow behind waveforms */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[350px] h-[300px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #ff3e8a, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Title bar — terminal style */}
      <div className="w-full max-w-sm z-10 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#ff3e8a] opacity-80" />
          <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase font-mono">
            Signal Monitor
          </span>
        </div>
        <h2
          className="text-2xl font-bold text-white tracking-[-0.02em] mb-1"
          style={{ fontFamily: "system-ui" }}
        >
          CYCLE WAVEFORMS
        </h2>
        <p className="text-xs text-white/20 font-mono">
          4 phases &middot; 28-day cycle &middot; live signal
        </p>
      </div>

      {/* Oscilloscope display */}
      <div
        className="relative w-full max-w-sm z-10 rounded-xl overflow-hidden mb-6"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* CRT screen inner glow */}
        <div
          className="absolute inset-0 opacity-[0.03] rounded-xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.1), transparent 70%)",
          }}
        />

        <svg
          viewBox={`0 0 ${svgWidth} ${totalHeight}`}
          fill="none"
          className="w-full"
        >
          <defs>
            {phases.map((phase, i) => (
              <linearGradient
                key={i}
                id={`wave-stroke-${i}`}
                x1="0"
                y1="0"
                x2={svgWidth}
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={phase.color} stopOpacity="0.1" />
                <stop offset="0.2" stopColor={phase.color} stopOpacity="0.9" />
                <stop offset="0.8" stopColor={phase.color} stopOpacity="0.9" />
                <stop offset="1" stopColor={phase.color} stopOpacity="0.1" />
              </linearGradient>
            ))}

            {/* Glow filter */}
            <filter id="wave-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Horizontal division lines */}
          {phases.map((_, i) => {
            const y = startY + (waveHeight + waveGap) * i;
            return (
              <g key={`grid-${i}`}>
                {/* Center line for this channel */}
                <line
                  x1="0"
                  y1={y + waveHeight / 2}
                  x2={svgWidth}
                  y2={y + waveHeight / 2}
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="1"
                />
                {/* Channel separator */}
                {i > 0 && (
                  <line
                    x1="0"
                    y1={y - waveGap / 2}
                    x2={svgWidth}
                    y2={y - waveGap / 2}
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                )}
              </g>
            );
          })}

          {/* Time markers along bottom */}
          {Array.from({ length: 5 }).map((_, i) => {
            const x = (svgWidth / 4) * i;
            return (
              <g key={`time-${i}`}>
                <line
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={totalHeight}
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="0.5"
                />
                <text
                  x={x + 4}
                  y={totalHeight - 4}
                  fill="rgba(255,255,255,0.1)"
                  fontSize="7"
                  style={{ fontFamily: "monospace" }}
                >
                  {`D${(i * 7) + 1}`}
                </text>
              </g>
            );
          })}

          {/* Waveform paths */}
          {phases.map((phase, i) => {
            const yCenter = startY + (waveHeight + waveGap) * i + waveHeight / 2;
            const amplitude = waveHeight / 2 - 4;
            const path = generateWaveform(
              phase.waveType,
              svgWidth,
              yCenter,
              amplitude
            );

            return (
              <g key={i}>
                {/* Glow behind waveform */}
                <path
                  d={path}
                  stroke={phase.color}
                  strokeWidth="4"
                  fill="none"
                  opacity="0.15"
                  style={{ filter: "blur(4px)" }}
                />
                {/* Main waveform line */}
                <path
                  d={path}
                  stroke={`url(#wave-stroke-${i})`}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinejoin="round"
                  style={{ filter: "url(#wave-glow)" }}
                />
                {/* Channel label */}
                <text
                  x="8"
                  y={startY + (waveHeight + waveGap) * i + 10}
                  fill={phase.color}
                  fillOpacity="0.5"
                  fontSize="8"
                  fontWeight="600"
                  style={{ fontFamily: "monospace" }}
                >
                  {`CH${i + 1}`}
                </text>
                {/* BPM indicator on right */}
                <text
                  x={svgWidth - 8}
                  y={startY + (waveHeight + waveGap) * i + 10}
                  fill={phase.color}
                  fillOpacity="0.3"
                  fontSize="7"
                  textAnchor="end"
                  style={{ fontFamily: "monospace" }}
                >
                  {`${phase.bpm} BPM`}
                </text>
              </g>
            );
          })}

          {/* Playhead / scan line */}
          <line
            x1={svgWidth * 0.72}
            y1="0"
            x2={svgWidth * 0.72}
            y2={totalHeight}
            stroke="#ff3e8a"
            strokeWidth="0.5"
            opacity="0.2"
          >
            <animate
              attributeName="x1"
              values={`${svgWidth * 0.7};${svgWidth * 0.74};${svgWidth * 0.7}`}
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values={`${svgWidth * 0.7};${svgWidth * 0.74};${svgWidth * 0.7}`}
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      </div>

      {/* Phase data readout — terminal style */}
      <div className="w-full max-w-sm z-10 space-y-1.5">
        {phases.map((phase, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-2.5 px-3 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {/* Status indicator dot */}
            <div className="flex-shrink-0 relative">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: phase.color,
                  boxShadow: `0 0 8px ${phase.color}60`,
                }}
              />
            </div>

            {/* Phase info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-xs font-bold tracking-wide"
                  style={{ color: phase.color, fontFamily: "system-ui" }}
                >
                  {phase.name.toUpperCase()}
                </span>
                <span
                  className="text-[9px] text-white/15 font-mono"
                >
                  {phase.days}
                </span>
              </div>
              <p className="text-[10px] text-white/20 font-mono mt-0.5">
                {phase.description}
              </p>
            </div>

            {/* Mini waveform preview */}
            <div className="flex-shrink-0">
              <svg width="40" height="16" viewBox="0 0 40 16">
                <path
                  d={generateWaveform(phase.waveType, 40, 8, 5)}
                  stroke={phase.color}
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full max-w-sm mt-auto pt-8 z-10">
        <button
          className="w-full h-14 rounded-xl font-bold text-sm tracking-wide text-white transition-all"
          style={{
            background: "linear-gradient(135deg, #ff3e8a, #d62872)",
            boxShadow:
              "0 0 24px rgba(255,62,138,0.3), 0 4px 12px rgba(255,62,138,0.2)",
          }}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
