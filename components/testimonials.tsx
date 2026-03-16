import { Quote } from "lucide-react"

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
    quote: "Hice el curso de barbería y aprendí muchísimo. Muy recomendable.",
    author: "Diego M.",
    role: "Alumno",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            Opiniones de clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg relative"
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
  )
}
