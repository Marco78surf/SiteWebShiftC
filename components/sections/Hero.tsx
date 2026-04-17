'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[58%_42%] h-full">
      {/* Gauche — texte */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:px-16 lg:py-11 h-full min-h-0">
        <div>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#6edea0', flexShrink: 0 }} />
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: 'rgba(110,222,160,0.55)', fontWeight: 500 }}>
              CRM &amp; IA
            </span>
          </div>

          {/* Titre */}
          <h1 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, lineHeight: 1.06, letterSpacing: '-0.03em', fontSize: 'clamp(1.8rem, 4.5vw, 4.5rem)', color: '#f0ede6' }}>
            Maîtriser la complexité,<br />
            <em style={{ fontStyle: 'normal', color: '#6edea0' }}>simplifier</em> les relations.
          </h1>

          {/* Sous-titre */}
          <p style={{ fontSize: '1rem', color: 'rgba(240,237,230,0.44)', lineHeight: 1.75, maxWidth: 420, marginTop: '1.5rem', fontWeight: 400 }}>
            Des consultants experts en CRM, certifiés, augmentés par l&apos;IA pour des projets Salesforce et Dynamics qui tiennent leurs promesses.
          </p>
        </div>

        {/* CTA */}
        <div className="hidden md:block mt-8 md:mt-0">
          <div style={{ width: 28, height: 1, background: 'rgba(110,222,160,0.3)', marginBottom: '1.2rem' }} />
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              style={{ background: '#6edea0', color: '#0b1a0f', fontSize: '0.82rem', fontWeight: 500, padding: '0.65rem 1.6rem', borderRadius: 100, textDecoration: 'none' }}
            >
              Parler de votre projet
            </a>
            <a
              href="#realisations"
              onClick={(e) => { e.preventDefault(); document.querySelector('#realisations')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '0.8rem', color: 'rgba(240,237,230,0.38)', textDecoration: 'none' }}
            >
              Voir nos réalisations →
            </a>
          </div>
        </div>
      </div>

      {/* Droite — photo */}
      <div className="relative overflow-hidden h-48 md:h-full">
        <Image
          src="/images/hero-accueil.jpg"
          alt="Vue aérienne d'un delta"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: '40% center' }}
          sizes="(max-width: 768px) 100vw, 42vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0b1a0f, rgba(11,26,15,0.55), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(to top, rgba(11,26,15,0.45), transparent)', pointerEvents: 'none' }} />
        <p style={{ position: 'absolute', bottom: 8, right: 12, fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'rgba(240,237,230,0.16)' }}>
          © Manu Alesanco · Unsplash
        </p>
      </div>
    </section>
  )
}
