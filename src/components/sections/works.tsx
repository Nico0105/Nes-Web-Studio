import { Reveal } from "@/components/motion/reveal"
import { SectionHeader } from "@/components/shared/section-header"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { works } from "@/content/site"
import { projects, type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

/**
 * Sección Trabajos (fondo crema): grid de proyectos dentro de un mockup
 * de navegador simulado (barra con puntitos + área 16:10 con mini-layout).
 * Los proyectos se editan en src/data/projects.ts.
 */

const accentClasses: Record<Project["accent"], string> = {
  terracotta: "bg-terracotta",
  cream: "bg-cream",
  carbon: "bg-carbon",
}

/** Mockup de navegador con un mini-layout ilustrativo del proyecto. */
function BrowserMockup({ project }: { project: Project }) {
  const dark = project.theme === "dark"
  // Color de las barras del esqueleto según el fondo del lienzo
  const bar = dark ? "bg-cream/20" : "bg-carbon/10"

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Barra del navegador: puntitos + dominio */}
      <div className="flex items-center gap-3 border-b border-border bg-foreground/[0.04] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="rounded-full bg-foreground/5 px-3 py-0.5 text-[10px] tracking-wide text-muted-foreground">
          {project.domain}
        </span>
      </div>

      {/* Lienzo 16:10 con mini-layout del sitio */}
      <div
        aria-hidden
        className={cn(
          "flex aspect-[16/10] flex-col justify-between p-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]",
          dark ? "bg-carbon" : "bg-cream",
        )}
      >
        {/* Mini navbar */}
        <div className="flex items-center justify-between">
          <span className={cn("h-2 w-8 rounded-full", accentClasses[project.accent])} />
          <div className="flex gap-2">
            <span className={cn("h-1.5 w-6 rounded-full", bar)} />
            <span className={cn("h-1.5 w-6 rounded-full", bar)} />
            <span className={cn("h-1.5 w-6 rounded-full", bar)} />
          </div>
        </div>
        {/* Mini hero: titular + botón */}
        <div>
          <span className={cn("block h-3.5 w-3/4 rounded-full", bar)} />
          <span className={cn("mt-2 block h-3.5 w-1/2 rounded-full", bar)} />
          <span
            className={cn(
              "mt-4 block h-6 w-20 rounded-full",
              accentClasses[project.accent],
            )}
          />
        </div>
      </div>
    </div>
  )
}

export function Works() {
  return (
    <section id="trabajos" className="bg-background py-24 text-foreground md:py-32">
      <div className="container">
        <SectionHeader kicker={works.kicker} title={works.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.12}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-5 sm:p-6">
                  <BrowserMockup project={project} />
                  <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-warmgray">
                      {project.industry}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
