"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full px-6 pt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-bloom-400 tracking-wide">
          {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-xs font-medium text-bloom-300">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-bloom-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #f9a8d4, #c084fc, #a855f7)",
          }}
        />
      </div>
    </div>
  );
}
