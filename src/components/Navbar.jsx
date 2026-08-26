import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react'; 
import monLogo from '../assets/logo.png'; 
import logoDark from "../assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Fonction pour basculer le thème
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Sites & Tarifs', href: '#services' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Qui suis-je', href: '#about' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav ref={menuRef} className="fixed w-full z-50 bg-[#F8F9FA] dark:bg-[#1a1d20] border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#">
              {/* C'est ICI que la magie opère pour le changement de logo ! */}
              <img 
                src={isDarkMode ? logoDark : monLogo} 
                alt="Logo JT WEB" 
                className="h-[250px] w-auto object-contain transition-opacity duration-300" 
              />
            </a>
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[#212529] dark:text-gray-200 hover:text-[#FFB703] dark:hover:text-[#FFB703] font-semibold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* BOUTON MODE SOMBRE */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#FFB703] dark:hover:text-[#FFB703] transition-colors focus:outline-none"
              aria-label="Basculer le mode sombre"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <a 
              href="#contact" 
              className="bg-[#FFB703] text-[#212529] px-6 py-2.5 rounded-md font-bold hover:bg-yellow-500 transition-colors shadow-sm"
            >
              Contact
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
             {/* BOUTON MODE SOMBRE (Mobile) */}
             <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#FFB703]"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#212529] dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Restauré */}
      {isOpen && (
        <div className="lg:hidden bg-[#F8F9FA] dark:bg-[#1a1d20] border-t border-gray-200 dark:border-gray-800 shadow-lg absolute w-full left-0 transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-3 text-[#212529] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#FFB703] dark:hover:text-[#FFB703] font-semibold rounded-md transition-colors"
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