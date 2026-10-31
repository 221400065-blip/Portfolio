"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Magnet from "./Magnet";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Floating Segmented Bar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 pointer-events-none"
      >
        {/* Left: Monogram / Name */}
        <div className="pointer-events-auto">
          <Magnet padding={80} strength={4}>
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl nav-pill hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-[#372773] text-white font-editorial font-black text-xs flex items-center justify-center shadow-md shadow-[#372773]/25">
                AT
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xs font-bold tracking-tight text-[#2B1E59] leading-none group-hover:text-[#372773] transition-colors">
                  AYESHA TAHIR
                </span>
                <span className="text-[10px] text-[#8177A6] font-medium tracking-wider mt-0.5">
                  Full Stack &bull; AI Chatbots
                </span>
              </div>
            </a>
          </Magnet>
        </div>

        {/* Center: Desktop Segmented Navigation Pill */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-full nav-pill pointer-events-auto relative">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 z-10 ${
                  isActive ? "text-white" : "text-[#8177A6] hover:text-[#2B1E59]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#372773] rounded-full shadow-md shadow-[#372773]/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CV Button & Animated Hamburger Toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <Magnet padding={80} strength={4}>
            <a
              href={portfolioData.cvFile.downloadUrl}
              download={portfolioData.cvFile.name}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl btn-beige-accent text-xs uppercase tracking-wider"
            >
              <FileDown className="w-3.5 h-3.5 text-[#2B1E59]" />
              <span>Resume</span>
            </a>
          </Magnet>

          {/* Animated 3-Bar to X Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-3 rounded-2xl nav-pill hover:scale-105 transition-all flex items-center justify-center focus:outline-none"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-[#372773] rounded-full transition-transform duration-300 ease-in-out origin-top-left ${
                  mobileMenuOpen ? "rotate-45 translate-x-1" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#372773] rounded-full transition-opacity duration-200 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#372773] rounded-full transition-transform duration-300 ease-in-out origin-bottom-left ${
                  mobileMenuOpen ? "-rotate-45 translate-x-1" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer with Smooth Overlay Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#EAE6F4]/98 flex flex-col justify-between p-6 pt-24 lg:hidden"
          >
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-[#8177A6] font-semibold tracking-wider block mb-4 uppercase"
              >
                Menu
              </motion.span>

              {NAV_ITEMS.map((item, idx) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05, duration: 0.3 }}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center justify-between py-3.5 px-5 rounded-2xl transition-all ${
                      isActive
                        ? "neu-inset text-[#372773] font-bold"
                        : "text-[#8177A6] hover:text-[#2B1E59]"
                    }`}
                  >
                    <span className="font-editorial text-2xl tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#372773] font-semibold">
                      0{idx + 1}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Mobile Drawer Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="pt-6 border-t border-[#8177A6]/20 space-y-3"
            >
              <a
                href={portfolioData.cvFile.downloadUrl}
                download={portfolioData.cvFile.name}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl btn-editorial-primary text-xs uppercase tracking-wider"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
