import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ProductServices from './components/Productservices';
import Pricing from './components/Pricing';
import RefundPolicy from './components/Refundpolicy';

// Componente para la página principal
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ProductServices />} />
            <Route path="/precios" element={<Pricing />} />
            <Route path="/terminos" element={<TermsConditions />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/reembolsos" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;