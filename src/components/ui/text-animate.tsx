"use client"

import { useMemo } from "react"

import { motion, useReducedMotion, type Variants } from "framer-motion"

import { cn } from "@/lib/utils"

/**
 * Texto animado palabra por palabra, basado en el componente `text-animate`
 * de Cult UI (MIT).
 *
 * Nota: el registro de Cult UI (cult-ui.com) no es accesible desde el entorno
 * remoto donde se generó este proyecto, así que el componente se replica acá
 * con la misma idea y API. Para reemplazarlo por el original, localmente:
 *
 *   npx shadcn@latest add https://cult-ui.com/r/text-animate.json
 *
 * (verificá el nombre exacto en el registro con el MCP de shadcn).
 *
 * El stagger se orquesta desde el elemento padre (staggerChildren): las
 * palabras arrancan recortadas por overflow-hidden, así que un observer
 * por palabra nunca las vería entrar al viewport.
 */

type AnimationType = "calmInUp" | "whipInUp" | "fadeIn"

const easing = [0.25, 1, 0.5, 1] as const

/** Variants por palabra para cada tipo de animación. */
const wordAnimations: Record<AnimationType, Variants> = {
  calmInUp: {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: easing } },
  },
  whipInUp: {
    hidden: { y: "120%", rotate: 4, opacity: 0 },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easing },
    },
  },
  fadeIn: {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
  },
}

/** Elementos motion disponibles para el tag raíz. */
const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const

type TextAnimateProps = {
  /** Texto a animar. Los saltos de línea (\n) separan bloques. */
  text: string
  type?: AnimationType
  /** Retraso inicial en segundos antes de la primera palabra. */
  delay?: number
  /** Separación entre palabras, en segundos. */
  stagger?: number
  /** Palabra a resaltar (se compara incluyendo puntuación). */
  highlight?: string
  highlightClassName?: string
  /** Si es true, la animación arranca cuando el texto entra al viewport. */
  startOnView?: boolean
  className?: string
  as?: keyof typeof motionTags
}

export function TextAnimate({
  text,
  type = "calmInUp",
  delay = 0,
  stagger = 0.045,
  highlight,
  highlightClassName = "text-terracotta",
  startOnView = false,
  className,
  as: Tag = "h1",
}: TextAnimateProps) {
  const shouldReduceMotion = useReducedMotion()
  const lines = useMemo(() => text.split("\n").map((l) => l.split(" ")), [text])

  // Con "reducir movimiento" activado, se muestra el texto estático.
  if (shouldReduceMotion) {
    return (
      <Tag className={className}>
        {lines.map((words, i) => (
          <span key={i} className="block">
            {words.map((word, j) => (
              <span
                key={j}
                className={cn(word === highlight && highlightClassName)}
              >
                {word}{" "}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    )
  }

  const MotionTag = motionTags[Tag]

  // El padre orquesta el escalonado de todas las palabras
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  }

  return (
    <MotionTag
      className={className}
      aria-label={text.replace("\n", " ")}
      variants={containerVariants}
      initial="hidden"
      {...(startOnView
        ? {
            whileInView: "visible" as const,
            viewport: { once: true, margin: "-48px" },
          }
        : { animate: "visible" as const })}
    >
      {lines.map((words, i) => (
        <span key={i} className="block [text-wrap:balance]">
          {words.map((word, j) => (
            // Wrapper con overflow oculto: la palabra "emerge" desde abajo
            <span
              key={j}
              className="inline-block overflow-hidden pb-1 align-bottom"
            >
              <motion.span
                className={cn(
                  "inline-block will-change-transform",
                  word === highlight && highlightClassName,
                )}
                variants={wordAnimations[type]}
                aria-hidden
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </MotionTag>
  )
}
