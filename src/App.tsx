import { useEffect, useState } from 'react'
import { About } from './components/About'
import { CallToAction } from './components/CallToAction'
import { Contact } from './components/Contact'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { TrustBar } from './components/TrustBar'

/** Enrutado mínimo por hash, sin dependencias (#inicio, #servicios...). */
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

  // Desplaza a la sección al montar o cambiar de hash (React pinta las
  // secciones después de la carga, así que el ancla nativa no basta).
  useEffect(() => {
    if (!ruta) return
    requestAnimationFrame(() => {
      document.getElementById(ruta)?.scrollIntoView({ block: 'start' })
    })
  }, [ruta])

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2.5 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <About />
        <CallToAction />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
