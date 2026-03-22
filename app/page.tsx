import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroHome } from "@/components/hero-home"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroHome />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
