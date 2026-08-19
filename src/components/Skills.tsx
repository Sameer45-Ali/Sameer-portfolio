"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case "Code":
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  const getLevelBadgeClass = (level?: string) => {
    switch (level) {
      case "Expert":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
      case "Advanced":
        return "bg-purple-500/10 text-purple-300 border-purple-500/30";
      case "Proficient":
      default:
        return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering & AI Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Specialized toolkit spanning LLM evaluation benchmarks, deep neural network training, asynchronous Python architectures, and production computer vision.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Items */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-slate-950/50 hover:bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getLevelBadgeClass(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
