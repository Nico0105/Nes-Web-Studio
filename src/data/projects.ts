/**
 * Proyectos del portfolio.
 *
 * Cada proyecto se muestra dentro de un mockup de navegador simulado
 * (barra con puntitos + área 16:10 con un mini-layout ilustrativo).
 * Si tiene `url`, la tarjeta entera es un link que abre el sitio real
 * en una pestaña nueva. Para agregar un proyecto, sumá un objeto a este
 * array — la presentación vive en src/components/sections/works.tsx.
 */

export type Project = {
  /** Nombre del proyecto */
  name: string
  /** Rubro del cliente */
  industry: string
  /** Una línea de descripción */
  description: string
  /** Dominio que se muestra en la barra del navegador simulado */
  domain: string
  /** URL del sitio online (opcional): convierte la tarjeta en link */
  url?: string
  /** Fondo del mini-layout del mockup */
  theme: "dark" | "light"
  /** Color del bloque de acento (botón) dentro del mockup */
  accent: "terracotta" | "cream" | "carbon"
}

export const projects: Project[] = [
  {
    name: "Abogados Escolar",
    industry: "Estudio jurídico",
    description:
      "Landing sobria para un estudio jurídico, pensada para generar consultas con respuesta rápida.",
    domain: "abogados-escolar.vercel.app",
    url: "https://abogados-escolar.vercel.app/#inicio",
    theme: "dark",
    accent: "terracotta",
  },
  {
    name: "Café Nômade",
    industry: "Cafetería de especialidad",
    description:
      "Sitio cálido con carta digital y mapa, pensado para el tráfico de Instagram.",
    domain: "cafenomade.ar",
    theme: "light",
    accent: "carbon",
  },
  {
    name: "Portfolio Nicolás Escolar",
    industry: "Desarrollador web",
    description:
      "Portfolio personal con proyectos, stack y contacto directo, en una sola página.",
    domain: "portfolio-nicolas-escolar.vercel.app",
    url: "https://portfolio-nicolas-escolar-seven.vercel.app/#top",
    theme: "dark",
    accent: "cream",
  },
  {
    name: "Mora Cerámica",
    industry: "Tienda online",
    description:
      "E-commerce artesanal con catálogo simple y checkout optimizado para celular.",
    domain: "moraceramica.shop",
    theme: "light",
    accent: "terracotta",
  },
]
