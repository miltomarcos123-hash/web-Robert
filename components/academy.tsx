import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Palette, Award, ArrowRight } from "lucide-react"

const courses = [
  {
    icon: GraduationCap,
    title: "Curso de barbería inicial",
    description: "Aprendé barbería desde cero y comenzá a desarrollar una profesión.",
  },
  {
    icon: Palette,
    title: "Curso de colorimetría",
    description: "Dominá técnicas de color, decoloración y cambios de look.",
  },
  {
    icon: Award,
    title: "Curso de perfeccionamiento",
    description: "Pensado para barberos que quieren mejorar su técnica y nivel profesional.",
  },
]

export function Academy() {
  return (
    <section id="academia" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Academia
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Formación profesional en barbería
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                RR Studio también es un espacio de formación para quienes desean comenzar o perfeccionarse en el mundo de la barbería. Los cursos están pensados para transmitir técnica, experiencia y visión profesional.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground transition-colors duration-300">
                <Link href="#contacto">
                  Consultar próximo curso
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <course.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
