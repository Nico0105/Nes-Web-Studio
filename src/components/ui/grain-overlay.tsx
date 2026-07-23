import { cn } from "@/lib/utils"

/**
 * Grano de película sutil para las secciones oscuras, en la línea de los
 * fondos texturados de Cult UI. Es un SVG feTurbulence embebido como data URI:
 * cero requests, cero JS, costo de render mínimo.
 *
 * Usar dentro de un contenedor con `position: relative`.
 */

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

export function GrainOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay",
        className,
      )}
      style={{ backgroundImage: NOISE_SVG, backgroundSize: "180px 180px" }}
    />
  )
}

/**
 * Resplandor terracota difuso que deriva lentamente (animación `glow-drift`
 * definida en tailwind.config.ts). Para dar profundidad a los fondos carbón
 * sin recargar. Usar dentro de un contenedor `relative overflow-hidden`.
 */
export function TerracottaGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-[32rem] w-[32rem] rounded-full",
        "bg-terracotta/15 blur-[120px] motion-safe:animate-glow-drift",
        className,
      )}
    />
  )
}
