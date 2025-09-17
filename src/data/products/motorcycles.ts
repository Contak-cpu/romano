import { Product } from '../../types/Product';

export const hondaCb150f: Product = {
  id: 'honda-cb-150f',
  category: 'motorcycle',
  brand: 'HONDA',
  model: 'CB 150F',
  year: 2024,
  price: 2890000,
  currency: 'ARS',
  images: [
    'https://media.discordapp.net/attachments/877739044228960266/1417867058103849111/CB-150-F-Black-2.png?ex=68cc0b19&is=68cab999&hm=b201cf7e02524d225f491ac0d38bea0ca14cc21371615f717098383b3aafec74&=&format=webp&quality=lossless&width=856&height=856'
  ],
  specs: {
    engine: 'Motor 150cc monocilíndrico 4 tiempos',
    transmission: 'Manual 5 velocidades',
    brakes: 'Frenos a disco delantero y tambor trasero',
    horsepower: '12 CV',
    fuelType: 'Nafta',
    mileage: '0 km'
  },
  features: [
    'Motor 150cc monocilíndrico 4 tiempos',
    'Frenos a disco delantero y tambor trasero',
    'Arranque eléctrico y kick',
    'Tablero digital',
    'Consumo: 45 km/l',
    'Nueva - 0 km',
    'Garantía oficial Honda'
  ],
  available: true,
  description: 'HONDA CB 150F 2024, motocicleta con motor 150cc monocilíndrico 4 tiempos, frenos a disco delantero y tambor trasero. Arranque eléctrico y kick, tablero digital y consumo de 45 km/l.'
};

export const yamahaYbr125z: Product = {
  id: 'yamaha-ybr-125z',
  category: 'motorcycle',
  brand: 'YAMAHA',
  model: 'YBR 125Z',
  year: 2024,
  price: 2450000,
  currency: 'ARS',
  images: [
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  specs: {
    engine: 'Motor 125cc monocilíndrico 4 tiempos',
    transmission: 'Manual 5 velocidades',
    brakes: 'Frenos a disco delantero',
    horsepower: '10 CV',
    fuelType: 'Nafta',
    mileage: '0 km'
  },
  features: [
    'Motor 125cc monocilíndrico 4 tiempos',
    'Frenos a disco delantero',
    'Arranque eléctrico',
    'Ruedas de aleación',
    'Bajo consumo y mantenimiento',
    'Nueva - 0 km',
    'Garantía oficial Yamaha'
  ],
  available: true,
  description: 'YAMAHA YBR 125Z 2024, motocicleta con motor 125cc monocilíndrico 4 tiempos, frenos a disco delantero y arranque eléctrico. Ruedas de aleación, bajo consumo y mantenimiento.'
};

export const motorcycles = [
  hondaCb150f,
  yamahaYbr125z
];
