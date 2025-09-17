import React from 'react';
import { Product } from '../types/Product';
import { trekMarlin7R29 } from '../data/products/bicycles';
import { hondaCb150f } from '../data/products/motorcycles';
import { hondaTrx420Fm } from '../data/products/atvs';
import ProductCard from './ProductCard';

const OtherProducts: React.FC = () => {
  const featuredProducts: Product[] = [
    trekMarlin7R29,
    hondaCb150f,
    hondaTrx420Fm
  ];

  const handleViewDetails = (product: Product) => {
    // Por ahora solo mostramos un alert, después se implementará la navegación
    alert(`Ver detalles de ${product.brand} ${product.model}`);
  };

  const handleViewMore = (category: string) => {
    // Por ahora solo mostramos un alert, después se implementará la navegación
    alert(`Ver más ${category}`);
  };

  return (
    <section id="otros-productos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Otros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubrí nuestra amplia gama de bicicletas, motos y cuatriciclos de las mejores marcas
          </p>
        </div>

        {/* Productos destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Botones para ver más por categoría */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bicicletas</h3>
            <p className="text-gray-600 mb-4">Mountain bikes, urbanas y de ruta de las mejores marcas</p>
            <button
              onClick={() => handleViewMore('bicicletas')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Bicicletas
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Motos</h3>
            <p className="text-gray-600 mb-4">Motocicletas de 125cc a 150cc para ciudad y carretera</p>
            <button
              onClick={() => handleViewMore('motos')}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Ver Motos
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cuatriciclos</h3>
            <p className="text-gray-600 mb-4">ATVs 4x4 para trabajo, recreación y aventura</p>
            <button
              onClick={() => handleViewMore('cuatriciclos')}
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Ver Cuatriciclos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;
