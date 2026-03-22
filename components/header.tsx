"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RRLogo } from "@/components/rr-logo"

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/academia", label: "Academia" },
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <RRLogo size="sm" />
            <div className="hidden sm:flex flex-col">
              <span className="font-sans text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                RR Estudio
              </span>
              <span className="text-[10px] text-primary uppercase tracking-[0.15em]">
                Peluquería y Barbería
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-2 transition-colors duration-300 relative group whitespace-nowrap ${
                  pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-transform duration-300 origin-left ${
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Button asChild className="bg-primary hover:bg-accent text-primary-foreground transition-colors duration-300 text-xs font-semibold px-6">
              <a 
                href="https://wa.me/543425106652?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20RR%20Estudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 ml-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 px-4 py-3 rounded-md ${
                    pathname === link.href 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground hover:text-primary hover:bg-secondary/20"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-primary hover:bg-accent text-primary-foreground transition-colors duration-300 text-xs font-semibold mx-4">
                <a 
                  href="https://wa.me/543425106652?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20RR%20Estudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar Turno
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
