import { Handshake, Scissors, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '../config/site'
import { Reveal } from './Reveal'

const icons: Record<string, LucideIcon> = {
  handshake: Handshake,
  scissors: Scissors,
  target: Target,
}

export function TrustBar() {
  return (
    <section
      aria-label="Razones para elegirnos"
      className="border-y border-cream/10 bg-carbon"
    >
      <div className="mx-auto grid max-w-7xl divide-y divide-cream/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
        {siteConfig.trust.map((item, index) => {
          const Icon = icons[item.icon]
          return (
            <Reveal
              key={item.title}
              delay={index * 70}
              className="flex items-start gap-4 py-7 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <Icon className="size-4 text-gold" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-wide text-cream">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-cream/70">
                  {item.text}
                </span>
              </span>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
