'use client'
const REALISATIONS = [
  { tag: 'Salesforce', title: 'Déploiement Sales Cloud pour une direction commerciale de 200 utilisateurs', meta: 'Industrie · Sales Cloud · CPQ · 8 mois' },
  { tag: 'Dynamics 365', title: 'Migration CRM vers Dynamics 365 Sales & Service pour un groupe de services', meta: 'Services B2B · D365 · Power Platform · 12 mois' },
  { tag: 'Agent IA', title: 'Déploiement d\'Agentforce sur Salesforce pour automatiser le service client', meta: 'Assurance · Agentforce · Claude · 4 mois' },
  { tag: 'CRM Adoption', title: 'Plan d\'adoption post go-live pour un Salesforce à 40 % d\'utilisation', meta: 'Distribution · Adoption · Formation · 6 mois' },
  { tag: 'Run & Évolution', title: 'Partenaire Run depuis 3 ans sur une plateforme Dynamics 365 multi-entités', meta: 'Énergie · D365 · Dataverse · Contrat annuel' },
  { tag: 'Agent IA', title: 'Intégration Microsoft Copilot for Sales sur Dynamics 365 pour une force de vente internationale', meta: 'Retail · Copilot · D365 · 5 mois' },
]

const CLIENTS = [
  'Manitou', 'Groupe Roullier', 'SNCF', 'Rothschild & Co',
  'Ardian', 'Orange Business', 'CGI France', 'Groupe Astek', 'Javista',
]

export default function Realisations() {
  return (
    <section id="realisations" className="border-t border-white/[0.08]">
      {/* Header */}
      <div className="px-10 pt-20 pb-10 flex items-end justify-between border-b border-white/[0.08]">
        <div>
          <div className="text-[0.67rem] uppercase tracking-[0.14em] text-sc-green font-medium mb-7">
            Réalisations
          </div>
          <h2 className="font-serif font-light text-[2.9rem] leading-[1.1] tracking-[-0.025em]">
            Des projets livrés.<br />
            Des équipes <em className="not-italic text-sc-green">convaincues</em>.
          </h2>
          <p className="text-[0.88rem] text-white/50 leading-[1.8] max-w-[420px] mt-6">
            Six exemples de missions menées par nos experts seniors — du cadrage au go-live,
            sur Salesforce, Dynamics 365 et les agents IA.
          </p>
        </div>
      </div>

      {/* Grille 3×2 */}
      <div className="px-10 py-10 grid grid-cols-3 gap-4">
        {REALISATIONS.map((r, i) => (
          <div
            key={i}
            className="
              border border-white/[0.1] rounded-[10px] bg-sc-bg2 overflow-hidden
              hover:border-[#6edea0]/35 hover:-translate-y-1 transition-all duration-200
              cursor-pointer
            "
          >
            {/* Visuel abstrait SVG */}
            <div className="h-36 bg-gradient-to-br from-[#0f2a1a] to-[#0d1c12] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[3rem] font-bold text-[#6edea0]/[0.06]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-sc-green/20" />
            </div>
            {/* Texte */}
            <div className="p-5">
              <span className="text-[0.62rem] uppercase tracking-[0.08em] px-[0.55rem] py-[0.2rem] rounded-full bg-[#6edea0]/10 text-sc-green inline-block mb-3">
                {r.tag}
              </span>
              <h3 className="font-serif font-light text-[1.05rem] leading-[1.3] text-sc-text mb-2">
                {r.title}
              </h3>
              <div className="text-[0.72rem] text-white/35 tracking-[0.03em]">
                {r.meta}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel clients */}
      <div className="border-t border-white/[0.08] px-10 py-10">
        <div className="text-[0.67rem] uppercase tracking-[0.14em] text-white/28 text-center mb-8">
          Ils nous font confiance
        </div>
        <div className="relative overflow-hidden">
          {/* Fondus latéraux */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sc-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sc-bg to-transparent z-10 pointer-events-none" />
          {/* Défilement */}
          <div className="flex gap-6 animate-[scroll_22s_linear_infinite] w-max">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center h-10 px-6 flex-shrink-0
                  border border-white/[0.1] rounded-md min-w-[140px]
                  text-[0.85rem] font-medium text-white/35
                  hover:text-white/70 hover:border-white/25 transition-all cursor-default
                "
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-10 py-12 flex items-center justify-between border-t border-white/[0.08]">
        <p className="font-serif font-light text-[1.3rem] text-white/65 max-w-[380px] leading-[1.4]">
          Un projet similaire ?{' '}
          <em className="not-italic text-sc-green">Parlons de votre contexte.</em>
        </p>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
        >
          Parler de votre projet →
        </button>
      </div>

      {/* Keyframe carousel dans le style global — ajouté ici via style tag */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
