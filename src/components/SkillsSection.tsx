"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "3D MODELING.SYS",
    color: "accent",
    borderColor: "border-accent/30",
    hoverBorder: "hover:border-accent/60",
    glowColor: "hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]",
    textColor: "text-accent",
    statusColor: "bg-accent",
    skills: [
      { name: "BLENDER", id: "BLD-001" },
      { name: "MAYA", id: "MYA-002" },
      { name: "ZBRUSH", id: "ZBR-003" },
      { name: "3DS MAX", id: "3MX-004" },
    ],
  },
  {
    title: "TEXTURING.SYS",
    color: "accent-2",
    borderColor: "border-accent-2/30",
    hoverBorder: "hover:border-accent-2/60",
    glowColor: "hover:shadow-[0_0_15px_rgba(255,0,255,0.2)]",
    textColor: "text-accent-2",
    statusColor: "bg-accent-2",
    skills: [
      { name: "SUBSTANCE PT", id: "SPT-001" },
      { name: "SUBSTANCE DS", id: "SDS-002" },
      { name: "PHOTOSHOP", id: "PSH-003" },
      { name: "QUIXEL MX", id: "QMX-004" },
    ],
  },
  {
    title: "ENGINES.SYS",
    color: "accent-3",
    borderColor: "border-accent-3/30",
    hoverBorder: "hover:border-accent-3/60",
    glowColor: "hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]",
    textColor: "text-accent-3",
    statusColor: "bg-accent-3",
    skills: [
      { name: "UNREAL ENG", id: "UE5-001" },
      { name: "UNITY", id: "UNT-002" },
      { name: "GODOT", id: "GDT-003" },
    ],
  },
  {
    title: "RIGGING.SYS",
    color: "orange-400",
    borderColor: "border-orange-400/30",
    hoverBorder: "hover:border-orange-400/60",
    glowColor: "hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]",
    textColor: "text-orange-400",
    statusColor: "bg-orange-400",
    skills: [
      { name: "CHAR RIG", id: "CRG-001" },
      { name: "ANIMATION", id: "ANM-002" },
      { name: "MOCAP", id: "MCP-003" },
      { name: "IK/FK", id: "IKF-004" },
    ],
  },
  {
    title: "CONCEPT.SYS",
    color: "yellow-400",
    borderColor: "border-yellow-400/30",
    hoverBorder: "hover:border-yellow-400/60",
    glowColor: "hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]",
    textColor: "text-yellow-400",
    statusColor: "bg-yellow-400",
    skills: [
      { name: "CONCEPT ART", id: "CRA-001" },
      { name: "DIGITAL PAINT", id: "DPT-002" },
      { name: "SKETCHING", id: "SKT-003" },
      { name: "VISUAL DESIGN", id: "VDS-004" },
    ],
  },
  {
    title: "COMPOSIT.SYS",
    color: "cyan-400",
    borderColor: "border-cyan-400/30",
    hoverBorder: "hover:border-cyan-400/60",
    glowColor: "hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    textColor: "text-cyan-400",
    statusColor: "bg-cyan-400",
    skills: [
      { name: "AFTER EFFECTS", id: "AEF-001" },
      { name: "PREMIERE", id: "PRM-002" },
      { name: "DAVINCI", id: "DVC-003" },
      { name: "NUKE", id: "NUK-004" },
    ],
  },
];

function SkillModule({
  name,
  id,
  color,
  borderColor,
  hoverBorder,
  glowColor,
  textColor,
  statusColor,
  index,
}: {
  name: string;
  id: string;
  color: string;
  borderColor: string;
  hoverBorder: string;
  glowColor: string;
  textColor: string;
  statusColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`relative border ${borderColor} ${hoverBorder} ${glowColor} bg-[#0a0a0a] p-3 transition-all duration-300 group cursor-default overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />

      <div className="flex items-center justify-between mb-2">
        <span className={`font-mono text-[10px] ${textColor} opacity-60`}>
          [{id}]
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${statusColor} animate-pulse`} />
          <span className="font-mono text-[9px] text-zinc-600">ACTIVE</span>
        </div>
      </div>

      <div className={`font-mono text-xs ${textColor} font-bold tracking-wider`}>
        {name}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-current/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-mono">
          <span className="text-accent">Creative</span>
          <span className="text-white"> Toolkit</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm ml-4">
          // installed modules & augmentations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
          >
            <div className={`font-mono text-xs ${category.textColor} mb-4 flex items-center gap-2`}>
              <span className="opacity-50">&gt;</span>
              <span className="tracking-widest">{category.title}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill, skillIndex) => (
                <SkillModule
                  key={skill.name}
                  name={skill.name}
                  id={skill.id}
                  color={category.color}
                  borderColor={category.borderColor}
                  hoverBorder={category.hoverBorder}
                  glowColor={category.glowColor}
                  textColor={category.textColor}
                  statusColor={category.statusColor}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
