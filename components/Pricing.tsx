import React from 'react';
import ScrollReveal from './ScrollReveal';

const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-24" id="precios">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-16">
          
          {/* Header */}
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Precios</h2>
              <h1 className="text-[#0d141b] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Planes{' '}
                <span className="gradient-text bg-gradient-to-r from-[#4dc3ff] via-[#00aaff] to-[#0066cc] bg-clip-text text-transparent">
                  transparentes
                </span>{' '}
                y flexibles
              </h1>
              <p className="text-[#4c739a] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                Soluciones adaptadas a las necesidades de su negocio, desde la implementación hasta el soporte continuo.
              </p>
            </div>
          </ScrollReveal>

          {/* Implementación */}
          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-[#0d141b] to-[#1a2632] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                <div className="flex-1">
                  <span className="text-primary text-sm font-bold uppercase tracking-widest">Proyecto</span>
                  <h3 className="text-3xl lg:text-4xl font-extrabold mt-2 mb-6">Implementación de Analítica</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Proyecto integral que incluye diagnóstico, centralización de datos, automatización de pipelines y creación de dashboards personalizados.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Diagnóstico completo de fuentes de datos',
                      'Data Warehouse centralizado',
                      'Pipelines de datos automatizados',
                      'Dashboards ejecutivos personalizados',
                      'Capacitación del equipo',
                      'Documentación técnica completa'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-center bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-gray-400 text-sm mb-2">Desde</p>
                  <p className="text-5xl lg:text-6xl font-extrabold mb-2">$1,000</p>
                  <p className="text-gray-400 mb-8">USD / proyecto</p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-primary-lighter via-primary-light to-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:opacity-95 w-full"
                  >
                    Solicitar cotización
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Planes de Mantenimiento */}
          <ScrollReveal delay={150}>
            <div>
              <h3 className="text-[#0d141b] text-2xl lg:text-3xl font-extrabold text-center mb-10">Planes de Soporte Mensual</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Plan Básico */}
                <div className="bg-white rounded-2xl p-8 border-2 border-[#e7edf3] hover:border-primary/30 transition-all hover:shadow-lg">
                  <h4 className="text-[#0d141b] text-xl font-bold mb-2">Básico</h4>
                  <p className="text-[#4c739a] text-sm mb-6">Para soluciones pequeñas</p>
                  <p className="text-4xl lg:text-5xl font-extrabold text-[#0d141b] mb-1">$50</p>
                  <p className="text-[#4c739a] text-sm mb-8">USD / mes</p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Monitoreo de pipelines',
                      'Soporte por email',
                      'Resolución de incidencias',
                      'Tiempo de respuesta: 48h'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#4c739a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/#contacto"
                    className="block text-center bg-[#f0f7ff] hover:bg-[#e0efff] text-primary font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    Comenzar
                  </a>
                </div>

                {/* Plan Pro */}
                <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-xl relative transform md:-translate-y-4">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-light to-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Popular
                  </span>
                  <h4 className="text-[#0d141b] text-xl font-bold mb-2">Pro</h4>
                  <p className="text-[#4c739a] text-sm mb-6">Para empresas en crecimiento</p>
                  <p className="text-4xl lg:text-5xl font-extrabold text-[#0d141b] mb-1">$150</p>
                  <p className="text-[#4c739a] text-sm mb-8">USD / mes</p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Todo del plan Básico',
                      'Actualizaciones de dashboards',
                      'Soporte prioritario (email + chat)',
                      'Tiempo de respuesta: 24h',
                      '4 horas de desarrollo/mes'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#4c739a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/#contacto"
                    className="block text-center bg-gradient-to-r from-primary-lighter via-primary-light to-primary text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
                  >
                    Comenzar
                  </a>
                </div>

                {/* Plan Enterprise */}
                <div className="bg-white rounded-2xl p-8 border-2 border-[#e7edf3] hover:border-primary/30 transition-all hover:shadow-lg">
                  <h4 className="text-[#0d141b] text-xl font-bold mb-2">Enterprise</h4>
                  <p className="text-[#4c739a] text-sm mb-6">Para operaciones críticas</p>
                  <p className="text-4xl lg:text-5xl font-extrabold text-[#0d141b] mb-1">$350</p>
                  <p className="text-[#4c739a] text-sm mb-8">USD / mes</p>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      'Todo del plan Pro',
                      'Soporte 24/7',
                      'Tiempo de respuesta: 4h',
                      '12 horas de desarrollo/mes',
                      'Reuniones mensuales de revisión'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#4c739a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/#contacto"
                    className="block text-center bg-[#f0f7ff] hover:bg-[#e0efff] text-primary font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    Comenzar
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={200}>
            <div className="text-center bg-gradient-to-br from-[#f0f7ff] to-white rounded-2xl p-8 lg:p-12 border border-[#e7edf3]">
              <p className="text-[#4c739a] text-lg">
                ¿Necesitas un plan personalizado?{' '}
                <a href="/#contacto" className="text-primary font-semibold hover:underline">
                  Contáctanos
                </a>{' '}
                y diseñamos una solución a tu medida.
              </p>
            </div>
          </ScrollReveal>

          {/* Botón volver */}
          <div className="text-center">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;