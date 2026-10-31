"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, FileDown, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Magnet from "./Magnet";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  const { personalInfo, cvFile } = portfolioData;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const dynamicSpecialties = [
    "Full Stack Web Platforms",
    "Intelligent AI Chatbots",
    "Next.js Systems",
    "Python & LLM Workflows",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden bg-[#E6E6FA] text-[#261843]"
    >
      {/* Soft Ambient Light Gradients with Lavender Dream Accents */}
      <div className="absolute top-10 left-10 w-[500px] h-[350px] bg-white/70 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-[#FFDAB9]/35 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* ================= LEFT COLUMN: Clean, Clutter-Free Content (Col 7) ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          
          {/* Status Pill Badge: Sage Green (#C8D8C4) */}
          <FadeIn delay={0.05} y={-10} className="self-start">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-sage text-xs font-mono font-bold tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E301B] status-led" />
              <span>Full Stack &amp; AI Chatbot Developer</span>
            </div>
          </FadeIn>

          {/* Clean Editorial Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#261843] leading-[1.02]"
            >
              Hi, I&apos;m <br />
              <span className="hero-heading">Ayesha Tahir</span>.
            </motion.h1>
          </div>

          {/* Typewriter Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl font-editorial font-medium text-[#261843]"
          >
            <span className="text-[#695E7E]">Crafting</span>
            <Typewriter
              words={dynamicSpecialties}
              typingSpeed={70}
              deletingSpeed={35}
              pauseDuration={1800}
              className="text-[#372773] font-bold"
            />
          </motion.div>

          {/* Clean Description Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-[#695E7E] font-light leading-relaxed max-w-xl"
          >
            I build scalable, high-performance web applications and intelligent AI conversational agents with tactile, thoughtful design and verified engineering rigor.
          </motion.p>

          {/* Tactile Action Buttons with Distinct Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary Action Button (Deep Plum #261843) */}
            <Magnet padding={80} strength={3}>
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-editorial-primary text-xs sm:text-sm uppercase tracking-wider text-white"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </Magnet>

            {/* Warm Peach Contact Button (#FFDAB9) */}
            <ContactButton label="Contact Me" href="#contact" className="btn-peach-accent text-[#261843] font-bold" />

            {/* Tactile Resume Button */}
            <Magnet padding={60} strength={3}>
              <a
                href={cvFile.downloadUrl}
                download={cvFile.name}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full neu-button text-xs font-mono font-bold text-[#261843] hover:text-[#372773] transition-colors"
                title="Download ATS-compliant Resume"
              >
                <FileDown className="w-4 h-4 text-[#372773]" />
                <span>RESUME</span>
              </a>
            </Magnet>
          </motion.div>

          {/* Distinction Badges with Palette Accents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl neu-card-sm text-xs text-[#261843] font-medium border border-[#C8D8C4]">
              <ShieldCheck className="w-4 h-4 text-[#2E4A28]" />
              <span>HEC NSCT: <strong className="text-[#1E301B] font-bold">90% Score</strong></span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl neu-card-sm text-xs text-[#261843] font-medium border border-[#FFDAB9]">
              <Sparkles className="w-4 h-4 text-[#995C24]" />
              <span>Experience: <strong className="text-[#3D2411] font-bold">1 Year (Codqor Tech)</strong></span>
            </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN: Frameless Natural Profile Photo (Col 5) ================= */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] flex justify-center"
          >
            <Magnet padding={100} strength={3.5}>
              {/* NO FRAME: Raw, natural profile photo fully displayed without any cropping box */}
              <div
                className="relative w-[300px] sm:w-[380px] md:w-[420px] aspect-square select-none"
                style={{
                  filter: "drop-shadow(0 20px 35px rgba(43, 30, 89, 0.16))",
                }}
              >
                <Image
                  src="/images/ayesha-photo.jpg"
                  alt="Ayesha Tahir - Full Stack & AI Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, 420px"
                  className="object-cover object-center rounded-full hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>
            </Magnet>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
