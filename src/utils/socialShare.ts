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

export const downloadImage = async (imageUrl: string, filename: string): Promise<void> => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading image:', error);
    alert('Error al descargar la imagen. Por favor, intentá nuevamente.');
  }
};

export const downloadAllImages = async (vehicle: Vehicle): Promise<void> => {
  try {
    for (let i = 0; i < vehicle.images.length; i++) {
      const filename = `${vehicle.brand}-${vehicle.model}-${vehicle.year}-${i + 1}.jpg`;
      await downloadImage(vehicle.images[i], filename);
      // Pequeña pausa entre descargas para evitar problemas
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const shareToFacebook = async (vehicle: Vehicle): Promise<void> => {
  const shareText = generateShareText(vehicle);
  
  if (isMobile()) {
    // En móvil, descargar imágenes primero y luego abrir Facebook
    await downloadAllImages(vehicle);
    
    // Copiar texto al portapapeles
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
    
    // Intentar abrir la app de Facebook
    const facebookAppUrl = 'fb://facewebmodal/f?href=https://www.facebook.com';
    const facebookWebUrl = 'https://www.facebook.com';
    
    // Intentar abrir la app primero
    window.location.href = facebookAppUrl;
    
    // Si no se abre la app en 2 segundos, abrir en navegador
    setTimeout(() => {
      window.open(facebookWebUrl, '_blank');
    }, 2000);
    
    alert(`¡Perfecto! 📱

✅ Imágenes descargadas a tu dispositivo
✅ Texto copiado al portapapeles
✅ Abriendo Facebook...

📱 Ahora podés:
1. Las imágenes están en tu galería
2. El texto está copiado
3. Crear una nueva publicación en Facebook
4. Subir las imágenes descargadas
5. Pegar el texto copiado
6. ¡Publicar! 🚀`);
  } else {
    // En desktop, usar el método tradicional
    const url = encodeURIComponent('https://lopezautomotores.vercel.app');
    const text = encodeURIComponent(shareText);
    
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  }
};

export const shareToInstagram = async (vehicle: Vehicle): Promise<void> => {
  // Descargar todas las imágenes primero
  await downloadAllImages(vehicle);
  
  // Luego copiar el texto
  const shareText = generateShareText(vehicle);
  
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
  
  if (isMobile()) {
    // En móvil, intentar abrir la app de Instagram
    const instagramAppUrl = 'instagram://camera';
    const instagramWebUrl = 'https://www.instagram.com';
    
    // Intentar abrir la app primero
    window.location.href = instagramAppUrl;
    
    // Si no se abre la app en 2 segundos, abrir en navegador
    setTimeout(() => {
      window.open(instagramWebUrl, '_blank');
    }, 2000);
    
    alert(`¡Perfecto! 📱

✅ Imágenes descargadas a tu galería
✅ Texto copiado al portapapeles
✅ Abriendo Instagram...

📱 Ahora podés:
1. Las imágenes están en tu galería
2. El texto está copiado
3. Crear una nueva publicación en Instagram
4. Seleccionar las imágenes de tu galería
5. Pegar el texto copiado
6. ¡Publicar! 🚀`);
  } else {
    // En desktop, mostrar instrucciones
    alert(`¡Perfecto! 🎉

✅ Imágenes descargadas a tu dispositivo
✅ Texto copiado al portapapeles

📱 Ahora podés:
1. Ir a Instagram en tu móvil
2. Crear una nueva publicación
3. Subir las imágenes descargadas
4. Pegar el texto copiado
5. ¡Publicar! 🚀

Las imágenes están en tu carpeta de Descargas.`);
  }
};

export const shareToWhatsApp = (vehicle: Vehicle): void => {
  const shareText = generateShareText(vehicle);
  const encodedText = encodeURIComponent(shareText);
  const whatsappUrl = `https://wa.me/?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
};
