'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const LINKS = [
  { label: 'Vos enjeux', href: '#enjeux' },
  { label: 'Notre approche',  href: '#approche' },
  { label: 'Nos offres',      href: '#offres' },
  { label: 'Nos réalisations',href: '#realisations' },
  { label: 'À propos de ShiftC', href: '#apropos' },
  { label: "Rejoindre l'équipe", href: '#equipe' },
]

export default function Nav() {
  const pathname = typeof window === 'undefined' ? '' : (window.location.pathname || '')
  // Pour SSR/SSG, fallback à ''
  // Mais on va préférer le hook next/navigation côté client :
  let clientPath = ''
  try { clientPath = usePathname?.() || '' } catch { clientPath = '' }
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/' + href
    }
  }

  return (
    <>
    <nav
      className={`
        sticky top-0 z-50 flex items-center justify-between
        px-4 sm:px-6 lg:px-10 h-16
        transition-all duration-300
        ${scrolled
          ? 'bg-[#0b1a0f]/95 backdrop-blur-sm border-b border-white/5'
          : 'bg-[#0b1a0f] border-b border-white/[0.08]'}
        animate-fade-down
      `}
    >
      {/* Logo image */}
      <button
        onClick={() => {
          if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            window.location.href = '/'
          }
        }}
        className="flex items-center flex-shrink-0"
        style={{ height: '75.6px' }}
      >
        <Image
          src="/images/logo-shiftc.svg"
          alt="ShiftC — Construisons votre CRM"
          width={276}
          height={98}
          priority
          className="object-contain object-left"
          style={{ height: '75.6px', width: 'auto' }}
        />
      </button>

      {/* Liens desktop */}
      <ul className="hidden lg:flex items-center gap-8 list-none">
        {LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              style={{ fontSize: '1.00rem' }}
              className="text-white/40 hover:text-white/90 transition-colors duration-200"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA desktop */}
      <a
        href="/contact"
        style={{ fontSize: '0.82rem', opacity: (clientPath === '/contact') ? 0 : 1, pointerEvents: (clientPath === '/contact') ? 'none' : 'auto' }}
        className="
          hidden lg:inline-flex
          font-medium text-sc-green
          border border-[#6edea0]/50 rounded-full
          px-4 py-[0.3rem]
          hover:bg-[#6edea0]/08 hover:border-sc-green
          transition-all duration-200
          flex-shrink-0
        "
      >
        Nous contacter
      </a>

      {/* Hamburger mobile */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
      </button>

      {/* Menu mobile overlay */}
    </nav>

    {menuOpen && (
      <div
        className="lg:hidden fixed inset-0 flex flex-col py-6 px-6 gap-1"
        style={{ top: '4rem', zIndex: 9999, backgroundColor: '#0b1a0f' }}
      >
        {LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-left text-[1.05rem] text-white/60 hover:text-white/90 py-3.5 border-b border-white/[0.06] transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href="/contact"
          className="mt-5 text-center bg-sc-green text-sc-bg text-[0.9rem] font-medium py-3.5 rounded-full"
        >
          Nous contacter
        </a>
      </div>
    )}
    </>
  )
}
