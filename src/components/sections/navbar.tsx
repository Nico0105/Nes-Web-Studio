"use client"

import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Logo } from "@/components/shared/logo"
import { Button } from "@/components/ui/button"
import { nav } from "@/content/site"
import { cn } from "@/lib/utils"

/**
 * Navbar fija, siempre en tema oscuro (funciona sobre secciones carbón y
 * crema por igual). Al scrollear gana fondo translúcido con blur.
 * En mobile, menú de pantalla completa con hamburguesa.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Fondo con blur apenas se scrollea
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Bloquea el scroll del body mientras el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || open
            ? "border-b border-cream/10 bg-carbon/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          <Logo />

          {/* Navegación desktop */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contacto">{nav.cta}</a>
            </Button>
          </nav>

          {/* Hamburguesa mobile */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream md:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/*
        Menú mobile de pantalla completa. Va FUERA del <header>: el
        backdrop-filter del header lo convertiría en containing block y
        rompería el posicionamiento fijo del panel.
      */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Principal móvil"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-carbon px-6 pb-10 pt-28 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="space-y-2">
              {nav.links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={close}
                    className="block py-4 font-display text-3xl font-bold text-cream transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            >
              <Button asChild size="lg" className="w-full">
                <a href="#contacto" onClick={close}>
                  {nav.cta}
                </a>
              </Button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
