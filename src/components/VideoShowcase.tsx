"use client";

import { motion } from "framer-motion";
import { FiPlay, FiX, FiVolume2, FiVolumeX } from "react-icons/fi";
import { useState, useRef } from "react";
import { getVideoUrl } from "@/utils/media";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-mono">
          <span className="text-accent">Show</span>
          <span className="text-white">reel</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm ml-4">
          // featured work
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-accent/50 transition-all duration-500"
        onClick={handlePlay}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-800" />

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="w-24 h-24 rounded-full border-2 border-accent/40 flex items-center justify-center bg-black/40 group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
            <FiPlay className="text-4xl text-accent ml-2" />
          </div>
          <span className="mt-4 font-mono text-sm text-zinc-500 group-hover:text-accent transition-colors tracking-widest">
            PLAY SHOWREEL
          </span>
        </div>

        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="text-xs font-mono px-3 py-1 rounded text-accent bg-black/60 border border-accent/20">
            FEATURED
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
          <h3 className="font-mono text-xl font-bold text-white mb-2">
            Sai Mahesh Nikhil — Showreel 2024
          </h3>
          <p className="font-mono text-sm text-zinc-400">
            3D Modeling • Environment Art • Animation • Level Design
          </p>
        </div>
      </motion.div>

      <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-600">
        <div>
          <span className="text-accent">■</span> Best work collection
        </div>
        <div className="text-zinc-700">
          click to play
        </div>
      </div>

      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        >
          <div className="absolute inset-0 scanline opacity-10" />

          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 z-50 p-3 rounded border border-zinc-700 bg-zinc-900 hover:border-accent hover:text-accent transition-all text-white cursor-pointer"
          >
            <FiX className="text-xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            className="absolute top-6 right-20 z-50 p-3 rounded border border-zinc-700 bg-zinc-900 hover:border-accent hover:text-accent transition-all text-white cursor-pointer"
          >
            {isMuted ? (
              <FiVolumeX className="text-xl" />
            ) : (
              <FiVolume2 className="text-xl" />
            )}
          </button>

          <div className="absolute top-6 left-6 z-50 font-mono text-xs pointer-events-none">
            <div className="text-accent">NOW PLAYING</div>
            <div className="text-zinc-600 mt-1">Showreel 2024</div>
          </div>

          <video
            ref={videoRef}
            src={getVideoUrl("/videos/showreel.mp4")}
            autoPlay
            muted={isMuted}
            controls
            className="w-full h-full object-contain"
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
            <h3 className="text-2xl font-mono font-bold text-white mb-2">
              Sai Mahesh Nikhil — Showreel 2024
            </h3>
            <p className="text-zinc-400 font-mono text-sm">
              3D Modeling • Environment Art • Animation • Level Design
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
