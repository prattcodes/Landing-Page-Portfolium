"use client"

import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DeveloperSection } from "@/components/developer-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-silver-bright">
      <CursorGlow />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <DeveloperSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialsSection />
        <CtaSection />
        <TrustedBySection />
        <FaqSection />
        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}

