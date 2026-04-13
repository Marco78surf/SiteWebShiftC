'use client'

const STATS = [
  {
    num: '100%',
    label: 'de nos consultants experts et certifiés',
    green: false,
  },
  {
    num: 'Partenaires',
    label: 'Salesforce et Microsoft Dynamics',
    green: true,
  },
  {
    num: 'IA',
    label: 'Intégrée au delivery',
    green: false,
  },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-3 border-t border-white/[0.07]" style={{ height: '87px' }}>
      {STATS.map((s, i) => (
        <div
          key={i}
          className={`flex flex-col justify-center px-7 ${i < STATS.length - 1 ? 'border-r border-white/[0.06]' : ''}`}
        >
          <div
            className="font-serif leading-none tracking-[-0.01em] mb-[0.15rem]"
            style={{ fontSize: '1.2rem', fontWeight: 400, color: '#6edea0' }}
          >
            {s.num}
          </div>
          <div className="text-white/30" style={{ fontSize: '0.864rem' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
