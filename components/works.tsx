"use client"

import Image from "next/image"

const works = [
  { id: 1, alt: "Fade moderno con diseño" },
  { id: 2, alt: "Corte clásico con barba" },
  { id: 3, alt: "Degradado con textura" },
  { id: 4, alt: "Estilo contemporáneo" },
  { id: 5, alt: "Barba perfilada" },
  { id: 6, alt: "Corte ejecutivo" },
]

export function Works() {
  return (
    <section id="trabajos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
                <span className="text-sm uppercase tracking-wider">{work.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
