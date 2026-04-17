'use client'

import { useState, useRef } from 'react'

const VALEURS = [
  { num: '01', title: 'Transparence financière', desc: 'Une rémunération alignée sur la valeur que vous créez. Dialogue ouvert pour convenir ensemble des missions et des modalités.' },
  { num: '02', title: 'Confiance & autonomie', desc: 'Vous vous organisez comme vous le souhaitez. Aucune contrainte de présence inutile. Une seule règle : la satisfaction de nos clients.' },
  { num: '03', title: 'Expertise CRM', desc: 'Une expertise forte, multi-solutions, qui vous rend adaptable et employable. Avec l\'exigence de continuer à apprendre en permanence.' },
  { num: '04', title: 'Esprit d\'équipe & droit de véto', desc: 'L\'harmonie du collectif est essentielle. Vous avez un droit de regard sur les prochains candidats — et eux auront le même sur vous.' },
  { num: '05', title: 'Satisfaction client', desc: 'Notre contrainte la plus forte. Nous n\'avons pas beaucoup de règles — mais un client insatisfait est traité avec la plus haute importance.' },
]

const TEMOIGNAGES = [
  { initial: 'M', name: 'Matthieu', role: 'Expert CRM Salesforce · 1er collaborateur ShiftC', tag: 'Salesforce', quote: 'En tant qu\'expert CRM chez ShiftC, j\'allie expertise technique et valeurs humaines pour offrir des solutions de qualité, portées par un esprit d\'équipe fort avec nos clients.', body: 'Matthieu fait partie des membres fondateurs du collectif ShiftC. Il incarne ce que le projet a voulu construire dès le départ : un expert senior qui s\'implique à la fois sur les aspects techniques et humains de chaque projet.' },
  { initial: 'R', name: 'Rodolphe', role: 'Business analyst Senior - MS Dynamics & Salesforce', tag: 'Salesforce · D365', quote: 'Consultant fonctionnel épanoui chez ShiftC, je valorise la confiance, la transparence du collectif et l\'esprit d\'équipe — tout en envisageant sereinement la croissance de l\'entreprise.', body: 'Avec plus de 20 ans d\'expérience dans l\'IT, Rodolphe intervient avec sérénité sur les problématiques CRM les plus complexes. Ce qui le retient chez ShiftC : la confiance que lui accorde le collectif et la liberté de se concentrer sur ce qu\'il fait le mieux.' },
  { initial: 'J', name: 'Jimmy', role: 'Tech lead MS Dynamics', tag: 'Salesforce', quote: 'Autonome et confiant, j\'aime la liberté d\'action chez ShiftC, et j\'envisage l\'avenir avec pragmatisme et sérénité.', body: 'Jimmy imagine la solution CRM en mesurant toujours les impacts sur la globalité du SI. Rigoureux et créatif, il apprécie par-dessus tout l\'autonomie que lui offre ShiftC — et la confiance que cela implique dans les deux sens.' },
  { initial: 'J', name: 'Jacques', role: 'Expert CRM · 9 ans dans le collectif', tag: 'Salesforce · D365', quote: 'Fort de mes 9 ans d\'expérience chez ShiftC, j\'apprécie l\'ambiance conviviale et le management transparent et humain qui caractérise notre collectif.', body: 'Jacques accompagne ses clients sur les aspects à la fois métiers et techniques de leur gestion de la relation client. Son engagement au sein de ShiftC tient en deux mots : ambiance et confiance.' },
  { initial: 'H', name: 'Hawa', role: 'Experte MS Dynamics & IA - Responsable des activités à Paris', tag: 'Dynamics 365', quote: 'Dynamique et expérimentée, j\'apporte mon expertise en CRM Dynamics à ShiftC sur Paris — sur les projets stratégiques et le développement commercial.', body: 'Passionnée et expérimentée, Hawa met à profit son expertise technique et son excellent relationnel pour intervenir sur les projets stratégiques depuis Paris.' },
]

const PROCESS = [
  { num: '01', title: 'Cadrer la collaboration', desc: 'On échange sur vos aspirations, l\'adéquation de votre projet professionnel avec ShiftC, et votre adhésion à nos valeurs. Les compétences techniques ne suffisent pas — la personnalité compte autant.' },
  { num: '02', title: 'Validation avec l\'équipe', desc: 'Un ou plusieurs consultants ShiftC échangent avec vous pour valider votre expertise CRM. C\'est aussi l\'occasion de prendre le pouls du collectif — et pour l\'équipe d\'exercer son droit de regard.' },
  { num: '03', title: 'Journée « Vis ma vie »', desc: 'Une journée au sein de ShiftC pour finaliser les modalités de la collaboration — dans un esprit d\'immersion, pas d\'entretien. Vous découvrez le quotidien du collectif de l\'intérieur.' },
]

const FAQ = [
  { q: 'Quelles sont les opportunités actuellement disponibles ?', a: 'Nous grandissons de manière raisonnée, au rythme des belles personnalités intéressées pour nous rejoindre. Nous ne recruterons pas un candidat s\'il ne coche que les cases liées aux compétences techniques. Retrouvez nos offres sur LinkedIn.' },
  { q: 'Comment ShiftC soutient-elle le développement professionnel ?', a: 'Nos années sont basées sur un volume de 200 jours facturables, ce qui laisse du temps pour réfléchir à votre trajectoire personnelle, vous former aux sujets qui vous intéressent et participer à des événements au cœur de vos expertises.' },
  { q: 'Comment est géré l\'équilibre vie professionnelle / personnelle ?', a: '12 jours de RTT en plus des congés payés — mais surtout une autonomie réelle dans l\'organisation du travail. Vous gérez votre temps sans contrainte de présence inutile, en fonction de vos envies et des périodes.' },
  { q: 'Dans quels secteurs ShiftC intervient-elle ?', a: 'Nous travaillons dans tous les secteurs d\'activité — toutes les entreprises ont besoin d\'un CRM. Historiquement, nos clients sont dans la finance, les services, le transport et le retail.' },
  { q: 'En cas de succès, quelles sont les étapes avant l\'intégration ?', a: 'Après la journée "Vis ma vie", les modalités de collaboration sont définies ensemble : type de contrat, TJM, première mission envisagée. L\'intégration se fait naturellement dans le collectif.' },
]

export default function Rejoindre() {
  const [current, setCurrent] = useState(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captcha) return alert('Veuillez cocher le captcha')
    const form = formRef.current!
    const data = new FormData(form)
    setLoading(true)
    try {
      const res = await fetch('/api/candidature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: data.get('prenom'),
          nom: data.get('nom'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      if (res.ok) { setSubmitted(true); form.reset() }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="equipe" className="border-t border-white/[0.08]">
      {/* Hero */}
      <div className="px-10 py-20 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">
            Rejoindre ShiftC
          </div>
          <h2 className="font-serif font-light text-[2.9rem] leading-[1.1] tracking-[-0.025em] mb-10">
            Un collectif d&apos;experts.<br />
            Pas une <em className="not-italic text-sc-green">ESN</em>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-[1rem] text-white/50 leading-[1.8]">
              Chez ShiftC, vous choisissez vos missions, vous négociez votre rémunération,
              et vous avez un droit de regard sur les personnes qui nous rejoignent.{' '}
              <strong className="text-white/80 font-medium">La seule règle : la satisfaction de nos clients.</strong>
            </p>
            <div className="text-[1rem] text-white/50 leading-[1.8]">
              <p>ShiftC ne recrute pas des compétences. <strong className="text-white/80 font-medium">ShiftC recrute des personnalités.</strong> Nous cherchons des experts CRM confirmés qui partagent nos valeurs — autonomie, transparence, exigence.</p>
              <p className="mt-4">Nous grandissons de manière raisonnée. <strong className="text-white/80 font-medium">Si vous cochez les cases techniques mais pas les valeurs, nous ne travaillerons pas ensemble.</strong> Si vous cochez les deux, parlons-en.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Valeurs */}
      <div className="px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">Nos valeurs</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALEURS.map((v) => (
              <div key={v.num} className="group rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col gap-3 transition-all duration-300 hover:border-sc-green/25 hover:bg-white/[0.035]">
                <div className="font-serif text-[0.8rem] font-bold text-sc-green/40">{v.num}</div>
                <div className="text-[0.95rem] font-semibold text-white/80 leading-[1.3]">{v.title}</div>
                <div className="text-[0.85rem] text-white/50 leading-[1.7]">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Témoignages carousel */}
      <div className="border-b border-white/[0.08]">
        <div className="px-10 pt-16 pb-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-0">Ce que disent les Shifteurs</div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TEMOIGNAGES.map((t, i) => (
              <div key={i} className="min-w-full px-10 py-10 grid grid-cols-[280px_1fr] gap-16 items-start">
                {/* Photo placeholder */}
                <div className="h-80 bg-sc-bg2 border border-[#6edea0]/15 rounded-[12px] flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-[#6edea0]/10 border border-[#6edea0]/20 flex items-center justify-center font-serif text-[1.6rem] font-light text-sc-green">
                    {t.initial}
                  </div>
                  <div className="text-[0.88rem] font-semibold text-sc-text">{t.name}</div>
                  <div className="text-[0.72rem] text-white/40 text-center leading-[1.5] px-4">{t.role}</div>
                  <span className="text-[0.62rem] uppercase tracking-[0.08em] bg-[#6edea0]/10 text-sc-green px-2 py-1 rounded-full">{t.tag}</span>
                </div>
                {/* Contenu */}
                <div className="pt-2">
                  <blockquote className="font-serif italic font-light text-[1.5rem] text-sc-text leading-[1.4] tracking-[-0.01em] border-l-2 border-sc-green pl-6 mb-6">
                    {t.quote}
                  </blockquote>
                  <p className="text-[0.88rem] text-white/50 leading-[1.85]">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Nav dots + flèches */}
        <div className="px-10 pb-10 flex items-center gap-3">
          <div className="flex gap-2">
            {TEMOIGNAGES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-sc-green' : 'bg-white/15'}`}
              />
            ))}
          </div>
          <div className="flex gap-2 ml-auto">
            <button onClick={() => setCurrent((c) => (c - 1 + TEMOIGNAGES.length) % TEMOIGNAGES.length)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-sc-green hover:text-sc-green transition-all">←</button>
            <button onClick={() => setCurrent((c) => (c + 1) % TEMOIGNAGES.length)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-sc-green hover:text-sc-green transition-all">→</button>
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <div id="candidature" className="px-10 py-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="text-[0.72rem] uppercase tracking-[0.14em] text-sc-green font-semibold mb-7">Candidature</div>
          <h3 className="font-serif font-light text-[1.9rem] leading-[1.2] tracking-[-0.02em] mb-6">
            Vous vous reconnaissez<br />dans tout ça ?<br />
            <em className="not-italic text-sc-green">Écrivez-nous.</em>
          </h3>
          <p className="text-[1rem] text-white/50 leading-[1.8]">
            Pas d&apos;offre d&apos;emploi ouverte en permanence — nous recrutons au rythme
            des belles rencontres. Si votre profil et vos valeurs correspondent,
            on trouvera un contexte pour collaborer.
          </p>
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
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Prénom</label>
                <input name="prenom" required placeholder="Votre prénom"
                  className="bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Nom</label>
                <input name="nom" required placeholder="Votre nom"
                  className="bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Email</label>
              <input name="email" type="email" required placeholder="votre@email.com"
                className="bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-medium text-white/45 uppercase tracking-[0.04em]">Message</label>
              <textarea name="message" required rows={4} placeholder="Parlez-nous de vous — votre parcours, ce qui vous attire chez ShiftC, vos disponibilités..."
                className="bg-sc-bg2 border border-white/12 rounded-md px-4 py-3 text-[0.84rem] text-sc-text placeholder:text-white/18 focus:outline-none focus:border-sc-green transition-colors resize-none" />
            </div>
            {/* Captcha simulé */}
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
