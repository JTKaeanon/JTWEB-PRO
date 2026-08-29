import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

export default function Contact({ prefilledSubject }) {
  const [sujetDemande, setSujetDemande] = useState('essentiel');
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) setSujetDemande(prefilledSubject);
  }, [prefilledSubject]);

  const optionsSujet = [
    { id: 'essentiel', label: 'Pack Essentiel' },
    { id: 'pro', label: 'Pack Pro' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'parrainage', label: "Je parraine quelqu'un" },
    { id: 'autre', label: 'Autre demande' },
  ];

  return (
    <section id="contact" className="py-24 bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* COLONNE GAUCHE */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-[#212529] dark:text-white mb-4">Prêt à lancer votre projet ?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Remplissez ce formulaire pour m'en dire plus sur vos besoins. Le premier échange et le devis sont entièrement gratuits.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full text-[#FFB703] shrink-0"><Mail size={24} /></div>
                <div><h4 className="font-bold text-[#212529] dark:text-white">Email</h4><a href="mailto:contact@jtweb.fr" className="text-gray-600 dark:text-gray-400 hover:text-[#FFB703]">contact@jtweb.fr</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full text-[#FFB703] shrink-0"><Phone size={24} /></div>
                <div><h4 className="font-bold text-[#212529] dark:text-white">Téléphone</h4><a href="tel:+33600000000" className="text-gray-600 dark:text-gray-400 hover:text-[#FFB703]">06 XX XX XX XX</a></div>
              </div>
              
              {/* NOUVEAU BLOC POUR COMBLER LE VIDE */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full text-[#FFB703] shrink-0"><Clock size={24} /></div>
                <div><h4 className="font-bold text-[#212529] dark:text-white">Disponibilité</h4><p className="text-gray-600 dark:text-gray-400">Du Lundi au Vendredi<br/>9h00 - 18h00</p></div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <div className="lg:col-span-3">
            <form className="bg-white dark:bg-[#1a1d20] p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 transition-colors duration-300">
              
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#212529] dark:text-white mb-4">Quel est l'objet de votre demande ?</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {optionsSujet.map((option) => (
                    <label key={option.id} className={`relative flex items-center justify-center p-4 cursor-pointer rounded-lg border-2 transition-all duration-200 text-sm font-semibold text-center ${sujetDemande === option.id ? 'border-[#FFB703] bg-yellow-50 dark:bg-yellow-900/20 text-[#212529] dark:text-white' : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                      <input type="radio" name="sujet" value={option.id} checked={sujetDemande === option.id} onChange={(e) => setSujetDemande(e.target.value)} className="sr-only" />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div><label className="block text-sm font-bold text-[#212529] dark:text-white mb-2">Nom</label><input type="text" className="w-full p-3 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-gray-700 dark:text-white rounded-md focus:outline-none focus:border-[#FFB703]" placeholder="Votre nom" /></div>
                <div><label className="block text-sm font-bold text-[#212529] dark:text-white mb-2">Entreprise (Optionnel)</label><input type="text" className="w-full p-3 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-gray-700 dark:text-white rounded-md focus:outline-none focus:border-[#FFB703]" placeholder="Société" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div><label className="block text-sm font-bold text-[#212529] dark:text-white mb-2">Email *</label><input type="email" required className="w-full p-3 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-gray-700 dark:text-white rounded-md focus:outline-none focus:border-[#FFB703]" placeholder="email@exemple.com" /></div>
                <div><label className="block text-sm font-bold text-[#212529] dark:text-white mb-2">Téléphone</label><input type="tel" className="w-full p-3 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-gray-700 dark:text-white rounded-md focus:outline-none focus:border-[#FFB703]" placeholder="06 00 00 00 00" /></div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-[#212529] dark:text-white mb-2">Votre message *</label>
                <textarea rows="5" required className="w-full p-3 bg-[#F8F9FA] dark:bg-[#121212] border border-gray-200 dark:border-gray-700 dark:text-white rounded-md focus:outline-none focus:border-[#FFB703] resize-none" placeholder="Décrivez brièvement votre projet..."></textarea>
              </div>

              {/* CASE RGPD */}
              <div className="mb-8 flex items-start gap-3">
                <input type="checkbox" id="rgpd" required checked={rgpdAccepted} onChange={(e) => setRgpdAccepted(e.target.checked)} className="mt-1 w-4 h-4 text-[#FFB703] bg-gray-100 border-gray-300 rounded focus:ring-[#FFB703] cursor-pointer" />
                <label htmlFor="rgpd" className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
                  En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.
                </label>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#212529] dark:bg-[#FFB703] text-white dark:text-[#212529] font-bold py-4 px-8 rounded-md hover:bg-gray-800 dark:hover:bg-yellow-500 transition-colors shadow-md">
                <Send size={18} />
                Envoyer ma demande
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}