"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const { personalInfo, socialLinks } = portfolioData;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus("error");
      setStatusMessage("Please complete all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${form.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setStatus("success");
      setStatusMessage(
        "Message parameters prepared! Opening your mail client for direct dispatch to " +
          personalInfo.email
      );
      window.location.href = mailtoUrl;
    }, 700);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 bg-[#EAE6F4] text-[#2B1E59] border-t border-[#8177A6]/15 relative overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[350px] bg-white/60 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#8177A6]/15">
          <div>
            <FadeIn delay={0} y={-10} className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full neu-inset">
                <span className="w-2 h-2 rounded-full bg-[#372773] status-led" />
                <span className="text-xs font-bold text-[#372773] tracking-wider uppercase">
                  08 / Initiate Contact
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-editorial text-4xl sm:text-6xl font-black uppercase tracking-tight">
                GET IN TOUCH
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <p className="max-w-md text-xs sm:text-sm text-[#8177A6] leading-relaxed font-light">
              Direct communication channels for engineering collaborations, AI chatbot development contracts, and freelance engagements.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Credentials & Public Profiles (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono-tag text-xs text-[#372773] tracking-widest mb-4 font-bold">
              DIRECT DIRECTORY
            </h3>

            {/* Email Card with 1-click Copy */}
            <FadeIn delay={0.1} y={20}>
              <div className="p-5 rounded-2xl neu-card flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-[#372773] flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#372773]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-mono-tag text-[9px] text-[#8177A6] block font-bold">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-editorial text-sm font-bold text-[#2B1E59] hover:text-[#372773] truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="p-2 rounded-xl neu-button text-[#8177A6] hover:text-[#372773] flex-shrink-0 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#372773]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </FadeIn>

            {/* Phone Card with 1-click Copy */}
            <FadeIn delay={0.15} y={20}>
              <div className="p-5 rounded-2xl neu-card flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-[#372773] flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#372773]" />
                  </div>
                  <div>
                    <span className="font-mono-tag text-[9px] text-[#8177A6] block font-bold">
                      TELEPHONE
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="font-editorial text-sm font-bold text-[#2B1E59] hover:text-[#372773] block transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="p-2 rounded-xl neu-button text-[#8177A6] hover:text-[#372773] flex-shrink-0 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-[#372773]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </FadeIn>

            {/* Location Card */}
            <FadeIn delay={0.2} y={20}>
              <div className="p-5 rounded-2xl neu-card flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center text-[#372773] flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#372773]" />
                </div>
                <div>
                  <span className="font-mono-tag text-[9px] text-[#8177A6] block font-bold">
                    GEOGRAPHIC BASE
                  </span>
                  <span className="font-editorial text-sm font-bold text-[#2B1E59]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* External Verified Profiles */}
            <FadeIn delay={0.25} y={20}>
              <div className="pt-4 space-y-3">
                <h4 className="font-mono-tag text-xs text-[#372773] tracking-widest font-bold">
                  VERIFIED PROFILES
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl neu-button flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-current text-[#372773]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span className="font-editorial text-xs font-bold text-[#2B1E59] group-hover:text-[#372773] transition-colors">
                        LinkedIn
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8177A6] group-hover:text-[#372773] transition-colors" />
                  </a>

                  <a
                    href={socialLinks.fiverr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl neu-button flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#372773]" />
                      <span className="font-editorial text-xs font-bold text-[#2B1E59] group-hover:text-[#372773] transition-colors">
                        Fiverr
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8177A6] group-hover:text-[#372773] transition-colors" />
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Neumorphic Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <h3 className="font-mono-tag text-xs text-[#372773] tracking-widest mb-4 font-bold">
              DISPATCH TRANSMISSION
            </h3>

            <FadeIn delay={0.2} y={30}>
              <form
                onSubmit={handleSubmit}
                className="p-8 sm:p-10 rounded-3xl neu-card space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-mono-tag text-[10px] text-[#372773] block font-bold">
                      FULL NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl neu-inset text-sm text-[#2B1E59] placeholder:text-[#8177A6]/60 focus:outline-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-mono-tag text-[10px] text-[#372773] block font-bold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl neu-inset text-sm text-[#2B1E59] placeholder:text-[#8177A6]/60 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-mono-tag text-[10px] text-[#372773] block font-bold">
                    INQUIRY SUBJECT *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Full-Stack Project / AI Chatbot Engagement"
                    className="w-full px-4 py-3.5 rounded-xl neu-inset text-sm text-[#2B1E59] placeholder:text-[#8177A6]/60 focus:outline-none"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono-tag text-[10px] text-[#372773] block font-bold">
                    PROJECT SPECIFICATIONS &amp; MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Outline your project scope, timeline, and technical objectives..."
                    className="w-full px-4 py-3.5 rounded-xl neu-inset text-sm text-[#2B1E59] placeholder:text-[#8177A6]/60 focus:outline-none resize-none"
                  />
                </div>

                {/* Status Message Display */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs font-mono font-bold ${
                      status === "error"
                        ? "bg-red-500/10 border border-red-500/30 text-red-600"
                        : "neu-inset text-[#372773]"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Submit Button with Magnet Wrapper */}
                <Magnet padding={80} strength={3} className="w-full">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl btn-editorial-primary text-xs uppercase tracking-wider text-white font-bold disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>
                      {status === "submitting" ? "PREPARING DISPATCH..." : "TRANSMIT MESSAGE"}
                    </span>
                  </button>
                </Magnet>

                <p className="font-mono text-[10px] text-[#8177A6] text-center font-light">
                  Transmission directs through verified client dispatch to {personalInfo.email}.
                </p>
              </form>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
