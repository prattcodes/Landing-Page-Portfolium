"use client"
import { useMotionValue } from "framer-motion"
import type React from "react"
import { useState, useEffect } from "react"
import { useMotionTemplate, motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const EvervaultCard = ({
  text,
  icon,
  description,
  className,
}: {
  text?: string
  icon?: React.ReactNode
  description?: string
  className?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState("")

  useEffect(() => {
    const str = generateRandomString(1500)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative animated-border-card",
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex flex-col items-center justify-center h-full p-6"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="relative h-16 w-16 rounded-full flex items-center justify-center text-white">
            <div className="absolute w-full h-full bg-black/[0.8] dark:bg-silver-bright/[0.2] blur-sm rounded-full" />
            <span className="text-silver-bright z-20">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-silver-bright z-10 glow-text">{text}</h3>
          <p className="text-silver z-10">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-silver-bright/40 to-silver/20 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-silver-bright font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
export const generateRandomString = (length: number) => {
  let result = ""
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

