import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { services } from "@/content/site"

/** Sección Servicios (fondo crema): 3 tarjetas con spotlight al hover. */
export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 text-foreground md:py-32">
      <div className="container">
        <SectionHeader kicker={services.kicker} title={services.title} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.items.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.12}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-8">
                  {/* Número grande y tenue, estilo editorial */}
                  <span
                    aria-hidden
                    className="font-display text-6xl font-bold leading-none text-foreground/[0.08]"
                  >
                    {service.number}
                  </span>
                  <h3 className="mt-8 font-display text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
