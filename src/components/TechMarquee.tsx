"use client";

import React from "react";
import {
  Cpu,
  Terminal,
  Database,
  Zap,
  Bot,
  Video,
  Activity,
  Code2,
  Box,
} from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ElementType;
}

const techItems: TechItem[] = [
  { name: "PyTorch", category: "Deep Learning", icon: Zap },
  { name: "faster-whisper", category: "Speech AI", icon: AudioWaveIcon },
  { name: "OpenCV", category: "Computer Vision", icon: Video },
  { name: "FastAPI", category: "Backend & APIs", icon: Terminal },
  { name: "Docker", category: "Containers", icon: Box },
  { name: "Qwen2-VL (QLoRA)", category: "Vision-Language", icon: Bot },
  { name: "TensorFlow", category: "Neural Networks", icon: Cpu },
  { name: "spaCy NLP", category: "Intent & NLU", icon: Activity },
  { name: "Next.js 14", category: "Modern Web", icon: Code2 },
  { name: "Python 3.11", category: "Core Language", icon: Terminal },
  { name: "PostgreSQL", category: "Database", icon: Database },
];

function AudioWaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10v4" />
      <path d="M6 6v12" />
      <path d="M10 3v18" />
      <path d="M14 8v8" />
      <path d="M18 5v14" />
      <path d="M22 10v4" />
    </svg>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative w-full py-6 overflow-hidden z-10 border-y border-white/[0.06] bg-[#030303]">
      {/* Left/Right Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#030303] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#030303] to-transparent z-20" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-3 sm:gap-4">
        {[...techItems, ...techItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-950/80 border border-white/[0.06] hover:border-white/[0.2] hover:bg-zinc-900 transition-all shrink-0 group cursor-default"
            >
              <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono font-medium text-zinc-300 group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-zinc-600 font-mono">
                {item.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
