import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import type { ComponentType } from 'react'
import { siteConfig } from '../config/site'
import { whatsappUrl } from '../lib/whatsapp'
import { InstagramIcon, TikTokIcon } from './BrandIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const externalNote = ' (se abre en una pestaña nueva)'

const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
}

export function Contact() {
  const { contact } = siteConfig

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-6 border-b border-cream/10 pb-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading title="Encuéntranos." />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Ubicación */}
          <Reveal delay={0} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-cream/10 bg-carbon/60 p-7 transition duration-300 hover:border-gold/30">
              <MapPin className="size-5 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl leading-tight text-cream">
                Ubicación
              </h3>
              <address className="mt-3 text-[0.95rem] not-italic leading-relaxed text-cream/70">
                {contact.address.line1}
                <span className="block">{contact.address.line2}</span>
              </address>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-xs font-semibold text-gold transition-colors hover:text-cream"
              >
                <span
                  className="h-px w-5 bg-gold transition-all duration-300 group-hover:w-8"
                  aria-hidden="true"
                />
                <span className="uppercase tracking-[0.2em]">
                  Abrir en Google Maps
                </span>
                <span className="sr-only">{externalNote}</span>
              </a>
            </article>
          </Reveal>

          {/* Horarios */}
          <Reveal delay={80} className="h-full">
            <article className="h-full rounded-lg border border-cream/10 bg-carbon/60 p-7 transition duration-300 hover:border-gold/30">
              <Clock className="size-5 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl leading-tight text-cream">
                Horarios
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {contact.hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-baseline justify-between gap-4 border-b border-cream/5 pb-2 last:border-0"
                  >
                    <dt className="text-cream/70">{row.days}</dt>
                    <dd className="shrink-0 tabular-nums text-cream">
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>

          {/* Contacto directo */}
          <Reveal delay={160} className="h-full">
            <article className="flex h-full flex-col rounded-lg border border-cream/10 bg-carbon/60 p-7 transition duration-300 hover:border-gold/30">
              <MessageCircle className="size-5 text-gold" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl leading-tight text-cream">
                Contacto directo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Escríbenos para reservar, preguntar precios o consultar la
                disponibilidad del día.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone
                    className="size-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tabular-nums text-cream transition-colors hover:text-gold"
                  >
                    {contact.whatsapp.display}
                  </a>
                </li>
                {contact.socials.map((social) => {
                  const Icon = socialIcons[social.id]
                  return (
                    <li key={social.id} className="flex items-center gap-3">
                      <Icon
                        className="size-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream transition-colors hover:text-gold"
                      >
                        {social.handle}
                        <span className="sr-only">{externalNote}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-cream"
              >
                <span
                  className="h-px w-5 bg-gold transition-all duration-300 group-hover:w-8"
                  aria-hidden="true"
                />
                Escríbenos
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
