"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Mail,
  FileText,
  User,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const PRESET_PROMPTS = [
  "Why should we hire Sameer?",
  "Explain the DocVLM QLoRA project",
  "How does the Multimodal Video AI work?",
  "What is his experience with FastAPI & Docker?",
];

const PRESET_ANSWERS: Record<string, string> = {
  "Why should we hire Sameer?":
    "Sameer combines a strong Computer Science foundation from Sukkur IBA University ('26) with real, hands-on production engineering in Python, Multimodal AI, and Deep Learning. He has built real systems—fine-tuning Vision-Language Models with QLoRA, designing asynchronous video pipelines with faster-whisper & OpenCV, and deploying low-latency APIs with FastAPI and Docker.",

  "Explain the DocVLM QLoRA project":
    "DocVLM is a parameter-efficient fine-tuning project on Qwen2-VL-2B using 4-bit QLoRA (BitsAndBytes NF4). By training only lightweight adapter layers (r=16, alpha=32) while freezing the base model, Sameer reduced GPU VRAM consumption by 78% (down to 1.82 GB) and achieved 96.8% structured JSON extraction accuracy from complex commercial invoices and forms.",

  "How does the Multimodal Video AI work?":
    "The Multimodal Video AI Pipeline is an asynchronous Python system. It takes long-form video, extracts audio for 10x accelerated transcription using faster-whisper, uses spaCy embeddings for semantic boundary detection into chapters, and applies OpenCV frame-differencing to extract visual presentation slides automatically.",

  "What is his experience with FastAPI & Docker?":
    "Sameer develops production-ready Python backends using FastAPI for asynchronous, non-blocking REST endpoints with Pydantic validation, and Flask for lightweight microservices. He containerizes ML applications with Docker to guarantee reproducible environments, clean dependency isolation, and predictable deployments.",
};

export default function AskAiDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Sameer's AI Profile Assistant. Ask me anything about his projects, deep learning pipelines, tech stack, or availability!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      if (PRESET_ANSWERS[text]) {
        reply = PRESET_ANSWERS[text];
      } else if (text.toLowerCase().includes("contact") || text.toLowerCase().includes("email")) {
        reply = `You can reach Sameer directly at ${portfolioData.personal.email} or connect on LinkedIn at linkedin.com/in/sameer-ali-ai-ml. He is open to Remote, Hybrid, and On-site opportunities worldwide!`;
      } else if (text.toLowerCase().includes("docvlm") || text.toLowerCase().includes("qlora")) {
        reply = PRESET_ANSWERS["Explain the DocVLM QLoRA project"];
      } else if (text.toLowerCase().includes("video") || text.toLowerCase().includes("whisper")) {
        reply = PRESET_ANSWERS["How does the Multimodal Video AI work?"];
      } else if (text.toLowerCase().includes("hire") || text.toLowerCase().includes("why")) {
        reply = PRESET_ANSWERS["Why should we hire Sameer?"];
      } else {
        reply = `Sameer specializes in Python AI Engineering, Multimodal Systems (faster-whisper, OpenCV), Vision-Language Models (QLoRA), and scalable backend APIs (FastAPI, Docker). You can check his full project breakdowns above or contact him directly at ${portfolioData.personal.email}!`;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-slate-950 font-mono text-xs font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 hover:brightness-110 transition-all glow-btn"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
          </span>
          <Bot className="w-4 h-4 text-slate-950" />
          <span>Ask Sameer AI</span>
        </button>
      )}

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[580px] bg-[#090d16]/95 border border-cyan-500/40 rounded-2xl shadow-[0_0_40px_rgba(0,240,255,0.25)] backdrop-blur-xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Top Bar */}
          <div className="bg-[#0e1424] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-mono text-white flex items-center gap-1.5">
                  Sameer AI Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono">Powered by Profile Knowledge Base</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                    m.role === "user"
                      ? "bg-cyan-500 text-slate-950 font-medium rounded-br-none"
                      : "bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none font-normal"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Prompts */}
          <div className="p-2 border-t border-slate-800/80 bg-slate-950/60 flex flex-wrap gap-1.5">
            {PRESET_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all text-left"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#080c14] border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about Sameer's projects, stack..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-cyan-500 text-slate-950 hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
