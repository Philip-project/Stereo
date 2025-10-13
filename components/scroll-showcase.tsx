"use client"

import { useState } from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export function ScrollShowcase() {
  const [isHovered, setIsHovered] = useState(false)

  const baseURL = "https://www.youtube.com/embed/r7JfBJzUN0U"
  const autoplayURL = `${baseURL}?autoplay=1&mute=1`

  return (
    <section className="relative">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              Immerse in{" "}
              <span className="text-4xl md:text-6xl font-bold mt-1 leading-none">
                Scrolling Stories
              </span>
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Smooth parallax and perspective to showcase your highlight reels.
            </p>
          </>
        }
      >
        <div
          className="mx-auto rounded-2xl overflow-hidden w-[1000px] h-[720px] object-cover object-left-top"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <iframe
            src={isHovered ? autoplayURL : baseURL}
            title="YouTube video player"
            width="800"
            height="720"
            className="h-full my-[-24px] w-[99%] border-0 mx-[-60px]"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </section>
  )
}
