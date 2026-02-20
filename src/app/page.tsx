"use client";

import { useState } from "react";

// ─── Onboarding 1 — Celestial "Luna" ───
import Celestial_Welcome from "@/components/variants/onboarding1/Welcome";
import Celestial_Features from "@/components/variants/onboarding1/Features";
import Celestial_Cycle from "@/components/variants/onboarding1/Cycle";
import Celestial_Profile from "@/components/variants/onboarding1/Profile";
import Celestial_Period from "@/components/variants/onboarding1/Period";
import Celestial_Symptoms from "@/components/variants/onboarding1/Symptoms";
import Celestial_Goals from "@/components/variants/onboarding1/Goals";
import Celestial_Notifications from "@/components/variants/onboarding1/Notifications";
import Celestial_Summary from "@/components/variants/onboarding1/Summary";

// ─── Onboarding 2 — Topographic "Vela" ───
import Topo_Welcome from "@/components/variants/onboarding2/Welcome";
import Topo_Features from "@/components/variants/onboarding2/Features";
import Topo_Cycle from "@/components/variants/onboarding2/Cycle";
import Topo_Profile from "@/components/variants/onboarding2/Profile";
import Topo_Period from "@/components/variants/onboarding2/Period";
import Topo_Symptoms from "@/components/variants/onboarding2/Symptoms";
import Topo_Goals from "@/components/variants/onboarding2/Goals";
import Topo_Notifications from "@/components/variants/onboarding2/Notifications";
import Topo_Summary from "@/components/variants/onboarding2/Summary";

// ─── Onboarding 3 — Sunrise Warmth "Solara" ───
import Sunrise_Welcome from "@/components/variants/onboarding3/Welcome";
import Sunrise_Features from "@/components/variants/onboarding3/Features";
import Sunrise_Cycle from "@/components/variants/onboarding3/Cycle";
import Sunrise_Profile from "@/components/variants/onboarding3/Profile";
import Sunrise_Period from "@/components/variants/onboarding3/Period";
import Sunrise_Symptoms from "@/components/variants/onboarding3/Symptoms";
import Sunrise_Goals from "@/components/variants/onboarding3/Goals";
import Sunrise_Notifications from "@/components/variants/onboarding3/Notifications";
import Sunrise_Summary from "@/components/variants/onboarding3/Summary";

// ─── Onboarding 4 — Midnight Garden "Bloom" ───
import MidGarden_Welcome from "@/components/variants/onboarding4/Welcome";
import MidGarden_Features from "@/components/variants/onboarding4/Features";
import MidGarden_Cycle from "@/components/variants/onboarding4/Cycle";
import MidGarden_Profile from "@/components/variants/onboarding4/Profile";
import MidGarden_Period from "@/components/variants/onboarding4/Period";
import MidGarden_Symptoms from "@/components/variants/onboarding4/Symptoms";
import MidGarden_Goals from "@/components/variants/onboarding4/Goals";
import MidGarden_Notifications from "@/components/variants/onboarding4/Notifications";
import MidGarden_Summary from "@/components/variants/onboarding4/Summary";

// ─── Onboarding 5 — Soft Clay "Terra" ───
import Clay_Welcome from "@/components/variants/onboarding5/Welcome";
import Clay_Features from "@/components/variants/onboarding5/Features";
import Clay_Cycle from "@/components/variants/onboarding5/Cycle";
import Clay_Profile from "@/components/variants/onboarding5/Profile";
import Clay_Period from "@/components/variants/onboarding5/Period";
import Clay_Symptoms from "@/components/variants/onboarding5/Symptoms";
import Clay_Goals from "@/components/variants/onboarding5/Goals";
import Clay_Notifications from "@/components/variants/onboarding5/Notifications";
import Clay_Summary from "@/components/variants/onboarding5/Summary";

// ─── Onboarding 6 — Arctic Minimal "Frost" ───
import Arctic_Welcome from "@/components/variants/onboarding6/Welcome";
import Arctic_Features from "@/components/variants/onboarding6/Features";
import Arctic_Cycle from "@/components/variants/onboarding6/Cycle";
import Arctic_Profile from "@/components/variants/onboarding6/Profile";
import Arctic_Period from "@/components/variants/onboarding6/Period";
import Arctic_Symptoms from "@/components/variants/onboarding6/Symptoms";
import Arctic_Goals from "@/components/variants/onboarding6/Goals";
import Arctic_Notifications from "@/components/variants/onboarding6/Notifications";
import Arctic_Summary from "@/components/variants/onboarding6/Summary";

// ─── Onboarding 7 — Velvet Dusk "Aura" ───
import Velvet_Welcome from "@/components/variants/onboarding7/Welcome";
import Velvet_Features from "@/components/variants/onboarding7/Features";
import Velvet_Cycle from "@/components/variants/onboarding7/Cycle";
import Velvet_Profile from "@/components/variants/onboarding7/Profile";
import Velvet_Period from "@/components/variants/onboarding7/Period";
import Velvet_Symptoms from "@/components/variants/onboarding7/Symptoms";
import Velvet_Goals from "@/components/variants/onboarding7/Goals";
import Velvet_Notifications from "@/components/variants/onboarding7/Notifications";
import Velvet_Summary from "@/components/variants/onboarding7/Summary";

// ─── Onboarding 8 — Watercolor "Petal" ───
import Water_Welcome from "@/components/variants/onboarding8/Welcome";
import Water_Features from "@/components/variants/onboarding8/Features";
import Water_Cycle from "@/components/variants/onboarding8/Cycle";
import Water_Profile from "@/components/variants/onboarding8/Profile";
import Water_Period from "@/components/variants/onboarding8/Period";
import Water_Symptoms from "@/components/variants/onboarding8/Symptoms";
import Water_Goals from "@/components/variants/onboarding8/Goals";
import Water_Notifications from "@/components/variants/onboarding8/Notifications";
import Water_Summary from "@/components/variants/onboarding8/Summary";

// ─── Onboarding 9 — Kinetic Gradient "VIBE" ───
import Kinetic_Welcome from "@/components/variants/onboarding9/Welcome";
import Kinetic_Features from "@/components/variants/onboarding9/Features";
import Kinetic_Cycle from "@/components/variants/onboarding9/Cycle";
import Kinetic_Profile from "@/components/variants/onboarding9/Profile";
import Kinetic_Period from "@/components/variants/onboarding9/Period";
import Kinetic_Symptoms from "@/components/variants/onboarding9/Symptoms";
import Kinetic_Goals from "@/components/variants/onboarding9/Goals";
import Kinetic_Notifications from "@/components/variants/onboarding9/Notifications";
import Kinetic_Summary from "@/components/variants/onboarding9/Summary";

// ─── Onboarding 10 — Paper Craft "Fold" ───
import Paper_Welcome from "@/components/variants/onboarding10/Welcome";
import Paper_Features from "@/components/variants/onboarding10/Features";
import Paper_Cycle from "@/components/variants/onboarding10/Cycle";
import Paper_Profile from "@/components/variants/onboarding10/Profile";
import Paper_Period from "@/components/variants/onboarding10/Period";
import Paper_Symptoms from "@/components/variants/onboarding10/Symptoms";
import Paper_Goals from "@/components/variants/onboarding10/Goals";
import Paper_Notifications from "@/components/variants/onboarding10/Notifications";
import Paper_Summary from "@/components/variants/onboarding10/Summary";

// ═══════════════════════════════════════════════════════
// App Pages — 10 pages per theme
// ═══════════════════════════════════════════════════════

// ─── App 1 — Celestial "Luna" ───
import Celestial_Dashboard from "@/components/variants/onboarding1-app/Dashboard";
import Celestial_AppCalendar from "@/components/variants/onboarding1-app/Calendar";
import Celestial_DailyLog from "@/components/variants/onboarding1-app/DailyLog";
import Celestial_CycleInsights from "@/components/variants/onboarding1-app/CycleInsights";
import Celestial_LearnHub from "@/components/variants/onboarding1-app/LearnHub";
import Celestial_Fertility from "@/components/variants/onboarding1-app/FertilityCenter";
import Celestial_Community from "@/components/variants/onboarding1-app/Community";
import Celestial_DailyStatus from "@/components/variants/onboarding1-app/DailyStatus";
import Celestial_UserProfile from "@/components/variants/onboarding1-app/UserProfile";
import Celestial_Settings from "@/components/variants/onboarding1-app/Settings";

// ─── App 2 — Topographic "Vela" ───
import Topo_Dashboard from "@/components/variants/onboarding2-app/Dashboard";
import Topo_AppCalendar from "@/components/variants/onboarding2-app/Calendar";
import Topo_DailyLog from "@/components/variants/onboarding2-app/DailyLog";
import Topo_CycleInsights from "@/components/variants/onboarding2-app/CycleInsights";
import Topo_LearnHub from "@/components/variants/onboarding2-app/LearnHub";
import Topo_Fertility from "@/components/variants/onboarding2-app/FertilityCenter";
import Topo_Community from "@/components/variants/onboarding2-app/Community";
import Topo_DailyStatus from "@/components/variants/onboarding2-app/DailyStatus";
import Topo_UserProfile from "@/components/variants/onboarding2-app/UserProfile";
import Topo_Settings from "@/components/variants/onboarding2-app/Settings";

// ─── App 3 — Sunrise Warmth "Solara" ───
import Sunrise_Dashboard from "@/components/variants/onboarding3-app/Dashboard";
import Sunrise_AppCalendar from "@/components/variants/onboarding3-app/Calendar";
import Sunrise_DailyLog from "@/components/variants/onboarding3-app/DailyLog";
import Sunrise_CycleInsights from "@/components/variants/onboarding3-app/CycleInsights";
import Sunrise_LearnHub from "@/components/variants/onboarding3-app/LearnHub";
import Sunrise_Fertility from "@/components/variants/onboarding3-app/FertilityCenter";
import Sunrise_Community from "@/components/variants/onboarding3-app/Community";
import Sunrise_DailyStatus from "@/components/variants/onboarding3-app/DailyStatus";
import Sunrise_UserProfile from "@/components/variants/onboarding3-app/UserProfile";
import Sunrise_Settings from "@/components/variants/onboarding3-app/Settings";

// ─── App 4 — Midnight Garden "Bloom" ───
import MidGarden_Dashboard from "@/components/variants/onboarding4-app/Dashboard";
import MidGarden_AppCalendar from "@/components/variants/onboarding4-app/Calendar";
import MidGarden_DailyLog from "@/components/variants/onboarding4-app/DailyLog";
import MidGarden_CycleInsights from "@/components/variants/onboarding4-app/CycleInsights";
import MidGarden_LearnHub from "@/components/variants/onboarding4-app/LearnHub";
import MidGarden_Fertility from "@/components/variants/onboarding4-app/FertilityCenter";
import MidGarden_Community from "@/components/variants/onboarding4-app/Community";
import MidGarden_DailyStatus from "@/components/variants/onboarding4-app/DailyStatus";
import MidGarden_UserProfile from "@/components/variants/onboarding4-app/UserProfile";
import MidGarden_Settings from "@/components/variants/onboarding4-app/Settings";

// ─── App 5 — Soft Clay "Terra" ───
import Clay_Dashboard from "@/components/variants/onboarding5-app/Dashboard";
import Clay_AppCalendar from "@/components/variants/onboarding5-app/Calendar";
import Clay_DailyLog from "@/components/variants/onboarding5-app/DailyLog";
import Clay_CycleInsights from "@/components/variants/onboarding5-app/CycleInsights";
import Clay_LearnHub from "@/components/variants/onboarding5-app/LearnHub";
import Clay_Fertility from "@/components/variants/onboarding5-app/FertilityCenter";
import Clay_Community from "@/components/variants/onboarding5-app/Community";
import Clay_DailyStatus from "@/components/variants/onboarding5-app/DailyStatus";
import Clay_UserProfile from "@/components/variants/onboarding5-app/UserProfile";
import Clay_Settings from "@/components/variants/onboarding5-app/Settings";

// ─── App 6 — Arctic Minimal "Frost" ───
import Arctic_Dashboard from "@/components/variants/onboarding6-app/Dashboard";
import Arctic_AppCalendar from "@/components/variants/onboarding6-app/Calendar";
import Arctic_DailyLog from "@/components/variants/onboarding6-app/DailyLog";
import Arctic_CycleInsights from "@/components/variants/onboarding6-app/CycleInsights";
import Arctic_LearnHub from "@/components/variants/onboarding6-app/LearnHub";
import Arctic_Fertility from "@/components/variants/onboarding6-app/FertilityCenter";
import Arctic_Community from "@/components/variants/onboarding6-app/Community";
import Arctic_DailyStatus from "@/components/variants/onboarding6-app/DailyStatus";
import Arctic_UserProfile from "@/components/variants/onboarding6-app/UserProfile";
import Arctic_Settings from "@/components/variants/onboarding6-app/Settings";

// ─── App 7 — Velvet Dusk "Aura" ───
import Velvet_Dashboard from "@/components/variants/onboarding7-app/Dashboard";
import Velvet_AppCalendar from "@/components/variants/onboarding7-app/Calendar";
import Velvet_DailyLog from "@/components/variants/onboarding7-app/DailyLog";
import Velvet_CycleInsights from "@/components/variants/onboarding7-app/CycleInsights";
import Velvet_LearnHub from "@/components/variants/onboarding7-app/LearnHub";
import Velvet_Fertility from "@/components/variants/onboarding7-app/FertilityCenter";
import Velvet_Community from "@/components/variants/onboarding7-app/Community";
import Velvet_DailyStatus from "@/components/variants/onboarding7-app/DailyStatus";
import Velvet_UserProfile from "@/components/variants/onboarding7-app/UserProfile";
import Velvet_Settings from "@/components/variants/onboarding7-app/Settings";

// ─── App 8 — Watercolor "Petal" ───
import Water_Dashboard from "@/components/variants/onboarding8-app/Dashboard";
import Water_AppCalendar from "@/components/variants/onboarding8-app/Calendar";
import Water_DailyLog from "@/components/variants/onboarding8-app/DailyLog";
import Water_CycleInsights from "@/components/variants/onboarding8-app/CycleInsights";
import Water_LearnHub from "@/components/variants/onboarding8-app/LearnHub";
import Water_Fertility from "@/components/variants/onboarding8-app/FertilityCenter";
import Water_Community from "@/components/variants/onboarding8-app/Community";
import Water_DailyStatus from "@/components/variants/onboarding8-app/DailyStatus";
import Water_UserProfile from "@/components/variants/onboarding8-app/UserProfile";
import Water_Settings from "@/components/variants/onboarding8-app/Settings";

// ─── App 9 — Kinetic Gradient "VIBE" ───
import Kinetic_Dashboard from "@/components/variants/onboarding9-app/Dashboard";
import Kinetic_AppCalendar from "@/components/variants/onboarding9-app/Calendar";
import Kinetic_DailyLog from "@/components/variants/onboarding9-app/DailyLog";
import Kinetic_CycleInsights from "@/components/variants/onboarding9-app/CycleInsights";
import Kinetic_LearnHub from "@/components/variants/onboarding9-app/LearnHub";
import Kinetic_Fertility from "@/components/variants/onboarding9-app/FertilityCenter";
import Kinetic_Community from "@/components/variants/onboarding9-app/Community";
import Kinetic_DailyStatus from "@/components/variants/onboarding9-app/DailyStatus";
import Kinetic_UserProfile from "@/components/variants/onboarding9-app/UserProfile";
import Kinetic_Settings from "@/components/variants/onboarding9-app/Settings";

// ─── App 10 — Paper Craft "Fold" ───
import Paper_Dashboard from "@/components/variants/onboarding10-app/Dashboard";
import Paper_AppCalendar from "@/components/variants/onboarding10-app/Calendar";
import Paper_DailyLog from "@/components/variants/onboarding10-app/DailyLog";
import Paper_CycleInsights from "@/components/variants/onboarding10-app/CycleInsights";
import Paper_LearnHub from "@/components/variants/onboarding10-app/LearnHub";
import Paper_Fertility from "@/components/variants/onboarding10-app/FertilityCenter";
import Paper_Community from "@/components/variants/onboarding10-app/Community";
import Paper_DailyStatus from "@/components/variants/onboarding10-app/DailyStatus";
import Paper_UserProfile from "@/components/variants/onboarding10-app/UserProfile";
import Paper_Settings from "@/components/variants/onboarding10-app/Settings";

// ═══════════════════════════════════════════════════════

const onboardingScreenNames = ["Welcome", "Features", "Cycle", "Profile", "Period", "Symptoms", "Goals", "Notifications", "Summary"];
const appScreenNames = ["Dashboard", "Calendar", "Daily Log", "Insights", "Learn Hub", "Fertility", "Community", "Daily Status", "Profile", "Settings"];

interface AppTheme {
  id: number;
  name: string;
  appName: string;
  desc: string;
  color: string;
  bg: string;
  onboarding: React.ComponentType[];
  app: React.ComponentType[];
}

const themes: AppTheme[] = [
  {
    id: 1, name: "Celestial", appName: "Luna", desc: "Night sky, moon phases, cosmic gold",
    color: "#f5d882", bg: "#0c0a1d",
    onboarding: [Celestial_Welcome, Celestial_Features, Celestial_Cycle, Celestial_Profile, Celestial_Period, Celestial_Symptoms, Celestial_Goals, Celestial_Notifications, Celestial_Summary],
    app: [Celestial_Dashboard, Celestial_AppCalendar, Celestial_DailyLog, Celestial_CycleInsights, Celestial_LearnHub, Celestial_Fertility, Celestial_Community, Celestial_DailyStatus, Celestial_UserProfile, Celestial_Settings],
  },
  {
    id: 2, name: "Topographic", appName: "Vela", desc: "Editorial Swiss, contour lines, red accent",
    color: "#c8352e", bg: "#fafaf8",
    onboarding: [Topo_Welcome, Topo_Features, Topo_Cycle, Topo_Profile, Topo_Period, Topo_Symptoms, Topo_Goals, Topo_Notifications, Topo_Summary],
    app: [Topo_Dashboard, Topo_AppCalendar, Topo_DailyLog, Topo_CycleInsights, Topo_LearnHub, Topo_Fertility, Topo_Community, Topo_DailyStatus, Topo_UserProfile, Topo_Settings],
  },
  {
    id: 3, name: "Sunrise Warmth", appName: "Solara", desc: "Peach + terracotta, warm morning light",
    color: "#d4a060", bg: "#fff8f0",
    onboarding: [Sunrise_Welcome, Sunrise_Features, Sunrise_Cycle, Sunrise_Profile, Sunrise_Period, Sunrise_Symptoms, Sunrise_Goals, Sunrise_Notifications, Sunrise_Summary],
    app: [Sunrise_Dashboard, Sunrise_AppCalendar, Sunrise_DailyLog, Sunrise_CycleInsights, Sunrise_LearnHub, Sunrise_Fertility, Sunrise_Community, Sunrise_DailyStatus, Sunrise_UserProfile, Sunrise_Settings],
  },
  {
    id: 4, name: "Midnight Garden", appName: "Bloom", desc: "Deep emerald + rose gold, private sanctuary",
    color: "#7dd3a8", bg: "#0a0f1a",
    onboarding: [MidGarden_Welcome, MidGarden_Features, MidGarden_Cycle, MidGarden_Profile, MidGarden_Period, MidGarden_Symptoms, MidGarden_Goals, MidGarden_Notifications, MidGarden_Summary],
    app: [MidGarden_Dashboard, MidGarden_AppCalendar, MidGarden_DailyLog, MidGarden_CycleInsights, MidGarden_LearnHub, MidGarden_Fertility, MidGarden_Community, MidGarden_DailyStatus, MidGarden_UserProfile, MidGarden_Settings],
  },
  {
    id: 5, name: "Soft Clay", appName: "Terra", desc: "Terracotta + sage, grounding earth tones",
    color: "#c07a50", bg: "#f5f0eb",
    onboarding: [Clay_Welcome, Clay_Features, Clay_Cycle, Clay_Profile, Clay_Period, Clay_Symptoms, Clay_Goals, Clay_Notifications, Clay_Summary],
    app: [Clay_Dashboard, Clay_AppCalendar, Clay_DailyLog, Clay_CycleInsights, Clay_LearnHub, Clay_Fertility, Clay_Community, Clay_DailyStatus, Clay_UserProfile, Clay_Settings],
  },
  {
    id: 6, name: "Arctic Minimal", appName: "Frost", desc: "Ice white + navy, clean professional calm",
    color: "#0ea5e9", bg: "#f8fafc",
    onboarding: [Arctic_Welcome, Arctic_Features, Arctic_Cycle, Arctic_Profile, Arctic_Period, Arctic_Symptoms, Arctic_Goals, Arctic_Notifications, Arctic_Summary],
    app: [Arctic_Dashboard, Arctic_AppCalendar, Arctic_DailyLog, Arctic_CycleInsights, Arctic_LearnHub, Arctic_Fertility, Arctic_Community, Arctic_DailyStatus, Arctic_UserProfile, Arctic_Settings],
  },
  {
    id: 7, name: "Velvet Dusk", appName: "Aura", desc: "Deep plum + lavender, luxury intuition",
    color: "#c084fc", bg: "#1a1025",
    onboarding: [Velvet_Welcome, Velvet_Features, Velvet_Cycle, Velvet_Profile, Velvet_Period, Velvet_Symptoms, Velvet_Goals, Velvet_Notifications, Velvet_Summary],
    app: [Velvet_Dashboard, Velvet_AppCalendar, Velvet_DailyLog, Velvet_CycleInsights, Velvet_LearnHub, Velvet_Fertility, Velvet_Community, Velvet_DailyStatus, Velvet_UserProfile, Velvet_Settings],
  },
  {
    id: 8, name: "Watercolor", appName: "Petal", desc: "Soft paint washes, dreamy pastels",
    color: "#f9a8c9", bg: "#fefefe",
    onboarding: [Water_Welcome, Water_Features, Water_Cycle, Water_Profile, Water_Period, Water_Symptoms, Water_Goals, Water_Notifications, Water_Summary],
    app: [Water_Dashboard, Water_AppCalendar, Water_DailyLog, Water_CycleInsights, Water_LearnHub, Water_Fertility, Water_Community, Water_DailyStatus, Water_UserProfile, Water_Settings],
  },
  {
    id: 9, name: "Kinetic Gradient", appName: "VIBE", desc: "Bold mesh gradients, vibrant Gen-Z energy",
    color: "#8b5cf6", bg: "#ffffff",
    onboarding: [Kinetic_Welcome, Kinetic_Features, Kinetic_Cycle, Kinetic_Profile, Kinetic_Period, Kinetic_Symptoms, Kinetic_Goals, Kinetic_Notifications, Kinetic_Summary],
    app: [Kinetic_Dashboard, Kinetic_AppCalendar, Kinetic_DailyLog, Kinetic_CycleInsights, Kinetic_LearnHub, Kinetic_Fertility, Kinetic_Community, Kinetic_DailyStatus, Kinetic_UserProfile, Kinetic_Settings],
  },
  {
    id: 10, name: "Paper Craft", appName: "Fold", desc: "Cut paper layers, origami, parchment + coral",
    color: "#e8735a", bg: "#faf5eb",
    onboarding: [Paper_Welcome, Paper_Features, Paper_Cycle, Paper_Profile, Paper_Period, Paper_Symptoms, Paper_Goals, Paper_Notifications, Paper_Summary],
    app: [Paper_Dashboard, Paper_AppCalendar, Paper_DailyLog, Paper_CycleInsights, Paper_LearnHub, Paper_Fertility, Paper_Community, Paper_DailyStatus, Paper_UserProfile, Paper_Settings],
  },
];

export default function Home() {
  const [activeTheme, setActiveTheme] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState<"onboarding" | "app">("onboarding");
  const [favorite, setFavorite] = useState<number | null>(null);
  const [hasChangedTheme, setHasChangedTheme] = useState(false);

  const theme = themes[activeTheme];
  const currentScreenNames = viewMode === "onboarding" ? onboardingScreenNames : appScreenNames;
  const currentScreens = viewMode === "onboarding" ? theme.onboarding : theme.app;
  const maxStep = currentScreens.length - 1;
  const Component = currentScreens[Math.min(activeStep, maxStep)];

  const handleThemeChange = (i: number) => {
    setActiveTheme(i);
    setActiveStep(0);
    setHasChangedTheme(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(255,255,255,0); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .theme-hint { animation: pulseGlow 2s ease-in-out infinite; }
        .bounce-arrow { animation: bounceArrow 1s ease-in-out infinite; }
        .fade-in { animation: fadeInUp 0.3s ease-out; }
      `}</style>

      {/* Top bar */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-lg font-bold tracking-tight">Bloom — Complete App Showcase</h1>
              <p className="text-xs text-white/30">
                10 themes &middot; {viewMode === "onboarding" ? "9 onboarding screens" : "10 app pages"} each &middot; {viewMode === "onboarding" ? "90" : "100"} designs
                {favorite !== null && (
                  <span className="ml-2 text-green-400/70">
                    Favorite: {themes[favorite].name}
                  </span>
                )}
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-1 bg-white/5 rounded-full p-1">
              <button
                onClick={() => { setViewMode("onboarding"); setActiveStep(0); }}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                  viewMode === "onboarding" ? "bg-white text-black" : "text-white/40 hover:text-white/60"
                }`}
              >
                Onboarding
              </button>
              <button
                onClick={() => { setViewMode("app"); setActiveStep(0); }}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                  viewMode === "app" ? "bg-white text-black" : "text-white/40 hover:text-white/60"
                }`}
              >
                App Pages
              </button>
            </div>
          </div>

          {/* Theme selector — prominent with label */}
          <div className="mb-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Choose a Theme</span>
              {!hasChangedTheme && (
                <span className="bounce-arrow text-white/40 text-sm">&#8594;</span>
              )}
              <span className="text-[10px] text-white/20 ml-auto">{activeTheme + 1} of {themes.length}</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {themes.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(i)}
                  className={`relative shrink-0 rounded-xl px-3.5 py-2.5 transition-all flex flex-col items-start gap-1.5 min-w-[120px] ${
                    i === activeTheme
                      ? "bg-white/10 border-2 scale-[1.02]"
                      : favorite === i
                      ? "bg-green-500/5 border border-green-500/20 hover:bg-green-500/10"
                      : !hasChangedTheme && i === 1
                      ? "bg-white/[0.03] border border-white/10 theme-hint hover:bg-white/[0.06]"
                      : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10"
                  }`}
                  style={i === activeTheme ? { borderColor: t.color } : {}}
                >
                  <div className="flex items-center gap-2 w-full">
                    <span className="w-3 h-3 rounded-full shrink-0 ring-2 ring-white/10" style={{ background: t.color }} />
                    <span className={`text-[11px] font-semibold truncate ${i === activeTheme ? "text-white" : "text-white/50"}`}>
                      {t.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-white/25">{t.appName}</span>
                    {favorite === i && <span className="text-[9px] text-green-400/70">&#9733;</span>}
                  </div>
                  {/* Color preview bar */}
                  <div className="w-full h-1 rounded-full mt-0.5" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.bg})` }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Left sidebar */}
          <div className="w-56 shrink-0 space-y-4">
            {/* Theme info card */}
            <div className="p-4 rounded-xl border-2 bg-white/[0.02] fade-in" key={activeTheme} style={{ borderColor: theme.color + "40" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 rounded-full ring-2 ring-white/10" style={{ background: theme.color }} />
                <span className="text-sm font-bold">{theme.name}</span>
              </div>
              <p className="text-[11px] text-white/40 mb-1">App Name: <span className="text-white/70 font-medium">{theme.appName}</span></p>
              <p className="text-[10px] text-white/25 leading-relaxed">{theme.desc}</p>
              {/* Color swatch preview */}
              <div className="flex gap-1.5 mt-3">
                <div className="flex-1 h-6 rounded-lg" style={{ background: theme.bg, border: "1px solid rgba(255,255,255,0.1)" }} />
                <div className="flex-1 h-6 rounded-lg" style={{ background: theme.color }} />
              </div>
            </div>

            {/* Screen steps */}
            <div>
              <h3 className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mb-2">
                {viewMode === "onboarding" ? "Onboarding Screens" : "App Pages"}
              </h3>
              {currentScreenNames.map((name, i) => (
                <button
                  key={name}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                    i === activeStep
                      ? "bg-white/10 text-white"
                      : "text-white/30 hover:text-white/50"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                    i === activeStep ? "text-black" : "bg-white/5 text-white/30"
                  }`} style={i === activeStep ? { background: theme.color } : {}}>
                    {i + 1}
                  </span>
                  {name}
                </button>
              ))}
            </div>

            {/* Actions */}
            <button
              onClick={() => setFavorite(activeTheme)}
              className={`w-full h-9 rounded-xl text-[11px] font-semibold tracking-wide transition-all ${
                favorite === activeTheme
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              {favorite === activeTheme ? "Favorited!" : `Pick "${theme.name}"`}
            </button>

            {/* Nav */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex-1 h-8 rounded-lg text-[10px] font-medium bg-white/5 text-white/30 hover:text-white/50 disabled:opacity-20 transition-all"
              >
                Prev
              </button>
              <button
                onClick={() => setActiveStep(Math.min(maxStep, activeStep + 1))}
                disabled={activeStep === maxStep}
                className="flex-1 h-8 rounded-lg text-[10px] font-medium bg-white/5 text-white/30 hover:text-white/50 disabled:opacity-20 transition-all"
              >
                Next
              </button>
            </div>

            {/* Quick theme nav */}
            <div className="flex gap-2">
              <button
                onClick={() => handleThemeChange(Math.max(0, activeTheme - 1))}
                disabled={activeTheme === 0}
                className="flex-1 h-8 rounded-lg text-[10px] font-medium bg-white/5 text-white/20 hover:text-white/40 disabled:opacity-20 transition-all"
              >
                &#8592; Prev Theme
              </button>
              <button
                onClick={() => handleThemeChange(Math.min(9, activeTheme + 1))}
                disabled={activeTheme === 9}
                className="flex-1 h-8 rounded-lg text-[10px] font-medium bg-white/5 text-white/20 hover:text-white/40 disabled:opacity-20 transition-all"
              >
                Next Theme &#8594;
              </button>
            </div>
          </div>

          {/* Phone preview */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Current theme label above phone */}
              <div className="flex items-center justify-center gap-2 mb-4 fade-in" key={`label-${activeTheme}`}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: theme.color }} />
                <span className="text-sm font-bold text-white/70">{theme.name}</span>
                <span className="text-xs text-white/25">&middot;</span>
                <span className="text-xs text-white/30">{theme.appName}</span>
              </div>

              <div
                className="w-[375px] h-[812px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden relative"
                style={{ boxShadow: "0 0 0 2px #333, 0 20px 60px rgba(0,0,0,0.5)" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1a1a1a] rounded-b-2xl z-50" />
                <div key={`${activeTheme}-${activeStep}-${viewMode}`} className="w-full h-full overflow-y-auto">
                  <Component />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-50" />
              </div>

              {/* Step dots below phone */}
              <div className="flex justify-center gap-1.5 mt-4">
                {currentScreenNames.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="transition-all rounded-full"
                    style={{
                      width: i === activeStep ? 20 : 6,
                      height: 6,
                      background: i === activeStep ? theme.color : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
