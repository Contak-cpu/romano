import React from 'react';
import { renaultDusterIconicTce2024 } from '../../data/vehicles';

interface VehicleFormProps {
  onSubmit: (formData: any) => void;
}

const RenaultDusterIconicTce2024Form: React.FC<VehicleFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Renault Duster Iconic Tce 2024
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Especificaciones</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Motor:</span> {renaultDusterIconicTce2024.specs.engine}</p>
              <p><span className="font-medium">Transmisión:</span> {renaultDusterIconicTce2024.specs.transmission}</p>
              <p><span className="font-medium">Kilómetros:</span> {renaultDusterIconicTce2024.specs.mileage}</p>
              <p><span className="font-medium">Combustible:</span> {renaultDusterIconicTce2024.specs.fuelType}</p>
              <p><span className="font-medium">Potencia:</span> {renaultDusterIconicTce2024.specs.horsepower}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Características</h3>
            <ul className="space-y-1 text-gray-600">
              {renaultDusterIconicTce2024.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="consulta" className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de consulta *
          </label>
          <select
            id="consulta"
            name="consulta"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleccione una opción</option>
            <option value="informacion">Información general</option>
            <option value="financiamiento">Consulta sobre financiamiento</option>
            <option value="permuta">Consulta sobre permuta</option>
            <option value="garantia">Consulta sobre garantía</option>
            <option value="visita">Agendar visita</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje adicional
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Cuéntanos más sobre tu consulta..."
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Enviar Consulta
          </button>
          <button
            type="button"
            onClick={() => {
              const message = `Hola! Me interesa el Renault Duster Iconic Tce 2024. Me gustaría recibir más información.`;
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/543546544885?text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="flex-1 bg-green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
            </svg>
            <span>WhatsApp</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RenaultDusterIconicTce2024Form;
