'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react"

const values = [
  {
    title: "Excelencia",
    description: "Cada corte es ejecutado con los más altos estándares de calidad y precisión."
  },
  {
    title: "Profesionalismo",
    description: "Formación continua y actualización en las últimas tendencias y técnicas."
  },
  {
    title: "Compromiso",
    description: "Dedicación total a la satisfacción y bienestar de cada cliente."
  },
  {
    title: "Comunidad",
    description: "Creamos un espacio de encuentro y pertenencia para nuestros clientes."
  },
]

export function NosotrosContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Nosotros
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Sobre RR Estudio
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Más que una barbería, un espacio donde el estilo masculino encuentra su máxima expresión.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/about-handshake.jpg"
                  alt="Comunidad y cultura de RR Studio Barbería"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />
              </div>

              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                  Nuestra Historia
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                  Una Visión del Estilo Masculino
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    En RR Estudio no solo cortamos cabello, ofrecemos un espacio para recargar energías. Nos dedicamos a brindar una experiencia que va más allá de lo estético, enfocándonos en el bienestar integral de nuestros clientes.
                  </p>
                  <p>
                    Creemos que cada visita es una oportunidad para desconectar del estrés diario y conectar con uno mismo. Ofrecemos un ambiente relajante, con atención personalizada, donde cada detalle está pensado para ofrecer confort y tranquilidad.
                  </p>
                  <p className="text-foreground font-medium">
                    Nos comprometemos a usar productos de alta calidad y técnicas innovadoras que respeten la salud del cabello y la piel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Filosofía
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg text-center"
              >
                <h3 className="font-serif text-xl font-bold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Visitanos
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Encontranos
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Dirección</h3>
                <p className="text-muted-foreground">
                  Rivadavia 3474<br />
                  Santa Fe, Argentina
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Horarios</h3>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 - 20:00<br />
                  Sábados: 9:00 - 18:00
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Contacto</h3>
                <p className="text-muted-foreground">
                  WhatsApp<br />
                  +54 342 510-6652
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground">
                <a 
                  href="https://www.google.com/maps/dir/-31.6407808,-60.6994432/Rivadavia+3474,+S3000+Santa+Fe+de+la+Vera+Cruz,+Santa+Fe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cómo llegar
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
