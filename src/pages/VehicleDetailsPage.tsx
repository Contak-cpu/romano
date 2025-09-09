import React from 'react';
import { useParams } from 'react-router-dom';
import { RenaultDusterIconicTce2024Form } from '../components/VehicleForms';

const VehicleDetailsPage: React.FC = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();

  const handleFormSubmit = (formData: any) => {
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Consulta enviada! Te contactaremos pronto.');
  };

  const renderVehicleForm = () => {
    switch (vehicleId) {
      case 'renault-duster-iconic-tce-2024':
        return <RenaultDusterIconicTce2024Form onSubmit={handleFormSubmit} />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehículo no encontrado</h2>
            <p className="text-gray-600">El vehículo solicitado no está disponible.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderVehicleForm()}
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
