import React, { useState } from 'react';

const CONTACT_EMAIL = 'daniel.lopez@dimetrics.com.co';
const FORMSPREE_ID = (import.meta as unknown as { env: { VITE_FORMSPREE_ID?: string } }).env?.VITE_FORMSPREE_ID;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white" id="contacto">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">Contacto</h2>
            <h3 className="text-[#0d141b] text-4xl font-extrabold mb-8">¿Listo para contar la historia de tus datos?</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-bold text-[#0d141b]">Nombre</label>
                  <input
                    id="contact-name"
                    name="name"
                    className="rounded-lg border border-[#cfdbe7] bg-background-light p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Tu nombre"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-bold text-[#0d141b]">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    className="rounded-lg border border-[#cfdbe7] bg-background-light p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="tu@email.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={status === 'sending'}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-sm font-bold text-[#0d141b]">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="rounded-lg border border-[#cfdbe7] bg-background-light p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[120px] resize-y"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              {status === 'success' && (
                <p className="text-primary font-semibold text-sm">Gracias por tu mensaje. Te responderemos pronto a {CONTACT_EMAIL}.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm">No se pudo enviar. Configura VITE_FORMSPREE_ID en .env.local (ver README) o intenta de nuevo.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-10 lg:pl-10">
            <div className="flex flex-col gap-8">
              <h4 className="text-xl font-bold text-[#0d141b]">Información de Contacto</h4>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                <div>
                  <p className="font-bold text-[#0d141b]">Escríbenos</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4c739a] hover:text-primary transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <div>
                  <p className="font-bold text-[#0d141b]">Ubicación</p>
                  <p className="text-[#4c739a]">Cali, Colombia</p>
                </div>
              </div>
            </div>
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#e7edf3] bg-[#e7edf3]">
              <iframe
                title="Mapa Cali, Colombia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3953162!2d-76.5589!3d3.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae4fb5!2sCali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses!2ses!4v1635000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
