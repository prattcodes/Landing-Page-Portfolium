"use client"

import { cn } from "@/lib/utils"
import { FileText, Link, MessageSquare, Rocket, Zap } from "lucide-react"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={<feature.icon className="h-8 w-8" />}
            title={feature.text}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        "border border-silver-bright/10 rounded-2xl",
        "hover:border-silver-bright/30 transition-colors duration-200"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-silver-bright/5 to-transparent pointer-events-none rounded-2xl" />
      <div className="mb-4 relative z-10 px-10 text-silver-bright/80">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-silver-bright/20 group-hover/feature:bg-silver-bright/40 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-silver-bright">
          {title}
        </span>
      </div>
      <p className="text-sm text-silver/80 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}

