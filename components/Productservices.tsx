import React from 'react';
import ScrollReveal from './ScrollReveal';

const ProductServices: React.FC = () => {
  return (
    <section className="bg-white py-24" id="servicios-detalle">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-16">
          
          {/* Header */}
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Nuestros Servicios</h2>
              <h1 className="text-[#0d141b] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Soluciones de{' '}
                <span className="gradient-text bg-gradient-to-r from-[#4dc3ff] via-[#00aaff] to-[#0066cc] bg-clip-text text-transparent">
                  Data Analytics
                </span>
              </h1>
              <p className="text-[#4c739a] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
                Transformamos datos complejos en decisiones estratégicas con nuestra metodología probada de 4 fases.
              </p>
            </div>
          </ScrollReveal>

          {/* Servicios de Implementación */}
          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-br from-[#f0f7ff] to-white rounded-2xl p-8 lg:p-12 border border-[#e7edf3] shadow-lg">
              <h3 className="text-[#0d141b] text-2xl lg:text-3xl font-extrabold mb-6">Implementación de Analítica de Datos</h3>
              <p className="text-[#4c739a] text-lg mb-10 leading-relaxed">
                Proyecto integral que incluye las 4 fases de nuestra metodología para transformar sus datos en valor real para su negocio.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Fase 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e7edf3] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-4xl font-extrabold opacity-20">01</span>
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Etapa Inicial</p>
                      <h4 className="text-[#0d141b] text-lg font-bold">Diagnóstico</h4>
                    </div>
                  </div>
                  <p className="text-[#4c739a] leading-relaxed">
                    Identificamos dónde se pierden sus datos, qué información falta para decidir y cómo estructurar la arquitectura para crecer.
                  </p>
                </div>

                {/* Fase 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e7edf3] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-4xl font-extrabold opacity-20">02</span>
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Infraestructura</p>
                      <h4 className="text-[#0d141b] text-lg font-bold">Centralización</h4>
                    </div>
                  </div>
                  <p className="text-[#4c739a] leading-relaxed">
                    Unificamos todas sus fuentes en un solo Data Warehouse seguro. Su equipo trabaja con una única versión de la verdad.
                  </p>
                </div>

                {/* Fase 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e7edf3] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-4xl font-extrabold opacity-20">03</span>
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Optimización</p>
                      <h4 className="text-[#0d141b] text-lg font-bold">Automatización</h4>
                    </div>
                  </div>
                  <p className="text-[#4c739a] leading-relaxed">
                    Eliminamos el trabajo manual. Los datos llegan limpios, transformados y listos — sin intervención humana.
                  </p>
                </div>

                {/* Fase 4 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e7edf3] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-4xl font-extrabold opacity-20">04</span>
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest">Descubrimiento</p>
                      <h4 className="text-[#0d141b] text-lg font-bold">Visualización</h4>
                    </div>
                  </div>
                  <p className="text-[#4c739a] leading-relaxed">
                    Sus directivos ven en tiempo real lo que pasa en el negocio. Dashboards que responden preguntas antes de que las hagan.
                  </p>
                </div>
              </div>

              {/* Tecnologías */}
              <div className="border-t border-[#e7edf3] pt-6">
                <p className="text-[#4c739a] text-sm mb-4 font-semibold">Tecnologías que utilizamos:</p>
                <div className="flex flex-wrap gap-3">
                  {['BigQuery', 'Snowflake', 'Azure ADF', 'Microsoft Fabric', 'Fivetran', 'dbt', 'Python', 'Airflow', 'n8n', 'Prefect', 'Power BI', 'Looker', 'Tableau', 'Superset'].map((tech) => (
                    <span key={tech} className="bg-white border border-[#e7edf3] text-[#0d141b] text-sm px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Servicios de Mantenimiento */}
          <ScrollReveal delay={150}>
            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-8 lg:p-12 border border-[#e7edf3] shadow-lg">
              <h3 className="text-[#0d141b] text-2xl lg:text-3xl font-extrabold mb-6">Soporte y Mantenimiento Mensual</h3>
              <p className="text-[#4c739a] text-lg mb-10 leading-relaxed">
                Mantenga sus soluciones de datos funcionando de manera óptima con nuestro soporte continuo.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Monitoreo continuo de pipelines de datos',
                  'Actualizaciones y mejoras de dashboards',
                  'Soporte técnico prioritario',
                  'Resolución de incidencias',
                  'Optimización de consultas y reportes',
                  'Capacitación y documentación'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-light to-primary mt-2 shrink-0"></div>
                    <p className="text-[#4c739a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="text-center">
              <a
                href="/precios"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-lighter via-primary-light to-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:opacity-95"
              >
                Ver Precios
              </a>
              <p className="text-[#4c739a] mt-6">
                ¿Tienes dudas?{' '}
                <a href="/#contacto" className="text-primary font-semibold hover:underline">
                  Contáctanos
                </a>
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

export default ProductServices;