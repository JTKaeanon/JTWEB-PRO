export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1a1d20] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl font-extrabold text-[#212529] dark:text-white mb-8">
          Qui se cache derrière <span className="text-[#FFB703]">JT WEB</span> ?
        </h2>

        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-[#121212] p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-left md:text-center transition-colors duration-300">
          <p>
            Je m'appelle <strong>Jessie Texier</strong>, développeur web freelance en Bretagne. Je travaille avec des artisans qui n'ont ni le temps ni l'envie de se battre avec un site internet compliqué — et c'est exactement pour ça que j'existe.
          </p>
          <p>
            Pas de jargon technique, pas de facture qui gonfle après coup. Je pars de structures solides et éprouvées que j'adapte à votre métier, pour livrer un site rapide, sécurisé, et surtout : qui vous ramène des clients.
          </p>
        </div>

      </div>
    </section>
  );
}