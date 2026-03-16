"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Es necesario reservar turno?",
    answer: "Sí, recomendamos reservar turno previamente para garantizar disponibilidad.",
  },
  {
    question: "¿Cuánto dura un corte?",
    answer: "Generalmente entre 30 y 45 minutos dependiendo del servicio.",
  },
  {
    question: "¿Ofrecen cursos para principiantes?",
    answer: "Sí, contamos con cursos para personas que quieren aprender barbería desde cero.",
  },
  {
    question: "¿Los cursos incluyen certificado?",
    answer: "Sí, al finalizar el curso se entrega certificado.",
  },
  {
    question: "¿Dónde está ubicada la barbería?",
    answer: "RR Studio Barbería se encuentra en Rivadavia 3472, Santa Fe.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              Preguntas frecuentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-serif text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
