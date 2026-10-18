import { siteConfig } from '../config/site'
import { Reveal } from './Reveal'
import { SmartImage } from './SmartImage'
import { WhatsAppButton } from './WhatsAppButton'

export function CallToAction() {
  const { cta, contact } = siteConfig

  return (
    <section className="relative isolate flex min-h-[26rem] items-center overflow-hidden border-y border-cream/10 md:min-h-[34rem]">
      <SmartImage
        src={cta.image}
        alt={cta.imageAlt}
        className="absolute inset-0 h-full w-full"
        imgClassName="object-cover object-center brightness-110"
      />
      <div className="absolute inset-0 bg-ink/72" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(11,11,11,0.75)_100%)]"
        aria-hidden="true"
      />

      {/* Detalle dorado */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8 md:py-20">
        <Reveal variant="up">
          <h2 className="font-display text-[clamp(2.1rem,6vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.015em] text-balance text-cream">
            {cta.title}
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
            {cta.subtitle}
          </p>
        </Reveal>

        <Reveal delay={180} className="mt-10 flex justify-center">
          <WhatsAppButton
            label={cta.buttonLabel}
            message={contact.whatsapp.bookingMessage}
            className="px-8 py-4"
          />
        </Reveal>
      </div>
    </section>
  )
}
