import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameer Ali | Python AI Engineer & Model Evaluator",
  description:
    "Portfolio of Sameer Ali — AI/ML Engineer specializing in Python development, LLM evaluation, autonomous AI agent benchmarking, and deep learning pipelines.",
  keywords: [
    "Sameer Ali",
    "Python AI Engineer",
    "LLM Evaluator",
    "Model Benchmarking",
    "AI Agent Benchmarking",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Keras",
    "faster-whisper",
    "OpenCV",
    "Portfolio",
  ],
  authors: [{ name: "Sameer Ali", url: "https://github.com/Sameer45-Ali" }],
  openGraph: {
    title: "Sameer Ali | Python AI Engineer & Model Evaluator",
    description:
      "Explore production-grade AI pipelines, LLM benchmarks (Cline, Nemotron), medical deep learning, and multimodal systems.",
    url: "https://github.com/Sameer45-Ali",
    siteName: "Sameer Ali Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
