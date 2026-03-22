import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Culture } from "@/components/culture"
import { Services } from "@/components/services"
import { HomeServiceSection } from "@/components/home-service"
import { Works } from "@/components/works"
import { Testimonials } from "@/components/testimonials"
import { Academy } from "@/components/academy"
import { ProductsSection } from "@/components/products-section"
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
      
      {/* SERVICIOS SECTION - Contains: Main Services + Servicios a Domicilio + Works/Portfolio */}
      <Services />
      <HomeServiceSection />
      <Works />
      <Testimonials />
      
      {/* ACADEMIA - Independent section */}
      <Academy />
      
      {/* PRODUCTOS - Independent section */}
      <ProductsSection />
      
      {/* NOSOTROS/ABOUT - Independent section */}
      <About />
      
      {/* Additional sections */}
      <FAQ />
      <CTA />
      <Contact />
      <Stats />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
