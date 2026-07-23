import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import defaultTheme from "tailwindcss/defaultTheme"

/**
 * Identidad visual de NES Web Studio.
 *
 * Paleta de marca (usar estos nombres en los componentes):
 * - carbon      #1A1815  fondo oscuro
 * - cream       #EFE9DE  fondo claro / texto sobre oscuro
 * - terracotta  #D96C4A  acento (botones, kickers, palabras clave)
 * - terracotta-deep #B84E2E  hover del acento
 * - warmgray    #8A8178  texto secundario
 *
 * Los tokens semánticos de shadcn (background, foreground, primary, etc.)
 * se definen como variables CSS en src/index.css y cambian entre secciones
 * crema (:root) y carbón (.dark).
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Paleta de marca
        carbon: "#1A1815",
        cream: "#EFE9DE",
        terracotta: {
          DEFAULT: "#D96C4A",
          deep: "#B84E2E",
        },
        warmgray: "#8A8178",

        // Tokens semánticos de shadcn/ui
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Space Grotesk para títulos, Inter para texto y UI (Google Fonts en index.html)
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Deriva lenta del resplandor terracota en las secciones oscuras
        "glow-drift": {
          "0%, 100%": { transform: "translate3d(-8%, -4%, 0) scale(1)" },
          "50%": { transform: "translate3d(6%, 5%, 0) scale(1.15)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
        "accordion-up": "accordion-up 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
        "glow-drift": "glow-drift 16s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
}

export default config
