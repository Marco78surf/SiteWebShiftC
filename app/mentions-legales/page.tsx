"use client"
import { useEffect } from 'react'

export default function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="px-4 sm:px-6 lg:px-10 py-16 max-w-3xl mx-auto text-white/85">
      <h1 className="font-serif text-3xl mb-8 text-sc-green">Mentions légales</h1>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">Préambule</h2>
        <p>
          Le présent site internet est édité et publié sous la responsabilité de la SAS SHIFT C, RCS Nantes 841 568 892, au capital de 1 000€, domiciliée 3 bis chemin des écureuils, 44240 La Chapelle-sur-Erdre, FRANCE (email : <a href="mailto:contact@shiftc.fr" className="text-sc-green underline">contact@shiftc.fr</a>).
        </p>
        <p>Directeur de publication : Marc Pasquier.</p>
        <p>Le site est hébergé par Vercel, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        <p>La marque SHIFT C, les textes, les logos, la charte graphique et les photographies sont protégés et sont la propriété exclusive de la SAS SHIFT C. Toute reproduction non autorisée est interdite.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">Politique de confidentialité</h2>
        <p>
          Le site <a href="https://shiftc.fr" className="text-sc-green underline">https://shiftc.fr</a> est exploité par la SAS SHIFT C, Société par Actions Simplifiée au capital de 1 000€, immatriculée au Registre du Commerce et des Sociétés de Nantes sous le numéro 841 568 892, dont le siège social est situé 3 bis chemin des écureuils, 44240 La Chapelle-sur-Erdre, FRANCE.
        </p>
        <p>
          Pour toute question relative à la politique de confidentialité, l’utilisateur peut envoyer un e-mail à l’adresse suivante : <a href="mailto:contact@shiftc.fr" className="text-sc-green underline">contact@shiftc.fr</a>
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">1. Définitions</h2>
        <ul className="list-disc ml-6">
          <li><b>Donnée personnelle</b> : toute information relative à une personne physique identifiée ou identifiable.</li>
          <li><b>Responsable de Traitement</b> : la personne morale qui détermine les finalités et moyens du traitement (voir article 2).</li>
          <li><b>Site</b> : le site internet accessible à l’adresse <a href="https://shiftc.fr" className="text-sc-green underline">https://shiftc.fr</a>.</li>
          <li><b>Sous-traitant</b> : la personne qui traite des Données pour le compte du Responsable de Traitement.</li>
          <li><b>Traitement</b> : toute opération relative aux Données (collecte, enregistrement, conservation, etc.).</li>
          <li><b>Utilisateur</b> : toute personne physique accédant au Site.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">2. Identité du responsable de traitement</h2>
        <p>Le Responsable de Traitement des Données est la SAS SHIFT C, 3 bis chemin des écureuils, 44240 La Chapelle-sur-Erdre, FRANCE.<br/>Contact : <a href="mailto:contact@shiftc.fr" className="text-sc-green underline">contact@shiftc.fr</a></p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">3. Généralités</h2>
        <p>La présente Politique de confidentialité peut être modifiée à tout moment par SHIFT C. La dernière version est celle disponible sur le Site.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">4. Données traitées</h2>
        <p>SHIFT C collecte uniquement les données strictement nécessaires, notamment lors de l’utilisation du formulaire de contact : prénom, nom, email, message, et toute information transmise volontairement. Aucune donnée sensible n’est collectée.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">5. Licéité du traitement</h2>
        <p>Les traitements sont réalisés sur la base de l’intérêt légitime de SHIFT C, du consentement de l’Utilisateur, de l’exécution d’un contrat ou d’une obligation légale.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">6. Finalités du traitement</h2>
        <ul className="list-disc ml-6">
          <li>Gérer les demandes d’information et de contact</li>
          <li>Gérer les demandes de prestation de service</li>
          <li>Répondre aux obligations légales</li>
          <li>Élaborer des statistiques de fréquentation</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">7. Durée de conservation</h2>
        <p>Les données sont conservées le temps nécessaire au traitement de la demande, puis supprimées. Les données relatives à une candidature sont conservées un (1) an maximum.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">8. Accès aux données</h2>
        <p>Seul le personnel habilité de SHIFT C et ses sous-traitants (hébergeur, maintenance, etc.) peuvent accéder aux données, dans le respect de la confidentialité.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">9. Transfert des données</h2>
        <p>Les données sont hébergées dans l’Union européenne. En cas de transfert hors UE, SHIFT C s’assure d’un niveau de protection adéquat.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">10. Protection des données personnelles</h2>
        <p>SHIFT C met en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité des données.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">11. Violation des données</h2>
        <p>En cas de violation des données, SHIFT C notifiera la CNIL et, si nécessaire, les utilisateurs concernés.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">12. Droits de l’utilisateur</h2>
        <p>L’Utilisateur dispose d’un droit d’accès, de rectification, d’opposition, de limitation, d’effacement et de portabilité de ses données. Il peut exercer ses droits à l’adresse <a href="mailto:contact@shiftc.fr" className="text-sc-green underline">contact@shiftc.fr</a> ou auprès de la CNIL (<a href="https://www.cnil.fr" className="text-sc-green underline">www.cnil.fr</a>).</p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold mb-2 text-lg">13. Sites internet tiers</h2>
        <p>SHIFT C n’est pas responsable des traitements réalisés par des sites tiers accessibles via des liens sur le Site.</p>
      </section>
    </main>
  )
}
