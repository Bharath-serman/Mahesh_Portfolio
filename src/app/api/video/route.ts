import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const parsedUrl = new URL(videoUrl);
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return new NextResponse("Invalid protocol", { status: 400 });
    }

    const rangeHeader = request.headers.get("range");
    const headers = new Headers();
    if (rangeHeader) {
      headers.set("Range", rangeHeader);
    }
    // Set user agent to avoid blockage from GitHub
    headers.set("User-Agent", request.headers.get("user-agent") || "Mozilla/5.0");

    const response = await fetch(videoUrl, {
      headers,
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok && response.status !== 206) {
      return new NextResponse(`Failed to fetch video: ${response.statusText}`, { status: response.status });
    }

    const responseHeaders = new Headers();
    const contentType = response.headers.get("content-type");
    const contentLength = response.headers.get("content-length");
    const contentRange = response.headers.get("content-range");
    const acceptRanges = response.headers.get("accept-ranges");

    if (contentType) responseHeaders.set("Content-Type", contentType);
    if (contentLength) responseHeaders.set("Content-Length", contentLength);
    if (contentRange) responseHeaders.set("Content-Range", contentRange);
    if (acceptRanges) responseHeaders.set("Accept-Ranges", acceptRanges);

    // Set cache control for performance
    responseHeaders.set("Cache-Control", "public, max-age=31536000, immutable");

    return new NextResponse(response.body, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Error proxying video:", error);
    return new NextResponse("Error proxying video", { status: 500 });
  }
}
