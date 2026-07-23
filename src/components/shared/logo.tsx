import { cn } from "@/lib/utils"

/**
 * Logo tipográfico de la marca: "NES" con el subrayado terracota bajo la "E"
 * (el detalle distintivo del logo) y "WEB STUDIO" chico debajo.
 * Se dibuja con CSS en vez de imagen: escala nítido y hereda la tipografía.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("inline-block leading-none", className)}>
      <span className="relative block w-fit font-display text-2xl font-bold tracking-tight text-cream">
        NES
        {/* Subrayado terracota bajo la "E", como en el logo de marca */}
        <span
          aria-hidden
          className="absolute -bottom-[2px] left-[35%] h-[3px] w-[42%] bg-terracotta"
        />
      </span>
      <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.35em] text-warmgray">
        Web Studio
      </span>
    </a>
  )
}
