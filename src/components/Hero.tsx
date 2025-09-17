import React from 'react';
import { ArrowDown, Star, Shield, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalogo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="min-h-[80vh] sm:min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center relative overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
            Encontrá tu
            <span className="text-blue-600 block">próximo auto</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En Salón del Automóvil tenemos los mejores vehículos 0 Km de Argentina. 
            Multimarcas con calidad garantizada, precios competitivos y la confianza que necesitás para tu próxima compra.
            Especialistas en vehículos nuevos de las principales marcas del mercado.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">Calificación promedio</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">Vehículos 0 Km</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">+1000</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">Clientes satisfechos</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button 
              onClick={scrollToCatalog}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-sm sm:text-base"
            >
              Ver Vehículos Disponibles
            </button>
            <button 
              onClick={() => {
                const message = "Hola! Me gustaría recibir información sobre los vehículos 0 Km disponibles.";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/543541579927?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;