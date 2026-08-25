import { useState, useEffect, useRef } from 'react';
import monLogo from '../assets/logo.png'; // Vérifie bien l'extension de ton logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: 'Sites & Tarifs', href: '#services' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Parrainage', href: '#parrainage' },
    { name: 'Qui suis-je', href: '#about' },
  ];

  // Hook pour fermer le menu au clic à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // On écoute uniquement si le menu est ouvert pour optimiser les performances
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    // On attache la ref à la balise nav parente
    <nav ref={menuRef} className="fixed w-full z-50 bg-[#F8F9FA] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#">
              <img src={monLogo} alt="Logo JT WEB" className="h-60 w-auto object-contain" />
            </a>
          </div>

          {/* Menu Bureau (Breakpoint passé à lg:) */}
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#212529] hover:text-[#FFB703] font-semibold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#FFB703] text-[#212529] px-6 py-2.5 rounded-md font-bold hover:bg-yellow-500 transition-colors shadow-sm"
            >
              Contact
            </a>
          </div>

          {/* Bouton Menu Mobile (Breakpoint passé à lg:) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#212529] hover:text-[#FFB703] focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Déroulant Mobile (Breakpoint passé à lg:) */}
      {isOpen && (
        <div className="lg:hidden bg-[#F8F9FA] border-t border-gray-200 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-[#212529] hover:bg-gray-100 hover:text-[#FFB703] font-semibold rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center px-3 py-3 mt-4 bg-[#FFB703] text-[#212529] font-bold rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}