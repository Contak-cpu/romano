import React from 'react';
import { Car, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-1/348582432_123822964045640_7770769562979972224_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFA9kr8zfLkClrcI0tm_Dfg95zgJ-Ei_1L3nOAn4SL_Uj1YqLOuITgNxpSpqsQQgv_Lxi0dCMD3rcaA98FSuzwu&_nc_ohc=m5y2wgTBkiIQ7kNvwFz2DAO&_nc_oc=Adk3uYpL223qzLdJNWj5TvYKACFEH7jJRY2yASzQa6KDGRk8zWz9QUwdVjdWVCaR4D4&_nc_zt=24&_nc_ht=scontent.fcor2-2.fna&_nc_gid=9YVlKtdrAhjf4lcii6o5JA&oh=00_AfaNBmMg1JbREPTvUdO5QoUvFLt2cr8M5lG63SlhFULTTA&oe=68C675AF"
                  alt="López Automotores Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">López Automotores</h3>
                <p className="text-blue-400">Tu próximo auto te espera</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Somos una empresa familiar con más de 10 años de experiencia en el mercado automotriz argentino. 
              Nos especializamos en vehículos usados de calidad y tomamos autos a consignación. 
              No realizamos venta inmediata al contado.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Teléfono</p>
                  <a 
                    href="tel:+543546544885" 
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    +54 3546 544885
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a 
                    href="mailto:info@lopezautomotores.com.ar" 
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    info@lopezautomotores.com.ar
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Ubicación</p>
                  <p className="text-white">
                    Pedro Rosenda 445<br />
                    Santa Rosa de Calamuchita<br />
                    C.P. X5196
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Horarios de Atención</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400 text-sm">Lunes a Viernes</p>
                  <p className="text-white">9:00 - 18:00 hs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400 text-sm">Sábados</p>
                  <p className="text-white">9:00 - 13:00 hs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400 text-sm">Domingos</p>
                  <p className="text-white">Solo con cita previa</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => {
                  const message = "Hola! Me gustaría agendar una cita para visitar el local y ver vehículos.";
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/543546544885?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                </svg>
                <span>Agendar Cita</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 López Automotores. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;