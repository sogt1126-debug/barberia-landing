import { siteConfig, type GalleryRatio } from '../config/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

const ratioClasses: Record<GalleryRatio, string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
}

export function Gallery() {
  return (
    <section
      id="galeria"
      className="border-y border-cream/10 bg-carbon py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading title="Estilos que hablan por sí solos." />
          </div>
          <p className="text-sm leading-relaxed text-cream/70 md:col-span-5 md:text-right">
            Fotografías de referencia de los cortes más pedidos. Elige el estilo
            que te gusta y llévalo a tu próxima cita.
          </p>
        </Reveal>

        {/* Composición tipo masonry con columnas CSS */}
        <div className="mt-12 gap-5 sm:columns-2 sm:gap-6 lg:columns-3">
          {siteConfig.gallery.map((item, index) => (
            <Reveal
              key={item.id}
              variant="scale"
              delay={index * 70}
              className="mb-5 break-inside-avoid sm:mb-6"
            >
              <figure className="group relative overflow-hidden rounded-lg border border-cream/10 bg-ink">
                <SmartImage
                  src={item.image}
                  alt={item.alt}
                  className={`relative w-full ${ratioClasses[item.ratio]}`}
                  imgClassName="object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />

                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/75 to-transparent p-4 pt-14 sm:p-5 sm:pt-16">
                  <span className="flex items-center gap-2.5 font-display text-lg text-cream">
                    <span
                      className="h-px w-6 bg-gold transition-all duration-300 group-hover:w-10"
                      aria-hidden="true"
                    />
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-cream/70">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
