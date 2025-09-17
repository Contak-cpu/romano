import { Product } from '../../types/Product';

export const trekMarlin7R29: Product = {
  id: 'trek-marlin-7-r29',
  category: 'bicycle',
  brand: 'TREK',
  model: 'Marlin 7 R29',
  year: 2024,
  price: 850000,
  currency: 'ARS',
  images: [
    'https://media.discordapp.net/attachments/877739044228960266/1417866684437626911/D_NQ_NP_823648-MLA77520936586_072024-O.png?ex=68cc0ac0&is=68cab940&hm=5d45f3b8a27cbd936d3a7c5fdf5381a158fba9dea84fdb25ec6b8a18b6d07573&=&format=webp&quality=lossless'
  ],
  specs: {
    gears: '21 velocidades Shimano',
    brakes: 'Frenos a disco hidráulicos',
    suspension: 'Suspensión delantera RockShox',
    frame: 'Cuadro de aluminio',
    wheels: 'Ruedas tubeless ready',
    mileage: '0 km'
  },
  features: [
    'Mountain Bike 21 velocidades',
    'Frenos a disco hidráulicos',
    'Suspensión delantera RockShox',
    'Cuadro de aluminio',
    'Ruedas tubeless ready',
    'Nueva - 0 km',
    'Garantía oficial'
  ],
  available: true,
  description: 'TREK Marlin 7 R29 2024, Mountain Bike de alta calidad con 21 velocidades Shimano, frenos a disco hidráulicos y suspensión delantera RockShox. Cuadro de aluminio y ruedas tubeless ready para máxima performance.'
};

export const specializedRockhopperR29: Product = {
  id: 'specialized-rockhopper-r29',
  category: 'bicycle',
  brand: 'SPECIALIZED',
  model: 'Rockhopper R29',
  year: 2024,
  price: 720000,
  currency: 'ARS',
  images: [
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  specs: {
    gears: '24 velocidades Shimano Altus',
    brakes: 'Frenos a disco mecánicos',
    suspension: 'Suspensión delantera ajustable',
    frame: 'Cuadro de aluminio A1',
    wheels: 'Neumáticos de alta tracción',
    mileage: '0 km'
  },
  features: [
    'Mountain Bike 24 velocidades',
    'Frenos a disco mecánicos',
    'Suspensión delantera ajustable',
    'Cuadro de aluminio A1',
    'Neumáticos de alta tracción',
    'Nueva - 0 km',
    'Garantía oficial'
  ],
  available: true,
  description: 'SPECIALIZED Rockhopper R29 2024, Mountain Bike con 24 velocidades Shimano Altus, frenos a disco mecánicos y suspensión delantera ajustable. Cuadro de aluminio A1 y neumáticos de alta tracción.'
};

export const giantEscape3R28: Product = {
  id: 'giant-escape-3-r28',
  category: 'bicycle',
  brand: 'GIANT',
  model: 'Escape 3 R28',
  year: 2024,
  price: 485000,
  currency: 'ARS',
  images: [
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop'
  ],
  specs: {
    gears: '21 velocidades',
    brakes: 'Frenos V-brake',
    frame: 'Cuadro de aluminio ALUXX',
    wheels: 'Ruedas R28',
    mileage: '0 km'
  },
  features: [
    'Bicicleta urbana 21 velocidades',
    'Frenos V-brake',
    'Cuadro de aluminio ALUXX',
    'Posición de manejo cómoda',
    'Ideal para ciudad y paseos',
    'Nueva - 0 km',
    'Garantía oficial'
  ],
  available: true,
  description: 'GIANT Escape 3 R28 2024, bicicleta urbana con 21 velocidades, frenos V-brake y cuadro de aluminio ALUXX. Posición de manejo cómoda, ideal para ciudad y paseos.'
};

export const bicycles = [
  trekMarlin7R29,
  specializedRockhopperR29,
  giantEscape3R28
];
