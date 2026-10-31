"use client";

import { useState } from "react";
import AIChatSimulator from "./AIChatSimulator";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import ResumeSection from "./ResumeSection";
import Contact from "./Contact";
import Services from "./Services";
import { soundFX } from "./soundFX";
import {
  Bot,
  FolderGit2,
  Cpu,
  Briefcase,
  FileText,
  Mail,
  Sparkles,
  LayoutGrid,
  ScrollText,
  Volume2,
  VolumeX,
} from "lucide-react";

type StationKey = "bot" | "projects" | "skills" | "services" | "experience" | "resume" | "contact";

interface Station {
  id: StationKey;
  label: string;
  icon: typeof Bot;
  badge?: string;
  description: string;
}

const STATIONS: Station[] = [
  {
    id: "bot",
    label: "AI Chatbot Lab",
    icon: Bot,
    badge: "Live Interactive",
    description: "Test Ayesha's conversational AI query engine in real-time.",
  },
  {
    id: "projects",
    label: "Projects Showcase",
    icon: FolderGit2,
    badge: "5 Real + Demos",
    description: "Explore 5 production Codqor systems & demonstration concepts.",
  },
  {
    id: "skills",
    label: "Skills Matrix",
    icon: Cpu,
    badge: "10 Core Skills",
    description: "Interactive technical stack, proficiency meters & architectures.",
  },
  {
    id: "services",
    label: "Freelance Services",
    icon: Sparkles,
    badge: "Fiverr Ready",
    description: "Full-stack web apps, chatbot engineering & UI/UX services.",
  },
  {
    id: "experience",
    label: "Career & HEC Score",
    icon: Briefcase,
    badge: "90% NSCT",
    description: "Codqor Technologies experience & verified academic training.",
  },
  {
    id: "resume",
    label: "ATS Resume Desk",
    icon: FileText,
    badge: "PDF Download",
    description: "Preview & download ATS-compliant official 2-page curriculum vitae.",
  },
  {
    id: "contact",
    label: "Direct Dispatch",
    icon: Mail,
    badge: "Quick Connect",
    description: "Send direct message or email Ayesha with instant copy buttons.",
  },
];

export default function StudioDeck() {
  const [activeStation, setActiveStation] = useState<StationKey>("bot");
  const [viewMode, setViewMode] = useState<"deck" | "full">("deck");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    soundFX.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      soundFX.playPop();
    }
  };

  const selectStation = (id: StationKey) => {
    soundFX.playClick();
    setActiveStation(id);
  };

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Creative Control Bar: Neumorphic Master Console */}
        <div className="rounded-3xl neu-flat p-4 sm:p-6 mb-10 border border-[#71B7D5]/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Title & Tagline */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl neu-convex flex items-center justify-center text-[#71B7D5]">
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Interactive Portfolio Studio
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 neu-led animate-pulse" />
                </div>
                <p className="text-xs text-slate-500 dark:text-[#A1CCDC]/80">
                  Select an interactive station below or switch to full presentation mode
                </p>
              </div>
            </div>

            {/* Mode & Sound Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              
              {/* Audio feedback button */}
              <button
                onClick={toggleSound}
                className="p-2.5 rounded-2xl neu-btn text-xs text-slate-700 dark:text-[#A1CCDC] flex items-center gap-1.5 transition-all"
                title={soundEnabled ? "Mute tactile sound" : "Enable tactile sound"}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-4 h-4 text-[#71B7D5]" />
                    <span className="hidden sm:inline">Tactile Audio</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">Muted</span>
                  </>
                )}
              </button>

              {/* View Switcher: Interactive Deck vs Full Scroll */}
              <div className="p-1 rounded-2xl neu-pressed flex items-center gap-1">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setViewMode("deck");
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === "deck"
                      ? "neu-btn text-[#71B7D5] font-extrabold"
                      : "text-slate-500 dark:text-[#A1CCDC] hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Station Deck</span>
                </button>

                <button
                  onClick={() => {
                    soundFX.playClick();
                    setViewMode("full");
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === "full"
                      ? "neu-btn text-[#71B7D5] font-extrabold"
                      : "text-slate-500 dark:text-[#A1CCDC] hover:text-white"
                  }`}
                >
                  <ScrollText className="w-3.5 h-3.5" />
                  <span>Full Scroll</span>
                </button>
              </div>

            </div>

          </div>

          {/* Station Selector Pills in Deck Mode */}
          {viewMode === "deck" && (
            <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                {STATIONS.map((station) => {
                  const Icon = station.icon;
                  const isActive = activeStation === station.id;
                  return (
                    <button
                      key={station.id}
                      onClick={() => selectStation(station.id)}
                      className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between gap-2 ${
                        isActive
                          ? "neu-pressed border border-[#71B7D5]/40 text-[#71B7D5]"
                          : "neu-btn text-slate-700 dark:text-[#A1CCDC] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                            isActive
                              ? "neu-concave text-[#71B7D5]"
                              : "neu-convex text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {station.badge && (
                          <span
                            className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ${
                              isActive
                                ? "bg-[#71B7D5]/20 text-[#71B7D5] border border-[#71B7D5]/30"
                                : "bg-black/5 dark:bg-white/5 text-slate-400"
                            }`}
                          >
                            {station.badge}
                          </span>
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-bold block leading-tight">
                          {station.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* View Content Renderer */}
        {viewMode === "deck" ? (
          <div className="animate-in fade-in zoom-in-95 duration-200">
            {activeStation === "bot" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Interactive Station 1: Conversational AI Simulator
                  </span>
                  <span className="text-xs text-[#71B7D5] font-mono">
                    Live Prompting • Natural Language Engine
                  </span>
                </div>
                <AIChatSimulator />
              </div>
            )}

            {activeStation === "projects" && <Projects />}
            {activeStation === "skills" && <Skills />}
            {activeStation === "services" && <Services />}
            {activeStation === "experience" && <Experience />}
            {activeStation === "resume" && <ResumeSection />}
            {activeStation === "contact" && <Contact />}
          </div>
        ) : (
          /* Full Continuous Presentation View */
          <div className="space-y-16 animate-in fade-in duration-200">
            {/* Live Chat Playground Featured First */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 neu-led" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#71B7D5]">
                  Featured Interactive Simulator: AyeshaAI
                </span>
              </div>
              <AIChatSimulator />
            </div>

            <Projects />
            <Skills />
            <Services />
            <Experience />
            <ResumeSection />
            <Contact />
          </div>
        )}

      </div>
    </section>
  );
}
