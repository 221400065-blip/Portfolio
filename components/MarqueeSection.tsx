"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  FileCode2,
  Layers,
  Terminal,
  Smartphone,
  Bot,
  Palette,
  FileText,
  Workflow,
  Sparkles,
  Database,
  Cpu,
  GitBranch,
  ShieldCheck,
  Globe,
} from "lucide-react";

interface SkillCardItem {
  name: string;
  category: string;
  tag: string;
  icon: typeof Code2;
}

const ROW_1_SKILLS: SkillCardItem[] = [
  { name: "Next.js 16", category: "Core Framework", tag: "App Router & SSR", icon: Terminal },
  { name: "React.js", category: "Frontend", tag: "Reactive Systems", icon: Workflow },
  { name: "TypeScript", category: "Language", tag: "Strict Type Safety", icon: Code2 },
  { name: "Python", category: "Language & Backend", tag: "API & Data Logic", icon: Terminal },
  { name: "Tailwind CSS", category: "Styling", tag: "Utility Systems", icon: Layers },
  { name: "JavaScript", category: "Language", tag: "ES6+ Architecture", icon: FileCode2 },
  { name: "React Native", category: "Mobile", tag: "iOS & Android", icon: Smartphone },
  { name: "HTML5 & CSS3", category: "Web Standard", tag: "Semantic & Responsive", icon: Globe },
];

const ROW_2_SKILLS: SkillCardItem[] = [
  { name: "AI Chatbot Dev", category: "AI Systems", tag: "Conversational Flows", icon: Bot },
  { name: "Google Gemini", category: "LLM Integration", tag: "Automated Assistants", icon: Sparkles },
  { name: "Claude LLM", category: "AI Orchestration", tag: "Context-Aware Logic", icon: Cpu },
  { name: "Database Dev", category: "Backend", tag: "PostgreSQL & Models", icon: Database },
  { name: "UI/UX Designing", category: "Interface", tag: "Editorial & Neumorphic", icon: Palette },
  { name: "Documentation", category: "Engineering", tag: "Architecture & Specs", icon: FileText },
  { name: "REST APIs", category: "Integration", tag: "Microservices", icon: GitBranch },
  { name: "HEC NSCT 90%", category: "Distinction", tag: "Certified Competency", icon: ShieldCheck },
];

// Tripled lists for continuous seamless scrolling
const TRIPLED_ROW_1 = [...ROW_1_SKILLS, ...ROW_1_SKILLS, ...ROW_1_SKILLS, ...ROW_1_SKILLS];
const TRIPLED_ROW_2 = [...ROW_2_SKILLS, ...ROW_2_SKILLS, ...ROW_2_SKILLS, ...ROW_2_SKILLS];

export default function MarqueeSection() {
  return (
    <section
      id="skills-marquee"
      className="relative overflow-hidden bg-[#EDE7F6] py-16 sm:py-20 border-y border-[#C3C1CD]/50"
    >
      {/* Header Badge & Section Context */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full badge-sage self-start">
          <span className="w-2 h-2 rounded-full bg-[#1E301B]" />
          <span className="text-xs font-bold tracking-wider uppercase">
            Technologies &amp; Architecture
          </span>
        </div>
        <span className="text-xs text-[#695E7E] font-medium">
          Hover to pause &bull; Continuously verified stack
        </span>
      </div>

      {/* Row 1: Languages & Core Web (Moves LEFT smoothly) */}
      <div className="mb-4 overflow-hidden py-2 marquee-mask">
        <div className="animate-marquee-left flex gap-4 will-change-transform">
          {TRIPLED_ROW_1.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`r1-${i}`}
                className="relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[310px] p-4 sm:p-5 rounded-3xl neu-card hover:scale-[1.02] transition-all duration-300 group flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAE6F4] border border-[#C3C1CD]/40 flex items-center justify-center text-[#261843] shrink-0 group-hover:scale-105 group-hover:bg-[#D8BFD8]/40 transition-all">
                  <Icon className="w-6 h-6 text-[#261843]" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-[#695E7E] font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-[#261843] truncate group-hover:text-[#372773] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#695E7E] truncate block">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: AI, Backend & Engineering (Moves RIGHT smoothly) */}
      <div className="overflow-hidden py-2 marquee-mask">
        <div className="animate-marquee-right flex gap-4 will-change-transform">
          {TRIPLED_ROW_2.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`r2-${i}`}
                className="relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[310px] p-4 sm:p-5 rounded-3xl neu-card hover:scale-[1.02] transition-all duration-300 group flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAE6F4] border border-[#C3C1CD]/40 flex items-center justify-center text-[#261843] shrink-0 group-hover:scale-105 group-hover:bg-[#C8D8C4]/50 transition-all">
                  <Icon className="w-6 h-6 text-[#261843]" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-[#695E7E] font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-[#261843] truncate group-hover:text-[#372773] transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#695E7E] truncate block">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
