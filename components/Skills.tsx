"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import ThreeDTilt from "./ThreeDTilt";
import FadeIn from "./FadeIn";
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
} from "lucide-react";

const SKILL_ICONS: Record<string, typeof Code2> = {
  "HTML": FileCode2,
  "CSS": Layers,
  "JavaScript": Code2,
  "React.js": Workflow,
  "Next.js": Terminal,
  "React Native": Smartphone,
  "Python": Terminal,
  "AI Chatbot Development": Bot,
  "UI/UX Designing": Palette,
  "Documentation": FileText,
};

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Frontend & Web Architecture",
      subtitle: "Semantic web, reactive component systems & modern rendering",
      filter: (cat: string) => cat === "Frontend",
    },
    {
      title: "Core Programming & AI",
      subtitle: "Backend logic, task scripting & intelligent dialogue flows",
      filter: (cat: string) => cat === "Backend & AI",
    },
    {
      title: "Mobile & Product Design",
      subtitle: "Cross-platform mobile apps, design systems & technical documentation",
      filter: (cat: string) => cat === "Mobile & Design",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-36 relative bg-[#E6E6FA] text-[#261843] border-t border-[#C3C1CD]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#C3C1CD]/40">
          <div>
            <FadeIn delay={0} y={-10} className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full badge-thistle">
                <span className="w-2 h-2 rounded-full bg-[#261843]" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Technical Expertise &bull; 10 Competencies
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight">
                CORE SKILLS
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="max-w-md text-sm text-[#695E7E] leading-relaxed font-light">
              Ten technical disciplines spanning modern web platforms, mobile engineering, Python backend logic, and conversational AI architecture.
            </p>
          </FadeIn>
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-16">
          {categories.map((group, groupIdx) => {
            const groupSkills = skills.filter((s) => group.filter(s.category));
            const categoryBadgeClass =
              groupIdx === 0 ? "badge-thistle" : groupIdx === 1 ? "badge-sage" : "badge-peach";

            return (
              <div key={groupIdx} className="space-y-6">
                
                {/* Group Heading */}
                <FadeIn delay={0.1 * groupIdx} y={15} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-3 border-b border-[#C3C1CD]/30">
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${categoryBadgeClass}`}>
                      0{groupIdx + 1}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#261843]">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-[#695E7E]">
                    {group.subtitle}
                  </span>
                </FadeIn>

                {/* Grid of 3D Neumorphic Skill Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupSkills.map((skill, idx) => {
                    const IconComponent = SKILL_ICONS[skill.name] || Sparkles;
                    const pillClass =
                      groupIdx === 0
                        ? "bg-[#D8BFD8]/40 text-[#261843]"
                        : groupIdx === 1
                        ? "bg-[#C8D8C4]/50 text-[#1E301B]"
                        : "bg-[#FFDAB9]/50 text-[#3D2411]";

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                      >
                        <ThreeDTilt maxTilt={8} scale={1.03} glare={true} className="w-full h-full">
                          <div className="p-6 rounded-3xl neu-card h-full flex flex-col justify-between group">
                            <div>
                              {/* Top Row: Icon */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#EAE6F4] border border-[#C3C1CD]/30 flex items-center justify-center text-[#261843] group-hover:scale-105 transition-transform">
                                  <IconComponent className="w-6 h-6 text-[#261843]" />
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${pillClass}`}>
                                  {skill.category}
                                </span>
                              </div>

                              {/* Skill Name */}
                              <h4 className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-[#261843] group-hover:text-[#372773] transition-colors">
                                {skill.name}
                              </h4>

                              {/* Skill Description */}
                              <p className="text-xs text-[#695E7E] mt-2 leading-relaxed font-light">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                        </ThreeDTilt>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
