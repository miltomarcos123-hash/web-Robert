import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Culture } from "@/components/culture"
import { Services } from "@/components/services"
import { Ritual } from "@/components/ritual"
import { Works } from "@/components/works"
import { Academy } from "@/components/academy"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Culture />
      <Services />
      <Ritual />
      <Works />
      <Academy />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
