# NES Web Studio — Landing

Landing page del estudio de diseño web **NES Web Studio**.
Premium, minimalista y editorial: fondos que alternan carbón y crema, acento terracota y prioridad absoluta al mobile.

## Stack

- [React](https://react.dev) + [Vite](https://vite.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) (v3, config en `tailwind.config.ts`)
- [shadcn/ui](https://ui.shadcn.com) (tokens en `src/index.css`, config del CLI en `components.json`)
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- Componentes estilo [Cult UI](https://cult-ui.com): texto animado, tarjetas spotlight, grano/resplandor de fondo

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # type-check + build de producción
npm run preview  # sirve el build
```

## Editar contenido (sin tocar componentes)

| Qué                                   | Dónde                     |
| ------------------------------------- | ------------------------- |
| Todos los textos, links y contacto    | `src/content/site.ts`     |
| Proyectos del portfolio               | `src/data/projects.ts`    |
| Paleta y tipografías                  | `tailwind.config.ts`      |
| Variables CSS de shadcn (temas)       | `src/index.css`           |

**Antes de publicar:** en `src/content/site.ts` reemplazá el número de WhatsApp
(`contact.whatsapp`) y los links de Instagram/TikTok, marcados con ⚠️.

## Sobre los componentes de Cult UI

Este proyecto se generó en un entorno remoto cuya política de red **bloquea
`cult-ui.com` y `ui.shadcn.com`**, así que los componentes del registro no se
pudieron instalar con el CLI. En su lugar, `src/components/ui/` incluye
versiones locales equivalentes (`text-animate`, `spotlight-card`,
`grain-overlay`) comentadas y con la misma idea de API.

El MCP de shadcn ya quedó configurado en `.mcp.json`. Para usar los
componentes originales del registro, localmente:

```bash
# listar/consultar el registro (o usar las herramientas del MCP en Claude Code)
npx shadcn@latest search @cult-ui
npx shadcn@latest view @cult-ui/text-animate

# instalar (verificá los nombres exactos en el registro)
npx shadcn@latest add @cult-ui/text-animate
```

y reemplazá los imports correspondientes.

## Estructura

```
src/
├── content/site.ts          # Textos centralizados
├── data/projects.ts         # Proyectos del portfolio
├── components/
│   ├── sections/            # Navbar, Hero, Servicios, Proceso, Trabajos,
│   │                        # Por qué NES, FAQ, CTA, Footer
│   ├── ui/                  # shadcn/ui + componentes estilo Cult UI
│   ├── shared/              # Logo, encabezados, íconos, botón de WhatsApp
│   └── motion/reveal.tsx    # Animación de entrada al scroll
├── lib/                     # cn() y helper de WhatsApp
└── index.css                # Tokens de shadcn (temas carbón/crema)
```
