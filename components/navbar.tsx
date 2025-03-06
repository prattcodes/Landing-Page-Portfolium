"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Layers } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-silver-bright/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-silver-bright" />
          <span className="text-xl font-bold text-silver-bright glow-text">Quickfolio</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-silver-bright/20 text-silver-bright hover:bg-silver-bright/10 rounded-xl px-5 py-2"
          >
            Log In
          </Button>
          <Button className="bg-silver-bright text-black hover:bg-silver-bright/90 rounded-xl px-5 py-2">
            Sign Up Free
          </Button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link href={href} onClick={handleClick} className="text-sm font-medium text-silver/80 hover:text-silver-bright transition-colors">
      {children}
    </Link>
  )
}

