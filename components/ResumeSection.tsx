"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";
import ThreeDTilt from "./ThreeDTilt";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import {
  FileText,
  FileDown,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Eye,
} from "lucide-react";

export default function ResumeSection() {
  const [downloading, setDownloading] = useState(false);
  const { cvFile } = portfolioData;

  const handleDownload = () => {
    setDownloading(true);
    try {
      confetti({
        particleCount: 85,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#372773", "#5C4F8C", "#D9CE9A", "#A78BFA"],
      });
    } catch {}

    setTimeout(() => {
      setDownloading(false);
    }, 1200);
  };

  return (
    <section
      id="resume"
      className="py-24 sm:py-36 bg-[#EAE6F4] text-[#2B1E59] border-t border-[#8177A6]/15 relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/60 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#8177A6]/15">
          <div>
            <FadeIn delay={0} y={-10} className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full neu-inset">
                <span className="w-2 h-2 rounded-full bg-[#372773] status-led" />
                <span className="text-xs font-bold text-[#372773] tracking-wider uppercase">
                  07 / Official Curriculum Vitae
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight">
                RESUME / CV
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="max-w-md text-xs sm:text-sm text-[#8177A6] leading-relaxed font-light">
              Download the official ATS-compliant two-page curriculum vitae covering verified professional tenure at Codqor Technologies, education, and technical stacks.
            </p>
          </FadeIn>
        </div>

        {/* Main Showcase Panel with 3D Depth & Neumorphic Styling */}
        <FadeIn delay={0.25} y={30}>
          <div className="p-8 sm:p-12 rounded-3xl neu-card relative overflow-hidden">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              {/* Left 3D Tilted Paper Representation (Col 5) */}
              <div className="md:col-span-5 flex flex-col items-center">
                <ThreeDTilt maxTilt={14} scale={1.03} glare={true} className="w-full max-w-[280px]">
                  <div className="relative w-full aspect-[1/1.38] bg-[#F8F7FD] rounded-2xl shadow-2xl p-5 border border-[#8177A6]/25 text-[#2B1E59] flex flex-col justify-between overflow-hidden group transition-transform duration-300 preserve-3d">
                    
                    {/* Paper Header */}
                    <div className="space-y-1 text-center border-b border-indigo-200 pb-3 translate-z-10">
                      <span className="font-editorial text-[14px] font-black tracking-tight text-[#2B1E59] block">
                        AYESHA TAHIR
                      </span>
                      <span className="text-[8.5px] font-bold text-[#372773] block tracking-wider uppercase">
                        Full Stack &bull; AI Chatbots
                      </span>
                      <span className="text-[7.5px] text-slate-500 block">
                        Pakistan &bull; ayeshatahirshehbaz@gmail.com
                      </span>
                    </div>

                    {/* Simulated Resume Body Sections */}
                    <div className="space-y-2.5 py-2 text-left translate-z-10">
                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-[#2B1E59] uppercase tracking-wider block">
                          Technical Skills
                        </span>
                        <div className="h-1 bg-indigo-200 rounded-full w-full" />
                        <div className="h-1 bg-indigo-200 rounded-full w-4/5" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-[#2B1E59] uppercase tracking-wider block">
                          Experience &bull; Codqor Technologies
                        </span>
                        <div className="h-1 bg-indigo-200 rounded-full w-full" />
                        <div className="h-1 bg-indigo-200 rounded-full w-11/12" />
                        <div className="h-1 bg-indigo-200 rounded-full w-3/4" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-[8px] font-bold text-[#2B1E59] uppercase tracking-wider block">
                          Delivered Systems (Ledger, HR, Chatbot)
                        </span>
                        <div className="h-1 bg-indigo-200 rounded-full w-full" />
                        <div className="h-1 bg-indigo-200 rounded-full w-5/6" />
                      </div>
                    </div>

                    {/* PDF Footer Stamp */}
                    <div className="pt-2 border-t border-indigo-200 flex items-center justify-between text-[8px] font-bold text-slate-700 translate-z-10">
                      <span>ATS COMPLIANT</span>
                      <span className="text-[#372773] font-bold">HEC NSCT: 90%</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#2B1E59]/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                      <a
                        href={cvFile.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-bold btn-editorial-primary text-white shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full PDF</span>
                      </a>
                    </div>
                  </div>
                </ThreeDTilt>

                <span className="font-mono text-[11px] text-[#372773] mt-3 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#372773]" />
                  Format: 2-Page ATS-Optimized PDF
                </span>
              </div>

              {/* Right Information & Action Hub (Col 7) */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold neu-inset text-[#372773] mb-3 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#372773]" />
                    <span>Verified Credentials &amp; Experience</span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-black text-[#2B1E59]">
                    Download Official CV
                  </h3>
                  <p className="text-sm text-[#8177A6] mt-2 leading-relaxed font-light">
                    Tailored for engineering leads, software agencies, and freelance clients seeking verifiable Full Stack and AI Chatbot proficiency.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {[
                    "1 Year Full-Stack Experience at Codqor Technologies",
                    "BS Software Engineering (Gift University 2026)",
                    "HEC National Skill Competency Test (NSCT) — 90% Score",
                    "5 Real Systems: Ledger, HR, School, E-Commerce & AI Chatbot",
                    "10 Core Skills: Next.js, React, React Native, Python & UI/UX",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-xs sm:text-sm text-[#2B1E59] p-3 rounded-2xl neu-inset"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#372773] flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Download & Open Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Magnet padding={80} strength={3}>
                    <a
                      href={cvFile.downloadUrl}
                      download={cvFile.name}
                      onClick={handleDownload}
                      id="resume-download-btn"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl btn-editorial-primary text-xs uppercase tracking-wider text-white"
                    >
                      <FileDown className={`w-4 h-4 ${downloading ? "animate-bounce" : ""}`} />
                      <span>{downloading ? "Downloading..." : "Download Resume (PDF)"}</span>
                    </a>
                  </Magnet>

                  <Magnet padding={60} strength={3}>
                    <a
                      href={cvFile.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl neu-button text-xs font-semibold text-[#2B1E59] hover:text-[#372773] uppercase tracking-wider"
                    >
                      <ExternalLink className="w-4 h-4 text-[#372773]" />
                      <span>Open in Tab</span>
                    </a>
                  </Magnet>
                </div>

                {/* Technical Footnote */}
                <p className="font-mono text-[11px] text-[#8177A6]">
                  Automated PDF compilation via <code className="text-[#372773] font-bold">scripts/generate_cv.py</code> with ATS-optimized typography.
                </p>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
