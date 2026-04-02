const STATS = [
  { num: '2018', label: 'Année de création — Nantes' },
  { num: '8',    label: 'Consultants seniors dans le collectif' },
  { num: '28',   label: 'Projets livrés depuis la création' },
  { num: '800k€',label: 'Chiffre d\'affaires 2024' },
  { num: '19%',  label: 'Marge nette 2024' },
]

const PILLARS = [
  { title: '100% seniors', desc: 'Aucun junior dans notre collectif. Chaque mission est prise en main par un expert avec au minimum 7 ans d\'expérience CRM.' },
  { title: 'Transparence & autonomie', desc: 'Nos consultants choisissent leurs missions, négocient leur TJM et ont un droit de regard sur les décisions collectives.' },
  { title: 'IA dans le delivery', desc: 'Nos experts utilisent les meilleurs LLMs au quotidien. L\'IA n\'est pas un argument commercial — c\'est une pratique intégrée.' },
  { title: 'Engagement sur le résultat', desc: 'Nous livrons des plateformes adoptées, pas seulement déployées. L\'adoption fait partie de notre définition du succès.' },
]

const CLIENTS = [
  { name: 'Manitou', sector: 'Industrie / Agro', tool: 'Dynamics 365' },
  { name: 'Groupe Roullier', sector: 'Industrie / Agro', tool: 'Salesforce' },
  { name: 'SNCF', sector: 'Transport', tool: 'Salesforce' },
  { name: 'Rothschild & Co', sector: 'Banque & Finance', tool: 'Dynamics 365' },
  { name: 'Ardian', sector: 'Private Equity', tool: 'Salesforce' },
  { name: 'Orange Business', sector: 'Télécoms', tool: 'Salesforce' },
  { name: 'CGI France', sector: 'Services IT', tool: 'Salesforce' },
  { name: 'Groupe Astek', sector: 'Ingénierie & Conseil', tool: 'Dynamics 365' },
  { name: 'Javista', sector: 'Services', tool: 'Salesforce' },
]

export default function APropos() {
  return (
    <section id="apropos" className="border-t border-white/[0.08]">
      {/* Hero */}
      <div className="px-10 pt-20 pb-12 grid grid-cols-2 gap-16 border-b border-white/[0.08]">
        <div>
          <div className="text-[0.67rem] uppercase tracking-[0.14em] text-sc-green font-medium mb-7">
            À propos de ShiftC
          </div>
          <h2 className="font-serif font-light text-[2.75rem] leading-[1.1] tracking-[-0.025em]">
            Un cabinet CRM qui ne ressemble à{' '}
            <em className="not-italic text-sc-green">aucune ESN</em>.
          </h2>
          <p className="text-[0.9rem] text-white/50 leading-[1.8] mt-7">
            Fondé en 2018 à Nantes, ShiftC est un collectif de consultants seniors
            spécialisés en CRM et IA. Nous intervenons sur Salesforce et Microsoft
            Dynamics 365 pour des organisations qui veulent des projets qui tiennent
            leurs promesses.
          </p>
        </div>
        <div className="text-[0.86rem] text-white/50 leading-[1.85] pt-2">
          <p>
            ShiftC est né d&apos;un constat simple : les projets CRM échouent rarement à
            cause de la technologie. Ils échouent à cause du manque de séniorité,
            d&apos;une adoption négligée, et d&apos;équipes prestataires qui tournent.
          </p>
          <p className="mt-4">
            Nous avons construit un modèle différent — un collectif d&apos;experts autonomes,
            impliqués dans chaque mission, qui livrent avec le même niveau d&apos;exigence
            que s&apos;ils étaient dans votre organisation.
          </p>
        </div>
      </div>

      {/* Chiffres */}
      <div className="grid grid-cols-5 border-b border-white/[0.08]">
        {STATS.map((s, i) => (
          <div key={i} className={`px-6 py-7 ${i < 4 ? 'border-r border-white/[0.08]' : ''}`}>
            <div className="font-serif text-[2.2rem] font-bold text-sc-green leading-none mb-1">
              {s.num}
            </div>
            <div className="text-[0.72rem] text-white/40 leading-[1.5]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ADN */}
      <div className="px-10 py-14 border-b border-white/[0.08]">
        <div className="text-[0.67rem] uppercase tracking-[0.14em] text-white/28 mb-8">
          Notre ADN
        </div>
        <div className="grid grid-cols-2 gap-5">
          {PILLARS.map((p, i) => (
            <div key={i} className="p-6 border border-white/[0.1] rounded-[8px] bg-sc-bg2">
              <div className="text-[0.88rem] font-semibold text-sc-text mb-2">◈ {p.title}</div>
              <div className="text-[0.78rem] text-white/45 leading-[1.65]">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div className="px-10 py-12">
        <div className="text-[0.67rem] uppercase tracking-[0.14em] text-white/28 mb-8 text-center">
          Ils nous font confiance
        </div>
        <div className="grid grid-cols-5 gap-3">
          {CLIENTS.map((c, i) => (
            <div key={i} className="p-4 bg-sc-bg2 border border-white/[0.08] rounded-[8px]">
              <div className="text-[0.82rem] font-medium text-white/70">{c.name}</div>
              <div className="text-[0.68rem] text-white/30 mt-1">{c.sector}</div>
              <div className="text-[0.62rem] text-[#6edea0]/60 mt-1">{c.tool}</div>
            </div>
          ))}
          <div className="p-4 bg-[#6edea0]/[0.04] border border-[#6edea0]/15 rounded-[8px] flex items-center justify-center">
            <div className="text-[0.75rem] text-[#6edea0]/50 text-center leading-[1.5]">
              + d&apos;autres<br />références
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
