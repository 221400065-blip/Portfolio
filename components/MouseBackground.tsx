"use client";

import React, { useEffect, useRef } from "react";

export default function MouseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let currentX = width / 2;
    let currentY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Floating ambient interactive nodes
    const NODE_COUNT = 32;
    const nodes: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      nodes.push({
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    const render = () => {
      // Smooth lerp towards cursor
      currentX += (mouseX - currentX) * 0.04;
      currentY += (mouseY - currentY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Mouse-reactive ambient radial spotlight
      const gradient = ctx.createRadialGradient(
        currentX,
        currentY,
        20,
        currentX,
        currentY,
        480
      );
      gradient.addColorStop(0, "rgba(55, 39, 115, 0.04)");
      gradient.addColorStop(0.4, "rgba(92, 79, 140, 0.015)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary counter-balance ambient glow
      const counterX = width - currentX * 0.5;
      const counterY = height - currentY * 0.5;
      const counterGrad = ctx.createRadialGradient(
        counterX,
        counterY,
        40,
        counterX,
        counterY,
        600
      );
      counterGrad.addColorStop(0, "rgba(217, 206, 154, 0.05)");
      counterGrad.addColorStop(1, "transparent");
      ctx.fillStyle = counterGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Render and connect nodes with subtle parallax
      const parallaxFactor = 0.03;
      const offsetX = (currentX - width / 2) * parallaxFactor;
      const offsetY = (currentY - height / 2) * parallaxFactor;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.baseX += node.vx;
        node.baseY += node.vy;

        if (node.baseX < 0) node.baseX = width;
        if (node.baseX > width) node.baseX = 0;
        if (node.baseY < 0) node.baseY = height;
        if (node.baseY > height) node.baseY = 0;

        node.x = node.baseX + offsetX;
        node.y = node.baseY + offsetY;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(55, 39, 115, ${node.alpha * 0.25})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const lineAlpha = (1 - dist / 140) * 0.08;
            ctx.strokeStyle = `rgba(55, 39, 115, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
