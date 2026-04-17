'use client'

import { useState } from 'react'

const VALEURS = [
  { num: '01', title: 'Transparence financière', desc: 'Une rémunération alignée sur la valeur que vous créez. Dialogue ouvert pour convenir ensemble des missions et des modalités.' },
  { num: '02', title: 'Confiance & autonomie', desc: 'Vous vous organisez comme vous le souhaitez. Aucune contrainte de présence inutile. Une seule règle : la satisfaction de nos clients.' },
  { num: '03', title: 'Expertise CRM', desc: 'Une expertise forte, multi-solutions, qui vous rend adaptable et employable. Avec l\'exigence de continuer à apprendre en permanence.' },
  { num: '04', title: 'Esprit d\'équipe & droit de véto', desc: 'L\'harmonie du collectif est essentielle. Vous avez un droit de regard sur les prochains candidats — et eux auront le même sur vous.' },
  { num: '05', title: 'Satisfaction client', desc: 'Notre contrainte la plus forte. Nous n\'avons pas beaucoup de règles — mais un client insatisfait est traité avec la plus haute importance.' },
]

const TEMOIGNAGES = [
  { initial: 'M', name: 'Matthieu', role: 'Expert CRM Salesforce · 1er collaborateur ShiftC', tag: 'Salesforce', quote: 'Ce que j\'aime ici, c\'est qu\'on ne fait pas semblant. On parle vrai avec les clients, on s\'entraide entre nous, et on livre du boulot dont on est fiers. Ça fait toute la différence.', body: 'Matthieu est le premier à avoir rejoint l\'aventure ShiftC. Ce qui le motive depuis le jour un : construire quelque chose de solide, avec des gens qu\'il respecte, sur des projets CRM où l\'exigence technique va de pair avec le relationnel.' },
  { initial: 'R', name: 'Rodolphe', role: 'Business analyst Senior - MS Dynamics & Salesforce', tag: 'Salesforce · D365', quote: 'Après 20 ans dans l\'IT, j\'ai connu pas mal de structures. Chez ShiftC, personne ne regarde par-dessus mon épaule — on me fait confiance, et ça change tout. La transparence ici, c\'est pas un mot sur un mur, c\'est la réalité au quotidien.', body: 'Rodolphe intervient sur les problématiques CRM les plus complexes avec un calme désarmant. Ce qui le retient chez ShiftC : la liberté de se concentrer sur ce qu\'il fait le mieux, sans avoir à justifier chaque décision.' },
  { initial: 'J', name: 'Jimmy', role: 'Tech lead MS Dynamics', tag: 'Salesforce', quote: 'J\'ai de la liberté, de vraies responsabilités, et zéro politique interne. Je gère mes projets, j\'organise mon temps, et je sais exactement où va l\'entreprise. C\'est simple, et ça me va.', body: 'Jimmy pense chaque solution CRM en mesurant ses impacts sur la globalité du SI. Rigoureux et créatif, il apprécie par-dessus tout de pouvoir travailler dans un cadre qui lui fait confiance — et qui attend la même chose en retour.' },
  { initial: 'J', name: 'Jacques', role: 'Expert CRM · 4 ans dans le collectif', tag: 'Salesforce · D365', quote: '4 ans que je suis là, et je n\'ai jamais eu envie de partir. L\'ambiance est sincère, le management est transparent, et on se respecte. C\'est rare — alors j\'en profite.', body: 'Jacques accompagne ses clients autant sur le métier que sur la technique. Son engagement chez ShiftC tient en deux mots : confiance et authenticité. Quand on lui demande pourquoi il reste, il répond toujours la même chose : « Parce que je n\'ai aucune raison de partir. »' },
  { initial: 'H', name: 'Hawa', role: 'Experte MS Dynamics & IA - Responsable des activités à Paris', tag: 'Dynamics 365', quote: 'Quand on m\'a proposé de porter ShiftC sur Paris, j\'ai dit oui tout de suite. J\'ai la confiance du collectif, des projets qui ont du sens, et la liberté de les mener comme je l\'entends.', body: 'Hawa a pris les rênes de l\'activité parisienne avec une énergie communicative. Son expertise Dynamics et IA, combinée à un excellent relationnel, en fait un pilier du développement de ShiftC sur les projets stratégiques en Île-de-France.' },
]

export default function Rejoindre() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="equipe" className="border-t border-white/[0.08]">
      {/* Hero */}
      <div className="px-4 sm:px-6 lg:px-10 py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Rejoindre ShiftC
          </div>
          <h2 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-10">
            Un collectif d&apos;experts.<br />
            Pas une <em className="not-italic text-sc-green">ESN</em>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-[1rem] text-white/50 leading-[1.8]">
              Chez ShiftC, vous choisissez vos missions, vous négociez votre rémunération,
              et vous avez un droit de regard sur les personnes qui nous rejoignent.{' '}
              <strong className="text-white/80 font-medium">La seule règle : la satisfaction de nos clients.</strong>
            </p>
            <div className="text-[1rem] text-white/50 leading-[1.8]">
              <p>ShiftC ne recrute pas des compétences. <strong className="text-white/80 font-medium">ShiftC recrute des personnalités.</strong> Nous cherchons des experts CRM confirmés qui partagent nos valeurs — autonomie, transparence, exigence.</p>
              <p className="mt-4"><strong className="text-white/80 font-medium">Nous grandissons de manière raisonnée.</strong> Si vous cochez les cases techniques mais pas les valeurs, nous ne travaillerons pas ensemble. Si vous cochez les deux, parlons-en.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">Nos valeurs</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALEURS.map((v) => (
              <div key={v.num} className="group rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-3 transition-all duration-300 hover:border-sc-green/25 hover:bg-white/[0.035]">
                <div className="font-serif text-[0.8rem] font-bold text-sc-green/40">{v.num}</div>
                <div className="text-[0.95rem] font-semibold text-white/80 leading-[1.3]">{v.title}</div>
                <div className="text-[0.85rem] text-white/50 leading-[1.7]">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Témoignages carousel */}
      <div className="border-b border-white/[0.08]">
        <div className="px-4 sm:px-6 lg:px-10 pt-16 pb-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-0">Ce que disent les Shifteurs</div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TEMOIGNAGES.map((t, i) => (
              <div key={i} className="min-w-full px-4 sm:px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-16 items-start">
                {/* Photo placeholder */}
                <div className="h-80 bg-sc-bg2 border border-[#6edea0]/15 rounded-[12px] flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#6edea0]/10 border border-[#6edea0]/20 flex items-center justify-center font-serif text-[1.6rem] font-light text-sc-green">
                    {t.initial}
                  </div>
                  <div className="text-[0.88rem] font-semibold text-sc-text">{t.name}</div>
                  <div className="text-[0.72rem] text-white/40 text-center leading-[1.5] px-4">{t.role}</div>
                  <span className="text-[0.62rem] uppercase tracking-[0.08em] bg-[#6edea0]/10 text-sc-green px-2 py-1 rounded-full">{t.tag}</span>
                </div>
                {/* Contenu */}
                <div className="pt-2">
                  <blockquote className="font-serif italic font-light text-[1.5rem] text-sc-text leading-[1.4] tracking-[-0.01em] border-l-2 border-sc-green pl-6 mb-6">
                    {t.quote}
                  </blockquote>
                  <p className="text-[0.88rem] text-white/50 leading-[1.85]">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Nav dots + flèches */}
        <div className="px-4 sm:px-6 lg:px-10 pb-10 flex items-center gap-3">
          <div className="flex gap-2">
            {TEMOIGNAGES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-sc-green' : 'bg-white/15'}`}
              />
            ))}
          </div>
          <div className="flex gap-2 ml-auto">
            <button onClick={() => setCurrent((c) => (c - 1 + TEMOIGNAGES.length) % TEMOIGNAGES.length)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-sc-green hover:text-sc-green transition-all">←</button>
            <button onClick={() => setCurrent((c) => (c + 1) % TEMOIGNAGES.length)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-sc-green hover:text-sc-green transition-all">→</button>
          </div>
        </div>
      </div>

      {/* CTA — Deux choix */}
      <div id="candidature" className="px-4 sm:px-6 lg:px-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Prêt à avancer ?
          </div>
          <h3 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.5rem] leading-[1.15] tracking-[-0.025em] mb-4">
            Que vous soyez client ou futur Shifteur,<br />
            <em className="not-italic text-sc-green">c&apos;est ici que tout commence.</em>
          </h3>
          <p className="text-[1rem] text-white/45 leading-[1.8] max-w-xl mx-auto mb-12">
            Vous avez un projet CRM à mener, ou vous cherchez un collectif qui vous ressemble ?
            Choisissez votre chemin.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Option 1 — Projet */}
            <a
              href="/contact"
              className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 flex flex-col items-center gap-5 transition-all duration-300 hover:border-sc-green/30 hover:bg-white/[0.04] no-underline"
            >
              <div className="w-14 h-14 rounded-full border border-sc-green/25 bg-sc-green/10 flex items-center justify-center text-[1.5rem] group-hover:bg-sc-green/20 transition-colors">
                💼
              </div>
              <div className="text-[1.1rem] font-semibold text-white/85">Nous contacter pour votre projet</div>
              <p className="text-[0.85rem] text-white/45 leading-[1.7]">
                Vous avez un projet Salesforce, Dynamics ou IA à lancer ?
                Parlons-en — un expert senior vous répond sous 48h.
              </p>
              <span className="text-sc-green text-[0.82rem] font-medium mt-auto group-hover:translate-x-1 transition-transform">
                Parler de mon projet →
              </span>
            </a>

            {/* Option 2 — Candidature */}
            <a
              href="/candidat"
              className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 flex flex-col items-center gap-5 transition-all duration-300 hover:border-sc-green/30 hover:bg-white/[0.04] no-underline"
            >
              <div className="w-14 h-14 rounded-full border border-sc-green/25 bg-sc-green/10 flex items-center justify-center text-[1.5rem] group-hover:bg-sc-green/20 transition-colors">
                🤝
              </div>
              <div className="text-[1.1rem] font-semibold text-white/85">Rejoindre nos Shifteurs</div>
              <p className="text-[0.85rem] text-white/45 leading-[1.7]">
                Expert CRM avec au moins 7 ans d&apos;expérience ? Découvrez notre
                processus de recrutement et postulez.
              </p>
              <span className="text-sc-green text-[0.82rem] font-medium mt-auto group-hover:translate-x-1 transition-transform">
                Découvrir &amp; postuler →
              </span>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
