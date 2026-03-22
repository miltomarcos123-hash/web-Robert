import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductosContent } from "@/components/productos-content"

export const metadata: Metadata = {
  title: "Productos | RR Estudio Barbería",
  description: "Productos premium para el cuidado masculino. Pomadas, aceites para barba, shampoo y más en Santa Fe.",
}

export default function ProductosPage() {
  return (
    <main>
      <Header />
      <ProductosContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
