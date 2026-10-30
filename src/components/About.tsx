import { Check } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function About() {
  const { about } = siteConfig

  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Fotografía del local */}
        <Reveal variant="scale">
          <SmartImage
            src={about.image}
            alt={about.imageAlt}
            className="relative aspect-[4/5] w-full rounded-lg border border-cream/10"
            imgClassName="object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>

        {/* Texto */}
        <Reveal delay={80}>
          <SectionHeading title={about.title} />

          <div className="mt-7 space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[0.95rem] leading-relaxed text-cream/70"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 space-y-4 border-t border-cream/10 pt-8">
            {about.highlights.map((highlight, index) => (
              <Reveal
                as="li"
                key={highlight}
                delay={140 + index * 70}
                className="flex items-start gap-3.5"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Check className="size-3 text-gold" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-cream/70">
                  {highlight}
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
