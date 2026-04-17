'use client'

const PILLARS = [
  { title: '100% seniors', desc: 'Aucun junior dans notre collectif. Chaque mission est prise en main par un expert avec au minimum 7 ans d\'expérience CRM.' },
  { title: 'Transparence & autonomie', desc: 'Nos consultants choisissent leurs missions, négocient leur TJM et ont un droit de regard sur les décisions collectives.' },
  { title: 'IA dans le delivery', desc: 'Nos experts utilisent les meilleurs LLMs au quotidien. L\'IA n\'est pas un argument commercial — c\'est une pratique intégrée.' },
  { title: 'Engagement sur le résultat', desc: 'Nous livrons des plateformes adoptées, pas seulement déployées. L\'adoption fait partie de notre définition du succès.' },
]

export default function APropos() {
  return (
    <section id="apropos" className="border-t border-white/[0.08]">
      {/* Hero */}
      <div className="px-4 sm:px-6 lg:px-10 py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            À propos de ShiftC
          </div>
          <h2 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-10">
            Un cabinet CRM qui ne ressemble à{' '}
            <em className="not-italic text-sc-green">aucune ESN</em>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-[1rem] text-white/50 leading-[1.8]">
              Fondé en 2018 à Nantes, ShiftC est un <strong className="text-white/80 font-medium">collectif de consultants seniors</strong>{' '}
              spécialisés en CRM et IA. Nous intervenons sur Salesforce et Microsoft
              Dynamics 365 pour des organisations qui veulent des projets qui tiennent
              leurs promesses.
            </p>
            <div className="text-[1rem] text-white/50 leading-[1.8]">
              <p>
                ShiftC est né d&apos;un constat simple : <strong className="text-white/80 font-medium">les projets CRM échouent rarement à
                cause de la technologie</strong>. Ils échouent à cause du manque de séniorité,
                d&apos;une adoption négligée, et d&apos;équipes prestataires qui tournent.
              </p>
              <p className="mt-4">
                <strong className="text-white/80 font-medium">Nous avons construit un modèle différent</strong> : un collectif d&apos;experts autonomes,
                impliqués dans chaque mission, qui livrent avec le même niveau d&apos;exigence
                que s&apos;ils étaient dans votre organisation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ADN */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Notre ADN
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <div key={i} className="group rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-300 hover:border-sc-green/25 hover:bg-white/[0.035]">
              <div className="text-[0.95rem] font-semibold text-white/80 mb-3">◈ {p.title}</div>
              <div className="text-[0.9rem] text-white/55 leading-[1.75]">{p.desc}</div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Quelques chiffres */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-8">
            Quelques chiffres
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sc-green/60 to-sc-green/0" />
              <div className="font-serif text-[2.4rem] font-bold text-sc-green leading-none mb-3">2018</div>
              <div className="text-[0.85rem] text-white/55 leading-[1.6]">Année de création</div>
            </div>
            <div className="relative rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sc-green/60 to-sc-green/0" />
              <div className="font-serif text-[2.4rem] font-bold text-sc-green leading-none mb-3">+20%</div>
              <div className="text-[0.85rem] text-white/55 leading-[1.6]">Croissance du chiffre d&apos;affaires en 2025</div>
            </div>
            <div className="relative rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sc-green/60 to-sc-green/0" />
              <div className="font-serif text-[2.4rem] font-bold text-sc-green leading-none mb-3">4,5</div>
              <div className="text-[0.85rem] text-white/55 leading-[1.6]">Certifications par consultant en moyenne</div>
            </div>
            <div className="relative rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sc-green/60 to-sc-green/0" />
              <div className="font-serif text-[2.4rem] font-bold text-sc-green leading-none mb-3">3</div>
              <div className="text-[0.85rem] text-white/55 leading-[1.6]">Implantations — Nantes, Rennes et Paris</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
