import { HeroHeader } from "@/components/hero-header"
import { ScrollShowcase } from "@/components/scroll-showcase"
import { FocusCards } from "@/components/ui/focus-cards"
import Link from "next/link"

export default function Page() {
  const serviceCards = [
    {
      title: "Cinematic Direction",
      description: "From pre-production to final color, we bring ideas to life.",
    },
    {
      title: "Brand Films",
      description: "Stories that connect audiences to your mission.",
    },
    {
      title: "Music Videos",
      description: "Visuals that amplify sound into experience.",
    },
  ]

  return (
    <main>
      <HeroHeader />
      <section className="px-6 py-16">
        <FocusCards cards={serviceCards} />
      </section>
      <ScrollShowcase />
      <footer className="px-6 py-10 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Sparrow Media × Philip&apos;s Media
          </p>
          <div className="flex items-center gap-4">
            <Link className="underline underline-offset-4" href="/videos">
              Videos
            </Link>
            <Link className="underline underline-offset-4" href="/about-us">
              About Us
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
