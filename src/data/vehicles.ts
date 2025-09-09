import { Vehicle } from '../types/Vehicle';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla Cross',
    year: 2023,
    price: 18500000,
    currency: 'ARS',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '2.0L 4 cilindros',
      transmission: 'CVT Automática',
      mileage: '25.000 km',
      fuelType: 'Nafta',
      drivetrain: 'Tracción delantera',
      horsepower: '169 CV'
    },
    features: [
      'Toyota Safety Sense 2.0',
      'Pantalla táctil de 8 pulgadas',
      'Cámara de retroceso',
      'Control de crucero adaptativo',
      'Sensores de estacionamiento',
      'Climatizador automático'
    ],
    available: true,
    description: 'SUV compacta ideal para la ciudad y rutas argentinas. Combina eficiencia, tecnología y la confiabilidad Toyota.'
  },
  {
    id: '2',
    brand: 'Volkswagen',
    model: 'Amarok V6',
    year: 2022,
    price: 22800000,
    currency: 'ARS',
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '3.0L V6 TDI',
      transmission: 'Automática 8 velocidades',
      mileage: '45.000 km',
      fuelType: 'Diesel',
      drivetrain: '4Motion AWD',
      horsepower: '258 CV'
    },
    features: [
      'Tracción 4x4 permanente',
      'Sistema de navegación',
      'Asientos de cuero',
      'Barras antivuelco',
      'Llantas de aleación 19"',
      'Faros LED'
    ],
    available: true,
    description: 'La pickup más potente del segmento. Perfecta para trabajo y aventura con la calidad alemana de siempre.'
  },
  {
    id: '3',
    brand: 'Ford',
    model: 'Territory',
    year: 2023,
    price: 16200000,
    currency: 'ARS',
    images: [
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '1.5L EcoBoost',
      transmission: 'CVT Automática',
      mileage: '18.000 km',
      fuelType: 'Nafta',
      drivetrain: 'Tracción delantera',
      horsepower: '143 CV'
    },
    features: [
      'SYNC 3 con pantalla de 10"',
      'Cámara 360°',
      'Asientos de cuero sintético',
      'Techo panorámico',
      'Cargador inalámbrico',
      'Ford Co-Pilot360'
    ],
    available: true,
    description: 'SUV moderna con tecnología de vanguardia. Diseñada para familias que buscan confort y conectividad.'
  },
  {
    id: '4',
    brand: 'Chevrolet',
    model: 'Cruze Premier',
    year: 2022,
    price: 12800000,
    currency: 'ARS',
    images: [
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '1.4L Turbo',
      transmission: 'Automática 6 velocidades',
      mileage: '32.000 km',
      fuelType: 'Nafta',
      drivetrain: 'Tracción delantera',
      horsepower: '153 CV'
    },
    features: [
      'MyLink con Android Auto',
      'Asientos de cuero',
      'Climatizador automático',
      'Sensores de estacionamiento',
      'Llantas de aleación 17"',
      'Faros antiniebla LED'
    ],
    available: false,
    description: 'Sedán premium con excelente relación precio-calidad. Ideal para ejecutivos y familias modernas.'
  },
  {
    id: '5',
    brand: 'Peugeot',
    model: '3008 GT',
    year: 2023,
    price: 19500000,
    currency: 'ARS',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '1.6L THP',
      transmission: 'Automática 6 velocidades',
      mileage: '15.000 km',
      fuelType: 'Nafta',
      drivetrain: 'Tracción delantera',
      horsepower: '165 CV'
    },
    features: [
      'i-Cockpit Peugeot',
      'Techo panorámico',
      'Asientos Nappa con masaje',
      'Sistema de sonido Focal',
      'Grip Control',
      'Faros Full LED'
    ],
    available: true,
    description: 'SUV francesa con diseño distintivo y tecnología premium. La elegancia europea al alcance de tu mano.'
  },
  {
    id: '6',
    brand: 'Fiat',
    model: 'Cronos Drive',
    year: 2022,
    price: 8900000,
    currency: 'ARS',
    images: [
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      engine: '1.3L FireFly',
      transmission: 'Manual 5 velocidades',
      mileage: '28.000 km',
      fuelType: 'Nafta',
      drivetrain: 'Tracción delantera',
      horsepower: '99 CV'
    },
    features: [
      'Uconnect con pantalla 7"',
      'Aire acondicionado',
      'Dirección asistida',
      'Cierre centralizado',
      'Llantas de aleación 15"',
      'Bluetooth y USB'
    ],
    available: true,
    description: 'Sedán accesible y confiable. Perfecto como primer auto o para uso urbano diario con bajo consumo.'
  }
];

export const whatsappNumber = '+5491123456789';