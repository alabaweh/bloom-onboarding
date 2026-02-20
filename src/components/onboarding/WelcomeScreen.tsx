"use client";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-12 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-[-120px] right-[-80px] w-[300px] h-[300px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #f9a8d4, transparent 70%)" }} />
      <div className="absolute bottom-[-100px] left-[-60px] w-[250px] h-[250px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #c084fc, transparent 70%)" }} />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[200px] h-[200px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }} />

      {/* Top spacer */}
      <div />

      {/* Center content */}
      <div className="flex flex-col items-center text-center z-10 space-y-8">
        {/* Logo / Icon */}
        <div className="animate-scale-in">
          <div className="w-28 h-28 rounded-[32px] flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, #fce7f3, #f3e8ff)",
              boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15), 0 2px 8px rgba(236, 72, 153, 0.1)",
            }}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path
                d="M28 8C28 8 20 16 16 24C12 32 16 44 28 48C40 44 44 32 40 24C36 16 28 8 28 8Z"
                fill="url(#bloom-gradient)"
                stroke="url(#bloom-stroke)"
                strokeWidth="1.5"
              />
              <path
                d="M28 18C28 18 24 24 22 28C20 32 22 38 28 40C34 38 36 32 34 28C32 24 28 18 28 18Z"
                fill="white"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="bloom-gradient" x1="16" y1="8" x2="40" y2="48">
                  <stop stopColor="#ec4899" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="bloom-stroke" x1="16" y1="8" x2="40" y2="48">
                  <stop stopColor="#db2777" />
                  <stop offset="1" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
            {/* Decorative floating dot */}
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-warm-300 animate-float opacity-80" />
          </div>
        </div>

        {/* App name */}
        <div className="space-y-3 animate-fade-in-up animation-delay-200" style={{ opacity: 0 }}>
          <h1 className="text-5xl font-display font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #831843 50%, #7e22ce 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Dunia
          </h1>
          <p className="text-lg text-gray-500 font-light tracking-wide">
            Your Cycle, Your Power
          </p>
        </div>

        {/* Description */}
        <div className="animate-fade-in-up animation-delay-400 max-w-[280px]" style={{ opacity: 0 }}>
          <p className="text-base text-gray-400 leading-relaxed">
            Understand your body with precision. Track your cycle, predict fertility, and embrace every phase.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in-up animation-delay-600" style={{ opacity: 0 }}>
          {["Cycle Tracking", "Fertility", "Wellness"].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-bloom-50 text-bloom-600 border border-bloom-100"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full space-y-4 z-10 animate-fade-in-up animation-delay-700" style={{ opacity: 0 }}>
        <button
          onClick={onGetStarted}
          className="w-full h-14 rounded-2xl font-semibold text-base text-white
            transition-all duration-300 ease-out active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #ec4899, #a855f7)",
            boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3), 0 2px 8px rgba(236, 72, 153, 0.2)",
          }}
        >
          Get Started
        </button>
        <p className="text-center text-xs text-gray-400">
          Already have an account?{" "}
          <button className="text-plum-500 font-medium hover:text-plum-700 transition-colors">
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
