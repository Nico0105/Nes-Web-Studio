/**
 * Proyectos del portfolio.
 *
 * Cada proyecto se muestra dentro de un mockup de navegador simulado
 * (barra con puntitos + área 16:10 con un mini-layout ilustrativo).
 * Para agregar un proyecto, sumá un objeto a este array — la presentación
 * vive en src/components/sections/works.tsx.
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
  /** Fondo del mini-layout del mockup */
  theme: "dark" | "light"
  /** Color del bloque de acento (botón) dentro del mockup */
  accent: "terracotta" | "cream" | "carbon"
}

export const projects: Project[] = [
  {
    name: "Estudio Braga",
    industry: "Estudio jurídico",
    description:
      "Landing sobria para captar consultas, con foco en confianza y respuesta rápida.",
    domain: "estudiobraga.com.ar",
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
    name: "Klínika Dental",
    industry: "Salud",
    description:
      "Sitio institucional con turnos por WhatsApp para multiplicar las consultas.",
    domain: "klinikadental.com",
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
