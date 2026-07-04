"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "3D Animator & 3D Artist",
    company: "VRARRI — Chennai",
    period: "Sept 2025 → PRESENT",
    description:
      "Leading environment art and level design for a AAA open-world title.",
    highlights: [
      "Serving as Main Animator on an in-development VR Horror Game",
      "• Produced over 40 gameplay and cinematic animations",
      "• Rigged animation-ready character assets",
    ],
    current: true,
  },
  {
    id: 2,
    role: "AR/VR Developer Intern",
    company: "TechJose — Chennai",
    period: "May 2025 → Jul 2025",
    description:
      "Created environments and assets for 3 shipped indie titles.",
    highlights: [
      "Developed a VR Supermarket Experience using Unity",
      "Designed environment layouts, lighting and interaction systems.",
      "Rigged and animated VR characters.",
      "Created textured food assets using Substance Painter for an AR Food Application.",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Junior 3D Artist Intern",
    company: "VRARRI — Chennai",
    period: "Sept 2025 → Feb 2026",
    description:
      "Contributed to mobile game projects as a 3D modeler and texture artist.",
    highlights: [
      "Joined Magic Guardians VR game as Secondary Animator.",
      "Delivered more than 30 polished gameplay animations",
      "Rigged character assets and built animation-ready skeletons",
    ],
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-mono">
          <span className="text-accent">Work</span>
          <span className="text-white"> History</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm ml-4">
          // professional experience timeline
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-0`}
            >
              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-accent bg-background z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <div
                className={`flex-1 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                } pl-12 md:pl-0`}
              >
                <div className="terminal-window group hover:animate-pulse-glow transition-all duration-300">
                  <div className="terminal-header">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                    <span className="ml-2 text-xs text-zinc-500 font-mono">
                      experience_{exp.id}.log
                    </span>
                    {exp.current && (
                      <span className="ml-auto text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-accent text-xs font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-mono font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent-2 text-sm font-mono mb-3">
                      @ {exp.company}
                    </p>

                    <p className="text-sm text-zinc-400 font-mono mb-4">
                      <span className="text-zinc-600">{"// "}</span>
                      {exp.description}
                    </p>

                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-xs font-mono text-zinc-500 flex items-center gap-2"
                        >
                          <span className="text-accent shrink-0">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex-1 md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
