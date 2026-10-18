type SectionHeadingProps = {
  title: string
}

/**
 * Cabecera de sección: filete dorado que se dibuja + título serif.
 * El filete es un motivo de marca (no un "kicker" de texto).
 */
export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div>
      <span
        className="draw-rule mb-5 block h-px w-16 origin-left bg-gold"
        aria-hidden="true"
      />
      <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em] text-balance text-cream">
        {title}
      </h2>
    </div>
  )
}
