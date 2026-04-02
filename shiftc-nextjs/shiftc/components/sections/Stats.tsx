const STATS = [
  { num: '100%',         label: 'Consultants seniors' },
  { num: 'Sf · D365',   label: 'Partenaire Salesforce & Microsoft' },
  { num: 'IA',          label: 'Intégrée au delivery' },
  { num: 'Grands comptes', label: 'Références CAC40 & finance' },
]

export default function Stats() {
  return (
    <div
      className="grid grid-cols-4 border-t border-white/[0.07] animate-fade-up delay-500"
      style={{ height: '58px' }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          className={`
            flex flex-col justify-center px-7
            ${i < STATS.length - 1 ? 'border-r border-white/[0.06]' : ''}
          `}
        >
          <div className="font-serif text-[0.82rem] text-sc-green leading-none tracking-[-0.01em] mb-[0.12rem]">
            {s.num}
          </div>
          <div className="text-[0.57rem] text-white/30 tracking-[0.02em]">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
