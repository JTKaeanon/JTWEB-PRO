export default function Parrainage() {
  return (
    <section id="parrainage" className="py-20 bg-[#212529] dark:bg-[#1a1d20] transition-colors duration-300 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-extrabold text-white mb-6">
          Le Système de Parrainage
        </h2>
        
        <p className="text-gray-300 dark:text-gray-400 text-lg mb-8 transition-colors duration-300">
          [Explication du système de récompense : Vous me recommandez, vous êtes récompensé.]
        </p>
        
        <button className="bg-[#FFB703] text-[#212529] px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
          [Bouton d'action / En savoir plus]
        </button>
        
      </div>
    </section>
  );
}