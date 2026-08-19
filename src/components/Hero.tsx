"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ArrowRight,
  Download,
  CheckCircle2,
  Sparkles,
  MapPin,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>OPEN TO REMOTE, HYBRID & ON-SITE AI ROLES</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
            {portfolioData.personal.name}
          </span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="font-mono text-cyan-400">Python AI Engineer</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-purple-400">Multimodal Pipelines</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-emerald-400">Deep Learning & Vision</span>
        </motion.div>

        {/* Bio / Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-slate-300/90 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-light"
        >
          {portfolioData.personal.bio}
        </motion.p>

        {/* Key Competency Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-mono text-slate-300"
        >
          {[
            "faster-whisper & Speech AI",
            "OpenCV Keyframe Processing",
            "NIH Chest X-ray14 CNNs",
            "U-Net Image Colorization",
            "spaCy Intent Recognition",
            "Asyncio & Multithreading",
          ].map((pill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300 flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              {pill}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#sandbox"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all glow-btn"
          >
            <Terminal className="w-4 h-4 text-slate-950" />
            Launch AI Eval Sandbox
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700 hover:border-cyan-500/50 transition-all shadow-md"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Explore Projects
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 text-slate-300 font-medium text-sm border border-slate-800 hover:text-cyan-300 transition-all"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            Contact Sameer
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {portfolioData.personal.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl glass-panel text-center group hover:border-cyan-500/40 transition-all"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Location & University Tag */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-500 font-mono">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-cyan-400/70" />
            {portfolioData.personal.location}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400/70" />
            Sukkur IBA University (BS CS 2026)
          </span>
        </div>
      </div>
    </section>
  );
}
