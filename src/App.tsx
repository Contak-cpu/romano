import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleCatalog from './components/VehicleCatalog';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VehicleCatalog />
      <Services />
      <Footer />
    </div>
  );
}

export default App;