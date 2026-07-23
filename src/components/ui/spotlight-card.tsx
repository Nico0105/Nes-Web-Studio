"use client"

import { useCallback, useRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Tarjeta con efecto spotlight que sigue el mouse, al estilo de las cards
 * interactivas de Cult UI (texture-card / minimal-card).
 *
 * Nota: el registro de Cult UI (cult-ui.com) no es accesible desde el entorno
 * remoto donde se generó este proyecto, así que el efecto se implementa acá.
 * Para usar las cards originales del registro, localmente:
 *
 *   npx shadcn@latest add https://cult-ui.com/r/minimal-card.json
 *
 * (verificá el nombre exacto en el registro con el MCP de shadcn).
 *
 * El spotlight solo se muestra en dispositivos con puntero fino (hover real);
 * en táctiles la tarjeta queda estática — prioridad mobile sin efectos rotos.
 */

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  /** Color del resplandor en formato rgba/hsla. */
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(217, 108, 74, 0.14)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Guarda la posición del mouse en variables CSS (sin re-render de React)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_20px_50px_-24px_rgba(26,24,21,0.35)]",
        className,
      )}
    >
      {/* Capa del spotlight (solo con hover real) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
