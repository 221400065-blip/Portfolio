"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import ThreeDTilt from "./ThreeDTilt";
import FadeIn from "./FadeIn";
import { Calendar, Building, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-24 sm:py-36 bg-[#F0E8F4] text-[#261843] border-t border-[#C3C1CD]/50 relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[350px] bg-white/70 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#C3C1CD]/40">
          <div>
            <FadeIn delay={0} y={-10} className="flex items-center gap-3 mb-3">
              <div className="badge-peach inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold text-[#261843] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#E08A45] status-led" />
                <span>
                  05 / Career &amp; Track Record
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#261843]">
                EXPERIENCE
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="max-w-md text-xs sm:text-sm text-[#695E7E] leading-relaxed font-light">
              Professional full-stack software development experience with core engineering responsibilities across web platforms, database models, and server logic.
            </p>
          </FadeIn>
        </div>

        {/* Minimal Editorial Timeline with 3D Tilt */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <FadeIn key={idx} delay={0.1} y={30}>
              <ThreeDTilt maxTilt={6} scale={1.02} glare={true} className="w-full">
                <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8FF] border border-[#C3C1CD]/70 shadow-[0_16px_50px_-15px_rgba(38,24,67,0.1)] relative overflow-hidden preserve-3d">
                  
                  {/* Top Row: Tenure & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-8 border-b border-[#C3C1CD]/40 translate-z-10">
                    <div className="space-y-2">
                      <div className="badge-sage inline-flex items-center gap-2 px-3.5 py-1 rounded-full">
                        <Building className="w-3.5 h-3.5 text-[#4D6B48]" />
                        <span className="font-mono-tag text-[10px] text-[#261843] font-bold">
                          {exp.company}
                        </span>
                      </div>

                      <h3 className="font-editorial text-3xl sm:text-4xl font-black tracking-tight text-[#261843]">
                        {exp.position}
                      </h3>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end gap-2 text-right">
                      <div className="badge-peach flex items-center gap-2 text-xs font-mono text-[#261843] px-3.5 py-1.5 rounded-xl font-bold">
                        <Calendar className="w-3.5 h-3.5 text-[#261843]" />
                        <span>{exp.duration}</span>
                      </div>
                      <span className="font-mono-tag text-[10px] text-[#695E7E] font-bold">
                        {exp.experienceYears} TENURE
                      </span>
                    </div>
                  </div>

                  {/* Engineering Responsibilities */}
                  <div className="pt-8 space-y-6 translate-z-10">
                    <h4 className="font-mono-tag text-xs text-[#261843] tracking-widest font-bold">
                      CORE ENGINEERING RESPONSIBILITIES
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-4 rounded-2xl bg-[#EDE7F6] border border-[#C3C1CD]/50 flex items-center gap-3.5 hover:scale-[1.01] transition-transform"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#C8D8C4] text-[#261843] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-4 h-4 text-[#4D6B48]" />
                          </div>
                          <span className="font-editorial text-sm font-medium text-[#261843]">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tenure Summary Footnote */}
                  <div className="mt-8 pt-6 border-t border-[#C3C1CD]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#695E7E] font-mono translate-z-10">
                    <span>Location: Pakistan (Engineering Base)</span>
                    <span className="text-[#261843] font-bold">Delivered: 5 Enterprise &amp; Commercial Systems</span>
                  </div>
                </div>
              </ThreeDTilt>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
