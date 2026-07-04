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
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-view");
    if (saved === "true") {
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
      localStorage.setItem("portfolio-view", "true");
    }, 350);
  };

  const handleGoHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowPortfolio(false);
      localStorage.removeItem("portfolio-view");
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
      window.scrollTo({ top: 0, behavior: "instant" });
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
                  [ESC] home
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

            <footer className="border-t border-accent/10 py-8">
              <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-mono text-xs text-zinc-600 space-y-1">
                  <div>
                    <span className="text-accent">$</span> echo &quot;Sai Mahesh
                    Nikhil&quot;
                  </div>
                  <div className="text-zinc-700">
                    &copy; 2026 // Made with creativity & passion
                  </div>
                </div>
                <div className="font-mono text-xs text-zinc-700">
                  <span className="text-accent">■</span> STUDIO STATUS: ONLINE
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
