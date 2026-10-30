type SectionHeadingProps = {
  title: string
  /**
   * Nivel del encabezado. Por defecto `h2`; usa `h1` en vistas que no
   * tienen el título del hero (p. ej. la política de privacidad), para
   * mantener una jerarquía correcta: cada vista con un solo `h1`.
   */
  as?: 'h1' | 'h2'
}

/**
 * Cabecera de sección: filete dorado que se dibuja + título serif.
 * El filete es un motivo de marca (no un "kicker" de texto).
 */
export function SectionHeading({ title, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div>
      <span
        className="draw-rule mb-5 block h-px w-16 origin-left bg-gold"
        aria-hidden="true"
      />
      <Tag className="font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em] text-balance text-cream">
        {title}
      </Tag>
    </div>
  )
}
