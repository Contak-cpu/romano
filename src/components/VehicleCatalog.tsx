import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';
import { Vehicle } from '../types/Vehicle';
import VehicleCard from './VehicleCard';
import VehicleDetails from './VehicleDetails';
import { Search, Filter } from 'lucide-react';

const VehicleCatalog: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAvailable, setFilterAvailable] = useState<'all' | 'available' | 'sold'>('all');

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterAvailable === 'all' || 
                         (filterAvailable === 'available' && vehicle.available) ||
                         (filterAvailable === 'sold' && !vehicle.available);

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Vehículos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada vehículo en nuestro catálogo ha sido cuidadosamente seleccionado y verificado. 
            Encontrá el auto perfecto para vos con la tranquilidad de una compra segura.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por marca o modelo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterAvailable}
                onChange={(e) => setFilterAvailable(e.target.value as 'all' | 'available' | 'sold')}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[180px]"
              >
                <option value="all">Todos los vehículos</option>
                <option value="available">Solo disponibles</option>
                <option value="sold">Solo vendidos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Mostrando {filteredVehicles.length} de {vehicles.length} vehículos
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard 
              key={vehicle.id} 
              vehicle={vehicle} 
              onViewDetails={setSelectedVehicle}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No encontramos vehículos
            </h3>
            <p className="text-gray-600 mb-6">
              Probá con otros términos de búsqueda o contactanos para consultar por otros modelos.
            </p>
            <button 
              onClick={() => {
                const message = "Hola! No encontré el vehículo que busco en la página. ¿Podrían ayudarme a encontrar otras opciones?";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/543546544885?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Consultar Otros Modelos
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-gray-600 mb-6">
              Tenemos contactos en todo el país para conseguir el vehículo que necesitás. 
              Contanos qué estás buscando y te ayudamos a encontrarlo.
            </p>
            <button 
              onClick={() => {
                const message = "Hola! Me gustaría saber qué otros vehículos tienen disponibles o pueden conseguir.";
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/543546544885?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Consultar Inventario Completo
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <VehicleDetails
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </section>
  );
};

export default VehicleCatalog;