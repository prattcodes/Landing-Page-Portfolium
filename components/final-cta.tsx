"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/moving-border-button"

export function FinalCta() {
  return (
    <section className="bg-silver-bright text-black">
      <div className="container py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Join a community of developers who've landed their dream jobs with Portfolium
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            containerClassName="w-auto h-auto"
            borderClassName="bg-[radial-gradient(#000000_40%,transparent_60%)]"
            className="border-black/20 bg-silver-bright/80 text-black hover:text-black rounded-2xl px-6 py-3"
          >
            <span className="flex items-center gap-2 text-base">
              Sign Up Free
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
          <Button
            containerClassName="w-auto h-auto"
            borderClassName="bg-[radial-gradient(#000000_40%,transparent_60%)]"
            className="border-black/20 bg-silver-bright/80 text-black hover:text-black rounded-2xl px-6 py-3"
          >
            <span className="text-base">Explore Features</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

