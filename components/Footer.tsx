"use client";

import { ArrowUp, ArrowUpRight, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Magnet from "./Magnet";

export default function Footer() {
  const { personalInfo, socialLinks, cvFile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#E2DDF0] text-[#2B1E59] border-t border-[#8177A6]/20 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Giant Editorial Signature */}
        <div className="border-b border-[#8177A6]/15 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="font-mono-tag text-xs text-[#372773] tracking-widest block mb-4 font-bold">
                FULL STACK &bull; AI CHATBOT DEVELOPER
              </span>
              <h2 className="hero-heading font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] hover:opacity-90 transition-opacity duration-300">
                AYESHA TAHIR
              </h2>
            </div>

            <Magnet padding={60} strength={3}>
              <button
                onClick={scrollToTop}
                className="p-4 rounded-2xl neu-button text-[#2B1E59] hover:text-[#372773] flex items-center gap-2 self-start lg:self-auto transition-colors font-bold"
                title="Return to Top"
              >
                <span className="font-mono-tag text-xs font-bold">TOP</span>
                <ArrowUp className="w-4 h-4 text-[#372773]" />
              </button>
            </Magnet>
          </div>
        </div>

        {/* Directory Columns */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
          
          <div className="space-y-3">
            <span className="font-mono-tag text-[10px] text-[#372773] tracking-widest block font-bold">
              SECTIONS
            </span>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Services", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-[#8177A6] hover:text-[#2B1E59] transition-colors font-medium"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono-tag text-[10px] text-[#372773] tracking-widest block font-bold">
              RECOGNITION
            </span>
            <ul className="space-y-2 text-[#8177A6] font-medium">
              <li>Codqor Technologies (1 Yr)</li>
              <li>Gift University SE &apos;26</li>
              <li className="text-[#372773] font-bold">HEC NSCT 90% Score</li>
              <li>5 Real Systems Delivered</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono-tag text-[10px] text-[#372773] tracking-widest block font-bold">
              CHANNELS
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8177A6] hover:text-[#372773] inline-flex items-center gap-1 transition-colors font-medium"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#372773]" />
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.fiverr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8177A6] hover:text-[#372773] inline-flex items-center gap-1 transition-colors font-medium"
                >
                  <span>Fiverr</span>
                  <ArrowUpRight className="w-3 h-3 text-[#372773]" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#8177A6] hover:text-[#372773] inline-flex items-center gap-1 transition-colors font-medium"
                >
                  <span>Direct Email</span>
                  <ArrowUpRight className="w-3 h-3 text-[#372773]" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="font-mono-tag text-[10px] text-[#372773] tracking-widest block font-bold">
              DOCUMENTS
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={cvFile.downloadUrl}
                  download={cvFile.name}
                  className="text-[#8177A6] hover:text-[#372773] inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#372773]" />
                  <span>Ayesha-Tahir-CV.pdf</span>
                </a>
              </li>
              <li className="font-mono text-[10px] text-[#8177A6]/80">
                ATS-Compliant Edition
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="pt-8 border-t border-[#8177A6]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8177A6]">
          <span>&copy; 2026 Ayesha Tahir. All rights reserved.</span>
          <span>Crafted with Next.js 16, TypeScript &amp; Framer Motion.</span>
        </div>

      </div>
    </footer>
  );
}
