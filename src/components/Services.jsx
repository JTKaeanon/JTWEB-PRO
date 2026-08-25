import { Check, X, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#212529] mb-4">Sites & Tarifs</h2>
          <p className="text-lg text-gray-600">
            Des formules transparentes et adaptées à la taille de votre entreprise. 
            Aucun coût caché, tout est clair dès le départ.
          </p>
        </div>
        
        {/* Grille des offres avec alignement ajusté pour surélever la carte Pro */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* ---------------- OFFRE ESSENTIEL ---------------- */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#212529] mb-2">Pack Essentiel</h3>
            <p className="text-gray-500 mb-6 min-h-[48px]">
              La carte de visite digitale (One-Page) idéale pour démarrer votre présence en ligne.
            </p>
            <div className="text-3xl font-extrabold text-[#212529] mb-8">
              Sur devis
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Site One-Page (une seule page fluide)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Design adapté aux mobiles et tablettes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-green-500 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Formulaire de contact direct</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="shrink-0 mt-0.5" size={20} />
                <span>Architecture Multi-pages</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="shrink-0 mt-0.5" size={20} />
                <span>Référencement local avancé (SEO)</span>
              </li>
            </ul>

            <a href="#contact" className="block w-full text-center bg-gray-100 text-[#212529] px-6 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors">
              Demander un devis
            </a>
          </div>

          {/* ---------------- OFFRE PRO (Mise en avant) ---------------- */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border-2 border-[#FFB703] relative transform md:-translate-y-4">
            {/* Badge de recommandation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFB703] text-[#212529] font-bold px-4 py-1 rounded-full text-sm shadow-md whitespace-nowrap">
              Recommandé
            </div>

            <h3 className="text-2xl font-bold text-[#212529] mb-2">Pack Pro</h3>
            <p className="text-gray-500 mb-6 min-h-[48px]">
              Le site complet pour détailler votre expertise, rassurer vos clients et dominer votre secteur.
            </p>
            <div className="text-3xl font-extrabold text-[#212529] mb-8">
              Sur devis
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">Architecture Multi-pages (jusqu'à 5 pages)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Portfolio et galeries de vos réalisations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">Optimisation SEO (Référencement local)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Statistiques de visites respectueuses de la vie privée</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#FFB703] shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">Design sur mesure et animations fluides</span>
              </li>
            </ul>

            <a href="#contact" className="flex items-center justify-center gap-2 w-full bg-[#212529] text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors shadow-md">
              Démarrer mon projet Pro
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}