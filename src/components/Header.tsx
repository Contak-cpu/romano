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
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-1/348582432_123822964045640_7770769562979972224_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFA9kr8zfLkClrcI0tm_Dfg95zgJ-Ei_1L3nOAn4SL_Uj1YqLOuITgNxpSpqsQQgv_Lxi0dCMD3rcaA98FSuzwu&_nc_ohc=m5y2wgTBkiIQ7kNvwFz2DAO&_nc_oc=Adk3uYpL223qzLdJNWj5TvYKACFEH7jJRY2yASzQa6KDGRk8zWz9QUwdVjdWVCaR4D4&_nc_zt=24&_nc_ht=scontent.fcor2-2.fna&_nc_gid=9YVlKtdrAhjf4lcii6o5JA&oh=00_AfaNBmMg1JbREPTvUdO5QoUvFLt2cr8M5lG63SlhFULTTA&oe=68C675AF"
                alt="López Automotores Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">López Automotores</h1>
              <p className="text-xs text-blue-600">Tu próximo auto te espera</p>
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