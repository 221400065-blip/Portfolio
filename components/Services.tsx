"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import {
  Globe,
  Layers,
  Bot,
  Smartphone,
  Palette,
  Terminal,
  FileText,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

const SERVICE_ICONS: Record<string, typeof Globe> = {
  "website-dev": Globe,
  "full-stack-dev": Layers,
  "ai-chatbot-dev": Bot,
  "react-native-dev": Smartphone,
  "ui-ux-design": Palette,
  "python-dev": Terminal,
  "documentation": FileText,
};

export default function Services() {
  const { services } = portfolioData;

  const handleInquire = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-36 bg-[#EBE5F2] text-[#261843] border-t border-[#C3C1CD]/40 relative overflow-hidden"
    >
      {/* Background Accent Glow with Peach & Lavender Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFDAB9]/25 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#C3C1CD]/40">
          <div>
            <FadeIn delay={0} y={-10} className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full badge-sage">
                <span className="w-2 h-2 rounded-full bg-[#1E301B] status-led" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  03 / Capabilities &amp; Offerings
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight">
                SERVICES
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="max-w-md text-xs sm:text-sm text-[#695E7E] leading-relaxed font-light">
              Seven dedicated engineering packages tailored for high-performance web systems, custom conversational AI chatbots, and full-stack solutions.
            </p>
          </FadeIn>
        </div>

        {/* Staggered Vertical List with Huge Numbers */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.id] || Globe;

            return (
              <FadeIn key={service.id} delay={idx * 0.08} y={25}>
                <div className="p-6 sm:p-8 rounded-3xl neu-card group hover:scale-[1.01] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    {/* Left: Giant Number + Icon */}
                    <div className="flex items-center gap-5 sm:gap-8">
                      <span className="font-editorial font-black text-4xl sm:text-5xl md:text-6xl text-[#261843] leading-none shrink-0">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#EAE6F4] border border-[#C3C1CD]/40 flex items-center justify-center text-[#261843] shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-[#261843]" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#261843] group-hover:text-[#372773] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#695E7E] mt-1 font-light max-w-xl">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Inquire Button in Warm Peach */}
                    <div className="self-end md:self-auto shrink-0">
                      <Magnet padding={60} strength={3}>
                        <button
                          onClick={handleInquire}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full btn-peach-accent text-[#261843] text-xs font-mono font-bold uppercase tracking-wider transition-all"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#261843]" />
                        </button>
                      </Magnet>
                    </div>

                  </div>

                  {/* Features Tag Strip: Sage Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-[#C3C1CD]/30">
                    {service.features.map((feature, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#1E301B] bg-[#C8D8C4]/45 px-3 py-1.5 rounded-xl border border-[#C8D8C4] font-medium"
                      >
                        <CheckCircle className="w-3 h-3 text-[#2E4A28]" />
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
