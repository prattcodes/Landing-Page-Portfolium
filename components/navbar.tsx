"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Layers, Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setHasScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed z-50 top-0 flex flex-row items-center px-4 xl:px-32 lg:px-6 py-4 md:py-10 w-full transition-all duration-300 ${hasScrolled ? 'bg-black/60 backdrop-blur-md before:absolute before:inset-0 before:z-[-1] before:bg-[url("/noise.png")] before:opacity-20 before:mix-blend-overlay' : 'bg-gradient-to-b from-black/60 to-black/0'}`}>
      <div className="flex items-center gap-2">
        <Layers className="h-6 w-6 text-white" />
        <span className="text-xl font-bold text-white">Quickfolio</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex w-auto ml-auto flex-row items-center gap-14 text-background">
        <ul className="flex flex-row items-center gap-14 relative w-auto">
          {[
            { href: '#features', text: 'Features' },
            { href: '#how-it-works', text: 'How It Works' },
            { href: '#testimonials', text: 'Testimonials' },
            { href: '#faq', text: 'FAQ' },
          ].map((link) => (
            <li key={link.href} className="flex w-auto">
              <NavLink href={link.href}>
                <div className="flex items-center relative cursor-pointer text-center overflow-hidden">
                  <span className="relative white-text h-full flex items-center text-white">{link.text}</span>
                  <span className="h-full green-text flex items-center absolute top-[100%] left-0 right-0 text-primary">{link.text}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="inline-flex items-center gap-3 justify-center whitespace-nowrap text-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white border-white border rounded-full px-4 py-1 hover:border-primary"
          >
            <span>
              <div className="flex items-center relative cursor-pointer text-center overflow-hidden">
                <span className="relative white-text h-full flex items-center text-white">Log In</span>
                <span className="h-full green-text flex items-center absolute top-[100%] left-0 right-0 text-primary">Log In</span>
              </div>
            </span>
          </Button>
          <Button className="inline-flex items-center gap-3 justify-center whitespace-nowrap text-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white border-white border rounded-full px-4 py-1 hover:border-primary">
            <span>
              <div className="flex items-center relative cursor-pointer text-center overflow-hidden">
                <span className="relative white-text h-full flex items-center text-white">Sign Up Free</span>
                <span className="h-full green-text flex items-center absolute top-[100%] left-0 right-0 text-primary">Sign Up Free</span>
              </div>
            </span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden ml-auto">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <nav className="flex flex-col p-6">
              <ul className="flex flex-col gap-4">
                {[
                  { href: '#features', text: 'Features' },
                  { href: '#how-it-works', text: 'How It Works' },
                  { href: '#testimonials', text: 'Testimonials' },
                  { href: '#faq', text: 'FAQ' },
                ].map((link) => (
                  <li key={link.href}>
                    <NavLink href={link.href}>
                      <span className="text-lg font-medium">{link.text}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 mt-6">
                <Button
                  variant="outline"
                  className="w-full justify-center text-lg font-medium"
                >
                  Log In
                </Button>
                <Button
                  className="w-full justify-center text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign Up Free
                </Button>
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
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
    <Link href={href} onClick={handleClick} className="px-2 py-3 w-full md:w-auto text-center">
      {children}
    </Link>
  )
}

