import React from 'react';
import { Shield, Search, Handshake, Award, FileText, CreditCard } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Búsqueda Personalizada',
      description: 'Te ayudamos a encontrar el vehículo específico que buscás, aunque no esté en nuestro stock actual.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Verificación Completa',
      description: 'Todos nuestros vehículos pasan por una inspección técnica de 120 puntos antes de la venta.'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Tomamos tu Auto',
      description: 'Aceptamos tu vehículo como parte de pago o lo vendemos en consignación al mejor precio.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Gestión Completa',
      description: 'Nos ocupamos de toda la documentación: transferencia, patentamiento y trámites legales.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Financiación',
      description: 'Trabajamos con las mejores entidades financieras para ofrecerte planes de pago flexibles.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Garantía',
      description: 'Todos nuestros vehículos incluyen garantía de 30 días en motor y caja de cambios.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más que vender autos, te acompañamos en todo el proceso. 
            Desde la búsqueda hasta la entrega, cuidamos cada detalle para que tengas la mejor experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Consignment Process */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Querés vender tu auto?
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Te ofrecemos dos opciones: lo compramos al contado o lo vendemos en consignación 
                para que obtengas el mejor precio del mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-xl font-semibold mb-3">Evaluación</h4>
                <p className="text-blue-100">
                  Nuestros expertos evalúan tu vehículo y te damos una tasación justa y transparente.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-xl font-semibold mb-3">Decisión</h4>
                <p className="text-blue-100">
                  Elegís si preferís venta inmediata al contado o consignación para obtener más dinero.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-xl font-semibold mb-3">Resultado</h4>
                <p className="text-blue-100">
                  Nos ocupamos de todo: publicidad, visitas, negociación y documentación.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => {
                  const message = "Hola! Me gustaría recibir información sobre la venta de mi vehículo.";
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/5491123456789?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3 mx-auto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                </svg>
                <span>Consultar Venta de mi Auto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;