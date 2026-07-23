import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { faq } from "@/content/site"

/** Sección FAQ (fondo crema): encabezado a la izquierda, acordeón a la derecha. */
export function Faq() {
  return (
    <section id="faq" className="bg-background py-24 text-foreground md:py-32">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeader kicker={faq.kicker} title={faq.title} />

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
