import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state && state.scrollTo) {
      const sectionId = state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e7edf3]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Dimetrics"
            className="h-10 w-auto object-contain"
            width={120}
            height={40}
          />
          <span className="font-extrabold text-[#0d141b] tracking-tight uppercase text-lg hidden sm:inline">
            DIMETRICS
          </span>
        </a>
        
        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="/#nosotros" 
            onClick={(e) => handleNavClick(e, 'nosotros')}
            className="text-sm font-medium text-[#0d141b] hover:text-primary transition-colors"
          >
            Quiénes Somos
          </a>
          <a 
            href="/#servicios" 
            onClick={(e) => handleNavClick(e, 'servicios')}
            className="text-sm font-medium text-[#0d141b] hover:text-primary transition-colors"
          >
            Qué Hacemos
          </a>
          <a 
            href="/precios" 
            className="text-sm font-medium text-[#0d141b] hover:text-primary transition-colors"
          >
            Precios
          </a>
          <a 
            href="/#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="text-sm font-medium text-[#0d141b] hover:text-primary transition-colors"
          >
            Contáctenos
          </a>
        </nav>

        {/* Botón Desktop */}
        <a
          href="/#contacto"
          onClick={(e) => handleNavClick(e, 'contacto')}
          className="hidden md:block bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
        >
          Empezar ahora
        </a>

        {/* Botón Hamburguesa - Solo móvil */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Abrir menú"
        >
          <span 
            className={`block w-6 h-0.5 bg-[#0d141b] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} 
          />
          <span 
            className={`block w-6 h-0.5 bg-[#0d141b] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`} 
          />
          <span 
            className={`block w-6 h-0.5 bg-[#0d141b] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} 
          />
        </button>
      </div>

      {/* Menú Móvil */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 gap-2 bg-white border-t border-[#e7edf3]">
          <a 
            href="/#nosotros" 
            onClick={(e) => handleNavClick(e, 'nosotros')}
            className="text-sm font-medium text-[#0d141b] hover:text-primary py-3 border-b border-[#e7edf3]"
          >
            Quiénes Somos
          </a>
          <a 
            href="/#servicios" 
            onClick={(e) => handleNavClick(e, 'servicios')}
            className="text-sm font-medium text-[#0d141b] hover:text-primary py-3 border-b border-[#e7edf3]"
          >
            Qué Hacemos
          </a>
          <a 
            href="/precios" 
            onClick={handleLinkClick}
            className="text-sm font-medium text-[#0d141b] hover:text-primary py-3 border-b border-[#e7edf3]"
          >
            Precios
          </a>
          <a 
            href="/#contacto" 
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="text-sm font-medium text-[#0d141b] hover:text-primary py-3 border-b border-[#e7edf3]"
          >
            Contáctenos
          </a>
          <a
            href="/#contacto"
            onClick={(e) => handleNavClick(e, 'contacto')}
            className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors text-center mt-2"
          >
            Empezar ahora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;