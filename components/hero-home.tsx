'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RRLogo } from "@/components/rr-logo"
import { ArrowRight } from "lucide-react"

export function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="RR Studio Barbería"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <RRLogo size="lg" />
          </div>
          
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Peluquería & Barbería
          </p>
          
          <p className="text-accent italic font-serif text-xl md:text-2xl mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Más Que Un Corte
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-primary">RR ESTUDIO</span>
          </h1>
          
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-pretty animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Espacio dedicado al estilo masculino, donde cada corte se trabaja con precisión, técnica y atención al detalle.
          </p>

          {/* Navigation Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/servicios"
              className="group p-6 bg-card/50 backdrop-blur border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Servicios</h3>
              <p className="text-sm text-muted-foreground">Cortes, barba y más</p>
              <ArrowRight className="w-4 h-4 mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link 
              href="/academia"
              className="group p-6 bg-card/50 backdrop-blur border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Academia</h3>
              <p className="text-sm text-muted-foreground">Cursos profesionales</p>
              <ArrowRight className="w-4 h-4 mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link 
              href="/productos"
              className="group p-6 bg-card/50 backdrop-blur border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Productos</h3>
              <p className="text-sm text-muted-foreground">Línea premium</p>
              <ArrowRight className="w-4 h-4 mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link 
              href="/nosotros"
              className="group p-6 bg-card/50 backdrop-blur border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Nosotros</h3>
              <p className="text-sm text-muted-foreground">Nuestra historia</p>
              <ArrowRight className="w-4 h-4 mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button size="lg" asChild className="text-base px-8 bg-primary hover:bg-accent text-primary-foreground transition-all duration-300 hover:scale-105 font-semibold">
              <a 
                href="https://wa.me/543425106652?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20RR%20Estudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar turno
              </a>
            </Button>
          </div>
          
          {/* Address badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm font-medium mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Rivadavia 3474, Santa Fe
          </div>
        </div>
      </div>
    </section>
  )
}
