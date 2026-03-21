'use client'

import { ContactModal } from '@/components/contact-modal'
import { Check } from 'lucide-react'

const clubBeneficios = [
  '10% descuento en todos los servicios',
  'Acceso prioritario a turnos',
  'Productos exclusivos',
  'Corte de cumpleaños gratis',
  'Invitaciones a eventos especiales',
  'Asesoramiento personalizado',
]

const nivelMembresía = [
  {
    nivel: 'Básico',
    descripcion: 'Para los que comienzan',
    beneficios: clubBeneficios.slice(0, 3),
  },
  {
    nivel: 'Premium',
    descripcion: 'Experiencia mejorada',
    beneficios: clubBeneficios.slice(0, 5),
  },
  {
    nivel: 'VIP',
    descripcion: 'Máximos privilegios',
    beneficios: clubBeneficios,
  },
]

export function ExclusivityClub() {
  return (
    <section id="club" className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Membresía Exclusiva
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Club de Exclusividad RR
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Accede a beneficios exclusivos y vive la experiencia VIP en RR Studio Barbería
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nivelMembresía.map((nivel) => (
            <div
              key={nivel.nivel}
              className="relative group rounded-lg border border-primary/20 bg-background/50 backdrop-blur p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold mb-2 text-primary">
                  {nivel.nivel}
                </h3>
                <p className="text-foreground/60 mb-6">{nivel.descripcion}</p>

                <ul className="space-y-3 mb-8">
                  {nivel.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <ContactModal
                  servicioInteres={`Club ${nivel.nivel}`}
                  trigger={
                    <button className="w-full px-4 py-2 bg-primary hover:bg-accent text-primary-foreground rounded transition-colors duration-300 font-medium text-sm">
                      Unirme Ahora
                    </button>
                  }
                  titulo={`Unirse a ${nivel.nivel}`}
                  descripcion={`Accede a los beneficios exclusivos del nivel ${nivel.nivel}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">¿Quieres conocer más?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Contacta con nuestro equipo para conocer todos los detalles de nuestro programa de membresía y cómo unirte hoy.
          </p>
          <ContactModal
            titulo="Información de Membresía"
            descripcion="Solicita más detalles sobre nuestro programa VIP"
          />
        </div>
      </div>
    </section>
  )
}
