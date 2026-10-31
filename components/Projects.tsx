"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import LiveProjectButton from "./LiveProjectButton";
import FadeIn from "./FadeIn";
import { CheckCircle, ExternalLink } from "lucide-react";

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenModal: (p: ProjectItem) => void;
}

function StackingCard({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
  onOpenModal,
}: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 flex items-center justify-center min-h-[75vh] sm:min-h-[82vh] mb-12 sm:mb-20 will-change-transform"
      style={{
        top: `calc(${index * 26}px + 5rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-5xl rounded-[32px] sm:rounded-[44px] md:rounded-[52px] bg-[#FAF8FF] border border-[#C3C1CD]/60 shadow-[0_16px_50px_-15px_rgba(38,24,67,0.12)] p-5 sm:p-8 md:p-10 flex flex-col justify-between gap-6 overflow-hidden relative group"
      >
        {/* Subtle Ambient Card Light */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-white/80 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Top Row: Number, Category, Title, Live Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#C3C1CD]/40 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-editorial font-black text-4xl sm:text-6xl md:text-7xl text-[#261843] leading-none">
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono-tag text-[9px] sm:text-[10px] text-[#695E7E] font-bold tracking-widest">
                  {project.type}
                </span>
                <span className="text-[#C3C1CD]">&bull;</span>
                <span
                  className={`font-mono text-[9px] px-2.5 py-0.5 rounded-full font-bold ${
                    project.isReal
                      ? "badge-sage"
                      : "badge-thistle"
                  }`}
                >
                  {project.isReal ? "REAL PRODUCTION" : "DEMO CONCEPT"}
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#261843] tracking-tight group-hover:text-[#695E7E] transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs font-mono uppercase tracking-wider text-[#261843] hover:bg-[#D8BFD8]/30 px-5 py-2.5 rounded-full neu-button font-bold transition-colors"
            >
              Details
            </button>
            <LiveProjectButton href={project.liveUrl || "#contact"} label="Live Demo" />
          </div>
        </div>

        {/* Middle/Bottom Visual & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          
          {/* Left Column (5 Cols): Narrative & Tech Stack */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#695E7E] leading-relaxed font-light">
              {project.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-1.5 pt-2">
              {project.features.slice(0, 3).map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#261843]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4D6B48] mt-0.5 shrink-0" />
                  <span className="font-normal">{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-3 py-1 rounded-xl bg-[#EDE7F6] text-[#261843] border border-[#C3C1CD]/60 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 Cols): Project Visual Container with Rounded Corners */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onOpenModal(project)}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[24px] sm:rounded-[36px] overflow-hidden neu-inset p-1.5 cursor-pointer shadow-lg group/img"
            >
              <div className="relative w-full h-full rounded-[20px] sm:rounded-[32px] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261843]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-[#261843]/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
                  <span className="font-bold tracking-wider">VIEW SYSTEM SPECS</span>
                  <ExternalLink className="w-4 h-4 text-[#FFDAB9]" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative bg-[#E6E6FA] text-[#261843] pt-28 sm:pt-36 pb-32 px-4 sm:px-8 border-t border-[#C3C1CD]/40"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/70 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-16 sm:mb-20 text-center relative z-10">
        
        {/* Section Stamp */}
        <FadeIn delay={0} y={-10} className="mb-4">
          <div className="badge-sage inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#4D6B48] status-led" />
            <span className="font-mono-tag text-[10px] text-[#261843] font-bold">
              04 / SELECTED WORKS &amp; ARCHITECTURES
            </span>
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2 className="hero-heading font-editorial font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl leading-none">
            PROJECTS
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm sm:text-base text-[#695E7E] font-light">
            Interactive stacking showcase of production systems and full-stack platforms engineered with Next.js, Python, and AI.
          </p>
        </FadeIn>
      </div>

      {/* 3D Sticky-Stacking Cards Stream */}
      <div className="max-w-6xl mx-auto relative z-10">
        {projects.map((project, index) => {
          const totalCards = projects.length;
          const targetScale = 1 - (totalCards - 1 - index) * 0.035;
          const start = index / totalCards;
          const end = 1;

          return (
            <StackingCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={targetScale}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          );
        })}
      </div>

      {/* Project Modal Preview */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-[#261843]/60 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#FAF8FF] border border-[#C3C1CD] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative text-[#261843]"
          >
            <div className="flex items-center justify-between border-b border-[#C3C1CD]/40 pb-4">
              <div>
                <span className="font-mono-tag text-xs text-[#695E7E] font-bold">
                  {selectedProject.type} &bull; {selectedProject.number}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#261843]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full neu-button text-[#695E7E] hover:text-[#261843] flex items-center justify-center text-sm"
              >
                &times;
              </button>
            </div>

            <p className="text-sm text-[#695E7E] leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="space-y-2">
              <span className="font-mono-tag text-xs text-[#261843] block font-bold">
                KEY ARCHITECTURAL HIGHLIGHTS
              </span>
              <ul className="space-y-1.5 text-xs text-[#261843]">
                {selectedProject.features.map((h: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#4D6B48] font-bold">&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#C3C1CD]/40 flex items-center justify-between">
              <span className="font-mono text-xs text-[#695E7E]">
                Engineered with Next.js &amp; TypeScript
              </span>
              <LiveProjectButton href={selectedProject.liveUrl || "#contact"} label="Open Live App" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
