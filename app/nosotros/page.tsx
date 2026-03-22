import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { NosotrosContent } from "@/components/nosotros-content"

export const metadata: Metadata = {
  title: "Nosotros | RR Estudio Barbería",
  description: "Conocé la historia y filosofía de RR Estudio. Espacio dedicado al estilo masculino en Santa Fe.",
}

export default function NosotrosPage() {
  return (
    <main>
      <Header />
      <NosotrosContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
