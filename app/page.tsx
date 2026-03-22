import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Culture } from "@/components/culture"
import { Services } from "@/components/services"
import { Academy } from "@/components/academy"
import { Works } from "@/components/works"
import { HomeServiceSection } from "@/components/home-service"
import { ProductsSection } from "@/components/products-section"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Culture />
      <Services />
      <Academy />
      <Works />
      <HomeServiceSection />
      <ProductsSection />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <Stats />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
