import { MapPin, MessageCircle } from 'lucide-react'
import type { ComponentType } from 'react'
import { siteConfig } from '../config/site'
import { whatsappUrl } from '../lib/whatsapp'
import { InstagramIcon, TikTokIcon } from './BrandIcons'

const externalNote = ' (se abre en una pestaña nueva)'
const year = new Date().getFullYear()

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
}

export function Footer() {
  const { brand, contact, nav, footer } = siteConfig
  const currentYear = footer.year ?? year
  const copyright = `© ${currentYear} ${brand.fullName}. Todos los derechos reservados.`

  return (
    <footer className="border-t border-cream/10 bg-carbon pt-14 pb-24 md:pb-14">
      <h2 className="sr-only">Pie de página</h2>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <p className="font-display text-xl tracking-[0.14em] text-cream">
              {brand.name}
              <span className="mt-1.5 block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                {brand.suffix}
              </span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              {brand.tagline}
            </p>
          </div>

          {/* Navegación */}
          <nav aria-labelledby="footer-nav">
            <h3
              id="footer-nav"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
            >
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <MessageCircle
                    className="size-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="tabular-nums">{contact.whatsapp.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-gold"
                >
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span>
                    {contact.address.line1}, {contact.address.line2}
                    <span className="sr-only">{externalNote}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Síguenos
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.id]
                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-cream/70 transition-colors hover:text-gold"
                    >
                      <Icon
                        className="size-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      {social.handle}
                      <span className="sr-only">{externalNote}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Barra legal */}
        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-7 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>{copyright}</p>
          <a
            href="#privacidad"
            className="w-fit underline decoration-cream/20 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold/50"
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
