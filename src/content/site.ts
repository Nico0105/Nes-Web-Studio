/**
 * Todos los textos de la página, centralizados.
 * Para cambiar cualquier copy, editá este archivo — no hace falta tocar componentes.
 *
 * Los proyectos del portfolio viven en src/data/projects.ts.
 */

export const contact = {
  /**
   * Número de WhatsApp en formato internacional, sin "+", espacios ni guiones.
   * Ej.: 5491122334455 (54 = Argentina, 9 = celular, 11 = área).
   * ⚠️ Reemplazar por el número real antes de publicar.
   */
  whatsapp: "5491153278545",
  /** Mensaje pre-cargado del botón flotante y los CTAs de WhatsApp. */
  whatsappMessage:
    "¡Hola! Vi la página de NES Web Studio y quiero consultar por mi web.",
  email: "nicogabescolar@gmail.com",
  instagram: "https://instagram.com/nes.webstudio", // 
  tiktok: "https://tiktok.com/@nes.webstudio", //

export const nav = {
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Trabajos", href: "#trabajos" },
  ],
  cta: "Consulta gratis",
}

export const hero = {
  kicker: "Estudio de diseño web",
  /** El título se anima palabra por palabra; "clientes." se pinta en terracota. */
  titleLines: ["Tu web debería traerte clientes.", "No solo verse linda."],
  highlight: "clientes.",
  subtitle:
    "Diseño páginas web y landing pages para negocios, profesionales y marcas que quieren convertir visitas en clientes.",
  primaryCta: { label: "Quiero mi web", href: "#contacto" },
  secondaryCta: { label: "Ver trabajos", href: "#trabajos" },
}

export const services = {
  kicker: "Qué hago",
  title: "Webs pensadas para vender",
  items: [
    {
      number: "01",
      title: "Landing Page",
      description:
        "Una sola página con un objetivo claro: que te escriban. Ideal para lanzar un servicio, campaña o producto sin vueltas.",
    },
    {
      number: "02",
      title: "Sitio Web",
      description:
        "Tu negocio completo online: quién sos, qué hacés y por qué elegirte. Varias secciones, un solo mensaje coherente.",
    },
    {
      number: "03",
      title: "Tienda Online",
      description:
        "Catálogo, carrito y pagos integrados para vender las 24 horas. Pensada para que comprar sea fácil desde el celular.",
    },
  ],
}

export const process = {
  kicker: "Cómo trabajamos",
  title: "Simple y sin vueltas",
  steps: [
    {
      number: "01",
      title: "Charlamos",
      description:
        "Me contás qué hacés, a quién le vendés y qué querés lograr. Sin tecnicismos: una charla de 20 minutos alcanza.",
    },
    {
      number: "02",
      title: "Diseño",
      description:
        "Armo una propuesta a medida y la ajustamos juntos hasta que represente tu negocio y empuje a la acción.",
    },
    {
      number: "03",
      title: "Publicamos",
      description:
        "Tu web queda online, rápida y lista para recibir clientes. Te muestro cómo funciona todo y quedo cerca para lo que surja.",
    },
  ],
}

export const works = {
  kicker: "Trabajos",
  title: "Proyectos que diseñamos",
}

export const why = {
  kicker: "Por qué NES",
  title: "Sin plantillas, sin humo",
  points: [
    {
      title: "Diseño a medida",
      description:
        "Nada de plantillas recicladas: tu web se diseña desde cero para tu negocio, tu público y tu forma de vender.",
    },
    {
      title: "Rápidas y mobile-first",
      description:
        "Optimizadas para cargar al instante y verse impecables en el celular, que es donde llega casi todo tu tráfico.",
    },
    {
      title: "Pensadas para convertir",
      description:
        "Cada sección, texto y botón tiene un trabajo: llevar a la visita a escribirte. Diseño lindo, sí — pero con intención.",
    },
    {
      title: "Trato directo",
      description:
        "Hablás siempre con quien diseña tu web. Sin intermediarios, sin telefonos rotos, sin esperar días por una respuesta.",
    },
  ],
}

export const faq = {
  kicker: "Preguntas frecuentes",
  title: "Lo que siempre me preguntan",
  items: [
    {
      question: "¿Cuánto tarda una web?",
      answer:
        "Una landing page suele estar lista en 1 a 2 semanas; un sitio completo, entre 3 y 4. El tiempo exacto depende del contenido y de qué tan rápido vayamos ajustando la propuesta juntos.",
    },
    {
      question: "¿La web queda a mi nombre?",
      answer:
        "Sí, siempre. El dominio, el hosting y los accesos quedan a tu nombre desde el primer día. La web es tuya: si mañana querés seguir con otra persona, te llevás todo sin ataduras.",
    },
    {
      question: "¿Puedo hacer cambios después?",
      answer:
        "Claro. Después de publicar tenés un período de ajustes incluido, y para cambios más adelante podés escribirme cuando quieras: los resolvemos puntualmente o con un plan de mantenimiento simple.",
    },
    {
      question: "¿Necesito landing o sitio completo?",
      answer:
        "Si tenés un objetivo puntual — lanzar un servicio, una campaña, captar consultas — una landing alcanza y sobra. Si necesitás contar más (equipo, servicios, trayectoria), va un sitio completo. Lo definimos juntos en la primera charla, sin compromiso.",
    },
    {
      question: "¿Cómo son los pagos?",
      answer:
        "Simple: un anticipo para reservar el lugar y arrancar, y el resto al publicar la web. Podés pagar por transferencia y, si lo necesitás, lo dividimos en cuotas.",
    },
  ],
}

export const cta = {
  kicker: "Contacto",
  title: "¿Empezamos tu web?",
  subtitle: "Contame sobre tu proyecto y te respondo en menos de 24 horas.",
  form: {
    nameLabel: "Nombre",
    namePlaceholder: "¿Cómo te llamás?",
    contactLabel: "Email o WhatsApp",
    contactPlaceholder: "Para poder responderte",
    typeLabel: "Tipo de proyecto",
    typeOptions: [
      "Landing page",
      "Sitio web",
      "Tienda online",
      "Todavía no sé",
    ],
    messageLabel: "Mensaje",
    messagePlaceholder:
      "Contame de tu negocio y qué necesitás. Con dos líneas alcanza.",
    submit: "Enviar por WhatsApp",
    note: "El mensaje se abre en tu WhatsApp: lo revisás y lo mandás vos.",
  },
}

export const footer = {
  tagline: "Diseño web que convierte.",
  copyright: "© 2026 NES Web Studio",
}
