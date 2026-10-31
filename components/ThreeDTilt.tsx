"use client";

import React, { useRef, useState, useCallback } from "react";

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  perspective?: number;
}

export default function ThreeDTilt({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  perspective = 1000,
}: ThreeDTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * (maxTilt * 2);
      const rotateY = (x - 0.5) * (maxTilt * 2);

      setTilt({
        rotateX,
        rotateY,
        glareX: x * 100,
        glareY: y * 100,
        isHovered: true,
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: `perspective(${perspective}px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) ${
          tilt.isHovered ? `scale3d(${scale}, ${scale}, 1)` : "scale3d(1, 1, 1)"
        }`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {/* Dynamic Specular 3D Glare */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
          style={{
            opacity: tilt.isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.65) 0%, rgba(124, 58, 237, 0.1) 40%, transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
