import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors, Sparkles, Users, Palette, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Corte clásico",
    description: "Cortes tradicionales ejecutados con técnica profesional y precisión en cada detalle.",
  },
  {
    icon: Sparkles,
    title: "Fade / Degradado",
    description: "Especialistas en fades modernos y cortes actuales adaptados a cada estilo.",
  },
  {
    icon: Users,
    title: "Arreglo de barba",
    description: "Perfilado y diseño de barba profesional para lograr un look limpio y definido.",
  },
  {
    icon: Palette,
    title: "Color y decoloración",
    description: "Cambio de look con técnicas profesionales de colorimetría y asesoramiento personalizado.",
  },
  {
    icon: Scissors,
    title: "Corte + barba",
    description: "Servicio completo para renovar tu estilo y mantener una imagen cuidada.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            Nuestros servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-serif text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground transition-colors duration-300">
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
    </section>
  )
}
