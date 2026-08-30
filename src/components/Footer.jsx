import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212529] text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Colonne 1 : L'entreprise */}
          <div>
            <span className="font-extrabold text-2xl text-white tracking-tight block mb-4">
              JT <span className="text-[#FFB703]">WEB</span>
            </span>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mb-6">
              Des solutions web clés en main, performantes et à l'image de votre entreprise. L'accompagnement digital dédié aux artisans.
            </p>
            {/* Mention rassurante pour les pros */}
            <div className="text-xs text-gray-500 font-medium">
              Micro-entreprise enregistrée en France.
            </div>
          </div>

          {/* Colonne 2 : Liens Rapides */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="hover:text-[#FFB703] transition-colors duration-200 flex items-center gap-1 group">
                  Sites & Tarifs 
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-1 translate-x-1" />
                </a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-[#FFB703] transition-colors duration-200 flex items-center gap-1 group">
                  Maintenance 
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-1 translate-x-1" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFB703] transition-colors duration-200 flex items-center gap-1 group">
                  Qui suis-je ? 
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-1 translate-x-1" />
                </a>
              </li>
              <li className="pt-4 mt-2 border-t border-gray-800 w-2/3">
                <a href="#mentions-legales" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
                  Mentions Légales & CGU
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Localisation */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FFB703] shrink-0 mt-0.5" />
                <span>
                  Domagné et environs (Bretagne)<br/>
                  Intervention à distance possible
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FFB703] shrink-0" />
                <a href="mailto:contact@jtweb.fr" className="hover:text-white transition-colors duration-200">
                  contact@jtweb.fr
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>&copy; {currentYear} JT WEB. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Développé avec <span className="text-[#FFB703]">passion</span> en Bretagne.
          </p>
        </div>
      </div>
    </footer>
  );
}