import { Fingerprint, MessagesSquare, Target, Zap } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { GrainOverlay } from "@/components/ui/grain-overlay"
import { why } from "@/content/site"

/**
 * Sección Por qué NES (fondo carbón): 4 diferenciales con ícono.
 * Los íconos se mapean por índice a los puntos definidos en el contenido.
 */
const icons = [Fingerprint, Zap, Target, MessagesSquare]

export function WhyNes() {
  return (
    <section className="dark relative overflow-hidden bg-background py-24 text-foreground md:py-32">
      <GrainOverlay />

      <div className="container relative">
        <SectionHeader kicker={why.kicker} title={why.title} />

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {why.points.map((point, i) => {
            const Icon = icons[i] ?? Fingerprint
            return (
              <Reveal key={point.title} delay={(i % 2) * 0.12}>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cream/10 bg-cream/5 text-terracotta">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
