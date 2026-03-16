export function Culture() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-balance leading-tight">
            Una barbería pensada para el estilo masculino.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              RR Studio Barbería nace con la idea de crear un espacio donde cada cliente pueda mejorar su imagen y vivir una experiencia diferente.
            </p>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aquí no se trata solamente de cortar el pelo. Se trata de cuidar los detalles, respetar el estilo de cada persona y elevar la percepción de lo que significa ir a una barbería.
              </p>
              <p className="text-foreground text-lg leading-relaxed font-medium">
                Cada corte es trabajado con dedicación, técnica y una visión estética clara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
