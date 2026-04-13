'use client'

import { useState } from 'react'

const OFFRES = [ /* offers data */
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
    num: '04', tag: 'CRM Adoption', badge: true,
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
  {
    num: '05', tag: 'Run & Évolution', badge: false,
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
]

export default function Offres() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (num: string) => {
    setExpanded((prev) => (prev === num ? null : num))
  }

  return (
    <section id="offres" className="border-t border-white/[0.08]">
      {/* Header */}
      <div className="px-10 py-20 group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-sc-green/25 hover:bg-white/[0.04]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Nos offres
          </div>
          <h2 className="font-serif font-light text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-8">
            Cinq offres. Un seul principe :{' '}
            <em className="not-italic text-sc-green">des experts seniors</em>, de bout en bout.
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.8] max-w-[720px]">
            Chaque offre est construite autour de la même conviction : la séniorité n&apos;est pas une option.
          </p>
        </div>
      </div>

      {/* Grille offres */}
      <div className="px-10 py-16">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFRES.map((o, i) => (
              <div
                key={o.num}
                className="relative group text-left p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Numéro accent */}
                <div className="text-6xl font-serif font-bold text-white/8 mb-4 leading-none">
                  {o.num}
                </div>

                {/* Tag catégorie */}
                <div className="text-[0.6rem] uppercase tracking-[0.08em] px-3 py-1.5 rounded-full bg-sc-green/15 text-sc-green font-medium inline-block mb-4">
                  {o.tag}
                </div>

                {/* Titre */}
                <h3 className="font-serif font-light text-[1.25rem] leading-[1.3] tracking-[-0.015em] mb-3 transition-colors text-white">
                  {o.title}
                </h3>

                {/* Description */}
                <p className="text-[0.85rem] text-white/50 leading-[1.6] mb-6">
                  {o.desc}
                </p>

                {/* Indicateur expand */}
                <button
                  onClick={() => toggle(o.num)}
                  className="flex items-center gap-2 text-sc-green text-[0.8rem] font-medium transition-all opacity-100 cursor-pointer bg-transparent border-none p-0"
                >
                  <span>{expanded === o.num ? 'Fermer' : 'Explorer'}</span>
                  <div className={`transition-transform duration-300 ${expanded === o.num ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>

                {/* Détails expandus */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded === o.num ? 'max-h-[1000px] opacity-100 mt-8 pt-8 border-t border-white/10' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-6">
                  {/* Enjeux */}
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.08em] text-sc-green font-semibold mb-2">
                      Enjeux
                    </div>
                    <p className="text-[0.8rem] text-white/60 leading-[1.7]">{o.intro}</p>
                  </div>

                  {/* Approche */}
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.08em] text-sc-green font-semibold mb-2">
                      Notre approche
                    </div>
                    <p className="text-[0.8rem] text-white/60 leading-[1.7]">{o.approche}</p>
                  </div>

                  {/* Plateformes */}
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.08em] text-sc-green font-semibold mb-3">
                      Domaines couverts
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {o.platforms.map((p) => (
                        <span key={p} className="text-[0.65rem] px-2.5 py-1 rounded-lg bg-white/5 text-white/40 border border-white/[0.06]">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Résultats */}
                  <div className="pt-6 border-t border-white/[0.06]">
                    <div className="text-[0.65rem] uppercase tracking-[0.08em] text-sc-green font-semibold mb-3">
                      Résultats attendus
                    </div>
                    <ul className="space-y-2">
                      {o.resultats.map((r, ri) => (
                        <li key={ri} className="flex gap-2 text-[0.75rem] text-white/50">
                          <span className="text-sc-green flex-shrink-0">▸</span>
                          <span dangerouslySetInnerHTML={{ __html: r.replace(/^([^—]+)/, '<strong class="text-white/70">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-10 py-14 border-t border-white/[0.08]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif font-light text-[1.35rem] text-white/65 max-w-[520px] leading-[1.4]">
            Pas sûr de quelle offre correspond à votre situation ?{' '}
            <em className="not-italic text-sc-green">Décrivons-la ensemble.</em>
          </p>
          <a
            href="/contact"
            className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
          >
            Parler de votre projet →
          </a>
        </div>
      </div>
    </section>
  )
}
