"use client";

import Image from "next/image";
import { ProjectItem } from "@/data/portfolioData";
import { X, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B1E59]/60 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl neu-card bg-[#EAE6F4] border border-white/90 text-[#2B1E59] p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#8177A6]/20">
          <div>
            <span className="font-mono-tag text-[10px] text-[#372773] font-bold">
              {project.type} &bull; {project.number}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-black text-[#2B1E59] mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl neu-button text-[#8177A6] hover:text-[#2B1E59]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Preview */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden my-6 neu-inset p-1">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h4 className="font-mono-tag text-xs text-[#372773] mb-2 tracking-wider font-bold">
              DESCRIPTION
            </h4>
            <p className="text-sm text-[#8177A6] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="font-mono-tag text-xs text-[#372773] mb-3 tracking-wider font-bold">
              KEY ARCHITECTURAL FEATURES
            </h4>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl neu-inset text-xs text-[#2B1E59]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#372773] flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono-tag text-xs text-[#372773] mb-2 tracking-wider font-bold">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-xl neu-inset text-[#372773] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#8177A6]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl btn-editorial-primary text-xs uppercase tracking-wider text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
