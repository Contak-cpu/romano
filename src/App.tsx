import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleCatalog from './components/VehicleCatalog';
import OtherProducts from './components/OtherProducts';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VehicleCatalog />
      <OtherProducts />
      <Services />
      <Footer />
    </div>
  );
}

export default App;