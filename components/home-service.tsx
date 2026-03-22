'use client'

import { ContactModal } from '@/components/contact-modal'
import { MapPin, Clock, AlertCircle } from 'lucide-react'

const zonas = [
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

export function HomeServiceSection() {
  return (
    <section id="domicilio" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Servicio Premium
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Servicios a Domicilio
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
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
                <p className="text-foreground/70">
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
                <p className="text-foreground/70">
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
                <p className="text-foreground/70">
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
                className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div>
                  <h4 className="font-semibold">{zona.nombre}</h4>
                  <p className="text-sm text-foreground/60">{zona.descripcion}</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-xl font-bold text-primary">${zona.costo}</p>
                  <p className="text-xs text-foreground/60">por servicio</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-lg p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl font-bold mb-4">¿Listo para reservar?</h3>
            <p className="text-foreground/70 mb-6">
              Contacta con nosotros para agendar tu servicio a domicilio. Te confirmaremos horarios disponibles en tu zona.
            </p>
            <ContactModal
              titulo="Reservar Domicilio"
              descripcion="Cuéntanos tu zona y horario preferido"
              servicioInteres="Domicilio"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
