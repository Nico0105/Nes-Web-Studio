/**
 * Proyectos del portfolio.
 *
 * Cada proyecto se muestra dentro de un mockup de navegador simulado
 * (barra con puntitos + área 16:10). Si tiene `image`, el área muestra esa
 * captura; si no, un mini-layout ilustrativo. Si tiene `url`, la tarjeta
 * entera es un link que abre el sitio real en una pestaña nueva.
 *
 * Las capturas viven en public/works/. Para actualizar una, reemplazá el
 * archivo por una captura real del sitio (mismo nombre) y listo.
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
  /** Captura del sitio (opcional), servida desde public/ */
  image?: string
  /** Fondo del mini-layout ilustrativo (si no hay imagen) */
  theme: "dark" | "light"
  /** Color del bloque de acento dentro del mini-layout */
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
    image: "/works/abogados-escolar.png",
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
    image: "/works/portfolio-nicolas-escolar.png",
    theme: "dark",
    accent: "cream",
  },
]
