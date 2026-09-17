"use client";

import React, { useState, useEffect } from "react";
import {
  Layers,
  Terminal,
  Cpu,
  Mail,
  Github,
  Linkedin,
  Search,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface CyberNavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function CyberNavbar({ onOpenCommandPalette }: CyberNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "projects", "sandbox", "skills", "certifications", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects (8)", href: "#projects", id: "projects" },
    { label: "AI Sandbox", href: "#sandbox", id: "sandbox" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 flex justify-center">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-2xl bg-[#080d1a]/85 backdrop-blur-xl border border-cyan-500/25 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-sm">
            <div className="w-full h-full bg-[#080d1a] rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-bold text-xs bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SA
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              SAMEER ALI
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </span>
            <span className="text-[9px] text-slate-400 tracking-wider font-mono">
              AI // SYSTEMS ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-950/70 px-3 py-1.5 rounded-xl border border-slate-800/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-slate-400 hover:text-white transition-all shadow-sm"
              title="Command Palette (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1 py-0.2 rounded bg-slate-900 text-[10px] text-slate-500 border border-slate-800">
                ⌘K
              </kbd>
            </button>
          )}

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-mono text-xs font-bold hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hire Sameer</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-[#080d1a]/95 border border-slate-800 rounded-2xl p-4 space-y-2 backdrop-blur-xl shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-mono text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
