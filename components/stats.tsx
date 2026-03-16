export function Stats() {
  const stats = [
    { value: "5000+", label: "cortes realizados" },
    { value: "3500+", label: "clientes satisfechos" },
    { value: "300+", label: "alumnos formados" },
    { value: "6", label: "años de experiencia" },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
