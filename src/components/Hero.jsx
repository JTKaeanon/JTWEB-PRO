import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#F8F9FA] dark:bg-[#121212] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Badge d'introduction centré avec mode sombre */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-[#212529] dark:text-yellow-500 font-semibold text-sm mb-8 border border-yellow-200 dark:border-yellow-700/50 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-pulse"></span>
          Développeur Web Indépendant en Bretagne
        </div>

        {/* Titre principal adapté */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#212529] dark:text-white tracking-tight leading-tight mb-6 transition-colors duration-300">
          Attirez plus de chantiers avec un site internet <span className="text-[#FFB703] underline decoration-4 underline-offset-8">performant</span> et à votre image.
        </h1>

        {/* Sous-titre adapté */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          Des solutions web clés en main, rapides et optimisées pour les artisans. Je personnalise des structures éprouvées pour transformer vos visiteurs en clients, sans exploser votre budget.
        </p>

        {/* Boutons d'action centrés */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/plaquette-jtweb.pdf" 
            download="Plaquette_JTWEB.pdf" 
            className="inline-flex justify-center items-center gap-2 bg-[#FFB703] text-[#212529] px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
          >
            <Download size={20} />
            Télécharger la plaquette
          </a>
          <a 
            href="#services" 
            className="inline-flex justify-center items-center gap-2 bg-white dark:bg-[#1a1d20] text-[#212529] dark:text-white px-8 py-4 rounded-md font-bold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#212529] dark:hover:border-[#FFB703] transition-all shadow-sm"
          >
            Voir les offres
            <ArrowRight size={20} />
          </a>
        </div>
        
      </div>
      
      {/* Effet lumineux de fond qui s'adapte au mode sombre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFB703] opacity-5 dark:opacity-10 blur-3xl pointer-events-none"></div>
    </section>
  );
}