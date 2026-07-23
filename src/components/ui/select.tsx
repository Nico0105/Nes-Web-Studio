import * as React from "react"

import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Select nativo estilizado (en vez del Select de Radix a propósito):
 * en celulares abre el picker del sistema, que es más usable — y la
 * prioridad de esta página es mobile.
 */
const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "flex h-12 w-full appearance-none rounded-lg border border-input bg-background/60 px-4 py-2 pr-10 text-base text-foreground transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  )
})
Select.displayName = "Select"

export { Select }
