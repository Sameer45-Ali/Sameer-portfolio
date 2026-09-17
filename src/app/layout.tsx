import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameer Ali | Python AI Engineer & Multimodal Systems Architect",
  description:
    "Portfolio of Sameer Ali — AI/ML Engineer specializing in Multimodal Systems (faster-whisper, OpenCV), 4-bit Vision-Language Models (QLoRA), and asynchronous Python backends.",
  keywords: [
    "Sameer Ali",
    "Python AI Engineer",
    "Multimodal AI",
    "Vision-Language Models",
    "QLoRA",
    "faster-whisper",
    "OpenCV",
    "FastAPI",
    "Docker",
    "Machine Learning",
    "Deep Learning",
  ],
  authors: [{ name: "Sameer Ali", url: "https://github.com/Sameer45-Ali" }],
  openGraph: {
    title: "Sameer Ali | Python AI Engineer & Multimodal Systems Architect",
    description:
      "Explore 8 production-grade AI pipelines, 4-bit QLoRA VLM fine-tuning, autonomous agents, and multimodal systems.",
    url: "https://sameer45-ali-portfolio.vercel.app",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#05070d] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
