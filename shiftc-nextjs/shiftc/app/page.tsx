import Nav          from '@/components/Nav'
import Hero         from '@/components/sections/Hero'
import Stats        from '@/components/sections/Stats'
import Enjeux       from '@/components/sections/Enjeux'
import Approche     from '@/components/sections/Approche'
import Offres       from '@/components/sections/Offres'
import Realisations from '@/components/sections/Realisations'
import APropos      from '@/components/sections/APropos'
import Rejoindre    from '@/components/sections/Rejoindre'
import Contact      from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      {/* Navigation sticky — reste visible pendant tout le scroll */}
      <Nav />

      <main>
        {/* ① Above the fold : hero + stats */}
        <section id="accueil">
          <Hero />
          <Stats />
        </section>

        {/* ② Vos enjeux */}
        <Enjeux />

        {/* ③ Notre approche / convictions */}
        <Approche />

        {/* ④ Nos offres */}
        <Offres />

        {/* ⑤ Nos réalisations */}
        <Realisations />

        {/* ⑥ À propos */}
        <APropos />

        {/* ⑦ Rejoindre l'équipe */}
        <Rejoindre />

        {/* ⑧ Nous contacter + footer */}
        <Contact />
      </main>
    </>
  )
}
