"use client";

import { useRef, useEffect, useState } from "react";
import { getVideoUrl } from "@/utils/media";

/**
 * VideoThumbnail — lazy-loaded video first-frame thumbnail.
 *
 * Strategy: The `#t=0.001` Media Fragment URI hint tells the browser to seek
 * to 0.001 seconds and display that frame — giving a real video thumbnail
 * without loading the full file. Only `preload="metadata"` is used, which
 * fetches just the first few KB (headers + index), not the video body.
 *
 * This approach:
 * - Works on iOS Safari, Android Chrome, Firefox, Edge, Desktop Chrome ✅
 * - Does NOT require CORS headers from R2 ✅
 * - Uses IntersectionObserver so off-screen cards never make any request ✅
 * - Shows a gradient placeholder instantly while the first frame loads ✅
 */
export default function VideoThumbnail({
  videoSrc,
  className = "",
}: {
  videoSrc: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  // ── Intersection Observer ──────────────────────────────────────────────────
  // Mount the video element only when the card approaches the viewport.
  // Off-screen cards make zero network requests.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // only need to trigger once
        }
      },
      { rootMargin: "300px" } // start loading 300px before entering viewport
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const videoUrl = getVideoUrl(videoSrc);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      {/* Gradient placeholder — shows instantly, zero network cost */}
      {!frameReady && (
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800/50 to-zinc-900/80" />
      )}

      {/* Video element — only mounted when near viewport.
          The #t=0.001 fragment tells the browser to seek to frame 0.001s
          and display it, acting as a thumbnail. No full download needed. */}
      {inView && (
        <video
          src={`${videoUrl}#t=0.001`}
          preload="metadata"
          muted
          playsInline
          onLoadedData={() => setFrameReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            frameReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
