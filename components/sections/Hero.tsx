'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="grid grid-cols-2"
      style={{ height: 'calc(100vh - 106px)' }}
    >
      {/* Gauche — texte */}
      <div className="flex flex-col justify-between px-12 py-11">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 animate-fade-up delay-100">
            <span className="w-1 h-1 rounded-full bg-sc-green" />
            <span className="text-[0.6rem] uppercase tracking-[0.16em] text-[#6edea0]/55 font-medium">
              Cabinet CRM &amp; IA · Experts certifiés
            </span>
          </div>

          {/* Titre */}
          <h1 className="font-serif font-light text-[clamp(2.4rem,3.5vw,3.4rem)] leading-[1.06] tracking-[-0.03em] mt-0 animate-fade-up delay-200">
            Maîtriser<br />
            la complexité,<br />
            <em className="not-italic text-sc-green">simplifier</em><br />
            les relations.
          </h1>

          {/* Sous-titre */}
          <p className="text-[0.84rem] text-white/44 leading-[1.75] max-w-[290px] mt-5 font-light animate-fade-up delay-300">
            Des consultants seniors en CRM, augmentés par l&apos;IA —
            pour des projets Salesforce et Dynamics qui tiennent leurs promesses.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-up delay-400">
          <div className="w-7 h-px bg-[#6edea0]/30 mb-5" />
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="
                bg-sc-green text-sc-bg text-[0.76rem] font-medium
                px-6 py-[0.58rem] rounded-full
                hover:opacity-88 transition-opacity
              "
            >
              Parler de votre projet
            </a>
            <a
              href="#realisations"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#realisations')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="
                text-[0.74rem] text-white/38 hover:text-white/70
                transition-colors flex items-center gap-1 group
              "
            >
              Voir nos réalisations
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Droite — photo */}
      <div className="relative overflow-hidden animate-fade-in delay-100">
        <Image
          src="/images/hero-delta.jpg"
          alt="Vue aérienne d'un delta — complexité maîtrisée"
          fill
          priority
          className="object-cover object-[40%_center]"
          sizes="50vw"
        />
        {/* Fondu gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a0f] via-[#0b1a0f]/55 to-transparent pointer-events-none" />
        {/* Vignette bas */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0b1a0f]/45 to-transparent pointer-events-none" />
        <p className="absolute bottom-2 right-3 text-[0.5rem] uppercase tracking-[0.07em] text-white/16">
          © Manu Alesanco · Unsplash
        </p>
      </div>
    </section>
  )
}
