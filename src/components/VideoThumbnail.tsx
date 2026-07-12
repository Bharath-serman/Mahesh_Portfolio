"use client";

import { useRef, useEffect, useState } from "react";
import { getVideoUrl } from "@/utils/media";

export default function VideoThumbnail({
  videoSrc,
  className = "",
}: {
  videoSrc: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.currentTime = 0.5;
    };

    const handleSeeked = () => {
      const canvas = canvasRef.current;
      if (!canvas || !video) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumbnail(canvas.toDataURL("image/jpeg", 0.8));
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [videoSrc]);

  return (
    <>
      <video
        ref={videoRef}
        src={getVideoUrl(videoSrc)}
        preload="metadata"
        muted
        className="hidden"
      />
      <canvas ref={canvasRef} className="hidden" />
      {thumbnail ? (
        <img
          src={thumbnail}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-800 ${className}`} />
      )}
    </>
  );
}
