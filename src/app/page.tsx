"use client";

import React, { useState } from "react";
import CyberNavbar from "@/components/CyberNavbar";
import Hero from "@/components/Hero";
import NeuralMeshCanvas from "@/components/NeuralMeshCanvas";
import TechMarquee from "@/components/TechMarquee";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AiEvalTerminal from "@/components/AiEvalTerminal";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ExperienceEdu from "@/components/ExperienceEdu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#05070d] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-body">
      {/* Interactive HTML5 Neural Synapse Canvas */}
      <NeuralMeshCanvas />

      {/* Cyber Command Palette (Ctrl + K / Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Floating Cyber HUD Navigation Header */}
      <CyberNavbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Hero Section with Cyber HUD Telemetry & Dynamic Role Rotator */}
      <Hero />

      {/* Infinite Smooth Scrolling Tech Stack Stream */}
      <TechMarquee />

      {/* Interactive 8-Project Flagship Systems Showcase */}
      <ProjectsShowcase />

      {/* Interactive AI Pipeline & Model Benchmark Sandbox */}
      <AiEvalTerminal />

      {/* Technical Skills & Capabilities Breakdown */}
      <Skills />

      {/* Verified Certifications & Credentials */}
      <Certifications />

      {/* Education & Core Foundations (Sukkur IBA CS '26) */}
      <ExperienceEdu />

      {/* Contact & Recruiter Direct Outreach Console */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
