import { siteConfig } from '../config/site'
import { formatPrice, serviceMessage } from '../lib/whatsapp'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'
import { WhatsAppButton } from './WhatsAppButton'

export function Services() {
  const { services, pricing } = siteConfig

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Cabecera editorial: título a la izquierda, texto a la derecha */}
        <Reveal className="grid gap-8 border-b border-cream/10 pb-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading title="Precios claros. Trabajo impecable." />
          </div>
          <p className="text-sm leading-relaxed text-cream/70 md:col-span-5 md:text-right">
            Elige el servicio que necesitas y consúltanos la disponibilidad
            directo por WhatsApp. Sin pagos en línea: reservas y detalles se
            acuerdan contigo en el chat.
          </p>
        </Reveal>

        {/* Tarjetas */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 80}
              className="h-full"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-cream/10 bg-carbon/60 transition duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-carbon">
                {/* Foto del servicio: entra en escena al pasar el cursor */}
                <div className="relative aspect-[3/2] transition duration-500 ease-out group-hover:scale-[1.05] group-hover:saturate-100 group-hover:brightness-110 brightness-90 saturate-[0.85]">
                  <SmartImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-carbon to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight text-cream">
                    {service.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-cream/10 pt-5">
                      <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">
                        {pricing.label}
                      </span>
                      <span className="mt-1 block font-display text-4xl text-gold">
                        {formatPrice(service.price)}
                      </span>
                    </div>

                    <WhatsAppButton
                      label="Consultar por WhatsApp"
                      message={serviceMessage(service.name)}
                      variant="outline"
                      className="mt-5 w-full px-4 py-3"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
