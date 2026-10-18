import { useEffect, useState } from 'react'

/**
 * Devuelve `true` cuando la página supera el umbral de scroll.
 * Se usa para dar fondo a la navbar y mostrar el botón flotante.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
