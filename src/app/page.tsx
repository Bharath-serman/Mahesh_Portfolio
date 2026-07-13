"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import LandingSection from "@/components/LandingSection";
import VideoShowcase from "@/components/VideoShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import { FiArrowUp } from "react-icons/fi";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("saimaheshnikhilduddu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = "mailto:saimaheshnikhilduddu@gmail.com";
  };

  useEffect(() => {
    if (window.location.hash) {
      setShowPortfolio(true);
    }
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPortfolio) {
        handleGoHome();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPortfolio]);

  const handleExplore = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPortfolio(true);
    }, 350);
  };

  const handleGoHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPortfolio(false);
    }, 350);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "instant" });
            return;
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  }, [showPortfolio, isTransitioning]);

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <ParticleBackground />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ParticleBackground />

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100]"
          >
            <div className="absolute inset-0 bg-[#050508]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-mono text-accent text-sm tracking-widest animate-pulse">
                INITIALIZING...
              </div>
            </div>
            <div className="absolute inset-0 scanline opacity-20" />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={portfolioRef}>
        {!showPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <LandingSection onExplore={handleExplore} />
          </motion.div>
        )}

        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#050508]/90 border-b border-accent/10">
              <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-accent font-mono text-sm font-bold">
                    NIKHIL
                  </span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-zinc-600 font-mono text-xs hidden sm:block">
                    PORTFOLIO v2.0
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-1 text-xs font-mono">
                  {[
                    { label: "Reel", href: "#showcase" },
                    { label: "Projects", href: "#projects" },
                    { label: "Skills", href: "#skills" },
                    { label: "Experience", href: "#experience" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3 py-1.5 text-zinc-500 hover:text-accent hover:bg-accent/5 rounded transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <button
                  onClick={handleGoHome}
                  className="text-xs font-mono text-zinc-600 hover:text-accent border border-zinc-800 hover:border-accent/30 px-3 py-1.5 rounded transition-all"
                >
                  [ESC] ←
                </button>
              </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-20 space-y-28">
              <div id="showcase">
                <VideoShowcase />
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

              <div id="projects">
                <ProjectsSection />
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-2/20 to-transparent" />

              <div id="skills">
                <SkillsSection />
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-3/20 to-transparent" />

              <div id="experience">
                <ExperienceSection />
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

              <div id="contact">
                <ContactSection />
              </div>
            </main>

            <footer className="relative border-t border-accent/10 bg-[#040406] py-20 overflow-hidden">
              {/* Decorative scanline and grid backgrounds */}
              <div className="absolute inset-0 scanline opacity-5 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

              {/* Subtle accent border line at the top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                  {/* Column 1: Brand / Studio Info */}
                  <div className="space-y-4 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-accent text-sm font-bold tracking-wider">NIKHIL</span>
                      <span className="text-zinc-700">/</span>
                      <span className="text-[10px] text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">v2.0.26</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                      Specializing in real-time environments, AAA cinematics, character rigging, and immersive interactive design inside Unreal Engine.
                    </p>
                    <div className="text-[11px] text-zinc-600 flex items-center gap-2 pt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                      <span>LOCATION: CHENNAI, INDIA</span>
                    </div>
                  </div>

                  {/* Column 2: Navigation Links */}
                  <div className="flex flex-col gap-4 font-mono">
                    <span className="text-[10px] text-zinc-500 tracking-widest uppercase border-b border-zinc-800 pb-2">
                      DIRECTORY
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                      {[
                        { label: "Showreel", href: "#showcase" },
                        { label: "Portfolio gallery", href: "#projects" },
                        { label: "Creative Toolkit", href: "#skills" },
                        { label: "Experience", href: "#experience" },
                        { label: "Build Hierarchy", href: "#contact" },
                      ].map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-zinc-500 hover:text-accent hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1.5"
                        >
                          <span className="text-[9px] text-zinc-700">■</span> {link.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Connect Links & Diagnostics */}
                  <div className="flex flex-col gap-4 font-mono">
                    <span className="text-[10px] text-zinc-500 tracking-widest uppercase border-b border-zinc-800 pb-2">
                      NETWORK CONNECT
                    </span>
                    <div className="flex flex-col gap-2.5 text-xs">
                      <a
                        href="https://www.linkedin.com/in/duddu-sai-mahesh-nikhil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-accent hover:translate-x-0.5 transition-all duration-200 flex items-center gap-2"
                      >
                        <span className="text-zinc-600"></span> LinkedIn
                      </a>
                      <a
                        href="https://www.artstation.com/d_sai_mahesh_nikhil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-accent hover:translate-x-0.5 transition-all duration-200 flex items-center gap-2"
                      >
                        <span className="text-zinc-600"></span> ArtStation
                      </a>
                      <a
                        href="mailto:saimaheshnikhilduddu@gmail.com"
                        onClick={copyEmail}
                        className="text-zinc-500 hover:text-accent hover:translate-x-0.5 transition-all duration-200 flex items-center gap-2"
                      >
                        <span className="text-zinc-600"></span> {copied ? "Copied Email!" : "Email Link"}
                      </a>
                    </div>
                  </div>

                </div>

                {/* Bottom status readout */}
                <div className="border-t border-zinc-900 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600">
                  <div className="flex items-center gap-3">
                    <span>SYS.STATUS: <span className="text-accent">ONLINE</span></span>
                    <span className="text-zinc-800">|</span>
                    <span>PING: <span className="text-zinc-400">12ms</span></span>
                    <span className="text-zinc-800">|</span>
                    <span>THEME: <span className="text-accent-3">CYBERPUNK_MONO</span></span>
                  </div>
                  <div className="text-zinc-700">
                    &copy; 2026 Duddu Sai Mahesh Nikhil. All rights reserved.
                  </div>
                </div>

              </div>
            </footer>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-10 h-10 border border-accent/30 hover:border-accent bg-[#050508]/80 backdrop-blur text-accent flex items-center justify-center transition-all duration-300 z-50 group"
            >
              <FiArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
