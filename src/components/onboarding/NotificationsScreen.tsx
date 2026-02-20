"use client";

import { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface NotificationsScreenProps {
  onNext: (prefs: Record<string, boolean>) => void;
  onBack: () => void;
  onSkip: () => void;
}

const notifications = [
  {
    id: "period-reminder",
    title: "Period Predictions",
    description: "Get notified 2 days before your predicted period starts",
    icon: "🩸",
    defaultOn: true,
  },
  {
    id: "fertile-window",
    title: "Fertile Window",
    description: "Alerts when your fertile window begins and peaks",
    icon: "💜",
    defaultOn: true,
  },
  {
    id: "daily-log",
    title: "Daily Check-in",
    description: "A gentle reminder to log your symptoms each day",
    icon: "📝",
    defaultOn: false,
  },
  {
    id: "insights",
    title: "Weekly Insights",
    description: "Personalized health insights based on your data",
    icon: "📊",
    defaultOn: true,
  },
  {
    id: "wellness-tips",
    title: "Wellness Tips",
    description: "Phase-specific nutrition, exercise, and self-care tips",
    icon: "🌿",
    defaultOn: false,
  },
];

export default function NotificationsScreen({ onNext, onBack, onSkip }: NotificationsScreenProps) {
  const [prefs, setPrefs] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    notifications.forEach((n) => {
      initial[n.id] = n.defaultOn;
    });
    return initial;
  });

  const toggle = (id: string) => {
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const enabledCount = Object.values(prefs).filter(Boolean).length;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-4">
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #fce7f3, #f3e8ff)",
              boxShadow: "0 4px 16px rgba(168, 85, 247, 0.1)",
            }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4C12 4 8 8 8 14V20L5 24H27L24 20V14C24 8 20 4 16 4Z"
                fill="none" stroke="url(#bell)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 24C12 26.209 13.791 28 16 28C18.209 28 20 26.209 20 24"
                stroke="url(#bell)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="bell" x1="5" y1="4" x2="27" y2="28">
                  <stop stopColor="#ec4899" /><stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Stay in the Know
          </h2>
          <p className="text-sm text-gray-400 max-w-[260px] mx-auto">
            Choose which reminders help you the most
          </p>
        </div>

        {/* Notification toggles */}
        <div className="w-full max-w-sm mx-auto space-y-3">
          {notifications.map((notif, index) => (
            <div
              key={notif.id}
              className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-gray-100 animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${200 + index * 100}ms` }}
            >
              <span className="text-2xl">{notif.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{notif.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{notif.description}</p>
              </div>
              {/* Toggle */}
              <button
                onClick={() => toggle(notif.id)}
                className={`w-12 h-7 rounded-full p-0.5 transition-all duration-300 shrink-0 ${
                  prefs[notif.id] ? "" : "bg-gray-200"
                }`}
                style={
                  prefs[notif.id]
                    ? { background: "linear-gradient(135deg, #ec4899, #a855f7)" }
                    : undefined
                }
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                    prefs[notif.id] ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Status */}
        <p className="text-center text-xs text-gray-400 mt-4">
          {enabledCount} of {notifications.length} notifications enabled
        </p>
      </div>

      <NavigationButtons
        onNext={() => onNext(prefs)}
        onBack={onBack}
        onSkip={onSkip}
        showSkip={true}
        nextLabel="Continue"
      />
    </div>
  );
}
