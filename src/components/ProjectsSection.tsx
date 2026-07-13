"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/data/projects";
import VideoThumbnail from "./VideoThumbnail";

export default function ProjectsSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-mono">
          <span className="text-accent">Portfolio</span>
          <span className="text-white"> Gallery</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm ml-4">
          // select a category to explore
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <Link
              href={`/projects/${category.id}`}
              className="block group"
            >
              <div className={`relative aspect-video rounded-lg overflow-hidden border border-zinc-800 hover:border-current transition-all duration-300`}>
                {(() => {
                  const firstVideo = category.projects.find((p) => p.video)?.video;
                  if (firstVideo) {
                    return (
                      <>
                        <VideoThumbnail videoSrc={firstVideo} />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                      </>
                    );
                  }
                  if (category.thumbnail) {
                    return (
                      <>
                        <img src={category.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                      </>
                    );
                  }
                  return <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-800" />;
                })()}

                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${category.color} bg-black/60`}>
                    {category.projectCount} works
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-accent transition-colors mb-1">
                    {category.title}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-500">
                    {category.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-current/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-xs font-mono text-zinc-600">
        <div>
          <span className="text-accent">■</span> {categories.length} categories
          <span className="text-zinc-700 mx-2">|</span>
          {categories.reduce((acc, cat) => acc + cat.projectCount, 0)} total works
        </div>
        <div className="text-zinc-700">
          click to open →
        </div>
      </div>
    </section>
  );
}
