import Nav from '@/components/Nav'
import Contact from '@/components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <Contact />
      </main>
      <footer className="border-t border-white/[0.08] px-10 py-5 flex items-center justify-between">
        <div className="text-[0.75rem] text-white/25">
          ShiftC · Nantes ·{' '}
          <a href="mailto:contact@shiftc.fr" className="hover:text-white/50 transition-colors">
            contact@shiftc.fr
          </a>
          {' · '}
          <span className="cursor-pointer hover:text-white/50 transition-colors">Mentions légales</span>
          {' · '}
          <span className="cursor-pointer hover:text-white/50 transition-colors">Politique de confidentialité</span>
        </div>
        <a
          href="https://www.linkedin.com/company/shiftc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.78rem] text-white/40 border border-white/12 px-4 py-1.5 rounded-md hover:border-sc-green hover:text-sc-green transition-all"
        >
          Suivre ShiftC sur LinkedIn →
        </a>
      </footer>
    </>
  )
}
