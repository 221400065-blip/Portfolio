"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import ThreeDTilt from "./ThreeDTilt";
import FadeIn from "./FadeIn";
import { GraduationCap, Award, ShieldCheck } from "lucide-react";

export default function Education() {
  const { education, achievement } = portfolioData;

  return (
    <section
      id="education"
      className="py-24 sm:py-36 bg-[#E6E6FA] text-[#261843] border-t border-[#C3C1CD]/50 relative overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-white/70 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#C3C1CD]/40">
          <div>
            <FadeIn delay={0} y={-10} className="flex items-center gap-3 mb-3">
              <div className="badge-thistle inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold text-[#261843] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#8E6499] status-led" />
                <span>
                  06 / Academics &amp; Recognition
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#261843]">
                EDUCATION &amp; AWARDS
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="max-w-md text-xs sm:text-sm text-[#695E7E] leading-relaxed font-light">
              Rigorous software engineering academic training and verified national competency certification associated with the Higher Education Commission.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Qualifications (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono-tag text-xs text-[#261843] tracking-widest mb-4 font-bold">
              FORMAL EDUCATION
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => {
                const isDegree = idx === 0;

                return (
                  <FadeIn key={idx} delay={idx * 0.1} y={20}>
                    <ThreeDTilt maxTilt={6} scale={1.02} glare={true} className="w-full">
                      <div
                        className="p-6 sm:p-7 rounded-3xl bg-[#FAF8FF] border border-[#C3C1CD]/70 shadow-[0_12px_40px_-15px_rgba(38,24,67,0.08)] flex items-start gap-5 preserve-3d"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#EDE7F6] border border-[#C3C1CD]/50 flex items-center justify-center text-[#261843] flex-shrink-0 translate-z-10">
                          <GraduationCap className="w-6 h-6 text-[#261843]" />
                        </div>

                        <div className="space-y-1.5 flex-1 translate-z-10">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono-tag text-[10px] text-[#695E7E]">
                              {edu.year} &bull; {edu.status}
                            </span>
                            {isDegree && (
                              <span className="badge-thistle font-mono text-[9px] px-2.5 py-0.5 rounded-full font-bold">
                                MAJOR PROGRAM
                              </span>
                            )}
                          </div>

                          <h4 className="font-editorial text-xl font-bold text-[#261843]">
                            {edu.degree}
                          </h4>

                          <p className="text-xs sm:text-sm text-[#695E7E]">
                            {edu.institution}
                          </p>

                          {isDegree && (
                            <p className="text-xs text-[#695E7E] pt-3 mt-3 border-t border-[#C3C1CD]/40 leading-relaxed font-light">
                              Core software engineering curriculum covering Object-Oriented Analysis, Algorithms, Database Architecture, Web Engineering, and System Design.
                            </p>
                          )}
                        </div>
                      </div>
                    </ThreeDTilt>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified HEC National Achievement (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono-tag text-xs text-[#261843] tracking-widest mb-4 font-bold">
              VERIFIED COMPETENCY
            </h3>

            <FadeIn delay={0.2} y={25}>
              <ThreeDTilt maxTilt={8} scale={1.03} glare={true} className="w-full">
                <div className="p-8 rounded-3xl bg-[#FAF8FF] border-2 border-[#FFDAB9] shadow-[0_16px_50px_-15px_rgba(255,218,185,0.4)] space-y-6 relative overflow-hidden preserve-3d">
                  
                  {/* Achievement Header */}
                  <div className="flex items-start justify-between gap-4 translate-z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFDAB9] text-[#261843] flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#261843]" />
                    </div>

                    <div className="text-right">
                      <span className="font-editorial text-4xl sm:text-5xl font-black text-[#261843] block leading-none">
                        {achievement.score}
                      </span>
                      <span className="font-mono-tag text-[9px] text-[#695E7E] tracking-widest mt-1 block font-bold">
                        COMPETENCY SCORE
                      </span>
                    </div>
                  </div>

                  <div className="translate-z-10">
                    <span className="badge-sage font-mono-tag text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                      {achievement.organization} &bull; {achievement.year}
                    </span>
                    <h4 className="font-editorial text-2xl font-black text-[#261843] mt-2">
                      {achievement.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-[#695E7E] leading-relaxed pt-4 border-t border-[#C3C1CD]/40 translate-z-10 font-light">
                    {achievement.description}
                  </p>

                  {/* Verified check item */}
                  <div className="p-3.5 rounded-2xl badge-sage flex items-center gap-3 translate-z-10">
                    <ShieldCheck className="w-4 h-4 text-[#4D6B48] flex-shrink-0" />
                    <span className="font-mono text-xs text-[#261843] font-bold">
                      Higher Education Commission Associated
                    </span>
                  </div>
                </div>
              </ThreeDTilt>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
