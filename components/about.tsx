import Image from "next/image"

export function About() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <Image
                src="/about-handshake.jpg"
                alt="Comunidad y cultura de RR Studio Barbería"
                fill
                className="object-cover"
              />
              {/* Subtle green overlay to match brand */}
              <div className="absolute inset-0 bg-[#071F15]/20 mix-blend-multiply" />
            </div>

            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Nosotros
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-balance">
                Sobre RR Studio Barbería
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  RR Studio Barbería nace con la visión de crear un espacio donde el estilo, la técnica y la experiencia se combinen para ofrecer un servicio de calidad.
                </p>
                <p>
                  El estudio está dirigido por Robert Pergazere, barbero y educador dedicado a transmitir su conocimiento y experiencia en el mundo de la barbería.
                </p>
                <p className="text-foreground font-medium">
                  Hoy RR Studio es un lugar donde clientes y alumnos encuentran profesionalismo, estilo y una comunidad apasionada por este oficio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
