"use client"

import { useEffect, useRef } from "react"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeObserver = new ResizeObserver(() => {
      setupCanvas()
      draw()
    })

    resizeObserver.observe(canvas)

    function setupCanvas() {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      canvas.width = width * dpr
      canvas.height = height * dpr

      ctx.scale(dpr, dpr)

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    function draw() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const width = canvas.width
      const height = canvas.height

      // Draw grid
      const gridSize = 30
      const lineWidth = 0.5

      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
      ctx.lineWidth = lineWidth

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Add some random dots at intersections
      ctx.fillStyle = "rgba(59, 130, 246, 0.4)"

      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          if (Math.random() > 0.92) {
            const dotSize = Math.random() * 2 + 1
            ctx.beginPath()
            ctx.arc(x, y, dotSize, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }

    setupCanvas()
    draw()

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
}

