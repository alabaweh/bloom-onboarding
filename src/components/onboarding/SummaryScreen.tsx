"use client";

interface SummaryScreenProps {
  data: {
    goals: string[];
    symptoms: string[];
    age: string;
    cycleLength: string;
    periodLength: string;
  };
  onComplete: () => void;
  onBack: () => void;
}

const goalLabels: Record<string, string> = {
  "period-tracking": "Period Tracking",
  fertility: "Fertility Insights",
  pregnancy: "Pregnancy Planning",
  wellness: "Wellness Tracking",
};

const goalIcons: Record<string, string> = {
  "period-tracking": "🩸",
  fertility: "💜",
  pregnancy: "⭐",
  wellness: "🌿",
};

export default function SummaryScreen({ data, onComplete, onBack }: SummaryScreenProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center px-6 pt-16 pb-4">
        {/* Celebration animation */}
        <div className="mb-6 animate-scale-in">
          <div className="w-24 h-24 rounded-[28px] flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, #fce7f3, #f3e8ff, #fef3c7)",
              boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15)",
            }}>
            <span className="text-5xl">🌸</span>
            {/* Floating particles */}
            <div className="absolute -top-3 -right-1 w-4 h-4 rounded-full bg-bloom-300 animate-float opacity-60" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-plum-300 animate-float animation-delay-500 opacity-60" />
            <div className="absolute top-0 -left-3 w-2.5 h-2.5 rounded-full bg-warm-300 animate-float animation-delay-300 opacity-60" />
          </div>
        </div>

        <div className="text-center mb-8 animate-fade-in-up animation-delay-200" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            You&apos;re All Set!
          </h2>
          <p className="text-sm text-gray-400 max-w-[280px] mx-auto">
            Dunia is personalized and ready to support your journey
          </p>
        </div>

        {/* Profile summary card */}
        <div className="w-full max-w-sm space-y-4">
          {/* Profile info */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 animate-fade-in-up animation-delay-300" style={{ opacity: 0 }}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Your Profile
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Age Range</span>
                <span className="text-sm font-semibold text-foreground">{data.age || "Not set"}</span>
              </div>
              <div className="h-px bg-gray-50" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Cycle Length</span>
                <span className="text-sm font-semibold text-foreground">{data.cycleLength ? `${data.cycleLength} days` : "Not set"}</span>
              </div>
              <div className="h-px bg-gray-50" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Period Length</span>
                <span className="text-sm font-semibold text-foreground">{data.periodLength || "Not set"}</span>
              </div>
            </div>
          </div>

          {/* Goals */}
          {data.goals.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 animate-fade-in-up animation-delay-400" style={{ opacity: 0 }}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Your Goals
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.goals.map((goal) => (
                  <span
                    key={goal}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-bloom-50 text-bloom-700 border border-bloom-100"
                  >
                    <span>{goalIcons[goal] || "✨"}</span>
                    {goalLabels[goal] || goal}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tracking symptoms count */}
          {data.symptoms.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 animate-fade-in-up animation-delay-500" style={{ opacity: 0 }}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Tracking
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fce7f3, #f3e8ff)" }}>
                  <span className="text-lg font-bold text-bloom-600">{data.symptoms.length}</span>
                </div>
                <p className="text-sm text-gray-500">
                  symptoms selected for daily tracking
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Motivational note */}
        <div className="mt-6 p-4 rounded-2xl max-w-sm w-full animate-fade-in-up animation-delay-600" style={{
          opacity: 0,
          background: "linear-gradient(135deg, #fdf2f8, #faf5ff, #fffbeb)",
          border: "1px solid #fce7f3",
        }}>
          <p className="text-sm text-center text-bloom-800 leading-relaxed">
            &ldquo;Knowledge of your cycle is a superpower. Welcome to Dunia.&rdquo;
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full px-6 pb-8 pt-4 space-y-3">
        <button
          onClick={onComplete}
          className="w-full h-14 rounded-2xl font-semibold text-base text-white
            transition-all duration-300 ease-out active:scale-[0.98] animate-fade-in-up animation-delay-700"
          style={{
            opacity: 0,
            background: "linear-gradient(135deg, #ec4899, #a855f7)",
            boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3), 0 2px 8px rgba(236, 72, 153, 0.2)",
          }}
        >
          Start Your Journey
        </button>
        <button
          onClick={onBack}
          className="w-full text-sm font-medium text-plum-400 hover:text-plum-600 transition-colors py-2"
        >
          Go back and edit
        </button>
      </div>
    </div>
  );
}
