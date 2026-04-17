import Nav from '@/components/Nav'
import Candidat from '@/components/sections/Candidat'

export default function CandidatPage() {
  return (
    <>
      <Nav />
      <main>
        <Candidat />
      </main>
      <footer className="border-t border-white/[0.08] px-4 sm:px-6 lg:px-10 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[0.75rem] text-white/25">
          ShiftC · Nantes · Rennes · Paris ·{' '}
          <a href="mailto:contact@shiftc.fr" className="hover:text-white/50 transition-colors">
            contact@shiftc.fr
          </a>
          {' · '}
          <a href="/mentions-legales" className="cursor-pointer hover:text-white/50 transition-colors">Mentions légales</a>
          {' · '}

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
