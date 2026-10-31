"use client";

import React from "react";
import Magnet from "./Magnet";

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function ContactButton({
  label = "Contact Me",
  onClick,
  href = "#contact",
  className = "",
}: ContactButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Magnet padding={100} strength={3.5}>
      <a
        href={href}
        onClick={handleClick}
        className={`group relative inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm btn-editorial-primary ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          {label}
        </span>
      </a>
    </Magnet>
  );
}
