import { useEffect, useState } from 'react'
import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { Contact } from './components/Contact'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PoliticaDePrivacidad } from './components/PoliticaDePrivacidad'
import { Services } from './components/Services'
import { TrustBar } from './components/TrustBar'

/**
 * Enrutado mínimo por hash, sin dependencias:
 * - `#privacidad` muestra la política de privacidad.
 * - Cualquier otro hash (#inicio, #servicios...) muestra la landing
 *   y salta a esa sección.
 */
function useRuta(): string {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const alCambiar = () => setHash(window.location.hash)
    window.addEventListener('hashchange', alCambiar)
    return () => window.removeEventListener('hashchange', alCambiar)
  }, [])

  return hash.replace('#', '')
}

export default function App() {
  const ruta = useRuta()
  const enPrivacidad = ruta === 'privacidad'

  // Tras cambiar de vista con hash de sección, saltar tras el render.
  useEffect(() => {
    if (enPrivacidad || !ruta) return
    requestAnimationFrame(() => {
      document.getElementById(ruta)?.scrollIntoView({ block: 'start' })
    })
  }, [ruta, enPrivacidad])

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2.5 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Saltar al contenido
      </a>

      {/* key: al entrar/salir de #privacidad la navbar se reinicia,
          borrando el estado heredado del scrollspy de la landing. */}
      <Navbar key={enPrivacidad ? 'privacidad' : 'landing'} />

      <main id="contenido">
        {enPrivacidad ? (
          <PoliticaDePrivacidad />
        ) : (
          <>
            <Hero />
            <TrustBar />
            <Services />
            <Gallery />
            <About />
            <CallToAction />
            <Contact />
          </>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
