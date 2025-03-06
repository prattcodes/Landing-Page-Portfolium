"use client"

import React from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
  {
    quote: "I had three interviews scheduled within a week of creating my portfolio. The minimal design really lets my projects shine.",
    name: "Alex K.",
    title: "Frontend Developer"
  },
  {
    quote: "As a bootcamp graduate, I needed to stand out quickly. This tool helped me build a professional portfolio in one evening.",
    name: "Maya R.",
    title: "Full Stack Developer"
  },
  {
    quote: "The simplicity is what makes it perfect. No distractions, just my work presented clearly.",
    name: "Sam T.",
    title: "Software Engineer"
  },
  {
    quote: "The portfolio generator helped me showcase my projects in a professional way. I received multiple interview requests after sharing my portfolio.",
    name: "Emily H.",
    title: "Backend Developer"
  },
  {
    quote: "Clean, modern, and effective. This tool helped me land my dream job at a tech startup.",
    name: "David L.",
    title: "DevOps Engineer"
  }
]

export function TestimonialsSection() {
  return (
    <section className="container py-24" id="testimonials">
      <div className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-silver-bright glow-text">
          What Our Users Say
        </h2>
      </div>

      <div className="h-[400px] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  )
}



