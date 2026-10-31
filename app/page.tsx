import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import MouseBackground from "@/components/MouseBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#EAE6F4] text-[#2B1E59] selection:bg-[#372773] selection:text-white overflow-x-clip">
      {/* A. Mouse-Controlled Background Parallax Mesh & Lighting */}
      <MouseBackground />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorGlow />

      {/* Floating Segmented Navigation Bar with Animated 3-Bar Toggle */}
      <Navbar />

      {/* Main Content Stream */}
      <main className="flex-1 flex flex-col overflow-x-clip">
        {/* 1. Hero Section with Blurred Intro, Typewriter Effect, and Animated Action Buttons */}
        <Hero />

        {/* 2. Interactive Skills & Languages Dual-Row Marquee (Scrubbed on Scroll) */}
        <MarqueeSection />

        {/* 3. About Manifesto with Character-by-Character Scroll Reveal */}
        <About />

        {/* 4. 10 Core Technical Competencies (Neumorphic Cards & 3D Tilt) */}
        <Skills />

        {/* 5. 7 Professional Digital Services (Staggered FadeIn & Large Numerals) */}
        <Services />

        {/* 6. 3D Sticky-Stacking Project Cards Showcase */}
        <Projects />

        {/* 7. Professional Experience (Codqor Technologies 1 Year Tenure) */}
        <Experience />

        {/* 8. Academic Qualifications & HEC NSCT 90% Achievement */}
        <Education />

        {/* 9. ATS-Compliant Resume Showcase & Download Hub */}
        <ResumeSection />

        {/* 10. Premium Neumorphic Contact Hub */}
        <Contact />
      </main>

      {/* Luxury Editorial Footer with Monogram Signature */}
      <Footer />
    </div>
  );
}
