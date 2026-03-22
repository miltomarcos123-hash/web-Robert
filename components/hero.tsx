'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RRLogo } from "@/components/rr-logo"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Barber cutting hair in RR Studio Barbería"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for brand consistency - Brandbook */}
        <div className="absolute inset-0 bg-[#071F15]/85" />
        
        {/* Cinematic overlay accent with green */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F5A33]/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo as brand element with animation */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <RRLogo size="lg" />
          </div>
          
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Peluquería & Barbería
          </p>
          
          <p className="text-[#D8B97A] italic font-serif text-xl md:text-2xl mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Más Que Un Corte
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-primary">BARBERÍA</span>
          </h1>
          
          <p className="text-[#F5F5F5]/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-pretty animate-fade-in" style={{ animationDelay: '0.5s' }}>
            RR Estudio es un espacio dedicado al estilo masculino, donde cada corte se trabaja con precisión, técnica y atención al detalle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="text-base px-6 bg-[#C9A45C] hover:bg-[#D8B97A] text-[#071F15] transition-all duration-300 hover:scale-105 font-semibold">
              <a 
                href="https://wa.me/543425106652?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20RR%20Estudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar turno
              </a>
            </Button>
            
            <Button size="lg" asChild variant="outline" className="text-base px-6">
              <a href="#servicios">
                Ver servicios
              </a>
            </Button>

            <Button size="lg" asChild variant="outline" className="text-base px-6">
              <a href="#cursos">
                Ver cursos
              </a>
            </Button>

            <Button size="lg" asChild variant="outline" className="text-base px-6">
              <a href="#domicilio">
                Servicios a domicilio
              </a>
            </Button>
          </div>
          
          {/* Address badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm font-medium animate-fade-in" style={{ animationDelay: '0.7s' }}>
            Rivadavia 3474
          </div>
        </div>
      </div>
    </section>
  )
}
