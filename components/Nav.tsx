'use client'

import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Parlons de vous', href: '#enjeux' },
  { label: 'Notre approche',  href: '#approche' },
  { label: 'Nos offres',      href: '#offres' },
  { label: 'Nos réalisations',href: '#realisations' },
  { label: "Rejoindre l'équipe", href: '#equipe' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`
        sticky top-0 z-50 flex items-center justify-between
        px-10 h-12
        transition-all duration-300
        ${scrolled
          ? 'bg-[#0b1a0f]/95 backdrop-blur-sm border-b border-white/5'
          : 'bg-[#0b1a0f] border-b border-white/[0.08]'}
        animate-fade-down
      `}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-serif font-normal tracking-[-0.03em] text-sc-text" style={{fontSize: '1.3rem'}}
      >
        Shift<span className="text-sc-green italic">C</span>
      </button>

      {/* Liens */}
      <ul className="flex items-center gap-8 list-none">
        {LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="text-white/40 hover:text-white/90 transition-colors duration-200" style={{fontSize: '0.95rem'}}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo('#contact')}
        style={{ fontSize: '0.93rem' }}
        className="
          font-medium text-sc-green
          border border-[#6edea0]/50 rounded-full
          px-4 py-[0.3rem]
          hover:bg-[#6edea0]/08 hover:border-sc-green
          transition-all duration-200
        "
      >
        Nous contacter
      </button>
    </nav>
  )
}
