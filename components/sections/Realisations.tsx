'use client'
const REALISATIONS = [
  { tag: 'Salesforce', title: 'Déploiement Sales Cloud pour une direction commerciale de 200 utilisateurs', meta: 'Industrie · Sales Cloud · CPQ · 8 mois', img: '/images/real-salesforce.svg' },
  { tag: 'Dynamics 365', title: 'Migration CRM vers Dynamics 365 Sales & Service pour un groupe de services', meta: 'Services B2B · D365 · Power Platform · 12 mois', img: '/images/real-dynamics.svg' },
  { tag: 'Agent IA', title: 'Déploiement d\'Agentforce sur Salesforce pour automatiser le service client', meta: 'Assurance · Agentforce · Claude · 4 mois', img: '/images/real-agentforce.svg' },
  { tag: 'CRM Adoption', title: 'Plan d\'adoption post go-live pour un Salesforce à 40 % d\'utilisation', meta: 'Distribution · Adoption · Formation · 6 mois', img: '/images/real-adoption.svg' },
  { tag: 'Run & Évolution', title: 'Partenaire Run depuis 3 ans sur une plateforme Dynamics 365 multi-entités', meta: 'Énergie · D365 · Dataverse · Contrat annuel', img: '/images/real-run.svg' },
  { tag: 'Agent IA', title: 'Intégration Microsoft Copilot for Sales sur Dynamics 365 pour une force de vente internationale', meta: 'Retail · Copilot · D365 · 5 mois', img: '/images/real-copilot.svg' },
]

const CLIENTS = [
  { name: 'Manitou', logo: '/images/logos/manitou.svg' },
  { name: 'Groupe Roullier', logo: '/images/logos/roullier.svg' },
  { name: 'SNCF', logo: '/images/logos/sncf.svg' },
  { name: 'Rothschild & Co', logo: '/images/logos/rothschild.svg' },
  { name: 'Ardian', logo: '/images/logos/ardian.svg' },
  { name: 'Orange Business', logo: '/images/logos/orange-business.svg' },
  { name: 'CGI France', logo: '/images/logos/cgi.svg' },
  { name: 'Groupe Astek', logo: '/images/logos/astek.svg' },
  { name: 'Javista', logo: '/images/logos/javista.svg' },
]

export default function Realisations() {
  return (
    <section id="realisations" className="border-t border-white/[0.08]">
      {/* Header */}
      <div className="px-10 py-20 border-b border-white/[0.08]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Nos réalisations
          </div>
          <h2 className="font-serif font-light text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-8">
            Des projets livrés. Des équipes <em className="not-italic text-sc-green">convaincues</em>.
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.8] max-w-[720px]">
            Six exemples de missions menées par nos experts seniors — du cadrage au go-live,
            sur Salesforce, Dynamics 365 et les agents IA.
          </p>
        </div>
      </div>

      {/* Grille 3×2 */}
      <div className="px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="h-40 relative overflow-hidden bg-[#0a1a10]">
              <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
            </div>
            {/* Texte */}
            <div className="p-5">
              <span className="text-[0.6rem] uppercase tracking-[0.08em] px-3 py-1.5 rounded-full bg-sc-green/15 text-sc-green font-medium inline-block mb-4">
                {r.tag}
              </span>
              <h3 className="font-serif font-light text-[1.25rem] leading-[1.3] tracking-[-0.015em] text-white mb-3">
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
        <div className="text-[0.8rem] uppercase tracking-[0.14em] text-white/28 text-center mb-8">
          Ils nous font confiance
        </div>
        <div className="relative overflow-hidden">
          {/* Fondus latéraux */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sc-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sc-bg to-transparent z-10 pointer-events-none" />
          {/* Défilement */}
          <div className="flex gap-8 animate-[scroll_22s_linear_infinite] w-max items-center">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center h-12 px-6 flex-shrink-0
                  border border-white/[0.08] rounded-lg min-w-[160px]
                  hover:border-white/20 transition-all cursor-default
                  opacity-40 hover:opacity-70
                "
              >
                <img src={c.logo} alt={c.name} className="h-7 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-10 py-14 border-t border-white/[0.08]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif font-light text-[1.35rem] text-white/65 max-w-[520px] leading-[1.4]">
            Un projet similaire ?{' '}
            <em className="not-italic text-sc-green">Parlons de votre contexte.</em>
          </p>
          <a
            href="/contact"
            className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
          >
            Parler de votre projet →
          </a>
        </div>
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
