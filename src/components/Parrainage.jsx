import { Gift, Wrench, Scissors } from 'lucide-react';

export default function Parrainage({ onCtaClick }) {
  return (
    <section id="parrainage" className="py-24 bg-[#212529] dark:bg-[#1a1d20] transition-colors duration-300 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="flex justify-center mb-4">
          <Gift size={48} className="text-[#FFB703]" />
        </div>

        <h2 className="text-3xl font-extrabold text-white mb-4">
          Le meilleur commercial, c'est vous
        </h2>

        <p className="text-gray-300 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Vous connaissez un artisan qui a besoin d'un site ? Recommandez JT WEB :
          il profite d'une réduction, et vous êtes récompensé sur votre forfait maintenance.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 text-left">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <Scissors className="text-[#FFB703] mb-3" size={22} />
            <p className="font-bold text-white mb-2">Pour votre filleul</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              -50€ sur le Pack Essentiel, -100€ sur le Pack Pro, dès sa première demande.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <Wrench className="text-[#FFB703] mb-3" size={22} />
            <p className="font-bold text-white mb-2">Pour vous</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              1 parrainage = 1h de modification offerte, valable jusqu'au 31 décembre de l'année en cours. Non cumulable au-delà d'1h par session.<br />
              3 parrainages dans l'année = 1 mois de maintenance offert en plus des heures déjà acquises.
            </p>
          </div>
        </div>

        <a
          href="#contact"
          onClick={onCtaClick}
          className="inline-block bg-[#FFB703] text-[#212529] px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
        >
          Je parraine quelqu'un
        </a>

      </div>
    </section>
  );
}