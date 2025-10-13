"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

  const startAnimation = useCallback(() => {
    const next = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(next)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating) {
      timer.current = setTimeout(() => {
        startAnimation()
      }, duration)
    }
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 0, y: "-120%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={cn("inline-block font-semibold text-blue-600", className)}
        aria-live="polite"
      >
        {currentWord}
      </motion.span>
    </AnimatePresence>
  )
}
