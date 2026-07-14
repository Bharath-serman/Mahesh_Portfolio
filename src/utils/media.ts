/**
 * Resolves a video path to its final URL.
 *
 * - In production: returns a direct Cloudflare R2 CDN URL (no proxy, globally fast).
 * - In development: falls back to local /videos path.
 *
 * Filenames are properly URL-encoded so spaces and special characters
 * work correctly across all browsers and platforms.
 */
export function getVideoUrl(path: string | undefined): string {
  if (!path) return "";

  // Already a full URL — return as-is (no double-encoding)
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const baseUrl = process.env.NEXT_PUBLIC_ASSETS_BASE_URL;
  if (baseUrl) {
    // Extract just the filename from the path
    // e.g. "/videos/Blood in the Basement.mp4" → "Blood in the Basement.mp4"
    const fileName = path.split("/").pop();
    if (fileName) {
      // encodeURIComponent handles spaces (%20) and all special characters
      // so URLs like "Blood%20in%20the%20Basement.mp4" work on every platform
      const encodedFileName = encodeURIComponent(fileName);
      return `${baseUrl.replace(/\/$/, "")}/${encodedFileName}`;
    }
  }

  // Local development — serve from /public/videos/
  return path.startsWith("/") ? path : `/${path}`;
}