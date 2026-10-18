import { useState } from 'react'
import { Scissors } from 'lucide-react'

type SmartImageProps = {
  src: string
  alt: string
  /** Clases del contenedor. */
  className?: string
  /** Clases de la imagen. */
  imgClassName?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
}

/**
 * Imagen con estado de carga y fallback elegante:
 * si la foto externa falla, muestra una textura con el icono
 * de tijera en lugar de un hueco roto.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority,
  sizes,
}: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  if (status === 'error') {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-carbon ${className}`}
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(198,164,108,0.06) 0 12px, transparent 12px 24px)',
        }}
      >
        <span className="flex flex-col items-center gap-3 px-6 text-center">
          <Scissors className="size-7 text-gold/50" aria-hidden="true" />
          <span className="max-w-[18rem] text-xs leading-relaxed text-cream/40">
            {alt}
          </span>
        </span>
      </div>
    )
  }

  // Nota: no fijamos `position` aquí para no entrar en conflicto con
  // usos `absolute` (hero, CTA). Cada uso define su propio posicionamiento.
  return (
    <div className={`overflow-hidden bg-carbon ${className}`}>
      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse bg-carbon" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`.trim()}
      />
    </div>
  )
}
