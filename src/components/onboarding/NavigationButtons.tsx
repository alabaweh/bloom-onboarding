"use client";

interface NavigationButtonsProps {
  onNext: () => void;
  onBack: () => void;
  onSkip?: () => void;
  nextLabel?: string;
  showBack?: boolean;
  showSkip?: boolean;
  disabled?: boolean;
}

export default function NavigationButtons({
  onNext,
  onBack,
  onSkip,
  nextLabel = "Continue",
  showBack = true,
  showSkip = false,
  disabled = false,
}: NavigationButtonsProps) {
  return (
    <div className="w-full px-6 pb-8 pt-4 space-y-3">
      <button
        onClick={onNext}
        disabled={disabled}
        className="w-full h-14 rounded-2xl font-semibold text-base text-white
          transition-all duration-300 ease-out
          disabled:opacity-40 disabled:cursor-not-allowed
          active:scale-[0.98]"
        style={{
          background: disabled
            ? "#d1d5db"
            : "linear-gradient(135deg, #ec4899, #a855f7)",
          boxShadow: disabled
            ? "none"
            : "0 4px 20px rgba(168, 85, 247, 0.3), 0 2px 8px rgba(236, 72, 153, 0.2)",
        }}
      >
        {nextLabel}
      </button>
      <div className="flex items-center justify-between">
        {showBack ? (
          <button
            onClick={onBack}
            className="text-sm font-medium text-plum-400 hover:text-plum-600 transition-colors px-2 py-1"
          >
            Back
          </button>
        ) : (
          <div />
        )}
        {showSkip && onSkip ? (
          <button
            onClick={onSkip}
            className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors px-2 py-1"
          >
            Skip for now
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
