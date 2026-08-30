import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales({ onRetour }) {
  return (
    <section className="py-24 bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <button
          onClick={onRetour}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-[#212529] dark:hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Retour au site
        </button>

        <h1 className="text-3xl font-extrabold text-[#212529] dark:text-white mb-10">
          Mentions légales &amp; CGV
        </h1>

        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">1. Éditeur du site</h2>
            <p>
              Le présent site est édité par <strong>[NOM COMPLET]</strong>, entrepreneur individuel exerçant sous le statut de micro-entreprise, immatriculé sous le numéro SIRET <strong>[SIRET]</strong>.
              <br />Adresse : <strong>[ADRESSE OU VILLE]</strong>
              <br />Email : contact@jtweb.fr
              <br />Téléphone : <strong>[TÉLÉPHONE]</strong>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">2. Hébergement</h2>
            <p>
              Le site est hébergé par <strong>[NOM DE L'HÉBERGEUR]</strong>, <strong>[ADRESSE DE L'HÉBERGEUR]</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, visuels, logo, structure) est la propriété de JT WEB, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">4. Données personnelles</h2>
            <p>
              Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande et, le cas échéant, pour la gestion de la relation commerciale qui peut en découler. Elles sont traitées via le service tiers Formspree (formspree.io) pour l'acheminement de l'email.
              <br /><br />
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données, exerçable en écrivant à contact@jtweb.fr.
              <br /><br />
              Ce site n'utilise pas de cookies de suivi publicitaire. Les statistiques de fréquentation proposées dans le cadre de la maintenance (offre Sérénité) sont réalisées via des outils respectueux de la vie privée, sans dépôt de cookie nécessitant consentement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">5. Prestations et tarifs</h2>
            <p>
              JT WEB propose la création de sites vitrines (Pack Essentiel, Pack Pro) ainsi que des forfaits de maintenance associés (Standard, Sérénité), aux tarifs affichés sur le site. TVA non applicable, article 293 B du Code Général des Impôts.
              <br /><br />
              Modalités de paiement : <strong>[À DÉFINIR — ex. acompte de X% à la commande, solde à la livraison]</strong>
              <br />
              Délai de réalisation indicatif : <strong>[À DÉFINIR — ex. 2 à 3 semaines selon le forfait]</strong>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">6. Maintenance et engagement</h2>
            <p>
              Le forfait maintenance mensuel est sans engagement et résiliable à tout moment. Le forfait annuel constitue un engagement pour la durée de l'année souscrite : en cas de résiliation anticipée par le client, les sommes déjà versées restent acquises à JT WEB.
              <br /><br />
              Toute intervention hors-forfait ou au-delà du temps inclus est facturée 40€/h, par tranche minimum de 30 minutes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">7. Programme de parrainage</h2>
            <p>
              Le client parrain bénéficie d'1 heure de modification offerte (valable jusqu'au 31 décembre de l'année en cours, non cumulable au-delà d'1h par session) pour chaque nouveau client parrainé ayant signé et réglé sa commande. À partir de 3 clients parrainés dans l'année, un mois de maintenance est offert en plus des heures déjà acquises.
              <br /><br />
              Le filleul bénéficie d'une réduction de 50€ sur le Pack Essentiel ou de 100€ sur le Pack Pro, appliquée dès sa première commande. Ces avantages ne sont pas cumulables avec une autre offre en cours.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#212529] dark:text-white mb-3">8. Droit applicable</h2>
            <p>
              Les présentes mentions légales et conditions sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}