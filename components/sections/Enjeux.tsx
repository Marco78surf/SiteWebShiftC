'use client'

import { useState } from 'react'

const ENJEUX = [
  {
    tag: 'Salesforce · Dynamics 365',
    title: 'Votre projet CRM prend du retard. Et personne ne vous dit vraiment pourquoi.',
    quote: 'On nous avait promis un go-live en septembre. On est en janvier, le périmètre a bougé trois fois, et les équipes métiers commencent à décrocher.',
    body: 'Les dérives de planning CRM ont rarement une cause unique. Elles s\'accumulent : un cadrage initial trop vague, des intégrations sous-estimées, des décisions prises sans les bonnes personnes dans la pièce. Et souvent, une équipe prestataire qui découvre les vrais enjeux en cours de route.',
    bold: 'Un expert placé dès le cadrage change tout.',
    rest: ' Pas parce qu\'il travaille plus vite — mais parce qu\'il sait où sont les pièges avant d\'y tomber. Il pose les bonnes questions au bon moment, tient le périmètre et garde les équipes alignées de bout en bout.',
    link: 'Voir notre approche Salesforce & Dynamics →',
  },
  {
    tag: 'Adoption · Go-live',
    title: 'Le CRM est livré. Mais vos équipes ne l\'utilisent pas.',
    quote: 'On a investi des centaines de milliers d\'euros dans ce projet. Six mois après le go-live, le taux d\'adoption est à 40 %.',
    body: 'L\'adoption ne se décrète pas le jour du go-live. Elle se construit tout au long du projet — dans la façon dont les besoins métiers sont recueillis, dans les choix de configuration, dans la manière dont les équipes sont impliquées bien avant la formation finale.',
    bold: 'Chez ShiftC, l\'adoption démarre dès le cadrage, pas du plan de communication.',
    rest: ' Nos consultants travaillent avec les utilisateurs finaux dès les premières semaines pour que le CRM soit déjà le leur au moment où il est livré.',
    link: 'Voir notre offre CRM Adoption →',
  },
  {
    tag: 'Agent IA · CRM',
    title: 'L\'IA sur votre CRM : tout le monde en parle, personne ne sait par où commencer.',
    quote: 'Nos éditeurs nous vendent Agentforce et Copilot depuis des mois. Nos équipes sont sceptiques. Et nous, on ne sait pas comment évaluer ce qui vaut vraiment quelque chose.',
    body: 'Le fossé entre la promesse des éditeurs et la réalité opérationnelle est réel. Déployer des agents IA sur un CRM demande trois compétences rarement réunies chez un seul prestataire : une expertise CRM profonde, une maîtrise des architectures IA, et une compréhension fine de vos processus métiers.',
    bold: 'Notre approche part du problème, pas de la technologie.',
    rest: ' On identifie d\'abord les cas d\'usage à fort ROI, on évalue la maturité de vos données, puis on construit une architecture agentique intégrée nativement dans vos flux existants.',
    link: 'Voir notre offre Agent IA CRM →',
  },
  {
    tag: 'Run · Maintenance',
    title: 'Votre CRM évolue en permanence. Votre prestataire, lui, change tous les six mois.',
    quote: 'À chaque nouveau besoin, on réexplique le contexte depuis zéro. Entre les montées de version, les évolutions réglementaires et les demandes métiers, on passe plus de temps à gérer nos prestataires qu\'à piloter notre CRM.',
    body: 'Un CRM livré commence à vivre — et donc à évoluer. Montées de version, nouvelles fonctionnalités, optimisations de performance, besoins métiers qui changent. Sans un partenaire de confiance qui s\'inscrit dans le temps long, chaque intervention repart de zéro et vos équipes se fatiguent.',
    bold: 'Notre contrat Run & Évolution est assuré par les mêmes experts seniors qui maîtrisent votre plateforme.',
    rest: ' Pas de rotation d\'équipe, pas de montée en compétence à chaque intervention.',
    link: 'Voir notre offre Run & Évolution →',
  },
  {
    tag: 'Séniorité · Expertise',
    title: 'Vous payez pour de l\'expertise. Vous recevez quelqu\'un qui apprend sur votre projet.',
    quote: 'Le profil présenté en avant-vente était excellent. Celui qui est arrivé sur le projet, c\'est une autre histoire.',
    body: 'C\'est l\'un des irritants les plus fréquents dans les projets CRM. Un cabinet remporte un appel d\'offres avec ses meilleurs profils, puis place des consultants juniors une fois le contrat signé. Le client paie le prix de la séniorité sans en avoir la valeur.',
    bold: 'Chez ShiftC, le modèle est construit différemment.',
    rest: ' Notre collectif est composé exclusivement d\'experts confirmés — des consultants qui choisissent leurs missions et s\'impliquent en conséquence. Ce que vous voyez en avant-vente, c\'est ce que vous avez sur votre projet.',
    link: 'Découvrir notre approche →',
  },
]

export default function Enjeux() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="enjeux" className="border-t border-white/[0.08]">
      {/* Hero texte */}
      <div className="px-4 sm:px-6 lg:px-10 py-20 border-b border-white/[0.08]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Vos enjeux
          </div>
          <h2 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-8">
            Vous n&apos;êtes pas là pour gérer des <em style={{ fontStyle: 'normal', color: '#6edea0' }}>projets IT</em>.<br />
            Vous êtes là pour créer de la valeur.
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.8]">
            Derrière chaque projet CRM, il y a une direction qui doit rendre des comptes,
            des équipes qu&apos;il faut embarquer, et des engagements qu&apos;il faut tenir.
            Voici les situations que nous <strong className="text-white/70 font-medium">combattons</strong>.
          </p>
        </div>
      </div>

      {/* Accordéon */}
      <div className="px-10">
        <div className="max-w-[900px] mx-auto">
          {ENJEUX.map((e, i) => (
          <div key={i} className="border-b border-white/[0.08]">
            {/* Trigger */}
            <button
              className="w-full flex items-start justify-between gap-8 py-9 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex-1">
                <div className="text-[0.62rem] uppercase tracking-[0.09em] px-[0.55rem] py-[0.2rem] rounded-full bg-[#6edea0]/10 text-sc-green inline-block mb-3">
                  {e.tag}
                </div>
                <div className={`font-serif font-light text-[1.45rem] leading-[1.2] tracking-[-0.02em] transition-colors ${open === i ? 'text-sc-green' : 'text-sc-text'}`}>
                  {e.title}
                </div>
              </div>
              <div className={`
                w-7 h-7 flex-shrink-0 mt-1 rounded-full border
                flex items-center justify-center text-sm font-bold transition-all duration-200
                ${open === i ? 'bg-sc-green border-sc-green text-sc-bg rotate-45 shadow-[0_0_12px_rgba(110,222,160,0.6)]' : 'border-sc-green text-sc-green shadow-[0_0_8px_rgba(110,222,160,0.4)]'}
              `}>
                +
              </div>
            </button>

            {/* Body */}
            {open === i && (
              <div className="pb-10">
                <blockquote className="
                  font-serif italic font-light text-[1.05rem] text-white/65
                  leading-[1.6] border-l-2 border-sc-green pl-5 mb-6 max-w-[580px]
                ">
                  « {e.quote} »
                </blockquote>
                <p className="text-[0.88rem] text-white/52 leading-[1.85] max-w-[620px] mb-4">
                  {e.body}
                </p>
                <p className="text-[0.88rem] leading-[1.85] max-w-[620px]">
                  <strong className="text-white/82 font-medium">{e.bold}</strong>
                  <span className="text-white/52">{e.rest}</span>
                </p>
                <div className="mt-6 text-[0.8rem] font-medium text-sc-green border-b border-[#6edea0]/30 pb-[0.15rem] inline-block cursor-pointer hover:border-sc-green transition-colors">
                  {e.link}
                </div>
              </div>
            )}  
          </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 sm:px-6 lg:px-10 py-14 border-t border-white/[0.08]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif font-light text-[1.62rem] text-white/65 max-w-[420px] leading-[1.4]">Vous vous reconnaissez dans l&apos;un de ces enjeux ? <em className="not-italic text-sc-green">Parlons-en.</em></p>
          <a
            href="/contact"
            className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
          >
            Prendre contact →
          </a>
        </div>
      </div>
    </section>
  )
}
