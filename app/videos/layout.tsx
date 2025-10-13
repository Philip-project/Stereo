"use client"

import type React from "react"
import { WavyBackground } from "@/components/ui/wavy-background"

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      {/* Wavy canvas as a fixed background, no text */}
      <WavyBackground
        containerClassName="fixed inset-0 -z-10 pointer-events-none"
        className=""
        // tweak visuals if desired:
        // colors={["#0ea5e9", "#6366f1", "#a855f7", "#06b6d4"]}
        // speed="fast"
        // waveOpacity={0.4}
      />
      <main className="relative z-10">{children}</main>
    </div>
  )
}
