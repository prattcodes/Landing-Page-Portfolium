import { Button } from "@/components/ui/button"
import { FlipWords } from "./ui/flip-words"
import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

const flipword = ["days", "minutes"]

export function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/quickfolio",
      label: "GitHub"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/quickfolio",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/quickfolio",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/quickfolio",
      label: "Instagram"
    },
    {
      icon: <Youtube className="h-5 w-5" />,
      href: "https://youtube.com/@quickfolio",
      label: "YouTube"
    }
  ]

  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 bg-black text-silver-bright">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label="Quickfolio"
          >
            <span className="font-bold text-xl text-silver-bright">Quickfolio</span>
          </a>
          <div className="text-sm text-silver/80 flex items-center justify-center gap-1">
            Your portfolio in
            <FlipWords words={flipword} className="inline text-silver/80 -ml-1 md:-ml-2" />
          </div>
          <ul className="flex list-none space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-silver-bright/10 hover:bg-silver-bright/20"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

