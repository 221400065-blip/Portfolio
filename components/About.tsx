"use client";

import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import ThreeDTilt from "./ThreeDTilt";
import { Code, Cpu, Award } from "lucide-react";

export default function About() {
  const manifestoParagraph =
    "With proven full-stack engineering experience, I specialize in architecting high-performance Next.js web applications, scalable Python backend services, and intelligent conversational AI chatbots. I truly enjoy engineering systems for teams and businesses that aim to stand out, solve complex challenges, and present their very best digital presence. Let's build something remarkable together!";

  const pillars = [
    {
      icon: Code,
      title: "Full Stack Web Engineering",
      subtitle: "Next.js & TypeScript",
      desc: "Architecting modular, type-safe web systems using React 19, Server Components, and optimized relational databases.",
    },
    {
      icon: Cpu,
      title: "AI Chatbots & Agents",
      subtitle: "LLM Orchestration & Automation",
      desc: "Building context-aware conversational bots, intent pipelines, and smart automation workflows with Gemini & Claude.",
    },
    {
      icon: Award,
      title: "Certified Competency",
      subtitle: "90% HEC NSCT Distinction",
      desc: "Demonstrated technical rigor through national standardized skill tests and software engineering degree foundations.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-32 md:py-36 px-5 sm:px-8 md:px-12 bg-[#F3EDF7] text-[#261843] border-t border-[#C3C1CD]/40 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* Section Pill Badge: Thistle Accent (#D8BFD8) */}
        <FadeIn delay={0} y={-10} className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full badge-thistle">
            <span className="w-2 h-2 rounded-full bg-[#261843]" />
            <span className="text-xs font-bold tracking-wider uppercase">
              About Me &bull; Philosophy
            </span>
          </div>
        </FadeIn>

        {/* Heading: "ABOUT ME" */}
        <FadeIn delay={0.1} y={40} className="mb-12 sm:mb-16">
          <h2 className="hero-heading font-editorial font-black uppercase tracking-tight leading-none text-5xl sm:text-7xl md:text-8xl">
            ABOUT ME
          </h2>
        </FadeIn>

        {/* Character-by-character Scroll-Driven Opacity Reveal Animation */}
        <div className="w-full max-w-3xl mb-16 sm:mb-20 text-center">
          <AnimatedText
            text={manifestoParagraph}
            className="justify-center font-editorial text-lg sm:text-2xl md:text-3xl font-medium text-[#261843] leading-relaxed tracking-tight"
          />
        </div>

        {/* 3 Pillars / Core Strengths Grid with Lavender Dream Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full mb-16 sm:mb-20 text-left">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            // Differentiated accent color for each pillar: Thistle, Sage, Peach
            const iconBgClass = idx === 0 ? "bg-[#D8BFD8]/50 text-[#261843]" : idx === 1 ? "bg-[#C8D8C4]/60 text-[#1E301B]" : "bg-[#FFDAB9]/60 text-[#3D2411]";

            return (
              <FadeIn key={item.title} delay={0.2 + idx * 0.1} y={30}>
                <ThreeDTilt maxTilt={8} scale={1.02} glare={true} className="h-full">
                  <div className="p-7 rounded-3xl neu-card h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${iconBgClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#695E7E] uppercase tracking-wider block mb-1">
                          {item.subtitle}
                        </span>
                        <h3 className="font-editorial text-xl font-bold text-[#261843]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#695E7E] leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ThreeDTilt>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA Contact Button in Warm Peach */}
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ContactButton label="Let's Build Together" href="#contact" className="btn-peach-accent text-[#261843] font-bold" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
