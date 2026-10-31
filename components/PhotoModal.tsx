"use client";

import Image from "next/image";
import { X, CheckCircle2, Sparkles, Camera } from "lucide-react";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoModal({ isOpen, onClose }: PhotoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl glass-panel bg-[#042B44]/95 border border-[#71B7D5]/30 shadow-2xl text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-[#096B90]/25 border border-[#71B7D5]/30 text-[#71B7D5]">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Profile Photo Preview
            </h3>
            <p className="text-xs text-[#A1CCDC]/80">
              Active Authentic Photograph & Settings
            </p>
          </div>
        </div>

        {/* Live Photo Preview */}
        <div className="my-5 flex flex-col items-center">
          <div className="relative w-44 h-44 rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-[#096B90] to-[#71B7D5] shadow-xl">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#08171E]">
              <Image
                src="/images/ayesha-photo.jpg"
                alt="Ayesha Tahir Profile"
                fill
                className="object-cover object-top"
              />
            </div>
            <span className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#042B44]" />
          </div>

          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Active & Synced Across Portfolio</span>
          </div>
        </div>

        <div className="space-y-3 my-4 text-xs text-[#A1CCDC]/80 bg-[#08171E]/60 p-4 rounded-2xl border border-[#71B7D5]/15">
          <p className="flex items-center gap-2 text-white font-semibold">
            <Sparkles className="w-4 h-4 text-[#71B7D5]" />
            <span>Interactive 3D Holographic Rendering</span>
          </p>
          <p>
            Your authentic headshot is active in the Hero section with full 3D interactive tilt, dynamic specular glare reflection, floating depth badges, and Alpine Glacier color harmony.
          </p>
          <p className="pt-1 text-[11px] text-slate-400">
            Source file: <code className="text-[#71B7D5] font-mono">public/images/ayesha-photo.jpg</code>
          </p>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold text-sm text-white btn-alpine transition-all"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
