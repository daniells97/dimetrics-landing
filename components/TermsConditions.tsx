import React from 'react';
 
const TermsConditions: React.FC = () => {
  const fechaActualizacion = new Date().toLocaleDateString('es-CO', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
 
  return (
    <section className="bg-white py-24" id="terminos">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="text-center mb-8">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Legal</h2>
            <h1 className="text-[#0d141b] text-4xl lg:text-5xl font-extrabold leading-tight">
              Términos y Condiciones
            </h1>
            <p className="text-[#4c739a] text-sm mt-4 italic">
              Última actualización: {fechaActualizacion}
            </p>
          </div>
 
          <div className="flex flex-col gap-8 text-[#4c739a] text-lg leading-relaxed">
            
            {/* 1. Información General */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">1. Información General</h3>
              <p>
                El presente sitio web <strong>www.dimetrics.com.co</strong> (en adelante, el "Sitio") es operado por 
                Daniel López Suárez, persona natural con domicilio en Cali, Colombia. Al acceder y utilizar este Sitio, 
                usted acepta estos Términos y Condiciones en su totalidad.
              </p>
            </div>
 
            {/* 2. Servicios */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">2. Servicios Ofrecidos</h3>
              <p>
                DIMETRICS ofrece servicios de consultoría en Data Analytics & Storytelling, incluyendo pero no limitado a: 
                diagnóstico de datos, centralización de información, automatización de procesos y visualización de datos 
                mediante dashboards y reportes.
              </p>
            </div>
 
            {/* 3. Uso del Sitio */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">3. Uso del Sitio</h3>
              <p>
                El usuario se compromete a utilizar el Sitio de conformidad con la ley, la moral, las buenas costumbres 
                y el orden público. Queda prohibido el uso del Sitio con fines ilícitos, lesivos de derechos de terceros, 
                o que puedan dañar, inutilizar o deteriorar el Sitio.
              </p>
            </div>
 
            {/* 4. Propiedad Intelectual */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">4. Propiedad Intelectual</h3>
              <p>
                Todos los contenidos del Sitio, incluyendo textos, gráficos, logotipos, imágenes, software y demás elementos, 
                son propiedad de Daniel López Suárez o de sus respectivos titulares, y están protegidos por las leyes de 
                propiedad intelectual aplicables en Colombia.
              </p>
            </div>
 
            {/* 5. Contratación de Servicios */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">5. Contratación de Servicios</h3>
              <p>
                La contratación de servicios de consultoría se realizará mediante acuerdo escrito separado que especificará 
                el alcance, plazos, entregables y condiciones de pago. Los precios y planes de suscripción estarán sujetos 
                a las condiciones vigentes al momento de la contratación.
              </p>
            </div>
 
            {/* 6. Pagos y Facturación */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">6. Pagos y Facturación</h3>
              <p>
                Los pagos por servicios recurrentes (mantenimiento, suscripciones) se procesarán de forma automática según 
                la periodicidad acordada. El cliente autoriza el cobro recurrente al proporcionar su información de pago. 
                Las cancelaciones deben notificarse con al menos 15 días de anticipación al próximo ciclo de facturación.
              </p>
            </div>
 
            {/* 7. Limitación de Responsabilidad */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">7. Limitación de Responsabilidad</h3>
              <p>
                DIMETRICS no será responsable por daños indirectos, incidentales o consecuentes derivados del uso del Sitio 
                o de los servicios contratados. La responsabilidad máxima estará limitada al monto efectivamente pagado por 
                el cliente en los últimos 12 meses.
              </p>
            </div>
 
            {/* 8. Confidencialidad */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">8. Confidencialidad</h3>
              <p>
                Toda información compartida por el cliente en el marco de la prestación de servicios será tratada de manera 
                confidencial. DIMETRICS se compromete a no divulgar, compartir o utilizar dicha información para fines 
                distintos a los acordados.
              </p>
            </div>
 
            {/* 9. Modificaciones */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">9. Modificaciones</h3>
              <p>
                DIMETRICS se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las 
                modificaciones entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio después 
                de dichas modificaciones constituye aceptación de los nuevos términos.
              </p>
            </div>
 
            {/* 10. Ley Aplicable */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">10. Ley Aplicable y Jurisdicción</h3>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Para cualquier controversia 
                derivada de estos términos, las partes se someten a la jurisdicción de los tribunales de Cali, Colombia.
              </p>
            </div>
 
            {/* 11. Contacto */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">11. Contacto</h3>
              <p className="mb-4">
                Para cualquier consulta relacionada con estos Términos y Condiciones, puede contactarnos a través de:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> info@dimetrics.com.co</li>
                <li><strong>Sitio web:</strong> www.dimetrics.com.co</li>
                <li><strong>Ubicación:</strong> Cali, Colombia</li>
              </ul>
            </div>
 
          </div>
 
          {/* Botón volver */}
          <div className="mt-8 text-center">
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
 
export default TermsConditions;