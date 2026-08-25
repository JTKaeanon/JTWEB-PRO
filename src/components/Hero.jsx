import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#F8F9FA] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:w-2/3">
          
          {/* Badge d'introduction */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-[#212529] font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-pulse"></span>
            Développeur Web Indépendant
          </div>

          {/* Titre principal corrigé */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#212529] tracking-tight leading-tight mb-6">
            Attirez plus de chantiers avec un site internet <span className="text-[#FFB703] underline decoration-4 underline-offset-8">performant</span> et à votre image.
          </h1>

          {/* Sous-titre honnête */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Des solutions web clés en main, rapides et optimisées pour les artisans. Je personnalise des structures éprouvées pour transformer vos visiteurs en clients, sans exploser votre budget.
          </p>

          {/* Boutons d'action avec Lucide Icons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/plaquette-jtweb.pdf" 
              download="Plaquette_JTWEB.pdf" 
              className="inline-flex justify-center items-center gap-2 bg-[#FFB703] text-[#212529] px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              <Download size={20} />
              Télécharger la plaquette
            </a>
            <a 
              href="#services" 
              className="inline-flex justify-center items-center gap-2 bg-white text-[#212529] px-8 py-4 rounded-md font-bold text-lg border-2 border-gray-200 hover:border-[#212529] transition-all"
            >
              Voir les offres
              <ArrowRight size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}