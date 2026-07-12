"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LandingSectionProps {
  onExplore: () => void;
}

const ascii_art = `
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║              ███████╗██╗      ██████╗ ██╗    ██╗                 ║
║              ██╔════╝██║     ██╔═══██╗██║    ██║                 ║
║              █████╗  ██║     ██║   ██║██║ █╗ ██║                 ║
║              ██╔══╝  ██║     ██║   ██║██║███╗██║                 ║
║              ██║     ███████╗╚██████╔╝╚███╔███╔╝                 ║
║              ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝                  ║
║                                                                   ║
║         ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗███████╗             ║
║         ██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝██╔════╝             ║
║         ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ███████╗             ║
║         ██║███╗██║██║   ██║██╔══██╗██╔═██╗ ╚════██║             ║
║         ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗███████║             ║
║          ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝             ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝`;

export default function LandingSection({ onExplore }: LandingSectionProps) {
  const [typedText, setTypedText] = useState("");
  const fullText = "3D Generalist | 3D Animator | Unreal Engine Specialist";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(cursor);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-30" />

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-2 to-transparent opacity-20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <pre className="text-[0.5rem] sm:text-xs text-accent/60 font-mono leading-tight hidden sm:block animate-flicker">
            {ascii_art}
          </pre>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black mb-4 tracking-tighter"
        >
          <span className="text-white">SAI MAHESH</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-3 to-accent-2 bg-clip-text text-transparent animate-glitch">
            NIKHIL
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-mono text-accent/80 text-sm md:text-base mb-8 h-6"
        >
          <span className="text-accent-2">&gt;</span> {typedText}
          <span
            className={`inline-block w-2 h-4 bg-accent ml-1 ${showCursor ? "opacity-100" : "opacity-0"
              }`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            { label: "MAYA", color: "text-accent" },
            { label: "BLENDER", color: "text-accent-3" },
            { label: "SUBSTANCE PAINTER", color: "text-accent-2" },
            { label: "UNREAL ENGINE", color: "text-blue-400" },
            { label: "PHOTOSHOP", color: "text-cyan-400" },
            { label: "RIGGING ANIMATION", color: "text-orange-400" },
          ].map((skill) => (
            <span
              key={skill.label}
              className={`px-3 py-1 text-xs font-mono rounded border border-current/20 ${skill.color} bg-current/5`}
            >
              {skill.label}
            </span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onExplore}
          className="group relative px-10 py-4 font-mono text-sm tracking-widest uppercase"
        >
          <div className="absolute inset-0 border border-accent/50 group-hover:border-accent transition-colors" />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent" />
          <span className="relative z-10 text-accent group-hover:text-white transition-colors flex items-center gap-3">
            [ EXPLORE ]
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
      </motion.div>

      <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-700 space-y-1">
        <div>STUDIO.VERSION: 2.0.26</div>
        <div>CANVAS.ALLOC: OK</div>
        <div>RENDER.ENGINE: ACTIVE</div>
      </div>

      <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-700 space-y-1 text-right">
        <div id="time"></div>
        <div>LOCATION: CHENNAI, TAMIL NADU</div>
        <div>STATUS: AVAILABLE</div>
      </div>
    </section>
  );
}
