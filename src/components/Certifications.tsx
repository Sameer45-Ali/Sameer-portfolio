"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & CONTINUOUS LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Industry Specializations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Verified coursework from Google, DeepLearning.AI, IBM, and top global institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => {
            const isCompleted = cert.status === "Completed";
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Status & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                        isCompleted
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-amber-400" />
                          In Progress
                        </>
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {cert.title}
                  </h3>

                  {/* Skills Acquired */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1">
                      Skills Acquired:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsAcquired.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
