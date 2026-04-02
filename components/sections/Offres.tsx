'use client'

import { useState } from 'react'

const OFFRES = [
  {
    num: '01', tag: 'Salesforce', badge: false,
    title: 'Projet Salesforce',
    desc: 'Cadrage, déploiement et adoption — sans rotation d\'équipe.',
    intro: 'Un projet Salesforce engage durablement votre organisation. Pourtant, la majorité des projets CRM n\'atteignent pas leurs objectifs initiaux : délais dépassés, adoption insuffisante, intégrations sous-estimées.',
    approche: 'Chez ShiftC, la séniorité n\'est pas une option — c\'est le fondement de notre modèle. Chaque consultant est un expert confirmé de Salesforce, capable de prendre en main votre projet avec le recul que seule l\'expérience donne.',
    resultats: [
      'Un projet livré dans les délais et le budget — parce que les problèmes sont anticipés',
      'Des équipes qui utilisent réellement le CRM dès le go-live',
      'Un interlocuteur senior de bout en bout — pas de rotation d\'équipe',
      'Un time-to-value raccourci grâce à l\'IA dans le delivery',
    ],
    platforms: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'CPQ', 'Data Cloud', 'Agentforce'],
  },
  {
    num: '02', tag: 'Dynamics 365', badge: false,
    title: 'Projet Microsoft Dynamics 365',
    desc: 'Expertise D365, Power Platform et écosystème Azure.',
    intro: 'Dynamics 365 est une plateforme puissante — mais sa richesse fonctionnelle est aussi sa complexité. Entre les modules CRM, Azure, Power Platform et Copilot, un projet mal engagé se paye cher.',
    approche: 'Nos consultants couvrent aussi bien la complexité technique que les enjeux métiers. Ils connaissent l\'intégralité de l\'écosystème Microsoft et savent d\'emblée où sont les pièges d\'architecture.',
    resultats: [
      'Un projet livré dans les délais — les pièges Dynamics anticipés dès le cadrage',
      'Une intégration fluide avec votre écosystème Microsoft complet',
      'Des équipes qui utilisent réellement Dynamics dès le go-live',
      'Un time-to-value raccourci par Copilot et les LLMs',
    ],
    platforms: ['D365 Sales', 'D365 Service', 'Power Platform', 'Azure', 'Copilot for Sales', 'Dataverse'],
  },
  {
    num: '03', tag: 'Agent IA CRM', badge: false,
    title: 'Agent IA sur votre CRM',
    desc: 'Des agents opérationnels, intégrés dans vos flux CRM existants.',
    intro: 'L\'IA générative transforme les métiers de la vente et du service client. Mais entre la promesse des éditeurs et la valeur concrète pour vos équipes, le fossé est souvent large.',
    approche: 'Notre approche part du problème, pas de la technologie. On identifie d\'abord les cas d\'usage à fort ROI, on évalue la maturité de vos données, puis on construit une architecture agentique intégrée nativement dans vos flux.',
    resultats: [
      'Des use cases IA sélectionnés pour leur ROI — pas pour l\'effet d\'annonce',
      'Des agents opérationnels, intégrés nativement dans vos flux CRM',
      'Une adoption réelle par vos équipes commerciales et service client',
      'Une architecture évolutive prête à accueillir de nouveaux agents',
    ],
    platforms: ['Agentforce', 'Copilot for Sales', 'Multi-agents', 'Claude · GPT-4 · Gemini'],
  },
  {
    num: '04', tag: 'Run & Évolution', badge: false,
    title: 'Run & Évolution',
    desc: 'Maintien et évolution continue par les mêmes experts seniors.',
    intro: 'Un CRM livré commence à vivre. Montées de version, nouvelles fonctionnalités, besoins métiers qui changent. Sans accompagnement structuré, la plateforme se dégrade progressivement.',
    approche: 'ShiftC propose un contrat annuel de Run & Évolution assuré par les mêmes experts qui maîtrisent votre plateforme. Pas de rotation d\'équipe, pas de montée en compétence à chaque intervention.',
    resultats: [
      'Une plateforme CRM toujours à jour, performante et sécurisée',
      'Un expert qui connaît votre contexte sans avoir à le réexpliquer',
      'Une évolution continue alignée sur vos priorités métiers',
      'La liberté de vous concentrer sur votre business',
    ],
    platforms: ['Essentiel', 'Évolution', 'Partenaire IA'],
  },
  {
    num: '05', tag: 'CRM Adoption', badge: true,
    title: 'CRM Adoption',
    desc: 'Accompagnement, formation et pilotage des KPIs d\'usage.',
    intro: 'Le taux d\'adoption est le seul indicateur qui dit la vérité sur un projet CRM. On peut livrer dans les délais, dans le budget — si les équipes n\'utilisent pas le CRM, l\'investissement ne se réalise pas.',
    approche: 'L\'adoption se construit dans la durée, à travers un accompagnement structuré qui part des usages réels. Notre approche en 4 temps : Ancrer · Embarquer · Former · Mesurer.',
    resultats: [
      'Des équipes qui utilisent réellement le CRM dès le go-live',
      'Un taux d\'usage mesurable et en progression',
      'Des managers qui pilotent l\'adoption, pas seulement l\'IT',
      'Un retour sur investissement qui se réalise',
    ],
    platforms: ['Accompagnement', 'Formation', 'Communication', 'KPIs d\'usage'],
  },
]

export default function Offres() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="offres" className="border-t border-white/[0.08]">
      {/* Header */}
      <div className="px-10 pt-20 pb-10 border-b border-white/[0.08]">
        <div className="text-[0.67rem] uppercase tracking-[0.14em] text-sc-green font-medium mb-7">
          Nos offres
        </div>
        <h2 className="font-serif font-light text-[2.9rem] leading-[1.1] tracking-[-0.025em] max-w-[640px]">
          Cinq offres. Un seul principe :{' '}
          <em className="not-italic text-sc-green">des experts seniors</em>, de bout en bout.
        </h2>
        <p className="text-[0.9rem] text-white/50 leading-[1.8] max-w-[520px] mt-7">
          Chaque offre est construite autour de la même conviction : la séniorité n&apos;est pas une option.
        </p>
      </div>

      {/* Liste offres */}
      <div className="px-10">
        {OFFRES.map((o, i) => (
          <div key={i} className="border-b border-white/[0.08]">
            {/* Trigger */}
            <button
              className="w-full flex items-start justify-between gap-8 py-8 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-start gap-6 flex-1">
                <span className="font-serif text-[1.8rem] font-bold text-[#6edea0]/20 leading-none pt-1 w-12 flex-shrink-0">
                  {o.num}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[0.6rem] uppercase tracking-[0.08em] px-[0.5rem] py-[0.18rem] rounded-full bg-[#6edea0]/10 text-sc-green">
                      {o.tag}
                    </span>
                    {o.badge && (
                      <span className="text-[0.52rem] uppercase tracking-[0.1em] bg-sc-green text-sc-bg font-semibold px-[0.42rem] py-[0.12rem] rounded-full">
                        Nouveau
                      </span>
                    )}
                  </div>
                  <div className={`font-serif font-light text-[1.35rem] leading-[1.2] tracking-[-0.02em] transition-colors ${open === i ? 'text-sc-green' : 'text-sc-text'}`}>
                    {o.title}
                  </div>
                  <div className="text-[0.85rem] text-white/50 mt-1">{o.desc}</div>
                </div>
              </div>
              <div className={`
                w-8 h-8 flex-shrink-0 mt-1 rounded-full border border-white/20
                flex items-center justify-center text-sm transition-all duration-200
                ${open === i ? 'bg-sc-green border-sc-green text-sc-bg rotate-45' : 'text-white/40'}
              `}>
                +
              </div>
            </button>

            {/* Détail */}
            {open === i && (
              <div className="pb-10 ml-18 pl-6 border-l border-[#6edea0]/15">
                {/* Enjeux */}
                <div className="text-[0.72rem] uppercase tracking-[0.08em] text-sc-green mb-2">
                  Enjeux & Problématique
                </div>
                <p className="text-[0.85rem] text-white/55 leading-[1.85] mb-5 max-w-[620px]">{o.intro}</p>

                {/* Approche */}
                <div className="text-[0.72rem] uppercase tracking-[0.08em] text-sc-green mb-2">
                  Notre approche
                </div>
                <p className="text-[0.85rem] text-white/55 leading-[1.85] mb-5 max-w-[620px]">{o.approche}</p>

                {/* Plateformes */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {o.platforms.map((p) => (
                    <span key={p} className="text-[0.68rem] px-[0.6rem] py-[0.22rem] rounded-full bg-white/[0.07] text-white/45">
                      {p}
                    </span>
                  ))}
                </div>

                {/* Résultats */}
                <div className="bg-[#0f2218] border border-[#6edea0]/15 border-l-2 border-l-sc-green rounded-lg p-5">
                  <div className="text-[0.67rem] uppercase tracking-[0.1em] text-sc-green mb-3">
                    Résultats attendus
                  </div>
                  {o.resultats.map((r, ri) => (
                    <div key={ri} className="flex items-start gap-3 text-[0.82rem] text-white/60 leading-[1.75] mb-2">
                      <span className="text-sc-green mt-0.5 flex-shrink-0">—</span>
                      <span dangerouslySetInnerHTML={{ __html: r.replace(/^([^—]+)/, '<strong class="text-white/88 font-medium">$1</strong>') }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-10 py-14 flex items-center justify-between">
        <p className="font-serif font-light text-[1.3rem] text-white/65 max-w-[400px] leading-[1.4]">
          Pas sûr de quelle offre correspond à votre situation ?{' '}
          <em className="not-italic text-sc-green">Décrivons-la ensemble.</em>
        </p>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
        >
          Parler de votre projet →
        </button>
      </div>
    </section>
  )
}
