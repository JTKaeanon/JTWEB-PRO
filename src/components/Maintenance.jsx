import { Check, X, ShieldCheck } from 'lucide-react';

export default function Maintenance() {
  return (
    <section id="maintenance" className="py-24 bg-white dark:bg-[#1a1d20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <ShieldCheck size={48} className="text-[#FFB703]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#212529] dark:text-white mb-4">Forfaits Maintenance & Sécurité</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Un site web n'est pas un outil figé. Il a besoin d'être mis à jour et protégé pour rester performant.
            Gardez l'esprit tranquille, je m'occupe de la technique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">

          {/* MAINTENANCE STANDARD */}
          <div className="bg-[#F8F9FA] dark:bg-[#121212] p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-[#212529] dark:text-white mb-2">Standard</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[48px]">
              L'essentiel pour garantir la sécurité et la stabilité de votre site au quotidien.
            </p>

            {/* Bloc de prix Standard mis à jour */}
            <div className="mb-8">
              <div className="flex items-center flex-wrap gap-3 mb-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#212529] dark:text-white">30 €</span>
                  <span className="text-lg font-medium text-gray-500 dark:text-gray-400">/ mois</span>
                </div>
                {/* Badge Sans Engagement */}
                <span className="text-[10px] uppercase font-bold tracking-wider bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                  Sans engagement
                </span>
              </div>
              <div className="mt-3 text-sm font-bold text-green-600 dark:text-green-500">
                ou 300 € / an <span className="font-normal opacity-80">(2 mois offerts)</span>
              </div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                *Engagement 12 mois
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3"><Check className="text-green-500 shrink-0 mt-0.5" size={20} /><span className="text-gray-700 dark:text-gray-300">Mises à jour régulières</span></li>
              <li className="flex items-start gap-3"><Check className="text-green-500 shrink-0 mt-0.5" size={20} /><span className="text-gray-700 dark:text-gray-300">Sauvegardes mensuelles</span></li>
              <li className="flex items-start gap-3"><Check className="text-green-500 shrink-0 mt-0.5" size={20} /><span className="text-gray-700 dark:text-gray-300">Surveillance sécurité</span></li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600"><X className="shrink-0 mt-0.5" size={20} /><span>Rapports de visites</span></li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-600"><X className="shrink-0 mt-0.5" size={20} /><span>Modifications incluses</span></li>
            </ul>
            <a href="#contact" className="block w-full text-center bg-gray-100 dark:bg-gray-800 text-[#212529] dark:text-white px-6 py-3 rounded-md font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Choisir ce forfait
            </a>
          </div>

          {/* MAINTENANCE SÉRÉNITÉ */}
          <div className="bg-[#212529] p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#FFB703] relative transform md:-translate-y-4 text-white">
            <h3 className="text-2xl font-bold text-white mb-2">Sérénité</h3>
            <p className="text-gray-400 mb-6 min-h-[48px]">
              Déléguez à 100%. Je gère votre site, vos statistiques et vos petites modifications.
            </p>

            {/* Bloc de prix Sérénité mis à jour */}
            <div className="mb-8">
              <div className="flex items-center flex-wrap gap-3 mb-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">60 €</span>
                  <span className="text-lg font-medium text-gray-400">/ mois</span>
                </div>
                {/* Badge Sans Engagement */}
                <span className="text-[10px] uppercase font-bold tracking-wider bg-gray-800 text-gray-400 px-2 py-1 rounded">
                  Sans engagement
                </span>
              </div>
              <div className="mt-3 text-sm font-bold text-[#FFB703]">
                ou 600 € / an <span className="font-normal opacity-80">(2 mois offerts)</span>
              </div>
              <div className="text-xs font-medium text-gray-400 mt-1">
                *Engagement 12 mois
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3"><Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} /><span className="text-gray-300">Sauvegardes hebdomadaires</span></li>
              <li className="flex items-start gap-3"><Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} /><span className="text-gray-300">Restauration prioritaire</span></li>
              <li className="flex items-start gap-3"><Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} /><span className="text-gray-300 font-medium">Statistiques éthiques (sans cookies)</span></li>
              <li className="flex items-start gap-3"><Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} /><span className="text-gray-300 font-medium">1h/mois de modification</span></li>
            </ul>
            <a href="#contact" className="block w-full text-center bg-[#FFB703] text-[#212529] px-6 py-3 rounded-md font-bold hover:bg-yellow-500 transition-colors">
              Choisir la tranquillité
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}