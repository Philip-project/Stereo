"use client"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { FlipWords } from "@/components/ui/flip-words"
import Link from "next/link"
import Image from "next/image"

export function HeroHeader() {
  return (
    <AuroraBackground className="px-6">
      <header className="w-full max-w-5xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* <div className="flex items-center gap-4">
            <Link className="underline underline-offset-4" href="/videos">
              Videos
            </Link>
            <Link className="underline underline-offset-4" href="/about-us">
              About Us
            </Link>
          </div> */}
        </nav>
      </header>

      <div className="relative flex flex-col items-center text-center gap-4 px-4 mt-10">
        {/* Image above Sparrow Media heading with hover animation */}
        <Image
          src="/image.png"
          alt="Sparrow Media Logo"
          width={80}
          height={80}
          className="rounded-full mb-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:-translate-y-1"
          priority
        />
        <h3 className="text-balance text-m font-bold leading-tight">S p a r r o w  &nbsp;&nbsp;&nbsp;  M e d i a</h3>
        <h1 className="text-balance text-3xl md:text-6xl font-bold leading-tight transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
          P H I L I P&apos;s &nbsp;&nbsp;&nbsp;S T E R E O
        </h1>
        <p className="text-pretty text-neutral-900 dark:text-neutral-300 max-w-2xl">
          Crafting Memorable <FlipWords className="mx-3" words={["TESTIMONIES "]} />  for
          <FlipWords className="mx-3" words={["FAITH "]} /> and <FlipWords className="mx-3" words={["HOPE "]} />
        </p>
        <div className="flex items-center gap-3 mt-4">
          <Link href="/videos" className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md">
            Explore Videos
          </Link>
          <Link href="/about-us" className="border border-neutral-300 dark:border-neutral-700 px-5 py-2 rounded-md">
            Get in touch
          </Link>
        </div>
      </div>
    </AuroraBackground>
  )
}