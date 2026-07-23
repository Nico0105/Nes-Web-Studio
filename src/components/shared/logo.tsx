import { cn } from "@/lib/utils"

/** Logo tipográfico: "NES" grande + "WEB STUDIO" chico debajo. */
export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("inline-block leading-none", className)}>
      <span className="block font-display text-2xl font-bold tracking-tight text-cream">
        NES
      </span>
      <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.35em] text-warmgray">
        Web Studio
      </span>
    </a>
  )
}
