/**
 * Resolves a video path to its final URL.
 * In development (locally), it uses the local /videos path.
 * In production (deployed), if NEXT_PUBLIC_ASSETS_BASE_URL is set,
 * it points to the remote host (e.g. GitHub Releases).
 */
export function getVideoUrl(path: string | undefined): string {
  if (!path) return "";
  
  // If the path is already a remote URL, return it directly
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  
  // In development, always use local files
  if (process.env.NODE_ENV === "development") {
    return path.startsWith("/") ? path : `/${path}`;
  }

  const baseUrl = process.env.NEXT_PUBLIC_ASSETS_BASE_URL;
  if (baseUrl) {
    // Extract the filename (e.g., "/videos/dreams-to-reality.mp4" -> "dreams-to-reality.mp4")
    const fileName = path.split("/").pop();
    if (fileName) {
      // GitHub Releases replace spaces with dots in download URLs
      const encodedFileName = fileName.replace(/ /g, ".");
      return `${baseUrl.replace(/\/$/, "")}/${encodedFileName}`;
    }
  }
  
  // Default to the local path (ensuring it starts with a leading slash)
  return path.startsWith("/") ? path : `/${path}`;
}
