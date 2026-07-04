"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import { FiPlay, FiX, FiVolume2, FiVolumeX } from "react-icons/fi";
import { ProjectCategory, categories } from "@/data/projects";

export default function ProjectCategoryPage({
  category,
}: {
  category: ProjectCategory;
}) {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = (videoSrc: string, title: string) => {
    setActiveVideo({ url: videoSrc, title });
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideo(null);
  };

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 min-w-0">
        <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#050508]/90 border-b border-accent/10">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/#projects"
                className="text-xs font-mono text-zinc-500 hover:text-accent transition-colors"
              >
                ← Portfolio
              </Link>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-600 font-mono text-xs">
                {category.title}
              </span>
            </div>
            <div className="text-xs font-mono text-zinc-600">
              <span className={category.color}>{category.projectCount}</span> works
            </div>
          </div>
        </nav>

        <div className="p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-lg border border-zinc-700 flex items-center justify-center text-xl font-mono ${category.color} bg-zinc-800/50`}
              >
                {category.icon}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold font-mono text-white">
                  {category.title}
                </h1>
                <p className="text-zinc-500 font-mono text-sm mt-1">
                  {category.description}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {category.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative aspect-video rounded-lg overflow-hidden border border-zinc-800 hover:border-current transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-800 pointer-events-none" />

                {project.video ? (
                  <button
                    onClick={() => handlePlay(project.video!, project.title)}
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-full border-2 ${category.color.replace("text-", "border-")}/40 flex items-center justify-center bg-black/40 group-hover:border-current group-hover:bg-current/10 group-hover:scale-110 transition-all duration-300`}>
                      <FiPlay className={`text-2xl ml-1 ${category.color}`} />
                    </div>
                    <span className="mt-3 font-mono text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors tracking-widest">
                      PLAY VIDEO
                    </span>
                  </button>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-5xl font-mono opacity-20 ${category.color}`}>
                      {category.icon}
                    </span>
                  </div>
                )}

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${category.color} bg-black/60`}>
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 ${
                      project.status === "COMPLETED"
                        ? "text-accent"
                        : project.status === "IN PROGRESS"
                        ? "text-yellow-400"
                        : "text-accent-3"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-mono text-zinc-500 bg-black/60 px-2 py-0.5 rounded">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="font-mono text-sm font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 bg-current/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <aside className="hidden lg:block w-64 border-l border-zinc-800 bg-[#080808] sticky top-0 h-screen overflow-y-auto">
        <div className="p-5">
          <div className="text-[10px] font-mono text-zinc-600 mb-4 tracking-widest">
            CATEGORIES
          </div>

          <div className="space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/projects/${cat.id}`}
                className={`block px-3 py-2.5 rounded font-mono text-xs transition-all duration-200 ${
                  cat.id === category.id
                    ? `${cat.color} bg-current/10 border-l-2 border-current`
                    : "text-zinc-500 hover:text-white hover:bg-zinc-800/50 border-l-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.title}</span>
                </div>
                <div className="text-[10px] text-zinc-600 mt-0.5 ml-5">
                  {cat.projectCount} works
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <Link
              href="/#projects"
              className="block px-3 py-2 rounded font-mono text-xs text-zinc-500 hover:text-accent hover:bg-zinc-800/50 transition-all"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            <div className="absolute inset-0 scanline opacity-10" />

            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-50 p-3 rounded border border-zinc-700 bg-zinc-900 hover:border-accent hover:text-accent transition-all text-white"
            >
              <FiX className="text-xl" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-6 right-20 z-50 p-3 rounded border border-zinc-700 bg-zinc-900 hover:border-accent hover:text-accent transition-all text-white"
            >
              {isMuted ? (
                <FiVolumeX className="text-xl" />
              ) : (
                <FiVolume2 className="text-xl" />
              )}
            </button>

            <div className="absolute top-6 left-6 z-50 font-mono text-xs">
              <div className={category.color}>{activeVideo.title}</div>
              <div className="text-zinc-600 mt-1">{category.title}</div>
            </div>

            <video
              ref={videoRef}
              src={activeVideo.url}
              autoPlay
              muted={isMuted}
              controls
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <h3 className="text-2xl font-mono font-bold text-white mb-2">
                {activeVideo.title}
              </h3>
              <p className="text-zinc-400 font-mono text-sm">
                Press ESC or click X to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
