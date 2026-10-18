import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

type RevealVariant = 'up' | 'scale'

type RevealProps = {
  children: ReactNode
  /** Retraso en ms para el escalonado (30–80ms entre hermanos). */
  delay?: number
  variant?: RevealVariant
  className?: string
  /** Etiqueta HTML (por defecto `div`). */
  as?: ElementType
}

/**
 * Revela contenido al entrar en pantalla: fundido + desplazamiento/escala.
 * Usa IntersectionObserver y deja correr la animación en CSS (off main thread).
 * Si el navegador no soporta IO, se muestra de inmediato (nunca deja contenido oculto).
 */
export function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  // Si el navegador no soporta IO, arranca visible (nunca deja contenido oculto).
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
