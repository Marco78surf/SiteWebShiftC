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
      <div className="px-10 pt-20 pb-16 border-b border-white/[0.08]">
        <div className="text-[0.67rem] uppercase tracking-[0.14em] text-sc-green font-medium mb-7">
          Notre approche · Nos convictions
        </div>
        <h2 className="font-serif font-light text-[2.9rem] leading-[1.1] tracking-[-0.025em] max-w-[640px]">
          Les choix qui définissent{' '}
          <em className="not-italic text-sc-green">la manière dont nous travaillons</em>.
        </h2>
        <p className="text-[0.9rem] text-white/50 leading-[1.8] max-w-[520px] mt-7">
          Dans un marché CRM saturé de promesses, ShiftC a fait des choix délibérément différents.
          Voici ceux sur lesquels nous ne transigeons pas.
        </p>
      </div>

      {/* Convictions */}
      <div className="px-10">
        {CONVICTIONS.map((c, i) => (
          <div
            key={i}
            className="grid grid-cols-[48px_1fr] gap-8 py-12 border-b border-white/[0.08] last:border-none"
          >
            <div className="font-serif text-[0.8rem] font-bold text-[#6edea0]/40 pt-1 tracking-[0.04em]">
              {c.num}
            </div>
            <div>
              <h3 className="font-serif font-light text-[1.55rem] leading-[1.2] tracking-[-0.02em] text-sc-text mb-4">
                {c.title}
              </h3>
              <p className="text-[0.88rem] text-white/52 leading-[1.85] max-w-[620px]">
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA bas */}
      <div className="px-10 py-14 flex items-center justify-between border-t border-white/[0.08]">
        <p className="font-serif font-light text-[1.4rem] text-white/65 max-w-[440px] leading-[1.4]">
          Ces convictions se traduisent concrètement dans chacune de{' '}
          <em className="not-italic text-sc-green">nos offres</em>.
        </p>
        <button
          onClick={() => document.querySelector('#offres')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-sc-green text-sc-bg text-[0.82rem] font-medium px-6 py-[0.7rem] rounded-full hover:opacity-88 transition-opacity"
        >
          Découvrir nos offres →
        </button>
      </div>
    </section>
  )
}
