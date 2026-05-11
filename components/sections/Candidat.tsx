'use client'

import { useState, useRef } from 'react'

const PROCESS = [
  { num: '01', title: 'Cadrer la collaboration', desc: 'On échange sur vos aspirations, l\'adéquation de votre projet professionnel avec ShiftC, et votre adhésion à nos valeurs. Les compétences techniques ne suffisent pas. La personnalité compte autant.' },
  { num: '02', title: 'Validation avec l\'équipe', desc: 'Un ou plusieurs consultants ShiftC échangent avec vous pour valider votre expertise CRM. C\'est aussi l\'occasion de prendre le pouls du collectif et pour l\'équipe d\'exercer son droit de regard.' },
  { num: '03', title: 'Journée « Vis ma vie »', desc: 'Une journée au sein de ShiftC pour finaliser les modalités de la collaboration dans un esprit d\'immersion, pas d\'entretien. Vous découvrez le quotidien du collectif de l\'intérieur.' },
]

const CV_MAX_SIZE = 5 * 1024 * 1024 // 5 MB
const CV_ALLOWED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const CV_ALLOWED_EXTS = ['.pdf', '.doc', '.docx']

export default function Candidat() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState(false)
  const [cvError, setCvError] = useState('')
  const [cvName, setCvName] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const cvInputRef = useRef<HTMLInputElement>(null)

  const inputClass = 'w-full bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors'

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvError('')
    setCvName('')
    const file = e.target.files?.[0]
    if (!file) return
    const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'))
    if (!CV_ALLOWED_TYPES.includes(file.type) && !CV_ALLOWED_EXTS.includes(ext)) {
      setCvError('Format accepté : PDF, DOC, DOCX')
      e.target.value = ''
      return
    }
    if (file.size > CV_MAX_SIZE) {
      setCvError('Taille maximale : 5 Mo')
      e.target.value = ''
      return
    }
    setCvName(file.name)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captcha) return alert('Veuillez cocher le captcha')
    if (cvError) return
    const form = formRef.current!
    const data = new FormData(form)
    setLoading(true)
    try {
      const res = await fetch('/api/candidature', {
        method: 'POST',
        body: data,
      })
      if (res.ok) { setSubmitted(true); form.reset(); setCvName('') }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="border-t border-white/[0.08]">
      {/* Hero */}
      <div className="px-4 sm:px-6 lg:px-10 py-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-sc-green/25 hover:bg-white/[0.04]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Rejoindre ShiftC
          </div>
          <h2 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-8">
            Vous vous reconnaissez dans tout ça ?
            <em className="not-italic text-sc-green"> Écrivez-nous.</em>
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.8] max-w-[720px]">
            Pas d&apos;offre d&apos;emploi ouverte en permanence. Nous recrutons au rythme
            des belles rencontres. Si votre profil et vos valeurs correspondent,
            on trouvera un contexte pour collaborer.
          </p>
        </div>
      </div>

      {/* Processus */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">Notre processus</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROCESS.map((p) => (
              <div key={p.num} className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-3">
                <div className="font-serif text-[0.8rem] font-bold text-sc-green/40">{p.num}</div>
                <div className="text-[0.95rem] font-semibold text-white/80 leading-[1.3]">{p.title}</div>
                <div className="text-[0.85rem] text-white/50 leading-[1.7]">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">Candidature</div>
            <h3 className="font-serif font-light text-[1.9rem] leading-[1.2] tracking-[-0.02em] mb-6">
              Parlez-nous de vous.
            </h3>
            <p className="text-[1rem] text-white/50 leading-[1.8]">
              Votre parcours, ce qui vous attire chez ShiftC, vos disponibilités.
              Un expert du collectif vous répondra rapidement.
            </p>

            {/* Coordonnées */}
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-[#6edea0]/20 rounded-md flex items-center justify-center text-sm bg-[#6edea0]/05 flex-shrink-0">📍</div>
                <div>
                  <div className="text-[0.67rem] uppercase tracking-[0.08em] text-white/28 mb-1">Adresse</div>
                  <div className="text-[0.84rem] text-white/65">Nantes, Loire-Atlantique</div>
                  <div className="text-[0.78rem] text-white/35 mt-0.5">Interventions France entière</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-[#6edea0]/20 rounded-md flex items-center justify-center text-sm bg-[#6edea0]/05 flex-shrink-0">✉️</div>
                <div>
                  <div className="text-[0.67rem] uppercase tracking-[0.08em] text-white/28 mb-1">Email</div>
                  <div className="text-[0.84rem] text-white/65">contact@shiftc.fr</div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://www.linkedin.com/company/shiftc" target="_blank" rel="noopener noreferrer" className="text-[0.72rem] text-white/45 border border-white/15 rounded-md px-3 py-1.5 hover:border-sc-green hover:text-sc-green transition-all cursor-pointer">LinkedIn</a>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sc-green text-3xl mb-4">✓</div>
                <p className="font-serif font-light text-[1.2rem] text-sc-text">Candidature envoyée.</p>
                <p className="text-[0.85rem] text-white/45 mt-2">Nous reviendrons vers vous rapidement.</p>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Prénom</label>
                  <input name="prenom" required placeholder="Votre prénom" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Nom</label>
                  <input name="nom" required placeholder="Votre nom" className={inputClass} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Email</label>
                <input name="email" type="email" required placeholder="votre@email.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Message</label>
                <textarea name="message" required rows={4} placeholder="Parlez-nous de vous — votre parcours, ce qui vous attire chez ShiftC, vos disponibilités..." className={inputClass + ' resize-none'} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">CV <span className="normal-case text-white/25">(optionnel — PDF, DOC, DOCX · 5 Mo max)</span></label>
                <div
                  className="relative w-full bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 flex items-center gap-3 cursor-pointer hover:border-sc-green/50 transition-colors"
                  onClick={() => cvInputRef.current?.click()}
                >
                  <span className="text-sc-green/70 text-sm">↑</span>
                  <span className={`text-[0.84rem] ${cvName ? 'text-sc-text' : 'text-white/18'}`}>
                    {cvName || 'Déposer ou choisir un fichier…'}
                  </span>
                  {cvName && (
                    <button
                      type="button"
                      className="ml-auto text-white/30 hover:text-white/60 transition-colors text-xs"
                      onClick={(e) => { e.stopPropagation(); setCvName(''); if (cvInputRef.current) cvInputRef.current.value = '' }}
                    >✕</button>
                  )}
                  <input
                    ref={cvInputRef}
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={handleCvChange}
                  />
                </div>
                {cvError && <p className="text-[0.75rem] text-red-400">{cvError}</p>}
              </div>
              <button type="button" onClick={() => setCaptcha(!captcha)}
                className="flex items-center gap-3 bg-sc-bg2 border border-white/10 rounded-md px-4 py-3 cursor-pointer">
                <div className={`w-5 h-5 rounded border-[1.5px] flex items-center justify-center transition-all ${captcha ? 'bg-sc-green border-sc-green' : 'border-white/22'}`}>
                  {captcha && <span className="text-sc-bg text-xs font-bold">✓</span>}
                </div>
                <span className="text-[0.78rem] text-white/38">Je ne suis pas un robot</span>
                <span className="ml-auto text-[0.6rem] text-white/18 text-right leading-[1.4]">reCAPTCHA<br />Confidentialité · CGU</span>
              </button>
              <button type="submit" disabled={loading}
                className="bg-sc-green text-sc-bg text-[0.84rem] font-semibold py-4 rounded-full hover:opacity-88 transition-opacity disabled:opacity-50">
                {loading ? 'Envoi...' : 'Envoyer ma candidature →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
