"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/moving-border-button"

export function CtaSection() {
  return (
    <section className="border-t border-b border-silver-bright/10 bg-secondary/30">
      <div className="container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-silver-bright glow-text">
          Ready to showcase your work?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
          <Button
            containerClassName="w-auto h-auto"
            borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
            className="border-black/20 bg-silver-bright/80 text-black hover:text-black rounded-2xl px-6 py-3"
          >
            <span className="text-base">See Example Portfolios</span>
          </Button>
        </div>
        <p className="text-sm text-silver/80 mt-4">
          No credit card required • Free subdomain included • Set up in minutes
        </p>
      </div>
    </section>
  )
}

