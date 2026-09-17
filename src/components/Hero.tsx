"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Github,
  Linkedin,
  Copy,
  Check,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import BorderBeam from "@/components/BorderBeam";

export default function Hero() {
  const roles = [
    {
      title: "Multimodal Video Pipelines",
      subtitle: "faster-whisper, OpenCV & Async Python",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "Vision-Language Models (VLM)",
      subtitle: "4-bit QLoRA PEFT on Qwen2-VL",
      color: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/30",
    },
    {
      title: "High-Throughput Backends",
      subtitle: "FastAPI, Docker & Asyncio Services",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "Deep Learning Architectures",
      subtitle: "Medical CNNs, U-Net & Clinical Diagnostics",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/30",
    },
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  const currentRole = roles[roleIndex];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sameer2659110@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Cyber HUD Telemetry Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#080d1a]/90 border border-cyan-500/30 backdrop-blur-xl text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.15)] mb-6 overflow-hidden relative"
        >
          <BorderBeam size={120} duration={6} colorFrom="#00f0ff" colorTo="#a855f7" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>SYSTEM READY</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">Open for AI Engineering Roles Worldwide</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">Sukkur IBA &apos;26</span>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-cyan-400/90 uppercase font-semibold">
            // APPLIED MACHINE LEARNING &amp; MULTIMODAL SYSTEMS
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
            Sameer Ali
            <br />
            <span className="inline-block relative min-h-[1.25em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className={`bg-gradient-to-r ${
                    roleIndex === 0
                      ? "from-cyan-400 via-sky-300 to-blue-500"
                      : roleIndex === 1
                      ? "from-purple-400 via-fuchsia-300 to-indigo-500"
                      : roleIndex === 2
                      ? "from-emerald-400 via-teal-300 to-cyan-500"
                      : "from-amber-400 via-orange-300 to-rose-500"
                  } bg-clip-text text-transparent inline-block`}
                >
                  {roleIndex === 0 && "Python AI Engineer"}
                  {roleIndex === 1 && "Vision-Language (VLM) Specialist"}
                  {roleIndex === 2 && "Multimodal Systems Architect"}
                  {roleIndex === 3 && "Deep Learning Engineer"}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Role Rotator Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 flex items-center justify-center"
        >
          <div className="h-9 relative overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs sm:text-sm font-mono ${currentRole.bg}`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${currentRole.color}`} />
                <span className={`font-semibold ${currentRole.color}`}>
                  {currentRole.title}
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-300 hidden sm:inline text-xs">
                  {currentRole.subtitle}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Concise Value Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Designing production-ready machine learning pipelines, fine-tuning parameter-efficient <span className="text-white font-medium">Vision-Language Models (4-bit QLoRA)</span>, and engineering asynchronous <span className="text-cyan-300 font-medium">Python &amp; FastAPI</span> backends for real-world deployment.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Explore Projects Button */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-slate-950 font-mono text-xs sm:text-sm font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:scale-105 transition-all"
          >
            <span>Explore 8 Flagship Systems</span>
            <ArrowDown className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* AI Sandbox Button */}
          <a
            href="#sandbox"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0a0f1d] hover:bg-slate-900 text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-mono transition-all shadow-md"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch AI Sandbox</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-all"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Live Telemetry & Metric Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { label: "Core AI Projects", value: "8 Flagship", sub: "Production Built" },
            { label: "Pipeline Throughput", value: "10x Realtime", sub: "faster-whisper" },
            { label: "VLM Quantization", value: "4-Bit QLoRA", sub: "78% VRAM Saved" },
            { label: "CS Foundation", value: "Sukkur IBA", sub: "Graduating '26" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl cyber-glass text-center transition-all hover:scale-105 group"
            >
              <div className="text-base sm:text-lg font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-cyan-400 font-medium mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
