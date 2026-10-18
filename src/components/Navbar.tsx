import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { WhatsAppButton } from './WhatsAppButton'

const NAV_IDS = siteConfig.nav.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const scrolled = useScrolled(32)
  const activeSection = useActiveSection(NAV_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Al abrir, el foco entra al primer enlace del panel.
  useEffect(() => {
    if (!menuOpen) return
    panelRef.current?.querySelector('a')?.focus()
  }, [menuOpen])

  // Escape cierra y devuelve el foco; Tab queda atrapado dentro del panel
  // mientras el menú está abierto (los contenidos de atrás no son tabulables).
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const panel = panelRef.current
      if (!panel) return
      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const current = document.activeElement
      const inside = current instanceof HTMLElement && panel.contains(current)
      if (event.shiftKey) {
        if (!inside || current === first) {
          event.preventDefault()
          last.focus()
        }
      } else if (!inside || current === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // Cierra el menú al pasar a escritorio.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-cream/10 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 md:h-20">
        {/* Logotipo tipográfico */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.brand.fullName} — ir al inicio`}
        >
          <span
            className="h-8 w-px bg-gold/60 transition-colors group-hover:bg-gold"
            aria-hidden="true"
          />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-display text-base tracking-[0.14em] text-cream transition-colors group-hover:text-gold sm:text-lg">
              {siteConfig.brand.name}
            </span>
            <span className="mt-1 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:tracking-[0.38em]">
              {siteConfig.brand.suffix}
            </span>
          </span>
        </a>

        {/* Enlaces (escritorio) */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                      isActive ? 'text-gold' : 'text-cream/70 hover:text-cream'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-0 -bottom-1 h-px bg-gold"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA persistente: se oculta en md–lg (sin espacio para logo +
              enlaces + botón); en ese rango cubren el menú y el FAB */}
          <span className="hidden sm:block md:hidden lg:block">
            <WhatsAppButton
              label="Reservar cita"
              message={siteConfig.contact.whatsapp.bookingMessage}
              className="px-5 py-3"
            />
          </span>

          {/* Menú móvil */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex size-10 items-center justify-center rounded-md border border-cream/15 text-cream transition-colors hover:border-gold/50 hover:text-gold md:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!menuOpen}
        className="menu-panel border-t border-cream/10 bg-ink/95 backdrop-blur-md md:hidden"
      >
        <nav aria-label="Navegación móvil" className="px-5 py-6 sm:px-8">
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`block border-b border-cream/5 py-3.5 font-display text-xl transition-colors ${
                      isActive ? 'text-gold' : 'text-cream hover:text-gold'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <WhatsAppButton
            label="Reservar cita"
            message={siteConfig.contact.whatsapp.bookingMessage}
            className="mt-6 w-full"
          />
        </nav>
      </div>
    </header>
  )
}
