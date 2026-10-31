"use client";

import React from "react";
import Magnet from "./Magnet";
import { ArrowUpRight } from "lucide-react";

interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = "Live Demo",
  className = "",
}: LiveProjectButtonProps) {
  return (
    <Magnet padding={80} strength={3.5}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 rounded-full btn-peach-accent text-[#261843] px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#261843] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </Magnet>
  );
}
