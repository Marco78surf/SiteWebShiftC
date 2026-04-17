import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Enjeux from '@/components/sections/Enjeux'
import Approche from '@/components/sections/Approche'
import Offres from '@/components/sections/Offres'
import Realisations from '@/components/sections/Realisations'
import APropos from '@/components/sections/APropos'
import Rejoindre from '@/components/sections/Rejoindre'
import SectionDivider from '@/components/SectionDivider'
import DynamicSectionStage from '@/components/DynamicSectionStage'
import RiverCanvas from '@/components/RiverCanvas'
import TitleAnimator from '@/components/TitleAnimator'

export default function Home() {
  return (
    <>
      <RiverCanvas />
      <TitleAnimator />

      <div className="relative z-[2]">
      {/* Navigation sticky */}
      <Nav />

      <main>
        {/*
          Above the fold : nav (48px) + hero + stats (72px) = 100vh
          Le hero prend exactement 100vh - 48px - 72px
        */}
        <section id="accueil" className="flex flex-col h-[calc(100vh-4rem)]">
          <div className="flex-1 min-h-0">
            <Hero />
          </div>
          <Stats />
        </section>

        {/* Sections suivantes */}
        <div className="river-journey">

          <DynamicSectionStage section="Vos enjeux" index="01" mark="E" toneClass="section-stage--alpha">
            <Enjeux />
          </DynamicSectionStage>
          <SectionDivider />

          <DynamicSectionStage section="Notre approche" index="02" mark="A" toneClass="section-stage--beta">
            <Approche />
          </DynamicSectionStage>
          <SectionDivider />

          <DynamicSectionStage section="Nos offres" index="03" mark="O" toneClass="section-stage--gamma">
            <Offres />
          </DynamicSectionStage>
          <SectionDivider />

          <DynamicSectionStage section="Nos réalisations" index="04" mark="R" toneClass="section-stage--alpha">
            <Realisations />
          </DynamicSectionStage>
          <SectionDivider />

          <DynamicSectionStage section="À propos" index="05" mark="P" toneClass="section-stage--beta">
            <APropos />
          </DynamicSectionStage>
          <SectionDivider />

          <DynamicSectionStage section="Rejoindre ShiftC" index="06" mark="J" toneClass="section-stage--gamma">
            <Rejoindre />
          </DynamicSectionStage>
        </div>
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
      </div>
    </>
  )
}
