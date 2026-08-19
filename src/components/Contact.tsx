"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Opportunity / Collaboration with Sameer",
    message: "",
  });

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject || "Collaboration Inquiry"
    )}&body=${encodeURIComponent(
      `Hi Sameer,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
            Interested in discussing AI engineering roles, LLM evaluation pipelines, or multimodal systems? I&apos;m open to remote full-time opportunities and impactful collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                  <Mail className="w-4 h-4" />
                  <span>EMAIL ADDRESS</span>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(portfolioData.personal.email, "email")
                  }
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs">
                  <Phone className="w-4 h-4" />
                  <span>PHONE / WHATSAPP</span>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(portfolioData.personal.phone, "phone")
                  }
                  className="text-xs text-slate-400 hover:text-purple-300 flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-purple-400 transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-2">
                <MapPin className="w-4 h-4" />
                <span>LOCATION & TIMEZONE</span>
              </div>
              <div className="text-sm font-semibold text-white">
                {portfolioData.personal.location}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Open to Remote, Hybrid, and On-site opportunities (Flexible worldwide overlap & relocation).
              </p>
            </div>

            {/* Social Channels */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-around gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-900 rounded-lg"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors p-2 hover:bg-slate-900 rounded-lg"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quick Recruiter Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass-panel-glow p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the details below to trigger a pre-formatted email directly to Sameer.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Engineer Role @ AI Lab"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Sameer, we came across your AI evaluation benchmarks and multimodal projects. We'd love to chat about..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-slate-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 glow-btn"
              >
                <Send className="w-4 h-4 text-slate-950" />
                Transmit Message via Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
