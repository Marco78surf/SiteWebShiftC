'use client'

import { useState, useRef } from 'react'

export default function Contact() {
  const [captcha, setCaptcha] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const inputClass = 'w-full bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors'

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

  return (
    <section className="border-t border-white/[0.08]">
      {/* Hero */}
      <div className="px-4 sm:px-6 lg:px-10 py-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-sc-green/25 hover:bg-white/[0.04]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Contact
          </div>
          <h2 className="font-serif font-light text-[1.8rem] sm:text-[2.2rem] lg:text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-8">
            Vous vous retrouvez dans notre approche,<br />
            <span className="not-italic text-sc-green">laissez nous un message</span>
          </h2>
          <p className="text-[1rem] text-white/50 leading-[1.8] max-w-[720px]">
            Partagez-nous votre besoin, votre contexte ou vos ambitions : un expert senior vous recontacte sous 48h pour échanger en toute simplicité.
          </p>
        </div>
      </div>


      {/* Formulaire */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">Contact</div>
            <h3 className="font-serif font-light text-[1.9rem] leading-[1.2] tracking-[-0.02em] mb-6">
              Parlez-nous de votre besoin.
            </h3>
            <p className="text-[1rem] text-white/50 leading-[1.8]">
              Votre projet, votre contexte, vos attentes, vos coordonnées.
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
                <p className="font-serif font-light text-[1.2rem] text-sc-text">Message envoyé.</p>
                <p className="text-[0.85rem] text-white/45 mt-2">Un expert vous répondra sous 48h.</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <textarea name="message" required rows={4} placeholder="Décrivez votre projet : contexte, périmètre, timing envisagé..." className={inputClass + ' resize-none'} />
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
