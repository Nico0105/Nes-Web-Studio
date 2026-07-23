"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { GrainOverlay, TerracottaGlow } from "@/components/ui/grain-overlay"
import { TextAnimate } from "@/components/ui/text-animate"
import { hero } from "@/content/site"

/** Entrada escalonada de kicker, subtítulo y botones alrededor del título animado. */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
  }),
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="dark relative flex min-h-[100svh] items-center overflow-hidden bg-background text-foreground"
    >
      {/* Fondo: resplandor terracota + grano de película */}
      <TerracottaGlow className="-top-40 right-[-15%]" />
      <TerracottaGlow className="bottom-[-30%] left-[-20%] opacity-60 [animation-delay:-8s]" />
      <GrainOverlay />

      <div className="container relative pb-24 pt-36">
        <motion.p
          className="kicker"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          {hero.kicker}
        </motion.p>

        {/* Título animado palabra por palabra, con "clientes." en terracota */}
        <TextAnimate
          text={hero.titleLines.join("\n")}
          highlight={hero.highlight}
          type="calmInUp"
          delay={0.25}
          className="mt-6 max-w-[66rem] font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-8xl"
        />

        <motion.p
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.85}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Button asChild size="lg">
            <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
