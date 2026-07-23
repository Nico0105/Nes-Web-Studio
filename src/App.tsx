import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Navbar } from "@/components/sections/navbar"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { WhyNes } from "@/components/sections/why-nes"
import { Works } from "@/components/sections/works"
import { WhatsAppFloat } from "@/components/shared/whatsapp-float"

/**
 * Landing de NES Web Studio.
 * Las secciones alternan fondo carbón (clase "dark") y crema para dar ritmo.
 * Textos: src/content/site.ts · Proyectos: src/data/projects.ts
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Works />
        <WhyNes />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
