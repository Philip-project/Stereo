"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { CometCard } from "@/components/ui/comet-card"

const videos = [
  {
    id: 1,
    title: "Intro to Philip's Media",
    description: "An Intro to Our Journey.",
    youtubeId: "w98e21hV4_A",
  },
  {
    id: 2,
    title: "Into the Wild",
    description: "Nature, motion, and breath.",
    youtubeId: "WZb8syeru-Q",
  },
  {
    id: 3,
    title: "Neon Dreams",
    description: "Vibrant colors and kinetic moves.",
    youtubeId: "izrNv4nMxAg",
  },
  {
    id: 4,
    title: "Golden Hour",
    description: "Soft light, true tones.",
    youtubeId: "3eUVp843s78",
  },
]

const cometCards = [
  {
    id: 1,
    title: "Amazing Grace",
    code: "#A1B2",
    image: "/Akshith.png",
  },
  {
    id: 2,
    title: "Her Journey Begins",
    code: "#C3D4",
    image: "/Akshitha.png",
  },
  {
    id: 3,
    title: "Ocean Waves",
    code: "#E5F6",
    image: "/Akshitha1.png"
  },
  {
    id: 4,
    title: "Desert Dunes",
    code: "#G7H8",
    image: "/Akshitha2.png"
  },
  {
    id: 5,
    title: "Forest Path",
    code: "#I9J0",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "City Nights",
    code: "#K1L2",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Sunset Glow",
    code: "#M3N4",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Winter Frost",
    code: "#O5P6",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Spring Bloom",
    code: "#Q7R8",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Autumn Colors",
    code: "#S9T0",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
  },
]

export default function VideosPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-100">Featured Videos</h1>
          <p className="dark:text-neutral-300 mt-2 text-white">Hover the cards to play the trailers.</p>

          <div className="flex items-center gap-2 mt-4">
            <Button asChild className="group/btn relative">
              <Link href="/">
                Home
                <span className="pointer-events-none absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                <span className="pointer-events-none absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
              </Link>
            </Button>

            <Button asChild className="group/btn relative">
              <Link href="/about-us">
                About Us
                <span className="pointer-events-none absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                <span className="pointer-events-none absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
              </Link>
            </Button>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((v) => {
            const baseURL = `https://www.youtube.com/embed/${v.youtubeId}`
            const autoplayURL = `${baseURL}?autoplay=1&mute=1`

            return (
              <CardContainer key={v.id} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/20 border-black/10 w-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white">
                    {v.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {v.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <div
                      className="h-56 w-full rounded-xl overflow-hidden group-hover/card:shadow-xl"
                      onMouseEnter={() => setHoveredId(v.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <iframe
                        src={hoveredId === v.id ? autoplayURL : baseURL}
                        width="100%"
                        height="100%"
                        className="w-full h-full object-cover rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={v.title}
                      />
                    </div>
                  </CardItem>

                  <div className="flex justify-between items-center mt-16">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-medium dark:text-white underline underline-offset-4"
                    >
                      Watch trailer →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Play
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            )
          })}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-100 mb-8">Our Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cometCards.map((card) => (
              <CometCard key={card.id} rotateDepth={12} translateDepth={15}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer flex-col items-stretch rounded-[12px] border-0 bg-[#1F2121] p-2 saturate-0 hover:saturate-100 transition-all duration-300"
                  aria-label={`View ${card.title}`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-1 flex-1">
                    <div className="relative mt-1 aspect-[3/4] w-full">
                      <img
                        loading="lazy"
                        className="absolute inset-0 h-full w-full rounded-[12px] bg-[#000000] object-cover contrast-75"
                        alt={card.title}
                        src={card.image || "/placeholder.svg"}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-1 flex flex-shrink-0 items-center justify-between p-2 font-mono text-white">
                    <div className="text-[10px]">{card.title}</div>
                    <div className="text-[10px] text-gray-300 opacity-50">{card.code}</div>
                  </div>
                </button>
              </CometCard>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
