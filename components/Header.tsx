import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
 
const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Si estamos en la página principal, hacer scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar al home y luego al section
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };
 
  // Efecto para scroll después de navegar
  React.useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
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
 
        <a
          href="/#contacto"
          onClick={(e) => handleNavClick(e, 'contacto')}
          className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
        >
          Empezar ahora
        </a>
      </div>
    </header>
  );
};
 
export default Header;