"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  Play,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  Bot,
  Activity,
  Cpu,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AiEvalTerminal() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeOutput, setActiveOutput] = useState(
    portfolioData.interactiveTerminalScenarios[0].output
  );

  const currentScenario =
    portfolioData.interactiveTerminalScenarios[selectedScenarioIndex];

  const handleSelectScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    setIsRunning(true);
    setActiveOutput("Initializing benchmark environment...\nLoading model weights and evaluation criteria...");
    setTimeout(() => {
      setActiveOutput(portfolioData.interactiveTerminalScenarios[index].output);
      setIsRunning(false);
    }, 450);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(activeOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>INTERACTIVE EVALUATION PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Live AI Pipeline & Model Sandbox
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Simulate how Sameer executes multimodal video processing pipelines, evaluates medical deep learning classifiers, and extracts NLP intent entities.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl overflow-hidden glass-panel-glow border border-cyan-500/20 shadow-2xl">
          {/* Top Bar with window controls & tabs */}
          <div className="bg-[#0b0f19] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                sameer@eval-engine: ~/{currentScenario.id}
              </span>
            </div>

            {/* Quick Scenario Selectors */}
            <div className="flex flex-wrap items-center gap-1.5">
              {portfolioData.interactiveTerminalScenarios.map((scenario, idx) => (
                <button
                  key={scenario.id}
                  onClick={() => handleSelectScenario(idx)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                    selectedScenarioIndex === idx
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  {scenario.name.split(" ")[0]} {scenario.name.split(" ")[1]}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSelectScenario(selectedScenarioIndex)}
                disabled={isRunning}
                className="p-1.5 text-slate-400 hover:text-cyan-300 rounded hover:bg-slate-800 transition-colors"
                title="Rerun benchmark"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? "animate-spin text-cyan-400" : ""}`} />
              </button>
              <button
                onClick={handleCopyOutput}
                className="p-1.5 text-slate-400 hover:text-cyan-300 rounded hover:bg-slate-800 transition-colors"
                title="Copy terminal output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 bg-[#070a12]/95 font-mono text-xs sm:text-sm">
            {/* Active Command Prompt */}
            <div className="flex items-start gap-2 text-cyan-400 mb-4 pb-3 border-b border-slate-800/60">
              <span className="text-purple-400 font-bold select-none">sameer@eval:~$</span>
              <span className="text-slate-200 break-all">{currentScenario.command}</span>
            </div>

            {/* Output Display */}
            <div className="relative min-h-[220px]">
              {isRunning ? (
                <div className="flex items-center justify-center h-48 text-cyan-400 gap-3">
                  <Activity className="w-5 h-5 animate-pulse" />
                  <span>Benchmarking models and evaluating safety matrices...</span>
                </div>
              ) : (
                <motion.pre
                  key={selectedScenarioIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-300 leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto selection:bg-cyan-500/40"
                >
                  {activeOutput}
                </motion.pre>
              )}
            </div>

            {/* Bottom Status Ribbon */}
            <div className="mt-6 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Status: Evaluation Criteria Active
                </span>
                <span>•</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-purple-400" />
                  Backend: Python / MCTS / Tree-sitter / Docker
                </span>
              </div>
              <div className="text-cyan-400/80 font-mono">
                Click tabs above to switch evaluation tasks ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
