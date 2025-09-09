import React, { useState } from 'react';
import { Vehicle } from '../types/Vehicle';
import { X, Download, Copy, Facebook, Instagram, Check } from 'lucide-react';
import { generateShareText, downloadAllImages, shareToFacebook } from '../utils/socialShare';

interface SocialShareModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const SocialShareModal: React.FC<SocialShareModalProps> = ({ vehicle, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isTextCopied, setIsTextCopied] = useState(false);

  const shareText = generateShareText(vehicle);

  const handleDownloadImages = async () => {
    setIsDownloading(true);
    try {
      await downloadAllImages(vehicle);
      alert('¡Imágenes descargadas exitosamente! 📸');
    } catch (error) {
      alert('Error al descargar las imágenes. Por favor, intentá nuevamente.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopyText = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setIsTextCopied(true);
      setTimeout(() => setIsTextCopied(false), 3000);
    } catch (error) {
      alert('Error al copiar el texto. Por favor, intentá nuevamente.');
    }
  };

  const handleFacebookShare = async () => {
    await shareToFacebook(vehicle);
  };

  const handleInstagramShare = async () => {
    await shareToInstagram(vehicle);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Compartir {vehicle.brand} {vehicle.model}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Vehicle Preview */}
          <div className="mb-6">
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {vehicle.brand} {vehicle.model} {vehicle.year}
            </h3>
            <p className="text-gray-600">
              {vehicle.images.length} imagen{vehicle.images.length !== 1 ? 'es' : ''} disponible{vehicle.images.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Share Text Preview */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Texto para publicar:</h4>
            <div className="bg-gray-50 rounded-xl p-4 border">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                {shareText}
              </pre>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {/* Download Images */}
            <button
              onClick={handleDownloadImages}
              disabled={isDownloading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              <span>
                {isDownloading ? 'Descargando...' : `Descargar ${vehicle.images.length} imagen${vehicle.images.length !== 1 ? 'es' : ''}`}
              </span>
            </button>

            {/* Copy Text */}
            <button
              onClick={handleCopyText}
              className="w-full bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
            >
              {isTextCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              <span>{isTextCopied ? '¡Texto copiado!' : 'Copiar texto al portapapeles'}</span>
            </button>

            {/* Social Media Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleFacebookShare}
                className="bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </button>
              <button
                onClick={handleInstagramShare}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <h4 className="font-semibold text-blue-900 mb-2">📱 Instrucciones:</h4>
            <div className="text-sm text-blue-800 space-y-2">
              <div>
                <p><strong>En móvil:</strong></p>
                <p>• Los botones abrirán automáticamente las apps</p>
                <p>• Las imágenes se descargan a tu galería</p>
                <p>• El texto se copia automáticamente</p>
              </div>
              <div>
                <p><strong>En desktop:</strong></p>
                <p>• Las imágenes se descargan a tu carpeta</p>
                <p>• Usá tu móvil para publicar en redes sociales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShareModal;
