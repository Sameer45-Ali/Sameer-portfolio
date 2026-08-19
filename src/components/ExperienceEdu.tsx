"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceEdu() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Core Foundations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Rigorous training in computer science, algorithmic design, and artificial intelligence at one of Pakistan&apos;s leading institutions.
          </p>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel-glow rounded-2xl p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-block px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 mb-2">
                Undergraduate Degree
              </div>
              <h3 className="text-2xl font-bold text-white">
                {portfolioData.education.degree}
              </h3>
              <p className="text-base text-cyan-400 font-semibold mt-1">
                {portfolioData.education.institution}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                {portfolioData.education.period}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {portfolioData.education.location}
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {portfolioData.education.details}
          </p>

          {/* Key Coursework Tags */}
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2">
              Key Focus Areas:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Artificial Intelligence & Machine Learning",
                "Data Structures & Algorithms",
                "Operating Systems & Multithreading",
                "Database Systems & Query Optimization",
                "Computer Vision & Pattern Recognition",
                "Software Engineering Principles",
              ].map((course, cIdx) => (
                <span
                  key={cIdx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3 h-3 text-cyan-400" />
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
