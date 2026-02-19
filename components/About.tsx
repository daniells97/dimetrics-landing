
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-24 border-y border-[#e7edf3]" id="nosotros">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl aspect-video bg-center bg-cover" 
            style={{ 
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo1_Tnf9HeO3nGpe7tX1T8K8zYW4mFJChtakOIQrF1huoN1Ztx-Wr5O1ArKlLOhkXG6wTujzJAuflEEhtvGDm97MFlo0JFv1dHYeT8sG2ILpGeJw8GDTG7tAEww2gP-qXKUbzGXmjxZO3m2eflAYlpGUjGDGs8aEQjrdqKildIlrpOYJO-H5L6ZRAUxyY-RtHBAgYPe-HKFol_gvFAOKZDg9HTWweV7qhXrMcl-6x_cYOWvjN9WPvuCji3HjED98zs6NnuZyzj5T93")' 
            }}
          >
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Quiénes Somos</h2>
            <h3 className="text-[#0d141b] text-4xl lg:text-5xl font-extrabold leading-tight">
              Generamos confianza a través de la claridad
            </h3>
            <p className="text-[#4c739a] text-lg leading-relaxed">
              En <strong>dimetrics.com.co</strong>, somos un equipo multidisciplinario de analistas, diseñadores y estrategas. Creemos que los datos solo tienen valor cuando se pueden comunicar de forma efectiva.
            </p>
            <p className="text-[#4c739a] text-lg leading-relaxed">
              Nuestra misión es servir de puente entre la complejidad técnica y el crecimiento estratégico de su negocio, apoyando la toma de decisiones informada con un enfoque humano y narrativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
