import { ArrowRight, ChevronDown } from 'lucide-react'
import { siteConfig } from '../config/site'
import { whatsappUrl } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { SmartImage } from './SmartImage'
import { WhatsAppButton } from './WhatsAppButton'

export function Hero() {
  const { hero, brand, contact } = siteConfig
  // La segunda línea es opcional: si un cliente define un solo título,
  // no se pinta una segunda línea (evita un punto dorado suelto en pantalla).
  const [firstLine, secondLine] = hero.titleLines

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh items-center overflow-hidden"
    >
      {/* Fotografía de fondo (asienta lentamente al cargar) */}
      <SmartImage
        src={hero.image}
        alt={hero.imageAlt}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full"
        imgClassName="hero-settle object-cover object-center brightness-110"
      />

      {/* Capas de legibilidad */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/45"
        aria-hidden="true"
      />

      {/* Marco interior: transmite exclusividad */}
      <div
        className="pointer-events-none absolute inset-3 border border-cream/10 md:inset-5"
        aria-hidden="true"
      >
        <span className="absolute -left-px -top-px size-5 border-l-2 border-t-2 border-gold" />
        <span className="absolute -bottom-px -right-px size-5 border-b-2 border-r-2 border-gold" />
      </div>

      {/* Texto vertical de marca */}
      <span
        className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 text-xs font-semibold uppercase tracking-[0.4em] text-cream/50 lg:block"
        style={{ writingMode: 'vertical-rl' }}
        aria-hidden="true"
      >
        {brand.fullName}
      </span>

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 md:pb-32 md:pt-40">
        <div className="max-w-3xl">
          {/* Momento autoral: el titular sube enmascarado línea a línea */}
          <h1 className="font-display text-[clamp(2.9rem,9vw,6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cream">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-line block">{firstLine}</span>
            </span>
            {secondLine && (
              <span className="block overflow-hidden pb-[0.06em]">
                <span
                  className="hero-line block italic"
                  style={{ animationDelay: '140ms' }}
                >
                  {secondLine.replace(/\.$/, '')}
                  <span className="text-gold">.</span>
                </span>
              </span>
            )}
          </h1>

          <p className="hero-in mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg md:max-w-2xl" style={{ animationDelay: '360ms' }}>
            {hero.subtitle}
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '460ms' }}>
            <WhatsAppButton
              label={hero.primaryCta}
              message={contact.whatsapp.bookingMessage}
            />

            <a
              href="#servicios"
              className="group inline-flex items-center gap-2.5 rounded-md border border-cream/25 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold"
            >
              {hero.secondaryCta}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* El número junto al CTA principal (respaldo para quien no usa WhatsApp) */}
          <p className="hero-in mt-6 flex items-center gap-2.5 text-sm text-cream/60" style={{ animationDelay: '560ms' }}>
            <WhatsAppIcon className="size-4 shrink-0 text-gold" />
            <span>
              Guarda nuestro número:{' '}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tabular-nums text-cream underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
              >
                {contact.whatsapp.display}
              </a>
            </span>
          </p>
        </div>

        {/* Pista de scroll */}
        <a
          href="#servicios"
          className="group absolute bottom-8 left-5 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream/60 transition-colors hover:text-gold sm:left-8 lg:flex"
        >
          {hero.scrollHint}
          <span
            className="relative h-10 w-px overflow-hidden bg-cream/20"
            aria-hidden="true"
          >
            <span className="absolute inset-x-0 top-0 h-4 animate-scroll-line bg-gold" />
          </span>
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
