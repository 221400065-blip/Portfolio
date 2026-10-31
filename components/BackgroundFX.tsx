"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // depth: 0.5 to 2.5
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates relative to viewport
    const mouse = { x: -1000, y: -1000, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Color palette from mountain image:
    // #08171E (Deepest), #042B44 (Alpine Deep), #096B90 (Ocean Blue), #71B7D5 (Glacier Sky), #A1CCDC (Frost Ice)
    const particleColors = [
      "rgba(113, 183, 213, ", // #71B7D5
      "rgba(161, 204, 220, ", // #A1CCDC
      "rgba(9, 107, 144, ",   // #096B90
    ];

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const z = Math.random() * 2 + 0.6; // depth factor
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          vx: (Math.random() - 0.5) * 0.45 * z,
          vy: (Math.random() - 0.5) * 0.45 * z,
          radius: (Math.random() * 1.6 + 0.8) * (z * 0.75),
          baseAlpha: Math.random() * 0.4 + 0.25,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
    }

    initParticles();

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges smoothly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse interactive reaction (subtle 3D magnetic pull / push)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 0.8;
            // Draw interactive beam to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(113, 183, 213, ${(1 - dist / maxDist) * 0.35})`;
            ctx.lineWidth = 0.8 * (p.z / 2);
            ctx.stroke();

            // Push slightly away to create interactive fluid field
            p.x -= (dx / dist) * force * 1.2;
            p.y -= (dy / dist) * force * 1.2;
          }
        }

        // Connect nearby particles (constellation effect)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectDist = 115;

          if (dist < connectDist) {
            const lineAlpha = (1 - dist / connectDist) * 0.16 * ((p.z + p2.z) / 4);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(161, 204, 220, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;
        ctx.shadowColor = "#71B7D5";
        ctx.shadowBlur = p.radius * 3;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* 1. Deep Atmospheric Glowing Aurora Blobs in Alpine Glacier Palette */}
      
      {/* Primary Glacier Sky Glow top-right (#71B7D5) */}
      <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-[#71B7D5]/15 dark:bg-[#71B7D5]/18 blur-[140px] animate-pulse-glow" />

      {/* Ocean Teal Glow center-left (#096B90) */}
      <div
        className="absolute top-[32%] -left-48 w-[600px] h-[600px] rounded-full bg-[#096B90]/18 dark:bg-[#096B90]/22 blur-[150px] animate-pulse-glow"
        style={{ animationDelay: "3.5s" }}
      />

      {/* Deep Midnight Blue Abyss Glow bottom-right (#042B44 / #71B7D5) */}
      <div
        className="absolute -bottom-48 right-12 w-[550px] h-[550px] rounded-full bg-[#042B44]/35 dark:bg-[#042B44]/45 blur-[140px] animate-pulse-glow"
        style={{ animationDelay: "7s" }}
      />

      {/* Soft Glacier Frost Glow center-right (#A1CCDC) */}
      <div
        className="absolute top-[65%] right-[15%] w-[420px] h-[420px] rounded-full bg-[#A1CCDC]/10 dark:bg-[#A1CCDC]/12 blur-[130px] animate-pulse-glow"
        style={{ animationDelay: "5s" }}
      />

      {/* 2. Interactive 3D HTML5 Particle Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 dark:opacity-90"
      />

      {/* 3. Subtle Alpine Diamond Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(161, 204, 220, 0.6) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}
