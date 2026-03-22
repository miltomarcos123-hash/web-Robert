import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AcademiaContent } from "@/components/academia-content"

export const metadata: Metadata = {
  title: "Academia | RR Estudio Barbería",
  description: "Formación profesional en barbería. Cursos de barbería inicial, colorimetría y perfeccionamiento en Santa Fe.",
}

export default function AcademiaPage() {
  return (
    <main>
      <Header />
      <AcademiaContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
