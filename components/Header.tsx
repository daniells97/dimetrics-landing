import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#nosotros', label: 'Quiénes Somos' },
    { href: '#servicios', label: 'Qué Hacemos' },
    { href: '#contacto', label: 'Contáctenos' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#e7edf3]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Dimetrics inicio">
          <img
            src="/logo.png"
            alt="Dimetrics"
            className="h-12 sm:h-14 w-auto object-contain"
            width={160}
            height={56}
            loading="eager"
          />
          <span className="text-[#0d141b] text-xl sm:text-2xl font-extrabold tracking-tight uppercase">
            DIMETRICS
          </span>
        </a>
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#0d141b] text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex flex-1 flex justify-end w-full h-full">
          <a
            href="#contacto"
            className="bg-primary hover:bg-primary/90 text-white px-10 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20"
          >
            Empezar ahora
          </a>
        </div>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[#0d141b] hover:bg-[#e7edf3]"
          aria-label="Menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e7edf3] bg-white px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="py-3 font-semibold" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="py-3 font-bold text-primary" onClick={() => setMobileOpen(false)}>
            Empezar ahora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
