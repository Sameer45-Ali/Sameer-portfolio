"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Layers,
  Cpu,
  Mail,
  Github,
  Linkedin,
  Search,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "bento-showcase", "sandbox", "skills", "contact"];
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
    { label: "Work", href: "#bento-showcase", id: "bento-showcase" },
    { label: "Sandbox", href: "#sandbox", id: "sandbox" },
    { label: "Stack", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 rounded-full bg-zinc-950/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-xs font-mono font-bold tracking-wider text-white"
        >
          <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center text-[11px] text-black font-extrabold shadow-sm">
            S
          </span>
          <span className="hidden sm:inline text-zinc-200 group-hover:text-white transition-colors">
            SAMEER
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white/[0.1] text-white shadow-inner"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/[0.06] text-[11px] font-mono transition-all"
              title="Press ⌘K or Ctrl+K"
            >
              <Search className="w-3 h-3 text-zinc-300" />
              <span className="hidden md:inline">Search</span>
              <kbd className="px-1 py-0.2 rounded bg-black/40 text-[9px] text-zinc-500 border border-white/[0.06]">
                ⌘K
              </kbd>
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 shadow-md shadow-white/10 transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
