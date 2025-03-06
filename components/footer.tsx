import { Code, Github, Layers } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-silver-bright/10 bg-black text-silver-bright">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-6 w-6 text-silver-bright" />
              <span className="text-xl font-bold glow-text">Quickfolio</span>
            </div>
            <p className="text-sm text-silver/80">Your  portfolio in minutes, not days.</p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-silver/80">
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-silver/80">
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-silver/80">
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-silver-bright transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-silver-bright/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-silver/80">© {new Date().getFullYear()} Quickfolio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-silver/80 hover:text-silver-bright transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-silver/80 hover:text-silver-bright transition-colors">
              <Code className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

