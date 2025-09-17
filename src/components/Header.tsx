import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://media.discordapp.net/attachments/877739044228960266/1417854431558631555/image-removebg-preview_20.png?ex=68cbff56&is=68caadd6&hm=52cacc97b580105d4174f4f556a7d93757b59b9357e971016564952c61b066c5&=&format=webp&quality=lossless"
                alt="Salón del Automóvil Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Salón del Automóvil</h1>
              <p className="text-xs text-blue-600">Multimarcas 0 Km</p>
            </div>
          </div>
          
              <nav className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('catalogo')}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  Vehículos
                </button>
                <button
                  onClick={() => scrollToSection('otros-productos')}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  Otros Productos
                </button>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  Contacto
                </button>
              </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-100">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection('inicio')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
                  >
                    Inicio
                  </button>
                  <button
                    onClick={() => scrollToSection('catalogo')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
                  >
                    Vehículos
                  </button>
                  <button
                    onClick={() => scrollToSection('otros-productos')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
                  >
                    Otros Productos
                  </button>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
                  >
                    Servicios
                  </button>
                  <button
                    onClick={() => scrollToSection('contacto')}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
                  >
                    Contacto
                  </button>
                </div>
              </div>
            )}
      </div>
    </header>
  );
};

export default Header;