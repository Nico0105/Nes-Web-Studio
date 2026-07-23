"use client"

import type { ReactNode } from "react"

import { motion, useReducedMotion } from "framer-motion"

/**
 * Animación de entrada al scroll: fade + leve subida, una sola vez.
 * Usar `delay` para escalonar elementos de una misma sección.
 * Respeta prefers-reduced-motion.
 */

type RevealProps = {
  children: ReactNode
  /** Retraso en segundos (para escalonar). */
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  )
}
