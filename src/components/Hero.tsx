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
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Encontrá tu
            <span className="text-blue-600 block">próximo auto</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En López Automotores tenemos los mejores vehículos usados de Argentina. 
            Calidad garantizada, precios justos y la confianza que necesitás para tu próxima compra.
            Tomamos autos a consignación - No realizamos venta inmediata al contado.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="text-gray-600">Calificación promedio</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Vehículos verificados</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">+500</div>
              <div className="text-gray-600">Clientes satisfechos</div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button 
              onClick={scrollToCatalog}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl block md:inline-block"
            >
              Ver Vehículos Disponibles
            </button>
            <button 
              onClick={() => {
                const message = "Hola! Me gustaría recibir información sobre los vehículos disponibles.";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/543546544885?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 block md:inline-block"
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;