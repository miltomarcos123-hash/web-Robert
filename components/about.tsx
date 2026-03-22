import Image from "next/image"

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-card">
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
              {/* Subtle green overlay to match brand - Brandbook */}
              <div className="absolute inset-0 bg-[#0F5A33]/20 mix-blend-multiply" />
            </div>

            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Nosotros
              </p>
              <h2 className="font-sans text-4xl md:text-5xl font-bold mb-8 text-balance">
                Sobre RR Estudio
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
  )
}
