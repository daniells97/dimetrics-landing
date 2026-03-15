import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const fechaActualizacion = new Date().toLocaleDateString('es-CO', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="bg-white py-24" id="privacidad">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="text-center mb-8">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Legal</h2>
            <h1 className="text-[#0d141b] text-4xl lg:text-5xl font-extrabold leading-tight">
              Política de Privacidad
            </h1>
            <p className="text-[#4c739a] text-sm mt-4 italic">
              Última actualización: {fechaActualizacion}
            </p>
          </div>

          <div className="flex flex-col gap-8 text-[#4c739a] text-lg leading-relaxed">
            
            {/* Introducción */}
            <div>
              <p>
                En <strong>DIMETRICS</strong>, operado por Daniel López Suárez, nos comprometemos a proteger la privacidad 
                de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos 
                su información personal, en cumplimiento con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.
              </p>
            </div>

            {/* 1. Responsable del Tratamiento */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">1. Responsable del Tratamiento</h3>
              <ul className="space-y-2">
                <li><strong>Responsable:</strong> Daniel López Suárez</li>
                <li><strong>Domicilio:</strong> Cali, Colombia</li>
                <li><strong>Correo electrónico:</strong> info@dimetrics.com.co</li>
              </ul>
            </div>

            {/* 2. Datos que Recopilamos */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">2. Datos que Recopilamos</h3>
              <p>
                Podemos recopilar los siguientes tipos de información personal: nombre completo, dirección de correo 
                electrónico, número de teléfono, nombre de empresa, cargo, información de pago para procesamiento de 
                transacciones, y datos técnicos como dirección IP, tipo de navegador y páginas visitadas.
              </p>
            </div>

            {/* 3. Finalidad del Tratamiento */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">3. Finalidad del Tratamiento</h3>
              <p className="mb-3">Utilizamos su información para:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Prestación de servicios de consultoría contratados</li>
                <li>Comunicación sobre proyectos y servicios</li>
                <li>Envío de información relevante sobre nuestros servicios (con su consentimiento)</li>
                <li>Procesamiento de pagos y facturación</li>
                <li>Cumplimiento de obligaciones legales y fiscales</li>
                <li>Mejora de nuestro sitio web y servicios</li>
              </ul>
            </div>

            {/* 4. Derechos del Titular */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">4. Derechos del Titular</h3>
              <p className="mb-3">De acuerdo con la legislación colombiana, usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Conocer, actualizar y rectificar sus datos personales</li>
                <li>Solicitar prueba de la autorización otorgada</li>
                <li>Ser informado sobre el uso de sus datos</li>
                <li>Revocar la autorización y/o solicitar la supresión de datos</li>
                <li>Acceder de forma gratuita a sus datos personales</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
              </ul>
            </div>

            {/* 5. Seguridad de la Información */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">5. Seguridad de la Información</h3>
              <p>
                Implementamos medidas técnicas, humanas y administrativas para proteger su información personal contra 
                acceso no autorizado, pérdida, alteración o destrucción. Los pagos son procesados a través de plataformas 
                seguras certificadas que cumplen con estándares internacionales de seguridad.
              </p>
            </div>

            {/* 6. Transferencia de Datos */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">6. Transferencia de Datos</h3>
              <p>
                Sus datos podrán ser transferidos a terceros proveedores de servicios (como procesadores de pago) únicamente 
                cuando sea necesario para la prestación de nuestros servicios. Estos terceros están obligados a mantener la 
                confidencialidad y seguridad de sus datos.
              </p>
            </div>

            {/* 7. Uso de Cookies */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">7. Uso de Cookies</h3>
              <p>
                Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario, analizar el tráfico del 
                sitio y personalizar contenido. Puede configurar su navegador para rechazar cookies, aunque esto podría 
                afectar la funcionalidad del sitio.
              </p>
            </div>

            {/* 8. Conservación de Datos */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">8. Conservación de Datos</h3>
              <p>
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas 
                y las obligaciones legales aplicables. Una vez finalizada la relación comercial, los datos serán eliminados 
                o anonimizados, salvo obligación legal de conservación.
              </p>
            </div>

            {/* 9. Modificaciones */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">9. Modificaciones a esta Política</h3>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad. Cualquier cambio será publicado en 
                esta página con la fecha de actualización. Le recomendamos revisar periódicamente esta política.
              </p>
            </div>

            {/* 10. Contacto */}
            <div>
              <h3 className="text-[#0d141b] text-xl font-bold mb-3">10. Contacto para Ejercer sus Derechos</h3>
              <p className="mb-4">
                Para ejercer sus derechos como titular de datos personales o para cualquier consulta relacionada con 
                esta política, puede contactarnos a:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> contacto@dimetrics.com.co</li>
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

export default PrivacyPolicy;