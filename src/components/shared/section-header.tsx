import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

/**
 * Encabezado editorial de sección: kicker terracota + título grande.
 * Mantiene consistente el ritmo tipográfico entre secciones.
 */

type SectionHeaderProps = {
  kicker: string
  title: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  kicker,
  title,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="kicker">{kicker}</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
