import React, { useState, useRef } from 'react';
import { Vehicle } from '../types/Vehicle';
import { ChevronLeft, ChevronRight, Calendar, Fuel, Settings, Zap, Eye, Share2 } from 'lucide-react';
import { whatsappNumber } from '../data/vehicles';
import SocialShareModal from './SocialShareModal';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && vehicle.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    }
    if (isRightSwipe && vehicle.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
    }
  };

  const formatPrice = (price: number) => {
    if (price === 0) {
      return 'Consultar precio';
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hola! Me interesa el ${vehicle.brand} ${vehicle.model} ${vehicle.year} que vi en su página web. ¿Podrían darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareModal(true);
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onClick={() => onViewDetails(vehicle)}
    >
      {/* Image Carousel */}
      <div 
        ref={imageRef}
        className="relative h-64 group touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={vehicle.images[currentImageIndex]}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
        
        {/* Availability Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
          vehicle.available 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {vehicle.available ? 'Disponible' : 'Vendido'}
        </div>

        {/* Image Navigation */}
        {vehicle.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 touch-manipulation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 touch-manipulation"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {vehicle.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {vehicle.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentImageIndex ? 'bg-blue-600' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className="flex-1 pr-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              {vehicle.brand} {vehicle.model}
            </h3>
            <p className="text-gray-600 flex items-center mt-1 text-sm sm:text-base">
              <Calendar className="w-4 h-4 mr-1" />
              {vehicle.year}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xl sm:text-2xl font-bold text-blue-600">
              {formatPrice(vehicle.price)}
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-3 sm:mb-4 leading-relaxed">
          {vehicle.description}
        </p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            {vehicle.specs.horsepower}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Settings className="w-4 h-4 mr-2 text-blue-600" />
            {vehicle.specs.transmission}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Fuel className="w-4 h-4 mr-2 text-blue-600" />
            {vehicle.specs.mileage}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Settings className="w-4 h-4 mr-2 text-blue-600" />
            {vehicle.specs.drivetrain}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 sm:space-y-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(vehicle);
            }}
            className="w-full bg-gray-100 text-gray-900 py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2 touch-manipulation"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm sm:text-base">Ver Detalles Completos</span>
          </button>
          
          {/* Share Button */}
          <button
            onClick={handleShareClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg touch-manipulation"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm sm:text-base">Compartir en Redes Sociales</span>
          </button>
          
          {vehicle.available && (
            <button
              onClick={handleWhatsAppContact}
              className="w-full bg-green-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg touch-manipulation"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
              </svg>
              <span className="text-sm sm:text-base">Consultar por WhatsApp</span>
            </button>
          )}
        </div>
      </div>

      {/* Social Share Modal */}
      {showShareModal && (
        <SocialShareModal
          vehicle={vehicle}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
};

export default VehicleCard;