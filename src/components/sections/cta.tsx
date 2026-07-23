"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { GrainOverlay, TerracottaGlow } from "@/components/ui/grain-overlay"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { TextAnimate } from "@/components/ui/text-animate"
import { Textarea } from "@/components/ui/textarea"
import { cta } from "@/content/site"
import { whatsappUrl } from "@/lib/whatsapp"

/**
 * CTA final (fondo carbón con acento terracota): formulario validado que,
 * al enviarse, abre WhatsApp con el mensaje pre-cargado. Así no hace falta
 * backend y la conversación sigue donde el cliente ya está: WhatsApp.
 */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?[\d\s().-]{8,}$/

const schema = z.object({
  name: z.string().trim().min(2, "Contame tu nombre"),
  contact: z
    .string()
    .trim()
    .min(5, "Dejame un email o un WhatsApp")
    .refine(
      (value) => emailRegex.test(value) || phoneRegex.test(value),
      "Ingresá un email o un número de WhatsApp válido",
    ),
  projectType: z.string().min(1, "Elegí una opción"),
  message: z.string().trim().min(10, "Contame un poco más de tu proyecto"),
})

type FormValues = z.infer<typeof schema>

/** Mensaje de error accesible debajo de cada campo. */
function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="text-sm text-terracotta">
      {message}
    </p>
  )
}

export function Cta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: cta.form.typeOptions[0] },
  })

  // Arma el mensaje de WhatsApp con los datos del formulario y lo abre
  const onSubmit = (data: FormValues) => {
    const text = [
      `¡Hola! Soy ${data.name}.`,
      `Proyecto: ${data.projectType}`,
      `Contacto: ${data.contact}`,
      "",
      data.message,
    ].join("\n")
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="contacto"
      className="dark relative overflow-hidden bg-background py-24 text-foreground md:py-32"
    >
      <TerracottaGlow className="left-1/2 top-[-20%] -translate-x-1/2" />
      <GrainOverlay />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="kicker">{cta.kicker}</p>
          </Reveal>
          <TextAnimate
            text={cta.title}
            type="whipInUp"
            startOnView
            highlight="web?"
            as="h2"
            className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {cta.subtitle}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mx-auto mt-12 max-w-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{cta.form.nameLabel}</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder={cta.form.namePlaceholder}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  {...register("name")}
                />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">{cta.form.contactLabel}</Label>
                <Input
                  id="contact"
                  autoComplete="email"
                  placeholder={cta.form.contactPlaceholder}
                  aria-invalid={!!errors.contact}
                  aria-describedby="contact-error"
                  {...register("contact")}
                />
                <FieldError id="contact-error" message={errors.contact?.message} />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="projectType">{cta.form.typeLabel}</Label>
              <Select
                id="projectType"
                aria-invalid={!!errors.projectType}
                aria-describedby="projectType-error"
                {...register("projectType")}
              >
                {cta.form.typeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              <FieldError
                id="projectType-error"
                message={errors.projectType?.message}
              />
            </div>

            <div className="mt-5 space-y-2">
              <Label htmlFor="message">{cta.form.messageLabel}</Label>
              <Textarea
                id="message"
                placeholder={cta.form.messagePlaceholder}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                {...register("message")}
              />
              <FieldError id="message-error" message={errors.message?.message} />
            </div>

            <Button type="submit" size="lg" className="mt-7 w-full">
              {cta.form.submit}
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {cta.form.note}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
