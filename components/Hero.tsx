import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-32 pb-12 sm:pb-16 lg:pt-44 lg:pb-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="flex flex-col gap-6 sm:gap-8">
          <ScrollReveal>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="text-[#0d141b] text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Transformamos datos complejos en{' '}
                <span className="gradient-text bg-gradient-to-r from-[#4dc3ff] via-[#00aaff] to-[#0066cc] bg-clip-text text-transparent">
                  historias claras
                </span>
              </h1>
              <p className="text-[#4c739a] text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-[540px]">
                Conectamos los datos con el negocio para impulsar decisiones estratégicas basadas en evidencia.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-lighter via-primary-light to-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:opacity-95"
              >
                Empezar ahora
              </a>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={150}>
          <div className="relative order-first lg:order-none">
            <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary-lighter/20 via-primary-light/15 to-transparent rounded-full absolute -top-4 -right-4 blur-3xl opacity-60" />
            <div
              className="w-full aspect-[4/3] sm:aspect-square max-h-[380px] sm:max-h-[420px] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl relative overflow-hidden border border-[#e7edf3]"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCwvPkTsqFJ1ArtiYmH4cgqAcLCoPFsdpevPPT3JqHwwjhxN8OXtV1BDZfQ9P2QDvBtyy-G6Iw3G8i2zkVQnbL2hHEZqwtcMzcjxWsmBxwnw1cT-yFsOTMfs4B4WrJPfgUXF39kE19_RtHckPnewirE7XSxw7RUEtN2nULz3wT6FlQj1hC8yK47f2US43GFQ5zYtBa-ff2KfOhJEI8REfBANvkUXfdfLdQK5U9k2iRyfeyqz9SHT7VUHKi6LJ-UqP0on9idXDTdV3X")',
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
