import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  // Ce state permet de savoir quel bouton radio est sélectionné
  const [sujetDemande, setSujetDemande] = useState('essentiel');

  // Les options de notre formulaire
  const optionsSujet = [
    { id: 'essentiel', label: 'Pack Essentiel (One-Page)' },
    { id: 'pro', label: 'Pack Pro (Multi-pages)' },
    { id: 'maintenance', label: 'Forfait Maintenance' },
    { id: 'autre', label: 'Autre demande' },
  ];

  return (
    <section id="contact" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* ---------------- COLONNE GAUCHE : Informations ---------------- */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-[#212529] mb-4">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Remplissez ce formulaire pour m'en dire plus sur vos besoins. 
                Le premier échange et le devis sont entièrement gratuits et sans engagement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full text-[#FFB703] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#212529]">Secteur d'intervention</h4>
                  <p className="text-gray-600">Domagné et environs (Bretagne)<br/>Intervention à distance possible</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full text-[#FFB703] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#212529]">Email</h4>
                  <a href="mailto:contact@jtweb.fr" className="text-gray-600 hover:text-[#FFB703] transition-colors">
                    contact@jtweb.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full text-[#FFB703] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#212529]">Téléphone</h4>
                  <a href="tel:+33600000000" className="text-gray-600 hover:text-[#FFB703] transition-colors">
                    06 XX XX XX XX
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- COLONNE DROITE : Le Formulaire ---------------- */}
          <div className="lg:col-span-3">
            <form className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
              
              {/* 1. Sélection du sujet (Boutons Radio stylisés) */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-[#212529] mb-4">Quel est l'objet de votre demande ?</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {optionsSujet.map((option) => (
                    <label 
                      key={option.id}
                      className={`
                        relative flex items-center justify-center p-4 cursor-pointer rounded-lg border-2 transition-all duration-200 text-sm font-semibold text-center
                        ${sujetDemande === option.id 
                          ? 'border-[#FFB703] bg-yellow-50 text-[#212529]' 
                          : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                        }
                      `}
                    >
                      {/* Input radio caché, utilisé uniquement pour l'accessibilité */}
                      <input 
                        type="radio" 
                        name="sujet" 
                        value={option.id}
                        checked={sujetDemande === option.id}
                        onChange={(e) => setSujetDemande(e.target.value)}
                        className="sr-only" 
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* 2. Champs de saisie classiques */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-bold text-[#212529] mb-2">Nom</label>
                  <input type="text" id="nom" className="w-full p-3 bg-[#F8F9FA] border border-gray-200 rounded-md focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="entreprise" className="block text-sm font-bold text-[#212529] mb-2">Entreprise (Optionnel)</label>
                  <input type="text" id="entreprise" className="w-full p-3 bg-[#F8F9FA] border border-gray-200 rounded-md focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-colors" placeholder="Nom de votre société" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#212529] mb-2">Email *</label>
                  <input type="email" id="email" required className="w-full p-3 bg-[#F8F9FA] border border-gray-200 rounded-md focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-colors" placeholder="email@exemple.com" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-bold text-[#212529] mb-2">Téléphone</label>
                  <input type="tel" id="telephone" className="w-full p-3 bg-[#F8F9FA] border border-gray-200 rounded-md focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-colors" placeholder="06 00 00 00 00" />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-[#212529] mb-2">Votre message *</label>
                <textarea id="message" rows="5" required className="w-full p-3 bg-[#F8F9FA] border border-gray-200 rounded-md focus:outline-none focus:border-[#FFB703] focus:ring-1 focus:ring-[#FFB703] transition-colors resize-none" placeholder="Décrivez brièvement votre projet ou vos besoins..."></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#212529] text-white font-bold py-4 px-8 rounded-md hover:bg-gray-800 transition-colors shadow-md">
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