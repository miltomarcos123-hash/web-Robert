import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { RRLogo } from "@/components/rr-logo"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Barber cutting hair in RR Studio Barbería"
          fill
          className="object-cover"
          priority
        />
        {/* Dark green overlay for brand consistency */}
        <div className="absolute inset-0 bg-[#071F15]/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo as brand element */}
          <div className="flex justify-center mb-8">
            <RRLogo size="lg" />
          </div>
          
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Corte & Barbería
          </p>
          
          <p className="text-[#D8B97A] italic font-serif text-xl md:text-2xl mb-4">
            Más Que Un Corte
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-balance">
            <span className="text-primary">BARBERÍA</span>
          </h1>
          
          <p className="text-[#F5F5F5]/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            RR Studio Barbería es un espacio dedicado al estilo masculino, donde cada corte se trabaja con precisión, técnica y atención al detalle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="text-base px-8 bg-primary hover:bg-accent text-primary-foreground transition-colors duration-300">
              <a 
                href="https://wa.me/5493425765399?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20RR%20Studio%20Barber%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar turno
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
          
          {/* Address badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
            Rivadavia 3474
          </div>
        </div>
      </div>
    </section>
  )
}
