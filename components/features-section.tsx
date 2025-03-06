"use client"

import { FileText, Link, MessageSquare, Rocket, Zap } from "lucide-react"
import { EvervaultCard } from "@/components/evervault-card"
import { LucideIcon } from "lucide-react"

// Define the feature card type
type FeatureCard = {
  icon: LucideIcon
  text: string
  description: string
}

// Features data
const features: FeatureCard[] = [
  {
    icon: Rocket,
    text: "Project Showcase",
    description: "Highlight your best work with project descriptions, tech stacks, live links, and GitHub repositories.",
  },
  {
    icon: FileText,
    text: "Work Experience",
    description: "Optional section to display your professional journey, accomplishments, and technical skills gained at each position.",
  },
  {
    icon: MessageSquare,
    text: "Blog Integration",
    description: "Share your technical insights and showcase your knowledge by linking to your blog posts.",
  },
  {
    icon: FileText,
    text: "Resume Access",
    description: "Make your resume instantly accessible to potential employers with a single click.",
  },
  {
    icon: Link,
    text: "Social Connectivity",
    description: "Connect visitors to your GitHub, LinkedIn, Twitter, and other platforms to build your professional network.",
  },
  {
    icon: Zap,
    text: "Instant Setup",
    description: "Create your professional portfolio in under 15 minutes with our intuitive editor that handles everything.",
  },
]

export function FeaturesSection() {
  return (
    <section className="container py-20" id="features">
      <div className="text-center mb-16">
        <div className="inline-block rounded-full bg-silver-bright/10 px-3 py-1 text-sm font-medium text-silver-bright mb-4">
          ✨ Why Developers Choose Us
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-silver-bright glow-text">
          Features That Matter
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <EvervaultCard
            key={index}
            icon={<feature.icon className="h-8 w-8" />}
            text={feature.text}
            description={feature.description}
            className="h-[350px] rounded-2xl"
          />
        ))}
      </div>
    </section>
  )
}

