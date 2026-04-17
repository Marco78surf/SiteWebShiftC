'use client'
const CONVICTIONS = [
  {
    num: '01',
    title: 'Un projet CRM sans senior au cadrage, c\'est un projet qui déraille.',
    body: 'La plupart des échecs CRM ne se jouent pas en déploiement — ils se jouent dans les premières semaines. Chez ShiftC, chaque projet est cadré et suivi par un expert senior, de bout en bout. La séniorité n\'est pas une option : c\'est le fondement de notre modèle.',
  },
  {
    num: '02',
    title: 'L\'IA n\'est pas un argument commercial. C\'est une pratique quotidienne.',
    body: 'Nos consultants utilisent les meilleurs LLMs tous les jours — pour générer de la documentation, automatiser les tests, accélérer les revues de configuration. Ce n\'est pas un service vendu en plus : c\'est intégré dans chaque mission.',
  },
  {
    num: '03',
    title: 'Un CRM livré n\'est pas un CRM réussi.',
    body: 'Le go-live, c\'est le début — pas la fin. L\'adoption se prépare dès le cadrage, pas à la dernière semaine. C\'est pourquoi nos experts travaillent avec vos équipes dès les premières sessions : pour qu\'au go-live, le CRM soit déjà le leur.',
  },
  {
    num: '04',
    title: 'Un collectif d\'experts autonomes est plus fiable qu\'une organisation pyramidale.',
    body: 'ShiftC ne ressemble à aucune ESN. Nos consultants choisissent leurs missions, contribuent à leur rémunération, et ont un droit de regard sur les décisions collectives. Un expert qui choisit d\'être là livre différemment d\'un salarié qu\'on y envoie.',
  },
]

export default function Approche() {
  return (
    <section id="approche" className="border-t border-white/[0.08]">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-10 py-20 border-b border-white/[0.08]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Notre approche · Nos convictions
          </div>
          <h2 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-8">
            Les choix qui <span className="text-sc-green">définissent</span>{' '}
            <span className="text-white">la manière dont nous travaillons</span>.
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.8]">
            Dans un marché CRM saturé de promesses, ShiftC a fait des choix délibérément différents.
            Voici ceux sur lesquels nous ne transigeons pas.
          </p>
        </div>
      </div>

      {/* Convictions */}
      <div className="px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {CONVICTIONS.map((c, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-sc-green/30"
            >
              <div className="h-full border-l-4 border-sc-green/80 p-7">
                <div className="mb-4">
                  <span className="text-[0.75rem] uppercase tracking-[0.2em] text-white/50">
                    {c.num} CONVICTION
                  </span>
                </div>
                <h3 className="font-serif font-medium text-[1.45rem] leading-[1.2] tracking-[-0.02em] text-white mb-4">
                  {c.num === '01' ? (
                    <>Un projet CRM <span className="text-sc-green">sans senior</span> au cadrage, c&apos;est un projet qui déraille.</>
                  ) : c.num === '02' ? (
                    <>L&apos;IA n&apos;est pas un argument commercial. C&apos;est une <span className="text-sc-green">pratique quotidienne</span>.</>
                  ) : c.num === '03' ? (
                    <>Un <span className="text-sc-green">CRM livré</span> n&apos;est pas un CRM réussi.</>
                  ) : c.num === '04' ? (
                    <>Un collectif <span className="text-sc-green">d&apos;experts autonomes</span> est plus fiable qu&apos;une organisation pyramidale.</>
                  ) : (
                    c.title
                  )}
                </h3>
                <p className="text-[0.95rem] text-white/65 leading-[1.85]">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA bas */}
      <div className="px-4 sm:px-6 lg:px-10 py-14 border-t border-white/[0.08]">
        <div className="max-w-[900px] mx-auto flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif font-light text-[1.35rem] text-white/65 max-w-[440px] leading-[1.4]">Ces convictions se traduisent concrètement dans chacune de <em className="not-italic text-sc-green">nos offres</em>.</p>
          <button
            onClick={() => document.querySelector('#offres')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
          >
            Découvrir nos offres →
          </button>
        </div>
      </div>
    </section>
  )
}
