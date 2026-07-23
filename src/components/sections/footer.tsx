import { Logo } from "@/components/shared/logo"
import { InstagramIcon, TikTokIcon } from "@/components/shared/social-icons"
import { contact, footer } from "@/content/site"

/** Footer (carbón): logo, redes, email y copyright. */
export function Footer() {
  const socials = [
    { label: "Instagram", href: contact.instagram, Icon: InstagramIcon },
    { label: "TikTok", href: contact.tiktok, Icon: TikTokIcon },
  ]

  return (
    <footer className="dark border-t border-cream/10 bg-background py-14 text-foreground">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">{footer.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="ml-2 text-sm text-cream/70 underline-offset-4 transition-colors hover:text-terracotta hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-cream/10 pt-6 text-sm text-muted-foreground">
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
