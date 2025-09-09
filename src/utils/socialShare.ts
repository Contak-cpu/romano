import { Vehicle } from '../types/Vehicle';

export const generateShareText = (vehicle: Vehicle): string => {
  const priceText = vehicle.price === 0 ? 'Consultar precio' : 
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(vehicle.price);

  return `🚗 ${vehicle.brand} ${vehicle.model} ${vehicle.year}

💰 ${priceText}
📍 ${vehicle.specs.mileage}
⚙️ ${vehicle.specs.transmission}
🔥 ${vehicle.specs.horsepower}

${vehicle.description}

🏪 López Automotores
📱 +54 3546 544885
🌐 lopezautomotores.vercel.app

#LopezAutomotores #AutosUsados #${vehicle.brand} #${vehicle.model} #SantaRosaDeCalamuchita`;
};

export const shareToFacebook = (vehicle: Vehicle): void => {
  const shareText = generateShareText(vehicle);
  const url = encodeURIComponent('https://lopezautomotores.vercel.app');
  const text = encodeURIComponent(shareText);
  
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
  window.open(facebookUrl, '_blank', 'width=600,height=400');
};

export const shareToInstagram = (vehicle: Vehicle): void => {
  // Instagram no permite compartir directamente desde web
  // En su lugar, copiamos el texto al portapapeles para que el usuario lo pegue manualmente
  const shareText = generateShareText(vehicle);
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('¡Texto copiado al portapapeles! Ahora podés pegarlo en tu publicación de Instagram.');
    }).catch(() => {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('¡Texto copiado al portapapeles! Ahora podés pegarlo en tu publicación de Instagram.');
    });
  } else {
    // Fallback para navegadores más antiguos
    const textArea = document.createElement('textarea');
    textArea.value = shareText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('¡Texto copiado al portapapeles! Ahora podés pegarlo en tu publicación de Instagram.');
  }
};

export const shareToWhatsApp = (vehicle: Vehicle): void => {
  const shareText = generateShareText(vehicle);
  const encodedText = encodeURIComponent(shareText);
  const whatsappUrl = `https://wa.me/?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
};
