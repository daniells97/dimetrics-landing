import React from 'react';
import ScrollReveal from './ScrollReveal';

const RefundPolicy: React.FC = () => {
  const fechaActualizacion = new Date().toLocaleDateString('es-CO', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="bg-white py-24" id="reembolsos">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-10">
          
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-4">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Legal</h2>
              <h1 className="text-[#0d141b] text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Política de{' '}
                <span className="gradient-text bg-gradient-to-r from-[#4dc3ff] via-[#00aaff] to-[#0066cc] bg-clip-text text-transparent">
                  Reembolsos
                </span>
              </h1>
              <p className="text-[#4c739a] text-sm mt-4 italic">
                Última actualización: {fechaActualizacion}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-8 text-[#4c739a] text-lg leading-relaxed">
              
              {/* Introducción */}
              <div className="bg-gradient-to-br from-[#f0f7ff] to-white rounded-2xl p-6 lg:p-8 border border-[#e7edf3]">
                <p>
                  En <strong className="text-[#0d141b]">DIMETRICS</strong> nos comprometemos con la satisfacción de nuestros clientes. Esta política 
                  describe las condiciones bajo las cuales se pueden solicitar reembolsos por nuestros servicios.
                </p>
              </div>

              {/* 1. Servicios de Implementación */}
              <div>
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">1. Proyectos de Implementación</h3>
                <p className="mb-4">
                  Para proyectos de implementación de analítica de datos (diagnóstico, centralización, automatización y visualización):
                </p>
                <ul className="space-y-3 ml-1">
                  {[
                    { bold: 'Antes del inicio:', text: 'Reembolso del 100% si se cancela antes de comenzar el proyecto.' },
                    { bold: 'Durante la fase de diagnóstico:', text: 'Reembolso del 75% del monto total menos los costos incurridos.' },
                    { bold: 'Durante fases posteriores:', text: 'Reembolso proporcional según el trabajo no ejecutado, a evaluar caso por caso.' },
                    { bold: 'Proyecto completado:', text: 'No aplican reembolsos una vez entregado y aceptado el proyecto.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <p><strong className="text-[#0d141b]">{item.bold}</strong> {item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Planes de Mantenimiento */}
              <div>
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">2. Planes de Soporte y Mantenimiento Mensual</h3>
                <p className="mb-4">
                  Para suscripciones mensuales de soporte y mantenimiento:
                </p>
                <ul className="space-y-3 ml-1">
                  {[
                    { bold: 'Primeros 7 días:', text: 'Si no está satisfecho con el servicio dentro de los primeros 7 días del primer mes, puede solicitar un reembolso completo de ese mes.' },
                    { bold: 'Cancelación:', text: 'Puede cancelar su suscripción en cualquier momento. La cancelación será efectiva al final del período de facturación actual.' },
                    { bold: 'Sin reembolsos parciales:', text: 'No se realizan reembolsos por días no utilizados dentro de un período de facturación ya iniciado.' },
                    { bold: 'Notificación:', text: 'Las cancelaciones deben notificarse con al menos 15 días de anticipación al próximo ciclo de facturación.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <p><strong className="text-[#0d141b]">{item.bold}</strong> {item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Proceso de Solicitud */}
              <div>
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">3. Proceso de Solicitud de Reembolso</h3>
                <p className="mb-4">
                  Para solicitar un reembolso:
                </p>
                <ol className="space-y-3 ml-1">
                  {[
                    'Envíe un correo electrónico a contacto@dimetrics.com.co con el asunto "Solicitud de Reembolso".',
                    'Incluya su nombre, número de factura o referencia del servicio, y el motivo de la solicitud.',
                    'Nuestro equipo revisará su solicitud dentro de 5 días hábiles.',
                    'Si se aprueba, el reembolso se procesará dentro de 10 días hábiles al método de pago original.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0">{index + 1}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 4. Excepciones */}
              <div>
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">4. Excepciones</h3>
                <p className="mb-4">
                  No se realizarán reembolsos en los siguientes casos:
                </p>
                <ul className="space-y-3 ml-1">
                  {[
                    'Incumplimiento por parte del cliente de las obligaciones acordadas (entrega de información, accesos, retroalimentación).',
                    'Cambios de alcance solicitados por el cliente que hayan sido ejecutados.',
                    'Servicios completados y aceptados por el cliente.',
                    'Solicitudes realizadas después de 30 días de la fecha de facturación.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Disputas */}
              <div>
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">5. Resolución de Disputas</h3>
                <p>
                  Si no está de acuerdo con la decisión sobre su solicitud de reembolso, puede solicitar una revisión 
                  adicional contactándonos. Nos comprometemos a resolver cualquier disputa de manera justa y transparente. 
                  En caso de no llegar a un acuerdo, las partes se someterán a la jurisdicción de los tribunales de Cali, Colombia.
                </p>
              </div>

              {/* 6. Garantía de Satisfacción */}
              <div className="bg-gradient-to-br from-[#f0f7ff] to-white rounded-2xl p-6 lg:p-8 border border-[#e7edf3]">
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">6. Nuestro Compromiso</h3>
                <p>
                  En DIMETRICS trabajamos para que cada cliente obtenga valor real de nuestros servicios. Si en algún 
                  momento no está satisfecho, le invitamos a contactarnos primero para buscar una solución. Muchas 
                  situaciones pueden resolverse con ajustes en el servicio o alcance sin necesidad de un reembolso.
                </p>
              </div>

              {/* 7. Contacto */}
              <div>
                <h3 className="text-[#0d141b] text-xl font-bold mb-4">7. Contacto</h3>
                <p className="mb-4">
                  Para cualquier consulta relacionada con reembolsos:
                </p>
                <div className="bg-[#f8f9fa] rounded-xl p-6 space-y-2">
                  <p><strong className="text-[#0d141b]">Email:</strong> contacto@dimetrics.com.co</p>
                  <p><strong className="text-[#0d141b]">Sitio web:</strong> www.dimetrics.com.co</p>
                  <p><strong className="text-[#0d141b]">Ubicación:</strong> Cali, Colombia</p>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Botón volver */}
          <div className="text-center mt-4">
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

export default RefundPolicy;