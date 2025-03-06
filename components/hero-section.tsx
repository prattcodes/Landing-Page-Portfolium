"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { BackgroundPaths } from "@/components/background-paths"
import { motion } from "framer-motion"
import { Button } from "@/components/moving-border-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-silver-bright/10">
      <BackgroundPaths>
        <p className="text-xl text-silver/90 max-w-2xl mx-auto mb-8">
          Showcase your skills, projects, and experience with a clean, minimalist portfolio that makes you stand out to
          employers and clients—no design or coding skills required.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Button
              containerClassName="w-auto h-auto"
              borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
              className="border-silver-bright/20 bg-black/80 text-silver-bright hover:text-white rounded-2xl px-6 py-3"
            >
              <span className="flex items-center gap-2 text-base">
                Create Your Portfolio Now
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <Button
              containerClassName="w-auto h-auto"
              borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
              className="border-black/20 bg-silver-bright/80 text-black hover:text-black rounded-2xl px-6 py-3"
            >
              <span className="text-base">See Example Portfolios</span>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl border border-silver-bright/30 overflow-hidden shadow-xl animated-border-card"
        >
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Portfolio preview" fill className="object-cover" />
        </motion.div>
      </BackgroundPaths>
    </section>
  )
}

