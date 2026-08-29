export default function Parrainage() {
  return (
    <section id="parrainage" className="py-20 bg-[#212529] dark:bg-[#1a1d20] transition-colors duration-300 border-t border-gray-800">
      <h2 className="text-3xl font-extrabold text-white mb-6">
        Le meilleur commercial, c'est vous
      </h2>

      <p className="text-gray-300 dark:text-gray-400 text-lg mb-8">
        Vous connaissez un artisan qui a besoin d'un site ? Recommandez JT WEB :
        il profite d'une réduction, et vous êtes récompensé sur votre forfait maintenance.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8 text-left">
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <p className="font-bold text-[#FFB703] mb-2">Pour votre filleul</p>
          <p className="text-gray-300 text-sm">-50€ sur le Pack Essentiel, -100€ sur le Pack Pro dès sa première demande.</p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <p className="font-bold text-[#FFB703] mb-2">Pour vous</p>
          <p className="text-gray-300 text-sm">1 parrainage = 1h de modification offerte. 3 parrainages sur l'année = 1 mois de maintenance offert.</p>
        </div>
      </div>

      <a href="#contact" className="inline-block bg-[#FFB703] text-[#212529] px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg">
        Je parraine quelqu'un
      </a>
    </section>
  );
}