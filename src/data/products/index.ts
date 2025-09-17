// Archivo índice para exportar todos los productos
import { bicycles } from './bicycles';
import { motorcycles } from './motorcycles';
import { atvs } from './atvs';

export const products = [
  ...bicycles,
  ...motorcycles,
  ...atvs
];

export { bicycles, motorcycles, atvs };

export const whatsappNumber = '+543541579927';
