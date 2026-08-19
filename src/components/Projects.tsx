"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  CheckCircle,
  Zap,
  Sparkles,
  BarChart3,
  Bot,
  Video,
  Activity,
  Mic,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = [
    "All",
    "Multimodal & Vision",
    "Deep Learning",
    "Full-Stack AI",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: Project["category"]) => {
    switch (category) {
      case "Multimodal & Vision":
        return <Video className="w-4 h-4 text-purple-400" />;
      case "Deep Learning":
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case "Full-Stack AI":
        return <Mic className="w-4 h-4 text-amber-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED AI/ML ENGINEERING PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production AI & Model Pipelines
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Selected engineering work spanning autonomous coding agent benchmarks, multimodal computer-vision pipelines, and deep neural networks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedProjectId === project.id;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`rounded-2xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 border ${
                    isExpanded
                      ? "border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-slate-900/90"
                      : "border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5"
                  }`}
                >
                  <div>
                    {/* Category & Links Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl || portfolioData.personal.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Architecture / Deep Dive Expander */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-6 pt-4 border-t border-slate-800/80 space-y-4"
                      >
                        <div>
                          <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" />
                            Architecture & Pipeline Flow
                          </h4>
                          <div className="space-y-1.5">
                            {project.architectureDetails.map((detail, dIdx) => (
                              <div
                                key={dIdx}
                                className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 flex items-start gap-2"
                              >
                                <span className="text-purple-400 font-mono">0{dIdx + 1}.</span>
                                <span>{detail}</span>
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
                                className="bg-slate-900/90 p-2.5 rounded-lg border border-cyan-500/20 text-center"
                              >
                                <div className="text-[10px] text-slate-400 font-mono">
                                  {m.label}
                                </div>
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

                  {/* Bottom Footer: Tech Stack & Toggle */}
                  <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 self-end sm:self-auto"
                    >
                      {isExpanded ? (
                        <>
                          Less info <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Deep Dive <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
