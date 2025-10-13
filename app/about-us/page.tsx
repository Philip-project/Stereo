"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { useState } from "react"
import { PinContainer } from "@/components/ui/3d-pin"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Creative Director",
    image: "/professional-headshot-female.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Lead Cinematographer",
    image: "/professional-male-headshot.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Producer",
    image: "/professional-headshot-female-2.png",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Editor",
    image: "/professional-headshot-male-2.png",
  },
]

const testimonials = [
  {
    quote:
      "Sparrow Media transformed our brand story into a captivating visual experience. Their attention to detail and creative vision exceeded all expectations.",
    name: "Jennifer Martinez",
    designation: "CEO at TechVision Inc",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Working with Sparrow Media was seamless from start to finish. They brought our product launch video to life with stunning cinematography and storytelling.",
    name: "Robert Chen",
    designation: "Marketing Director at InnovateCo",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "The team's professionalism and creativity are unmatched. Our corporate video has become our most powerful marketing asset.",
    name: "Amanda Foster",
    designation: "VP of Communications at GlobalTech",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Sparrow Media doesn't just create videos—they craft experiences. Their work has significantly elevated our brand presence.",
    name: "David Thompson",
    designation: "Founder at Creative Studios",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "From concept to final delivery, Sparrow Media demonstrated exceptional skill and dedication. Highly recommend for any video production needs.",
    name: "Lisa Wang",
    designation: "Brand Manager at FutureNet",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3540&auto=format&fit=crop",
  },
]

export default function AboutUsPage() {
  const [status, setStatus] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    setStatus(`Thanks${name ? `, ${name}` : ""}! We'll get back to you shortly.`)
    // In a real app, send to an API route here.
  }

  return (
    <main className="px-6 py-12">
      <div className="shadow-input mx-auto w-full max-w-6xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg mb-6">
            Meet our talented team of creators and storytellers.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button asChild className="group/btn relative">
              <Link href="/">
                Home
                <span className="pointer-events-none absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
              </Link>
            </Button>

            <Button asChild className="group/btn relative">
              <Link href="/videos">
                Videos
                <span className="pointer-events-none absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Experts</h2>
          <div className="flex items-center justify-center">
            <AnimatedTooltip items={teamMembers} />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Studio</h2>
          <div className="h-[40rem] w-full flex items-center justify-center">
            <PinContainer title="Sparrow Media" href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Our Creative Studio</h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">Bringing your vision to life through exceptional storytelling.</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden relative">
                  <Image src="/video-production-studio.png" alt="Sparrow Media Studio" fill className="object-cover" />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-center mb-8">
            Tell us about your project. We respond within 1–2 business days.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4" aria-label="Contact form">
            <label className="grid gap-1">
              <span className="sr-only">Name</span>
              <Input name="name" placeholder="Your name" required aria-label="Name" />
            </label>
            <label className="grid gap-1">
              <span className="sr-only">Email</span>
              <Input name="email" type="email" placeholder="you@example.com" required aria-label="Email" />
            </label>
            <label className="grid gap-1">
              <span className="sr-only">Message</span>
              <Textarea
                name="message"
                placeholder="Tell us about your vision…"
                required
                aria-label="Message"
                className="min-h-32"
              />
            </label>

            <div className="flex items-center justify-between">
              <Button
                type="submit"
                className="group/btn relative bg-gradient-to-br from-black to-neutral-600 text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              >
                Send message →
                <span className="pointer-events-none absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
                <span className="pointer-events-none absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
              </Button>

              {status && (
                <span className="text-sm text-green-600 dark:text-green-400" role="status" aria-live="polite">
                  {status}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
