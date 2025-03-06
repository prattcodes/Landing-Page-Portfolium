"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <motion.div
      className="fixed top-0 left-0 w-[150px] h-[150px] rounded-full pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "linear", damping: 10, stiffness: 20, mass: 0.1 }}
      style={{
        background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 10%)",
      }}
    />
  )
}

