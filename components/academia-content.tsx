'use client'

import { Button } from "@/components/ui/button"
import { GraduationCap, Palette, Award, ArrowRight, CheckCircle, Users, Clock, Star } from "lucide-react"

const courses = [
  {
    icon: GraduationCap,
    title: "Curso de Barbería Inicial",
    description: "Aprendé barbería desde cero y comenzá a desarrollar una profesión con futuro.",
    duration: "3 meses",
    features: [
      "Técnicas básicas de corte",
      "Manejo de herramientas",
      "Higiene y seguridad",
      "Atención al cliente",
      "Práctica supervisada"
    ]
  },
  {
    icon: Palette,
    title: "Curso de Colorimetría",
    description: "Dominá técnicas de color, decoloración y cambios de look profesionales.",
    duration: "2 meses",
    features: [
      "Teoría del color",
      "Técnicas de decoloración",
      "Matización y corrección",
      "Tendencias actuales",
      "Práctica con modelos"
    ]
  },
  {
    icon: Award,
    title: "Curso de Perfeccionamiento",
    description: "Pensado para barberos que quieren mejorar su técnica y nivel profesional.",
    duration: "1 mes",
    features: [
      "Técnicas avanzadas",
      "Fades complejos",
      "Diseños y texturas",
      "Gestión de negocio",
      "Certificación profesional"
    ]
  },
]

const benefits = [
  {
    icon: Users,
    title: "Grupos Reducidos",
    description: "Clases con pocos alumnos para una atención personalizada"
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Opciones de cursado en distintos turnos"
  },
  {
    icon: Star,
    title: "Instructores Expertos",
    description: "Profesionales con años de experiencia en el rubro"
  },
  {
    icon: Award,
    title: "Certificación",
    description: "Diploma avalado al completar cada curso"
  },
]

export function AcademiaContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Academia
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Formación Profesional en Barbería
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              RR Studio también es un espacio de formación para quienes desean comenzar o perfeccionarse en el mundo de la barbería. Los cursos están pensados para transmitir técnica, experiencia y visión profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Cursos Disponibles
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Nuestros Programas
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <course.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm text-primary font-medium">{course.duration}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    <a 
                      href={`https://wa.me/543425106652?text=Hola%2C%20quiero%20consultar%20sobre%20el%20${encodeURIComponent(course.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para empezar tu carrera en barbería?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactanos para conocer las fechas de inicio, precios y opciones de financiación disponibles.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground">
              <a 
                href="https://wa.me/543425106652?text=Hola%2C%20quiero%20información%20sobre%20los%20cursos%20de%20barbería"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar ahora
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
