import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServiciosContent } from "@/components/servicios-content"

export const metadata: Metadata = {
  title: "Servicios | RR Estudio Barbería",
  description: "Servicios de peluquería y barbería profesional: cortes, fades, barba, colorimetría y servicios a domicilio en Santa Fe.",
}

export default function ServiciosPage() {
  return (
    <main>
      <Header />
      <ServiciosContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
