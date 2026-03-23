'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Scissors, Sparkles, Users, Palette, ArrowRight, MapPin, Clock, AlertCircle, Quote } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const iconMap: Record<string, any> = {
  Scissors,
  Sparkles,
  Users,
  Palette,
}

interface Service {
  id: string
  nombre: string
  descripcion: string
  precio: number
  icon_name?: string
}

const defaultServices = [
  {
    icon: Scissors,
    title: "Corte clásico",
    description: "Cortes tradicionales ejecutados con técnica profesional y precisión en cada detalle.",
    price: "$4.500"
  },
  {
    icon: Sparkles,
    title: "Fade / Degradado",
    description: "Especialistas en fades modernos y cortes actuales adaptados a cada estilo.",
    price: "$5.000"
  },
  {
    icon: Users,
    title: "Arreglo de barba",
    description: "Perfilado y diseño de barba profesional para lograr un look limpio y definido.",
    price: "$2.500"
  },
  {
    icon: Palette,
    title: "Color y decoloración",
    description: "Cambio de look con técnicas profesionales de colorimetría y asesoramiento personalizado.",
    price: "$8.000"
  },
  {
    icon: Scissors,
    title: "Corte + barba",
    description: "Servicio completo para renovar tu estilo y mantener una imagen cuidada.",
    price: "$6.500"
  },
]

const defaultZonas = [
  {
    nombre: 'Centro',
    descripcion: 'Zona centro de la ciudad',
    costo: '500',
  },
  {
    nombre: 'Norte',
    descripcion: 'Barrios de la zona norte',
    costo: '800',
  },
  {
    nombre: 'Sur',
    descripcion: 'Barrios de la zona sur',
    costo: '800',
  },
  {
    nombre: 'Oeste',
    descripcion: 'Barrios de la zona oeste',
    costo: '1000',
  },
]

const testimonials = [
  {
    quote: "Excelente atención y profesionalismo. El mejor corte que me hicieron.",
    author: "Martín G.",
    role: "Cliente",
  },
  {
    quote: "Muy buen ambiente y barberos que realmente saben lo que hacen.",
    author: "Lucas P.",
    role: "Cliente",
  },
  {
    quote: "Siempre salgo conforme, el servicio es impecable.",
    author: "Diego M.",
    role: "Cliente",
  },
]

export function ServiciosContent() {
  const [services, setServices] = useState<any[]>(defaultServices)
  const [zonas, setZonas] = useState(defaultZonas)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('created_at', { ascending: true })

        if (error) {
          console.error('Error fetching services:', error)
          setServices(defaultServices)
        } else if (data && data.length > 0) {
          const formattedServices = data.map((service: any) => ({
            icon: iconMap[service.icon_name] || Scissors,
            title: service.nombre,
            description: service.descripcion,
            price: `$${service.precio.toLocaleString('es-AR')}`
          }))
          setServices(formattedServices)
        }
      } catch (err) {
        console.error('Error:', err)
        setServices(defaultServices)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Servicios
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Nuestros Servicios
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada servicio está diseñado para ofrecer una experiencia premium, con atención personalizada y los más altos estándares de calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                  <span className="font-serif text-xl font-bold text-primary">{service.price}</span>
                </div>
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
                href="https://wa.me/543425106652?text=Hola%2C%20quiero%20reservar%20un%20turno%20en%20RR%20Estudio"
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

      {/* Servicios a Domicilio */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Servicio Premium
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              Servicios a Domicilio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Llevamos nuestro profesionalismo a tu hogar. Servicio de barbería a domicilio con la misma calidad que en nuestro estudio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Cobertura Amplia</h3>
                  <p className="text-muted-foreground">
                    Servicio disponible en múltiples zonas de la ciudad con costos accesibles según tu ubicación.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Horarios Flexibles</h3>
                  <p className="text-muted-foreground">
                    Elige el horario que mejor se adapte a tu disponibilidad. Disponible de lunes a domingo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-2">Profesionalismo Garantizado</h3>
                  <p className="text-muted-foreground">
                    Equipo completo, higiene máxima y la misma calidad que en nuestro local.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-serif text-2xl font-bold mb-6">Costos por Zona</div>
              {zonas.map((zona) => (
                <div
                  key={zona.nombre}
                  className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <div>
                    <h4 className="font-semibold">{zona.nombre}</h4>
                    <p className="text-sm text-muted-foreground">{zona.descripcion}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-xl font-bold text-primary">${zona.costo}</p>
                    <p className="text-xs text-muted-foreground">adicional</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-bold mb-4">¿Listo para reservar?</h3>
              <p className="text-muted-foreground mb-6">
                Contacta con nosotros para agendar tu servicio a domicilio. Te confirmaremos horarios disponibles en tu zona.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground">
                <a 
                  href="https://wa.me/543425106652?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20a%20domicilio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar Domicilio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Trabajos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Trabajos realizados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada corte refleja dedicación, técnica y estilo. Explorá algunos de los trabajos realizados en RR Studio Barbería.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {works.map((work) => (
              <div
                key={work.id}
                className="relative aspect-square bg-muted rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/works/work-${work.id}.jpg`}
                  alt={work.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-sm uppercase tracking-wider text-center px-4">{work.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Testimonios
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Opiniones de clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border rounded-lg relative"
              >
                <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
                <p className="text-lg leading-relaxed mb-6 relative z-10">
                  {`"${testimonial.quote}"`}
                </p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
