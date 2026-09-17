"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Github,
  ChevronDown,
  ChevronUp,
  Cpu,
  CheckCircle,
  Zap,
  Sparkles,
  Bot,
  Video,
  Activity,
  Mic,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

function ProjectCard({
  project,
  isExpanded,
  onToggleExpand,
  idx,
}: {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getCategoryTheme = (category: Project["category"]) => {
    switch (category) {
      case "Multimodal & Vision":
        return {
          icon: Video,
          badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
          glowColor: "rgba(168, 85, 247, 0.15)",
        };
      case "Deep Learning":
        return {
          icon: Activity,
          badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
          glowColor: "rgba(16, 185, 129, 0.15)",
        };
      case "Full-Stack AI":
        return {
          icon: Mic,
          badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
          glowColor: "rgba(245, 158, 11, 0.15)",
        };
      case "Autonomous & Agentic AI":
        return {
          icon: Bot,
          badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
          glowColor: "rgba(0, 240, 255, 0.15)",
        };
      default:
        return {
          icon: Cpu,
          badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/30",
          glowColor: "rgba(56, 189, 248, 0.15)",
        };
    }
  };

  const theme = getCategoryTheme(project.category);
  const CategoryIcon = theme.icon;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      onMouseMove={handleMouseMove}
      className={`relative rounded-2xl cyber-glass p-6 sm:p-7 flex flex-col justify-between overflow-hidden group transition-all duration-300 border ${
        isExpanded
          ? "border-cyan-500/50 shadow-[0_0_35px_rgba(0,240,255,0.2)] bg-[#0c1222]/95"
          : "border-slate-800 hover:border-cyan-500/30"
      }`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${theme.glowColor}, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Category Header & GitHub Link */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${theme.badgeColor}`}
          >
            <CategoryIcon className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl || portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 text-xs font-mono transition-all"
              title="View Repository on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyan-400/90 mb-3 leading-relaxed">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 font-light">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 mb-5">
          {project.highlights.map((highlight, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Architecture Flow Expander Drawer */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-5 pt-4 border-t border-slate-800/80 space-y-4"
          >
            <div>
              <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                Pipeline Flow &amp; System Architecture
              </h4>
              <div className="space-y-1.5">
                {project.architectureDetails.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800 flex items-start gap-2 font-mono"
                  >
                    <span className="text-cyan-400 font-bold">0{dIdx + 1}.</span>
                    <span className="font-sans font-light">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Bar */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {project.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-slate-950 p-2.5 rounded-lg border border-cyan-500/25 text-center"
                  >
                    <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                    <div className="text-xs font-bold text-cyan-300 font-mono mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Card Footer: Tech Stack Pills & Deep Dive Toggle */}
      <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={onToggleExpand}
          className="inline-flex items-center gap-1 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 self-end sm:self-auto"
        >
          {isExpanded ? (
            <>
              Less info <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Architecture <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = [
    "All",
    "Multimodal & Vision",
    "Deep Learning",
    "Autonomous & Agentic AI",
    "Full-Stack AI",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Layers className="w-3.5 h-3.5" />
            <span>8 FLAGSHIP PRODUCTION PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Engineered AI &amp; Software Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
            End-to-end architectures covering 4-bit Vision-Language Models, asynchronous multimodal video processing, autonomous agent search, and clinical deep learning diagnostics.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat} {cat === "All" ? `(${portfolioData.projects.length})` : ""}
              </button>
            ))}
          </div>
        </div>

        {/* 8-Project Interactive Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProjectId === project.id}
                onToggleExpand={() => toggleExpand(project.id)}
                idx={idx}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
