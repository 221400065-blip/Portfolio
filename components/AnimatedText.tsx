"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedCharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedChar({ char, progress, range }: AnimatedCharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for rock-solid layout sizing */}
      <span className="opacity-0 select-none">{char === " " ? "\u00A0" : char}</span>
      {/* Animated character overlaid on top */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
        aria-hidden="true"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");
  const total = characters.length;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap ${className}`}>
      {characters.map((char, index) => {
        const step = 0.85 / total;
        const start = index * step;
        const end = Math.min(1, start + 0.04);

        return (
          <AnimatedChar
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}
