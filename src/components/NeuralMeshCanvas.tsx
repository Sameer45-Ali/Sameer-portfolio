"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseX: number;
  baseY: number;
}

export default function NeuralMeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 3,
      radius: 180,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const colors = [
      "rgba(56, 189, 248, 0.7)",  // Sky blue
      "rgba(168, 85, 247, 0.7)",  // Purple
      "rgba(0, 240, 255, 0.8)",   // Cyan
      "rgba(129, 140, 248, 0.6)",  // Indigo
    ];

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 95);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75,
          radius: Math.random() * 2 + 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initParticles();

    // Pulse timer for electric synapse signals
    let pulseTime = 0;

    const render = () => {
      pulseTime += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Connect particles within distance
      const maxDistance = 145;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce on edges
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse physics interaction
        if (mouse.active) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 3.5;
            const angle = Math.atan2(dy, dx);
            p1.x -= Math.cos(angle) * force;
            p1.y -= Math.sin(angle) * force;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p1.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw synapse lines to neighboring nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();

            // Occasional traveling electrical impulse
            if (i % 7 === 0 && Math.sin(pulseTime + i) > 0.85) {
              const sparkProgress = (Math.sin(pulseTime * 2 + i) + 1) / 2;
              const sparkX = p1.x + (p2.x - p1.x) * sparkProgress;
              const sparkY = p1.y + (p2.y - p1.y) * sparkProgress;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "#00f0ff";
              ctx.shadowBlur = 8;
              ctx.shadowColor = "#00f0ff";
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
