"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Terminal,
  FolderGit2,
  FileText,
  Mail,
  Linkedin,
  Github,
  X,
  Sparkles,
  ArrowRight,
  Cpu,
  Bot,
  Video,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose(); // Toggle if called from outside or handle in parent
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "doc-vlm",
      title: "DocVLM QLoRA Project",
      subtitle: "4-bit parameter-efficient VLM for structured document extraction",
      category: "Flagship Projects",
      icon: Cpu,
      action: () => {
        window.location.href = "#projects";
        onClose();
      },
    },
    {
      id: "video-ai",
      title: "Multimodal Video AI Pipeline",
      subtitle: "faster-whisper transcription & OpenCV keyframe extraction",
      category: "Flagship Projects",
      icon: Video,
      action: () => {
        window.location.href = "#projects";
        onClose();
      },
    },
    {
      id: "ai-sandbox",
      title: "Launch Interactive AI Sandbox",
      subtitle: "Simulate live pipelines and model inferences",
      category: "Interactive",
      icon: Terminal,
      action: () => {
        window.location.href = "#sandbox";
        onClose();
      },
    },
    {
      id: "vlm-scanner",
      title: "Live DocVLM Scanner Widget",
      subtitle: "Test interactive document bounding-box extraction",
      category: "Interactive",
      icon: Bot,
      action: () => {
        window.location.href = "#docvlm-interactive";
        onClose();
      },
    },
    {
      id: "skills",
      title: "View Technical Skills & Stack",
      subtitle: "Python, FastAPI, Docker, PyTorch, TensorFlow, OpenCV",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        window.location.href = "#skills";
        onClose();
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      subtitle: "github.com/Sameer45-Ali",
      category: "External Links",
      icon: Github,
      action: () => {
        window.open(portfolioData.personal.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "Connect on LinkedIn",
      subtitle: "linkedin.com/in/sameer-ali-ai-ml",
      category: "External Links",
      icon: Linkedin,
      action: () => {
        window.open(portfolioData.personal.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "email",
      title: "Copy Email Address",
      subtitle: portfolioData.personal.email,
      category: "Contact",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        alert("Copied sameer2659110@gmail.com to clipboard!");
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0b0f19]/95 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.18)] overflow-hidden z-10">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search projects, skills, links... (e.g. 'doc-vlm', 'email')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800/80 rounded border border-slate-700">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-500">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-900/80 hover:border-cyan-500/30 border border-transparent transition-all group text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-500 border border-slate-800">
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px]">
              ↑
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px]">
              ↓
            </kbd>
            <span>to navigate</span>
          </div>
          <div className="text-cyan-400/70">Sameer Ali • Cyber Command Palette</div>
        </div>
      </div>
    </div>
  );
}
