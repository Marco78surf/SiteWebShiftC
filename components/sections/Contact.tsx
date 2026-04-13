'use client'

import { useState, useRef } from 'react'

export default function Contact() {
  const [mode, setMode] = useState<'prospect' | 'candidat'>('prospect')
  const [captcha, setCaptcha] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captcha) return alert('Veuillez cocher le captcha')
    const form = formRef.current!
    const data = new FormData(form)
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: data.get('prenom'),
          nom: data.get('nom'),
          email: data.get('email'),
          entreprise: data.get('entreprise'),
          sujet: data.get('sujet'),
          message: data.get('message'),
        }),
      })
      if (res.ok) { setSubmitted(true); form.reset() }
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors'

  return (
    <section id="contact" className="border-t border-white/[0.08]">
      {/* Zone principale */}
      <div className="grid grid-cols-2 min-h-[500px]">
        {/* Gauche — infos */}
        <div className="px-10 py-14 flex flex-col justify-between border-r border-white/[0.08]">
          <div>
            <h2 className="font-serif font-light text-[2.2rem] leading-[1.15] tracking-[-0.025em]">
              {mode === 'prospect'
                ? <>Parlons de<br />votre <em className="not-italic text-sc-green">projet</em>.</>
                : <>Vous êtes<br /><em className="not-italic text-sc-green">consultant CRM</em> ?</>}
            </h2>
            <p className="text-[0.86rem] text-white/50 leading-[1.85] mt-5">
              {mode === 'prospect'
                ? 'Décrivez-nous votre situation en quelques lignes — périmètre, contexte, timing. Un expert senior vous répond sous 48h.'
                : 'ShiftC recrute des personnalités, pas des CV. Si vous êtes expert Salesforce ou Dynamics avec au moins 7 ans d\'expérience et que nos valeurs vous parlent, la page Rejoindre ShiftC vous attend.'}
            </p>
          </div>
          {/* Coordonnées */}
          <div className="flex flex-col gap-5 mt-auto pt-10">
            {[
              { icon: '📍', label: 'Adresse', value: 'Nantes, Loire-Atlantique', sub: 'Interventions France entière' },
              { icon: '✉️', label: 'Email', value: 'contact@shiftc.fr' },
            ].map((info) => (
              <div key={info.label} className="flex items-start gap-3">
                <div className="w-8 h-8 border border-[#6edea0]/20 rounded-md flex items-center justify-center text-sm bg-[#6edea0]/05 flex-shrink-0">{info.icon}</div>
                <div>
                  <div className="text-[0.67rem] uppercase tracking-[0.08em] text-white/28 mb-1">{info.label}</div>
                  <div className="text-[0.84rem] text-white/65">{info.value}</div>
                  {info.sub && <div className="text-[0.78rem] text-white/35 mt-0.5">{info.sub}</div>}
                </div>
              </div>
            ))}
            <div className="flex gap-2 mt-2">
              {['LinkedIn', 'Twitter / X'].map((r) => (
                <div key={r} className="text-[0.72rem] text-white/45 border border-white/15 rounded-md px-3 py-1.5 hover:border-sc-green hover:text-sc-green transition-all cursor-pointer">{r}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Droite — formulaire ou redirect */}
        <div className="px-10 py-14">
          {mode === 'candidat' ? (
            <div className="flex flex-col justify-center h-full gap-6">
              <h3 className="font-serif font-light text-[1.6rem] leading-[1.25] tracking-[-0.02em]">
                Vous êtes consultant expert CRM ?<br />
                <em className="not-italic text-sc-green">On a une page pour vous.</em>
              </h3>
              <p className="text-[0.86rem] text-white/50 leading-[1.85]">
                La page &quot;Rejoindre ShiftC&quot; vous est entièrement dédiée — valeurs du collectif,
                témoignages de l&apos;équipe, processus de recrutement et formulaire de candidature.
              </p>
              <div className="flex flex-col gap-2">
                {['7 ans d\'expérience minimum en CRM', 'Salesforce ou Dynamics 365', 'Autonomie, transparence, exigence', 'Droit de véto sur les nouveaux membres'].map((v) => (
                  <div key={v} className="flex items-center gap-3 text-[0.82rem] text-white/55">
                    <span className="text-sc-green">—</span>{v}
                  </div>
                ))}
              </div>
              <a
                href="/#equipe"
                className="bg-sc-green text-sc-bg text-[0.84rem] font-semibold px-8 py-4 rounded-full w-fit hover:opacity-88 transition-opacity inline-block text-center no-underline"
              >
                Voir la page Rejoindre ShiftC →
              </a>
            </div>
          ) : submitted ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-sc-green text-4xl mb-4">✓</div>
                <p className="font-serif font-light text-[1.2rem] text-sc-text">Message envoyé.</p>
                <p className="text-[0.85rem] text-white/45 mt-2">Un expert vous répondra sous 48h.</p>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Prénom</label>
                  <input name="prenom" required placeholder="Votre prénom" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Nom</label>
                  <input name="nom" required placeholder="Votre nom" className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Email pro</label>
                  <input name="email" type="email" required placeholder="vous@entreprise.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Entreprise</label>
                  <input name="entreprise" placeholder="Votre entreprise" className={inputClass} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Sujet</label>
                <select name="sujet" className={inputClass + ' appearance-none cursor-pointer'}>
                  <option value="">Quel est votre besoin ?</option>
                  <option>Projet Salesforce</option>
                  <option>Projet Dynamics 365</option>
                  <option>Agent IA CRM</option>
                  <option>Run & Évolution</option>
                  <option>CRM Adoption</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Message</label>
                <textarea name="message" required rows={4} placeholder="Décrivez votre projet — contexte, périmètre, timing envisagé..." className={inputClass + ' resize-none'} />
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
                {loading ? 'Envoi en cours...' : 'Envoyer ma demande →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
