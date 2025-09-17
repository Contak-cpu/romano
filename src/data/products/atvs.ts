import { Product } from '../../types/Product';

export const hondaTrx420Fm: Product = {
  id: 'honda-trx-420-fm',
  category: 'atv',
  brand: 'HONDA',
  model: 'TRX 420 FM',
  year: 2024,
  price: 8950000,
  currency: 'ARS',
  images: [
    'https://media.discordapp.net/attachments/877739044228960266/1417867291240042616/honda-trx-420.png?ex=68cc0b50&is=68cab9d0&hm=e631ca53b008690f0c34c4232ee6d374156d0e80825491be448a5c2bf288887f&=&format=webp&quality=lossless&width=912&height=513'
  ],
  specs: {
    engine: 'Motor 420cc monocilíndrico 4 tiempos',
    transmission: 'Transmisión automática con reversa',
    drivetrain: 'Tracción 4x4 seleccionable',
    horsepower: '25 CV',
    fuelType: 'Nafta',
    capacity: 'Capacidad de carga: 180 kg',
    mileage: '0 km'
  },
  features: [
    'Motor 420cc monocilíndrico 4 tiempos',
    'Transmisión automática con reversa',
    'Tracción 4x4 seleccionable',
    'Dirección asistida',
    'Capacidad de carga: 180 kg',
    'Nuevo - 0 km',
    'Garantía oficial Honda'
  ],
  available: true,
  description: 'HONDA TRX 420 FM 2024, cuatriciclo con motor 420cc monocilíndrico 4 tiempos, transmisión automática con reversa y tracción 4x4 seleccionable. Dirección asistida y capacidad de carga de 180 kg.'
};

export const yamahaGrizzly3504x4: Product = {
  id: 'yamaha-grizzly-350-4x4',
  category: 'atv',
  brand: 'YAMAHA',
  model: 'Grizzly 350 4x4',
  year: 2024,
  price: 7200000,
  currency: 'ARS',
  images: [
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  specs: {
    engine: 'Motor 348cc monocilíndrico 4 tiempos',
    transmission: 'Transmisión variable continua',
    drivetrain: 'Tracción 4x4 con bloqueo diferencial',
    horsepower: '22 CV',
    fuelType: 'Nafta',
    suspension: 'Suspensión independiente delantera',
    mileage: '0 km'
  },
  features: [
    'Motor 348cc monocilíndrico 4 tiempos',
    'Transmisión variable continua',
    'Tracción 4x4 con bloqueo diferencial',
    'Arranque eléctrico',
    'Suspensión independiente delantera',
    'Nuevo - 0 km',
    'Garantía oficial Yamaha'
  ],
  available: true,
  description: 'YAMAHA Grizzly 350 4x4 2024, cuatriciclo con motor 348cc monocilíndrico 4 tiempos, transmisión variable continua y tracción 4x4 con bloqueo diferencial. Arranque eléctrico y suspensión independiente delantera.'
};

export const atvs = [
  hondaTrx420Fm,
  yamahaGrizzly3504x4
];
