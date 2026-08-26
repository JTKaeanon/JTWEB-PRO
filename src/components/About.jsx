export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1a1d20] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-extrabold text-[#212529] dark:text-white mb-8">
          Qui se cache derrière <span className="text-[#FFB703]">JT WEB</span> ?
        </h2>
        
        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-[#121212] p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-left md:text-center transition-colors duration-300">
          <p>
            Bonjour, je suis <strong>Jessie Texier</strong>, développeur web freelance. Mon objectif est d'accompagner les artisans et les professionnels locaux dans leur transition numérique en leur proposant des outils qui fonctionnent vraiment.
          </p>
          <p>
            J'ai à cœur de proposer des solutions honnêtes : pas de discours technique incompréhensible, pas de coûts cachés. En utilisant des structures solides que je personnalise pour votre métier, je m'assure que votre site soit performant, sécurisé et prêt à vous apporter de nouveaux clients.
          </p>
        </div>

      </div>
    </section>
  );
}