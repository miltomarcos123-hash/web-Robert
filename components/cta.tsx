import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            ¿Listo para renovar tu estilo?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Reservá tu turno y viví la experiencia RR Studio.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-base px-8 bg-[#071F15] hover:bg-[#0B3D26] text-[#F5F5F5] transition-colors duration-300"
            >
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
        </div>
      </div>
    </section>
  )
}
