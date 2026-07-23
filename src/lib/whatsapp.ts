import { contact } from "@/content/site"

/** Arma la URL de WhatsApp con el mensaje pre-cargado. */
export function whatsappUrl(message: string = contact.whatsappMessage) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}
