"use client"

import { motion } from "framer-motion"

import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { GrainOverlay } from "@/components/ui/grain-overlay"
import { process } from "@/content/site"

/**
 * Sección Proceso (fondo carbón): 3 pasos numerados unidos por un conector
 * que se "dibuja" al entrar en viewport (horizontal en desktop, vertical
 * en mobile). Los círculos tienen fondo carbón para recortar la línea.
 */
export function Process() {
  const drawTransition = {
    duration: 1.4,
    delay: 0.3,
    ease: [0.25, 1, 0.5, 1] as const,
  }

  return (
    <section
      id="proceso"
      className="dark relative overflow-hidden bg-background py-24 text-foreground md:py-32"
    >
      <GrainOverlay />

      <div className="container relative">
        <SectionHeader kicker={process.kicker} title={process.title} />

        <div className="relative mt-16">
          {/* Conector horizontal (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-cream/10 md:block" />
          <motion.div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-terracotta/60 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={drawTransition}
          />

          {/* Conector vertical (mobile) */}
          <div className="absolute bottom-8 left-7 top-2 w-px bg-cream/10 md:hidden" />
          <motion.div
            aria-hidden
            className="absolute bottom-8 left-7 top-2 w-px origin-top bg-terracotta/60 md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={drawTransition}
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.15}>
                <div className="flex gap-6 md:block">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-terracotta/50 bg-background font-display font-bold text-terracotta">
                    {step.number}
                  </div>
                  <div className="pt-2 md:pt-8">
                    <h3 className="font-display text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
