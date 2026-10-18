import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { siteConfig } from '../config/site'
import { whatsappUrl } from '../lib/whatsapp'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { WhatsAppButton } from './WhatsAppButton'

const externalNote = ' (se abre en una pestaña nueva)'

/** Bloque editorial de la política: título serif numerado + texto. */
function Apartado({
  num,
  titulo,
  children,
}: {
  num: string
  titulo: string
  children: ReactNode
}) {
  return (
    <Reveal>
      <h3 className="font-display text-2xl leading-tight text-cream">
        {num}. {titulo}
      </h3>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-cream/70">
        {children}
      </div>
    </Reveal>
  )
}

/**
 * Política de privacidad (vista `#privacidad`).
 * Describe el funcionamiento real del sitio: no recoge datos
 * personales (sin formularios, cookies ni analíticas). Si en el
 * futuro se añaden herramientas que sí traten datos, actualiza
 * este texto y la fecha en `siteConfig.legal`.
 */
export function PoliticaDePrivacidad() {
  const { brand, contact, legal } = siteConfig

  // Al entrar en la vista, siempre desde arriba.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="privacidad" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* max-w-xl ≈ 576px: medida de lectura cómoda (65–75 caracteres). */}
        <div className="mx-auto max-w-xl">
          <Reveal>
            <SectionHeading title="Política de privacidad." />
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">
              Última actualización: {legal.politicaActualizada}
            </p>
            <p className="mt-8 text-base leading-relaxed text-cream/70">
              En resumen: este sitio funciona sin recopilar datos personales.
              No hay formularios, cuentas de usuario, cookies de análisis ni
              publicidad. A continuación te contamos los detalles.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            <Apartado num="1" titulo="Quién está a cargo">
              <p>
                El responsable de este sitio es {brand.fullName}, con domicilio
                en {contact.address.line1}, {contact.address.line2}. Puedes
                contactarnos por WhatsApp al{' '}
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular-nums text-cream underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                >
                  {contact.whatsapp.display}
                </a>
                .
              </p>
            </Apartado>

            <Apartado num="2" titulo="Qué datos recoge este sitio">
              <p>
                Ninguno directamente. La página no contiene formularios de
                contacto, registros de usuario, cookies de seguimiento, scripts
                de analíticas ni píxeles publicitarios, y no guarda información
                en tu navegador.
              </p>
            </Apartado>

            <Apartado num="3" titulo="Cuando nos escribes por WhatsApp">
              <p>
                Los botones de reserva abren WhatsApp, un servicio de Meta
                Platforms. Tu mensaje llega directamente al negocio y se usa
                únicamente para responderte: reservas, precios y disponibilidad.
                Meta procesa los datos de la conversación según su propia
                política de privacidad. El negocio utiliza tus datos solo para
                atenderte y no los comparte con terceros distintos de la
                plataforma de mensajería.
              </p>
              <p>
                <a
                  href="https://www.whatsapp.com/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                >
                  Ver la política de privacidad de WhatsApp
                  <span className="sr-only">{externalNote}</span>
                </a>
              </p>
            </Apartado>

            <Apartado num="4" titulo="Enlaces a otros sitios">
              <p>
                El sitio enlaza Google Maps, Instagram y TikTok. Al tocarlos
                abandonas esta página y se aplica la política del servicio
                correspondiente. Todos estos enlaces se abren en una pestaña
                nueva.
              </p>
            </Apartado>

            <Apartado num="5" titulo="Cookies y almacenamiento">
              <p>
                Este sitio no utiliza cookies propias ni de terceros, y no
                almacena datos de navegación en tu equipo. Las tipografías y
                fotografías se sirven desde el propio dominio, sin peticiones a
                otros proveedores.
              </p>
            </Apartado>

            <Apartado num="6" titulo="Tus derechos">
              <p>
                Conforme a la Ley N° 29733 de Protección de Datos Personales
                (Perú) y su reglamento, puedes solicitar acceso, rectificación,
                cancelación u oposición sobre cualquier dato que nos hayas
                enviado, escribiéndonos por WhatsApp. Ten en cuenta que los
                mensajes enviados por WhatsApp quedan también almacenados en la
                aplicación según la política de Meta.
              </p>
            </Apartado>

            <Apartado num="7" titulo="Cambios en esta política">
              <p>
                Podemos actualizar esta página si cambia el funcionamiento del
                sitio o los datos del negocio. La fecha de la última revisión
                aparece al inicio del documento.
              </p>
            </Apartado>
          </div>

          <Reveal
            delay={0}
            className="mt-14 flex flex-wrap items-center gap-4 border-t border-cream/10 pt-10"
          >
            <WhatsAppButton
              label="Escríbenos si tienes dudas"
              message="Hola, tengo una duda sobre la política de privacidad del sitio."
            />
            <a
              href="#inicio"
              className="group inline-flex items-center gap-2.5 rounded-md border border-cream/25 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream transition duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold"
            >
              Volver a la página
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
