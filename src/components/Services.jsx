import { Check, X, ArrowRight } from 'lucide-react';

export default function Services() {
  const placesRestantesEssentiel = 5;
  const placesRestantesPro = 5;
  
  return (
    <section id="services" className="pt-12 pb-24 bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#212529] dark:text-white mb-4">Sites & Tarifs</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Des formules transparentes et adaptées à la taille de votre entreprise.
            Aucun coût caché, tout est clair dès le départ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">

          {/* ---------------- OFFRE ESSENTIEL ---------------- */}
          <div className="bg-white dark:bg-[#1a1d20] p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-[#212529] dark:text-white mb-2">Pack Essentiel</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[48px]">
              La carte de visite digitale (One-Page) idéale pour démarrer votre présence en ligne.
            </p>
            <div className="mb-8">
              {/* Ligne des prix (Barré + Nouveau prix) */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-extrabold text-[#212529] dark:text-white">400 €</span>
                <span className="text-xl font-bold text-gray-400 dark:text-gray-500 line-through decoration-red-500 decoration-2">
                  600 €
                </span>
              </div>

              {/* Mention de prix fixe pour rassurer */}
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Prix fixe, sans frais cachés.
              </div>

              {/* Badge d'urgence animé avec variable */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                Offre de lancement : Plus que {placesRestantesEssentiel} places à ce tarif
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Site One-Page (une seule page fluide)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Design adapté aux mobiles et tablettes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Formulaire de contact direct</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600">
                <X className="shrink-0 mt-0.5" size={20} />
                <span>Architecture Multi-pages</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600">
                <X className="shrink-0 mt-0.5" size={20} />
                <span>Référencement local avancé (SEO)</span>
              </li>
            </ul>

            <a href="#contact" className="block w-full text-center bg-gray-100 dark:bg-gray-800 text-[#212529] dark:text-white px-6 py-3 rounded-md font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Demander un devis
            </a>
          </div>

          {/* ---------------- OFFRE PRO ---------------- */}
          <div className="bg-white dark:bg-[#1a1d20] p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#FFB703] relative transform md:-translate-y-4 transition-colors duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFB703] text-[#212529] font-bold px-4 py-1 rounded-full text-sm shadow-md whitespace-nowrap">
              Recommandé
            </div>

            <h3 className="text-2xl font-bold text-[#212529] dark:text-white mb-2">Pack Pro</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[48px]">
              Le site complet pour détailler votre expertise, rassurer vos clients et dominer votre secteur.
            </p>
            <div className="mb-8">
              {/* Ligne des prix (Barré + Nouveau prix) */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-extrabold text-[#212529] dark:text-white">1 000 €</span>
                <span className="text-xl font-bold text-gray-400 dark:text-gray-500 line-through decoration-red-500 decoration-2">
                  1 200 €
                </span>
              </div>

              {/* Mention de prix fixe pour rassurer */}
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                Prix fixe, sans frais cachés.
              </div>

              {/* Badge d'urgence animé avec variable */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                Offre de lancement : Plus que {placesRestantesPro} places à ce tarif
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Architecture Multi-pages (jusqu'à 5 pages)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Portfolio et galeries de vos réalisations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Optimisation SEO (Référencement local)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Statistiques respectueuses de la vie privée</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Design sur mesure et animations fluides</span>
              </li>
            </ul>

            <a href="#contact" className="flex items-center justify-center gap-2 w-full bg-[#212529] dark:bg-[#FFB703] text-white dark:text-[#212529] px-6 py-3 rounded-md font-bold hover:bg-gray-800 dark:hover:bg-yellow-500 transition-colors shadow-md">
              Démarrer mon projet Pro
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}