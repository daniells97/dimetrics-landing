import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f7f8] border-t border-[#e7edf3] py-10 sm:py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6">
          {/* Logo y Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            <a href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo.png"
                alt="Dimetrics"
                className="h-11 w-auto object-contain"
                width={140}
                height={44}
              />
              <span className="font-extrabold text-[#0d141b] tracking-tight uppercase text-lg">DIMETRICS</span>
            </a>
            <p className="text-sm text-[#4c739a] text-center sm:text-left">
              © {new Date().getFullYear()} DIMETRICS. Todos los derechos reservados.
            </p>
          </div>
          
          {/* Links legales */}
          <div className="flex justify-center gap-6 text-sm text-[#4c739a] border-t border-[#e7edf3] pt-6">
            <a 
              href="/terminos" 
              className="hover:text-primary transition-colors"
            >
              Términos y Condiciones
            </a>
            <span className="text-[#e7edf3]">|</span>
            <a 
              href="/privacidad" 
              className="hover:text-primary transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;