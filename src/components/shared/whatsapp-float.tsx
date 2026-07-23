"use client"

import { motion } from "framer-motion"

import { WhatsAppIcon } from "@/components/shared/social-icons"
import { whatsappUrl } from "@/lib/whatsapp"

/**
 * Botón flotante de WhatsApp con el mensaje pre-cargado (editable en
 * src/content/site.ts). Respeta el safe-area inferior en iOS.
 */
export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 20 }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  )
}
