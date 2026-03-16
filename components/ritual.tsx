const steps = [
  {
    number: "01",
    title: "Llegás al estudio",
    description: "Te recibimos en un ambiente cómodo y profesional.",
  },
  {
    number: "02",
    title: "Analizamos tu estilo",
    description: "Observamos tu tipo de cabello, rostro y estilo personal.",
  },
  {
    number: "03",
    title: "Ejecutamos el corte",
    description: "Aplicamos técnica, precisión y atención en cada detalle.",
  },
  {
    number: "04",
    title: "El resultado",
    description: "Salís con una versión mejorada de tu estilo.",
  },
]

export function Ritual() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Proceso
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
            El ritual RR Studio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
