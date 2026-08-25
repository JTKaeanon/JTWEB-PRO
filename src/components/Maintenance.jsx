import { Check, X, ShieldCheck } from 'lucide-react';

export default function Maintenance() {
  return (
    <section id="maintenance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <ShieldCheck size={48} className="text-[#FFB703]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#212529] mb-4">Forfaits Maintenance & Sécurité</h2>
          <p className="text-lg text-gray-600">
            Un site web n'est pas un outil figé. Il a besoin d'être mis à jour et protégé pour rester performant. 
            Gardez l'esprit tranquille, je m'occupe de la technique.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* ---------------- MAINTENANCE STANDARD ---------------- */}
          <div className="bg-[#F8F9FA] p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-[#212529] mb-2">Standard</h3>
            <p className="text-gray-500 mb-6 min-h-[48px]">
              L'essentiel pour garantir la sécurité et la stabilité de votre site au quotidien.
            </p>
            <div className="text-3xl font-extrabold text-[#212529] mb-8">
              Sur devis <span className="text-lg font-medium text-gray-500">/ mois</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Mises à jour régulières (système et modules)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Sauvegardes mensuelles complètes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Surveillance de sécurité de base</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="shrink-0 mt-0.5" size={20} />
                <span>Rapports de visites et d'audience</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="shrink-0 mt-0.5" size={20} />
                <span>Modifications de contenu incluses</span>
              </li>
            </ul>
          </div>

          {/* ---------------- MAINTENANCE SÉRÉNITÉ (Mise en avant) ---------------- */}
          <div className="bg-[#212529] p-8 sm:p-10 rounded-2xl shadow-xl border-t-4 border-[#FFB703] relative transform md:-translate-y-4 text-white">
            <h3 className="text-2xl font-bold text-white mb-2">Sérénité</h3>
            <p className="text-gray-400 mb-6 min-h-[48px]">
              Déléguez à 100%. Je gère votre site, vos statistiques et vos petites modifications.
            </p>
            <div className="text-3xl font-extrabold text-white mb-8">
              Sur devis <span className="text-lg font-medium text-gray-400">/ mois</span>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300">Sauvegardes hebdomadaires sécurisées</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300">Restauration prioritaire en cas de panne</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300 font-medium">Statistiques éthiques incluses (type Matomo/Plausible)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300">Aucun bandeau de cookies intrusif nécessaire</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-300 font-medium">Jusqu'à 1h/mois de modification de contenu</span>
              </li>
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