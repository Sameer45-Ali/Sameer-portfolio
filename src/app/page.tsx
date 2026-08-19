import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import AiEvalTerminal from "@/components/AiEvalTerminal";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ExperienceEdu from "@/components/ExperienceEdu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Canvas Neural Particle Mesh */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interactive AI Eval & Model Sandbox */}
      <AiEvalTerminal />

      {/* Featured AI/ML Projects */}
      <Projects />

      {/* Technical Skills & Capabilities */}
      <Skills />

      {/* Verified Certifications & Continuous Learning */}
      <Certifications />

      {/* Education & Core Foundations */}
      <ExperienceEdu />

      {/* Contact & Recruiter Outreach */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
