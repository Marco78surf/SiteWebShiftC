'use client'

import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/' + href
    }
  }

  return (
    <nav
      className={`
        sticky top-0 z-50 flex items-center justify-between
        px-10 h-16
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

      {/* Liens */}
      <ul className="flex items-center gap-8 list-none">
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

      {/* CTA */}
      <a
        href="/contact"
        style={{ fontSize: '0.82rem' }}
        className="
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
    </nav>
  )
}
